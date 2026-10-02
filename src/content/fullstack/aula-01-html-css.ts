import type { LessonDefinition } from '../../types/course';

const htmlDocument = [
  '<!doctype html>',
  '<html lang="pt-BR">',
  '  <head>',
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '    <title>Minha primeira página</title>',
  '  </head>',
  '  <body>',
  '    <h1>Olá, Web!</h1>',
  '    <p>Esta é a minha primeira página.</p>',
  '  </body>',
  '</html>'
].join('\n');

const cssRule = [
  'h1 {',
  '  color: #004b8d;',
  '  font-size: 2.5rem;',
  '}'
].join('\n');

const connectedCss = [
  '<head>',
  '  <meta charset="UTF-8" />',
  '  <title>Minha página</title>',
  '  <link rel="stylesheet" href="styles.css" />',
  '</head>'
].join('\n');

export const aula01HtmlCss: LessonDefinition = {
  id: 'fullstack-front-aula-01',
  slug: 'aula-01-como-a-web-funciona',
  number: 1,
  title: 'Como a Web funciona: primeiros passos com HTML e CSS',
  shortTitle: 'Web, HTML e CSS',
  durationMinutes: 240,
  audience: 'Iniciantes, sem necessidade de experiência prévia com programação',
  ucSlug: 'desenvolvimento-front-end',
  objectives: [
    'Distinguir Internet, Web, navegador, servidor e página web.',
    'Compreender o papel de HTML, CSS e JavaScript em uma aplicação web.',
    'Reconhecer a anatomia de elementos e de um documento HTML.',
    'Criar uma primeira página com estrutura semântica básica.',
    'Aplicar uma folha de estilos CSS externa com seletores simples.',
    'Construir um pequeno cartão de apresentação como prática de fechamento.'
  ],
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'Programador Full Stack · Desenvolvimento Front-End',
      title: 'Como a Web funciona',
      subtitle: 'Primeiros passos com HTML e CSS',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Comece perguntando quantos sites os alunos já usaram hoje.'
    },
    {
      id: 'rota',
      kind: 'cards',
      eyebrow: 'Roteiro da aula',
      title: 'Do zero até a primeira página estilizada',
      subtitle: 'A progressão foi desenhada para reduzir a carga cognitiva: contexto primeiro, código depois.',
      items: [
        { kicker: '20 min', title: 'Contexto', detail: 'De onde veio a Web e por que ela existe.', tone: 'innovation' },
        { kicker: '60 min', title: 'HTML', detail: 'Estrutura, tags, elementos, atributos e documento.', tone: 'blue' },
        { kicker: '35 min', title: 'Prática 01', detail: 'Construção guiada da primeira página.', tone: 'green' },
        { kicker: '15 min', title: 'Intervalo', detail: 'Pausa entre os dois blocos principais.', tone: 'neutral' },
        { kicker: '45 min', title: 'CSS', detail: 'Seletores, propriedades, valores e folha externa.', tone: 'orange' },
        { kicker: '45 min', title: 'Prática 02', detail: 'Evolução visual da página construída.', tone: 'innovation' },
        { kicker: '20 min', title: 'Desafio + revisão', detail: 'Autonomia assistida e checagem de aprendizagem.', tone: 'blue' }
      ]
    },
    {
      id: 'pergunta-inicial',
      kind: 'statement',
      eyebrow: 'Antes do código',
      title: 'Você provavelmente já usou HTML hoje.',
      lead: 'Mas o navegador esconde quase toda a complexidade.',
      detail: 'Quando abrimos um site, vemos textos, botões, imagens e menus. Por trás da tela existem documentos, regras de estilo, requisições de rede e programas trabalhando juntos.',
      chips: ['site', 'navegador', 'servidor', 'HTML', 'CSS']
    },
    {
      id: 'historia',
      kind: 'timeline',
      eyebrow: 'Uma história curta da Web',
      title: 'A Web nasceu para conectar documentos',
      subtitle: 'Os marcos abaixo ajudam a entender por que HTML começa com conteúdo e hipertexto.',
      items: [
        { year: '1989', title: 'A proposta', detail: 'Tim Berners-Lee propõe um sistema de informação baseado em hipertexto no CERN.' },
        { year: '1990', title: 'As peças fundamentais', detail: 'Surgem o primeiro servidor, o navegador WorldWideWeb e a primeira versão de HTML.' },
        { year: '1991', title: 'A Web se abre', detail: 'O projeto passa a circular além do ambiente inicial do CERN.' },
        { year: '1994', title: 'W3C', detail: 'O consórcio passa a coordenar padrões abertos para a Web.' },
        { year: '1996', title: 'CSS ganha forma', detail: 'CSS começa a separar apresentação visual da estrutura do documento.' }
      ]
    },
    {
      id: 'internet-web',
      kind: 'visual',
      eyebrow: 'Modelo mental',
      title: 'Internet e Web não são a mesma coisa',
      subtitle: 'A Internet é a infraestrutura de rede. A Web é um dos serviços que funciona sobre ela.',
      visual: 'web-internet',
      caption: 'E-mail, jogos e outros serviços também usam a Internet sem serem “a Web”.'
    },
    {
      id: 'request-flow',
      kind: 'visual',
      eyebrow: 'O que acontece no navegador',
      title: 'Você digita um endereço. O navegador precisa buscar recursos.',
      visual: 'request-flow',
      caption: 'Nesta primeira aula, o importante é perceber a sequência cliente → rede → servidor → resposta → renderização.'
    },
    {
      id: 'trio',
      kind: 'visual',
      eyebrow: 'Três responsabilidades diferentes',
      title: 'HTML estrutura. CSS apresenta. JavaScript programa comportamento.',
      subtitle: 'Hoje vamos trabalhar as duas primeiras camadas.',
      visual: 'html-css-js'
    },
    {
      id: 'html-nao-programacao',
      kind: 'statement',
      eyebrow: 'HTML',
      title: 'HTML é uma linguagem de marcação.',
      lead: 'Ele descreve significado e estrutura do conteúdo.',
      detail: 'Um título é marcado como título, um parágrafo como parágrafo e um link como link. O navegador interpreta essa marcação para construir a página.',
      chips: ['estrutura', 'semântica', 'conteúdo', 'hipertexto']
    },
    {
      id: 'anatomia-elemento',
      kind: 'anatomy',
      eyebrow: 'Anatomia de um elemento',
      title: 'Uma pequena linha já possui estrutura',
      code: '<p class="destaque">Minha primeira página</p>',
      labels: [
        { token: '<p', label: 'tag de abertura' },
        { token: 'class="destaque"', label: 'atributo e valor' },
        { token: 'Minha primeira página', label: 'conteúdo' },
        { token: '</p>', label: 'tag de fechamento' }
      ]
    },
    {
      id: 'primeiro-documento',
      kind: 'code',
      eyebrow: 'Primeiro documento',
      title: 'A estrutura mínima que vamos usar',
      subtitle: 'Não memorize agora. Entenda o papel de cada bloco.',
      language: 'html',
      code: htmlDocument,
      bullets: [
        '<!doctype html> informa que estamos escrevendo HTML moderno.',
        '<html lang="pt-BR"> representa o documento e declara seu idioma.',
        '<head> guarda metadados; <body> contém o conteúdo visível.'
      ]
    },
    {
      id: 'head-body',
      kind: 'visual',
      eyebrow: 'Organização do documento',
      title: 'Head descreve a página. Body contém a página.',
      visual: 'document-tree',
      caption: 'Essa separação aparece em praticamente todo documento HTML que você escrever.'
    },
    {
      id: 'semantica',
      kind: 'cards',
      eyebrow: 'Semântica desde o começo',
      title: 'Escolha elementos pelo significado, não pela aparência',
      items: [
        { title: '<h1>', detail: 'Título principal do conteúdo. Ajuda a criar hierarquia.', tone: 'blue' },
        { title: '<p>', detail: 'Parágrafo de texto. Não é apenas “texto solto”.', tone: 'innovation' },
        { title: '<a>', detail: 'Cria um hiperlink para outro recurso ou seção.', tone: 'orange' },
        { title: '<img>', detail: 'Inclui imagem e exige atenção ao texto alternativo.', tone: 'green' },
        { title: '<ul> / <li>', detail: 'Representa listas quando existe uma coleção de itens.', tone: 'neutral' },
        { title: '<main>', detail: 'Identifica o conteúdo principal daquela página.', tone: 'blue' }
      ]
    },
    {
      id: 'pratica-html',
      kind: 'exercise',
      eyebrow: 'Prática guiada 01',
      title: 'Crie seu primeiro cartão de apresentação — somente HTML',
      challenge: 'Monte uma página que apresente uma pessoa fictícia ou um pequeno negócio local.',
      timebox: '35 min',
      steps: [
        'Crie uma pasta e um arquivo index.html.',
        'Adicione doctype, html, head e body.',
        'Inclua um h1 com o nome do projeto.',
        'Adicione dois parágrafos, uma lista com três itens e um link.',
        'Abra o arquivo no navegador e valide o resultado.'
      ],
      success: [
        'O arquivo abre sem erro.',
        'Existe um único h1.',
        'A hierarquia do conteúdo faz sentido mesmo sem CSS.'
      ]
    },
    {
      id: 'css-o-que-e',
      kind: 'statement',
      eyebrow: 'CSS',
      title: 'HTML não foi feito para decidir o visual.',
      lead: 'CSS é a camada de apresentação e layout.',
      detail: 'Com CSS controlamos cores, tipografia, espaçamento, bordas, posicionamento, responsividade, animações e outras características visuais.',
      chips: ['selector', 'property', 'value', 'cascade']
    },
    {
      id: 'anatomia-css',
      kind: 'code',
      eyebrow: 'Anatomia de uma regra',
      title: 'Seletor → declaração → propriedade → valor',
      language: 'css',
      code: cssRule,
      bullets: [
        'h1 seleciona os elementos que receberão a regra.',
        'color e font-size são propriedades.',
        '#004b8d e 2.5rem são valores.'
      ]
    },
    {
      id: 'conectar-css',
      kind: 'code',
      eyebrow: 'Separação de responsabilidades',
      title: 'Vamos usar CSS externo desde a primeira aula',
      subtitle: 'A folha externa ajuda a manter HTML e apresentação organizados.',
      language: 'html',
      code: connectedCss,
      bullets: [
        'index.html guarda estrutura e conteúdo.',
        'styles.css guarda regras de apresentação.',
        'href aponta para o arquivo que será carregado pelo navegador.'
      ]
    },
    {
      id: 'cascata',
      kind: 'cards',
      eyebrow: 'Primeiro contato com a cascata',
      title: 'Por que “Cascading” Style Sheets?',
      subtitle: 'Por enquanto, basta entender três ideias. Aprofundaremos especificidade depois.',
      items: [
        { kicker: '1', title: 'Mais de uma regra pode atingir o mesmo elemento', detail: 'O navegador precisa decidir qual valor usar.', tone: 'blue' },
        { kicker: '2', title: 'A origem e a especificidade importam', detail: 'Seletores diferentes podem ter pesos diferentes.', tone: 'innovation' },
        { kicker: '3', title: 'A ordem pode desempatar', detail: 'Em condições equivalentes, regras posteriores podem prevalecer.', tone: 'orange' }
      ]
    },
    {
      id: 'box-model',
      kind: 'visual',
      eyebrow: 'Todo elemento ocupa espaço',
      title: 'O Box Model será seu mapa para entender layout',
      subtitle: 'Conteúdo, padding, border e margin formam camadas ao redor de uma caixa.',
      visual: 'box-model'
    },
    {
      id: 'antes-depois',
      kind: 'visual',
      eyebrow: 'Mesma estrutura, nova apresentação',
      title: 'CSS muda a aparência sem mudar o significado do HTML',
      visual: 'before-after',
      caption: 'Esse princípio será importante quando avançarmos para responsividade, componentes e design systems.'
    },
    {
      id: 'pratica-css',
      kind: 'exercise',
      eyebrow: 'Prática guiada 02',
      title: 'Transforme seu HTML em um cartão visual',
      challenge: 'Crie styles.css e aplique uma identidade visual simples ao conteúdo da prática anterior.',
      timebox: '45 min',
      steps: [
        'Defina cor de fundo para body.',
        'Centralize a área principal com largura máxima.',
        'Aplique tipografia, cores e espaçamentos.',
        'Crie borda e arredondamento no cartão.',
        'Estilize o link para parecer uma ação clara.'
      ],
      success: [
        'O HTML continua semanticamente legível.',
        'Nenhum estilo foi colocado diretamente nos elementos HTML.',
        'A página continua utilizável em uma janela mais estreita.'
      ]
    },
    {
      id: 'desafio',
      kind: 'exercise',
      eyebrow: 'Desafio de autonomia',
      title: 'Faça uma pequena mudança sem seguir um passo a passo',
      challenge: 'Adicione uma nova seção “O que estou aprendendo” com três tecnologias e destaque visualmente apenas essa seção.',
      timebox: '10 min',
      steps: [
        'Decida quais elementos HTML representam melhor o conteúdo.',
        'Crie uma classe apenas se houver necessidade de selecionar esse bloco.',
        'Faça a alteração no CSS sem copiar estilos inline.'
      ],
      success: [
        'A solução tem HTML válido e organizado.',
        'O CSS resolve o visual sem destruir a semântica.',
        'Você consegue explicar cada linha que adicionou.'
      ]
    },
    {
      id: 'checkpoint',
      kind: 'checklist',
      eyebrow: 'Checkpoint',
      title: 'Ao final da aula, você consegue explicar isto sem olhar?',
      prompt: 'Se algum item ainda estiver nebuloso, ele vira a primeira retomada da próxima aula.',
      items: [
        'Qual é a diferença entre Internet e Web?',
        'O que HTML descreve?',
        'O que são tag, elemento e atributo?',
        'Qual é a diferença entre head e body?',
        'Como um arquivo CSS externo é conectado ao HTML?',
        'O que são seletor, propriedade e valor?',
        'Quais são as quatro camadas básicas do Box Model?'
      ]
    },
    {
      id: 'proxima-aula',
      kind: 'statement',
      eyebrow: 'Próxima aula',
      title: 'HTML semântico + CSS com mais controle',
      lead: 'Vamos sair do cartão simples para uma página completa.',
      detail: 'Na Aula 02, a evolução natural é trabalhar estrutura semântica de página, links, imagens, listas, unidades CSS, seletores e fundamentos de layout.',
      chips: ['header', 'nav', 'main', 'section', 'footer', 'seletores CSS']
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referências técnicas',
      title: 'Continue estudando em fontes primárias e documentação de referência',
      items: [
        { label: 'MDN — HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
        { label: 'MDN — Iniciando com HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax' },
        { label: 'MDN — CSS styling basics', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics' },
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/' },
        { label: 'W3C — History of the Web', url: 'https://www.w3.org/about/history/' }
      ]
    }
  ]
};
