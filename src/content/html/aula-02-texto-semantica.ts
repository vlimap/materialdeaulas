import type { LessonDefinition } from '../../types/course';

const headingExample = [
  '<h1>Como comecei na programação</h1>',
  '<p>Uma jornada do primeiro contato ao primeiro projeto.</p>',
  '',
  '<h2>O começo</h2>',
  '<p>Meu primeiro contato aconteceu por curiosidade.</p>',
  '',
  '<h3>Primeiro código</h3>',
  '<p>Eu queria entender como uma página era construída.</p>',
  '',
  '<h2>O que mudou depois</h2>',
  '<p>Aprender a estruturar ideias mudou minha forma de estudar.</p>'
].join('\n');

const meaningExample = [
  '<p>',
  '  Estudar <strong>HTML é essencial</strong>',
  '  para compreender a estrutura de uma página.',
  '</p>',
  '',
  '<p>',
  '  Eu <em>realmente</em> queria entender',
  '  como a Web funcionava.',
  '</p>',
  '',
  '<p>',
  '  O conceito mais importante hoje é',
  '  <mark>significado</mark>.',
  '</p>',
  '',
  '<p><small>Publicado em material educacional.</small></p>'
].join('\n');

const editionExample = [
  '<p>',
  '  Minha primeira linguagem foi',
  '  <del>Java</del> <ins>JavaScript</ins>.',
  '</p>',
  '',
  '<p>A fórmula da água é H<sub>2</sub>O.</p>',
  '<p>10<sup>2</sup> = 100.</p>'
].join('\n');

const breakExample = [
  '<p>',
  '  Rua das Flores, 100<br>',
  '  Natal — RN',
  '</p>',
  '',
  '<hr>',
  '',
  '<p>Agora o texto muda de assunto.</p>'
].join('\n');

const quoteExample = [
  '<blockquote>',
  '  <p>Aprender programação exige prática constante.</p>',
  '  <cite>Diário de estudos</cite>',
  '</blockquote>',
  '',
  '<p>',
  '  Durante a aula eu pensei:',
  '  <q>agora faz sentido</q>.',
  '</p>'
].join('\n');

const codeExample = [
  '<p>',
  '  Para criar um título principal, use',
  '  <code>&lt;h1&gt;</code>.',
  '</p>',
  '',
  '<pre><code>&lt;h1&gt;Meu artigo&lt;/h1&gt;',
  '&lt;p&gt;Meu primeiro parágrafo.&lt;/p&gt;</code></pre>'
].join('\n');

const entitiesExample = [
  '<p>Para exibir &lt;h1&gt; como texto, use entidades.</p>',
  '<p>5 &lt; 10 e 10 &gt; 5.</p>',
  '<p>HTML &amp; CSS trabalham juntos.</p>',
  '<p>&copy; 2026 Material de Aulas</p>'
].join('\n');

const starterArticle = [
  '<!DOCTYPE html>',
  '<html lang="pt-BR">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '    <title>Como comecei na programação</title>',
  '</head>',
  '<body>',
  '    <h1>Como comecei na programação</h1>',
  '    <p>Escreva aqui uma breve introdução para o artigo.</p>',
  '',
  '    <h2>Meu primeiro contato</h2>',
  '    <p>Conte como aconteceu.</p>',
  '',
  '    <h2>O primeiro desafio</h2>',
  '    <p>Explique uma dificuldade e destaque algo importante.</p>',
  '',
  '    <h2>Um trecho de código</h2>',
  '    <pre><code>&lt;h1&gt;Olá, mundo!&lt;/h1&gt;</code></pre>',
  '',
  '    <hr>',
  '    <p><small>Texto produzido durante a Aula 02 de HTML.</small></p>',
  '</body>',
  '</html>'
].join('\n');

