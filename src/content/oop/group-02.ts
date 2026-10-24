import type { OopSpec } from './lesson-builder';

export const group02: OopSpec[] = [
  {
    number: 4, slug: 'aula-04-getters-setters-static',
    title: 'Propriedades, getters, setters e membros estáticos', short: 'Acesso e propriedades',
    subtitle: 'Controle leituras e alterações sem expor o estado.',
    problem: { title: 'Um produto precisa apresentar preço com desconto',
      lead: 'A aplicação deve mostrar um valor derivado, mas impedir preço negativo.',
      detail: 'Getters calculam leituras convenientes, setters podem impor validações e métodos estáticos apoiam tarefas sem estado de instância.' },
    concepts: [
      { title: 'get expõe uma propriedade derivada', lead: 'produto.precoFinal pode calcular o resultado.',
        detail: 'Acessar getter parece ler campo, mas executa código. Evite efeitos colaterais surpreendentes.' },
      { title: 'set valida alterações', lead: 'O setter recebe o novo valor e deve proteger invariantes.',
        detail: 'Pode lançar RangeError para valores negativos ou não finitos. O contrato de erro deve ser consistente.' },
      { title: 'static concentra funções da classe', lead: 'A função de fábrica pode criar instâncias validadas.',
        detail: 'Produto.comPreco(...) não depende de uma instância preexistente; métodos estáticos são invocados no construtor da classe.' },
      { title: 'O desenho da API precede a sintaxe', lead: 'Use método quando uma operação tem impacto de negócio.',
        detail: 'Alterar preço pode exigir auditoria; nesse caso reajustar(percentual) é mais explícito que atribuição via setter.' }
    ],
    elements: [
      { title: 'getter', detail: 'Retorna preçoFinal derivado.' },
      { title: 'setter', detail: 'Protege alterações do preço-base.' },
      { title: 'static', detail: 'Método associado à classe.' }
    ],
    decisions: [
      { title: 'Leitura', detail: 'Cálculo sem alterar a instância.' },
      { title: 'Validação', detail: 'Preço finito e maior ou igual a zero.' },
      { title: 'Fábrica', detail: 'Crie instâncias segundo padrão definido.' }
    ],
    pitfalls: [
      { title: 'Recursão em setter', detail: 'set preco(v) { this.preco = v } chama o mesmo setter indefinidamente.' },
      { title: 'Getter com mutação', detail: 'A leitura não deveria consumir estoque.' },
      { title: 'Static como atributo de instância', detail: 'Produto.metodo() e produto.metodo() são chamadas diferentes.' }
    ],
    quizzes: [
      { prompt: 'Qual é o uso mais apropriado de um getter?', choices: ['Cancelar compra', 'Calcular preço total em leitura', 'Alterar estoque sem aviso'],
        answer: 1, why: 'Um getter pode apresentar valor derivado sem modificar estado.' },
      { prompt: 'Qual erro comum cria recursão sem fim?', choices: ['Setter que atribui à própria propriedade', 'Getter que lê campo privado', 'Método static chamado na classe'],
        answer: 0, why: 'Atribuir this.preco dentro de set preco invoca novamente o setter.' },
      { prompt: 'Método static validarPreco deve ser chamado por:', choices: ['Qualquer objeto aleatório', 'produto.#validarPreco diretamente', 'Produto.validarPreco(...)'],
        answer: 2, why: 'Membros static pertencem à classe.' }
    ],
    starterCode: 'class Produto {\n  #preco;\n  constructor(preco) { this.preco = preco; }\n  get preco() { return this.#preco; }\n  set preco(valor) {\n    if (!Number.isFinite(valor) || valor < 0) throw new RangeError("Preço inválido");\n    this.#preco = valor;\n  }\n  get comDesconto() { return this.#preco * 0.9; }\n  static taxa() { return 0.1; }\n}\nconst p = new Produto(100);\nconsole.log(p.comDesconto);\nconsole.log(Produto.taxa());',
    expected: '90\n0.1', distractors: ['100\n0.1', '90\n10'],
    labTask: 'Altere o preço pelo setter, teste -5 em try/catch e explique por que comDesconto é getter.',
    explanation: 'O getter reduz 10% de 100, retornando 90; o método estático fornece 0.1.',
    exercises: [
      { title: 'Getter de saldo', goal: 'Adicione saldoDisponivel calculado para um cartão de recarga.',
        steps: ['Defina saldo e bloqueios.', 'Implemente getter sem mutação.', 'Teste leituras repetidas.', 'Confirme valor derivado.'],
        success: ['Valor consistente', 'Nenhum efeito colateral', 'Três cenários'], minutes: 35 },
      { title: 'Setter de preço', goal: 'Rejeite NaN, Infinity e número negativo.',
        steps: ['Crie campo privado.', 'Implemente validação.', 'Teste três entradas inválidas.', 'Confirme estado anterior preservado.'],
        success: ['Erros previstos', 'Estado consistente', 'Teste de regressão'], minutes: 40 },
      { title: 'Fábrica de produto', goal: 'Implemente método estático que cria produto com taxa padrão.',
        steps: ['Defina parâmetros.', 'Implemente static criar.', 'Construa duas instâncias.', 'Teste entrada inválida.'],
        success: ['Criação sem new externo', 'Objetos independentes', 'Contrato documentado'], minutes: 45 }
    ],
    review: ['Uso get para derivar valores.', 'Valido atribuições via set.', 'Evito setter recursivo.', 'Distingo static de instância.', 'Escolho método para comando de negócio.'],
    references: [{ label: 'MDN · get', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get' }]
  },
  {
    number: 5, slug: 'aula-05-prototipos-heranca-prototipica',
    title: 'Protótipos, compartilhamento de métodos e Object.create', short: 'Protótipos do JavaScript',
    subtitle: 'Compreenda o mecanismo de delegação por trás de class.',
    problem: { title: 'De onde vêm os métodos de um objeto?',
      lead: 'Duas instâncias chamam o mesmo método sem cada uma armazenar uma cópia dele.',
      detail: 'O JavaScript resolve propriedades usando a cadeia de protótipos, base da sintaxe de classes moderna.' },
    concepts: [
      { title: 'A busca percorre a cadeia de protótipos', lead: 'Propriedades não encontradas no objeto são buscadas em seu protótipo.',
        detail: 'O mecanismo para no primeiro nome encontrado, depois continua até null se necessário.' },
      { title: 'Métodos de class ficam no prototype', lead: 'Instâncias compartilham a mesma função definida no prototype.',
        detail: 'Classe JavaScript não elimina o modelo prototípico; ela fornece sintaxe de alto nível para o mesmo mecanismo.' },
      { title: 'Object.create vincula protótipo explicitamente', lead: 'Permite demonstrar delegação sem class.',
        detail: 'Object.create(proto) cria objeto cujo protótipo é proto. Não confunda com cópia das propriedades de proto.' },
      { title: 'Propriedade própria sobrescreve a delegada', lead: 'Uma propriedade local ganha prioridade.',
        detail: 'Object.hasOwn(obj, chave) diferencia propriedade própria de herdada na cadeia.' }
    ],
    elements: [
      { title: 'Objeto', detail: 'Guarda propriedades próprias.' },
      { title: 'Protótipo', detail: 'Oferece propriedades delegadas.' },
      { title: 'Cadeia', detail: 'É percorrida até localizar nome ou chegar a null.' }
    ],
    decisions: [
      { title: 'Compartilhamento', detail: 'Evite gerar nova função por instância sem necessidade.' },
      { title: 'Delegação', detail: 'Use cadeia previsível e curta.' },
      { title: 'Introspecção', detail: 'Prefira Object.hasOwn para verificar posse.' }
    ],
    pitfalls: [
      { title: 'Confundir prototype e [[Prototype]]', detail: 'A propriedade .prototype da função é distinta do protótipo interno da instância.' },
      { title: 'Alterar protótipos nativos', detail: 'Monkey patching global produz conflitos difíceis de depurar.' },
      { title: 'Confiar em for...in sem filtro', detail: 'Ele também percorre chaves herdadas enumeráveis.' }
    ],
    quizzes: [
      { prompt: 'Quando uma propriedade não está no objeto, JavaScript:', choices: ['Sempre lança exceção', 'Procura na cadeia de protótipos', 'Lê do servidor'], answer: 1,
        why: 'A pesquisa sobe pela cadeia até encontrá-la ou chegar a null.' },
      { prompt: 'Métodos escritos na declaração class ficam normalmente:', choices: ['No prototype da classe', 'Copiados para cada instância', 'Em Map global'], answer: 0,
        why: 'Métodos comuns são compartilhados pelo protótipo.' },
      { prompt: 'Qual função verifica propriedade própria?', choices: ['Array.isArray', 'Object.create', 'Object.hasOwn'],
        answer: 2, why: 'Object.hasOwn ignora propriedades apenas herdadas.' }
    ],
    starterCode: 'const comportamento = { dizer() { return "Olá, " + this.nome; } };\nconst pessoa = Object.create(comportamento);\npessoa.nome = "Eva";\nconsole.log(pessoa.dizer());\nconsole.log(Object.hasOwn(pessoa, "dizer"));\nconsole.log(Object.getPrototypeOf(pessoa) === comportamento);',
    expected: 'Olá, Eva\nfalse\ntrue', distractors: ['Olá, Eva\ntrue\ntrue', 'Olá, Eva\nfalse\nfalse'],
    labTask: 'Crie uma propriedade dizer própria no objeto e veja a diferença em Object.hasOwn.',
    explanation: 'dizer é herdado de comportamento, logo não é próprio; o protótipo real é comportamento.',
    exercises: [
      { title: 'Rastrear propriedades', goal: 'Identifique a origem de três propriedades em uma cadeia simples.',
        steps: ['Crie protótipo.', 'Crie instância com Object.create.', 'Atribua duas propriedades próprias.', 'Compare hasOwn.'],
        success: ['Origens corretas', 'Delegação demonstrada', 'Sem confundir cópia'], minutes: 30 },
      { title: 'Comparar métodos', goal: 'Compare métodos de class em duas instâncias.',
        steps: ['Defina classe com método.', 'Crie dois objetos.', 'Compare obj1.metodo === obj2.metodo.', 'Explique compartilhamento.'],
        success: ['Referência compartilhada', 'This correto', 'Mecanismo descrito'], minutes: 40 },
      { title: 'Sombreamento', goal: 'Demonstre propriedade local com mesmo nome da herdada.',
        steps: ['Defina valor no protótipo.', 'Leia valor herdado.', 'Defina próprio valor.', 'Use hasOwn e getPrototypeOf.'],
        success: ['Valor novo prevalece', 'Protótipo preservado', 'Sem alteração global'], minutes: 45 }
    ],
    review: ['Explico delegação por protótipo.', 'Distingo propriedade própria.', 'Uso Object.create.', 'Entendo class como sintaxe sobre protótipos.', 'Evito mutação de protótipos nativos.'],
    references: [{ label: 'MDN · Inheritance and prototype chain', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain' }]
  },
  {
    number: 6, slug: 'aula-06-associacao-agregacao-composicao',
    title: 'Associação, agregação e composição entre objetos', short: 'Objetos colaborando',
    subtitle: 'Modele relações sem criar heranças artificiais.',
    problem: { title: 'Uma turma utiliza vários laboratórios',
      lead: 'Entidades precisam colaborar sem assumir que uma seja subtipo da outra.',
      detail: 'Associação, agregação e composição descrevem relações de uso, compartilhamento e pertencimento no domínio.' },
    concepts: [
      { title: 'Associação expressa colaboração', lead: 'Um instrutor ministra uma turma; ambos continuam conceitos distintos.',
        detail: 'Um objeto pode receber outro como argumento sem possuir ou controlar seu ciclo de vida.' },
      { title: 'Agregação representa coleção compartilhável', lead: 'Um departamento pode referenciar docentes existentes.',
        detail: 'A agregação conceitual envolve relação todo-parte mais fraca; não há um operador especial de agregação em JavaScript.' },
      { title: 'Composição representa pertencimento forte', lead: 'Um pedido cria suas próprias linhas de pedido.',
        detail: 'O agregado controla regras e ciclo de vida das partes; compartilhe referências apenas quando fizer sentido.' },
      { title: 'Composição favorece comportamento reutilizável', lead: 'Colabore por objetos especializados em vez de forçar extends.',
        detail: 'Distinguir é-um de tem-um evita hierarquias frágeis. Comunicação via métodos limita acoplamento.' }
    ],
    elements: [
      { title: 'É um', detail: 'Relação de subtipo; nem toda semelhança exige herança.' },
      { title: 'Tem um', detail: 'Composição ou agregação do domínio.' },
      { title: 'Usa um', detail: 'Associação transitória entre serviços.' }
    ],
    decisions: [
      { title: 'Responsabilidade', detail: 'Pedido calcula total das próprias linhas.' },
      { title: 'Referência', detail: 'Item armazena identificador e preço capturado.' },
      { title: 'Coesão', detail: 'Cada parte executa regras que conhece.' }
    ],
    pitfalls: [
      { title: 'Herança só para reaproveitar código', detail: 'Composição costuma ser mais flexível.' },
      { title: 'Objetos oniscientes', detail: 'Evite um objeto que coordena todas as regras do sistema.' },
      { title: 'Mutação externa do item', detail: 'Defina se preços são capturados ou consultados do catálogo.' }
    ],
    quizzes: [
      { prompt: 'Pedido contendo linhas de pedido é um exemplo de:', choices: ['Composição', 'Herança entre pedido e linha', 'Prototipação de navegador'], answer: 0,
        why: 'Linhas são partes do pedido com ciclo de vida ligado ao agregado.' },
      { prompt: 'Instrutor que ministra turma representa:', choices: ['Uma operação estática', 'Associação entre entidades', 'Necessariamente herança'], answer: 1,
        why: 'Instrutor não é subtipo de turma.' },
      { prompt: 'Para reusar formatação sem relação é-um, prefira:', choices: ['Duplicar sempre', 'extends arbitrário', 'Objeto colaborador/composição'],
        answer: 2, why: 'Composição permite compartilhar uma capacidade sem alterar a hierarquia.' }
    ],
    starterCode: 'class Pedido {\n  constructor() { this.itens = []; }\n  adicionar(descricao, preco, qtd) {\n    if (!(preco >= 0) || !Number.isInteger(qtd) || qtd <= 0) return false;\n    this.itens.push({ descricao, preco, qtd });\n    return true;\n  }\n  total() { return this.itens.reduce((s, item) => s + item.preco * item.qtd, 0); }\n}\nconst pedido = new Pedido();\npedido.adicionar("Caderno", 10, 2);\npedido.adicionar("Caneta", 3, 1);\nconsole.log(pedido.total());\nconsole.log(pedido.itens.length);',
    expected: '23\n2', distractors: ['13\n2', '23\n3'],
    labTask: 'Separe LinhaDePedido em classe específica e proteja a coleção contra alterações externas.',
    explanation: 'O total soma 10×2 com 3×1 = 23; há duas linhas no pedido.',
    exercises: [
      { title: 'Relacionamentos do domínio', goal: 'Desenhe entidades Escola, Laboratório, Reserva, Instrutor.',
        steps: ['Identifique associações.', 'Classifique relação todo-parte.', 'Defina multiplicidades.', 'Explique ciclos de vida.'],
        success: ['Quatro entidades', 'Relações justificadas', 'Sem herança artificial'], minutes: 35 },
      { title: 'Pedido e linhas', goal: 'Implemente modelo com composição e total.',
        steps: ['Crie LinhaDePedido.', 'Valide preço e quantidade.', 'Adicione por método do pedido.', 'Teste cálculo e inserção inválida.'],
        success: ['Total correto', 'Coleção consistente', 'Regras em objetos certos'], minutes: 40 },
      { title: 'Serviço de notificação', goal: 'Injete notificador em objeto de reserva em vez de usar extends.',
        steps: ['Defina contrato enviar(mensagem).', 'Crie implementação de console.', 'Injete pelo constructor.', 'Troque o colaborador em um teste.'],
        success: ['Sem extends indevido', 'Notificador substituível', 'Teste isolado'], minutes: 45 }
    ],
    review: ['Distingo é-um e tem-um.', 'Descrevo associação.', 'Descrevo agregação conceitual.', 'Implemento composição.', 'Não uso extends sem relação de subtipo.'],
    references: [{ label: 'Refactoring.Guru · Composition over inheritance', url: 'https://refactoring.guru/design-patterns/strategy' }]
  }
];
