import type { LessonDefinition } from '../../types/course';

function createHtmlLesson(input: {
  id: string;
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  objectives: string[];
  topics: Array<{ title: string; detail: string }>;
  challenge: string;
  steps: string[];
  success: string[];
}): LessonDefinition {
  return {
    id: input.id,
    slug: input.slug,
    number: input.number,
    title: input.title,
    shortTitle: input.shortTitle,
    durationMinutes: 240,
    audience: 'Iniciantes em desenvolvimento Web',
    ucSlug: 'desenvolvimento-front-end',
    objectives: input.objectives,
    slides: [
      {
        id: 'capa',
        kind: 'cover',
        eyebrow: 'HTML · Trilha de fundamentos',
        title: input.title,
        subtitle: 'Aula prática de 4 horas',
        badge: `Aula ${String(input.number).padStart(2, '0')}`,
        duration: '4 horas'
      },
      {
        id: 'objetivos',
        kind: 'checklist',
        eyebrow: 'Objetivos',
        title: 'O que você deve dominar ao final da aula',
        items: input.objectives
      },
      {
        id: 'conteudos',
        kind: 'cards',
        eyebrow: 'Conteúdo',
        title: 'Conceitos centrais da aula',
        subtitle: 'A sequência prioriza significado, aplicação e prática.',
        items: input.topics.map((topic, index) => ({
          kicker: String(index + 1).padStart(2, '0'),
          title: topic.title,
          detail: topic.detail,
          tone: index % 2 === 0 ? 'blue' : 'innovation'
        }))
      },
      {
        id: 'pratica',
        kind: 'exercise',
        eyebrow: 'Prática orientada',
        title: 'Aplicação dos conceitos',
        challenge: input.challenge,
        timebox: '70 min',
        steps: input.steps,
        success: input.success
      },
      {
        id: 'fechamento',
        kind: 'checklist',
        eyebrow: 'Fechamento',
        title: 'Verificação de aprendizagem',
        prompt: 'Antes de encerrar, confirme se você consegue explicar e aplicar estes pontos sem consultar o material.',
        items: input.success
      }
    ]
  };
}

export const aula02HtmlConteudo = createHtmlLesson({
  id: 'html-aula-02',
  slug: 'aula-02-textos-links-imagens',
  number: 2,
  title: 'Textos, links, imagens e organização de conteúdo',
  shortTitle: 'Conteúdo HTML',
  objectives: [
    'Estruturar títulos e parágrafos com hierarquia coerente.',
    'Criar listas, citações, trechos de código e conteúdo editorial.',
    'Usar links absolutos, relativos e âncoras internas.',
    'Inserir imagens com texto alternativo adequado.'
  ],
  topics: [
    { title: 'Hierarquia de títulos', detail: 'Uso correto de h1 a h6 com foco em estrutura, não em aparência.' },
    { title: 'Texto e ênfase', detail: 'Parágrafos, strong, em, mark, small, del, ins, sub, sup, blockquote, q, code e pre.' },
    { title: 'Listas', detail: 'Listas ordenadas, não ordenadas e listas de descrição.' },
    { title: 'Links', detail: 'URLs absolutas e relativas, âncoras, target e rel.' },
    { title: 'Imagens', detail: 'src, alt, width, height e organização de caminhos.' }
  ],
  challenge: 'Criar uma página de artigo completa sobre um tema técnico.',
  steps: [
    'Defina um h1 e seções com hierarquia coerente.',
    'Inclua listas, citação, trecho de código e links internos e externos.',
    'Adicione ao menos duas imagens com texto alternativo apropriado.',
    'Inclua uma seção final de referências.'
  ],
  success: [
    'Existe apenas um título principal claro.',
    'A ordem dos headings representa a estrutura do conteúdo.',
    'Links funcionam sem caminhos quebrados.',
    'Imagens possuem alt adequado ao contexto.'
  ]
});

