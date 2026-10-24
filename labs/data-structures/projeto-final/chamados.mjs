/**
 * Projeto integrador: gestão de chamados usando Map, Set e um heap binário.
 * Node.js 22+, sem dependências externas.
 */
export class MinHeap {
  #values = [];
  #before;

  constructor(before = (a, b) => a < b) {
    this.#before = before;
  }

  get size() { return this.#values.length; }
  peek() { return this.#values[0]; }

  push(value) {
    const items = this.#values;
    items.push(value);
    let child = items.length - 1;
    while (child > 0) {
      const parent = Math.floor((child - 1) / 2);
      if (!this.#before(items[child], items[parent])) break;
      [items[child], items[parent]] = [items[parent], items[child]];
      child = parent;
    }
  }

  pop() {
    const items = this.#values;
    if (items.length === 0) return undefined;
    const root = items[0];
    const last = items.pop();
    if (items.length === 0) return root;
    items[0] = last;
    let index = 0;
    while (true) {
      const left = index * 2 + 1;
      const right = left + 1;
      let smallest = index;
      if (left < items.length && this.#before(items[left], items[smallest])) smallest = left;
      if (right < items.length && this.#before(items[right], items[smallest])) smallest = right;
      if (smallest === index) break;
      [items[index], items[smallest]] = [items[smallest], items[index]];
      index = smallest;
    }
    return root;
  }
}

// Menor número = maior prioridade. Empates respeitam ordem de chegada.
const beforeTicket = (a, b) =>
  a.priority < b.priority ||
  (a.priority === b.priority && a.sequence < b.sequence);

export class TicketDesk {
  #byId = new Map();
  #pending = new MinHeap(beforeTicket);
  #sequence = 0;

  open({ id, priority, tags = [] }) {
    if (typeof id !== 'string' || !id.trim()) throw new TypeError('Protocolo inválido');
    if (!Number.isInteger(priority) || priority < 1 || priority > 5) {
      throw new RangeError('Prioridade deve ser inteiro de 1 a 5');
    }
    if (!Array.isArray(tags) || !tags.every(item => typeof item === 'string')) {
      throw new TypeError('Tags inválidas');
    }
    if (this.#byId.has(id)) return false;

    const item = { id, priority, tags: new Set(tags), status: 'pendente' };
    this.#byId.set(id, item);
    this.#pending.push({ id, priority, sequence: this.#sequence++ });
    return true;
  }

  get(id) {
    const item = this.#byId.get(id);
    return item ? { id: item.id, priority: item.priority,
      tags: [...item.tags], status: item.status } : null;
  }

  serveNext() {
    // Cancelamentos não são removidos do meio do heap.
    // Entradas obsoletas são descartadas durante extrações posteriores.
    while (this.#pending.size > 0) {
      const next = this.#pending.pop();
      const item = this.#byId.get(next.id);
      if (!item || item.status !== 'pendente') continue;
      item.status = 'em atendimento';
      return this.get(item.id);
    }
    return null;
  }

  finish(id) {
    const item = this.#byId.get(id);
    if (!item || item.status !== 'em atendimento') return false;
    item.status = 'concluído';
    return true;
  }

  cancel(id) {
    const item = this.#byId.get(id);
    if (!item || item.status !== 'pendente') return false;
    item.status = 'cancelado';
    return true;
  }

  get total() { return this.#byId.size; }
  list() { return [...this.#byId.keys()].map(id => this.get(id)); }
}
