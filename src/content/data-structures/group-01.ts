import type { DataLessonSpec } from './lesson-builder';

export const group01: DataLessonSpec[] = [
  {
    number: 1, slug: 'aula-01-estrutura-abstracao-complexidade',
    title: 'Estruturas de dados, tipos abstratos e complexidade', short: 'O que é uma estrutura?',
    subtitle: 'Organização dos dados determina o custo das operações.',
    opening: {
      title: 'Como guardar chamados de suporte?',
      lead: 'Uma escola precisa consultar, ordenar e encaminhar pedidos de manutenção.',
      detail: 'A escolha da estrutura depende das operações mais frequentes, dos limites de memória e do volume de dados.'
    },
    concepts: [
      { title: 'Dados e operações formam uma estrutura', lead: 'Não basta armazenar valores.',
        detail: 'Uma coleção define como inserir, consultar, remover e percorrer. Observe quais operações dominam o uso.' },
      { title: 'Tipo abstrato especifica comportamento', lead: 'A interface importa mais que o armazenamento.',
        detail: 'Uma pilha define empilhar e desempilhar; pode ser implementada com vetor ou lista ligada.' },
      { title: 'Complexidade mede crescimento', lead: 'O(1), O(n) e O(log n) são limites assintóticos.',
        detail: 'O(1) não significa tempo zero. A notação abstrai constantes e depende da operação, da hipótese e do caso analisado.' },
      { title: 'Custo de espaço também conta', lead: 'Estrutura e algoritmo usam memória.',
        detail: 'Compare memória auxiliar, quantidade de elementos e tempo antes de selecionar a organização dos dados.' }
    ],
    contrasts: [
      { title: 'Sequência', detail: 'A posição dos itens pode importar.' },
      { title: 'Chave → valor', detail: 'Busca por identificador destaca acesso associativo.' },
      { title: 'Prioridade', detail: 'Atender maior urgência difere de atender ordem de chegada.' }
    ],
    costs: [
      { title: 'Acesso por índice', detail: 'Em vetor, tende a O(1) para posição válida.' },
      { title: 'Busca linear', detail: 'Em sequência não indexada por chave, O(n) no pior caso.' },
      { title: 'Memória', detail: 'Uma coleção de n elementos geralmente requer espaço proporcional a n.' }
    ],
    pitfalls: [
      { title: 'Comparar apenas velocidade', detail: 'Memória, simplicidade e mutabilidade também importam.' },
      { title: 'Confundir ADT com implementação', detail: 'Pilha é um contrato; Array é uma opção de implementação.' },
      { title: 'Prometer O(1) para qualquer operação', detail: 'Determine a operação e hipóteses antes de classificar.' }
    ],
    questions: [
      { prompt: 'Você consulta chamados por protocolo milhares de vezes. Qual critério importa?',
        choices: ['Custo da busca por identificador', 'Somente aparência dos cartões', 'Quantidade de comentários'],
        answer: 0, why: 'Frequência da busca orienta a seleção da estrutura.' },
      { prompt: 'Uma pilha implementada com array continua sendo pilha porque:',
        choices: ['Seus valores são números', 'Respeita as operações e a ordem LIFO', 'O JavaScript possui palavras reservadas especiais'],
        answer: 1, why: 'O tipo abstrato é definido pelo contrato de comportamento.' },
      { prompt: 'Uma operação O(n) em n itens indica:',
        choices: ['Duração sempre de n milissegundos', 'Memória necessariamente constante', 'Crescimento no máximo linear sob as hipóteses'],
        answer: 2, why: 'Big-O descreve limite assintótico, não tempo de relógio.' }
    ],
    starterCode: 'const chamados = ["A12", "B31", "C07"];\nconsole.log(chamados[1]);\nconsole.log(chamados.length);',
    expected: 'B31\n3', incorrect: ['A12\n3', 'B31\n2'],
    codeTask: 'Troque o índice consultado e adicione um chamado; explique as duas saídas.',
    codeExplanation: 'O índice 1 acessa o segundo elemento, B31. O comprimento total é 3.',
    exercises: [
      { title: 'Mapear operações', problem: 'Liste as operações de uma agenda de reservas e ordene-as por frequência.',
        steps: ['Anote os dados mantidos.', 'Identifique cinco operações.', 'Classifique frequência de uso.', 'Explique a escolha de estrutura.'],
        success: ['Operações descritas', 'Frequência justificada', 'Estrutura escolhida'], minutes: 30 },
      { title: 'Comparar custos', problem: 'Para 10 e 1000 itens, compare a tendência de O(1), O(log n) e O(n).',
        steps: ['Defina n = 10 e n = 1000.', 'Estime o crescimento relativo.', 'Explique as hipóteses.', 'Evite interpretar como milissegundos.'],
        success: ['Três classes explicadas', 'Duas entradas comparadas', 'Sem confundir tempo real'], minutes: 35 },
      { title: 'Especificar um ADT', problem: 'Defina um tipo abstrato para fila de chamados com operações e comportamento.',
        steps: ['Defina entrada e saída.', 'Liste inserir e atender.', 'Diga o que ocorre vazio.', 'Crie dois testes de contrato.'],
        success: ['Contrato claro', 'Caso vazio tratado', 'Dois testes especificados'], minutes: 45 }
    ],
    checklist: ['Distingo dado de operação.', 'Explico o que é ADT.', 'Comparo O(1), O(n) e O(log n).', 'Identifico custos de espaço.', 'Justifico uma escolha de estrutura.'],
    references: [{ label: 'OpenDSA · Data Structures and Algorithms', url: 'https://opendsa-server.cs.vt.edu/' }]
  },
  {
    number: 2, slug: 'aula-02-vetores-dinamicos-indices',
    title: 'Vetores dinâmicos, índices e operações de inserção', short: 'Vetores e Arrays',
    subtitle: 'Acesso direto, deslocamentos e custo amortizado.',
    opening: {
      title: 'Inserir uma prioridade no meio da lista',
      lead: 'A agenda de tarefas precisa manter ordem por chegada, mas aceitar inserções intermediárias.',
      detail: 'Arrays JavaScript oferecem acesso por índice e métodos convenientes; inserção no começo ou meio desloca posições.'
    },
    concepts: [
      { title: 'Índices começam em zero', lead: 'O primeiro elemento está em lista[0].',
        detail: 'Acesse somente índices válidos; length mede a quantidade de posições, não o último índice.' },
      { title: 'push e pop atuam no final', lead: 'Adição e remoção no final costumam ser amortizadas O(1).',
        detail: 'O crescimento interno da capacidade pode ocasionar realocações; a implementação de Array é responsabilidade do motor JavaScript.' },
      { title: 'splice altera posições', lead: 'Inserir no início ou meio desloca elementos.',
        detail: 'Para n itens, inserção arbitrária e remoção que exigem deslocamento têm custo O(n) no pior caso.' },
      { title: 'Percorrer não é acessar', lead: 'Ler lista[i] difere de procurar um valor.',
        detail: 'Busca com indexOf pode visitar todos os itens; se precisar buscar por chave, considere Map.' }
    ],
    contrasts: [
      { title: 'Acesso', detail: 'lista[2] encontra posição diretamente.' },
      { title: 'Busca', detail: 'indexOf("C") percorre para achar o conteúdo.' },
      { title: 'Inserção', detail: 'splice(1, 0, "B") desloca o sufixo.' }
    ],
    costs: [
      { title: 'Ler por índice', detail: 'O(1) para acesso posicional válido.' },
      { title: 'push/pop', detail: 'O(1) amortizado como modelo usual de array dinâmico.' },
      { title: 'splice no meio', detail: 'O(n) no pior caso por deslocamentos.' }
    ],
    pitfalls: [
      { title: 'Confundir índice e tamanho', detail: 'Com length 3, último índice é 2.' },
      { title: 'Ordenar mutando sem querer', detail: 'sort altera a lista original; faça cópia quando precisar.' },
      { title: 'Usar shift para fila enorme', detail: 'Remover do começo exige deslocamento e pode custar O(n).' }
    ],
    questions: [
      { prompt: 'Array ["A","B","C"] tem último índice:',
        choices: ['3', '2', '1'], answer: 1, why: 'Índices começam em zero.' },
      { prompt: 'Qual operação tende a deslocar mais valores em um array?',
        choices: ['Ler lista[0]', 'Inserir no início com unshift', 'Ler length'],
        answer: 1, why: 'A inserção inicial muda as posições dos elementos existentes.' },
      { prompt: 'Para localizar o conteúdo "A" sem saber a posição:',
        choices: ['length', 'lista[1] sempre', 'indexOf("A")'],
        answer: 2, why: 'indexOf procura o valor; acesso por índice requer posição conhecida.' }
    ],
    starterCode: 'const tarefas = ["A", "C"];\ntarefas.splice(1, 0, "B");\nconsole.log(tarefas.join(","));\nconsole.log(tarefas.indexOf("C"));',
    expected: 'A,B,C\n2', incorrect: ['A,C,B\n1', 'A,B,C\n3'],
    codeTask: 'Mude o índice de inserção e observe a ordem e a posição de C.',
    codeExplanation: 'splice insere B no índice 1 sem remover itens; C é deslocado para o índice 2.',
    exercises: [
      { title: 'Consertar uma ordem', problem: 'Receba ["A","C","D"] e coloque B na posição correta.',
        steps: ['Copie a entrada.', 'Use splice.', 'Confira comprimento.', 'Teste outra posição.'],
        success: ['Ordem A,B,C,D', 'Quatro elementos', 'Segundo teste'], minutes: 30 },
      { title: 'Operações e custos', problem: 'Compare dez inserções no início com dez inserções no fim.',
        steps: ['Crie dois arrays.', 'Execute unshift e push.', 'Explique deslocamentos.', 'Classifique custos assintóticos.'],
        success: ['Ambos resultam em dez itens', 'Diferença de deslocamento', 'Análise correta'], minutes: 40 },
      { title: 'Agenda mutável', problem: 'Implemente adicionar, cancelar por índice e listar tarefas.',
        steps: ['Defina operações e validações.', 'Implemente métodos de Array.', 'Teste lista vazia e índice inválido.', 'Documente complexidade.'],
        success: ['Três operações funcionando', 'Erros previstos tratados', 'Custos descritos'], minutes: 45 }
    ],
    checklist: ['Reconheço índices válidos.', 'Uso push, pop e splice.', 'Diferencio busca de acesso.', 'Explico custo de deslocamentos.', 'Testei bordas.'],
    references: [{ label: 'MDN · Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' }]
  },
  {
    number: 3, slug: 'aula-03-matrizes-percursos-grade',
    title: 'Matrizes e percursos bidimensionais', short: 'Matrizes 2D',
    subtitle: 'Linhas, colunas, limites e varreduras de grade.',
    opening: {
      title: 'Onde estão os laboratórios livres?',
      lead: 'Uma grade representa salas (linhas) e horários (colunas).',
      detail: 'Uma matriz em JavaScript pode ser representada por um array de arrays; seus tamanhos precisam ser verificados.'
    },
    concepts: [
      { title: 'Matriz é indexada por linha e coluna', lead: 'grade[linha][coluna] seleciona uma célula.',
        detail: 'Separe linha de coluna e valide ambos os índices antes de modificar a reserva.' },
      { title: 'Arrays internos podem ter tamanhos distintos', lead: 'JavaScript não garante matriz retangular.',
        detail: 'Se a aplicação depende de colunas fixas, valide cada linha ou inicialize com Array.from.' },
      { title: 'Laços aninhados percorrem a grade', lead: 'm linhas × n colunas geram m·n visitas.',
        detail: 'Visitar todas as células custa O(mn); acessar posição conhecida custa O(1).' },
      { title: 'Representação depende do domínio', lead: 'Grades densas diferem de grades esparsas.',
        detail: 'Quando quase todas as posições estão vazias, uma coleção indexada por coordenadas pode economizar espaço.' }
    ],
    contrasts: [
      { title: 'Linha', detail: 'grade[1] é o segundo vetor.' },
      { title: 'Coluna', detail: 'grade[1][0] é a primeira célula da segunda linha.' },
      { title: 'Percurso', detail: 'Dois laços avaliam cada célula.' }
    ],
    costs: [
      { title: 'Acesso [i][j]', detail: 'O(1), assumindo matriz em arrays e índices válidos.' },
      { title: 'Varredura completa', detail: 'O(mn) para m linhas e n colunas.' },
      { title: 'Armazenamento denso', detail: 'O(mn) células armazenadas.' }
    ],
    pitfalls: [
      { title: 'Trocar índices', detail: 'Documente ordem linha/coluna de todas as funções.' },
      { title: 'Compartilhar a mesma linha', detail: 'Use Array.from({length:m}, () => Array(n).fill(0)).' },
      { title: 'Supor retangular sem validação', detail: 'Verifique comprimento de cada linha.' }
    ],
    questions: [
      { prompt: 'Em matriz [[7,8],[9,10]], o valor de grade[1][0] é:',
        choices: ['8', '9', '10'], answer: 1, why: 'Linha 1 é [9,10], coluna 0 contém 9.' },
      { prompt: 'Quatro linhas com três colunas exigem quantas visitas completas?',
        choices: ['7', '12', '4'], answer: 1, why: '4 × 3 = 12 células.' },
      { prompt: 'Por que usar Array.from para criar linhas independentes?',
        choices: ['Para ordenar automaticamente', 'Para criar strings', 'Para evitar compartilhar a mesma referência de linha'],
        answer: 2, why: 'fill usando o mesmo array interno repetiria a referência.' }
    ],
    starterCode: 'const grade = [[0, 1], [1, 0]];\nconst livres = [];\nfor (let i = 0; i < grade.length; i++) {\n  for (let j = 0; j < grade[i].length; j++) {\n    if (grade[i][j] === 0) livres.push(i + "," + j);\n  }\n}\nconsole.log(livres.join("|"));',
    expected: '0,0|1,1', incorrect: ['0,1|1,0', '0,0|0,1'],
    codeTask: 'Troque uma célula ocupada para 0 e confira as novas coordenadas livres.',
    codeExplanation: 'As posições livres são linha 0, coluna 0 e linha 1, coluna 1.',
    exercises: [
      { title: 'Mapa de sala', problem: 'Represente três linhas de cadeiras com quatro posições.',
        steps: ['Crie uma matriz retangular.', 'Marque duas posições ocupadas.', 'Conte vagas restantes.', 'Verifique índices inválidos.'],
        success: ['12 células', '10 livres', 'Validação de índice'], minutes: 35 },
      { title: 'Busca na grade', problem: 'Implemente função que retorna coordenadas do primeiro valor igual ao alvo.',
        steps: ['Defina resultado de ausência.', 'Percorra linhas e colunas.', 'Retorne par de índices.', 'Teste valor não encontrado.'],
        success: ['Coordenadas corretas', 'Ausência tratada', 'Complexidade O(mn)'], minutes: 40 },
      { title: 'Grade de horários', problem: 'Valide tentativa de reserva para linha e coluna específicas.',
        steps: ['Receba coordenadas.', 'Valide limites.', 'Confirme só se célula estiver livre.', 'Teste tentativa duplicada.'],
        success: ['Sem acesso inválido', 'Reserva única', 'Dois casos de rejeição'], minutes: 45 }
    ],
    checklist: ['Interpreto linha e coluna.', 'Valido limites.', 'Percorro matriz com laços.', 'Separo linhas independentes.', 'Explico O(mn).'],
    references: [{ label: 'MDN · Arrays multidimensionais', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections' }]
  }
];