export const aula03HtmlSemantico = createHtmlLesson({
  id: 'html-aula-03',
  slug: 'aula-03-html-semantico',
  number: 3,
  title: 'HTML semântico e estrutura de documentos',
  shortTitle: 'HTML semântico',
  objectives: [
    'Escolher elementos HTML pelo significado do conteúdo.',
    'Estruturar páginas com landmarks semânticos.',
    'Distinguir section, article, aside e div.',
    'Relacionar semântica, acessibilidade e manutenção.'
  ],
  topics: [
    { title: 'Landmarks', detail: 'header, nav, main, aside e footer.' },
    { title: 'Conteúdo seccionado', detail: 'section e article com títulos e contexto próprios.' },
    { title: 'Elementos complementares', detail: 'figure, figcaption, time e address.' },
    { title: 'Div e span', detail: 'Quando elementos genéricos ainda são adequados.' }
  ],
  challenge: 'Construir a estrutura semântica de um portal de notícias.',
  steps: [
    'Crie cabeçalho, navegação e conteúdo principal.',
    'Modele notícias como articles organizados em sections.',
    'Adicione conteúdo complementar em aside.',
    'Finalize com footer e informações institucionais.'
  ],
  success: [
    'A página mantém sentido sem CSS.',
    'Landmarks são usados sem duplicações desnecessárias.',
    'Article e section possuem função clara.',
    'Div não substitui elementos semânticos disponíveis.'
  ]
});

export const aula04HtmlTabelas = createHtmlLesson({
  id: 'html-aula-04',
  slug: 'aula-04-tabelas',
  number: 4,
  title: 'Tabelas e representação de dados',
  shortTitle: 'Tabelas',
  objectives: [
    'Representar dados tabulares corretamente.',
    'Organizar cabeçalho, corpo e rodapé de tabelas.',
    'Usar caption e cabeçalhos acessíveis.',
    'Evitar tabelas para construção de layout.'
  ],
  topics: [
    { title: 'Estrutura', detail: 'table, caption, thead, tbody, tfoot e tr.' },
    { title: 'Células', detail: 'th, td e associação entre cabeçalhos e dados.' },
    { title: 'Mesclagem', detail: 'Uso criterioso de colspan e rowspan.' },
    { title: 'Acessibilidade', detail: 'scope, caption e leitura lógica dos dados.' }
  ],
  challenge: 'Criar uma tabela de classificação de campeonato.',
  steps: [
    'Modele colunas para posição, equipe, pontos e jogos.',
    'Adicione caption descritivo.',
    'Use th e scope nos cabeçalhos.',
    'Inclua rodapé quando houver resumo ou observação.'
  ],
  success: [
    'A tabela representa dados, não layout.',
    'Cabeçalhos são semanticamente identificados.',
    'A leitura linha a linha é compreensível.',
    'Não existem células mescladas sem necessidade.'
  ]
});

export const aula05HtmlFormularios = createHtmlLesson({
  id: 'html-aula-05',
  slug: 'aula-05-formularios-fundamentos',
  number: 5,
  title: 'Formulários HTML: fundamentos',
  shortTitle: 'Formulários I',
  objectives: [
    'Criar formulários estruturados e compreensíveis.',
    'Associar labels aos respectivos campos.',
    'Escolher tipos de input adequados.',
    'Organizar grupos de campos com fieldset e legend.'
  ],
  topics: [
    { title: 'Form', detail: 'action, method e fluxo de envio.' },
    { title: 'Campos', detail: 'text, email, password, number, date, tel e url.' },
    { title: 'Rótulos', detail: 'label, for, id e name corretamente relacionados.' },
    { title: 'Controles', detail: 'textarea, select, option e button.' },
    { title: 'Agrupamento', detail: 'fieldset e legend para conjuntos relacionados.' }
  ],
  challenge: 'Construir um formulário completo de cadastro.',
  steps: [
    'Crie campos para identidade, contato e data.',
    'Associe todos os campos a labels.',
    'Organize blocos relacionados com fieldset.',
    'Adicione seleção, textarea e botão de envio.'
  ],
  success: [
    'Todos os campos possuem name.',
    'Labels estão corretamente associados.',
    'Tipos de input correspondem ao dado solicitado.',
    'A ordem dos campos é lógica.'
  ]
});

