import type { LessonDefinition, LessonSource, Slide } from '../../types/course';

type Enrichment = {
  scenario: string;
  concepts: Array<[string, string]>;
  contrasts: Array<[string, string]>;
  stages: string[];
  pitfalls: string[];
  quizzes: Array<[string, string, string, string]>;
  practices: Array<[string, string]>;
  reference: [string, string];
};
const cases: Record<number, Enrichment> = {
  "2": {
    "scenario": "Reservas duplicadas levam duas turmas ao mesmo laboratório.",
    "concepts": [
      [
        "Problema antes da solução",
        "Descreva impacto sem prescrever tecnologia."
      ],
      [
        "Stakeholders",
        "Alunos, professores, coordenação e TI têm necessidades diferentes."
      ],
      [
        "Viabilidade técnica",
        "Verifique integrações, rede e habilidades da equipe."
      ],
      [
        "Viabilidade econômica e operacional",
        "Inclua custo de manutenção, suporte e treinamento."
      ],
      [
        "Risco inicial",
        "Registre probabilidade, impacto, mitigação e responsável."
      ]
    ],
    "contrasts": [
      [
        "Problema",
        "Duas turmas recebem confirmação para o mesmo horário."
      ],
      [
        "Solução candidata",
        "Agenda com aprovação e bloqueio de conflitos."
      ],
      [
        "Indicador",
        "Número de conflitos registrados por mês."
      ]
    ],
    "stages": [
      "Observar o problema",
      "Consultar envolvidos",
      "Comparar alternativas",
      "Decidir seguir ou revisar"
    ],
    "pitfalls": [
      "Começar pelo framework",
      "Ignorar suporte pós-entrega",
      "Avaliar risco sem resposta"
    ],
    "quizzes": [
      [
        "Qual é o problema?",
        "Duas turmas usam o mesmo horário.",
        "Falta um dashboard azul.",
        "Precisamos usar React."
      ],
      [
        "Stakeholder é:",
        "Quem influencia ou é afetado pelo serviço.",
        "Somente programadores.",
        "Apenas o financiador."
      ],
      [
        "Ter servidor sem equipe de suporte compromete:",
        "Viabilidade operacional.",
        "Cor do tema.",
        "Quantidade de botões."
      ],
      [
        "Risco crítico exige:",
        "Mitigação com responsável.",
        "Esquecimento até ocorrer.",
        "Somente trocar o cronograma."
      ]
    ],
    "practices": [
      [
        "Briefing do problema",
        "Documente causa percebida, público e resultado esperado."
      ],
      [
        "Quadro de viabilidade",
        "Compare planilha, ferramenta pronta e sistema próprio."
      ],
      [
        "Decisão inicial",
        "Mapeie cinco stakeholders e quatro riscos com resposta."
      ]
    ],
    "reference": [
      "Sommerville — Software Engineering",
      "https://iansommerville.com/software-engineering-book/"
    ]
  },
  "3": {
    "scenario": "O portal foi aprovado; é preciso formalizar reservas, aprovações, cancelamentos e permissões.",
    "concepts": [
      [
        "Necessidade versus requisito",
        "Necessidade descreve problema; requisito descreve solução verificável."
      ],
      [
        "Requisito funcional",
        "Defina ação, condição e resultado: bloquear reservas coincidentes."
      ],
      [
        "Requisito não funcional",
        "Use métricas e ambiente para desempenho, segurança e acessibilidade."
      ],
      [
        "Elicitação e validação",
        "Entrevistas, observação e protótipos revelam exceções."
      ],
      [
        "Rastreabilidade",
        "Conecte objetivo, requisito, implementação e teste."
      ]
    ],
    "contrasts": [
      [
        "Necessidade",
        "Evitar conflito de sala."
      ],
      [
        "RF-01",
        "Impedir sobreposição para mesma sala."
      ],
      [
        "RNF-01",
        "Consulta em até 2 s sob carga definida."
      ]
    ],
    "stages": [
      "Elicitar",
      "Analisar conflitos",
      "Especificar",
      "Validar e rastrear"
    ],
    "pitfalls": [
      "Descrever requisito subjetivo",
      "Ignorar exceção",
      "Perder ligação com testes"
    ],
    "quizzes": [
      [
        "Qual RF é testável?",
        "O sistema deve bloquear reservas sobrepostas.",
        "O sistema deve ser lindo.",
        "A equipe deve gostar da interface."
      ],
      [
        "Qual RNF é mensurável?",
        "Consulta em até 2 s com carga definida.",
        "Página muito rápida.",
        "Layout agradável."
      ],
      [
        "Requisito contradiz regulamento. Faça:",
        "Validar e negociar.",
        "Implementar sem conversar.",
        "Esconder conflito."
      ],
      [
        "Matriz de rastreabilidade conecta:",
        "Objetivo, requisito e teste.",
        "Somente imagens.",
        "Somente autores."
      ]
    ],
    "practices": [
      [
        "Elicitação",
        "Elabore seis perguntas abertas a dois perfis de usuários."
      ],
      [
        "Especificação",
        "Escreva cinco RF, três RNF e dois critérios Dado/Quando/Então."
      ],
      [
        "Matriz de rastreio",
        "Relacione três necessidades a requisitos e casos de teste."
      ]
    ],
    "reference": [
      "ISO/IEC/IEEE 29148",
      "https://www.iso.org/standard/72089.html"
    ]
  },
  "4": {
    "scenario": "O domínio do portal inclui usuário, laboratório, reserva e aprovação.",
    "concepts": [
      [
        "Propósito de um modelo",
        "Cada representação destaca uma pergunta específica."
      ],
      [
        "Modelo de contexto",
        "Explicite fronteira, atores e serviços externos."
      ],
      [
        "Casos de uso",
        "Represente objetivos do usuário, não botões da interface."
      ],
      [
        "Estrutura",
        "Modele entidades, atributos, relações e cardinalidades."
      ],
      [
        "Comportamento",
        "Use sequência e estados para descrever mensagens e transições."
      ]
    ],
    "contrasts": [
      [
        "Contexto",
        "Quem interage com o portal?"
      ],
      [
        "Estrutura",
        "Quais entidades existem?"
      ],
      [
        "Comportamento",
        "O que muda após um evento?"
      ]
    ],
    "stages": [
      "Delimitar",
      "Mapear interações",
      "Estruturar dados",
      "Validar estados"
    ],
    "pitfalls": [
      "Diagrama sem pergunta",
      "Confundir entidade com tela",
      "Esquecer conflitos e cancelamentos"
    ],
    "quizzes": [
      [
        "Como mostrar fronteira?",
        "Modelo de contexto.",
        "Paleta de cores.",
        "Código CSS."
      ],
      [
        "Qual entidade contém data, horário e sala?",
        "Reserva.",
        "Botão.",
        "Rodapé."
      ],
      [
        "Ordem das mensagens pede:",
        "Diagrama de sequência.",
        "Diagrama de cores.",
        "Cabeçalho HTML."
      ],
      [
        "Transições permitidas ficam em:",
        "Diagrama de estados.",
        "Mockup de logotipo.",
        "README de instalação apenas."
      ]
    ],
    "practices": [
      [
        "Contexto",
        "Desenhe portal, atores e autenticação externa."
      ],
      [
        "Estrutura",
        "Modele Sala, Reserva e Usuário com cardinalidades."
      ],
      [
        "Comportamento",
        "Descreva estado pendente, aprovado, cancelado e exceções."
      ]
    ],
    "reference": [
      "OMG UML",
      "https://www.omg.org/spec/UML/"
    ]
  },
  "5": {
    "scenario": "A direção pede entrega em seis semanas, com duas pessoas trabalhando meio período.",
    "concepts": [
      [
        "Plano de trabalho",
        "Quebre escopo em entregas verificáveis."
      ],
      [
        "Estimativa",
        "Diferencie esforço de duração e registre incerteza."
      ],
      [
        "Capacidade real",
        "Considere disponibilidade e impedimentos."
      ],
      [
        "Riscos e dependências",
        "Atribua responsável e plano de mitigação."
      ],
      [
        "Quality gates",
        "Exija testes, revisão e critérios para liberar incremento."
      ]
    ],
    "contrasts": [
      [
        "Esforço",
        "Horas totais estimadas."
      ],
      [
        "Duração",
        "Tempo no calendário."
      ],
      [
        "Capacidade",
        "Horas efetivas disponíveis."
      ]
    ],
    "stages": [
      "Decompor",
      "Estimar",
      "Tratar riscos",
      "Avaliar qualidade"
    ],
    "pitfalls": [
      "Tratar estimativa como garantia",
      "Ignorar dependências",
      "Testar só na última semana"
    ],
    "quizzes": [
      [
        "Duas pessoas com 20 h semanais somam:",
        "40 h semanais.",
        "20 h semanais.",
        "80 h semanais."
      ],
      [
        "API externa indisponível configura:",
        "Dependência e risco.",
        "Preferência visual.",
        "Requisito concluído."
      ],
      [
        "Quality gate requer:",
        "Evidência de testes e aceite.",
        "Somente prazo.",
        "Mais commits."
      ],
      [
        "Estimativas devem ser:",
        "Revisadas com novos fatos.",
        "Imutáveis.",
        "Ocultas dos envolvidos."
      ]
    ],
    "practices": [
      [
        "Duas iterações",
        "Planeje cadastro, disponibilidade e aprovação."
      ],
      [
        "Matriz de risco",
        "Avalie quatro riscos com impacto e mitigação."
      ],
      [
        "Gate",
        "Defina critérios verificáveis para liberar reservas."
      ]
    ],
    "reference": [
      "PMI",
      "https://www.pmi.org/"
    ]
  },
  "6": {
    "scenario": "O portal será acessado por navegador e terá API e banco em rede institucional.",
    "concepts": [
      [
        "Decisões arquiteturais",
        "Defina limites conforme requisitos de qualidade."
      ],
      [
        "Visões",
        "Contexto, componentes e implantação respondem a perguntas diferentes."
      ],
      [
        "Camadas",
        "Separe interface, domínio e persistência."
      ],
      [
        "Trade-offs",
        "Cache melhora tempo mas pode deixar disponibilidade desatualizada."
      ],
      [
        "ADR",
        "Registre contexto, decisão, alternativas e consequências."
      ]
    ],
    "contrasts": [
      [
        "Contexto",
        "Pessoas e sistemas externos."
      ],
      [
        "Componentes",
        "Navegador, API e banco."
      ],
      [
        "Implantação",
        "Máquinas e rede de execução."
      ]
    ],
    "stages": [
      "Reunir restrições",
      "Desenhar componentes",
      "Comparar opções",
      "Registrar ADR"
    ],
    "pitfalls": [
      "Escolher framework primeiro",
      "Confiar regra só à interface",
      "Omitir consequências da decisão"
    ],
    "quizzes": [
      [
        "Onde validar conflito definitivamente?",
        "No domínio no servidor.",
        "Só no botão.",
        "Na folha CSS."
      ],
      [
        "O que um ADR registra?",
        "Contexto, decisão e consequências.",
        "Somente autor.",
        "Somente bibliotecas."
      ],
      [
        "Separar camadas reduz:",
        "Acoplamento.",
        "Necessidade de testes.",
        "Regras do negócio."
      ],
      [
        "Cache de horários cria risco de:",
        "Informação desatualizada.",
        "Consistência garantida.",
        "Zero manutenção."
      ]
    ],
    "practices": [
      [
        "Visão de contêineres",
        "Desenhe browser, API e PostgreSQL."
      ],
      [
        "Trade-off",
        "Compare monolito e microsserviços para equipe pequena."
      ],
      [
        "ADR-001",
        "Documente decisão sobre regras de conflito de reserva."
      ]
    ],
    "reference": [
      "C4 Model",
      "https://c4model.com/"
    ]
  },
  "7": {
    "scenario": "É hora de construir o portal em mudanças pequenas com revisão e integração.",
    "concepts": [
      [
        "Contrato de componente",
        "Documente entradas, saídas e erros."
      ],
      [
        "Integração contínua",
        "Reduza conflitos com branches curtas."
      ],
      [
        "Versionamento",
        "Escreva commits que expliquem alterações."
      ],
      [
        "Revisão",
        "PRs precisam de contexto, testes e impacto."
      ],
      [
        "Build e configuração",
        "Automatize testes e não versiona segredos."
      ]
    ],
    "contrasts": [
      [
        "Commit",
        "Mudança versionada."
      ],
      [
        "PR",
        "Proposta de integração revisável."
      ],
      [
        "Build",
        "Artefato reproduzível."
      ]
    ],
    "stages": [
      "Implementar",
      "Testar",
      "Revisar",
      "Integrar"
    ],
    "pitfalls": [
      "PR excessivamente grande",
      "Segredo no Git",
      "Dependência sem avaliação"
    ],
    "quizzes": [
      [
        "Qual PR é melhor para revisão?",
        "Pequeno e acompanhado de testes.",
        "Gigante e sem descrição.",
        "Com senha anexada."
      ],
      [
        "Onde armazenar senha?",
        "Em segredo de ambiente.",
        "No componente React.",
        "No README público."
      ],
      [
        "Build reproduzível requer:",
        "Dependências e comandos controlados.",
        "Passos secretos.",
        "Ignorar falha de compilação."
      ],
      [
        "Biblioteca externa exige verificar:",
        "Licença, manutenção e segurança.",
        "Só o logotipo.",
        "Só número de estrelas."
      ]
    ],
    "practices": [
      [
        "Incrementos",
        "Divida o fluxo de reserva em três PRs."
      ],
      [
        "Code review",
        "Revise alteração de aprovação sem verificação de perfil."
      ],
      [
        "Esteira",
        "Projete instalação, lint, teste e compilação."
      ]
    ],
    "reference": [
      "Pro Git",
      "https://git-scm.com/book/en/v2"
    ]
  },
  "8": {
    "scenario": "O portal aceita reservas, mas deve provar que respeita conflitos, perfis e necessidades.",
    "concepts": [
      [
        "Verificação",
        "Comprova conformidade com requisito."
      ],
      [
        "Validação",
        "Investiga adequação ao problema real."
      ],
      [
        "Unidade",
        "Testa regra de conflito com limites de intervalo."
      ],
      [
        "Integração",
        "Testa API, autorização e persistência juntas."
      ],
      [
        "TDD e regressão",
        "Teste que falha, correção mínima e proteção contra retorno do defeito."
      ]
    ],
    "contrasts": [
      [
        "Unitário",
        "Regra isolada."
      ],
      [
        "Integração",
        "API e banco em conjunto."
      ],
      [
        "Aceitação",
        "Usuário realizando tarefa real."
      ]
    ],
    "stages": [
      "Planejar casos",
      "Executar testes",
      "Validar uso real",
      "Regredir"
    ],
    "pitfalls": [
      "Testar só caso feliz",
      "Não escrever resultado esperado",
      "Medir só porcentagem de cobertura"
    ],
    "quizzes": [
      [
        "Teste contra requisito é:",
        "Verificação.",
        "Deploy.",
        "Retirada."
      ],
      [
        "Teste com necessidade real é:",
        "Validação.",
        "Build.",
        "Commit."
      ],
      [
        "TDD começa com:",
        "Teste que falha.",
        "Deploy imediato.",
        "Refatoração sem teste."
      ],
      [
        "Correção de defeito deve gerar:",
        "Teste de regressão.",
        "Exclusão de histórico.",
        "Remoção do monitoramento."
      ]
    ],
    "practices": [
      [
        "Limites",
        "Escreva quatro testes de intervalos adjacentes e sobrepostos."
      ],
      [
        "Níveis",
        "Planeje teste unitário, integração e aceite."
      ],
      [
        "Defeito",
        "Registre erro de autorização, reprodução e regressão."
      ]
    ],
    "reference": [
      "ISTQB",
      "https://www.istqb.org/"
    ]
  },
  "9": {
    "scenario": "O portal foi testado e será implantado na rede interna sem perda de reservas.",
    "concepts": [
      [
        "Build",
        "Produz artefato com fonte rastreável."
      ],
      [
        "Release",
        "Representa versão aprovada e comunicada."
      ],
      [
        "Deploy",
        "Aplica mudança em ambiente de execução."
      ],
      [
        "Migração",
        "Exige backup, compatibilidade e ensaio de restauração."
      ],
      [
        "Rollback",
        "Precisa de gatilho, responsáveis e cuidado com dados."
      ]
    ],
    "contrasts": [
      [
        "Build",
        "Empacotar código."
      ],
      [
        "Release",
        "Aprovar versão."
      ],
      [
        "Deploy",
        "Atualizar execução."
      ]
    ],
    "stages": [
      "Empacotar",
      "Preparar e testar backup",
      "Implantar",
      "Conferir e reverter se necessário"
    ],
    "pitfalls": [
      "Migrar sem backup",
      "Confundir deploy com build",
      "Rollback sem compatibilidade de dados"
    ],
    "quizzes": [
      [
        "O que gera artefato?",
        "Build.",
        "Entrevista.",
        "Postmortem."
      ],
      [
        "Release significa:",
        "Versão aprovada.",
        "Qualquer branch.",
        "Apenas código local."
      ],
      [
        "Migração segura requer:",
        "Backup e recuperação.",
        "Excluir testes.",
        "Alterar logotipo."
      ],
      [
        "Implantação canário expõe versão:",
        "A subconjunto monitorado.",
        "Sem observabilidade.",
        "A ninguém."
      ]
    ],
    "practices": [
      [
        "Esteira",
        "Defina caminho commit, testes, release e deploy."
      ],
      [
        "Migração",
        "Planeje nova coluna opcional preservando reservas."
      ],
      [
        "Rollback",
        "Defina reação à versão que rejeita todas as reservas."
      ]
    ],
    "reference": [
      "GitHub Actions",
      "https://docs.github.com/en/actions"
    ]
  },
  "10": {
    "scenario": "Em produção surgiram lentidão no pico e duplicações eventuais de confirmações.",
    "concepts": [
      [
        "Operação",
        "Serviço inclui procedimentos e responsáveis."
      ],
      [
        "Logs",
        "Registram eventos sem expor dados pessoais desnecessários."
      ],
      [
        "Métricas",
        "Acompanham latência, erros e disponibilidade."
      ],
      [
        "Traces",
        "Correlacionam etapas entre API e banco."
      ],
      [
        "Incidente",
        "Detecte, mitigue, recupere e aprenda sem caça a culpados."
      ]
    ],
    "contrasts": [
      [
        "Log",
        "Evento isolado contextualizado."
      ],
      [
        "Métrica",
        "Tendência agregada."
      ],
      [
        "Trace",
        "Caminho de uma operação."
      ]
    ],
    "stages": [
      "Detectar",
      "Conter",
      "Investigar",
      "Prevenir"
    ],
    "pitfalls": [
      "Logar senhas",
      "Alerta sem runbook",
      "Confundir sintoma com causa"
    ],
    "quizzes": [
      [
        "Para observar lentidão use:",
        "Percentil de latência.",
        "Cor do ícone.",
        "Nome da branch."
      ],
      [
        "Para correlacionar API e banco use:",
        "Trace ou ID de correlação.",
        "Logotipo.",
        "Número de páginas."
      ],
      [
        "Prioridade no incidente é:",
        "Recuperar serviço e reduzir impacto.",
        "Buscar culpados.",
        "Criar feature nova."
      ],
      [
        "Pós-incidente produz:",
        "Ações com donos e prazos.",
        "Apagar registro.",
        "Somente opiniões."
      ]
    ],
    "practices": [
      [
        "Métricas",
        "Defina latência, taxa de erro e limites."
      ],
      [
        "Hipóteses",
        "Investigue lentidão com logs e métricas."
      ],
      [
        "Pós-incidente",
        "Crie linha do tempo e três ações preventivas."
      ]
    ],
    "reference": [
      "Google SRE",
      "https://sre.google/books/"
    ]
  },
  "11": {
    "scenario": "Após dois anos, o portal precisa integrar nova identidade e talvez seja substituído.",
    "concepts": [
      [
        "Evolução inevitável",
        "Contexto e regras mudam após entrega."
      ],
      [
        "Corretiva",
        "Elimina defeito com teste de regressão."
      ],
      [
        "Adaptativa",
        "Reage à mudança de ambiente ou integração."
      ],
      [
        "Evolutiva",
        "Adiciona ou melhora valor entregue."
      ],
      [
        "Retirada",
        "Exige migração, retenção legal e comunicação."
      ]
    ],
    "contrasts": [
      [
        "Corretiva",
        "Remover erro."
      ],
      [
        "Adaptativa",
        "Adequar ambiente."
      ],
      [
        "Evolutiva",
        "Expandir capacidade."
      ]
    ],
    "stages": [
      "Classificar mudança",
      "Avaliar impacto",
      "Alterar e testar",
      "Manter ou retirar"
    ],
    "pitfalls": [
      "Reescrever sem diagnóstico",
      "Ignorar custo da dívida técnica",
      "Desligar sem migração"
    ],
    "quizzes": [
      [
        "Troca do provedor de identidade é:",
        "Manutenção adaptativa.",
        "Retirada.",
        "Somente estética."
      ],
      [
        "Corrigir cálculo errado é:",
        "Corretiva.",
        "Apenas documentação.",
        "Publicação inicial."
      ],
      [
        "Dívida técnica deve incluir:",
        "Impacto e plano.",
        "Somente queixa.",
        "Remoção de testes."
      ],
      [
        "Antes de retirar o sistema faça:",
        "Migração e comunicação.",
        "Apague banco.",
        "Ignore usuários."
      ]
    ],
    "practices": [
      [
        "Classificação",
        "Crie dois exemplos por tipo de manutenção."
      ],
      [
        "Modernização",
        "Compare manter, melhorar ou substituir."
      ],
      [
        "Retirada",
        "Prepare plano de exportação, testes e desligamento."
      ]
    ],
    "reference": [
      "Sommerville — Software Engineering",
      "https://iansommerville.com/software-engineering-book/"
    ]
  },
  "12": {
    "scenario": "A equipe deve apresentar à direção um processo completo do portal, com riscos e decisões fundamentadas.",
    "concepts": [
      [
        "Cascata e incremental",
        "Organizam atividades fundamentais em sequências diferentes."
      ],
      [
        "Escolha contextual",
        "Incerteza e criticidade orientam abordagem."
      ],
      [
        "Espiral",
        "Prioriza avaliação de riscos a cada ciclo."
      ],
      [
        "Reúso e RUP",
        "Exigem seleção, integração e fases iterativas."
      ],
      [
        "Melhoria",
        "Meça, analise, altere e confira resultado."
      ]
    ],
    "contrasts": [
      [
        "Cascata",
        "Estágios sequenciais."
      ],
      [
        "Incremental",
        "Entregas curtas com feedback."
      ],
      [
        "Espiral",
        "Ciclos orientados a riscos."
      ]
    ],
    "stages": [
      "Reunir evidências",
      "Escolher processo",
      "Defender decisões",
      "Definir melhoria"
    ],
    "pitfalls": [
      "Selecionar por moda",
      "Tratar agilidade como ausência de teste",
      "Escolher métrica de vaidade"
    ],
    "quizzes": [
      [
        "Requisitos incertos com usuários disponíveis favorecem:",
        "Incrementos com feedback.",
        "Congelar escopo.",
        "Não testar."
      ],
      [
        "Característica central da espiral:",
        "Gestão explícita de riscos.",
        "Diagrama circular.",
        "Dispensa de teste."
      ],
      [
        "Incremental elimina planejamento?",
        "Não, planejamento é adaptado.",
        "Sim sempre.",
        "Só para frontend."
      ],
      [
        "Melhoria começa por:",
        "Problema e indicador.",
        "Mudar cores.",
        "Criar reuniões sem objetivo."
      ]
    ],
    "practices": [
      [
        "Comparação",
        "Compare cascata, incremental, reúso e espiral."
      ],
      [
        "Dossiê final",
        "Reúna requisitos, modelos, ADR, testes, deploy e operação."
      ],
      [
        "Defesa",
        "Justifique processo e defina duas métricas para melhoria."
      ]
    ],
    "reference": [
      "Agile Manifesto",
      "https://agilemanifesto.org/principles.html"
    ]
  }
};

