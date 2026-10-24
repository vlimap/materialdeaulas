import type { DataLessonSpec } from './lesson-builder';

export const group02: DataLessonSpec[] = [
  {
    number: 4, slug: 'aula-04-pilhas-lifo-validacao',
    title: 'Pilhas, LIFO e verificação de expressões', short: 'Pilhas · LIFO',
    subtitle: 'O último a entrar é o primeiro a sair.',
    opening: {
      title: 'Como funciona o desfazer?',
      lead: 'Um editor precisa desfazer a operação mais recente antes das anteriores.',
      detail: 'Pilhas também são usadas na execução de funções, parsing e navegação por histórico.'
    },
    concepts: [
      { title: 'Pilha implementa LIFO', lead: 'Último a entrar, primeiro a sair.',
        detail: 'As operações fundamentais são push (empilhar), pop (remover topo) e peek (consultar topo).' },
      { title: 'O topo é o único ponto de remoção', lead: 'Não retire um elemento arbitrário sem mudar o contrato.',
        detail: 'Com Array, push/pop no fim são opções convenientes; operações no meio já não representam uma pilha tradicional.' },
      { title: 'Balanceamento usa histórico', lead: 'Abrir parêntese empilha; fechar desempilha.',
        detail: 'Ao fechar sem abertura correspondente, a expressão é inválida; pilha vazia ao final indica balanceamento dos parênteses.' },
      { title: 'Casos-limite tornam a implementação segura', lead: 'Pilha vazia precisa de comportamento definido.',
        detail: 'Pop de Array vazio retorna undefined. Valide o estado antes de interpretar o resultado.' }
    ],
    contrasts: [
      { title: 'push', detail: 'Empilha no topo.' },
      { title: 'pop', detail: 'Remove e devolve o topo.' },
      { title: 'peek', detail: 'Consulta o topo sem remover.' }
    ],
    costs: [
      { title: 'push/pop', detail: 'O(1) amortizado no final de array dinâmico.' },
      { title: 'peek', detail: 'O(1) consultando length - 1.' },
      { title: 'Espaço', detail: 'O(n) no pior caso para n aberturas não fechadas.' }
    ],
    pitfalls: [
      { title: 'Ignorar fechamento excedente', detail: 'Se não há abertura, a expressão é inválida imediatamente.' },
      { title: 'Aceitar pilha não vazia ao final', detail: 'Aberturas restantes indicam erro.' },
      { title: 'Confundir call stack e fila', detail: 'Chamadas de função retornam em ordem LIFO.' }
    ],
    questions: [
      { prompt: 'Após empilhar A, B e C, pop retorna:',
        choices: ['A', 'C', 'B'], answer: 1, why: 'A estrutura é LIFO.' },
      { prompt: 'A sequência "(()" é válida?',
        choices: ['Sim, duas aberturas bastam', 'Não, sobra uma abertura', 'Sim, pop remove todas'],
        answer: 1, why: 'Uma abertura não foi fechada.' },
      { prompt: 'Qual operação consulta o topo sem alterar a pilha?',
        choices: ['push', 'shift', 'peek'], answer: 2, why: 'peek lê o topo e não o remove.' }
    ],
    starterCode: 'const pilha = [];\nlet valida = true;\nfor (const c of "(()())") {\n  if (c === "(") pilha.push(c);\n  else if (pilha.length === 0) { valida = false; break; }\n  else pilha.pop();\n}\nconsole.log(valida && pilha.length === 0);',
    expected: 'true', incorrect: ['false', 'undefined'],
    codeTask: 'Troque a expressão por "(()" e depois por "())("; explique ambos os resultados.',
    codeExplanation: 'Cada fechamento encontra uma abertura e a pilha termina vazia: true. As duas entradas sugeridas devem resultar false.',
    exercises: [
      { title: 'Histórico de ações', problem: 'Crie desfazer para três operações de edição.',
        steps: ['Empilhe ações em ordem.', 'Remova a última.', 'Registre o novo topo.', 'Teste pilha vazia.'],
        success: ['Ordem LIFO correta', 'Ação removida', 'Caso vazio tratado'], minutes: 30 },
      { title: 'Expressões balanceadas', problem: 'Valide parênteses em três expressões diferentes.',
        steps: ['Percorra símbolos.', 'Empilhe aberturas.', 'Rejeite fechamento extra.', 'Confira pilha vazia ao final.'],
        success: ['(()) válida', '(() inválida', '())( inválida'], minutes: 40 },
      { title: 'ADT de pilha', problem: 'Implemente classe Stack com push, pop, peek, size.',
        steps: ['Defina contrato.', 'Armazene dados privadamente.', 'Implemente operações.', 'Teste vazio e cinco elementos.'],
        success: ['API funcional', 'Sem acesso indevido', 'Testes de borda'], minutes: 45 }
    ],
    checklist: ['Descrevo LIFO.', 'Uso push e pop.', 'Consulto topo com segurança.', 'Valido expressões desbalanceadas.', 'Explico custo das operações.'],
    references: [{ label: 'OpenDSA · Stacks', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 5, slug: 'aula-05-filas-fifo-circular-deque',
    title: 'Filas, FIFO, buffer circular e deque', short: 'Filas · FIFO',
    subtitle: 'Atenda na ordem de chegada e evite deslocamentos.',
    opening: {
      title: 'Quem deve ser atendido primeiro?',
      lead: 'O suporte precisa preservar a ordem de chegada sem perder requisições.',
      detail: 'Uma fila modela enqueue e dequeue. Implementações eficientes evitam shift repetido em arrays grandes.'
    },
    concepts: [
      { title: 'Fila implementa FIFO', lead: 'Primeiro a entrar, primeiro a sair.',
        detail: 'enqueue insere no final; dequeue remove o mais antigo; front consulta sem remover.' },
      { title: 'shift é simples, mas desloca índices', lead: 'Uma implementação direta nem sempre é eficiente.',
        detail: 'Em arrays densos, remover do início costuma implicar deslocamentos O(n) no pior caso.' },
      { title: 'Índice de cabeça evita shift', lead: 'Registre a posição do primeiro item válido.',
        detail: 'Ao atender, incremente head; faça compactação periódica ou use buffer circular para controlar memória.' },
      { title: 'Deque amplia o contrato', lead: 'É possível inserir e retirar pelas duas pontas.',
        detail: 'Um deque eficiente requer representação adequada; aplicar unshift e shift não garante O(1).' }
    ],
    contrasts: [
      { title: 'Fila', detail: 'Entrada atrás e saída pela frente.' },
      { title: 'Pilha', detail: 'Entrada e saída pelo topo.' },
      { title: 'Deque', detail: 'Operações nas duas extremidades.' }
    ],
    costs: [
      { title: 'Array.shift()', detail: 'Pode custar O(n) por reindexação.' },
      { title: 'Cabeça incremental', detail: 'Dequeue O(1), sem contar compactação.' },
      { title: 'Buffer circular', detail: 'Enqueue/dequeue O(1) com capacidade e política definidas.' }
    ],
    pitfalls: [
      { title: 'Crescimento ilimitado do array', detail: 'Libere posições atendidas ou compacte quando necessário.' },
      { title: 'Fila vazia', detail: 'Trate dequeue sem elementos e resultado indefinido.' },
      { title: 'Confundir dequeue com pop', detail: 'pop remove o mais novo, não o mais antigo.' }
    ],
    questions: [
      { prompt: 'Enfileirou A, B, C. O primeiro atendido é:',
        choices: ['C', 'B', 'A'], answer: 2, why: 'FIFO preserva ordem de entrada.' },
      { prompt: 'Qual é o problema de shift repetido em listas grandes?',
        choices: ['Remove o último item', 'Pode deslocar muitos índices', 'Ordena automaticamente'],
        answer: 1, why: 'Remoção inicial em array pode ser linear.' },
      { prompt: 'Uma deque permite:',
        choices: ['Apenas push no fim', 'Somente buscas binárias', 'Inserção e remoção nas duas pontas'],
        answer: 2, why: 'Deque significa double-ended queue.' }
    ],
    starterCode: 'const fila = ["Ana", "Bia", "Caio"];\nlet head = 0;\nconst atender = () => fila[head++];\nconsole.log(atender());\nconsole.log(atender());\nconsole.log(fila.slice(head).join(","));',
    expected: 'Ana\nBia\nCaio', incorrect: ['Caio\nBia\nAna', 'Ana\nCaio\nBia'],
    codeTask: 'Adicione "Duda" e atenda mais uma pessoa; descreva o avanço de head.',
    codeExplanation: 'head inicia em 0: Ana e Bia saem nesta ordem. A fatia restante contém apenas Caio.',
    exercises: [
      { title: 'Fila de suporte', problem: 'Implemente enqueue, dequeue e front.',
        steps: ['Comece com fila vazia.', 'Enfileire três clientes.', 'Atenda dois.', 'Verifique o primeiro restante.'],
        success: ['FIFO preservado', 'Front não remove', 'Vazio tratado'], minutes: 35 },
      { title: 'Head e compactação', problem: 'Use índice head para evitar shift.',
        steps: ['Armazene quatro valores.', 'Avance head duas vezes.', 'Acesse somente itens pendentes.', 'Explique quando compactar.'],
        success: ['Sem shift no atendimento', 'Restantes corretos', 'Custo e espaço descritos'], minutes: 40 },
      { title: 'Buffer circular', problem: 'Simule fila de capacidade 3 usando aritmética módulo.',
        steps: ['Defina head, tail e size.', 'Enfileire até lotar.', 'Atenda e reutilize espaço.', 'Teste overflow e underflow.'],
        success: ['Reutilização circular', 'Capacidade respeitada', 'Casos extremos testados'], minutes: 45 }
    ],
    checklist: ['Distingo FIFO de LIFO.', 'Implemento enqueue/dequeue.', 'Trato fila vazia.', 'Explico custo de shift.', 'Entendo buffer circular e deque.'],
    references: [{ label: 'OpenDSA · Queues', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 6, slug: 'aula-06-listas-encadeadas-nos',
    title: 'Listas encadeadas e manipulação de nós', short: 'Listas encadeadas',
    subtitle: 'Nós, referências, percursos e mudanças de ligação.',
    opening: {
      title: 'Como organizar uma sequência sem índices contíguos?',
      lead: 'Cada elemento pode indicar onde está o próximo.',
      detail: 'Uma lista encadeada favorece alterações locais quando a posição já é conhecida, mas não dá acesso por índice em tempo constante.'
    },
    concepts: [
      { title: 'Nó guarda valor e referência', lead: 'Cada nó conhece seu sucessor.',
        detail: 'Em lista simplesmente encadeada, head aponta para o primeiro nó e o último aponta para null.' },
      { title: 'Percurso usa próximo nó', lead: 'Não há acesso aleatório como lista[10].',
        detail: 'Chegar ao k-ésimo elemento exige visitar seus predecessores: O(k).' },
      { title: 'Inserção local pode ser O(1)', lead: 'Conhecendo o nó anterior, altera-se uma ligação.',
        detail: 'Buscar o predecessor é O(n) no pior caso; inclua esse custo na análise da operação completa.' },
      { title: 'Remoção precisa preservar a cadeia', lead: 'Faça anterior.next apontar para atual.next.',
        detail: 'Trate cabeça, fim, lista vazia e referências desconectadas para evitar perda de elementos.' }
    ],
    contrasts: [
      { title: 'Array', detail: 'Acesso posicional conveniente; desloca itens no meio.' },
      { title: 'Lista ligada', detail: 'Percurso sequencial; mutação local com referência conhecida.' },
      { title: 'Duplamente ligada', detail: 'Cada nó aponta também para o anterior, com custo extra de memória.' }
    ],
    costs: [
      { title: 'Consultar índice k', detail: 'O(k) percorrendo a cadeia.' },
      { title: 'Inserir após nó conhecido', detail: 'O(1) na alteração de referências.' },
      { title: 'Buscar um valor', detail: 'O(n) no pior caso.' }
    ],
    pitfalls: [
      { title: 'Esquecer o antigo next', detail: 'Conecte o novo nó ao restante antes de perder a referência.' },
      { title: 'Ignorar lista vazia', detail: 'Atualize head na primeira inserção e na última remoção.' },
      { title: 'Supor inserção arbitrária O(1)', detail: 'Encontrar a posição pode custar O(n).' }
    ],
    questions: [
      { prompt: 'Para chegar ao 10º nó de lista simples:',
        choices: ['Percorra desde head', 'Leia lista[9] em O(1)', 'Use sort'],
        answer: 0, why: 'A lista simples não oferece índice com acesso direto.' },
      { prompt: 'Inserir depois de um nó conhecido altera:',
        choices: ['Toda a memória', 'Somente referências locais', 'Todos os valores seguintes'],
        answer: 1, why: 'A ligação pode ser ajustada em O(1).' },
      { prompt: 'Ao remover a cabeça de lista não vazia:',
        choices: ['É obrigatório ordenar', 'É preciso copiar todos os nós', 'head deve apontar para head.next'],
        answer: 2, why: 'O segundo nó passa a ser o primeiro.' }
    ],
    starterCode: 'const terceiro = { valor: "C", next: null };\nconst primeiro = { valor: "A", next: terceiro };\nconst novo = { valor: "B", next: primeiro.next };\nprimeiro.next = novo;\nconst valores = [];\nfor (let atual = primeiro; atual; atual = atual.next) {\n  valores.push(atual.valor);\n}\nconsole.log(valores.join(","));',
    expected: 'A,B,C', incorrect: ['A,C,B', 'A,B'],
    codeTask: 'Insira um nó "D" ao final e depois remova o nó B; verifique a cadeia.',
    codeExplanation: 'O nó B aponta para C antes de A passar a apontar para B; o percurso produz A,B,C.',
    exercises: [
      { title: 'Inserir na cabeça', problem: 'Escreva função prepend(head, valor).',
        steps: ['Crie novo nó.', 'Aponte next para head.', 'Retorne novo head.', 'Teste lista vazia.'],
        success: ['Nova cabeça correta', 'Antiga cadeia preservada', 'Caso null testado'], minutes: 35 },
      { title: 'Localizar e remover', problem: 'Remova a primeira ocorrência de um valor.',
        steps: ['Defina caso vazio.', 'Trate remoção da cabeça.', 'Percorra guardando anterior.', 'Valide ausência.'],
        success: ['Cabeça removível', 'Miolo preservado', 'Ausência sem exceção'], minutes: 40 },
      { title: 'Comparação com array', problem: 'Escolha estrutura para agenda consultada por índice e alterada no meio.',
        steps: ['Liste operações dominantes.', 'Compare custos completos.', 'Inclua memória das referências.', 'Justifique escolha com um exemplo.'],
        success: ['Acesso versus mutação', 'Custos honestos', 'Recomendação defendida'], minutes: 45 }
    ],
    checklist: ['Defino nó e head.', 'Percorro usando next.', 'Insiro sem perder referências.', 'Trato remoção na cabeça.', 'Incluo busca no custo total.'],
    references: [{ label: 'OpenDSA · Linked Lists', url: 'https://opendsa-server.cs.vt.edu/' }]
  }
];