export const aula06HtmlValidacao = createHtmlLesson({
  id: 'html-aula-06',
  slug: 'aula-06-formularios-validacao',
  number: 6,
  title: 'Formulários HTML: validação e experiência do usuário',
  shortTitle: 'Formulários II',
  objectives: [
    'Aplicar validação nativa do navegador.',
    'Configurar restrições e sugestões de preenchimento.',
    'Distinguir validação de interface e validação de servidor.',
    'Escolher controles adequados para diferentes dados.'
  ],
  topics: [
    { title: 'Restrições', detail: 'required, min, max, minlength, maxlength, pattern e step.' },
    { title: 'Experiência', detail: 'autocomplete, autofocus, readonly, disabled e multiple.' },
    { title: 'Seleções', detail: 'radio, checkbox, range e color.' },
    { title: 'Arquivos e datas', detail: 'file, accept, time e datetime-local.' },
    { title: 'Segurança', detail: 'Validação HTML melhora UX, mas não substitui validação no servidor.' }
  ],
  challenge: 'Criar um formulário de inscrição em curso com validação nativa.',
  steps: [
    'Defina campos obrigatórios e limites coerentes.',
    'Configure autocomplete quando apropriado.',
    'Inclua opções de seleção e aceite de termos.',
    'Teste entradas válidas e inválidas no navegador.'
  ],
  success: [
    'As restrições impedem entradas claramente inválidas.',
    'O formulário continua acessível pelo teclado.',
    'Campos opcionais e obrigatórios estão claros.',
    'A validação de cliente não é tratada como mecanismo de segurança.'
  ]
});

export const aula07HtmlMidia = createHtmlLesson({
  id: 'html-aula-07',
  slug: 'aula-07-audio-video-embeds',
  number: 7,
  title: 'Áudio, vídeo e conteúdo incorporado',
  shortTitle: 'Mídia e embeds',
  objectives: [
    'Incorporar áudio e vídeo com HTML nativo.',
    'Fornecer fontes alternativas e legendas.',
    'Utilizar iframe de forma consciente.',
    'Considerar acessibilidade e privacidade em mídia incorporada.'
  ],
  topics: [
    { title: 'Áudio', detail: 'audio, source e controles de reprodução.' },
    { title: 'Vídeo', detail: 'video, source, poster, controls, muted e preload.' },
    { title: 'Legendas', detail: 'track e arquivos WebVTT.' },
    { title: 'Embeds', detail: 'iframe para conteúdos externos e seus impactos.' }
  ],
  challenge: 'Criar uma página de aula com vídeo, transcrição e materiais complementares.',
  steps: [
    'Adicione vídeo com controles e poster.',
    'Inclua legenda ou trilha textual.',
    'Disponibilize transcrição abaixo da mídia.',
    'Adicione um recurso externo incorporado somente quando necessário.'
  ],
  success: [
    'Mídia possui controles adequados.',
    'Conteúdo essencial não depende apenas de áudio.',
    'Iframe possui título descritivo.',
    'A página continua útil se a mídia externa falhar.'
  ]
});

