import type { OopSpec } from './lesson-builder';

export const group04: OopSpec[] = [
  {
    number: 10, slug: 'aula-10-solid-coesao-acoplamento',
    title: 'Princípios SOLID, coesão e acoplamento', short: 'SOLID na prática',
    subtitle: 'Decisões de desenho que facilitam evolução e manutenção.',
    problem: { title: 'Uma classe faz cadastro, PDF, email e cobrança',
      lead: 'Cada mudança provoca edições em uma mesma classe e torna os testes frágeis.',
      detail: 'Princípios de projeto ajudam a organizar responsabilidades, dependências e contratos sem multiplicar abstrações sem necessidade.' },
    concepts: [
      { title: 'SRP organiza motivos para mudar', lead: 'Um módulo deve ter responsabilidade coesa.',
        detail: 'Separe emissão de comprovante, envio de mensagem e regra de reserva quando evoluem por motivos distintos.' },
      { title: 'OCP permite extensão controlada', lead: 'Novas políticas podem ser adicionadas sem modificar a regra central.',
        detail: 'Uma estratégia de preço permite novo desconto com implementação adicional, reduzindo condicionais no serviço.' },
      { title: 'LSP e ISP protegem contratos pequenos', lead: 'Subtipos mantêm promessas e consumidores pedem apenas o necessário.',
        detail: 'Uma implementação não deve lançar erro inesperado para operação anunciada; separe interfaces largas em contratos focados.' },
      { title: 'DIP desacopla políticas de detalhes', lead: 'Domínio depende de contratos, não do cliente HTTP concreto.',
        detail: 'Injeção de dependência é uma técnica; DIP é o princípio de depender de abstrações. Avalie o custo da complexidade adicionada.' }
    ],
    elements: [
      { title: 'S / O', detail: 'Responsabilidade coesa e extensibilidade.' },
      { title: 'L / I', detail: 'Substituição segura e contratos específicos.' },
      { title: 'D', detail: 'Dependência de abstrações.' }
    ],
    decisions: [
      { title: 'Coesão', detail: 'Métodos de uma classe trabalham para o mesmo propósito.' },
      { title: 'Acoplamento', detail: 'Mudanças no adaptador não exigem mudar domínio.' },
      { title: 'Custo', detail: 'Abstraia apenas pontos que têm variação real.' }
    ],
    pitfalls: [
      { title: 'Uma interface por linha', detail: 'Excesso de camadas aumenta custo de leitura.' },
      { title: 'Aplicar SOLID como checklist mecânico', detail: 'Princípios exigem contexto e compensações.' },
      { title: 'Confundir SRP com um único método', detail: 'Responsabilidade é motivo de mudança, não contagem de funções.' }
    ],
    quizzes: [
      { prompt: 'Classe que envia email e calcula imposto viola principalmente:', choices: ['SRP', 'LSP', 'ISP'],
        answer: 0, why: 'Há responsabilidades que mudam por motivos distintos.' },
      { prompt: 'Uma subclasse rejeita operação aceita pela base. Qual princípio está em risco?', choices: ['OCP', 'LSP', 'DIP'],
        answer: 1, why: 'A substituição deixa de preservar o contrato esperado.' },
      { prompt: 'Serviço recebe objeto com método salvar, sem instanciar SQLClient. Isso aproxima de:', choices: ['ISP por contagem', 'Herança prototípica', 'DIP'],
        answer: 2, why: 'A política central depende de um contrato estável.' }
    ],
    starterCode: 'class DescontoFixo {\n  calcular(valor) { return valor - 10; }\n}\nclass DescontoPercentual {\n  calcular(valor) { return valor * 0.9; }\n}\nclass Checkout {\n  constructor(politica) { this.politica = politica; }\n  total(valor) { return this.politica.calcular(valor); }\n}\nconsole.log(new Checkout(new DescontoFixo()).total(100));\nconsole.log(new Checkout(new DescontoPercentual()).total(100));',
    expected: '90\n90', distractors: ['100\n90', '90\n10'],
    labTask: 'Crie SemDesconto e teste o Checkout sem alterar sua implementação.',
    explanation: 'A política fixa subtrai 10; a percentual aplica fator 0.9. Checkout delega pelo contrato calcular.',
    exercises: [
      { title: 'Diagnóstico de responsabilidades', goal: 'Refatore classe que valida pedido e dispara notificação.',
        steps: ['Identifique motivos de mudança.', 'Separe validação e envio.', 'Defina colaboração entre objetos.', 'Teste comportamento original.'],
        success: ['Regras preservadas', 'Responsabilidades coesas', 'Teste de regressão'], minutes: 35 },
      { title: 'OCP por estratégia', goal: 'Adicione política nova de desconto sem modificar Checkout.',
        steps: ['Documente calcular(valor).', 'Implemente duas políticas.', 'Acrescente terceira.', 'Execute mesma suíte de contrato.'],
        success: ['Nova política isolada', 'Checkout inalterado', 'Valores corretos'], minutes: 40 },
      { title: 'Revisão SOLID', goal: 'Avalie três decisões no módulo de reservas.',
        steps: ['Analise SRP da classe central.', 'Cheque substituição dos adaptadores.', 'Revise interface de repositório.', 'Justifique trade-offs do refactor.'],
        success: ['Três problemas discutidos', 'Evidências no código', 'Sem abstrações gratuitas'], minutes: 45 }
    ],
    review: ['Descrevo SRP.', 'Aplico OCP com estratégia.', 'Reconheço violações LSP.', 'Proponho contratos pequenos ISP.', 'Explico DIP versus injeção.'],
    references: [{ label: 'Martin Fowler · Design Principles', url: 'https://martinfowler.com/bliki/DesignPrinciples.html' }]
  },
  {
    number: 11, slug: 'aula-11-padroes-strategy-factory-observer',
    title: 'Padrões Strategy, Factory e Observer', short: 'Padrões de projeto',
    subtitle: 'Reconheça problemas recorrentes antes de aplicar soluções.',
    problem: { title: 'Notificações mudam conforme evento e canal',
      lead: 'Há múltiplos meios de envio, criação de adaptadores e interessados em eventos.',
      detail: 'Strategy seleciona comportamento; Factory centraliza criação; Observer informa inscritos. Nem todo cenário precisa dos três.' },
    concepts: [
      { title: 'Strategy encapsula uma política substituível', lead: 'Cada política oferece a mesma operação.',
        detail: 'O consumidor recebe estratégia e chama executar(). Novo algoritmo não exige aumentar condicionais no consumidor.' },
      { title: 'Factory concentra decisão de criação', lead: 'A fábrica seleciona e instancia colaboradores.',
        detail: 'Em JavaScript, pode ser função simples. Não é obrigatório criar uma hierarquia de fábricas.' },
      { title: 'Observer distribui eventos aos assinantes', lead: 'Inscritos recebem aviso quando estado muda.',
        detail: 'Projete subscribe, unsubscribe e notify. Defina ordem, tolerância a erros e prevenção de vazamento de listeners.' },
      { title: 'Padrões trazem custos e benefícios', lead: 'Uma abstração deve resolver complexidade presente.',
        detail: 'Compare versão simples com padronizada; mantenha contratos explícitos e evite engenharia excessiva.' }
    ],
    elements: [
      { title: 'Strategy', detail: 'Troca comportamento por composição.' },
      { title: 'Factory', detail: 'Cria objeto adequado a um parâmetro.' },
      { title: 'Observer', detail: 'Dispara evento para assinantes registrados.' }
    ],
    decisions: [
      { title: 'Extensão', detail: 'Adicione novo canal sem modificar consumidor.' },
      { title: 'Criação', detail: 'Separe escolha do adaptador de seu uso.' },
      { title: 'Eventos', detail: 'Permita cancelamento da assinatura.' }
    ],
    pitfalls: [
      { title: 'Observer sem unsubscribe', detail: 'Assinantes antigos permanecem recebendo eventos e ocupando memória.' },
      { title: 'Factory como switch gigante', detail: 'Quando cresce, use registro explícito de construtores.' },
      { title: 'Strategy sem contrato', detail: 'Sem operação padronizada não há substituição segura.' }
    ],
    quizzes: [
      { prompt: 'Para alternar regras de desconto em runtime, escolha:', choices: ['Strategy', 'Observer obrigatoriamente', 'Singleton sempre'],
        answer: 0, why: 'Strategy separa políticas intercambiáveis.' },
      { prompt: 'Para centralizar qual tipo de notificador é instanciado:', choices: ['Pilha', 'Factory', 'Percurso BFS'],
        answer: 1, why: 'Uma fábrica decide a implementação concreta.' },
      { prompt: 'Qual cuidado é crítico com Observer?', choices: ['Usar extends sempre', 'Não permitir inscrições', 'Disponibilizar unsubscribe'],
        answer: 2, why: 'Cancelar inscrição evita retenção e notificações indevidas.' }
    ],
    starterCode: 'function criarNotificador(tipo) {\n  const canais = {\n    email: { enviar: msg => "EMAIL: " + msg },\n    log: { enviar: msg => "LOG: " + msg }\n  };\n  if (!canais[tipo]) throw new Error("Canal inválido");\n  return canais[tipo];\n}\nclass Avisos {\n  constructor(canal) { this.canal = canal; }\n  publicar(msg) { return this.canal.enviar(msg); }\n}\nconsole.log(new Avisos(criarNotificador("email")).publicar("Reserva"));\nconsole.log(new Avisos(criarNotificador("log")).publicar("Livre"));',
    expected: 'EMAIL: Reserva\nLOG: Livre', distractors: ['LOG: Reserva\nEMAIL: Livre', 'EMAIL: Reserva\nEMAIL: Livre'],
    labTask: 'Adicione canal SMS à fábrica. Depois crie Observer que avisa dois inscritos quando uma reserva é aberta.',
    explanation: 'Factory devolve a estratégia de canal; Avisos usa enviar sem saber qual implementação recebeu.',
    exercises: [
      { title: 'Estratégia de preços', goal: 'Compare duas políticas de tarifa sem if/else no consumidor.',
        steps: ['Defina contrato calcular.', 'Implemente duas estratégias.', 'Injete em compra.', 'Teste entradas iguais e saídas diferentes.'],
        success: ['Políticas isoladas', 'Consumidor estável', 'Saídas verificadas'], minutes: 35 },
      { title: 'Fábrica de notificadores', goal: 'Crie função que escolhe email, log e SMS.',
        steps: ['Mapeie tipos aceitos.', 'Crie implementação por tipo.', 'Rejeite tipo desconhecido.', 'Teste todos os canais.'],
        success: ['Três canais', 'Erro tratado', 'Contratos idênticos'], minutes: 40 },
      { title: 'Emissor de eventos', goal: 'Implemente subscribe e unsubscribe com Set de callbacks.',
        steps: ['Mantenha Set de funções.', 'Retorne função para cancelar.', 'Notifique com snapshot de inscritos.', 'Teste cancelamento e chamada repetida.'],
        success: ['Assinatura funcional', 'Cancelamento eficaz', 'Sem chamadas duplicadas'], minutes: 45 }
    ],
    review: ['Diferencio Strategy, Factory e Observer.', 'Uso contrato comum em estratégias.', 'Trato canal inválido na fábrica.', 'Cancelo inscrições.', 'Reconheço custos de abstrações.'],
    references: [{ label: 'Refactoring.Guru · Design Patterns', url: 'https://refactoring.guru/design-patterns' }]
  },
  {
    number: 12, slug: 'aula-12-projeto-integrador-reservas-poo',
    title: 'Projeto final: sistema de reservas orientado a objetos', short: 'Projeto final POO',
    subtitle: 'Modele, implemente, teste, refatore e defenda decisões de projeto.',
    problem: { title: 'Reserva de laboratórios sem duplicar horários',
      lead: 'A coordenação precisa cadastrar laboratórios, reservar intervalos e cancelar com segurança.',
      detail: 'O projeto combina classes, estado privado, composição, política de disponibilidade, repositório injetado, eventos e testes automatizados.' },
    concepts: [
      { title: 'Entidades e casos de uso guiam o desenho', lead: 'Laboratório, Reserva e Serviço possuem responsabilidades diferentes.',
        detail: 'Laboratório tem identificador e capacidade; Reserva tem horário e estado; Serviço orquestra e valida conflitos.' },
      { title: 'Invariantes devem sobreviver a todas as ações', lead: 'Não pode haver duas reservas ativas sobrepostas na mesma sala.',
        detail: 'Adote intervalos [início, fim): uma reserva terminando às 10 permite outra começando às 10.' },
      { title: 'Repositório e notificador são colaboradores', lead: 'Construa serviço sem acoplá-lo ao banco ou email real.',
        detail: 'Injete objetos com contratos salvar/buscar e publicar para testar de forma determinística.' },
      { title: 'Testes e documentação demonstram qualidade', lead: 'Defina casos válidos, inválidos e limites.',
        detail: 'Execute os testes do laboratório Node e registre decisões: tratamento de horários, capacidade, conflitos, cancelamentos e evolução.' }
    ],
    elements: [
      { title: 'Domínio', detail: 'Laboratorio e Reserva preservam identidade e estado.' },
      { title: 'Aplicação', detail: 'ServicoReservas valida conflitos e orquestra.' },
      { title: 'Infraestrutura', detail: 'RepositorioMemoria implementa acesso aos registros.' }
    ],
    decisions: [
      { title: 'Intervalos', detail: 'Adote regra explícita de início inclusivo e fim exclusivo.' },
      { title: 'Colaboração', detail: 'Serviço depende da porta de repositório.' },
      { title: 'Evidência', detail: 'Testes reprodutíveis comprovam invariantes.' }
    ],
    pitfalls: [
      { title: 'Comparar apenas hora sem data', detail: 'Escolha representação coerente e valide formato.' },
      { title: 'Cancelar sem validar estado', detail: 'Uma reserva já cancelada não deve cancelar novamente.' },
      { title: 'Salvar sem checar conflito', detail: 'Verifique intervalos e laboratório antes de registrar.' }
    ],
    quizzes: [
      { prompt: 'Dois horários [8,10) e [10,12) na mesma sala:', choices: ['Não se sobrepõem', 'Sempre conflitam', 'São inválidos por definição'],
        answer: 0, why: 'Na convenção semiaberta, o fim do primeiro coincide com o começo do segundo sem conflito.' },
      { prompt: 'Quem deve rejeitar conflito de reserva?', choices: ['Somente CSS', 'Serviço/domínio responsável pela reserva', 'Notificador'],
        answer: 1, why: 'Conflito é invariante de negócio, validada antes da gravação.' },
      { prompt: 'Como testar sem banco real?', choices: ['Remover testes', 'Simular todas as mensagens visualmente', 'Injetar repositório em memória pelo mesmo contrato'],
        answer: 2, why: 'Adaptadores intercambiáveis permitem testes determinísticos.' }
    ],
    starterCode: 'const reservas = [\n  { sala: "LAB1", inicio: 8, fim: 10, ativo: true }\n];\nfunction conflita(sala, inicio, fim) {\n  return reservas.some(r => r.ativo && r.sala === sala && inicio < r.fim && fim > r.inicio);\n}\nconsole.log(conflita("LAB1", 9, 11));\nconsole.log(conflita("LAB1", 10, 12));\nconsole.log(conflita("LAB2", 9, 11));',
    expected: 'true\nfalse\nfalse', distractors: ['true\ntrue\nfalse', 'false\nfalse\nfalse'],
    labTask: 'Valide inicio < fim, crie método de cancelar e demonstre nova reserva após o cancelamento.',
    explanation: 'Há sobreposição apenas entre [9,11) e [8,10) na mesma sala. Intervalos adjacentes e salas distintas são permitidos.',
    exercises: [
      { title: 'Modelagem e contratos', goal: 'Especifique as classes e os estados do sistema.',
        steps: ['Liste entidades e casos de uso.', 'Defina responsáveis por cada regra.', 'Especifique intervalos semiabertos.', 'Registre cinco critérios de aceite.'],
        success: ['Invariantes identificadas', 'Contratos claros', 'Cinco critérios testáveis'], minutes: 35 },
      { title: 'Construção incremental', goal: 'Implemente reserva, consulta e cancelamento usando composição.',
        steps: ['Implemente classes do domínio.', 'Injete repositório.', 'Bloqueie conflitos.', 'Teste cancelamento e novo agendamento.'],
        success: ['Reserva válida registrada', 'Conflito rejeitado', 'Cancelamento consistente'], minutes: 40 },
      { title: 'Entrega auditável', goal: 'Apresente código e dez testes automatizados com justificativa arquitetural.',
        steps: ['Rode suíte Node.js do laboratório.', 'Adicione teste para intervalos adjacentes.', 'Refatore uma responsabilidade.', 'Documente desenho, execução e limitações.'],
        success: ['Dez testes executados', 'Critérios atendidos', 'README e defesa técnica'], minutes: 45 }
    ],
    review: ['Modelo classes e contratos.', 'Protejo estado privado.', 'Uso repositório injetado.', 'Teste conflitos e cancelamentos.', 'Documentei e executei o projeto final.'],
    references: [
      { label: 'Node.js · Test runner', url: 'https://nodejs.org/api/test.html' },
      { label: 'MDN · Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' }
    ]
  }
];
