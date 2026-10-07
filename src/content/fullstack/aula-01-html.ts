import type { LessonDefinition } from '../../types/course';

const firstDocument = [
  '<!DOCTYPE html>',
  '<html lang="pt-BR">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '    <title>Minha primeira página</title>',
  '</head>',
  '<body>',
  '    <h1>Olá, Web!</h1>',
  '    <p>Minha primeira página HTML está funcionando.</p>',
  '</body>',
  '</html>'
].join('\n');

const textSymbolsEmoji = [
  '<h1>Minha primeira página</h1>',
  '',
  '<p>',
  '  Estou aprendendo HTML &amp; CSS.',
  '  Hoje descobri que 5 &lt; 10.',
  '</p>',
  '',
  '<p>',
  '  Símbolos: &copy; &reg; &euro;',
  '</p>',
  '',
  '<p>',
  '  Emojis: 🚀 💻 🌐',
  '</p>'
].join('\n');

const hierarchyExample = [
  '<h1>Curso de Desenvolvimento Web</h1>',
  '<p>Visão geral do curso.</p>',
  '',
  '<h2>HTML</h2>',
  '<p>Estrutura e significado.</p>',
  '',
  '<h3>Textos</h3>',
  '<p>Títulos, parágrafos e semântica.</p>',
  '',
  '<h2>CSS</h2>',
  '<p>Apresentação e layout.</p>'
].join('\n');

const linksExample = [
  '<h2 id="contato">Contato</h2>',
  '',
  '<p>',
  '  <a href="https://developer.mozilla.org/">',
  '    Abrir documentação',
  '  </a>',
  '</p>',
  '',
  '<p>',
  '  <a href="#contato">',
  '    Ir para contato',
  '  </a>',
  '</p>'
].join('\n');

const mediaExample = [
  '<img',
  '  src="assets/internet.svg"',
  '  alt="Ilustração de computadores conectados pela Internet"',
  '  width="480"',
  '>',
  '',
  '<audio controls>',
  '  <source src="audio/episodio.mp3" type="audio/mpeg">',
  '</audio>',
  '',
  '<video controls width="480" poster="capa.jpg">',
  '  <source src="video/aula.mp4" type="video/mp4">',
  '</video>'
].join('\n');

const cssWays = [
  '<!-- 1. Inline: uso pontual -->',
  '<h1 style="color: black;">Olá</h1>',
  '',
  '<!-- 2. Interno: demonstração/página isolada -->',
  '<style>',
  '  h1 { color: black; }',
  '</style>',
  '',
  '<!-- 3. Externo: padrão recomendado -->',
  '<link rel="stylesheet" href="styles.css">'
].join('\n');

const integratedStarter = [
  '<!DOCTYPE html>',
  '<html lang="pt-BR">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '    <title>Minha jornada na Web</title>',
  '    <link rel="stylesheet" href="styles.css">',
  '</head>',
  '<body>',
  '    <h1>Minha jornada na Web 🚀</h1>',
  '    <p>Hoje comecei a entender como a Web funciona.</p>',
  '',
  '    <h2>O que aprendi</h2>',
  '    <p>HTML organiza o conteúdo; CSS cuida da apresentação.</p>',
  '',
  '    <h2>Um recurso visual</h2>',
  '    <img',
  '      src="assets/internet.svg"',
  '      alt="Cartoon de pacotes atravessando a Internet"',
  '      width="520"',
  '    >',
  '',
  '    <h2 id="links">Links</h2>',
  '    <p>',
  '      <a href="https://developer.mozilla.org/" target="_blank" rel="noopener">',
  '        Consultar documentação',
  '      </a>',
  '    </p>',
  '</body>',
  '</html>'
].join('\n');