export const aula08HtmlImagensResponsivas = createHtmlLesson({
  id: 'html-aula-08',
  slug: 'aula-08-imagens-responsivas',
  number: 8,
  title: 'Imagens responsivas e HTML moderno',
  shortTitle: 'Imagens responsivas',
  objectives: [
    'Entender o papel da viewport.',
    'Usar srcset e sizes para diferentes densidades e larguras.',
    'Aplicar picture quando houver direção de arte ou formatos alternativos.',
    'Reduzir custo de carregamento de imagens.'
  ],
  topics: [
    { title: 'Viewport', detail: 'Configuração adequada para dispositivos móveis.' },
    { title: 'srcset', detail: 'Disponibilização de múltiplas fontes de imagem.' },
    { title: 'sizes', detail: 'Ajuda ao navegador na seleção do recurso apropriado.' },
    { title: 'picture', detail: 'Direção de arte e formatos alternativos.' },
    { title: 'Performance', detail: 'width, height, loading lazy, WebP e AVIF.' }
  ],
  challenge: 'Montar uma página editorial com imagens adaptadas a diferentes telas.',
  steps: [
    'Configure meta viewport.',
    'Crie ao menos um img com srcset e sizes.',
    'Use picture em um caso de direção de arte.',
    'Ative lazy loading apenas em imagens fora da primeira dobra.'
  ],
  success: [
    'O navegador pode escolher entre múltiplas imagens.',
    'Dimensões reservam espaço antes do carregamento.',
    'Imagem principal não é atrasada indevidamente.',
    'Texto alternativo continua adequado.'
  ]
});

export const aula09HtmlAcessibilidade = createHtmlLesson({
  id: 'html-aula-09',
  slug: 'aula-09-acessibilidade',
  number: 9,
  title: 'Acessibilidade com HTML',
  shortTitle: 'Acessibilidade',
  objectives: [
    'Construir documentos navegáveis por teclado e tecnologias assistivas.',
    'Aplicar semântica, headings e labels corretamente.',
    'Reconhecer quando ARIA é realmente necessária.',
    'Identificar problemas comuns de acessibilidade estrutural.'
  ],
  topics: [
    { title: 'Semântica nativa', detail: 'Preferir elementos HTML com comportamento e significado corretos.' },
    { title: 'Navegação', detail: 'Ordem lógica, foco, links e controles operáveis por teclado.' },
    { title: 'Conteúdo', detail: 'Idioma, títulos, texto alternativo e mensagens compreensíveis.' },
    { title: 'Formulários', detail: 'Labels, agrupamentos, instruções e erros.' },
    { title: 'ARIA', detail: 'Usar somente quando HTML semântico não resolver o caso.' }
  ],
  challenge: 'Auditar e corrigir uma página propositalmente inacessível.',
  steps: [
    'Revise estrutura de headings e landmarks.',
    'Teste toda a navegação apenas pelo teclado.',
    'Corrija imagens, links e rótulos de formulário.',
    'Remova ARIA redundante ou incorreta.'
  ],
  success: [
    'A página pode ser percorrida sem mouse.',
    'Elementos interativos são semanticamente apropriados.',
    'Imagens possuem tratamento textual coerente.',
    'ARIA não substitui HTML nativo sem necessidade.'
  ]
});

export const aula10HtmlSeo = createHtmlLesson({
  id: 'html-aula-10',
  slug: 'aula-10-seo-metadados',
  number: 10,
  title: 'SEO, metadados e compartilhamento',
  shortTitle: 'SEO e metadados',
  objectives: [
    'Configurar title e meta description de forma coerente.',
    'Utilizar canonical e diretivas de indexação quando necessário.',
    'Preparar metadados para compartilhamento social.',
    'Introduzir dados estruturados com JSON-LD.'
  ],
  topics: [
    { title: 'Metadados essenciais', detail: 'title, description, charset, viewport e idioma.' },
    { title: 'Indexação', detail: 'canonical e meta robots em contextos apropriados.' },
    { title: 'Compartilhamento', detail: 'Open Graph e metadados sociais.' },
    { title: 'Conteúdo rastreável', detail: 'Semântica, headings, links e imagens.' },
    { title: 'Dados estruturados', detail: 'Introdução a schema.org com JSON-LD.' }
  ],
  challenge: 'Preparar uma página de artigo para indexação e compartilhamento.',
  steps: [
    'Defina title e description específicos para a página.',
    'Adicione canonical coerente com a URL principal.',
    'Configure Open Graph.',
    'Inclua um bloco JSON-LD compatível com o conteúdo.'
  ],
  success: [
    'Metadados descrevem o conteúdo real.',
    'Não existem títulos ou descriptions genéricos duplicados.',
    'Canonical aponta para a URL correta.',
    'Dados estruturados representam entidades presentes na página.'
  ]
});

