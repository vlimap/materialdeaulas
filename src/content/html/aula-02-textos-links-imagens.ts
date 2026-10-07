import type { LessonDefinition } from '../../types/course';

const textStructureExample = [
  '<main>',
  '  <h1>Guia de estudos de HTML</h1>',
  '  <p>Organize o conteúdo antes de pensar na aparência.</p>',
  '',
  '  <h2>Conteúdos da semana</h2>',
  '  <p>Comece pelos fundamentos e avance gradualmente.</p>',
  '',
  '  <h3>HTML</h3>',
  '  <p>Estrutura, significado e navegação.</p>',
  '</main>'
].join('\n');

const emphasisExample = [
  '<p>',
  '  O navegador interpreta <strong>HTML</strong>',
  '  para estruturar o conteúdo.',
  '</p>',
  '',
  '<p>',
  '  Use <em>ênfase</em> quando a entonação',
  '  fizer parte do significado.',
  '</p>',
  '',
  '<p>',
  '  Para representar código, use <code>&lt;h1&gt;</code>.',
  '</p>'
].join('\n');

const listExample = [
  '<h2>Plano de estudo</h2>',
  '',
  '<ol>',
  '  <li>Revisar a estrutura do documento</li>',
  '  <li>Praticar títulos e parágrafos</li>',
  '  <li>Construir links</li>',
  '  <li>Inserir imagens acessíveis</li>',
  '</ol>',
  '',
  '<h2>Tecnologias</h2>',
  '<ul>',
  '  <li>HTML</li>',
  '  <li>CSS</li>',
  '  <li>JavaScript</li>',
  '</ul>'
].join('\n');

const linkExample = [
  '<nav aria-label="Conteúdos da aula">',
  '  <a href="#textos">Textos</a>',
  '  <a href="sobre.html">Sobre o projeto</a>',
  '  <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">',
  '    HTML Living Standard',
  '  </a>',
  '</nav>'
].join('\n');

const imageExample = [
  '<figure>',
  '  <img',
  '    src="images/web.svg"',
  '    alt="Diagrama com três documentos conectados por links"',
  '    width="640"',
  '    height="360"',
  '  />',
  '  <figcaption>',
  '    Documentos conectados formam caminhos de navegação.',
  '  </figcaption>',
  '</figure>'
].join('\n');

const starterLab = [
  '<!doctype html>',
  '<html lang="pt-BR">',
  '  <head>',
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '    <title>Guia de estudos | HTML</title>',
  '  </head>',
  '  <body>',
  '    <header>',
  '      <h1>Meu guia de estudos</h1>',
  '      <p>Uma página construída somente com HTML.</p>',
  '    </header>',
  '',
  '    <main>',
  '      <section id="textos">',
  '        <h2>O que estou aprendendo</h2>',
  '        <p>Complete esta seção com textos, ênfase e código.</p>',
  '      </section>',
  '',
  '      <section id="links">',
  '        <h2>Links úteis</h2>',
  '        <!-- Adicione links internos, relativos e externos -->',
  '      </section>',
  '',
  '      <section id="imagem">',
  '        <h2>Uma imagem com contexto</h2>',
  '        <!-- Adicione figure, img, alt e figcaption -->',
  '      </section>',
  '    </main>',
  '  </body>',
  '</html>'
].join('\n');

