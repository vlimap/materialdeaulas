import type { LessonDefinition } from '../../types/course';

export const aula01Sdlc: LessonDefinition = {
  id: 'sdlc-aula-01',
  status: 'published',
  slug: 'aula-01-visao-geral-ciclo-vida-software',
  number: 1,
  title: 'SDLC: processos e ciclo de vida de software',
  shortTitle: 'SDLC · Processos',
  durationMinutes: 240,
  audience: 'Iniciantes em desenvolvimento e engenharia de software',
  ucSlug: 'fundamentos-sdlc',
  objectives: [
    'Explicar por que software profissional exige processo e não apenas programação.',
    'Reconhecer especificação, desenvolvimento, validação e evolução como atividades fundamentais.',
    'Comparar visualmente processo em cascata e desenvolvimento incremental.',
    'Relacionar requisitos, projeto, implementação, testes, operação e manutenção.',
    'Identificar feedback e mudança como partes naturais do ciclo de vida.',
    'Escolher uma organização de processo coerente com o contexto do sistema.'
  ],
  sources: [
    {
      label: 'Engenharia de Software',
      author: 'Ian Sommerville',
      edition: '9ª edição · Pearson · 2011',
      chapters: ['Capítulo 1 — Introdução', 'Capítulo 2 — Processos de software'],
      pages: '3–37',
      note: 'Referência-base da aula. Diagramas da apresentação são redesenhos autorais dos conceitos do livro.'
    }
  ],
  visualPlan: [
    'Software profissional = programa + configuração + documentação.',
    'Ciclo animado das quatro atividades fundamentais.',
    'Cascata redesenhada com progressão e retorno entre fases.',
    'Desenvolvimento incremental com especificação, desenvolvimento e validação intercalados.',
    'Feedback da operação retornando para especificação e evolução.',
    'Mapa visual de artefatos produzidos ao longo do ciclo.',
    'Comparação visual entre cascata, incremental e abordagem orientada a risco.'
  ],
  slides: [
    {
      id: 'capa',
      kind: 'cover',
      eyebrow: 'Fundamentos de Software · Engenharia',
      title: 'Ciclo de Vida de Software',
      subtitle: 'Processos, atividades, feedback e evolução',
      badge: 'Aula 01',
      duration: '4 horas',
      note: 'Pergunta de abertura: software profissional é somente código?'
    },
    {
      id: 'software-profissional',
      kind: 'statement',
      eyebrow: 'Antes do SDLC',
      title: 'Software profissional é mais do que um programa.',
      lead: 'Código + dados + configuração + documentação.',
      detail: 'O produto precisa ser usado, mantido e modificado por outras pessoas ao longo do tempo.',
      chips: ['programa', 'configuração', 'documentação', 'manutenção']
    },
    {
      id: 'por-que-processo',
      kind: 'challenge',
      eyebrow: '30 segundos',
      title: 'O que muda quando o software deixa de ser pessoal?',
      prompt: 'Um sistema será usado por clientes e mantido por uma equipe. O que passa a ser necessário?',
      options: [
        { label: 'Somente mais código' },
        { label: 'Processo, documentação, qualidade e gestão de mudanças' },
        { label: 'Apenas escolher um framework moderno' }
      ],
      answerIndex: 1,
      explanation: 'Software profissional precisa continuar compreensível, verificável, operável e modificável.'
    },
    {
      id: 'quatro-atividades',
      kind: 'visual',
      eyebrow: 'Base conceitual',
      title: 'Quatro atividades aparecem em qualquer processo de software',
      subtitle: 'Especificação · desenvolvimento · validação · evolução',
      visual: 'sdlc-four-activities',
      caption: 'Redesenho autoral baseado em Sommerville, 9ª ed., cap. 1.'
    },
    {
      id: 'atividade-especificacao',
      kind: 'statement',
      eyebrow: '01 · Especificação',
      title: 'Definir o que será produzido e sob quais restrições.',
      lead: 'O que o sistema precisa fazer?',
      detail: 'Clientes e equipe tornam necessidades e restrições suficientemente claras para orientar o desenvolvimento.',
      chips: ['necessidades', 'restrições', 'requisitos', 'viabilidade']
    },
    {
      id: 'atividade-desenvolvimento',
      kind: 'statement',
      eyebrow: '02 · Desenvolvimento',
      title: 'Transformar a especificação em software executável.',
      lead: 'Projeto + implementação.',
      detail: 'Estrutura, dados, interfaces, componentes e código materializam a solução.',
      chips: ['design', 'arquitetura', 'código', 'integração']
    },
    {
      id: 'atividade-validacao',
      kind: 'statement',
      eyebrow: '03 · Validação',
      title: 'Produzir evidências de que o software atende ao esperado.',
      lead: 'O sistema faz o que deveria fazer?',
      detail: 'Testes e avaliações confrontam o produto com especificações e necessidades reais.',
      chips: ['testes', 'aceitação', 'qualidade', 'evidência']
    },
    {
      id: 'atividade-evolucao',
      kind: 'statement',
      eyebrow: '04 · Evolução',
      title: 'Software útil precisa continuar mudando.',
      lead: 'Mudança não é exceção.',
      detail: 'Novas necessidades, defeitos, ambiente e negócio fazem o sistema evoluir depois da entrega.',
      chips: ['manutenção', 'mudança', 'legado', 'evolução']
    },
    {
      id: 'feedback-ciclo',
      kind: 'visual',
      eyebrow: 'Ciclo real',
      title: 'O processo tem retorno, não apenas avanço',
      subtitle: 'Uma descoberta tardia pode alterar decisões anteriores',
      visual: 'sdlc-feedback',
      caption: 'O próprio modelo em cascata admite feedback entre estágios na prática.'
    },
    {
      id: 'modelo-versus-atividade',
      kind: 'statement',
      eyebrow: 'Distinção importante',
      title: 'Atividade fundamental não é a mesma coisa que modelo de processo.',
      lead: 'As atividades permanecem. A organização muda.',
      detail: 'Cascata, incremental, ágil ou orientado a risco organizam especificação, desenvolvimento, validação e evolução de formas diferentes.',
      chips: ['atividade', 'modelo', 'sequência', 'iteração']
    },
    {
      id: 'cascata-visual',
      kind: 'visual',
      eyebrow: 'Modelo de processo',
      title: 'Cascata organiza o trabalho em estágios encadeados',
      subtitle: 'Requisitos → projeto → implementação → integração/teste → operação/manutenção',
      visual: 'sdlc-waterfall',
      caption: 'Redesenho autoral baseado na Figura 2.1 de Sommerville.'
    },
    {
      id: 'cascata-quando',
      kind: 'cards',
      eyebrow: 'Cascata',
      title: 'O que o modelo evidencia',
      items: [
        { title: 'Planejamento forte', detail: 'Atividades e entregas ficam visíveis.', tone: 'blue' },
        { title: 'Documentação', detail: 'Cada estágio tende a deixar artefatos claros.', tone: 'innovation' },
        { title: 'Mudança cara', detail: 'Revisar fases anteriores pode gerar retrabalho.', tone: 'orange' },
        { title: 'Requisitos estáveis', detail: 'Funciona melhor quando a mudança esperada é baixa.', tone: 'green' }
      ]
    },
    {
      id: 'incremental-visual',
      kind: 'visual',
      eyebrow: 'Modelo de processo',
      title: 'Incremental intercala especificação, desenvolvimento e validação',
      subtitle: 'Cada versão adiciona funcionalidade e gera feedback',
      visual: 'sdlc-incremental',
      caption: 'Redesenho autoral baseado na Figura 2.2 de Sommerville.'
    },
    {
      id: 'incremental-vantagens',
      kind: 'cards',
      eyebrow: 'Incremental',
      title: 'Por que o feedback chega mais cedo?',
      items: [
        { title: 'Mudança localizada', detail: 'Menos trabalho precisa ser refeito.', tone: 'green' },
        { title: 'Feedback real', detail: 'Usuários avaliam software funcionando.', tone: 'blue' },
        { title: 'Valor antecipado', detail: 'Parte útil pode chegar antes do sistema completo.', tone: 'innovation' },
        { title: 'Arquitetura exige cuidado', detail: 'Mudanças contínuas podem degradar a estrutura.', tone: 'orange' }
      ]
    },
    {
      id: 'comparacao-modelos',
      kind: 'visual',
      eyebrow: 'Comparação',
      title: 'Não existe um único processo ideal para todo software',
      subtitle: 'Contexto, risco, mudança e criticidade alteram a escolha',
      visual: 'sdlc-models',
      caption: 'Síntese visual baseada nos modelos discutidos no capítulo 2.'
    },
    {
      id: 'desafio-modelo',
      kind: 'challenge',
      eyebrow: 'Decisão',
      title: 'Qual contexto pede mais estabilidade antecipada?',
      prompt: 'Qual cenário tende a exigir análise e especificação mais rigorosas antes da implementação?',
      options: [
        { label: 'Protótipo de interface para testar uma ideia' },
        { label: 'Sistema crítico de controle com requisitos de segurança' },
        { label: 'Landing page promocional de curta duração' }
      ],
      answerIndex: 1,
      explanation: 'Sistemas críticos normalmente exigem análise mais rigorosa de requisitos, riscos e evidências.'
    },
    {
      id: 'artefatos-visual',
      kind: 'visual',
      eyebrow: 'Evidências do processo',
      title: 'O trabalho deixa artefatos que conectam decisões',
      subtitle: 'Necessidade → requisito → design → código → teste → operação',
      visual: 'sdlc-artifacts',
      caption: 'A rastreabilidade reduz decisões soltas e ajuda a analisar impacto de mudanças.'
    },
    {
      id: 'mudanca',
      kind: 'statement',
      eyebrow: 'Mudança',
      title: 'Processos precisam prever que os requisitos vão mudar.',
      lead: 'Evitar mudança não é uma estratégia.',
      detail: 'Prototipação, desenvolvimento incremental e feedback reduzem o custo de descobrir problemas tarde demais.',
      chips: ['prototipação', 'incrementos', 'feedback', 'risco']
    },
    {
      id: 'rup-contexto',
      kind: 'cards',
      eyebrow: 'Outro exemplo',
      title: 'RUP separa fases de atividades técnicas',
      items: [
        { title: 'Concepção', detail: 'Business case e escopo inicial.', tone: 'blue' },
        { title: 'Elaboração', detail: 'Problema, arquitetura, plano e riscos.', tone: 'innovation' },
        { title: 'Construção', detail: 'Projeto, programação, testes e integração.', tone: 'green' },
        { title: 'Transição', detail: 'Software chega ao ambiente real dos usuários.', tone: 'orange' }
      ]
    },
    {
      id: 'caso-clinica',
      kind: 'exercise',
      eyebrow: 'Caso guiado',
      title: 'Clínica quer reduzir filas presenciais',
      subtitle: 'Mapeie o processo sem desenhar telas',
      challenge: 'A clínica quer agendamento digital e acompanhamento do atendimento.',
      steps: [
        'Defina a necessidade e uma restrição relevante.',
        'Escreva um requisito verificável.',
        'Indique uma decisão de projeto.',
        'Defina uma evidência de validação.',
        'Explique uma mudança provável depois do uso real.'
      ],
      success: [
        'As quatro atividades fundamentais aparecem.',
        'Existe pelo menos um feedback para etapa anterior.',
        'A equipe consegue explicar por que escolheu sua organização de processo.'
      ],
      timebox: '20 min'
    },
    {
      id: 'atividade-equipe',
      kind: 'missions',
      eyebrow: 'Atividade em equipe',
      title: 'Escolha um sistema e monte seu ciclo',
      intro: 'O objetivo é justificar o processo, não decorar um desenho.',
      options: [
        { title: 'Biblioteca', detail: 'Empréstimo, reserva e devolução.', twist: 'Regras são conhecidas e relativamente estáveis.' },
        { title: 'Loja local', detail: 'Pedidos e retirada no balcão.', twist: 'Prioridades mudam rapidamente.' },
        { title: 'Sistema crítico', detail: 'Controle de equipamento sensível.', twist: 'Falhas podem causar dano.' }
      ],
      requirements: [
        'Quatro atividades fundamentais.',
        'Modelo de processo escolhido.',
        'Um artefato importante.',
        'Um risco de mudança.',
        'Justificativa da escolha.'
      ]
    },
    {
      id: 'checkpoint',
      kind: 'checklist',
      eyebrow: 'Fechamento',
      title: 'O essencial da Aula 01',
      items: [
        'Software profissional inclui mais do que código.',
        'Especificação, desenvolvimento, validação e evolução são atividades fundamentais.',
        'Cascata organiza estágios de forma mais sequencial.',
        'Incremental intercala atividades e entrega versões progressivas.',
        'Feedback e mudança fazem parte do ciclo.',
        'O contexto define qual organização de processo faz mais sentido.'
      ],
      prompt: 'Você consegue explicar SDLC sem usar a frase “é só um conjunto de etapas”?'
    },
    {
      id: 'proxima-aula',
      kind: 'statement',
      eyebrow: 'Próxima aula',
      title: 'Antes de especificar, precisamos entender se vale a pena construir.',
      lead: 'Problema → stakeholders → viabilidade → risco.',
      detail: 'A próxima aula entra em descoberta, viabilidade e análise inicial do contexto.',
      chips: ['problema', 'stakeholders', 'viabilidade', 'risco']
    },
    {
      id: 'referencias',
      kind: 'references',
      eyebrow: 'Referência-base',
      title: 'Fonte principal e aprofundamento',
      items: [
        { label: 'Ian Sommerville — Engenharia de Software, 9ª ed. — capítulos 1 e 2', url: 'https://www.pearson.com' },
        { label: 'ISO/IEC/IEEE 12207 — Software life cycle processes', url: 'https://www.iso.org/standard/63712.html' },
        { label: 'SWEBOK — Software Engineering Body of Knowledge', url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering' }
      ]
    }
  ]
};