export function completedLesson(
  number: number, slug: string, title: string, shortTitle: string,
  objectives: string[], sources: LessonSource[], visualPlan: string[]
): LessonDefinition {
  const data = cases[number];
  if (!data) throw new Error('SDLC: aula inexistente ' + number);
  const id = 'sdlc-aula-' + String(number).padStart(2, '0');
  const statement = (index: number): Slide => ({
    id: id + '-conceito-' + (index + 1), kind: 'statement',
    eyebrow: 'Conceito ' + (index + 1) + ' de 5',
    title: data.concepts[index][0],
    lead: data.concepts[index][1],
    detail: 'Aplique esse conceito ao estudo de caso. Compare com o cenário do portal e registre uma decisão verificável.'
  });
  const challenge = (index: number): Slide => {
    const [prompt, correct, wrongA, wrongB] = data.quizzes[index];
    const options = [wrongA, wrongB];
    const answerIndex = index % 3;
    options.splice(answerIndex, 0, correct);
    return {
      id: id + '-quiz-' + (index + 1), kind: 'challenge',
      eyebrow: 'Questão ' + (index + 1) + ' de 4',
      title: 'Aplique o conhecimento', prompt,
      options: options.map(label => ({ label })), answerIndex,
      explanation: correct + ' Esta alternativa responde ao cenário conforme o conceito apresentado.'
    };
  };
  const practice = (index: number): Slide => ({
    id: id + '-atividade-' + (index + 1), kind: 'exercise',
    eyebrow: 'Exercício prático ' + (index + 1) + ' de 3',
    title: data.practices[index][0],
    challenge: data.practices[index][1],
    steps: [
      'Leia o cenário do Portal de Reservas de Laboratórios.',
      'Produza o artefato solicitado e documente as premissas.',
      'Verifique a coerência do resultado com os objetivos da aula.'
    ],
    success: [
      'Artefato com informações explícitas.',
      'Decisões justificadas pelo cenário.',
      'Resultado que outra pessoa pode verificar.'
    ],
    timebox: ['30 min', '40 min', '45 min'][index]
  });
  const slides: Slide[] = [
    { id: id + '-capa', kind: 'cover', eyebrow: 'SDLC · Fundamentos de Software',
      title: shortTitle, subtitle: title, badge: 'Aula ' + String(number).padStart(2, '0'),
      duration: '4 horas' },
    { id: id + '-objetivos', kind: 'cards', eyebrow: 'Resultados de aprendizagem',
      title: 'O que você deverá demonstrar',
      items: objectives.map((detail, i) => ({
        title: 'Objetivo ' + (i + 1), detail,
        tone: (['blue','green','orange','neutral'] as const)[i % 4]
      })) },
    { id: id + '-cenario', kind: 'statement', eyebrow: 'Estudo de caso',
      title: 'Portal de Reservas de Laboratórios', lead: data.scenario,
      detail: 'As decisões tomadas nesta aula alimentam o projeto integrador do curso.' },
    statement(0),
    { id: id + '-diferencas', kind: 'cards', eyebrow: 'Conceitos em contraste',
      title: 'Entenda as diferenças',
      items: data.contrasts.map(([title,detail],i)=>({
        title,detail,tone:(['blue','green','orange'] as const)[i]
      })) },
    challenge(0),
    statement(1),
    { id: id + '-etapas', kind: 'timeline', eyebrow: 'Sequência de trabalho',
      title: 'Quatro etapas aplicáveis',
      items: data.stages.map((step,i)=>({
        year: String(i+1), title: step, detail: objectives[i] ?? data.scenario
      })) },
    statement(2),
    { id: id + '-entregaveis', kind: 'cards', eyebrow: 'Evidências práticas',
      title: 'Três entregas de aprendizagem',
      items: data.practices.map(([title,detail],i)=>({
        title,detail,tone:(['blue','green','orange'] as const)[i]
      })) },
    challenge(1),
    statement(3),
    practice(0),
    statement(4),
    challenge(2),
    { id: id + '-cuidados', kind: 'cards', eyebrow: 'Qualidade',
      title: 'Armadilhas a evitar',
      items: data.pitfalls.map((title,i)=>({
        title, detail: 'Identifique esse erro no portal e explique como preveni-lo.',
        tone: (['blue','green','orange'] as const)[i]
      })) },
    practice(1),
    { id: id + '-sintese', kind: 'statement', eyebrow: 'Fechamento',
      title: 'Relacione prática e decisão',
      lead: objectives[0], detail: objectives[3] },
    challenge(3),
    practice(2),
    { id: id + '-checklist', kind: 'checklist', eyebrow: 'Autoavaliação',
      title: 'Antes de continuar', items: [
        'Consigo explicar os conceitos centrais.',
        'Comparei três abordagens ou características.',
        'Respondi quatro questões e conferi o feedback.',
        'Produzi três atividades práticas com evidências.',
        'Consigo relacionar o assunto ao estudo de caso.'
      ],
      prompt: 'Revise as atividades com resultado incompleto.' },
    { id: id + '-references', kind: 'references', eyebrow: 'Referências',
      title: 'Continue estudando',
      items: [
        {label:'Ian Sommerville · Engenharia de Software · 9ª edição',
          url:'https://iansommerville.com/software-engineering-book/'},
        {label:data.reference[0],url:data.reference[1]}
      ] }
  ];
  return {
    id, status:'published',slug,number,title,shortTitle,durationMinutes:240,
    audience:'Iniciantes em desenvolvimento e engenharia de software',
    ucSlug:'fundamentos-sdlc',objectives,sources,visualPlan,slides
  };
}
