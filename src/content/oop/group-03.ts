import type { OopSpec } from './lesson-builder';

export const group03: OopSpec[] = [
  {
    number: 7, slug: 'aula-07-heranca-extends-super',
    title: 'Herança, extends, super e substituição segura', short: 'Herança consciente',
    subtitle: 'Crie especializações sem violar contratos da classe base.',
    problem: { title: 'Mensagens com canais diferentes',
      lead: 'Um sistema possui notificações genéricas e notificações por email com metadados específicos.',
      detail: 'O relacionamento de subtipo permite especializar comportamento quando as instâncias continuam válidas no lugar do tipo base.' },
    concepts: [
      { title: 'extends cria ligação de protótipos', lead: 'Uma classe derivada reutiliza métodos herdados.',
        detail: 'O modelo JavaScript é prototípico; extends conecta cadeias de protótipos, não copia métodos em cada objeto.' },
      { title: 'super inicializa a classe base', lead: 'No constructor derivado, super(...) precede uso de this.',
        detail: 'A chamada passa argumentos à base e permite estabelecer invariantes antes de configurar dados específicos.' },
      { title: 'Sobrescrita adapta comportamento', lead: 'A subclasse pode redefinir método herdado.',
        detail: 'Use super.metodo() quando for necessário complementar a implementação base, não duplicar seu código.' },
      { title: 'Subtipo precisa respeitar expectativas', lead: 'Quem usa o contrato base não deveria receber surpresas inválidas.',
        detail: 'Não estreite pré-condições nem enfraqueça pós-condições sem revisar o contrato; se for só reúso, prefira composição.' }
    ],
    elements: [
      { title: 'Base', detail: 'Notificacao define enviar.' },
      { title: 'Subclasse', detail: 'NotificacaoEmail especializa o canal.' },
      { title: 'super', detail: 'Acessa constructor ou método da base.' }
    ],
    decisions: [
      { title: 'É um', detail: 'Email é um tipo de notificação.' },
      { title: 'Contrato', detail: 'enviar retorna mensagem coerente.' },
      { title: 'Alternativa', detail: 'Se canais mudam dinamicamente, composição pode ser melhor.' }
    ],
    pitfalls: [
      { title: 'Esquecer super no constructor derivado', detail: 'Usar this antes de super lança erro.' },
      { title: 'Árvore de classes muito profunda', detail: 'Acoplamento cresce e extensão se torna frágil.' },
      { title: 'Quebrar substituição', detail: 'Subclasse que lança erro para entradas válidas da base muda contrato.' }
    ],
    quizzes: [
      { prompt: 'Quando usar extends?', choices: ['Para qualquer duplicação', 'Quando existe relação real de subtipo', 'Sempre que há dois objetos'],
        answer: 1, why: 'Herança tem significado de substituição, não apenas reaproveitamento.' },
      { prompt: 'No constructor de subclasse com extends, this deve ser usado:', choices: ['Depois de super(...)', 'Antes de super(...)', 'Somente no método static'],
        answer: 0, why: 'A classe base inicializa a instância.' },
      { prompt: 'Sobrescrever enviar para aceitar menos situações que a classe base:', choices: ['Sempre melhora reuso', 'Não tem impacto', 'Pode violar contrato de substituição'],
        answer: 2, why: 'O usuário do tipo base espera que suas operações válidas continuem válidas.' }
    ],
    starterCode: 'class Notificacao {\n  constructor(destino) { this.destino = destino; }\n  enviar(texto) { return "Para " + this.destino + ": " + texto; }\n}\nclass Email extends Notificacao {\n  enviar(texto) { return "[EMAIL] " + super.enviar(texto); }\n}\nconst aviso = new Email("professor");\nconsole.log(aviso.enviar("Aula confirmada"));\nconsole.log(aviso instanceof Notificacao);',
    expected: '[EMAIL] Para professor: Aula confirmada\ntrue',
    distractors: ['Para professor: Aula confirmada\nfalse', '[EMAIL] Para professor: Aula confirmada\nfalse'],
    labTask: 'Crie classe SMS que também sobrescreve enviar e mantenha o mesmo contrato de entrada.',
    explanation: 'A sobrescrita chama o método base e acrescenta [EMAIL]. Email também é instância da classe base.',
    exercises: [
      { title: 'Árvore de notificações', goal: 'Modele classe base e duas especializações.',
        steps: ['Defina contrato enviar.', 'Crie subclasse Email.', 'Crie subclasse SMS.', 'Compare resultados na mesma rotina.'],
        success: ['Duas especializações', 'Interface coerente', 'Sem duplicar corpo da base'], minutes: 35 },
      { title: 'Constructor e super', goal: 'Inicialize prioridade na classe base e canal na derivada.',
        steps: ['Crie campos base.', 'Passe valores por super.', 'Verifique instância derivada.', 'Teste argumentos inválidos.'],
        success: ['super primeiro', 'Estado completo', 'Validação mantida'], minutes: 40 },
      { title: 'Auditar contrato', goal: 'Identifique uma herança inadequada e substitua por composição.',
        steps: ['Descreva contrato da base.', 'Encontre pré-condição violada.', 'Crie colaborador em vez de extends.', 'Compare antes e depois.'],
        success: ['Violação explicada', 'Composição funcional', 'Teste de substituição'], minutes: 45 }
    ],
    review: ['Uso extends corretamente.', 'Inicializo com super.', 'Sobrescrevo métodos.', 'Verifico substituição.', 'Reconheço quando composição é preferível.'],
    references: [{ label: 'MDN · extends', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends' }]
  },
  {
    number: 8, slug: 'aula-08-polimorfismo-contratos',
    title: 'Polimorfismo, contratos e duck typing em JavaScript', short: 'Polimorfismo',
    subtitle: 'Comportamentos diferentes por meio de uma interface compartilhada.',
    problem: { title: 'O mesmo pedido deve gerar notificações distintas',
      lead: 'O serviço de reserva envia e-mail ou registra aviso sem precisar conhecer cada implementação.',
      detail: 'O polimorfismo permite variar comportamento quando os colaboradores respeitam um contrato comum.' },
    concepts: [
      { title: 'Polimorfismo usa o mesmo protocolo', lead: 'Objetos diferentes implementam enviar(mensagem).',
        detail: 'O chamador usa o contrato, não uma cadeia de if/else com tipos concretos.' },
      { title: 'JavaScript admite tipagem estrutural dinâmica', lead: 'Se o objeto implementa a operação esperada, pode participar.',
        detail: 'Duck typing exige validação de contrato quando se recebe valores externos não confiáveis.' },
      { title: 'Despacho dinâmico escolhe implementação', lead: 'notificador.enviar resolve o método do objeto real.',
        detail: 'A chamada não depende do nome da classe e pode ser composta com fábrica ou injeção de dependência.' },
      { title: 'Substituir colaborador facilita testes', lead: 'Um fake registra mensagens sem acessar serviços externos.',
        detail: 'Polimorfismo reduz acoplamento e permite validar o resultado sem depender de rede, e-mail ou APIs.' }
    ],
    elements: [
      { title: 'Contrato', detail: 'enviar(texto) retorna confirmação.' },
      { title: 'Implementações', detail: 'Email, console e fake implementam mesma operação.' },
      { title: 'Consumidor', detail: 'Reserva usa enviar sem perguntar pelo tipo.' }
    ],
    decisions: [
      { title: 'Menos condicionais', detail: 'O canal é escolhido antes de executar a rotina.' },
      { title: 'Troca segura', detail: 'Todos os canais respeitam entradas e saídas.' },
      { title: 'Testabilidade', detail: 'Fake captura chamadas recebidas.' }
    ],
    pitfalls: [
      { title: 'instanceof em toda operação', detail: 'Preferir a interface quando suficiente.' },
      { title: 'Contrato implícito e mal documentado', detail: 'Defina entrada, retorno, exceções e efeitos.' },
      { title: 'Método ausente', detail: 'Valide typeof obj.enviar antes de delegar dados externos.' }
    ],
    quizzes: [
      { prompt: 'Qual trecho exemplifica polimorfismo?', choices: ['Verificar classe em cada chamada', 'Chamar enviar em objetos com o mesmo contrato', 'Modificar variável global'],
        answer: 1, why: 'O consumidor depende do comportamento compartilhado.' },
      { prompt: 'Duck typing considera principalmente:', choices: ['Métodos disponíveis no objeto', 'Nome do arquivo', 'Cor do ícone'],
        answer: 0, why: 'A compatibilidade é avaliada pelo comportamento disponível.' },
      { prompt: 'Qual colaborador usar em teste unitário?', choices: ['API real de email obrigatória', 'Banco de produção', 'Fake que registra chamadas'],
        answer: 2, why: 'Um objeto fake mantém o contrato e torna os testes determinísticos.' }
    ],
    starterCode: 'const email = { enviar: texto => "EMAIL: " + texto };\nconst consoleAviso = { enviar: texto => "LOG: " + texto };\nfunction avisar(notificador, texto) {\n  if (typeof notificador?.enviar !== "function") return "Inválido";\n  return notificador.enviar(texto);\n}\nconsole.log(avisar(email, "Confirmado"));\nconsole.log(avisar(consoleAviso, "Confirmado"));\nconsole.log(avisar({}, "Confirmado"));',
    expected: 'EMAIL: Confirmado\nLOG: Confirmado\nInválido',
    distractors: ['EMAIL: Confirmado\nEMAIL: Confirmado\nInválido', 'LOG: Confirmado\nInválido\nInválido'],
    labTask: 'Adicione notificador de push que obedece ao mesmo contrato; crie um fake que contabiliza envios.',
    explanation: 'A rotina chama enviar do objeto recebido e retorna Inválido quando o contrato não existe.',
    exercises: [
      { title: 'Notificadores substituíveis', goal: 'Implemente SMS e Email com o mesmo método enviar.',
        steps: ['Escreva contrato explícito.', 'Crie duas classes ou objetos.', 'Execute rotina comum.', 'Teste ambos com mesma entrada.'],
        success: ['Mesmo protocolo', 'Resultados específicos', 'Chamador desacoplado'], minutes: 35 },
      { title: 'Validação de contrato', goal: 'Impeça chamadas para implementações sem enviar.',
        steps: ['Receba colaborador variável.', 'Cheque operação antes de usar.', 'Trate ausência.', 'Teste null e objeto vazio.'],
        success: ['Sem exceção inesperada', 'Falhas compreensíveis', 'Casos de borda'], minutes: 40 },
      { title: 'Fake de notificação', goal: 'Teste se uma reserva envia exatamente uma mensagem.',
        steps: ['Crie objeto com array de mensagens.', 'Implemente enviar.', 'Injete no serviço de reserva.', 'Valide quantidade e texto.'],
        success: ['Teste sem API externa', 'Uma notificação', 'Mensagem correta'], minutes: 45 }
    ],
    review: ['Defino interface comportamental.', 'Entendo duck typing.', 'Não acoplo a classes concretas.', 'Valido método ausente.', 'Uso fake em testes.'],
    references: [{ label: 'MDN · Classes and inheritance', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes' }]
  },
  {
    number: 9, slug: 'aula-09-abstracao-dependencias-modulos',
    title: 'Abstração, injeção de dependência e limites entre camadas', short: 'Abstração e dependências',
    subtitle: 'Separe regras de negócio de persistência e comunicação.',
    problem: { title: 'Sistema de reservas não deve depender diretamente de um banco',
      lead: 'Persistir em Map durante os testes e usar API real em produção deveria preservar regras do domínio.',
      detail: 'Camadas de aplicação dependem de contratos com colaboradores, não de detalhes de infraestrutura.' },
    concepts: [
      { title: 'Abstração expõe o necessário', lead: 'Repositorio precisa de buscarPorId e salvar.',
        detail: 'A camada de negócio não precisa saber como Map, SQL ou arquivo implementa as operações.' },
      { title: 'Injeção de dependência fornece colaboradores', lead: 'Receba repositorio via constructor.',
        detail: 'O chamador escolhe a implementação; não crie uma dependência rígida dentro da classe de serviço.' },
      { title: 'Contrato permite múltiplos adaptadores', lead: 'MemoriaRepo e ApiRepo podem implementar mesma API.',
        detail: 'JavaScript puro não impõe interfaces nominais em tempo de compilação, então testes de contrato ajudam.' },
      { title: 'Fluxo de responsabilidade deve ser explícito', lead: 'Domínio valida; repositório persiste; apresentação exibe.',
        detail: 'Organize módulos por responsabilidade e evite que a classe de domínio importe detalhes de rede ou DOM.' }
    ],
    elements: [
      { title: 'Domínio', detail: 'Regras de reservar, cancelar e consultar.' },
      { title: 'Porta', detail: 'Contrato salvar e buscarPorId.' },
      { title: 'Adaptador', detail: 'MemoriaRepo implementa a porta.' }
    ],
    decisions: [
      { title: 'Constructor', detail: 'Dependência recebida no momento da criação.' },
      { title: 'Contrato estável', detail: 'Métodos e efeitos esperados documentados.' },
      { title: 'Persistência isolada', detail: 'Trocar Map por API não altera regras do serviço.' }
    ],
    pitfalls: [
      { title: 'new ApiClient dentro do domínio', detail: 'Acoplamento impede teste e troca de infraestrutura.' },
      { title: 'Interface excessiva', detail: 'Não crie contratos com dezenas de operações sem necessidade.' },
      { title: 'Misturar async e sync', detail: 'Documente se adaptadores retornam Promise e faça consumidores consistentes.' }
    ],
    quizzes: [
      { prompt: 'Qual componente deve decidir se reserva duplicada é permitida?', choices: ['CSS', 'Domínio/serviço de aplicação', 'Adaptador de email'],
        answer: 1, why: 'A decisão é regra de negócio.' },
      { prompt: 'Receber repositorio via constructor é exemplo de:', choices: ['Injeção de dependência', 'Herança múltipla', 'Mutação de prototype'],
        answer: 0, why: 'A instância recebe colaborador externo por contrato.' },
      { prompt: 'Ao substituir repositório Map por outro adaptador, o objetivo é:', choices: ['Reescrever todas as regras', 'Eliminar testes', 'Preservar o contrato de salvar e buscar'],
        answer: 2, why: 'Uma abstração estável desacopla lógica de persistência.' }
    ],
    starterCode: 'class MemoriaRepo {\n  constructor() { this.dados = new Map(); }\n  salvar(item) { this.dados.set(item.id, { ...item }); }\n  buscar(id) { return this.dados.get(id) ?? null; }\n}\nclass Servico {\n  constructor(repo) { this.repo = repo; }\n  criar(id) {\n    if (this.repo.buscar(id)) return false;\n    this.repo.salvar({ id, status: "ativo" });\n    return true;\n  }\n}\nconst repo = new MemoriaRepo();\nconst servico = new Servico(repo);\nconsole.log(servico.criar("R1"));\nconsole.log(servico.criar("R1"));\nconsole.log(repo.buscar("R1").status);',
    expected: 'true\nfalse\nativo',
    distractors: ['true\ntrue\nativo', 'false\nfalse\nativo'],
    labTask: 'Substitua MemoriaRepo por fake que registra salvar e buscar; confira que Servico não precisa mudar.',
    explanation: 'Na primeira chamada não há registro; a segunda detecta R1 existente e recusa duplicação.',
    exercises: [
      { title: 'Definir porta de dados', goal: 'Documente um contrato RepositorioDeReservas.',
        steps: ['Liste consultas necessárias.', 'Descreva entradas e retornos.', 'Defina duplicidade.', 'Preveja falhas.'],
        success: ['Contrato minimalista', 'Casos de erro', 'Sem detalhes de infraestrutura'], minutes: 30 },
      { title: 'Injeção de repositório', goal: 'Troque repositório sem editar regra criar().',
        steps: ['Crie MemoriaRepo.', 'Injete no serviço.', 'Crie FakeRepo.', 'Execute o mesmo cenário nos dois.'],
        success: ['Serviço preservado', 'Dois adaptadores', 'Comportamento equivalente'], minutes: 40 },
      { title: 'Projetar camadas', goal: 'Desenhe fluxo UI → aplicação → domínio → porta → adaptador.',
        steps: ['Defina responsabilidades.', 'Especifique direção de dependência.', 'Aloque validação por camada.', 'Teste domínio isolado.'],
        success: ['Sem ciclo de dependências', 'Regra centralizada', 'Teste independente de rede'], minutes: 45 }
    ],
    review: ['Separo domínio e infraestrutura.', 'Defino contrato de repositório.', 'Uso injeção pelo constructor.', 'Testo adaptadores por contrato.', 'Distingo API síncrona de assíncrona.'],
    references: [{ label: 'Martin Fowler · Inversion of Control', url: 'https://martinfowler.com/bliki/InversionOfControl.html' }]
  }
];