export const aula11HtmlRecursosModernos = createHtmlLesson({
  id: 'html-aula-11',
  slug: 'aula-11-recursos-modernos',
  number: 11,
  title: 'Recursos modernos da plataforma HTML',
  shortTitle: 'HTML moderno',
  objectives: [
    'Reconhecer elementos HTML úteis em aplicações modernas.',
    'Usar detalhes expansíveis e diálogos nativos quando apropriado.',
    'Compreender data attributes, template e estados nativos.',
    'Preparar a transição conceitual para JavaScript e frameworks.'
  ],
  topics: [
    { title: 'Disclosure', detail: 'details e summary para conteúdo expansível.' },
    { title: 'Dialog', detail: 'Elemento dialog e seu papel em interfaces modernas.' },
    { title: 'Indicadores', detail: 'progress e meter para valores com significado específico.' },
    { title: 'Templates', detail: 'template como fragmento inerte reutilizável por scripts.' },
    { title: 'Atributos de aplicação', detail: 'data-*, hidden e contenteditable.' }
  ],
  challenge: 'Construir uma página de componentes usando recursos nativos do HTML.',
  steps: [
    'Crie uma FAQ com details e summary.',
    'Adicione um indicador de progresso ou medida.',
    'Modele um dialog no documento.',
    'Inclua um template que poderá ser manipulado posteriormente por JavaScript.'
  ],
  success: [
    'Elementos nativos são usados antes de soluções customizadas equivalentes.',
    'Cada componente possui semântica coerente.',
    'A estrutura está pronta para receber JavaScript sem reescrita desnecessária.',
    'O documento continua funcional em leitura estática.'
  ]
});

export const aula12HtmlProjeto = createHtmlLesson({
  id: 'html-aula-12',
  slug: 'aula-12-projeto-final',
  number: 12,
  title: 'Projeto final de HTML',
  shortTitle: 'Projeto final',
  objectives: [
    'Integrar os principais recursos estudados na trilha.',
    'Organizar um pequeno site multipágina.',
    'Aplicar semântica, acessibilidade e metadados.',
    'Validar a qualidade estrutural antes de avançar para CSS.'
  ],
  topics: [
    { title: 'Arquitetura de conteúdo', detail: 'Planejamento das páginas, navegação e hierarquia.' },
    { title: 'Semântica', detail: 'Landmarks, headings, artigos, listas, tabelas e formulários.' },
    { title: 'Acessibilidade', detail: 'Idioma, alt, labels, teclado e ordem lógica.' },
    { title: 'SEO', detail: 'Titles, descriptions, canonical, compartilhamento e JSON-LD.' },
    { title: 'Validação', detail: 'Revisão final da estrutura e correção de erros.' }
  ],
  challenge: 'Construir um pequeno site institucional multipágina usando apenas HTML.',
  steps: [
    'Crie páginas inicial, sobre, conteúdo/serviços e contato.',
    'Mantenha navegação coerente entre todas as páginas.',
    'Inclua formulário, mídia ou tabela quando fizer sentido ao domínio escolhido.',
    'Revise acessibilidade, metadados e estrutura semântica antes da entrega.'
  ],
  success: [
    'Todas as páginas possuem estrutura HTML completa e válida.',
    'A navegação funciona sem links quebrados.',
    'O conteúdo mantém significado mesmo sem CSS.',
    'A base está pronta para receber a trilha de CSS.'
  ]
});

export const htmlLessons: LessonDefinition[] = [
  aula02HtmlConteudo,
  aula03HtmlSemantico,
  aula04HtmlTabelas,
  aula05HtmlFormularios,
  aula06HtmlValidacao,
  aula07HtmlMidia,
  aula08HtmlImagensResponsivas,
  aula09HtmlAcessibilidade,
  aula10HtmlSeo,
  aula11HtmlRecursosModernos,
  aula12HtmlProjeto
];
