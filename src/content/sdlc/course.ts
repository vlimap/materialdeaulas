import type { CourseDefinition, LessonDefinition, LessonSource } from '../../types/course';
import { aula01Sdlc } from './aula-01-sdlc';

const sommerville = (
  chapters: string[],
  pages: string,
  note: string
): LessonSource => ({
  label: 'Engenharia de Software',
  author: 'Ian Sommerville',
  edition: '9ª edição · Pearson · 2011',
  chapters,
  pages,
  note
});

function plannedLesson(
  number: number,
  slug: string,
  title: string,
  shortTitle: string,
  objectives: string[],
  sources: LessonSource[],
  visualPlan: string[]
): LessonDefinition {
  const padded = String(number).padStart(2, '0');

  return {
    id: 'sdlc-aula-' + padded,
    status: 'planned',
    slug,
    number,
    title,
    shortTitle,
    durationMinutes: 240,
    audience: 'Iniciantes em desenvolvimento e engenharia de software',
    ucSlug: 'fundamentos-sdlc',
    objectives,
    sources,
    visualPlan,
    slides: []
  };
}

export const sdlcLessons: LessonDefinition[] = [
  aula01Sdlc,
  plannedLesson(
    2,
    'aula-02-discovery-problema-viabilidade',
    'SDLC: problema, stakeholders, viabilidade e risco inicial',
    'Problema e viabilidade',
    [
      'Definir problema, contexto e resultado esperado antes de propor solução.',
      'Identificar stakeholders, necessidades, restrições e conflitos.',
      'Analisar viabilidade técnica, econômica e operacional.',
      'Registrar riscos, premissas e decisão de avançar ou não.'
    ],
    [
      sommerville(
        ['Capítulo 2 — Processos de software', 'Capítulo 22 — Gerenciamento de projetos'],
        '24–25; 414–430',
        'Base para estudo de viabilidade, stakeholders e gerenciamento de riscos. Técnicas atuais de discovery entram como complemento.'
      )
    ],
    [
      'Mapa animado problema → stakeholders → restrições → decisão.',
      'Radar visual de stakeholders por influência e impacto.',
      'Balança de viabilidade técnica, econômica e operacional.',
      'Matriz simples de risco com probabilidade × impacto.',
      'Caso contínuo com decisão go / revise / stop.'
    ]
  ),
  plannedLesson(
    3,
    'aula-03-requisitos-rastreabilidade',
    'SDLC: requisitos, validação e rastreabilidade',
    'Requisitos',
    [
      'Distinguir requisitos de usuário, sistema, funcionais e não funcionais.',
      'Relacionar elicitação, análise, especificação e validação.',
      'Verificar requisitos quanto a realismo, consistência e completude.',
      'Construir rastreabilidade entre necessidade, requisito, implementação e teste.'
    ],
    [
      sommerville(
        ['Capítulo 4 — Engenharia de requisitos'],
        '57–81',
        'Referência-base para tipos de requisito, elicitação, análise, especificação, validação e gerenciamento.'
      )
    ],
    [
      'Espiral animada de elicitação → especificação → validação.',
      'Comparador visual requisito de usuário × requisito de sistema.',
      'Cartões de funcional × não funcional com exemplos curtos.',
      'Linha de rastreabilidade necessidade → requisito → teste.',
      'Conflito entre stakeholders resolvido por priorização e negociação.'
    ]
  ),
  plannedLesson(
    4,
    'aula-04-analise-modelagem',
    'SDLC: análise e modelagem de sistemas',
    'Análise e modelagem',
    [
      'Distinguir modelos de contexto, interação, estrutura e comportamento.',
      'Selecionar representações adequadas ao problema analisado.',
      'Usar modelos para reduzir ambiguidades e discutir o sistema.',
      'Relacionar modelagem à arquitetura e aos requisitos.'
    ],
    [
      sommerville(
        ['Capítulo 5 — Modelagem de sistemas'],
        '82–102',
        'Base para modelos de contexto, interação, estrutura, comportamento e engenharia dirigida a modelos.'
      )
    ],
    [
      'Sistema no centro com contexto externo entrando em cena.',
      'Caso de uso simplificado animando ator e interação.',
      'Classe/estrutura aparecendo por camadas.',
      'Sequência de mensagens percorrendo lifelines.',
      'Seleção visual: qual modelo responde qual pergunta?'
    ]
  ),
  plannedLesson(
    5,
    'aula-05-planejamento-riscos-qualidade',
    'SDLC: planejamento, estimativas, riscos e qualidade',
    'Planejamento e risco',
    [
      'Relacionar planejamento, estimativa, dependências e riscos.',
      'Distinguir plano dirigido a planos de planejamento incremental.',
      'Definir qualidade como atividade contínua e gerenciada.',
      'Reconhecer revisões, inspeções, métricas e gates como evidências.'
    ],
    [
      sommerville(
        ['Capítulo 22 — Gerenciamento de projetos', 'Capítulo 23 — Planejamento de projeto', 'Capítulo 24 — Gerenciamento de qualidade'],
        '414–474',
        'Base para risco, planejamento, estimativas, revisões, inspeções e medição de qualidade.'
      )
    ],
    [
      'Linha do tempo animada com dependências e marcos.',
      'Cone de incerteza didático para estimativas.',
      'Matriz de riscos com itens entrando por prioridade.',
      'Quality gate visual: evidências permitem ou bloqueiam avanço.',
      'Revisão/inspeção representada como fluxo autor → pares → correção.'
    ]
  ),
  plannedLesson(
    6,
    'aula-06-design-arquitetura-decisoes',
    'SDLC: arquitetura, visões e decisões de projeto',
    'Arquitetura e decisões',
    [
      'Identificar decisões arquiteturais e seus trade-offs.',
      'Distinguir diferentes visões da arquitetura.',
      'Relacionar padrões arquiteturais ao contexto da aplicação.',
      'Registrar decisões importantes e suas consequências.'
    ],
    [
      sommerville(
        ['Capítulo 6 — Projeto de arquitetura'],
        '103–123',
        'Referência-base para decisões, visões, padrões e arquiteturas de aplicações. ADR é apresentado como prática complementar moderna.'
      )
    ],
    [
      'Zoom visual sistema → subsistemas → componentes.',
      'Quatro visões arquiteturais em cartões conectados.',
      'Comparação animada de padrões arquiteturais.',
      'Trade-off em balança: desempenho × manutenibilidade.',
      'ADR visual: contexto → decisão → consequência.'
    ]
  ),
  plannedLesson(
    7,
    'aula-07-implementacao-integracao',
    'SDLC: projeto, implementação, configuração e integração',
    'Implementação',
    [
      'Relacionar projeto orientado a objetos, padrões e implementação.',
      'Organizar versionamento, build e integração de mudanças.',
      'Reconhecer reúso e open source como decisões de implementação.',
      'Entender configuração e mudanças como parte do desenvolvimento profissional.'
    ],
    [
      sommerville(
        ['Capítulo 7 — Projeto e implementação', 'Capítulo 25 — Gerenciamento de configuração'],
        '124–143; 475–492',
        'Base para projeto, implementação, reúso, open source, mudanças, versões, builds e releases.'
      )
    ],
    [
      'Código deixando de ser arquivo isolado e entrando em fluxo de equipe.',
      'Branch → revisão → integração com animação curta.',
      'Build pipeline original baseado em artefatos do processo.',
      'Componente reutilizado versus componente criado do zero.',
      'Mudança conectada a versão, build e release.'
    ]
  ),
  plannedLesson(
    8,
    'aula-08-verificacao-validacao-testes',
    'SDLC: testes, verificação, validação e TDD',
    'V&V e testes',
    [
      'Relacionar testes de desenvolvimento, release e usuário.',
      'Distinguir defeito encontrado internamente de validação com usuário.',
      'Explicar o ciclo básico do desenvolvimento dirigido a testes.',
      'Planejar evidências de qualidade desde a implementação.'
    ],
    [
      sommerville(
        ['Capítulo 8 — Testes de software', 'Capítulo 24 — Gerenciamento de qualidade'],
        '144–163; 454–474',
        'Referência-base para testes de desenvolvimento, TDD, release, usuário e garantia da qualidade.'
      )
    ],
    [
      'Pirâmide visual de níveis de teste sem excesso de texto.',
      'Fluxo defeito → correção → regressão.',
      'TDD animado red → green → refactor.',
      'Release test separado visualmente de teste de desenvolvimento.',
      'Usuário validando objetivo em cenário real.'
    ]
  ),
  plannedLesson(
    9,
    'aula-09-release-deploy',
    'SDLC: build, release, implantação e controle de versões',
    'Release e implantação',
    [
      'Distinguir build, versão, release e implantação.',
      'Relacionar gerenciamento de configuração às entregas.',
      'Entender transição para ambiente real como parte do processo.',
      'Comparar estratégias modernas de deploy como complemento ao conteúdo-base.'
    ],
    [
      sommerville(
        ['Capítulo 25 — Gerenciamento de configuração', 'Capítulo 2 — Processos de software'],
        '475–492; 34–35',
        'Base para construção, versões, releases e transição do software para o ambiente de uso. CI/CD e estratégias modernas entram como atualização.'
      )
    ],
    [
      'Commit → build → versão → release → deploy.',
      'Ambientes dev / teste / produção como esteira visual.',
      'Versão e release comparadas lado a lado.',
      'RUP: transição para ambiente real em destaque.',
      'Blue-green/canary como atualização visual claramente marcada.'
    ]
  ),
  plannedLesson(
    10,
    'aula-10-operacao-observabilidade-incidentes',
    'SDLC: operação, confiabilidade, observabilidade e incidentes',
    'Operação',
    [
      'Entender operação como parte do ciclo de vida do sistema.',
      'Relacionar confiabilidade e segurança ao comportamento em produção.',
      'Usar logs, métricas e traces como práticas atuais de observabilidade.',
      'Transformar incidentes e uso real em feedback para evolução.'
    ],
    [
      sommerville(
        ['Capítulo 10 — Sistemas sociotécnicos', 'Capítulo 11 — Confiança e proteção'],
        '184–215',
        'Base para operação, complexidade, confiabilidade e segurança. Observabilidade moderna é conteúdo complementar atualizado.'
      )
    ],
    [
      'Sistema em produção conectado a pessoas, processos e infraestrutura.',
      'Painel didático logs + métricas + traces.',
      'Incidente percorrendo detectar → responder → aprender.',
      'Loop produção → feedback → backlog/evolução.',
      'Confiabilidade visualizada como propriedade do sistema em uso.'
    ]
  ),
  plannedLesson(
    11,
    'aula-11-manutencao-divida-retirada',
    'SDLC: evolução, manutenção, legado e retirada',
    'Evolução e legado',
    [
      'Explicar por que mudança de software é inevitável.',
      'Distinguir tipos de manutenção e seus motivadores.',
      'Avaliar evolução e modernização de sistemas legados.',
      'Planejar retirada de sistema e migração de forma controlada.'
    ],
    [
      sommerville(
        ['Capítulo 9 — Evolução de software'],
        '164–182',
        'Referência-base para processos de evolução, manutenção e gerenciamento de sistemas legados.'
      )
    ],
    [
      'Software atravessando versões ao longo dos anos.',
      'Motivadores de mudança chegando de usuários, negócio e ambiente.',
      'Mapa manutenção corretiva / adaptativa / evolutiva.',
      'Matriz manter / modernizar / substituir para legado.',
      'Retirada visual com migração de usuários e dados.'
    ]
  ),
  plannedLesson(
    12,
    'aula-12-modelos-projeto-final',
    'SDLC: modelos de processo, melhoria e projeto final',
    'Modelos e projeto final',
    [
      'Comparar cascata, incremental, orientado a reúso, espiral, RUP e abordagens ágeis.',
      'Escolher uma organização de processo coerente com contexto e risco.',
      'Relacionar medição, análise e mudança à melhoria de processos.',
      'Construir e defender o ciclo de vida completo de um produto.'
    ],
    [
      sommerville(
        ['Capítulo 2 — Processos de software', 'Capítulo 3 — Desenvolvimento ágil', 'Capítulo 26 — Melhoria de processos'],
        '18–56; 493–510',
        'Base para comparação de modelos, métodos ágeis e melhoria do processo.'
      )
    ],
    [
      'Galeria animada cascata / incremental / reúso / espiral / RUP.',
      'Escolha de processo por contexto usando cards de cenário.',
      'Melhoria contínua: medir → analisar → mudar.',
      'Mapa completo do projeto final do problema à evolução.',
      'Defesa visual das decisões com evidências e trade-offs.'
    ]
  )
];

export const sdlcCourse: CourseDefinition = {
  slug: 'curso-sdlc',
  title: 'Ciclo de Vida de Software (SDLC)',
  description: 'Curso completo de SDLC · Fundamentos de Software · Referência-base: Ian Sommerville, Engenharia de Software, 9ª edição.',
  ucs: [
    {
      slug: 'fundamentos-sdlc',
      title: 'Ciclo de vida de software do problema à evolução',
      description:
        'Processos, requisitos, modelagem, arquitetura, implementação, testes, entrega, operação e evolução com base em Sommerville e atualização das práticas modernas quando necessário.',
      modules: [
        {
          slug: 'sdlc',
          title: 'Ciclo de Vida de Software',
          description:
            '12 aulas de 4 horas. Conteúdo direto, diagramas autorais, animações funcionais e atividades de aplicação.',
          status: 'active',
          lessons: sdlcLessons
        }
      ]
    }
  ]
};