export const aula02Html: LessonDefinition = {
  id: 'html-aula-02',
  status: 'published',
  slug: 'aula-02-texto-semantica',
  number: 2,
  title: 'HTML: texto e semântica',
  shortTitle: 'Texto e semântica',
  durationMinutes: 240,
  audience: 'Iniciantes em desenvolvimento web',
  ucSlug: 'fundamentos-html5',
  objectives: [
    'Organizar um documento com hierarquia coerente de h1 a h6.',
    'Usar parágrafos para representar unidades textuais, sem recorrer a br para espaçamento.',
    'Distinguir aparência visual de significado semântico.',
    'Aplicar strong, em, mark e small conforme o propósito do conteúdo.',
    'Representar edições com del e ins e notações com sub e sup.',
    'Usar br e hr apenas quando a quebra ou mudança temática fizer parte do conteúdo.',
    'Marcar citações com blockquote, q e cite.',
    'Representar trechos e blocos de código com code e pre.',
    'Usar entidades HTML quando caracteres reservados precisam aparecer como conteúdo.',
    'Construir um artigo completo usando somente recursos textuais de HTML.'
  ],
  sources: [
    {
      label: 'HTML Living Standard — The elements of HTML',
      author: 'WHATWG',
      note: 'Referência normativa para significado e contexto dos elementos HTML.'
    },
    {
      label: 'MDN Web Docs — HTML text fundamentals',
      author: 'Mozilla',
      note: 'Referência didática complementar para estrutura e semântica textual.'
    }
  ],
  visualPlan: [
    'SVG autoral animado mostrando a hierarquia h1 → h2 → h3 como árvore de conteúdo.',
    'SVG autoral animado organizando elementos textuais por significado, e não por aparência.',
    'SVG autoral animado mostrando a anatomia de um artigo com título, parágrafos, citação e código.',
    'Todos os SVGs seguem os tokens do projeto e respeitam prefers-reduced-motion.'
  ],
  lab: {
    workspacePath: 'labs/html/aula-02/index.html',
    editorLabel: 'Abrir artigo da Aula 02 no VS Code Web'
  },
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'HTML · Estrutura textual',
      title: 'Texto e semântica',
      subtitle: 'Marcar o que o conteúdo significa — não apenas como ele parece',
      badge: 'Aula 02',
      duration: '4 horas',
      note: 'Comece retomando a Aula 01: estrutura mínima, head, body e primeiro conteúdo.'
    },
    {
      id: 'objetivo',
      kind: 'statement',
      eyebrow: 'Objetivo da aula',
      title: 'Transformar texto comum em conteúdo estruturado e significativo.',
      lead: 'HTML descreve o papel do conteúdo.',
      detail: 'Hoje cada tag entra porque comunica uma função: título, importância, ênfase, citação, edição, notação ou código.',
      chips: ['hierarquia', 'significado', 'texto', 'citação', 'código']
    },
    {
      id: 'roteiro',
      kind: 'cards',
      eyebrow: 'Plano de 4 horas',
      title: 'Uma aula majoritariamente prática',
      subtitle: '240 minutos · do conceito ao artigo completo',
      items: [
        { kicker: '20 min', title: 'Retomada', detail: 'estrutura da Aula 01', tone: 'neutral' },
        { kicker: '40 min', title: 'Conceito + demo', detail: 'hierarquia e significado', tone: 'blue' },
        { kicker: '60 min', title: 'Prática guiada', detail: 'texto, citações e código', tone: 'innovation' },
        { kicker: '15 min', title: 'Intervalo', detail: 'pausa', tone: 'neutral' },
        { kicker: '75 min', title: 'Projeto', detail: 'artigo completo', tone: 'orange' },
        { kicker: '20 min', title: 'Correção', detail: 'comparar decisões', tone: 'green' },
        { kicker: '10 min', title: 'Fechamento', detail: 'checkpoint final', tone: 'blue' }
      ]
    },
    {
      id: 'retomada',
      kind: 'challenge',
      eyebrow: 'Retomada · Aula 01',
      title: 'Onde o conteúdo visível da página deve ficar?',
      prompt: 'Em um documento HTML, onde entram títulos e parágrafos exibidos pelo navegador?',
      options: [
        { label: '<head>' },
        { label: '<body>' },
        { label: '<meta>' }
      ],
      answerIndex: 1,
      explanation: 'O body contém o conteúdo apresentado ao usuário. O head concentra metadados e configurações do documento.'
    },
    {
      id: 'aparencia-significado',
      kind: 'statement',
      eyebrow: 'Ideia central',
      title: 'Escolher uma tag pelo tamanho visual é escolher pelo motivo errado.',
      lead: 'Semântica é significado.',
      detail: 'CSS poderá mudar tamanho, cor e peso. O HTML continua dizendo o que cada trecho representa.',
      chips: ['aparência ≠ significado', 'semântica', 'HTML', 'CSS depois']
    },
    {
      id: 'hierarquia-visual',
      kind: 'visual',
      eyebrow: 'Headings',
      title: 'Títulos formam uma hierarquia de conteúdo',
      subtitle: 'h1 → h2 → h3 → níveis mais específicos',
      visual: 'html-content-hierarchy-svg',
      caption: 'A sequência expressa organização; não é uma escala de tamanhos de fonte.'
    },
    {
      id: 'headings',
      kind: 'code',
      eyebrow: 'h1–h6',
      title: 'Leia os headings como um sumário da página',
      subtitle: 'Cada nível representa uma posição na hierarquia',
      language: 'html',
      code: headingExample,
      bullets: [
        'h1 representa o assunto principal do documento.',
        'h2 abre seções dentro desse assunto.',
        'h3 aprofunda uma seção h2.',
        'Evite escolher o nível porque “fica maior” ou “fica menor”.'
      ]
    },
    {
      id: 'desafio-heading',
      kind: 'challenge',
      eyebrow: 'Decisão estrutural',
      title: 'Qual heading representa uma subseção?',
      prompt: 'Depois de <h2>O começo</h2>, “Primeiro código” é um tópico interno dessa seção. Qual opção comunica melhor essa relação?',
      options: [
        { label: '<h1>Primeiro código</h1>' },
        { label: '<h3>Primeiro código</h3>' },
        { label: '<p><strong>Primeiro código</strong></p>' }
      ],
      answerIndex: 1,
      explanation: 'h3 comunica que o conteúdo está subordinado à seção h2 anterior.'
    },
    {
      id: 'paragrafos',
      kind: 'statement',
      eyebrow: 'Parágrafos',
      title: 'Um parágrafo é uma unidade de conteúdo, não uma ferramenta de espaçamento.',
      lead: 'Use <p> para uma ideia textual.',
      detail: 'O espaço visual entre parágrafos pertence ao CSS. Não empilhe br para empurrar conteúdo.',
      chips: ['p', 'conteúdo', 'fluxo', 'sem br para espaço']
    },
    {
      id: 'semantica-visual',
      kind: 'visual',
      eyebrow: 'Mapa de significado',
      title: 'Elementos diferentes comunicam intenções diferentes',
      subtitle: 'importância · ênfase · edição · notação · código',
      visual: 'html-text-semantics-svg',
      caption: 'O navegador pode estilizar tags, mas a escolha começa pelo significado.'
    },
    {
      id: 'strong-em-mark-small',
      kind: 'code',
      eyebrow: 'Significado inline',
      title: 'Importância, ênfase, relevância e observação',
      language: 'html',
      code: meaningExample,
      bullets: [
        '<strong> → importância.',
        '<em> → ênfase que altera a leitura.',
        '<mark> → trecho relevante naquele contexto.',
        '<small> → observação secundária ou texto de menor destaque semântico.'
      ]
    },
    {
      id: 'desafio-strong-em',
      kind: 'challenge',
      eyebrow: 'Semântica',
      title: 'Strong e em não significam a mesma coisa',
      prompt: 'Na frase “Eu realmente queria entender”, a palavra “realmente” muda a entonação da leitura. Qual elemento é mais adequado?',
      options: [
        { label: '<strong>' },
        { label: '<em>' },
        { label: '<mark>' }
      ],
      answerIndex: 1,
      explanation: 'em representa ênfase. strong representa importância, que é um significado diferente.'
    },
    {
      id: 'del-ins-sub-sup',
      kind: 'code',
      eyebrow: 'Edição e notação',
      title: 'HTML também representa mudanças e notações do texto',
      language: 'html',
      code: editionExample,
      bullets: [
        '<del> identifica conteúdo removido.',
        '<ins> identifica conteúdo inserido.',
        '<sub> representa subscrito.',
        '<sup> representa sobrescrito.'
      ]
    },
    {
      id: 'br-hr',
      kind: 'code',
      eyebrow: 'Quebras com significado',
      title: 'br e hr não existem para “dar espaço”',
      language: 'html',
      code: breakExample,
      bullets: [
        '<br> é útil quando a quebra de linha pertence ao conteúdo.',
        '<hr> representa uma mudança temática.',
        'Espaçamento visual será responsabilidade do CSS.'
      ]
    },
    {
      id: 'desafio-br',
      kind: 'challenge',
      eyebrow: 'Erro comum',
      title: 'Como criar espaço entre dois parágrafos?',
      prompt: 'Você quer apenas aumentar a distância visual entre dois parágrafos. O que deve fazer?',
      options: [
        { label: 'Adicionar vários <br>' },
        { label: 'Usar CSS quando chegar a etapa de apresentação' },
        { label: 'Inserir vários <hr>' }
      ],
      answerIndex: 1,
      explanation: 'br e hr têm significado próprio. Espaçamento visual é responsabilidade do CSS.'
    },
    {
      id: 'citacoes',
      kind: 'code',
      eyebrow: 'Citações',
      title: 'Citações curtas e longas recebem marcações diferentes',
      language: 'html',
      code: quoteExample,
      bullets: [
        '<blockquote> → citação em bloco.',
        '<q> → citação curta dentro do fluxo do texto.',
        '<cite> → referência ao título de uma obra ou fonte citada.'
      ]
    },
    {
      id: 'codigo',
      kind: 'code',
      eyebrow: 'Conteúdo técnico',
      title: 'code identifica código; pre preserva a formatação',
      language: 'html',
      code: codeExample,
      bullets: [
        '<code> marca um fragmento de código.',
        '<pre> preserva espaços e quebras de linha.',
        'Blocos de código normalmente combinam pre + code.'
      ]
    },
    {
      id: 'entidades',
      kind: 'code',
      eyebrow: 'Caracteres reservados',
      title: 'Entidades permitem exibir caracteres que têm papel na própria sintaxe',
      language: 'html',
      code: entitiesExample,
      bullets: [
        '&lt; representa <.',
        '&gt; representa >.',
        '&amp; representa &.',
        '&copy; representa ©.'
      ]
    },
    {
      id: 'artigo-visual',
      kind: 'visual',
      eyebrow: 'Integração',
      title: 'Um artigo combina vários papéis textuais',
      subtitle: 'título → introdução → desenvolvimento → citação → código',
      visual: 'html-article-anatomy-svg',
      caption: 'O objetivo não é usar muitas tags; é escolher a marcação adequada ao conteúdo.'
    },
    {
      id: 'laboratorio-guiado',
      kind: 'lab',
      eyebrow: 'Prática guiada',
      title: 'Comece o artigo “Como comecei na programação”',
      subtitle: 'Escreva enquanto observa o resultado no navegador',
      language: 'html',
      starterCode: starterArticle,
      instructions: [
        'Mantenha um único h1 para o assunto principal.',
        'Crie pelo menos três seções usando h2.',
        'Adicione uma subseção com h3 onde fizer sentido.',
        'Use strong, em e mark em contextos diferentes.',
        'Inclua uma edição com del e ins.',
        'Inclua pelo menos um exemplo com sub ou sup.',
        'Adicione uma citação com blockquote e cite.',
        'Inclua um bloco pre + code.',
        'Use hr somente se houver mudança temática real.',
        'Exiba uma tag HTML como texto usando entidades.'
      ],
      editorPath: 'labs/html/aula-02/index.html'
    },
    {
      id: 'projeto',
      kind: 'exercise',
      eyebrow: 'Projeto · 75 minutos',
      title: 'Produza um artigo completo sem copiar o código do professor',
      challenge: 'Crie uma página de artigo/blog sobre “Como comecei na programação” ou um tema equivalente da sua trajetória.',
      steps: [
        'Planeje título, subtítulo e seções antes de escrever tags.',
        'Construa uma hierarquia coerente com h1, h2 e h3.',
        'Escreva parágrafos reais, evitando texto de preenchimento.',
        'Inclua uma citação e identifique sua fonte.',
        'Inclua um trecho ou bloco de código.',
        'Use elementos de ênfase conforme o significado.',
        'Use uma divisão temática quando ela realmente existir.',
        'Revise o documento sem considerar aparência visual.'
      ],
      success: [
        'A hierarquia pode ser entendida lendo somente os headings.',
        'Strong, em e mark possuem justificativas diferentes.',
        'br não foi usado para criar espaçamento.',
        'Citações e código estão semanticamente identificados.',
        'Caracteres reservados aparecem corretamente quando usados como conteúdo.'
      ],
      timebox: '75 minutos'
    },
    {
      id: 'correcao-coletiva',
      kind: 'checklist',
      eyebrow: 'Correção coletiva · 20 minutos',
      title: 'Compare decisões, não apenas resultados visuais',
      prompt: 'Duas páginas podem parecer iguais e ainda ter HTML semanticamente diferente.',
      items: [
        'O h1 representa claramente o assunto principal?',
        'Os níveis h2/h3 refletem a organização do texto?',
        'Cada parágrafo representa uma unidade de ideia?',
        'Strong e em foram usados pelo significado?',
        'br aparece apenas quando a quebra de linha faz parte do conteúdo?',
        'A citação está marcada como citação?',
        'O código está identificado como código?',
        'As entidades foram usadas quando necessárias?'
      ]
    },
    {
      id: 'checkpoint',
      kind: 'challenge',
      eyebrow: 'Fechamento',
      title: 'Qual é a pergunta certa antes de escolher uma tag?',
      prompt: 'Ao marcar um trecho de conteúdo em HTML, qual raciocínio deve vir primeiro?',
      options: [
        { label: 'Qual tag deixa o texto mais bonito?' },
        { label: 'Qual elemento representa melhor o significado deste conteúdo?' },
        { label: 'Qual tag produz mais espaço?' }
      ],
      answerIndex: 1,
      explanation: 'HTML começa pelo significado e pela estrutura. Aparência será tratada com CSS.'
    },
    {
      id: 'checklist-final',
      kind: 'checklist',
      eyebrow: 'Saída da Aula 02',
      title: 'O que você precisa dominar antes de avançar',
      items: [
        'Entendo a diferença entre aparência e semântica.',
        'Consigo organizar headings em níveis coerentes.',
        'Sei usar p sem depender de br para espaçamento.',
        'Diferencio strong, em, mark e small.',
        'Sei usar del, ins, sub e sup.',
        'Sei decidir quando br e hr fazem sentido.',
        'Sei marcar blockquote, q e cite.',
        'Sei usar code e pre.',
        'Sei exibir caracteres reservados com entidades HTML.'
      ]
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referências',
      title: 'Continue pela especificação e documentação',
      subtitle: 'Use documentação como fonte de decisão semântica',
      items: [
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/multipage/' },
        { label: 'WHATWG — Sections', url: 'https://html.spec.whatwg.org/multipage/sections.html' },
        { label: 'WHATWG — Text-level semantics', url: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html' },
        { label: 'MDN — HTML text fundamentals', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs' }
      ]
    }
  ]
};
