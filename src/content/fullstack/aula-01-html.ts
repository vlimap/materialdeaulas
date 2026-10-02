import type { LessonDefinition } from '../../types/course';

const firstDocument = [
  '<!doctype html>',
  '<html lang="pt-BR">',
  '  <head>',
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '    <title>Minha primeira página</title>',
  '  </head>',
  '  <body>',
  '    <h1>Olá, Web!</h1>',
  '    <p>Minha primeira página HTML está funcionando.</p>',
  '  </body>',
  '</html>'
].join('\n');

const nestedElements = [
  '<article>',
  '  <h2>Meu primeiro projeto</h2>',
  '  <p>',
  '    Estou aprendendo <strong>HTML</strong>',
  '    para estruturar conteúdo na Web.',
  '  </p>',
  '</article>'
].join('\n');

const listExample = [
  '<h2>O que estou aprendendo</h2>',
  '<ul>',
  '  <li>Estrutura de documentos</li>',
  '  <li>Elementos e atributos</li>',
  '  <li>HTML semântico</li>',
  '</ul>'
].join('\n');

const linkExample = [
  '<p>',
  '  Veja meus projetos no',
  '  <a href="https://github.com/" target="_blank">',
  '    GitHub',
  '  </a>.',
  '</p>'
].join('\n');

const imageExample = [
  '<img',
  '  src="perfil.jpg"',
  '  alt="Retrato de Ana, desenvolvedora iniciante"',
  '  width="240"',
  '/>'
].join('\n');

const semanticPage = [
  '<body>',
  '  <header>',
  '    <h1>Ana Silva</h1>',
  '    <p>Desenvolvedora em formação</p>',
  '  </header>',
  '',
  '  <nav aria-label="Navegação principal">',
  '    <a href="#sobre">Sobre</a>',
  '    <a href="#aprendendo">Aprendendo</a>',
  '  </nav>',
  '',
  '  <main>',
  '    <section id="sobre">...</section>',
  '    <section id="aprendendo">...</section>',
  '  </main>',
  '',
  '  <footer>Contato: ana@email.com</footer>',
  '</body>'
].join('\n');

const finalProject = [
  '<!doctype html>',
  '<html lang="pt-BR">',
  '  <head>',
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '    <meta name="description" content="Página de apresentação de Ana Silva" />',
  '    <title>Ana Silva | Apresentação</title>',
  '  </head>',
  '  <body>',
  '    <header>',
  '      <h1>Ana Silva</h1>',
  '      <p>Estudante de Desenvolvimento Web</p>',
  '    </header>',
  '',
  '    <nav aria-label="Navegação principal">',
  '      <a href="#sobre">Sobre</a>',
  '      <a href="#habilidades">Habilidades</a>',
  '      <a href="#contato">Contato</a>',
  '    </nav>',
  '',
  '    <main>',
  '      <section id="sobre">',
  '        <h2>Sobre mim</h2>',
  '        <img src="perfil.jpg" alt="Retrato de Ana Silva" width="240" />',
  '        <p>Estou iniciando minha jornada no desenvolvimento web.</p>',
  '      </section>',
  '',
  '      <section id="habilidades">',
  '        <h2>O que estou aprendendo</h2>',
  '        <ul>',
  '          <li>HTML semântico</li>',
  '          <li>Git e GitHub</li>',
  '          <li>Fundamentos da Web</li>',
  '        </ul>',
  '      </section>',
  '',
  '      <section id="contato">',
  '        <h2>Contato</h2>',
  '        <p><a href="mailto:ana@email.com">ana@email.com</a></p>',
  '      </section>',
  '    </main>',
  '',
  '    <footer>',
  '      <p>Primeiro projeto HTML · 2026</p>',
  '    </footer>',
  '  </body>',
  '</html>'
].join('\n');

