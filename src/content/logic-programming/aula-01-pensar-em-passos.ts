import type { LessonDefinition } from '../../types/course';

export const aula01Logic: LessonDefinition = {
  id: 'logic-aula-01',
  status: 'published',
  slug: 'aula-01-pensar-em-passos',
  number: 1,
  title: 'Lógica de Programação: pensar em passos',
  shortTitle: 'Pensar em passos',
  durationMinutes: 240,
  audience: 'Pessoas iniciando seus estudos em programação',
  ucSlug: 'fundamentos-logic-programming',
  objectives: [
    'Descrever um algoritmo como uma sequência finita e organizada de instruções.',
    'Identificar entradas, processamento e saídas em situações cotidianas.',
    'Executar instruções em sequência, observando que a ordem altera o resultado.',
    'Explicar decisões condicionais com SE e SENÃO.',
    'Distinguir repetição de instruções de uma instrução executada uma única vez.',
    'Elaborar e testar um algoritmo simples em pseudocódigo, sem depender de linguagem de programação.'
  ],
  visualPlan: [
    'Personagens vetoriais que executam instruções na ordem definida pelo aluno.',
    'Montagem de sanduíche por etapas com feedback após cada execução.',
    'Simulação condicional que alterna chuva e sol e destaca o ramo executado.',
    'Jardim com quantidade configurável de plantas e execução de laço passo a passo.',
    'Desafios de fixação com explicação imediata das respostas.'
  ],
  slides: [
    {
      id: 'logic-01-capa',
      kind: 'cover',
      eyebrow: 'Fundamentos de Software · Aula 01',
      title: 'Pensar em passos',
      subtitle: 'Lógica antes da linguagem: sequência, decisão e repetição.',
      badge: 'Lógica de Programação',
      duration: '4 horas'
    },
    {
      id: 'logic-01-problema',
      kind: 'statement',
      eyebrow: 'Ponto de partida',
      title: 'O computador não adivinha o que você deseja.',
      lead: 'Ele precisa de instruções claras, ordenadas e sem ambiguidades.',
      detail: 'Programar começa por compreender o problema e organizar uma solução, mesmo antes de escrever código.',
      chips: ['problema', 'passos', 'teste', 'resultado']
    },
    {
      id: 'logic-01-sondagem',
      kind: 'challenge',
      eyebrow: 'Pergunta de abertura',
      title: 'Qual instrução é menos ambígua?',
      prompt: 'Você está explicando uma tarefa para alguém que não sabe o que fazer.',
      options: [
        { label: 'Prepare o lanche do jeito certo.' },
        { label: 'Pegue duas fatias de pão e coloque-as sobre um prato.' },
        { label: 'Faça alguma coisa com o pão.' }
      ],
      answerIndex: 1,
      explanation: 'Instruções precisas descrevem uma ação verificável. Uma tarefa grande precisa ser dividida em etapas menores.'
    },
    {
      id: 'logic-01-algoritmo',
      kind: 'cards',
      eyebrow: 'Conceito essencial',
      title: 'O que é um algoritmo?',
      subtitle: 'Uma forma estruturada de chegar a um resultado.',
      items: [
        { kicker: '01', title: 'Entrada', detail: 'Informações ou recursos necessários.', tone: 'blue' },
        { kicker: '02', title: 'Processamento', detail: 'Passos usados para resolver o problema.', tone: 'innovation' },
        { kicker: '03', title: 'Saída', detail: 'Resultado produzido pela execução.', tone: 'green' }
      ]
    },
    {
      id: 'logic-01-sequencia-demo',
      kind: 'logic-playground',
      scenario: 'sequence',
      eyebrow: 'Simulação interativa · 01',
      title: 'Sequência: cada passo tem sua vez',
      subtitle: 'Execute as instruções e observe o sanduíche ser montado.'
    },
    {
      id: 'logic-01-sequencia-regra',
      kind: 'statement',
      eyebrow: 'O que observamos?',
      title: 'A ordem das instruções importa.',
      lead: 'Sequência é executar comandos em uma ordem definida.',
      detail: 'Algoritmos podem ter várias etapas. Se invertermos etapas dependentes, o resultado pode deixar de fazer sentido.',
      chips: ['início', 'passo 1', 'passo 2', 'passo 3', 'fim']
    },
    {
      id: 'logic-01-sequencia-pratica',
      kind: 'exercise',
      eyebrow: 'Prática guiada · 15 minutos',
      title: 'Descreva um algoritmo do cotidiano',
      challenge: 'Escreva instruções para organizar uma mochila antes de sair.',
      steps: [
        'Identifique os materiais necessários (entrada).',
        'Escreva de 5 a 7 passos em ordem.',
        'Simule a execução dos passos exatamente como foram escritos.',
        'Corrija qualquer passo ambíguo ou fora de ordem.'
      ],
      success: ['Início e fim definidos', 'Passos claros e executáveis', 'Resultado verificável'],
      timebox: '15 minutos'
    },
    {
      id: 'logic-01-decisao-conceito',
      kind: 'statement',
      eyebrow: 'Estrutura 02',
      title: 'Às vezes, o próximo passo depende de uma condição.',
      lead: 'Se algo for verdadeiro, faça A. Caso contrário, faça B.',
      detail: 'Uma decisão permite que o algoritmo siga caminhos diferentes usando o resultado de uma condição.',
      chips: ['SE', 'condição', 'ENTÃO', 'SENÃO']
    },
    {
      id: 'logic-01-decisao-caminhos',
      kind: 'cards',
      eyebrow: 'Condição é uma pergunta',
      title: 'Uma condição tem dois resultados possíveis',
      items: [
        { kicker: 'Pergunta', title: 'Está chovendo?', detail: 'O teste produz verdadeiro ou falso.', tone: 'blue' },
        { kicker: 'Verdadeiro', title: 'Levar guarda-chuva', detail: 'Execute esse caminho quando chover.', tone: 'green' },
        { kicker: 'Falso', title: 'Sair sem guarda-chuva', detail: 'Execute esse caminho caso contrário.', tone: 'orange' }
      ]
    },
    {
      id: 'logic-01-decisao-demo',
      kind: 'logic-playground',
      scenario: 'decision',
      eyebrow: 'Simulação interativa · 02',
      title: 'Decisão: duas possibilidades',
      subtitle: 'Mude o clima e descubra qual ramo do algoritmo será executado.'
    },
    {
      id: 'logic-01-decisao-desafio',
      kind: 'challenge',
      eyebrow: 'Verificação de aprendizagem',
      title: 'Qual caminho será executado?',
      prompt: 'Observe o algoritmo e identifique qual mensagem será exibida.',
      exampleCode: 'SE idade >= 18 ENTÃO\n    EXIBIR "maior de idade"\nSENÃO\n    EXIBIR "menor de idade"\nFIM SE',
      testInput: 'idade = 16',
      options: [
        { label: 'Exibir "maior de idade"' },
        { label: 'Exibir "menor de idade"' },
        { label: 'Exibir as duas mensagens' }
      ],
      answerIndex: 1,
      explanation: '16 >= 18 é falso. Nesse caso, somente o bloco SENÃO é executado.'
    },
    {
      id: 'logic-01-repeticao-conceito',
      kind: 'statement',
      eyebrow: 'Estrutura 03',
      title: 'E se precisarmos executar a mesma ação várias vezes?',
      lead: 'Repetição evita escrever a mesma instrução inúmeras vezes.',
      detail: 'Definimos quantas vezes ou até quando a tarefa deve ocorrer. Cada execução é chamada de iteração.',
      chips: ['repetir', 'iteração', 'limite', 'parada']
    },
    {
      id: 'logic-01-repeticao-exemplos',
      kind: 'cards',
      eyebrow: 'Repetições em situações reais',
      title: 'Reconheça padrões que se repetem',
      items: [
        { title: 'Regar plantas', detail: 'Repetir a tarefa para cada planta.', tone: 'green' },
        { title: 'Conferir presenças', detail: 'Verificar cada nome da lista.', tone: 'blue' },
        { title: 'Contar objetos', detail: 'Incrementar o contador a cada item.', tone: 'orange' }
      ]
    },
    {
      id: 'logic-01-repeticao-demo',
      kind: 'logic-playground',
      scenario: 'loop',
      eyebrow: 'Simulação interativa · 03',
      title: 'Repetição: uma ação, várias vezes',
      subtitle: 'Escolha a quantidade de plantas e execute cada iteração.'
    },
    {
      id: 'logic-01-repeticao-desafio',
      kind: 'challenge',
      eyebrow: 'Verificação de aprendizagem',
      title: 'Quantas vezes o comando é executado?',
      prompt: 'PARA contador DE 1 ATÉ 4, executar "mostrar contador" uma vez por iteração.',
      options: [
        { label: '3 vezes' },
        { label: '4 vezes' },
        { label: '5 vezes' }
      ],
      answerIndex: 1,
      explanation: 'O contador assume os valores 1, 2, 3 e 4. São quatro iterações.'
    },
    {
      id: 'logic-01-diferencas',
      kind: 'cards',
      eyebrow: 'Síntese',
      title: 'Três estruturas, três funções',
      items: [
        { kicker: 'Sequência', title: 'Qual é a ordem?', detail: 'Executar os passos de forma organizada.', tone: 'blue' },
        { kicker: 'Seleção', title: 'Qual caminho seguir?', detail: 'Escolher conforme uma condição.', tone: 'orange' },
        { kicker: 'Repetição', title: 'Quantas vezes?', detail: 'Executar uma ação mais de uma vez.', tone: 'green' }
      ]
    },
    {
      id: 'logic-01-problema-integrador',
      kind: 'exercise',
      eyebrow: 'Atividade integradora · 35 minutos',
      title: 'Proponha um algoritmo para uma biblioteca',
      challenge: 'Uma pessoa deseja verificar livros disponíveis e reservar um título.',
      steps: [
        'Defina entrada, processamento e saída.',
        'Escreva a sequência para consultar o catálogo.',
        'Use SE/SENÃO para distinguir livro disponível e indisponível.',
        'Use repetição para verificar cada título de uma lista.',
        'Teste com uma lista de três livros e explique o resultado.'
      ],
      success: ['Há uma entrada e uma saída observáveis', 'Os dois caminhos da decisão são válidos', 'A repetição possui condição de término', 'A solução foi testada com exemplos'],
      timebox: '35 minutos'
    },
    {
      id: 'logic-01-depuracao',
      kind: 'challenge',
      eyebrow: 'Encontre o erro',
      title: 'O que falta para esse algoritmo funcionar?',
      prompt: 'Um algoritmo repete: "enquanto houver livros, verifique o primeiro". A lista nunca muda.',
      options: [
        { label: 'Aumentar a velocidade da execução.' },
        { label: 'Remover ou avançar para o próximo livro a cada iteração.' },
        { label: 'Substituir a repetição por uma condição sem mudança de estado.' }
      ],
      answerIndex: 1,
      explanation: 'Se o estado não muda, a condição pode continuar verdadeira indefinidamente. Um laço precisa progredir até sua condição de parada.'
    },
    {
      id: 'logic-01-checklist',
      kind: 'checklist',
      eyebrow: 'Antes de encerrar',
      title: 'Você já consegue explicar?',
      items: [
        'A diferença entre problema, algoritmo e resultado.',
        'Por que a ordem de execução modifica o resultado.',
        'Como SE/SENÃO escolhe exatamente um dos caminhos.',
        'O que é uma iteração e quando um laço termina.',
        'Como testar um algoritmo com entradas diferentes.'
      ],
      prompt: 'Refaça as três simulações e descreva com suas palavras o que ocorre em cada etapa.'
    },
    {
      id: 'logic-01-referencias',
      kind: 'references',
      eyebrow: 'Para aprofundar',
      title: 'Referências e prática complementar',
      items: [
        { label: 'MDN · Noções básicas de JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting' },
        { label: 'VisuAlgo · Visualizador de algoritmos', url: 'https://visualg3.com.br/' },
        { label: 'Python Docs · Mais estruturas de controle (exemplos de lógica)', url: 'https://docs.python.org/pt-br/3/tutorial/controlflow.html' }
      ]
    }
  ]
};
