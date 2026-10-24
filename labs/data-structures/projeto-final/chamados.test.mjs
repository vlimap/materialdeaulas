import test from 'node:test';
import assert from 'node:assert/strict';
import { MinHeap, TicketDesk } from './chamados.mjs';

test('heap vazio retorna undefined', () => {
  const h = new MinHeap();
  assert.equal(h.pop(), undefined);
  assert.equal(h.peek(), undefined);
});

test('heap extrai em ordem crescente, inclusive repetidos', () => {
  const h = new MinHeap();
  [5, 2, 9, 1, 4, 1].forEach(value => h.push(value));
  assert.equal(h.size, 6);
  assert.deepEqual(Array.from({ length: 6 }, () => h.pop()), [1, 1, 2, 4, 5, 9]);
  assert.equal(h.size, 0);
});

test('Map impede protocolo duplicado e Set elimina tags repetidas', () => {
  const desk = new TicketDesk();
  assert.equal(desk.open({ id: 'T01', priority: 2, tags: ['rede', 'rede', 'wifi'] }), true);
  assert.equal(desk.open({ id: 'T01', priority: 1 }), false);
  assert.equal(desk.total, 1);
  assert.deepEqual(desk.get('T01').tags, ['rede', 'wifi']);
});

test('ordem de atendimento respeita prioridade', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'normal', priority: 5 });
  desk.open({ id: 'critico', priority: 1 });
  assert.equal(desk.serveNext().id, 'critico');
  assert.equal(desk.serveNext().id, 'normal');
  assert.equal(desk.serveNext(), null);
});

test('empates são resolvidos pela chegada', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'primeiro', priority: 3 });
  desk.open({ id: 'segundo', priority: 3 });
  assert.equal(desk.serveNext().id, 'primeiro');
  assert.equal(desk.serveNext().id, 'segundo');
});

test('cancelamento anterior ao atendimento descarta item obsoleto', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'cancelado', priority: 1 });
  desk.open({ id: 'ativo', priority: 2 });
  assert.equal(desk.cancel('cancelado'), true);
  assert.equal(desk.serveNext().id, 'ativo');
  assert.equal(desk.serveNext(), null);
});

test('transições de estado são validadas', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'a', priority: 1 });
  assert.equal(desk.finish('a'), false);
  assert.equal(desk.serveNext().status, 'em atendimento');
  assert.equal(desk.cancel('a'), false);
  assert.equal(desk.finish('a'), true);
  assert.equal(desk.finish('a'), false);
  assert.equal(desk.get('a').status, 'concluído');
});

test('get retorna cópia das tags sem expor Set interno', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'a', priority: 1, tags: ['rede'] });
  const copy = desk.get('a');
  copy.tags.push('alteração indevida');
  assert.deepEqual(desk.get('a').tags, ['rede']);
});

test('entrada inválida rejeitada sem modificar dados', () => {
  const desk = new TicketDesk();
  assert.throws(() => desk.open({ id: '', priority: 1 }), TypeError);
  assert.throws(() => desk.open({ id: 'a', priority: 0 }), RangeError);
  assert.throws(() => desk.open({ id: 'a', priority: 1.5 }), RangeError);
  assert.throws(() => desk.open({ id: 'a', priority: 1, tags: [1] }), TypeError);
  assert.equal(desk.total, 0);
});

test('list não expõe status mutável', () => {
  const desk = new TicketDesk();
  desk.open({ id: 'a', priority: 2 });
  const values = desk.list();
  values[0].status = 'concluído';
  assert.equal(desk.get('a').status, 'pendente');
});
