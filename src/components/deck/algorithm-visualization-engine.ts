export type AlgorithmScenario =
  | 'walkthrough' | 'invariant' | 'complexity' | 'linear-search' | 'binary-search'
  | 'bubble-sort' | 'selection-sort' | 'insertion-sort'
  | 'merge-sort' | 'quick-sort' | 'factorial'
  | 'graph-bfs' | 'graph-dfs' | 'greedy' | 'dynamic-programming';

export type AlgorithmFrame = {
  cells: string[];
  active: number[];
  completed: number[];
  line: number;
  message: string;
  detail: string;
};

export type AlgorithmVisualization = {
  title: string;
  inputLabel: string;
  code: string[];
  frames: AlgorithmFrame[];
  answer: string;
  complexity: string;
  note: string;
};

const BASE = [5, 2, 4, 1, 3, 6];
const TARGETS = [8, 3, 6, 1, 4, 9];
const ADJACENCY = [[1, 2], [0, 3, 4], [0, 4], [1, 5], [1, 2, 5], [3, 4]];
const ABC = ['A', 'B', 'C', 'D', 'E', 'F'];
const cellLabels = (values: readonly (string | number)[]) => values.map(String);

export function createAlgorithmVisualization(scenario: AlgorithmScenario, input: number): AlgorithmVisualization {
  const n = Math.max(3, Math.min(6, Math.trunc(input)));
  const frames: AlgorithmFrame[] = [];
  const push = (cells: readonly (string | number)[], line: number, message: string, detail: string, active: number[] = [], completed: number[] = []) => {
    frames.push({ cells: cellLabels(cells), line, message, detail, active: [...active], completed: [...completed] });
  };
  const standard = (title: string, inputLabel: string, code: string[], answer: string, complexity: string, note: string): AlgorithmVisualization =>
    ({ title, inputLabel, code, frames, answer, complexity, note });

  switch (scenario) {
    case 'walkthrough':
    case 'invariant': {
      const values = [2, 4, 1, 5, 3, 6].slice(0, n);
      let total = 0;
      push(values, 0, 'Início: total = 0', 'O acumulador começa em zero.');
      for (let i = 0; i < values.length; i++) {
        total += values[i];
        push(values, 2, 'Soma parcial: ' + total, 'Somamos ' + values[i] + ' ao total. Já percorremos ' + (i + 1) + ' elementos.', [i], values.map((_, j) => j).filter(j => j <= i));
      }
      push(values, 4, 'Resultado = ' + total, scenario === 'invariant'
        ? 'Invariante confirmada: total é a soma dos elementos já visitados.'
        : 'Todos os elementos foram visitados exatamente uma vez.', [], values.map((_, i) => i));
      return standard(scenario === 'invariant' ? 'Invariante da soma' : 'Primeira execução por etapas', 'Quantidade de itens',
        ['total ← 0', 'PARA cada valor DA lista', '    total ← total + valor', 'FIM PARA', 'ESCREVER total'],
        String(total), 'O(n)', 'A soma visita cada elemento uma vez.');
    }
    case 'complexity': {
      const cells = Array.from({ length: n }, (_, i) => i + 1);
      push(cells, 0, 'Início', 'Compare o número de operações de um e dois laços.');
      for (let i = 0; i < n; i++) push(cells, 1, 'Linear: ' + (i + 1) + ' operações', 'Um comando por item.', [i]);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const count = i * n + j + 1;
        push(cells, 4, 'Quadrático: ' + count + ' operações', 'O laço interno percorre os ' + n + ' itens em cada volta do externo.', [i, j]);
      }
      return standard('Compare o crescimento', 'Tamanho n',
        ['PARA i DE 1 ATÉ n', '    executar', 'FIM PARA', 'PARA i DE 1 ATÉ n', '    PARA j DE 1 ATÉ n', '        executar', '    FIM PARA', 'FIM PARA'],
        n + ' contra ' + (n * n) + ' operações', 'O(n) × O(n²)', 'A comparação conta operações, não segundos de execução.');
    }
    case 'linear-search': {
      const target = n;
      push(TARGETS, 0, 'Alvo: ' + target, 'A busca linear começa na primeira posição.');
      const index = TARGETS.indexOf(target);
      for (let i = 0; i < (index < 0 ? TARGETS.length : index + 1); i++) {
        push(TARGETS, 2, 'Comparar ' + TARGETS[i] + ' com ' + target,
          TARGETS[i] === target ? 'Valor localizado no índice ' + i + '.' : 'Não corresponde: avance para a próxima posição.', [i], TARGETS.slice(0, i).map((_, j) => j));
      }
      const answer = index >= 0 ? 'Encontrado no índice ' + index : 'Valor não encontrado';
      push(TARGETS, 4, answer, 'Uma lista não ordenada pode exigir a leitura de todos os itens.', index >= 0 ? [index] : []);
      return standard('Busca linear', 'Valor procurado',
        ['LER alvo', 'PARA i DE 0 ATÉ tamanho-1', '    SE lista[i] = alvo ENTÃO', '        RETORNAR i', 'FIM PARA', 'RETORNAR não encontrado'],
        answer, 'O(n)', 'No pior caso, todos os n valores são comparados.');
    }
    case 'binary-search': {
      const numbers = [2, 4, 6, 8, 10, 12, 14];
      const target = n * 2;
      let lo = 0; let hi = numbers.length - 1; let found = -1;
      push(numbers, 0, 'Alvo: ' + target, 'A busca binária exige valores previamente ordenados.');
      while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        push(numbers, 2, 'Meio = ' + numbers[mid], 'Intervalo: índices ' + lo + ' a ' + hi + '.', [mid], numbers.map((_, i) => i).filter(i => i < lo || i > hi));
        if (numbers[mid] === target) { found = mid; break; }
        if (numbers[mid] < target) lo = mid + 1; else hi = mid - 1;
      }
      push(numbers, 6, found >= 0 ? 'Encontrado no índice ' + found : 'Não encontrado',
        'Cada comparação elimina aproximadamente metade da busca.', found >= 0 ? [found] : []);
      return standard('Busca binária', 'Alvo ÷ 2',
        ['inicio ← 0; fim ← tamanho - 1', 'ENQUANTO inicio <= fim', '    meio ← piso((inicio + fim)/2)', '    SE lista[meio] = alvo: RETORNAR meio', '    SE lista[meio] < alvo: inicio ← meio + 1', '    SENÃO: fim ← meio - 1', 'RETORNAR não encontrado'],
        found >= 0 ? 'Índice ' + found : 'Não encontrado', 'O(log n)', 'Pré-condição indispensável: lista ordenada.');
    }
    case 'bubble-sort':
    case 'selection-sort':
    case 'insertion-sort':
    case 'merge-sort':
    case 'quick-sort': {
      const a = BASE.slice(0, n);
      push(a, 0, 'Vetor inicial', 'Observe como as posições mudam durante a ordenação.');
      if (scenario === 'bubble-sort') {
        for (let end = a.length - 1; end > 0; end--) {
          let swapped = false;
          for (let j = 0; j < end; j++) {
            push(a, 2, 'Comparar ' + a[j] + ' e ' + a[j + 1], 'Vizinhos fora da ordem precisam trocar.', [j, j + 1]);
            if (a[j] > a[j + 1]) {
              [a[j], a[j + 1]] = [a[j + 1], a[j]];
              swapped = true;
              push(a, 3, 'Troca realizada', 'O maior valor avança para o final.', [j, j + 1]);
            }
          }
          if (!swapped) break;
        }
      } else if (scenario === 'selection-sort') {
        for (let i = 0; i < a.length - 1; i++) {
          let min = i;
          for (let j = i + 1; j < a.length; j++) {
            push(a, 2, 'Buscar o menor', 'Compare ' + a[j] + ' com o menor encontrado (' + a[min] + ').', [min, j], a.map((_, idx) => idx).filter(idx => idx < i));
            if (a[j] < a[min]) min = j;
          }
          [a[i], a[min]] = [a[min], a[i]];
          push(a, 4, 'Posição ' + i + ' definida', 'O menor disponível ocupa a próxima posição.', [i], a.map((_, idx) => idx).filter(idx => idx <= i));
        }
      } else if (scenario === 'insertion-sort') {
        for (let i = 1; i < a.length; i++) {
          const key = a[i]; let j = i - 1;
          push(a, 1, 'Inserir ' + key, 'O prefixo à esquerda já está ordenado.', [i], a.map((_, idx) => idx).filter(idx => idx < i));
          while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            push(a, 3, 'Deslocar ' + a[j], 'Abra espaço para inserir o valor na posição correta.', [j, j + 1]);
            j--;
          }
          a[j + 1] = key;
          push(a, 4, 'Inserido ' + key, 'Prefixo ordenado ampliado.', [j + 1], a.map((_, idx) => idx).filter(idx => idx <= i));
        }
      } else if (scenario === 'merge-sort') {
        const sort = (lo: number, hi: number): void => {
          if (hi - lo < 2) return;
          const mid = Math.floor((lo + hi) / 2);
          push(a, 1, 'Dividir [' + lo + ', ' + hi + ')', 'Separe o intervalo em duas metades.', [lo, mid - 1]);
          sort(lo, mid); sort(mid, hi);
          const left = a.slice(lo, mid); const right = a.slice(mid, hi);
          let i = 0; let j = 0; let k = lo;
          while (i < left.length || j < right.length) {
            if (j === right.length || (i < left.length && left[i] <= right[j])) a[k] = left[i++];
            else a[k] = right[j++];
            push(a, 4, 'Intercalar na posição ' + k, 'Combine as metades na ordem crescente.', [k]);
            k++;
          }
        };
        sort(0, a.length);
      } else {
        const quick = (lo: number, hi: number): void => {
          if (lo >= hi) return;
          const pivot = a[hi]; let i = lo;
          push(a, 1, 'Pivô = ' + pivot, 'Valores menores ou iguais serão posicionados à esquerda.', [hi]);
          for (let j = lo; j < hi; j++) {
            push(a, 3, 'Comparar ' + a[j] + ' com pivô', 'Verifique se o valor pertence ao grupo da esquerda.', [j, hi]);
            if (a[j] <= pivot) {
              [a[i], a[j]] = [a[j], a[i]];
              push(a, 4, 'Partição atualizada', 'Valor movido para a região à esquerda.', [i, j]);
              i++;
            }
          }
          [a[i], a[hi]] = [a[hi], a[i]];
          push(a, 5, 'Pivô na posição ' + i, 'O pivô está em sua posição definitiva.', [i]);
          quick(lo, i - 1); quick(i + 1, hi);
        };
        quick(0, a.length - 1);
      }
      push(a, 6, 'Ordenação concluída', 'Confira os valores do menor para o maior.', [], a.map((_, i) => i));
      const definitions = {
        'bubble-sort': ['PARA fim DE n-1 ATÉ 1', '    PARA j DE 0 ATÉ fim-1', '        SE a[j] > a[j+1]', '            TROCAR a[j], a[j+1]', '    FIM PARA', 'FIM PARA', 'RETORNAR lista'],
        'selection-sort': ['PARA i DE 0 ATÉ n-2', '    menor ← i', '    BUSCAR menor entre i e n-1', '    FIM BUSCA', '    TROCAR a[i], a[menor]', 'FIM PARA', 'RETORNAR lista'],
        'insertion-sort': ['PARA i DE 1 ATÉ n-1', '    chave ← a[i]', '    ENQUANTO anterior > chave', '        DESLOCAR anterior', '    INSERIR chave', 'FIM PARA', 'RETORNAR lista'],
        'merge-sort': ['ORDENAR(inicio, fim)', '    DIVIDIR ao meio', '    ORDENAR esquerda', '    ORDENAR direita', '    INTERCALAR ordenado', 'FIM FUNÇÃO', 'RETORNAR lista'],
        'quick-sort': ['QUICK(inicio, fim)', '    pivô ← último valor', '    PARA cada item no intervalo', '        COMPARAR com pivô', '        MOVER menores à esquerda', '    POSICIONAR pivô', 'RECURSÃO nas duas partes']
      };
      const complexity = scenario === 'merge-sort' ? 'O(n log n)' : scenario === 'quick-sort' ? 'O(n²) pior caso' : 'O(n²) pior caso';
      const labels = { 'bubble-sort': 'Bubble sort', 'selection-sort': 'Selection sort', 'insertion-sort': 'Insertion sort', 'merge-sort': 'Merge sort', 'quick-sort': 'Quick sort' };
      return standard(labels[scenario], 'Quantidade de itens', definitions[scenario], a.join(', '), complexity,
        scenario === 'quick-sort' ? 'Quick sort é O(n log n) em média; a escolha ruim do pivô pode causar O(n²).' :
        scenario === 'merge-sort' ? 'Merge sort usa memória auxiliar O(n).' :
        'Compare também quantidade de trocas e estabilidade.');
    }
    case 'factorial': {
      const values = Array.from({ length: n }, (_, i) => n - i);
      let product = 1;
      push(values, 0, 'Fatorial de ' + n, 'A recursão divide em problemas menores até o caso-base.');
      for (let i = 0; i < values.length; i++) push(values, 2, 'Chamar fatorial(' + values[i] + ')', 'Empilhe a chamada até chegar a fatorial(1).', [i]);
      for (let i = values.length - 1; i >= 0; i--) {
        product *= values[i];
        push(values, 4, 'Retornar ' + product, 'Desempilhe e multiplique por ' + values[i] + '.', [i]);
      }
      return standard('Recursão: fatorial', 'Número n',
        ['FATORIAL(n)', '    SE n <= 1', '        RETORNAR 1', '    SENÃO', '        RETORNAR n * FATORIAL(n-1)', 'FIM FUNÇÃO'],
        String(product), 'O(n)', 'Todo algoritmo recursivo precisa de caso-base.');
    }
    case 'graph-bfs':
    case 'graph-dfs': {
      const visited = new Set<number>();
      const order: number[] = [];
      const frontier = [0];
      push(ABC.slice(0, n), 0, 'Partida: A', 'Explore conexões entre vértices. O desenho é representado por seus nós.');
      while (frontier.length) {
        const v = scenario === 'graph-bfs' ? frontier.shift()! : frontier.pop()!;
        if (visited.has(v)) continue;
        visited.add(v); order.push(v);
        push(ABC.slice(0, n), 2, 'Visitar ' + ABC[v], 'Ordem: ' + order.map(x => ABC[x]).join(' → ') + '.', [v], [...visited]);
        const neighbors = ADJACENCY[v].filter(x => x < n && !visited.has(x));
        if (scenario === 'graph-dfs') neighbors.reverse();
        frontier.push(...neighbors);
        push(ABC.slice(0, n), 4, 'Fronteira: ' + (frontier.map(x => ABC[x]).join(', ') || 'vazia'),
          scenario === 'graph-bfs' ? 'BFS usa fila: primeiro a entrar, primeiro a sair.' : 'DFS usa pilha: último a entrar, primeiro a sair.', [v], [...visited]);
      }
      return standard(scenario === 'graph-bfs' ? 'Busca em largura (BFS)' : 'Busca em profundidade (DFS)', 'Total de vértices',
        ['fronteira ← [A]', 'visitados ← conjunto vazio', 'ENQUANTO fronteira não vazia', '    VISITAR próximo vértice', '    INSERIR vizinhos não visitados', 'FIM ENQUANTO'],
        order.map(v => ABC[v]).join(' → '), 'O(V + E)', 'Os vértices são representados por letras. A conectividade é fixa.');
    }
    case 'greedy': {
      let remaining = n * 6 + 3;
      const initial = remaining;
      const coins = [10, 5, 1];
      const used: number[] = [];
      push(coins, 0, 'Troco: ' + initial, 'Tente primeiro a maior moeda que não excede o valor restante.');
      for (let i = 0; i < coins.length; i++) {
        while (remaining >= coins[i]) {
          remaining -= coins[i]; used.push(coins[i]);
          push(coins, 2, 'Moeda ' + coins[i], 'Restam ' + remaining + ' unidades de valor.', [i], coins.map((_, j) => j).filter(j => j < i));
        }
      }
      push(coins, 4, 'Troco concluído', 'Moedas: ' + used.join(' + '), [], [0, 1, 2]);
      return standard('Guloso: escolha local', 'Cenário de troco',
        ['moedas ← [10, 5, 1]', 'PARA moeda em ordem decrescente', '    ENQUANTO restante >= moeda', '        ESCOLHER moeda', 'RETORNAR moedas escolhidas'],
        used.join(' + '), 'O(valor) neste exemplo', 'A estratégia gulosa funciona aqui, mas não é ótima para todo sistema de moedas.');
    }
    case 'dynamic-programming': {
      const cells = Array.from({ length: n + 1 }, (_, i) => i);
      const memo = Array(n + 1).fill(0);
      memo[0] = 0; memo[1] = 1;
      const values = Array.from({ length: n + 1 }, (_, i) => i < 2 ? String(memo[i]) : '—');
      push(values, 0, 'Casos-base F(0)=0 e F(1)=1', 'Os valores iniciais já são conhecidos.', [], [0, 1]);
      for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]; values[i] = String(memo[i]);
        push(values, 2, 'F(' + i + ') = ' + memo[i], 'Use F(' + (i - 1) + ') + F(' + (i - 2) + '), sem recalcular.', [i - 1, i], cells.filter(j => j <= i));
      }
      push(values, 4, 'F(' + n + ') = ' + memo[n], 'Os subproblemas resolvidos foram reaproveitados.', [n], cells);
      return standard('Programação dinâmica: Fibonacci', 'Posição n',
        ['F[0] ← 0; F[1] ← 1', 'PARA i DE 2 ATÉ n', '    F[i] ← F[i-1] + F[i-2]', 'FIM PARA', 'RETORNAR F[n]'],
        String(memo[n]), 'O(n)', 'A tabela evita repetir subproblemas.');
    }
  }
}