export const aula02Html: LessonDefinition = {
  id: 'html-aula-02',
  status: 'published',
  slug: 'aula-02-textos-links-imagens',
  number: 2,
  title: 'HTML: textos, links, imagens e organização de conteúdo',
  shortTitle: 'Conteúdo HTML',
  durationMinutes: 240,
  audience: 'Iniciantes em desenvolvimento web',
  ucSlug: 'fundamentos-html5',
  objectives: [
    'Criar hierarquia textual coerente com títulos e parágrafos.',
    'Usar strong, em, code, blockquote e listas de acordo com o significado.',
    'Construir links internos, relativos e externos com texto descritivo.',
    'Distinguir caminhos relativos de URLs absolutas.',
    'Inserir imagens com src, alt, width, height, figure e figcaption.',
    'Reconhecer quando o texto alternativo deve descrever conteúdo e quando uma imagem é decorativa.',
    'Organizar uma página de conteúdo sem depender de CSS para comunicar estrutura.'
  ],
  sources: [
    {
      label: 'HTML Living Standard',
      author: 'WHATWG',
      note: 'Referência normativa para elementos, links e imagens.'
    },
    {
      label: 'MDN Web Docs — Structuring content with HTML',
      author: 'Mozilla',
      note: 'Referência didática complementar para links, imagens e texto alternativo.'
    }
  ],
  visualPlan: [
    'Reutilizar o mapa animado de hipertexto para explicar links como relações entre recursos.',
    'Reutilizar o visual alt-demo para comparar imagem disponível, imagem indisponível e texto alternativo.',
    'Runway: gerar futuramente um clipe curto mostrando documentos conectados e navegação entre recursos, sem texto incorporado no vídeo.',
    'Runway: gerar futuramente um clipe curto mostrando uma imagem falhando e o conteúdo permanecendo compreensível por meio de contexto textual.'
  ],
  lab: {
    workspacePath: 'labs/html/aula-02/index.html',
    editorLabel: 'Abrir atividade da Aula 02 no VS Code Web'
  },
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'HTML · Conteúdo e navegação',
      title: 'Textos, links e imagens',
      subtitle: 'Estrutura que continua fazendo sentido antes do CSS',
      badge: 'Aula 02',
      duration: '4 horas',
      note: 'Retome a Aula 01 perguntando: se retirarmos toda a aparência, o documento ainda comunica sua estrutura?'
    },
    {
      id: 'objetivo',
      kind: 'statement',
      eyebrow: 'Objetivo da aula',
      title: 'Transformar conteúdo bruto em um documento navegável e compreensível.',
      lead: 'Estrutura primeiro. Aparência depois.',
      detail: 'Hoje o foco é escolher elementos pelo significado e construir relações claras entre partes e recursos.',
      chips: ['texto', 'hierarquia', 'links', 'imagens', 'acessibilidade']
    },
    {
      id: 'roteiro',
      kind: 'cards',
      eyebrow: 'Plano de 4 horas',
      title: 'Progressão da aula',
      subtitle: 'Da leitura linear à navegação entre recursos',
      items: [
        { kicker: '35 min', title: 'Hierarquia textual', detail: 'h1–h6 + parágrafos', tone: 'blue' },
        { kicker: '30 min', title: 'Semântica de texto', detail: 'strong + em + code + blockquote', tone: 'innovation' },
        { kicker: '30 min', title: 'Listas', detail: 'ordem, agrupamento e leitura', tone: 'green' },
        { kicker: '45 min', title: 'Links', detail: 'href + caminhos + destinos', tone: 'orange' },
        { kicker: '15 min', title: 'Intervalo', detail: 'pausa', tone: 'neutral' },
        { kicker: '45 min', title: 'Imagens', detail: 'src + alt + figure', tone: 'blue' },
        { kicker: '30 min', title: 'Laboratório', detail: 'guia de estudos em HTML', tone: 'innovation' },
        { kicker: '10 min', title: 'Revisão', detail: 'checkpoint final', tone: 'green' }
      ]
    },
    {
      id: 'texto-nao-e-tamanho',
      kind: 'statement',
      eyebrow: 'Modelo mental',
      title: 'Um título não é “texto grande”.',
      lead: 'É um nível na estrutura do documento.',
      detail: 'A aparência pode mudar com CSS; o significado do elemento permanece no HTML.',
      chips: ['h1', 'h2', 'h3', 'estrutura', 'significado']
    },
    {
      id: 'hierarquia-textual',
      kind: 'code',
      eyebrow: 'Hierarquia',
      title: 'Títulos organizam seções; parágrafos desenvolvem ideias',
      subtitle: 'Leia a estrutura como um sumário',
      language: 'html',
      code: textStructureExample,
      bullets: [
        'Use níveis de heading para representar a organização do conteúdo.',
        'Não escolha h1–h6 pelo tamanho visual.',
        'Parágrafos representam unidades de texto, não espaçamento.'
      ]
    },
    {
      id: 'desafio-heading',
      kind: 'challenge',
      eyebrow: 'Checkpoint',
      title: 'Qual opção mantém a hierarquia mais coerente?',
      prompt: 'Depois de um <h2> chamado “Conteúdos da semana”, qual heading representa naturalmente uma subseção chamada “HTML”?',
      options: [
        { label: '<h1>HTML</h1>' },
        { label: '<h3>HTML</h3>' },
        { label: '<p><strong>HTML</strong></p>' }
      ],
      answerIndex: 1,
      explanation: 'Se “HTML” é uma subseção direta do conteúdo introduzido por h2, h3 expressa essa relação estrutural.'
    },
    {
      id: 'semantica-inline',
      kind: 'code',
      eyebrow: 'Texto com significado',
      title: 'Ênfase e importância não são apenas efeitos visuais',
      language: 'html',
      code: emphasisExample,
      bullets: [
        '<strong> indica importância.',
        '<em> marca ênfase contextual.',
        '<code> identifica um fragmento de código.'
      ]
    },
    {
      id: 'citacoes',
      kind: 'cards',
      eyebrow: 'Mais elementos de texto',
      title: 'Escolha o elemento pelo papel do conteúdo',
      items: [
        { title: '<blockquote>', detail: 'Citação em bloco de outra fonte.', tone: 'blue' },
        { title: '<q>', detail: 'Citação curta dentro de uma frase.', tone: 'innovation' },
        { title: '<abbr>', detail: 'Abreviação ou sigla com expansão contextual.', tone: 'orange' },
        { title: '<br>', detail: 'Quebra de linha quando a própria linha tem significado.', tone: 'green' },
        { title: '<hr>', detail: 'Mudança temática entre blocos de conteúdo.', tone: 'neutral' },
        { title: '<pre>', detail: 'Conteúdo em que espaços e quebras devem ser preservados.', tone: 'blue' }
      ]
    },
    {
      id: 'listas',
      kind: 'code',
      eyebrow: 'Agrupamento',
      title: 'Listas também comunicam estrutura',
      subtitle: 'Ordem importa? Use ol. Ordem não importa? Use ul.',
      language: 'html',
      code: listExample,
      bullets: [
        '<ol> comunica sequência ou ordenação.',
        '<ul> comunica agrupamento sem ordem obrigatória.',
        '<li> representa cada item da lista.'
      ]
    },
    {
      id: 'desafio-lista',
      kind: 'challenge',
      eyebrow: 'Decisão semântica',
      title: 'Qual lista representa uma receita passo a passo?',
      prompt: 'A sequência das etapas altera o resultado. Qual elemento é mais adequado?',
      options: [
        { label: '<ul>' },
        { label: '<ol>' },
        { label: '<p>' }
      ],
      answerIndex: 1,
      explanation: 'Quando a ordem é parte do significado, uma lista ordenada comunica melhor a informação.'
    },
    {
      id: 'links-conectam-recursos',
      kind: 'visual',
      eyebrow: 'O H de HTML',
      title: 'Links transformam documentos em uma rede',
      subtitle: 'recurso atual → destino',
      visual: 'hypertext-map',
      caption: 'O elemento a cria um hiperlink quando possui um href apontando para outro recurso ou fragmento.'
    },
    {
      id: 'anatomia-link',
      kind: 'anatomy',
      eyebrow: 'Anatomia do link',
      title: 'O texto visível e o destino cumprem papéis diferentes',
      code: '<a href="sobre.html">Conheça o projeto</a>',
      labels: [
        { token: '<a', label: 'elemento âncora' },
        { token: 'href="sobre.html"', label: 'destino do hiperlink' },
        { token: 'Conheça o projeto', label: 'texto do link' },
        { token: '</a>', label: 'fechamento' }
      ]
    },
    {
      id: 'tipos-links',
      kind: 'code',
      eyebrow: 'Navegação',
      title: 'Um mesmo elemento pode apontar para destinos diferentes',
      language: 'html',
      code: linkExample,
      bullets: [
        '#textos → fragmento do documento atual.',
        'sobre.html → caminho relativo.',
        'https://... → URL absoluta.',
        'target="_blank" deve ser usado com critério e acompanhado de rel adequado.'
      ]
    },
    {
      id: 'caminhos',
      kind: 'cards',
      eyebrow: 'Caminhos relativos',
      title: 'O ponto de partida é o arquivo atual',
      items: [
        { title: 'sobre.html', detail: 'Arquivo no mesmo diretório.', tone: 'blue' },
        { title: 'paginas/sobre.html', detail: 'Entra em uma pasta filha.', tone: 'innovation' },
        { title: '../index.html', detail: 'Sobe um nível de diretório.', tone: 'orange' },
        { title: '#contato', detail: 'Vai para um id no documento.', tone: 'green' }
      ]
    },
    {
      id: 'desafio-caminho',
      kind: 'challenge',
      eyebrow: 'Raciocínio de arquivo',
      title: 'Qual caminho volta para a página inicial?',
      prompt: 'Você está em paginas/sobre.html e index.html está um nível acima.',
      options: [
        { label: 'index.html' },
        { label: '../index.html' },
        { label: '/sobre/index.html' }
      ],
      answerIndex: 1,
      explanation: '../ sobe da pasta paginas para o diretório pai, onde está index.html.'
    },
    {
      id: 'texto-link',
      kind: 'statement',
      eyebrow: 'Acessibilidade',
      title: '“Clique aqui” perde contexto quando lido isoladamente.',
      lead: 'O texto do link deve indicar o destino ou a ação.',
      detail: 'Prefira “Consultar o HTML Living Standard” a “Clique aqui”.',
      chips: ['texto descritivo', 'contexto', 'teclado', 'leitor de tela']
    },
    {
      id: 'imagem-nao-e-texto',
      kind: 'statement',
      eyebrow: 'Imagens',
      title: 'Uma imagem pode carregar informação — ou apenas decoração.',
      lead: 'O HTML precisa comunicar essa diferença.',
      detail: 'src aponta para o recurso; alt representa sua alternativa textual quando necessário.',
      chips: ['img', 'src', 'alt', 'width', 'height']
    },
    {
      id: 'anatomia-imagem',
      kind: 'code',
      eyebrow: 'Imagem com contexto',
      title: 'Imagem, alternativa textual e legenda trabalham juntas',
      language: 'html',
      code: imageExample,
      bullets: [
        'src localiza o recurso.',
        'alt descreve a informação necessária quando a imagem não pode ser percebida.',
        'width e height ajudam a reservar espaço.',
        'figure + figcaption associam mídia e legenda quando existe uma unidade de conteúdo.'
      ]
    },
    {
      id: 'alt-visual',
      kind: 'visual',
      eyebrow: 'Texto alternativo',
      title: 'A página precisa continuar comunicando quando a imagem não aparece',
      subtitle: 'imagem disponível · falha · alternativa textual',
      visual: 'alt-demo',
      caption: 'A descrição deve refletir o propósito da imagem naquele contexto, não uma transcrição mecânica de pixels.'
    },
    {
      id: 'alt-decisao',
      kind: 'cards',
      eyebrow: 'Decisão de alt',
      title: 'O contexto determina a alternativa textual',
      items: [
        { title: 'Informativa', detail: 'Descreva a informação relevante.', tone: 'blue' },
        { title: 'Funcional', detail: 'Se a imagem é um link/botão, comunique a ação ou destino.', tone: 'innovation' },
        { title: 'Decorativa', detail: 'Use alt="" quando ela não acrescenta informação.', tone: 'green' },
        { title: 'Texto na imagem', detail: 'Evite. Se inevitável, ofereça equivalente textual.', tone: 'orange' }
      ]
    },
    {
      id: 'laboratorio',
      kind: 'lab',
      eyebrow: 'Laboratório guiado',
      title: 'Construa um guia de estudos navegável',
      subtitle: 'Somente HTML',
      language: 'html',
      starterCode: starterLab,
      instructions: [
        'Crie pelo menos dois níveis coerentes de heading.',
        'Adicione um parágrafo com strong, em e code.',
        'Crie uma lista ordenada e uma lista não ordenada.',
        'Adicione um link para um fragmento da própria página.',
        'Adicione um link relativo para sobre.html.',
        'Adicione um link externo com texto descritivo.',
        'Insira images/web.svg com alt adequado dentro de figure.',
        'Adicione figcaption explicando o papel da imagem.'
      ],
      editorPath: 'labs/html/aula-02/index.html'
    },
    {
      id: 'exercicio-revisao',
      kind: 'exercise',
      eyebrow: 'Prática individual',
      title: 'Revise a página como se CSS não existisse',
      challenge: 'A página deve ser compreensível, navegável e organizada apenas pela marcação HTML.',
      steps: [
        'Leia somente os headings e verifique se eles formam um sumário coerente.',
        'Leia os textos dos links fora do contexto e verifique se ainda fazem sentido.',
        'Desative mentalmente a imagem e confira se o conteúdo continua compreensível.',
        'Confira se cada lista representa corretamente ordem ou agrupamento.',
        'Verifique os caminhos relativos a partir do arquivo atual.'
      ],
      success: [
        'Nenhum heading foi escolhido apenas pelo tamanho visual.',
        'Nenhum link depende de “clique aqui”.',
        'Toda imagem informativa possui alternativa textual adequada.',
        'Os caminhos relativos resolvem corretamente.',
        'A estrutura permanece útil sem CSS.'
      ],
      timebox: '20 minutos'
    },
    {
      id: 'missao',
      kind: 'missions',
      eyebrow: 'Produção',
      title: 'Escolha um conteúdo real para estruturar',
      intro: 'A técnica é a mesma; o contexto muda.',
      options: [
        { title: 'Guia de estudos', detail: 'Organize assuntos, etapas e referências.', twist: 'Inclua navegação interna por fragmentos.' },
        { title: 'Página de projeto', detail: 'Explique objetivo, tecnologias e links úteis.', twist: 'Inclua uma imagem com legenda contextual.' },
        { title: 'Mini documentação', detail: 'Explique um comando ou conceito técnico.', twist: 'Inclua exemplos com code e uma lista ordenada.' }
      ],
      requirements: [
        'Hierarquia de headings coerente.',
        'Parágrafos e elementos de ênfase usados pelo significado.',
        'Pelo menos duas listas com finalidades distintas.',
        'Links interno, relativo e externo.',
        'Imagem com decisão explícita de alt.',
        'Documento válido e legível sem CSS.'
      ]
    },
    {
      id: 'checklist',
      kind: 'checklist',
      eyebrow: 'Antes de encerrar',
      title: 'Checklist da Aula 02',
      prompt: 'Você consegue justificar cada elemento usado?',
      items: [
        'Sei diferenciar heading de texto apenas visualmente destacado.',
        'Sei quando usar strong, em e code.',
        'Sei decidir entre ol e ul.',
        'Sei explicar href e a diferença entre caminho relativo e URL absoluta.',
        'Sei criar links para fragmentos com id.',
        'Sei inserir imagens com src e alt.',
        'Sei reconhecer imagem informativa, funcional e decorativa.',
        'Sei usar figure e figcaption quando imagem e legenda formam uma unidade.'
      ]
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referências',
      title: 'Continue pela documentação',
      subtitle: 'Especificação e material de apoio',
      items: [
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/' },
        { label: 'WHATWG — Links', url: 'https://html.spec.whatwg.org/dev/links.html' },
        { label: 'MDN — Creating links', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links' },
        { label: 'MDN — HTML images', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images' }
      ]
    }
  ]
};