export const aula01Html: LessonDefinition = {
  id: 'fullstack-front-html-aula-01',
  slug: 'aula-01-html-primeira-pagina',
  number: 1,
  title: 'HTML: da história da Web à primeira página',
  shortTitle: 'HTML · Primeira página',
  durationMinutes: 240,
  audience: 'Iniciantes, sem necessidade de experiência prévia com programação',
  ucSlug: 'desenvolvimento-front-end',
  objectives: [
    'Explicar por que a Web surgiu e qual problema o hipertexto ajudou a resolver.',
    'Distinguir Internet, Web, navegador, servidor e documento HTML.',
    'Reconhecer tags, elementos, atributos, conteúdo e aninhamento.',
    'Montar a estrutura completa de um documento HTML moderno.',
    'Usar títulos, parágrafos, listas, links e imagens com significado adequado.',
    'Aplicar elementos semânticos para organizar uma página.',
    'Produzir uma página de apresentação completa usando apenas HTML.'
  ],
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'Desenvolvimento Front-End · Fundamentos',
      title: 'HTML',
      subtitle: 'Da história da Web à sua primeira página',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Abra perguntando: o que precisa existir antes de uma página ficar bonita?'
    },
    {
      id: 'objetivo-final',
      kind: 'statement',
      eyebrow: 'Objetivo da aula',
      title: 'Hoje você sai do zero com uma página completa.',
      lead: 'Não vamos começar decorando tags.',
      detail: 'Primeiro vamos entender por que a Web existe. Depois, cada novo elemento HTML entra porque resolve uma necessidade concreta da página que será construída no final.',
      chips: ['história', 'estrutura', 'semântica', 'prática', 'produção final']
    },
    {
      id: 'roteiro-4h',
      kind: 'cards',
      eyebrow: 'Plano de 4 horas',
      title: 'Progressão da aula',
      subtitle: 'Os blocos abaixo totalizam 240 minutos.',
      items: [
        { kicker: '30 min', title: 'Contexto', detail: 'Problema original, hipertexto e nascimento da Web.', tone: 'innovation' },
        { kicker: '20 min', title: 'Como a Web funciona', detail: 'Navegador, rede, servidor e resposta.', tone: 'blue' },
        { kicker: '60 min', title: 'Fundamentos HTML', detail: 'Elementos, atributos, aninhamento e documento.', tone: 'orange' },
        { kicker: '25 min', title: 'Conteúdo', detail: 'Texto, listas, links e imagens.', tone: 'green' },
        { kicker: '15 min', title: 'Intervalo', detail: 'Pausa entre fundamentos e aplicação.', tone: 'neutral' },
        { kicker: '25 min', title: 'Semântica', detail: 'Estruturar regiões da página pelo significado.', tone: 'blue' },
        { kicker: '25 min', title: 'Prática guiada', detail: 'Montagem incremental com acompanhamento.', tone: 'innovation' },
        { kicker: '30 min', title: 'Produção final', detail: 'Página de apresentação feita pelo aluno.', tone: 'orange' },
        { kicker: '10 min', title: 'Revisão', detail: 'Checklist e preparação para a próxima aula.', tone: 'green' }
      ]
    },
    {
      id: 'antes-da-web',
      kind: 'statement',
      eyebrow: 'Antes do HTML',
      title: 'O problema não era “criar sites bonitos”.',
      lead: 'Era conectar informação.',
      detail: 'Pesquisadores trabalhavam com documentos espalhados em computadores e sistemas diferentes. A ideia de hipertexto permitiu ligar um documento a outro por referências navegáveis.',
      chips: ['documentos', 'hipertexto', 'links', 'informação']
    },
    {
      id: 'historia-web',
      kind: 'timeline',
      eyebrow: 'História da Web',
      title: 'De uma proposta no CERN a uma plataforma mundial',
      subtitle: 'Marcos que explicam por que HTML nasceu como linguagem de documentos conectados.',
      items: [
        { year: '1989', title: 'A proposta', detail: 'Tim Berners-Lee propõe no CERN um sistema de informação baseado em hipertexto.' },
        { year: '1990', title: 'A Web ganha forma', detail: 'Surgem o primeiro servidor, o navegador/editor WorldWideWeb e a primeira versão de HTML.' },
        { year: '1991', title: 'Expansão', detail: 'A tecnologia começa a se espalhar para além do ambiente inicial de desenvolvimento.' },
        { year: '1993', title: 'Web aberta', detail: 'O CERN coloca o software da Web em domínio público, favorecendo sua disseminação.' },
        { year: '1994', title: 'W3C', detail: 'É fundado o World Wide Web Consortium para coordenar padrões abertos para a Web.' }
      ]
    },
    {
      id: 'hipertexto',
      kind: 'statement',
      eyebrow: 'O H de HTML',
      title: 'HyperText: texto que aponta para outros recursos.',
      lead: 'Um link transforma leitura linear em navegação.',
      detail: 'Essa ideia continua central na Web: documentos independentes podem se conectar sem precisar pertencer ao mesmo sistema ou servidor.',
      chips: ['HyperText', 'href', 'documentos', 'navegação']
    },
    {
      id: 'hipertexto-visual',
      kind: 'visual',
      eyebrow: 'Hipertexto em movimento',
      title: 'Um documento pode levar a muitos outros',
      subtitle: 'A força da Web aparece quando conteúdos independentes se conectam por links.',
      visual: 'hypertext-map',
      caption: 'O usuário não precisa conhecer a estrutura física dos servidores; ele segue relações entre informações.'
    },
    {
      id: 'internet-web',
      kind: 'visual',
      eyebrow: 'Modelo mental',
      title: 'Internet e Web não são sinônimos',
      subtitle: 'A Internet é a infraestrutura de rede. A Web é um serviço construído sobre essa infraestrutura.',
      visual: 'web-internet',
      caption: 'A Web usa protocolos e endereços para localizar e transferir recursos entre computadores.'
    },
    {
      id: 'request-flow',
      kind: 'visual',
      eyebrow: 'Do endereço à tela',
      title: 'O navegador solicita recursos e transforma a resposta em página',
      visual: 'request-flow',
      caption: 'Por enquanto, guarde a sequência: navegador → rede → servidor → resposta → renderização.'
    },
    {
      id: 'papel-tecnologias',
      kind: 'visual',
      eyebrow: 'Responsabilidades',
      title: 'HTML, CSS e JavaScript resolvem problemas diferentes',
      subtitle: 'Nesta aula o foco é exclusivamente a estrutura e o significado do conteúdo.',
      visual: 'html-css-js'
    },
    {
      id: 'o-que-e-html',
      kind: 'statement',
      eyebrow: 'HTML',
      title: 'HTML é uma linguagem de marcação.',
      lead: 'Ele descreve estrutura e significado.',
      detail: 'HTML não é uma linguagem de programação. Ele usa elementos para identificar o papel de cada parte do conteúdo: título, parágrafo, link, lista, imagem, região de navegação e muito mais.',
      chips: ['HyperText', 'Markup', 'Language', 'semântica']
    },
    {
      id: 'anatomia-elemento',
      kind: 'anatomy',
      eyebrow: 'Anatomia',
      title: 'Um elemento HTML possui partes identificáveis',
      code: '<p class="destaque">Minha primeira página</p>',
      labels: [
        { token: '<p', label: 'tag de abertura' },
        { token: 'class="destaque"', label: 'atributo + valor' },
        { token: 'Minha primeira página', label: 'conteúdo' },
        { token: '</p>', label: 'tag de fechamento' }
      ]
    },
    {
      id: 'conceitos-base',
      kind: 'cards',
      eyebrow: 'Vocabulário essencial',
      title: 'Tag, elemento e atributo não são a mesma coisa',
      items: [
        { title: 'Tag', detail: 'A marcação entre sinais de menor e maior, como <p> ou </p>.', tone: 'blue' },
        { title: 'Elemento', detail: 'A unidade completa: abertura, conteúdo e fechamento quando aplicável.', tone: 'innovation' },
        { title: 'Atributo', detail: 'Informação adicional declarada na tag de abertura.', tone: 'orange' },
        { title: 'Conteúdo', detail: 'Texto ou outros elementos inseridos dentro de um elemento.', tone: 'green' },
        { title: 'Elemento vazio', detail: 'Elemento que não envolve conteúdo, como <img>.', tone: 'neutral' },
        { title: 'Aninhamento', detail: 'Elementos dentro de outros elementos respeitando uma hierarquia.', tone: 'blue' }
      ]
    },
    {
      id: 'aninhamento',
      kind: 'code',
      eyebrow: 'Hierarquia',
      title: 'HTML forma uma árvore de elementos',
      subtitle: 'Abra e feche elementos respeitando a ordem de aninhamento.',
      language: 'html',
      code: nestedElements,
      bullets: [
        '<article> contém um título e um parágrafo.',
        '<strong> está dentro do parágrafo e acrescenta importância ao trecho.',
        'Indentação não muda o significado, mas torna a estrutura legível.'
      ]
    },
    {
      id: 'arvore-documento',
      kind: 'visual',
      eyebrow: 'Documento completo',
      title: 'Todo documento HTML possui uma estrutura',
      subtitle: 'A raiz contém duas regiões principais: head e body.',
      visual: 'document-tree',
      caption: 'Head descreve o documento; body contém o que compõe a página.'
    },
    {
      id: 'primeiro-documento',
      kind: 'code',
      eyebrow: 'Primeiro arquivo',
      title: 'Crie index.html',
      subtitle: 'Esta é a base que será reutilizada durante toda a aula.',
      language: 'html',
      code: firstDocument,
      bullets: [
        '<!doctype html> ativa o modo de documento HTML moderno.',
        'lang="pt-BR" informa o idioma principal do documento.',
        '<meta charset="UTF-8"> define a codificação de caracteres.',
        'viewport prepara a página para diferentes larguras de tela.'
      ]
    },
    {
      id: 'head',
      kind: 'cards',
      eyebrow: 'Dentro de <head>',
      title: 'Informações sobre a página que não fazem parte do conteúdo principal',
      items: [
        { title: '<title>', detail: 'Nome exibido na aba do navegador e usado como sinal por mecanismos de busca.', tone: 'blue' },
        { title: 'charset', detail: 'Define como caracteres do documento são interpretados.', tone: 'innovation' },
        { title: 'viewport', detail: 'Controla a área de visualização em dispositivos móveis.', tone: 'orange' },
        { title: 'description', detail: 'Resume o conteúdo e pode ser utilizada em resultados e compartilhamentos.', tone: 'green' }
      ]
    },
    {
      id: 'texto-com-significado',
      kind: 'cards',
      eyebrow: 'Conteúdo textual',
      title: 'Não escolha uma tag pelo tamanho visual',
      subtitle: 'Escolha pelo papel que o conteúdo desempenha.',
      items: [
        { title: '<h1> … <h6>', detail: 'Criam níveis de títulos e organizam a hierarquia do conteúdo.', tone: 'blue' },
        { title: '<p>', detail: 'Representa um parágrafo completo de texto.', tone: 'innovation' },
        { title: '<strong>', detail: 'Marca conteúdo de forte importância.', tone: 'orange' },
        { title: '<em>', detail: 'Marca ênfase no discurso.', tone: 'green' },
        { title: '<br>', detail: 'Quebra de linha; não deve ser usado para criar espaçamento visual.', tone: 'neutral' },
        { title: '<hr>', detail: 'Representa uma mudança temática entre blocos de conteúdo.', tone: 'blue' }
      ]
    },
    {
      id: 'listas',
      kind: 'code',
      eyebrow: 'Coleções',
      title: 'Listas representam conjuntos de itens relacionados',
      language: 'html',
      code: listExample,
      bullets: [
        '<ul> representa lista sem ordem numérica relevante.',
        '<ol> é usada quando a ordem dos itens importa.',
        '<li> representa cada item da lista.'
      ]
    },
    {
      id: 'links',
      kind: 'code',
      eyebrow: 'Hipertexto na prática',
      title: 'O elemento <a> conecta sua página a outro recurso',
      language: 'html',
      code: linkExample,
      bullets: [
        'href contém o destino do link.',
        'O texto do link deve indicar claramente para onde ele leva.',
        'target="_blank" abre outro contexto; use apenas quando houver motivo.'
      ]
    },
    {
      id: 'imagens',
      kind: 'code',
      eyebrow: 'Conteúdo visual',
      title: 'Imagem também precisa de significado',
      language: 'html',
      code: imageExample,
      bullets: [
        'src aponta para o arquivo ou endereço da imagem.',
        'alt descreve a finalidade ou informação relevante da imagem.',
        'Se a imagem for apenas decorativa, alt pode ser vazio: alt="".'
      ]
    },
    {
      id: 'intervalo',
      kind: 'statement',
      eyebrow: '15 minutos',
      title: 'Intervalo',
      lead: 'Pare. Salve. Respire.',
      detail: 'Depois do intervalo vamos reorganizar o que já sabemos usando HTML semântico e construir a primeira página completa.',
      chips: ['salvar arquivos', 'organizar pasta', 'retomar em 15 min']
    },
    {
      id: 'semantica',
      kind: 'statement',
      eyebrow: 'HTML semântico',
      title: 'Semântica é escolher elementos pelo significado.',
      lead: 'A estrutura deve continuar compreensível mesmo sem CSS.',
      detail: 'Uma página bem marcada ajuda pessoas, navegadores, mecanismos de busca e tecnologias assistivas a compreender a organização do conteúdo.',
      chips: ['significado', 'estrutura', 'acessibilidade', 'manutenção']
    },
    {
      id: 'regioes-semanticas',
      kind: 'cards',
      eyebrow: 'Regiões da página',
      title: 'Elementos semânticos dão nome às partes da interface',
      items: [
        { title: '<header>', detail: 'Conteúdo introdutório de uma página ou seção.', tone: 'blue' },
        { title: '<nav>', detail: 'Conjunto principal ou relevante de links de navegação.', tone: 'innovation' },
        { title: '<main>', detail: 'Conteúdo principal e único daquele documento.', tone: 'orange' },
        { title: '<section>', detail: 'Agrupa conteúdo relacionado normalmente identificado por um título.', tone: 'green' },
        { title: '<article>', detail: 'Conteúdo autocontido que pode fazer sentido de forma independente.', tone: 'neutral' },
        { title: '<footer>', detail: 'Informações de encerramento da página ou seção.', tone: 'blue' }
      ]
    },
    {
      id: 'pagina-semantica-visual',
      kind: 'visual',
      eyebrow: 'Estrutura visível',
      title: 'Semântica transforma uma página em regiões compreensíveis',
      subtitle: 'Observe como header, nav, main, section e footer formam um mapa lógico do documento.',
      visual: 'semantic-page',
      caption: 'A aparência pode mudar depois com CSS; a organização conceitual já existe no HTML.'
    },
    {
      id: 'estrutura-semantica',
      kind: 'code',
      eyebrow: 'Montagem',
      title: 'Uma página pode revelar sua organização pelo próprio HTML',
      language: 'html',
      code: semanticPage,
      bullets: [
        'IDs permitem criar links internos para seções.',
        '<main> concentra o conteúdo principal.',
        'A ordem dos elementos deve acompanhar a ordem lógica de leitura.'
      ]
    },
    {
      id: 'pratica-guiada',
      kind: 'exercise',
      eyebrow: 'Prática guiada',
      title: 'Construa a base da sua página de apresentação',
      challenge: 'Crie uma página pessoal fictícia usando somente HTML e valide cada etapa no navegador.',
      timebox: '25 min',
      steps: [
        'Crie uma pasta projeto-html e o arquivo index.html.',
        'Monte doctype, html, head e body.',
        'Adicione header com nome e uma frase de apresentação.',
        'Crie nav com links internos para duas seções.',
        'Adicione uma seção Sobre e outra O que estou aprendendo.',
        'Inclua pelo menos uma lista, um link externo e uma imagem.'
      ],
      success: [
        'A página abre diretamente no navegador.',
        'Existe apenas um h1 e os demais títulos seguem hierarquia lógica.',
        'Todos os links internos levam para a seção correta.',
        'A imagem possui texto alternativo adequado.'
      ]
    },
    {
      id: 'checagem-semantica',
      kind: 'checklist',
      eyebrow: 'Antes do projeto final',
      title: 'Revise a estrutura como um desenvolvedor',
      prompt: 'Se a resposta for “não”, corrija antes de seguir.',
      items: [
        'O documento possui lang, charset, viewport e title?',
        'Existe somente um conteúdo principal representado por main?',
        'Os títulos formam uma hierarquia coerente?',
        'Listas realmente representam coleções de itens?',
        'Links possuem textos que fazem sentido fora do contexto?',
        'Imagens têm alt coerente com sua finalidade?',
        'As seções possuem títulos quando necessário?',
        'A página continua compreensível sem qualquer CSS?'
      ]
    },
    {
      id: 'producao-final',
      kind: 'exercise',
      eyebrow: 'Produção final',
      title: 'Sua primeira página HTML completa',
      challenge: 'Produza uma página de apresentação profissional ou de um negócio fictício. O objetivo não é beleza visual: é qualidade estrutural.',
      timebox: '30 min',
      steps: [
        'Defina quem ou o que será apresentado.',
        'Escreva uma estrutura com header, nav, main, sections e footer.',
        'Inclua conteúdo textual com títulos e parágrafos.',
        'Inclua uma lista, uma imagem, um link interno e um link externo.',
        'Adicione uma forma de contato usando mailto: ou outro link apropriado.',
        'Abra no navegador e faça uma revisão completa antes de entregar.'
      ],
      success: [
        'HTML organizado e corretamente aninhado.',
        'Semântica coerente com o conteúdo.',
        'Navegação interna funcional.',
        'Nenhum estilo inline: CSS ficará para a próxima etapa.',
        'O aluno consegue explicar a função de cada elemento utilizado.'
      ]
    },
    {
      id: 'modelo-final',
      kind: 'code',
      eyebrow: 'Referência de estrutura',
      title: 'Um possível ponto de chegada',
      subtitle: 'Não copie mecanicamente: compare com a sua solução e explique as diferenças.',
      language: 'html',
      code: finalProject,
      bullets: [
        'O documento possui metadados mínimos.',
        'O conteúdo está dividido em regiões semânticas.',
        'Links internos usam IDs para navegar.',
        'A página já tem significado antes de receber qualquer CSS.'
      ]
    },
    {
      id: 'teste-final',
      kind: 'checklist',
      eyebrow: 'Teste no navegador',
      title: 'Uma entrega simples ainda precisa ser validada',
      items: [
        'Recarregue a página e confirme que não há caminhos de arquivo quebrados.',
        'Clique em todos os links internos e externos.',
        'Teste a imagem e confira o texto alternativo.',
        'Redimensione a janela e verifique se o conteúdo continua acessível.',
        'Leia o HTML de cima para baixo e confirme que a ordem faz sentido.',
        'Explique em voz alta o papel de head, body, main e section.'
      ]
    },
    {
      id: 'checkpoint',
      kind: 'checklist',
      eyebrow: 'Fechamento',
      title: 'Você consegue responder sem olhar?',
      prompt: 'Esses conceitos serão pressupostos na próxima aula.',
      items: [
        'Por que a Web surgiu?',
        'Qual é a diferença entre Internet e Web?',
        'O que HTML descreve?',
        'Qual é a diferença entre tag, elemento e atributo?',
        'Para que servem head e body?',
        'Como criar um link?',
        'Por que alt é importante em imagens?',
        'O que significa escrever HTML semântico?'
      ]
    },
    {
      id: 'proxima-aula',
      kind: 'statement',
      eyebrow: 'Próxima etapa',
      title: 'A estrutura está pronta. Depois vem a apresentação.',
      lead: 'CSS entra quando o HTML já faz sentido.',
      detail: 'Na próxima aula vamos transformar a mesma página com cores, tipografia, espaçamento, seletores, Box Model e primeiros fundamentos de layout responsivo.',
      chips: ['CSS', 'seletores', 'cores', 'tipografia', 'Box Model']
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Fontes e continuidade',
      title: 'Referências técnicas para revisar a aula',
      items: [
        { label: 'CERN — The birth of the Web', url: 'https://home.cern/science/computing/the-birth-of-the-web/' },
        { label: 'W3C — History', url: 'https://www.w3.org/about/history/' },
        { label: 'MDN — HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
        { label: 'MDN — Iniciando com HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax' },
        { label: 'WHATWG — HTML Living Standard', url: 'https://html.spec.whatwg.org/' }
      ]
    }
  ]
};
