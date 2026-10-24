import test from 'node:test';
import assert from 'node:assert/strict';
import { Laboratorio, Reserva, RepositorioMemoria, Eventos, ServicoReservas } from './reservas.mjs';

function ambiente() {
  const repo = new RepositorioMemoria();
  repo.adicionarLaboratorio(new Laboratorio('LAB1', 24));
  repo.adicionarLaboratorio(new Laboratorio('LAB2', 12));
  const eventos = new Eventos();
  const servico = new ServicoReservas(repo, eventos);
  return { repo, eventos, servico };
}
const reserva = (id, salaId = 'LAB1', inicio = 8 * 60, fim = 10 * 60, participantes = 20) =>
  ({ id, salaId, inicio, fim, participantes });

test('Laboratorio valida identificação e capacidade', () => {
  assert.throws(() => new Laboratorio('', 10), TypeError);
  assert.throws(() => new Laboratorio('L', 0), RangeError);
  const lab = new Laboratorio('L', 10);
  assert.equal(lab.comporta(10), true);
  assert.equal(lab.comporta(11), false);
  assert.equal(lab.comporta(0), false);
});

test('Reserva rejeita horários invertidos, fora do dia e participantes inválidos', () => {
  assert.throws(() => new Reserva(reserva('A', 'LAB1', 10, 10)), RangeError);
  assert.throws(() => new Reserva(reserva('A', 'LAB1', -1, 20)), RangeError);
  assert.throws(() => new Reserva(reserva('A', 'LAB1', 0, 1441)), RangeError);
  assert.throws(() => new Reserva(reserva('A', 'LAB1', 5, 6, 0)), RangeError);
});

test('Primeira reserva válida é registrada e consultável', () => {
  const { servico } = ambiente();
  const result = servico.reservar(reserva('A'));
  assert.equal(result.ok, true);
  assert.equal(servico.consultar('A').estado, 'ativa');
  assert.equal(servico.consultar('A').salaId, 'LAB1');
});

test('Protocolo repetido é rejeitado', () => {
  const { servico } = ambiente();
  assert.equal(servico.reservar(reserva('A')).ok, true);
  assert.deepEqual(servico.reservar(reserva('A')), { ok: false, motivo: 'id_duplicado' });
});

test('Intervalos sobrepostos na mesma sala são bloqueados', () => {
  const { servico } = ambiente();
  servico.reservar(reserva('A', 'LAB1', 480, 600));
  const r = servico.reservar(reserva('B', 'LAB1', 540, 660));
  assert.deepEqual(r, { ok: false, motivo: 'conflito_de_horario' });
  assert.equal(servico.consultar('B'), null);
});

test('Intervalos adjacentes são permitidos: [480,600) e [600,720)', () => {
  const { servico } = ambiente();
  assert.equal(servico.reservar(reserva('A', 'LAB1', 480, 600)).ok, true);
  assert.equal(servico.reservar(reserva('B', 'LAB1', 600, 720)).ok, true);
});

test('Mesmo horário em laboratórios distintos é permitido', () => {
  const { servico } = ambiente();
  assert.equal(servico.reservar(reserva('A', 'LAB1', 480, 600, 10)).ok, true);
  assert.equal(servico.reservar(reserva('B', 'LAB2', 480, 600, 10)).ok, true);
});

test('Capacidade excedida é rejeitada mesmo com horário livre', () => {
  const { servico } = ambiente();
  assert.deepEqual(servico.reservar(reserva('A', 'LAB2', 480, 600, 20)),
    { ok: false, motivo: 'capacidade_excedida' });
});

test('Laboratório inexistente produz motivo explícito', () => {
  const { servico } = ambiente();
  assert.deepEqual(servico.reservar(reserva('A', 'INEXISTENTE')),
    { ok: false, motivo: 'laboratorio_inexistente' });
});

test('Cancelar libera horário e impede cancelamento repetido', () => {
  const { servico } = ambiente();
  servico.reservar(reserva('A'));
  assert.equal(servico.cancelar('A'), true);
  assert.equal(servico.cancelar('A'), false);
  assert.equal(servico.consultar('A').estado, 'cancelada');
  assert.equal(servico.reservar(reserva('B')).ok, true);
});

test('Cancelamento de reserva inexistente não modifica estado', () => {
  const { servico } = ambiente();
  assert.equal(servico.cancelar('A'), false);
  assert.equal(servico.consultar('A'), null);
});

test('Snapshot é imutável e não expõe propriedades privadas', () => {
  const { servico } = ambiente();
  servico.reservar(reserva('A'));
  const snap = servico.consultar('A');
  assert.equal(Object.isFrozen(snap), true);
  assert.throws(() => { snap.estado = 'cancelada'; }, TypeError);
  assert.equal(servico.consultar('A').estado, 'ativa');
});

test('Observer notifica criação e cancelamento exatamente uma vez', () => {
  const { eventos, servico } = ambiente();
  const recibos = [];
  const unsubscribe = eventos.inscrever(evento => recibos.push(evento.tipo));
  assert.equal(eventos.inscritos, 1);
  servico.reservar(reserva('A'));
  servico.cancelar('A');
  assert.deepEqual(recibos, ['reserva_criada', 'reserva_cancelada']);
  assert.equal(unsubscribe(), true);
  assert.equal(eventos.inscritos, 0);
});

test('Observer não dispara para operação rejeitada ou após unsubscribe', () => {
  const { eventos, servico } = ambiente();
  const recibos = [];
  const unsubscribe = eventos.inscrever(evento => recibos.push(evento.tipo));
  servico.reservar(reserva('A'));
  servico.reservar(reserva('B'));
  unsubscribe();
  servico.cancelar('A');
  assert.deepEqual(recibos, ['reserva_criada']);
});

test('Injeção de repositório pode usar fake contratual', () => {
  const sala = new Laboratorio('L', 10);
  const registros = new Map();
  const fakeRepo = {
    buscarLaboratorio: () => sala,
    buscarReserva: id => registros.get(id) ?? null,
    salvarReserva: r => { registros.set(r.id, r); return true; },
    listarReservasDaSala: () => [...registros.values()]
  };
  const fakeEventos = { publicar: () => {} };
  const servico = new ServicoReservas(fakeRepo, fakeEventos);
  assert.equal(servico.reservar(reserva('A', 'L', 1, 3, 4)).ok, true);
  assert.equal(servico.consultar('A').participantes, 4);
});

test('Colaboradores com contrato ausente são recusados', () => {
  assert.throws(() => new ServicoReservas({}), TypeError);
  assert.throws(() => new ServicoReservas(new RepositorioMemoria(), {}), TypeError);
  assert.throws(() => new Eventos().inscrever('não é função'), TypeError);
});

test('Consulta e repositório conservam identidade e não duplicam laboratório', () => {
  const { repo } = ambiente();
  assert.equal(repo.adicionarLaboratorio(new Laboratorio('LAB1', 100)), false);
  assert.equal(repo.buscarLaboratorio('LAB1').capacidade, 24);
  assert.equal(repo.buscarReserva('x'), null);
});
