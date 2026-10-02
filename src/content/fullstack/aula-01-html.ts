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
      subtitle: 'História → estrutura → prática → primeira página',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Abra perguntando: o que precisa existir antes de uma página ficar bonita?'
    },
    {
      id: 'objetivo-final',
      kind: 'statement',
      eyebrow: 'Objetivo da aula',
      title: 'Hoje você sai do zero com uma página completa.',
      lead: 'Entender primeiro. Marcar depois.',
      detail: 'A aula começa pelo problema que criou a Web e termina com uma página HTML completa.',
      chips: ['história', 'estrutura', 'semântica', 'prática', 'produção final']
    },
    {
      id: 'roteiro-4h',
      kind: 'cards',
      eyebrow: 'Plano de 4 horas',
      title: 'Progressão da aula',
      subtitle: '9 blocos · 240 min',
      items: [
        { kicker: '30 min', title: 'Contexto', detail: 'Web + hipertexto', tone: 'innovation' },
        { kicker: '20 min', title: 'Como a Web funciona', detail: 'cliente → servidor', tone: 'blue' },
        { kicker: '60 min', title: 'Fundamentos HTML', detail: 'tags + atributos + árvore', tone: 'orange' },
        { kicker: '25 min', title: 'Conteúdo', detail: 'texto + links + mídia', tone: 'green' },
        { kicker: '15 min', title: 'Intervalo', detail: 'pausa', tone: 'neutral' },
        { kicker: '25 min', title: 'Semântica', detail: 'estrutura com significado', tone: 'blue' },
        { kicker: '25 min', title: 'Prática guiada', detail: 'construção passo a passo', tone: 'innovation' },
        { kicker: '30 min', title: 'Produção final', detail: 'página completa', tone: 'orange' },
        { kicker: '10 min', title: 'Revisão', detail: 'checkpoint', tone: 'green' }
      ]
    },
    {
      id: 'antes-da-web',
      kind: 'statement',
      eyebrow: 'Antes do HTML',
      title: 'O problema não era “criar sites bonitos”.',
      lead: 'Conectar informação.',
      detail: 'Documentos isolados → documentos conectados por links.',
      chips: ['documentos', 'hipertexto', 'links', 'informação']
    },
    {
      id: 'historia-web',
      kind: 'timeline',
      eyebrow: 'História da Web',
      title: '5 marcos. Uma nova forma de navegar informação.',
      subtitle: '1989 → 1994',
      items: [
        { year: '1989', title: 'A proposta', detail: 'Proposta de sistema baseado em hipertexto.' },
        { year: '1990', title: 'A Web ganha forma', detail: 'Servidor + navegador/editor + HTML.' },
        { year: '1991', title: 'Expansão', detail: 'A Web começa a se expandir.' },
        { year: '1993', title: 'Web aberta', detail: 'Tecnologia liberada para ampla adoção.' },
        { year: '1994', title: 'W3C', detail: 'W3C e padrões abertos.' }
      ]
    },
    {
      id: 'hipertexto',
      kind: 'statement',
      eyebrow: 'O H de HTML',
      title: 'HyperText: texto que aponta para outros recursos.',
      lead: 'Texto + conexão = navegação.',
      detail: 'O documento aponta para outro recurso. O usuário escolhe o caminho.',
      chips: ['HyperText', 'href', 'documentos', 'navegação']
    },
    {
      id: 'hipertexto-visual',
      kind: 'visual',
      eyebrow: 'Hipertexto em movimento',
      title: 'Um documento pode levar a muitos outros',
      subtitle: 'documentos → links → caminhos',
      visual: 'hypertext-map',
      caption: 'O usuário segue relações, não a infraestrutura.'
    },
    {
      id: 'internet-web',
      kind: 'visual',
      eyebrow: 'Modelo mental',
      title: 'Internet e Web não são sinônimos',
      subtitle: 'Internet = infraestrutura · Web = serviço',
      visual: 'web-internet',
      caption: 'A Web usa a rede para localizar e transferir recursos.'
    },
    {
      id: 'request-flow',
      kind: 'visual',
      eyebrow: 'Do endereço à tela',
      title: 'Do endereço digitado à página renderizada',
      visual: 'request-flow',
      caption: 'navegador → rede → servidor → resposta → renderização'
    },
    {
      id: 'papel-tecnologias',
      kind: 'visual',
      eyebrow: 'Responsabilidades',
      title: 'HTML, CSS e JavaScript resolvem problemas diferentes',
      subtitle: 'Hoje: HTML',
      visual: 'html-css-js'
    },
    {
      id: 'o-que-e-html',
      kind: 'statement',
      eyebrow: 'HTML',
      title: 'HTML é uma linguagem de marcação.',
      lead: 'Estrutura + significado.',
      detail: 'HTML identifica o papel de cada parte do conteúdo.',
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
      title: '6 peças do vocabulário HTML',
      items: [
        { title: 'Tag', detail: '<p> ... </p>', tone: 'blue' },
        { title: 'Elemento', detail: 'tag + conteúdo + fechamento', tone: 'innovation' },
        { title: 'Atributo', detail: 'dados extras da tag', tone: 'orange' },
        { title: 'Conteúdo', detail: 'o que está dentro', tone: 'green' },
        { title: 'Elemento vazio', detail: 'ex.: <img>', tone: 'neutral' },
        { title: 'Aninhamento', detail: 'pai → filho', tone: 'blue' }
      ]
    },
    {
      id: 'aninhamento',
      kind: 'code',
      eyebrow: 'Hierarquia',
      title: 'HTML forma uma árvore de elementos',
      subtitle: 'pai → filho → neto',
      language: 'html',
      code: nestedElements,
      bullets: [
        '<article> → h2 + p',
        '<strong> está dentro de <p>',
        'Indentação = leitura mais clara'
      ]
    },
    {
      id: 'arvore-documento',
      kind: 'visual',
      eyebrow: 'Documento completo',
      title: 'Todo documento HTML possui uma estrutura',
      subtitle: 'html → head + body',
      visual: 'document-tree',
      caption: 'head = metadados · body = conteúdo'
    },
    {
      id: 'primeiro-documento',
      kind: 'code',
      eyebrow: 'Primeiro arquivo',
      title: 'Crie index.html',
      subtitle: 'A estrutura mínima que vamos reutilizar',
      language: 'html',
      code: firstDocument,
      bullets: [
        '<!doctype html> → HTML moderno',
        'lang → idioma',
        'charset → caracteres',
        'viewport → telas diferentes'
      ]
    },
    {
      id: 'laboratorio-primeira-pagina',
      kind: 'lab',
      eyebrow: 'Laboratório ao vivo',
      title: 'Edite o HTML e veja o resultado imediatamente',
      subtitle: 'O código inicial também pode ser aberto no VS Code para Web em outra guia.',
      language: 'html',
      starterCode: firstDocument,
      editorPath: 'labs/html/aula-01/index.html',
      instructions: [
        'Troque o conteúdo do h1 pelo seu nome.',
        'Altere o parágrafo para uma apresentação curta.',
        'Adicione um segundo parágrafo sem apagar a estrutura do documento.',
        'Observe a prévia a cada mudança antes de seguir.'
      ]
    },
    {
      id: 'head',
      kind: 'cards',
      eyebrow: 'Dentro de <head>',
      title: '<head>: dados sobre o documento',
      items: [
        { title: '<title>', detail: 'nome da página', tone: 'blue' },
        { title: 'charset', detail: 'codificação', tone: 'innovation' },
        { title: 'viewport', detail: 'largura da tela', tone: 'orange' },
        { title: 'description', detail: 'resumo da página', tone: 'green' }
      ]
    },
    {
      id: 'texto-com-significado',
      kind: 'cards',
      eyebrow: 'Conteúdo textual',
      title: 'Escolha a tag pelo significado',
      subtitle: 'semântica > aparência',
      items: [
        { title: '<h1> … <h6>', detail: 'hierarquia de títulos', tone: 'blue' },
        { title: '<p>', detail: 'parágrafo', tone: 'innovation' },
        { title: '<strong>', detail: 'forte importância', tone: 'orange' },
        { title: '<em>', detail: 'ênfase', tone: 'green' },
        { title: '<br>', detail: 'quebra de linha', tone: 'neutral' },
        { title: '<hr>', detail: 'mudança temática', tone: 'blue' }
      ]
    },
    {
      id: 'listas',
      kind: 'code',
      eyebrow: 'Coleções',
      title: 'Listas = itens relacionados',
      language: 'html',
      code: listExample,
      bullets: [
        '<ul> → sem ordem',
        '<ol> → ordem importa',
        '<li> → item'
      ]
    },
    {
      id: 'links',
      kind: 'code',
      eyebrow: 'Hipertexto na prática',
      title: '<a> conecta recursos',
      language: 'html',
      code: linkExample,
      bullets: [
        'href → destino',
        'texto do link → intenção clara',
        'target="_blank" → nova guia'
      ]
    },
    {
      id: 'imagens',
      kind: 'code',
      eyebrow: 'Conteúdo visual',
      title: '<img>: arquivo + significado',
      language: 'html',
      code: imageExample,
      bullets: [
        'src → arquivo',
        'alt → significado',
        'decorativa → alt=""'
      ]
    },
    {
      id: 'intervalo',
      kind: 'statement',
      eyebrow: '15 minutos',
      title: 'Intervalo',
      lead: '15 min.',
      detail: 'Na volta: semântica + construção final.',
      chips: ['salvar arquivos', 'organizar pasta', 'retomar em 15 min']
    },
    {
      id: 'semantica',
      kind: 'statement',
      eyebrow: 'HTML semântico',
      title: 'Semântica é escolher elementos pelo significado.',
      lead: 'Sem CSS, ainda precisa fazer sentido.',
      detail: 'Semântica melhora leitura, acessibilidade, manutenção e interpretação.',
      chips: ['significado', 'estrutura', 'acessibilidade', 'manutenção']
    },
    {
      id: 'regioes-semanticas',
      kind: 'cards',
      eyebrow: 'Regiões da página',
      title: 'As regiões ganham nomes',
      items: [
        { title: '<header>', detail: 'introdução', tone: 'blue' },
        { title: '<nav>', detail: 'navegação', tone: 'innovation' },
        { title: '<main>', detail: 'conteúdo principal', tone: 'orange' },
        { title: '<section>', detail: 'grupo temático', tone: 'green' },
        { title: '<article>', detail: 'conteúdo independente', tone: 'neutral' },
        { title: '<footer>', detail: 'encerramento', tone: 'blue' }
      ]
    },
    {
      id: 'pagina-semantica-visual',
      kind: 'visual',
      eyebrow: 'Estrutura visível',
      title: 'Uma página vira um mapa lógico',
      subtitle: 'header · nav · main · section · footer',
      visual: 'semantic-page',
      caption: 'A estrutura existe antes do CSS.'
    },
    {
      id: 'estrutura-semantica',
      kind: 'code',
      eyebrow: 'Montagem',
      title: 'A estrutura aparece no próprio código',
      language: 'html',
      code: semanticPage,
      bullets: [
        'id → destino interno',
        '<main> → conteúdo principal',
        'ordem do código → ordem de leitura'
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
    },
    {
      id: 'uso-educacional',
      kind: 'statement',
      eyebrow: 'Uso educacional',
      title: 'Professores podem usar este material em suas aulas.',
      lead: 'Use. Compartilhe. Preserve.',
      detail: 'O material deve permanecer em sua forma original: mesma apresentação, identidade visual, autoria, créditos e licença. Não redistribua versões modificadas nem remova este aviso.',
      chips: ['uso em sala permitido', 'material íntegro', 'créditos preservados', 'licença preservada']
    }
  ]
};
