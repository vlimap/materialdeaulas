import type { LessonDefinition } from '../../types/course';

export const aula01Sdlc: LessonDefinition = {
  id: 'sdlc-aula-01',
  status: 'published',
  slug: 'aula-01-visao-geral-ciclo-vida-software',
  number: 1,
  title: 'SDLC: visão geral do ciclo de vida de software',
  shortTitle: 'SDLC · Visão geral',
  durationMinutes: 240,
  audience: 'Iniciantes em desenvolvimento e engenharia de software',
  ucSlug: 'fundamentos-sdlc',
  objectives: [
    'Explicar por que software precisa de um ciclo de vida e não apenas de codificação.',
    'Reconhecer as principais fases do SDLC e o objetivo de cada uma.',
    'Relacionar fases do ciclo de vida com artefatos, decisões e responsáveis.',
    'Distinguir fase do ciclo de vida de modelo de processo de desenvolvimento.',
    'Identificar feedback, validação e rastreabilidade ao longo do ciclo.',
    'Mapear um problema simples do negócio até operação e manutenção.'
  ],
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'Fundamentos de Software · Engenharia',
      title: 'Ciclo de Vida de Software',
      subtitle: 'Da necessidade ao uso, operação, evolução e retirada',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Abra com a pergunta: em que momento um software começa a existir?'
    },
    {
      id: 'objetivo',
      kind: 'statement',
      eyebrow: 'Objetivo',
      title: 'Software não começa no código e não termina no deploy.',
      lead: 'O código é uma parte do ciclo.',
      detail: 'O SDLC organiza decisões, trabalho, validação, entrega, operação e evolução.',
      chips: ['problema', 'requisitos', 'design', 'construção', 'validação', 'operação']
    },
    {
      id: 'roteiro-4h',
      kind: 'cards',
      eyebrow: 'Plano de 4 horas',
      title: 'Como a aula está organizada',
      subtitle: 'Do problema ao ciclo completo',
      items: [
        { kicker: '20 min', title: 'Problema', detail: 'Por que precisamos de ciclo de vida?', tone: 'blue' },
        { kicker: '35 min', title: 'Mapa do SDLC', detail: 'Fases e objetivos', tone: 'innovation' },
        { kicker: '30 min', title: 'Artefatos', detail: 'O que cada fase produz', tone: 'orange' },
        { kicker: '25 min', title: 'Papéis', detail: 'Quem participa e decide', tone: 'green' },
        { kicker: '15 min', title: 'Intervalo', detail: 'Pausa', tone: 'neutral' },
        { kicker: '35 min', title: 'Modelos', detail: 'Cascata, iterativo, ágil e DevOps', tone: 'blue' },
        { kicker: '35 min', title: 'Caso guiado', detail: 'Mapear um software realista', tone: 'innovation' },
        { kicker: '30 min', title: 'Atividade', detail: 'Construir o ciclo em equipe', tone: 'orange' },
        { kicker: '15 min', title: 'Fechamento', detail: 'Checkpoint e revisão', tone: 'green' }
      ]
    },
    {
      id: 'antes-do-codigo',
      kind: 'statement',
      eyebrow: 'Ponto de partida',
      title: 'Antes de existir código, existe uma necessidade.',
      lead: 'Alguém precisa resolver alguma coisa.',
      detail: 'O primeiro trabalho é entender o problema, o contexto e o resultado esperado.',
      chips: ['necessidade', 'stakeholders', 'valor', 'restrições']
    },
    {
      id: 'cenario-caotico',
      kind: 'cards',
      eyebrow: 'Sem ciclo',
      title: 'O que costuma acontecer quando tudo começa pelo código?',
      items: [
        { title: 'Escopo muda sem controle', detail: 'Cada pessoa entende o produto de um jeito.', tone: 'orange' },
        { title: 'Decisões desaparecem', detail: 'Ninguém sabe por que algo foi feito.', tone: 'neutral' },
        { title: 'Testes chegam tarde', detail: 'Problemas aparecem perto da entrega.', tone: 'orange' },
        { title: 'Deploy vira susto', detail: 'Produção passa a ser o ambiente de descoberta.', tone: 'neutral' }
      ]
    },
    {
      id: 'desafio-ordem',
      kind: 'challenge',
      eyebrow: 'Raciocínio rápido',
      title: 'Qual atividade deveria acontecer primeiro?',
      prompt: 'Uma empresa quer um sistema para reduzir filas de atendimento. Qual é o primeiro movimento mais coerente?',
      options: [
        { label: 'Escolher React e PostgreSQL' },
        { label: 'Entender o problema, os usuários e o resultado esperado' },
        { label: 'Criar a tela de login' }
      ],
      answerIndex: 1,
      explanation: 'Tecnologia e implementação vêm depois de compreender a necessidade, o contexto e as restrições.'
    },
    {
      id: 'definicao-sdlc',
      kind: 'statement',
      eyebrow: 'SDLC',
      title: 'SDLC organiza o ciclo completo do software.',
      lead: 'Planejar → construir → validar → operar → evoluir.',
      detail: 'As fases existem para tornar decisões e resultados verificáveis ao longo do tempo.',
      chips: ['Software Development Life Cycle', 'processo', 'feedback', 'qualidade']
    },
    {
      id: 'fases-centrais',
      kind: 'cards',
      eyebrow: 'Mapa principal',
      title: '7 blocos para enxergar o ciclo',
      items: [
        { kicker: '01', title: 'Descoberta e planejamento', detail: 'Problema, valor, viabilidade e direção.', tone: 'blue' },
        { kicker: '02', title: 'Requisitos', detail: 'O que precisa ser atendido e sob quais condições.', tone: 'innovation' },
        { kicker: '03', title: 'Design e arquitetura', detail: 'Como a solução será estruturada.', tone: 'orange' },
        { kicker: '04', title: 'Implementação', detail: 'Construção, integração e revisão.', tone: 'green' },
        { kicker: '05', title: 'Verificação e validação', detail: 'Evidências de que o software atende ao esperado.', tone: 'blue' },
        { kicker: '06', title: 'Entrega e operação', detail: 'Publicação, observabilidade e suporte.', tone: 'innovation' },
        { kicker: '07', title: 'Manutenção e retirada', detail: 'Evolução, correção e encerramento responsável.', tone: 'neutral' }
      ]
    },
    {
      id: 'nao-e-seta-reta',
      kind: 'statement',
      eyebrow: 'Atenção',
      title: 'O ciclo não precisa ser uma linha reta.',
      lead: 'Feedback faz o trabalho voltar.',
      detail: 'Uma descoberta em teste, operação ou manutenção pode exigir revisão de requisitos e design.',
      chips: ['feedback', 'iterações', 'mudança', 'aprendizado']
    },
    {
      id: 'fase-planejamento',
      kind: 'cards',
      eyebrow: 'Fase 1',
      title: 'Descoberta e planejamento',
      items: [
        { title: 'Problema', detail: 'Qual situação precisa mudar?', tone: 'blue' },
        { title: 'Valor', detail: 'Por que vale a pena resolver?', tone: 'green' },
        { title: 'Viabilidade', detail: 'Há condições técnicas, econômicas e operacionais?', tone: 'orange' },
        { title: 'Risco', detail: 'O que pode inviabilizar ou comprometer a iniciativa?', tone: 'neutral' }
      ]
    },
    {
      id: 'fase-requisitos',
      kind: 'cards',
      eyebrow: 'Fase 2',
      title: 'Requisitos tornam expectativa verificável',
      items: [
        { title: 'Funcionais', detail: 'Comportamentos e capacidades esperadas.', tone: 'blue' },
        { title: 'Não funcionais', detail: 'Qualidade, segurança, desempenho e restrições.', tone: 'innovation' },
        { title: 'Regras de negócio', detail: 'Condições impostas pelo domínio.', tone: 'orange' },
        { title: 'Aceitação', detail: 'Como saberemos que a necessidade foi atendida?', tone: 'green' }
      ]
    },
    {
      id: 'fase-design',
      kind: 'cards',
      eyebrow: 'Fase 3',
      title: 'Design transforma intenção em solução estruturada',
      items: [
        { title: 'UX/UI', detail: 'Fluxos e interação com usuários.', tone: 'blue' },
        { title: 'Arquitetura', detail: 'Componentes, fronteiras e dependências.', tone: 'innovation' },
        { title: 'Dados', detail: 'Entidades, persistência e relacionamentos.', tone: 'green' },
        { title: 'Decisões', detail: 'Trade-offs registrados e justificáveis.', tone: 'orange' }
      ]
    },
    {
      id: 'fase-implementacao',
      kind: 'cards',
      eyebrow: 'Fase 4',
      title: 'Implementação é mais do que digitar código',
      items: [
        { title: 'Versionamento', detail: 'Histórico e colaboração controlados.', tone: 'blue' },
        { title: 'Revisão', detail: 'Código analisado antes de integrar.', tone: 'green' },
        { title: 'Build', detail: 'Processo reproduzível de construção.', tone: 'innovation' },
        { title: 'Integração', detail: 'Partes precisam funcionar juntas.', tone: 'orange' }
      ]
    },
    {
      id: 'fase-qualidade',
      kind: 'cards',
      eyebrow: 'Fase 5',
      title: 'Verificar e validar são atividades diferentes',
      items: [
        { title: 'Verificação', detail: 'Estamos construindo conforme especificado?', tone: 'blue' },
        { title: 'Validação', detail: 'Estamos resolvendo a necessidade certa?', tone: 'green' },
        { title: 'Testes', detail: 'Produzem evidências sobre comportamento e risco.', tone: 'innovation' },
        { title: 'Aceite', detail: 'Critérios acordados são confirmados.', tone: 'orange' }
      ]
    },
    {
      id: 'desafio-verificacao-validacao',
      kind: 'challenge',
      eyebrow: 'Checkpoint',
      title: 'Verificação ou validação?',
      prompt: 'O sistema implementou exatamente o campo obrigatório descrito no requisito. Isso é principalmente:',
      options: [
        { label: 'Verificação' },
        { label: 'Validação' },
        { label: 'Operação' }
      ],
      answerIndex: 0,
      explanation: 'A comparação entre implementação e especificação é uma atividade de verificação.'
    },
    {
      id: 'fase-entrega-operacao',
      kind: 'cards',
      eyebrow: 'Fase 6',
      title: 'Produção também faz parte do ciclo',
      items: [
        { title: 'Deploy', detail: 'Software chega ao ambiente de uso.', tone: 'blue' },
        { title: 'Observabilidade', detail: 'Logs, métricas e traces mostram comportamento real.', tone: 'innovation' },
        { title: 'Incidentes', detail: 'Falhas precisam de resposta e aprendizado.', tone: 'orange' },
        { title: 'Feedback', detail: 'Uso real alimenta novas decisões.', tone: 'green' }
      ]
    },
    {
      id: 'fase-manutencao',
      kind: 'cards',
      eyebrow: 'Fase 7',
      title: 'Software útil continua mudando',
      items: [
        { title: 'Corretiva', detail: 'Corrigir defeitos.', tone: 'orange' },
        { title: 'Adaptativa', detail: 'Responder a mudanças externas.', tone: 'blue' },
        { title: 'Evolutiva', detail: 'Adicionar ou melhorar capacidades.', tone: 'green' },
        { title: 'Retirada', detail: 'Encerrar uso, dados e dependências com controle.', tone: 'neutral' }
      ]
    },
    {
      id: 'artefatos',
      kind: 'timeline',
      eyebrow: 'Rastreabilidade',
      title: 'Cada fase deixa evidências',
      subtitle: 'Artefatos conectam decisões ao longo do ciclo',
      items: [
        { year: 'Problema', title: 'Brief / visão', detail: 'Necessidade, objetivos e contexto.' },
        { year: 'Requisitos', title: 'BRD / SRS / backlog', detail: 'Expectativas e condições verificáveis.' },
        { year: 'Design', title: 'Modelos / protótipos / ADRs', detail: 'Estrutura e decisões da solução.' },
        { year: 'Construção', title: 'Código / commits / builds', detail: 'Implementação e integração.' },
        { year: 'Qualidade', title: 'Casos e evidências de teste', detail: 'Resultados de verificação e validação.' },
        { year: 'Operação', title: 'Métricas / runbooks / incidentes', detail: 'Evidências do comportamento em uso.' }
      ]
    },
    {
      id: 'rastreabilidade',
      kind: 'statement',
      eyebrow: 'Conexão',
      title: 'Um requisito deve conseguir chegar até sua evidência.',
      lead: 'Necessidade → requisito → implementação → teste → operação.',
      detail: 'Rastreabilidade reduz decisões soltas e facilita análise de impacto quando algo muda.',
      chips: ['origem', 'implementação', 'teste', 'mudança']
    },
    {
      id: 'papeis',
      kind: 'cards',
      eyebrow: 'Pessoas',
      title: 'O ciclo é multidisciplinar',
      items: [
        { title: 'Negócio / Produto', detail: 'Problema, valor e prioridade.', tone: 'green' },
        { title: 'Análise / Requisitos', detail: 'Necessidades e critérios verificáveis.', tone: 'blue' },
        { title: 'Design / Arquitetura', detail: 'Experiência e estrutura da solução.', tone: 'innovation' },
        { title: 'Desenvolvimento', detail: 'Construção e integração.', tone: 'orange' },
        { title: 'QA / Segurança', detail: 'Risco, evidências e controles.', tone: 'blue' },
        { title: 'Operação / SRE', detail: 'Entrega, confiabilidade e resposta.', tone: 'neutral' }
      ]
    },
    {
      id: 'fase-versus-modelo',
      kind: 'statement',
      eyebrow: 'Distinção essencial',
      title: 'Fase do SDLC não é modelo de desenvolvimento.',
      lead: 'As necessidades permanecem. A organização do trabalho muda.',
      detail: 'Cascata, iterativo, incremental, ágil e DevOps distribuem as atividades de formas diferentes.',
      chips: ['fases', 'processo', 'fluxo', 'feedback']
    },
    {
      id: 'modelos',
      kind: 'cards',
      eyebrow: 'Modelos',
      title: 'Quatro formas de organizar o trabalho',
      items: [
        { title: 'Sequencial', detail: 'Fases com forte dependência e passagem formal.', tone: 'neutral' },
        { title: 'Iterativo', detail: 'A solução é refinada em ciclos sucessivos.', tone: 'blue' },
        { title: 'Incremental / Ágil', detail: 'Valor é entregue em partes pequenas e frequentes.', tone: 'green' },
        { title: 'DevOps', detail: 'Entrega e operação entram no fluxo contínuo de feedback.', tone: 'innovation' }
      ]
    },
    {
      id: 'caso-fila',
      kind: 'exercise',
      eyebrow: 'Caso guiado',
      title: 'Sistema de atendimento sem fila física',
      subtitle: 'Mapeie o problema pelo ciclo',
      challenge: 'Uma clínica quer reduzir espera presencial e permitir agendamento e acompanhamento de atendimento.',
      steps: [
        'Defina o problema e um resultado de negócio mensurável.',
        'Liste dois requisitos funcionais e dois não funcionais.',
        'Escolha uma decisão de arquitetura ou dados que precisará ser tomada.',
        'Defina como validar o fluxo principal.',
        'Explique o que observar depois do deploy.'
      ],
      success: [
        'Há conexão clara entre problema e requisito.',
        'Existe pelo menos uma evidência de validação.',
        'A operação gera feedback para uma próxima decisão.'
      ],
      timebox: '20 min'
    },
    {
      id: 'missoes',
      kind: 'missions',
      eyebrow: 'Atividade em equipe',
      title: 'Escolha um produto e desenhe o ciclo',
      intro: 'Não crie telas. Construa o raciocínio do ciclo de vida.',
      options: [
        { title: 'Biblioteca', detail: 'Empréstimo, reserva e devolução.', twist: 'Há usuários com atraso.' },
        { title: 'Loja local', detail: 'Pedidos e retirada no balcão.', twist: 'O estoque muda durante o dia.' },
        { title: 'Escola', detail: 'Solicitação e acompanhamento de documentos.', twist: 'Há dados pessoais.' }
      ],
      requirements: [
        'Problema e objetivo.',
        'Stakeholders principais.',
        'Fases do ciclo em ordem lógica.',
        'Um artefato ou evidência por fase.',
        'Um exemplo de feedback que faria o time voltar a uma fase anterior.'
      ]
    },
    {
      id: 'checkpoint',
      kind: 'checklist',
      eyebrow: 'Revisão',
      title: 'Você consegue explicar o ciclo sem decorar nomes?',
      items: [
        'O software começa por uma necessidade, não pelo código.',
        'Requisitos tornam expectativas verificáveis.',
        'Design e arquitetura estruturam a solução antes e durante a construção.',
        'Testes produzem evidências de verificação e validação.',
        'Deploy, operação e manutenção pertencem ao ciclo.',
        'Feedback conecta as fases e permite evolução.'
      ],
      prompt: 'Se uma fase mudar, quais outras podem ser impactadas?'
    },
    {
      id: 'proxima-aula',
      kind: 'statement',
      eyebrow: 'Próxima aula',
      title: 'Da visão geral para a descoberta do problema.',
      lead: 'Antes de requisito, existe contexto.',
      detail: 'Na próxima aula: stakeholders, objetivos, viabilidade, restrições, riscos e definição do problema.',
      chips: ['discovery', 'stakeholders', 'viabilidade', 'risco']
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referências',
      title: 'Para aprofundar',
      items: [
        { label: 'ISO/IEC/IEEE 12207 — Software life cycle processes', url: 'https://www.iso.org/standard/63712.html' },
        { label: 'SWEBOK — Software Engineering Body of Knowledge', url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering' },
        { label: 'Manifesto for Agile Software Development', url: 'https://agilemanifesto.org/' }
      ]
    }
  ]
};
