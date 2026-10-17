import type { LessonDefinition } from '../../types/course';

export const aula02Logic: LessonDefinition = {
  id: 'logic-aula-02',
  status: 'published',
  slug: 'aula-02-problemas-e-algoritmos',
  number: 2,
  title: 'Decomposição de problemas e algoritmos',
  shortTitle: 'Problemas e algoritmos',
  durationMinutes: 240,
  audience: 'Iniciantes em lógica de programação',
  ucSlug: 'fundamentos-logic-programming',
  objectives: [
    'Identificar o problema, o objetivo e os limites de uma solução.',
    'Decompor um problema em tarefas menores e relevantes.',
    'Ordenar instruções considerando dependências entre etapas.',
    'Distinguir entrada, processamento e saída em um algoritmo.',
    'Realizar testes de mesa usando diferentes entradas e resultados esperados.',
    'Reconhecer instruções ambíguas e erros de lógica antes de implementar código.'
  ],
  visualPlan: [
    'Biblioteca escolar como estudo de caso para identificar o problema e o objetivo.',
    'Painel interativo de seleção de tarefas essenciais para decompor o problema.',
    'Reorganização passo a passo do algoritmo de empréstimo de um livro.',
    'Máquina visual de entrada, processamento e saída para calcular uma compra.',
    'Verificação imediata com testes de mesa e exemplos de erros de lógica.'
  ],
  slides: [
    {
      id: 'logic-02-capa',
      kind: 'cover',
      eyebrow: 'Lógica de Programação · Aula 02',
      title: 'Problemas e algoritmos',
      subtitle: 'Como transformar necessidades reais em instruções executáveis.',
      badge: 'Aula 02',
      duration: '4 horas',
      note: 'Retome as estruturas sequência, decisão e repetição vistas na Aula 01.'
    },
    {
      id: 'logic-02-retomada',
      kind: 'challenge',
      eyebrow: 'Retomada · 5 minutos',
      title: 'O que fazemos antes de programar?',
      prompt: 'Uma biblioteca precisa de ajuda para registrar os empréstimos. Qual é o primeiro passo?',
      options: [
        { label: 'Escolher uma linguagem e começar a digitar código.' },
        { label: 'Entender o problema e o resultado esperado.' },
        { label: 'Criar telas antes de conversar com os usuários.' }
      ],
      answerIndex: 1,
      explanation: 'Primeiro definimos o que precisa ser resolvido, para quem e qual resultado seria considerado correto.'
    },
    {
      id: 'logic-02-contexto',
      kind: 'statement',
      eyebrow: 'Situação-problema',
      title: 'Uma biblioteca perde o controle dos livros emprestados.',
      lead: 'O problema não é “falta um aplicativo”.',
      detail: 'É a dificuldade de descobrir quem está com cada livro e se ele pode ser emprestado novamente.',
      chips: ['situação atual', 'necessidade', 'resultado esperado']
    },
    {
      id: 'logic-02-problema-solucao',
      kind: 'cards',
      eyebrow: 'Pensamento computacional',
      title: 'Diferencie problema, objetivo e solução',
      items: [
        { kicker: 'Problema', title: 'O que está errado?', detail: 'Não sabemos quem pegou determinado livro.', tone: 'orange' },
        { kicker: 'Objetivo', title: 'O que deve melhorar?', detail: 'Controlar a disponibilidade e os empréstimos.', tone: 'blue' },
        { kicker: 'Solução', title: 'Como podemos resolver?', detail: 'Organizar passos e registros confiáveis.', tone: 'green' }
      ]
    },
    {
      id: 'logic-02-escopo',
      kind: 'challenge',
      eyebrow: 'Identificando o objetivo',
      title: 'Qual pedido é mais preciso?',
      prompt: 'Qual solicitação permite verificar se o problema da biblioteca foi resolvido?',
      options: [
        { label: 'Criar um sistema bonito para a biblioteca.' },
        { label: 'Permitir consultar a disponibilidade de um livro e registrar seu empréstimo.' },
        { label: 'Usar tecnologias modernas e vários gráficos.' }
      ],
      answerIndex: 1,
      explanation: 'Um objetivo verificável descreve o resultado esperado, não apenas aparência ou tecnologias.'
    },
    {
      id: 'logic-02-decomposicao-conceito',
      kind: 'statement',
      eyebrow: 'Técnica 01',
      title: 'Problemas grandes podem ser divididos em partes menores.',
      lead: 'Decompor é identificar subtarefas que, juntas, resolvem o objetivo.',
      detail: 'Cada parte precisa contribuir para o resultado. Não confunda tarefas essenciais com funcionalidades extras.',
      chips: ['dividir', 'identificar', 'organizar', 'resolver']
    },
    {
      id: 'logic-02-decomposicao-demo',
      kind: 'problem-playground',
      scenario: 'decompose',
      eyebrow: 'Simulação interativa · 01',
      title: 'Decomponha um empréstimo de livro',
      subtitle: 'Selecione apenas as tarefas necessárias para atingir o objetivo.'
    },
    {
      id: 'logic-02-decomposicao-pontos',
      kind: 'cards',
      eyebrow: 'Análise do exercício',
      title: 'O que torna uma boa decomposição?',
      items: [
        { title: 'Coerência', detail: 'Cada tarefa contribui diretamente para o objetivo.', tone: 'blue' },
        { title: 'Clareza', detail: 'A tarefa é pequena e pode ser compreendida.', tone: 'green' },
        { title: 'Conjunto completo', detail: 'Nenhuma etapa essencial fica de fora.', tone: 'orange' }
      ]
    },
    {
      id: 'logic-02-decomposicao-pratica',
      kind: 'exercise',
      eyebrow: 'Prática guiada · 20 minutos',
      title: 'Divida um problema real em subtarefas',
      challenge: 'O empréstimo de equipamentos de uma sala precisa ser organizado.',
      steps: [
        'Descreva o problema em uma frase, sem sugerir tecnologia.',
        'Defina o resultado que deverá ser alcançado.',
        'Liste entre quatro e seis subtarefas essenciais.',
        'Exclua tarefas que não contribuem para o objetivo.',
        'Confira se cada subtarefa é clara, necessária e contribui para o objetivo.'
      ],
      success: ['Problema e objetivo diferentes', 'Subtarefas relevantes', 'Nenhuma ação importante omitida'],
      timebox: '20 minutos'
    },
    {
      id: 'logic-02-algoritmo-definicao',
      kind: 'statement',
      eyebrow: 'Técnica 02',
      title: 'Agora organize as tarefas em instruções.',
      lead: 'Um algoritmo descreve uma sequência finita de passos definidos.',
      detail: 'A pessoa ou máquina que executa o algoritmo precisa compreender a ordem e o que fazer em cada etapa.',
      chips: ['início', 'instruções', 'condições', 'fim']
    },
    {
      id: 'logic-02-ordem',
      kind: 'challenge',
      eyebrow: 'Antes de executar',
      title: 'Por que a ordem dos passos importa?',
      prompt: 'Ao emprestar um livro, o que devemos fazer antes de confirmar ao estudante?',
      options: [
        { label: 'Registrar o empréstimo e verificar a disponibilidade.' },
        { label: 'Confirmar imediatamente, sem consultar o estoque.' },
        { label: 'Ignorar a identificação do livro.' }
      ],
      answerIndex: 0,
      explanation: 'A confirmação só faz sentido quando já sabemos que o livro pode ser emprestado e o empréstimo foi registrado.'
    },
    {
      id: 'logic-02-ordem-demo',
      kind: 'problem-playground',
      scenario: 'order',
      eyebrow: 'Simulação interativa · 02',
      title: 'Organize a sequência do algoritmo',
      subtitle: 'Use as setas para reorganizar as instruções e validar a ordem.'
    },
    {
      id: 'logic-02-ordem-analise',
      kind: 'statement',
      eyebrow: 'Conclusão da simulação',
      title: 'Uma instrução pode depender do resultado de outra.',
      lead: 'Verificar a disponibilidade vem antes de registrar o empréstimo.',
      detail: 'Mudar a ordem pode produzir respostas incorretas ou registros inconsistentes.',
      chips: ['pré-condição', 'dependência', 'ordem', 'consistência']
    },
    {
      id: 'logic-02-entrada-processamento-saida',
      kind: 'cards',
      eyebrow: 'Modelo de um algoritmo',
      title: 'Toda solução transforma informações',
      items: [
        { kicker: 'Entrada', title: 'Quais dados recebemos?', detail: 'A quantidade de cadernos que serão comprados.', tone: 'blue' },
        { kicker: 'Processamento', title: 'O que calculamos?', detail: 'Multiplicamos a quantidade pelo preço unitário.', tone: 'innovation' },
        { kicker: 'Saída', title: 'O que apresentamos?', detail: 'O valor total da compra.', tone: 'green' }
      ]
    },
    {
      id: 'logic-02-trace-demo',
      kind: 'problem-playground',
      scenario: 'trace',
      eyebrow: 'Simulação interativa · 03',
      title: 'Execute um algoritmo com dados diferentes',
      subtitle: 'Altere a quantidade de cadernos e observe como a saída é produzida.'
    },
    {
      id: 'logic-02-trace-quiz',
      kind: 'challenge',
      eyebrow: 'Verificação',
      title: 'Qual é a saída esperada?',
      prompt: 'Cada caderno custa R$ 8. O estudante compra quatro cadernos. Qual deve ser o valor total?',
      options: [
        { label: 'R$ 12,00' },
        { label: 'R$ 32,00' },
        { label: 'R$ 48,00' }
      ],
      answerIndex: 1,
      explanation: 'A entrada é 4, a operação é 4 × 8 e a saída é R$ 32,00.'
    },
    {
      id: 'logic-02-testes',
      kind: 'statement',
      eyebrow: 'Técnica 03',
      title: 'Escrever passos não garante que o algoritmo está correto.',
      lead: 'É necessário testar o algoritmo com diferentes entradas.',
      detail: 'No teste de mesa, acompanhamos as instruções manualmente e comparamos o resultado obtido com o esperado.',
      chips: ['entrada de teste', 'passo a passo', 'resultado esperado', 'resultado obtido']
    },
    {
      id: 'logic-02-testes-casos',
      kind: 'cards',
      eyebrow: 'Testes de mesa · preço unitário R$ 8',
      title: 'Use exemplos para conferir o resultado',
      items: [
        { title: 'Um caderno', detail: '1 × 8 → resultado esperado: R$ 8,00.', tone: 'blue' },
        { title: 'Três cadernos', detail: '3 × 8 → resultado esperado: R$ 24,00.', tone: 'green' },
        { title: 'Cinco cadernos', detail: '5 × 8 → resultado esperado: R$ 40,00.', tone: 'orange' }
      ]
    },
    {
      id: 'logic-02-ambiguidade',
      kind: 'challenge',
      eyebrow: 'Depuração conceitual',
      title: 'Qual instrução precisa ser corrigida?',
      prompt: 'O algoritmo diz “calcule o preço final”. O que falta para que o passo seja executável?',
      options: [
        { label: 'Informar quais dados e qual operação devem ser usados.' },
        { label: 'Trocar o nome da variável por uma palavra maior.' },
        { label: 'Deixar o resultado a critério de quem executa.' }
      ],
      answerIndex: 0,
      explanation: 'É preciso especificar, por exemplo, total = quantidade × preço_unitário e quais valores usar.'
    },
    {
      id: 'logic-02-teste-pratica',
      kind: 'exercise',
      eyebrow: 'Prática guiada · 25 minutos',
      title: 'Faça um teste de mesa completo',
      challenge: 'Calcule o custo de ingressos de R$ 12,00, conforme a quantidade escolhida.',
      steps: [
        'Defina entrada, processamento e saída.',
        'Escreva um algoritmo com instruções numeradas.',
        'Teste as quantidades 1, 2 e 5.',
        'Registre a saída obtida em cada teste.',
        'Confronte os resultados com os valores esperados: 12, 24 e 60 reais.'
      ],
      success: ['Instruções claras', 'Três testes executados', 'Saídas coerentes', 'Correções registradas'],
      timebox: '25 minutos'
    },
    {
      id: 'logic-02-missao-final',
      kind: 'missions',
      eyebrow: 'Desafio final · 40 minutos',
      title: 'Escolha um problema e construa o algoritmo',
      intro: 'Resolva um problema pequeno usando as técnicas desta aula.',
      options: [
        { title: 'Biblioteca', detail: 'Controlar a devolução de um livro.', twist: 'Um estudante pode tentar devolver um título que não emprestou.' },
        { title: 'Cantina', detail: 'Calcular o total de itens comprados.', twist: 'O pedido pode incluir mais de uma unidade do mesmo produto.' },
        { title: 'Sala de aula', detail: 'Organizar o empréstimo de notebooks.', twist: 'Pode não haver equipamento disponível.' }
      ],
      requirements: [
        'Descrever problema e resultado esperado.',
        'Decompor a solução em subtarefas essenciais.',
        'Ordenar e numerar as instruções.',
        'Definir entradas, processamento e saídas.',
        'Executar ao menos dois testes de mesa.'
      ]
    },
    {
      id: 'logic-02-checklist',
      kind: 'checklist',
      eyebrow: 'Encerramento',
      title: 'Você consegue explicar o caminho completo?',
      items: [
        'Definir o problema sem confundi-lo com uma tecnologia.',
        'Identificar o objetivo verificável da solução.',
        'Dividir o problema em subtarefas essenciais.',
        'Ordenar etapas respeitando dependências.',
        'Separar entrada, processamento e saída.',
        'Testar entradas e corrigir erros de lógica.'
      ],
      prompt: 'Antes da Aula 03, escreva um algoritmo de cinco passos para uma tarefa do cotidiano.'
    },
    {
      id: 'logic-02-referencias',
      kind: 'references',
      eyebrow: 'Referências e leituras complementares',
      title: 'Continue aprendendo',
      items: [
        { label: 'MDN Web Docs · Algorithm (glossário)', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Algorithm' },
        { label: 'Khan Academy · Algorithms', url: 'https://www.khanacademy.org/computing/computer-science/algorithms' },
        { label: 'Python Docs · Estruturas de controle', url: 'https://docs.python.org/pt-br/3/tutorial/controlflow.html' }
      ]
    }
  ]
};
