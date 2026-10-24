/**
 * Projeto integrador POO: reservas de laboratórios.
 * Node.js >= 22; módulos ECMAScript; nenhum pacote externo.
 * Horários são minutos desde 00:00, com intervalos [inicio, fim).
 */

/** Entidade com identidade e capacidade imutáveis. */
export class Laboratorio {
  #id;
  #capacidade;

  constructor(id, capacidade) {
    if (typeof id !== 'string' || !id.trim()) throw new TypeError('Identificador de laboratório inválido');
    if (!Number.isInteger(capacidade) || capacidade <= 0) throw new RangeError('Capacidade deve ser positiva');
    this.#id = id;
    this.#capacidade = capacidade;
  }

  get id() { return this.#id; }
  get capacidade() { return this.#capacidade; }

  comporta(qtd) {
    return Number.isInteger(qtd) && qtd > 0 && qtd <= this.#capacidade;
  }
}

/** Entidade responsável por sua própria transição de estado. */
export class Reserva {
  #id;
  #salaId;
  #inicio;
  #fim;
  #participantes;
  #estado = 'ativa';

  constructor({ id, salaId, inicio, fim, participantes }) {
    if (typeof id !== 'string' || !id.trim()) throw new TypeError('Identificador de reserva inválido');
    if (typeof salaId !== 'string' || !salaId.trim()) throw new TypeError('Laboratório obrigatório');
    if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
        inicio < 0 || fim > 1440 || inicio >= fim) {
      throw new RangeError('Intervalo inválido: use minutos de 0 a 1440, com inicio < fim');
    }
    if (!Number.isInteger(participantes) || participantes <= 0) {
      throw new RangeError('Quantidade de participantes inválida');
    }
    this.#id = id;
    this.#salaId = salaId;
    this.#inicio = inicio;
    this.#fim = fim;
    this.#participantes = participantes;
  }

  get id() { return this.#id; }
  get salaId() { return this.#salaId; }
  get inicio() { return this.#inicio; }
  get fim() { return this.#fim; }
  get participantes() { return this.#participantes; }
  get estado() { return this.#estado; }

  conflitoCom(outra) {
    return this.#estado === 'ativa' && outra.estado === 'ativa' &&
      this.#salaId === outra.salaId &&
      this.#inicio < outra.fim && this.#fim > outra.inicio;
  }

  cancelar() {
    if (this.#estado !== 'ativa') return false;
    this.#estado = 'cancelada';
    return true;
  }

  resumo() {
    return Object.freeze({
      id: this.#id, salaId: this.#salaId, inicio: this.#inicio,
      fim: this.#fim, participantes: this.#participantes, estado: this.#estado
    });
  }
}

/** Adaptador em memória: objeto com métodos de repositório. */
export class RepositorioMemoria {
  #laboratorios = new Map();
  #reservas = new Map();

  adicionarLaboratorio(lab) {
    if (!(lab instanceof Laboratorio)) throw new TypeError('Laboratório esperado');
    if (this.#laboratorios.has(lab.id)) return false;
    this.#laboratorios.set(lab.id, lab);
    return true;
  }

  buscarLaboratorio(id) { return this.#laboratorios.get(id) ?? null; }
  buscarReserva(id) { return this.#reservas.get(id) ?? null; }

  salvarReserva(reserva) {
    if (!(reserva instanceof Reserva)) throw new TypeError('Reserva esperada');
    if (this.#reservas.has(reserva.id)) return false;
    this.#reservas.set(reserva.id, reserva);
    return true;
  }

  listarReservasDaSala(salaId) {
    return [...this.#reservas.values()].filter(r => r.salaId === salaId);
  }
}

/** Subject do padrão Observer: inscrição, publicação e cancelamento. */
export class Eventos {
  #assinantes = new Set();

  inscrever(callback) {
    if (typeof callback !== 'function') throw new TypeError('Callback esperado');
    this.#assinantes.add(callback);
    return () => this.#assinantes.delete(callback);
  }

  publicar(evento) {
    for (const callback of [...this.#assinantes]) callback(Object.freeze({ ...evento }));
  }

  get inscritos() { return this.#assinantes.size; }
}

/** Coordena regras de negócio sem criar diretamente os adaptadores. */
export class ServicoReservas {
  #repo;
  #eventos;

  constructor(repo, eventos = new Eventos()) {
    if (typeof repo?.buscarLaboratorio !== 'function' ||
        typeof repo?.buscarReserva !== 'function' ||
        typeof repo?.salvarReserva !== 'function' ||
        typeof repo?.listarReservasDaSala !== 'function') {
      throw new TypeError('Repositório não implementa o contrato esperado');
    }
    if (typeof eventos?.publicar !== 'function') throw new TypeError('Publicador de eventos inválido');
    this.#repo = repo;
    this.#eventos = eventos;
  }

  reservar(entrada) {
    const reserva = new Reserva(entrada);
    const sala = this.#repo.buscarLaboratorio(reserva.salaId);
    if (!sala) return { ok: false, motivo: 'laboratorio_inexistente' };
    if (!sala.comporta(reserva.participantes)) return { ok: false, motivo: 'capacidade_excedida' };
    if (this.#repo.buscarReserva(reserva.id)) return { ok: false, motivo: 'id_duplicado' };
    if (this.#repo.listarReservasDaSala(reserva.salaId).some(r => r.conflitoCom(reserva))) {
      return { ok: false, motivo: 'conflito_de_horario' };
    }
    if (!this.#repo.salvarReserva(reserva)) return { ok: false, motivo: 'id_duplicado' };
    this.#eventos.publicar({ tipo: 'reserva_criada', id: reserva.id, salaId: reserva.salaId });
    return { ok: true, reserva: reserva.resumo() };
  }

  cancelar(id) {
    const reserva = this.#repo.buscarReserva(id);
    if (!reserva || !reserva.cancelar()) return false;
    this.#eventos.publicar({ tipo: 'reserva_cancelada', id, salaId: reserva.salaId });
    return true;
  }

  consultar(id) {
    return this.#repo.buscarReserva(id)?.resumo() ?? null;
  }
}