export const aula01Html: LessonDefinition = {
  id: 'fullstack-front-html-aula-01',
  slug: 'aula-01-html-primeira-pagina',
  number: 1,
  title: 'Fundamentos da Web: Internet, HTML e primeiros estilos',
  shortTitle: 'Fundamentos da Web',
  durationMinutes: 240,
  audience: 'Iniciantes, sem necessidade de experiência prévia com programação',
  ucSlug: 'desenvolvimento-front-end',
  objectives: [
    'Explicar a evolução da Internet, o papel dos protocolos, da infraestrutura e dos pacotes de dados.',
    'Distinguir domínio de hospedagem.',
    'Diferenciar front-end, back-end, HTML, CSS e JavaScript.',
    'Preparar VS Code, Google Chrome e extensões úteis para desenvolvimento web.',
    'Construir e explicar a estrutura básica de um documento HTML.',
    'Inserir textos, símbolos especiais e emojis.',
    'Introduzir hierarquia de títulos e semântica HTML5.',
    'Criar links externos e âncoras internas.',
    'Reconhecer opções para imagens, áudio e vídeo na Web.',
    'Introduzir CSS inline, interno e externo e separar conteúdo de apresentação.'
  ],
  sources: [
    {
      label: 'HTML Living Standard',
      author: 'WHATWG',
      note: 'Referência normativa para estrutura, elementos e semântica HTML.'
    },
    {
      label: 'MDN Web Docs',
      author: 'Mozilla',
      note: 'Referência didática para fundamentos da Web, HTML e CSS.'
    }
  ],
  visualPlan: [
    'Cartoons P&B em SVG como linguagem visual prioritária dos conceitos abstratos.',
    'Fluxos animados dentro dos próprios SVGs para pacotes, conexões e transformação visual.',
    'Código real apenas quando o aluno precisa ler ou escrever sintaxe.',
    'Movimentos respeitam prefers-reduced-motion; GSAP fica reservado a interações que exijam timeline programática.'
  ],
  lab: {
    workspacePath: 'labs/html/aula-01/index.html',
    editorLabel: 'Abrir código da Aula 01 no VS Code Web'
  },
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'Desenvolvimento Web · Fundamentos',
      title: 'Como a Web funciona',
      subtitle: 'Internet → ambiente → HTML → mídia → primeiros estilos',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Abra perguntando: quando digitamos um endereço no navegador, o que precisa acontecer até a página aparecer?'
    },
    {
      id: 'objetivo-final',
      kind: 'statement',
      eyebrow: 'Objetivo da aula',
      title: 'Construir o mapa mental antes de decorar tags.',
      lead: 'Entender o caminho completo.',
      detail: 'A aula conecta rede, navegador, servidor, HTML, mídia e CSS antes de aprofundar cada tema.',
      chips: ['Internet', 'Web', 'HTML', 'mídia', 'CSS']
    },
    {
      id: 'roteiro-1',
      kind: 'cards',
      eyebrow: 'Primeiras 2 horas',
      title: 'Da Internet ao primeiro documento',
      items: [
        { kicker: '20 min', title: 'Internet', detail: 'evolução + protocolos + pacotes', tone: 'blue' },
        { kicker: '15 min', title: 'Domínio × hospedagem', detail: 'endereço × armazenamento', tone: 'innovation' },
        { kicker: '20 min', title: 'Front × back', detail: 'áreas + linguagens', tone: 'orange' },
        { kicker: '20 min', title: 'Ambiente', detail: 'VS Code + Chrome + extensões', tone: 'green' },
        { kicker: '35 min', title: 'HTML básico', detail: 'estrutura do documento', tone: 'blue' },
        { kicker: '20 min', title: 'Texto', detail: 'símbolos + emojis', tone: 'innovation' }
      ]
    },
    {
      id: 'roteiro-2',
      kind: 'cards',
      eyebrow: 'Segundas 2 horas',
      title: 'Conteúdo conectado e primeiros estilos',
      items: [
        { kicker: '20 min', title: 'Hierarquia', detail: 'títulos + semântica', tone: 'blue' },
        { kicker: '15 min', title: 'Links', detail: 'externos + âncoras', tone: 'innovation' },
        { kicker: '20 min', title: 'Multimídia', detail: 'imagem + áudio + vídeo', tone: 'orange' },
        { kicker: '15 min', title: 'Intervalo', detail: 'pausa', tone: 'neutral' },
        { kicker: '15 min', title: 'CSS', detail: 'inline + interno + externo', tone: 'green' },
        { kicker: '25 min', title: 'Integração', detail: 'primeira página completa', tone: 'blue' }
      ]
    },
    {
      id: 'historia-web',
      kind: 'timeline',
      eyebrow: 'Evolução da Internet',
      title: 'A Web é uma camada construída sobre uma rede que já existia',
      subtitle: 'alguns marcos para formar o modelo mental',
      items: [
        { year: '1969', title: 'ARPANET', detail: 'Computadores distantes começam a trocar dados em rede.' },
        { year: '1983', title: 'TCP/IP', detail: 'A comunicação passa a adotar uma base comum entre redes.' },
        { year: '1989', title: 'Proposta da Web', detail: 'Hipertexto conecta documentos sobre a infraestrutura da Internet.' },
        { year: '1991', title: 'Web pública', detail: 'Servidor, navegador e HTML começam a se espalhar.' },
        { year: 'Hoje', title: 'Internet global', detail: 'Fibra, rádio, cabos submarinos, data centers e dispositivos.' }
      ]
    },
    {
      id: 'internet-pacotes',
      kind: 'visual',
      eyebrow: 'Infraestrutura',
      title: 'Dados não “teletransportam”: eles atravessam uma rede',
      subtitle: 'dispositivo → roteadores → servidor',
      visual: 'html-internet-packets-cartoon',
      caption: 'A informação é dividida e transportada em pacotes até o destino.'
    },
    {
      id: 'protocolos',
      kind: 'cards',
      eyebrow: 'Protocolos',
      title: 'Cada camada resolve uma parte da comunicação',
      items: [
        { title: 'IP', detail: 'endereçamento e roteamento entre redes', tone: 'blue' },
        { title: 'TCP / QUIC', detail: 'transporte dos dados entre aplicações', tone: 'innovation' },
        { title: 'DNS', detail: 'traduz nomes de domínio em endereços', tone: 'orange' },
        { title: 'HTTP / HTTPS', detail: 'regras para transferir recursos da Web', tone: 'green' }
      ]
    },
    {
      id: 'dominio-hospedagem',
      kind: 'visual',
      eyebrow: 'Onde está o site?',
      title: 'Domínio é endereço. Hospedagem é onde os arquivos ficam.',
      subtitle: 'nome fácil de lembrar ≠ servidor',
      visual: 'html-domain-hosting-cartoon',
      caption: 'O domínio ajuda a localizar; a hospedagem mantém os recursos disponíveis.'
    },
    {
      id: 'front-back',
      kind: 'visual',
      eyebrow: 'Áreas de desenvolvimento',
      title: 'Front-end e back-end trabalham em partes diferentes do sistema',
      subtitle: 'interface visível × processamento e dados',
      visual: 'html-frontend-backend-cartoon',
      caption: 'A fronteira varia por projeto, mas a separação ajuda a entender responsabilidades.'
    },
    {
      id: 'linguagens',
      kind: 'cards',
      eyebrow: 'Tecnologias fundamentais',
      title: 'HTML, CSS e JavaScript não são a mesma coisa',
      items: [
        { title: 'HTML', detail: 'linguagem de marcação: conteúdo + estrutura', tone: 'blue' },
        { title: 'CSS', detail: 'linguagem de estilos: apresentação + layout', tone: 'innovation' },
        { title: 'JavaScript', detail: 'linguagem de programação: comportamento + lógica', tone: 'orange' },
        { title: 'Não existe “a melhor”', detail: 'cada tecnologia resolve tipos de problema', tone: 'green' }
      ]
    },
    {
      id: 'ambiente-visual',
      kind: 'visual',
      eyebrow: 'Preparação',
      title: 'Seu laboratório de desenvolvimento',
      subtitle: 'editor + navegador + ferramentas',
      visual: 'html-dev-environment-cartoon',
      caption: 'Vamos escrever no VS Code e observar o comportamento no Chrome.'
    },
    {
      id: 'ambiente',
      kind: 'checklist',
      eyebrow: 'Preparação do ambiente',
      title: 'Deixe tudo pronto antes de começar a codificar',
      items: [
        'Instalar ou abrir o Visual Studio Code.',
        'Instalar ou abrir o Google Chrome.',
        'Criar uma pasta exclusiva para o projeto.',
        'Abrir a pasta inteira no VS Code.',
        'Conhecer Explorer, editor, terminal e extensões.',
        'Opcional: Live Server para recarregar automaticamente.',
        'Opcional: Prettier para formatação consistente.',
        'Abrir DevTools no navegador e localizar Elements e Console.'
      ]
    },
    {
      id: 'o-que-e-html',
      kind: 'statement',
      eyebrow: 'HTML',
      title: 'HTML é uma linguagem de marcação.',
      lead: 'Conteúdo + estrutura + significado.',
      detail: 'Ele descreve o papel das partes de um documento; não é uma linguagem de programação.',
      chips: ['HyperText', 'Markup', 'Language', 'documento']
    },
    {
      id: 'anatomia-elemento',
      kind: 'anatomy',
      eyebrow: 'Anatomia',
      title: 'Elementos HTML possuem partes identificáveis',
      code: '<p class="destaque">Minha primeira página</p>',
      labels: [
        { token: '<p', label: 'tag de abertura' },
        { token: 'class="destaque"', label: 'atributo + valor' },
        { token: 'Minha primeira página', label: 'conteúdo' },
        { token: '</p>', label: 'tag de fechamento' }
      ]
    },
    {
      id: 'arvore-documento',
      kind: 'visual',
      eyebrow: 'Documento',
      title: 'A estrutura básica tem uma árvore previsível',
      subtitle: 'html → head + body',
      visual: 'document-tree',
      caption: 'head descreve o documento; body contém o conteúdo apresentado.'
    },
    {
      id: 'primeiro-documento',
      kind: 'code',
      eyebrow: 'Estrutura básica',
      title: 'Crie index.html e entenda cada linha',
      subtitle: 'esta estrutura será reutilizada durante todo o curso',
      language: 'html',
      code: firstDocument,
      bullets: [
        '<!DOCTYPE html> → documento HTML moderno',
        'lang → idioma principal',
        'charset → codificação de caracteres',
        'viewport → largura adequada em telas móveis'
      ]
    },
    {
      id: 'laboratorio-primeira-pagina',
      kind: 'lab',
      eyebrow: 'Laboratório ao vivo',
      title: 'Edite o documento e observe o navegador',
      subtitle: 'altere uma coisa por vez e valide o efeito',
      language: 'html',
      starterCode: firstDocument,
      editorPath: 'labs/html/aula-01/index.html',
      instructions: [
        'Troque o h1 pelo seu nome.',
        'Altere o title e observe a aba do navegador.',
        'Adicione um segundo parágrafo.',
        'Inclua um h2 abaixo do primeiro parágrafo.',
        'Abra DevTools e localize os elementos que você escreveu.'
      ]
    },
    {
      id: 'texto-visual',
      kind: 'visual',
      eyebrow: 'Conteúdo',
      title: 'A Web também precisa representar símbolos e caracteres modernos',
      subtitle: 'texto · entidades · Unicode · emojis',
      visual: 'html-text-symbols-emoji-cartoon',
      caption: 'UTF-8 permite trabalhar com grande variedade de caracteres e emojis.'
    },
    {
      id: 'textos-simbolos',
      kind: 'code',
      eyebrow: 'Texto, símbolos e emojis',
      title: 'Caracteres reservados podem ser representados com entidades',
      language: 'html',
      code: textSymbolsEmoji,
      bullets: [
        '&amp; → &',
        '&lt; → <',
        '&gt; → >',
        'UTF-8 permite emojis diretamente no documento'
      ]
    },
    {
      id: 'semantica',
      kind: 'statement',
      eyebrow: 'HTML5',
      title: 'Semântica é escolher elementos pelo significado.',
      lead: 'Design fica para o CSS.',
      detail: 'HTML explica a estrutura do conteúdo; CSS decide como essa estrutura será apresentada.',
      chips: ['h1–h6', 'p', 'significado', 'estrutura']
    },
    {
      id: 'hierarquia',
      kind: 'code',
      eyebrow: 'Hierarquia de títulos',
      title: 'Headings funcionam como um sumário do documento',
      language: 'html',
      code: hierarchyExample,
      bullets: [
        'h1 → assunto principal',
        'h2 → seção',
        'h3 → subseção',
        'não escolha heading pelo tamanho visual'
      ]
    },
    {
      id: 'links',
      kind: 'code',
      eyebrow: 'Links e âncoras',
      title: '<a> conecta documentos e pontos da própria página',
      language: 'html',
      code: linksExample,
      bullets: [
        'href com URL → outro recurso',
        'href="#id" → ponto do mesmo documento',
        'texto do link deve explicar o destino'
      ]
    },
    {
      id: 'multimidia-visual',
      kind: 'visual',
      eyebrow: 'Multimídia',
      title: 'Imagem, áudio e vídeo têm custos e estratégias diferentes',
      subtitle: 'arquivo local × plataforma externa',
      visual: 'html-multimedia-cartoon',
      caption: 'Mídia própria dá controle; serviços externos podem reduzir tráfego e complexidade.'
    },
    {
      id: 'multimidia',
      kind: 'code',
      eyebrow: 'HTML multimídia',
      title: 'HTML possui elementos nativos para imagem, áudio e vídeo',
      language: 'html',
      code: mediaExample,
      bullets: [
        '<img> → imagem e texto alternativo',
        '<audio controls> → reprodução de áudio',
        '<video controls> → reprodução de vídeo',
        'YouTube/Vimeo podem ser incorporados em vez de hospedar vídeo localmente'
      ]
    },
    {
      id: 'imagem-responsiva-intro',
      kind: 'cards',
      eyebrow: 'Imagem responsiva · visão inicial',
      title: 'A mesma imagem não precisa ser enviada para todas as telas',
      items: [
        { title: 'img', detail: 'imagem padrão e texto alternativo', tone: 'blue' },
        { title: 'srcset', detail: 'oferece diferentes arquivos ao navegador', tone: 'innovation' },
        { title: 'sizes', detail: 'informa o espaço provável da imagem', tone: 'orange' },
        { title: 'picture', detail: 'permite direção de arte e formatos', tone: 'green' }
      ]
    },
    {
      id: 'video-local-ou-plataforma',
      kind: 'cards',
      eyebrow: 'Vídeo na Web',
      title: 'Hospedar o vídeo ou incorporar uma plataforma?',
      items: [
        { title: 'Vídeo próprio', detail: 'mais controle sobre arquivo e experiência', tone: 'blue' },
        { title: 'Custo próprio', detail: 'mais tráfego, armazenamento e processamento', tone: 'orange' },
        { title: 'YouTube / Vimeo', detail: 'distribuição e player já resolvidos', tone: 'innovation' },
        { title: 'Trade-off', detail: 'dependência externa, privacidade e interface', tone: 'green' }
      ]
    },
    {
      id: 'intervalo',
      kind: 'statement',
      eyebrow: '15 minutos',
      title: 'Intervalo',
      lead: 'Salve o projeto antes da pausa.',
      detail: 'Na volta: primeiros passos com CSS e integração da página.',
      chips: ['salvar', 'organizar', 'retomar em 15 min']
    },
    {
      id: 'html-css-visual',
      kind: 'visual',
      eyebrow: 'Primeiros passos com CSS',
      title: 'HTML cuida do conteúdo; CSS cuida da forma',
      subtitle: 'estrutura antes da apresentação',
      visual: 'html-css-cartoon',
      caption: 'Separar responsabilidades facilita manutenção e evolução da página.'
    },
    {
      id: 'css-formas',
      kind: 'code',
      eyebrow: 'CSS: três formas de aplicar',
      title: 'Inline, interno e externo existem — mas não têm o mesmo papel',
      language: 'html',
      code: cssWays,
      bullets: [
        'inline → teste pontual ou caso excepcional',
        'interno → demonstração ou página isolada',
        'externo → padrão recomendado para projetos reais'
      ]
    },
    {
      id: 'producao-final',
      kind: 'lab',
      eyebrow: 'Integração · 25 minutos',
      title: 'Monte sua primeira página completa',
      subtitle: 'estrutura + texto + link + imagem + CSS externo',
      language: 'html',
      starterCode: integratedStarter,
      editorPath: 'labs/html/aula-01/index.html',
      instructions: [
        'Troque o texto pelo seu próprio conteúdo.',
        'Mantenha uma hierarquia clara entre h1 e h2.',
        'Adicione pelo menos um símbolo ou emoji.',
        'Inclua uma âncora ou link externo.',
        'Observe o SVG carregado como imagem.',
        'Abra e feche o link de styles.css para comparar HTML puro e CSS.'
      ]
    },
    {
      id: 'checkpoint-final',
      kind: 'checklist',
      eyebrow: 'Fechamento',
      title: 'Antes da Aula 02, você precisa reconhecer estas peças',
      items: [
        'Sei diferenciar Internet e Web.',
        'Sei explicar domínio e hospedagem.',
        'Diferencio front-end e back-end.',
        'Sei por que HTML e CSS não são linguagens de programação.',
        'Consigo criar a estrutura básica de um documento HTML.',
        'Consigo inserir texto, símbolos, emojis, links e mídia.',
        'Entendo a ideia inicial de hierarquia e semântica.',
        'Sei a diferença entre CSS inline, interno e externo.'
      ]
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referências',
      title: 'Documentação para continuar estudando',
      subtitle: 'fontes técnicas antes de tutoriais aleatórios',
      items: [
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/' },
        { label: 'MDN — Getting started with the Web', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started' },
        { label: 'MDN — HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { label: 'MDN — CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
      ]
    },
    {
      id: 'uso-educacional',
      kind: 'statement',
      eyebrow: 'Material de aula',
      title: 'Use, adapte e produza de forma original.',
      lead: 'O objetivo é aprender construindo.',
      detail: 'Mantenha autoria, licença dos recursos e identidade visual ao reutilizar este material em contexto educacional.',
      chips: ['autoria', 'licença', 'identidade visual', 'educação']
    }
  ]
};
