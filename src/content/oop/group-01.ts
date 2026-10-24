import type { OopSpec } from './lesson-builder';

export const group01: OopSpec[] = [
  {
    number: 1, slug: 'aula-01-objetos-dominio-responsabilidades',
    title: 'Objetos, estado, comportamento e modelagem de domínio', short: 'Pensar em objetos',
    subtitle: 'Modele problemas reais antes de escrever classes.',
    problem: { title: 'Um laboratório precisa controlar seus equipamentos',
      lead: 'Guardar dados soltos dificulta associar ações e regras ao equipamento correto.',
      detail: 'A modelagem identifica entidades, atributos, estados possíveis e operações que preservam as regras do domínio.' },
    concepts: [
      { title: 'Objeto combina estado e comportamento', lead: 'Dados e operações pertencem ao mesmo conceito.',
        detail: 'Um equipamento tem patrimônio e disponibilidade, e sabe reservar ou liberar. Nem toda informação precisa virar objeto.' },
      { title: 'Classe descreve a construção de instâncias', lead: 'O construtor inicializa o estado.',
        detail: 'new cria uma instância e chama constructor. Métodos de classe ficam no prototype por padrão.' },
      { title: 'Identidade não é igualdade de valores', lead: 'Dois objetos com o mesmo conteúdo continuam referências distintas.',
        detail: 'Use identificadores de domínio (ex.: patrimônio) para determinar equivalência de negócio, não === entre objetos diferentes.' },
      { title: 'Métodos tornam invariantes explícitas', lead: 'O objeto deve rejeitar operações incompatíveis com seu estado.',
        detail: 'Reservar um equipamento já reservado não deve silenciosamente duplicar a ocupação.' }
    ],
    elements: [
      { title: 'Entidade', detail: 'Equipamento: patrimônio e disponibilidade.' },
      { title: 'Operação', detail: 'reservar() modifica estado segundo regras.' },
      { title: 'Invariante', detail: 'Uma reserva ativa por equipamento.' }
    ],
    decisions: [
      { title: 'Modelo', detail: 'Nomeie conceitos do negócio, não telas.' },
      { title: 'Identidade', detail: 'Adote patrimônio imutável como chave.' },
      { title: 'Ciclo de vida', detail: 'Defina estados livre e ocupado.' }
    ],
    pitfalls: [
      { title: 'Objeto apenas com atributos', detail: 'Regras espalhadas em funções externas fragilizam o domínio.' },
      { title: 'Tudo vira classe', detail: 'Objetos simples e funções podem bastar para dados sem comportamento.' },
      { title: 'Estado inconsistente', detail: 'Bloqueie transições inválidas com retornos ou exceções claras.' }
    ],
    quizzes: [
      { prompt: 'O que distingue um objeto de domínio bem definido?', choices: ['A cor da interface', 'Estado e comportamento relacionados', 'Obrigatoriamente muitos atributos'], answer: 1,
        why: 'O modelo reúne dados e regras do mesmo conceito.' },
      { prompt: 'Duas instâncias criadas com new e mesmos valores são:', choices: ['A mesma referência', 'Sempre primitivas', 'Objetos distintos'], answer: 2,
        why: 'Cada new cria um objeto diferente.' },
      { prompt: 'Qual regra deve estar no método reservar?', choices: ['Impedir reserva duplicada', 'Alterar qualquer patrimônio', 'Modificar objetos globais'], answer: 0,
        why: 'A regra de disponibilidade pertence ao domínio de equipamento.' }
    ],
    starterCode: 'class Equipamento {\n  constructor(patrimonio) { this.patrimonio = patrimonio; this.livre = true; }\n  reservar() {\n    if (!this.livre) return false;\n    this.livre = false;\n    return true;\n  }\n}\nconst pc = new Equipamento("PC-01");\nconsole.log(pc.reservar());\nconsole.log(pc.reservar());\nconsole.log(pc.patrimonio);',
    expected: 'true\nfalse\nPC-01', distractors: ['true\ntrue\nPC-01', 'false\ntrue\nPC-01'],
    labTask: 'Adicione liberar(), impeça liberação repetida e teste a sequência reservar → liberar → reservar.',
    explanation: 'A primeira reserva torna livre=false; a segunda retorna false. O patrimônio permanece PC-01.',
    exercises: [
      { title: 'Vocabulário do domínio', goal: 'Modele equipamento, reserva e turma sem escrever código.',
        steps: ['Liste três entidades.', 'Defina estado e identificador de cada uma.', 'Descreva uma regra por entidade.', 'Justifique o que não precisa ser classe.'],
        success: ['Três entidades descritas', 'Invariantes reconhecidas', 'Foco no domínio'], minutes: 30 },
      { title: 'Classe Equipamento', goal: 'Implemente e teste as operações reservar e liberar.',
        steps: ['Crie constructor.', 'Implemente reservar com verificação.', 'Implemente liberar com verificação.', 'Teste duas reservas consecutivas.'],
        success: ['Sem reserva duplicada', 'Liberação testada', 'Estado consistente'], minutes: 40 },
      { title: 'Coleção de instâncias', goal: 'Crie três equipamentos e consulte disponibilidade por patrimônio.',
        steps: ['Instancie três patrimônios.', 'Armazene em Map.', 'Reserve apenas um.', 'Teste busca existente e inexistente.'],
        success: ['Três objetos independentes', 'Consulta funcional', 'Erro tratado'], minutes: 45 }
    ],
    review: ['Distingo entidade, objeto e classe.', 'Identifico estado e comportamento.', 'Crio instâncias com new.', 'Não confundo identidade com igualdade.', 'Valido uma regra de negócio.'],
    references: [{ label: 'MDN · Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' }]
  },
  {
    number: 2, slug: 'aula-02-classes-construtores-metodos',
    title: 'Classes, construtores, métodos e this', short: 'Classes e métodos',
    subtitle: 'Construa instâncias com contratos previsíveis.',
    problem: { title: 'Conta de créditos de impressão',
      lead: 'Alunos recebem créditos e só podem imprimir páginas pagas pelo saldo.',
      detail: 'As operações precisam manter a consistência entre saldo disponível, consumo e entrada de créditos.' },
    concepts: [
      { title: 'constructor estabelece estado inicial válido', lead: 'Comece com dados coerentes.',
        detail: 'Valide valores de entrada e rejeite saldos iniciais negativos antes de criar instâncias inválidas.' },
      { title: 'this referencia a instância no método', lead: 'this.saldo pertence à conta que recebeu a chamada.',
        detail: 'O valor de this depende da forma de chamada; extrair método sem bind pode perder o contexto.' },
      { title: 'Métodos definem contratos de entrada e saída', lead: 'depositar e consumir têm efeitos distintos.',
        detail: 'Diga quando a função retorna boolean, número ou lança erro. Evite alterar saldo em métodos de leitura.' },
      { title: 'Método estático pertence à classe', lead: 'Ferramentas que não dependem da instância podem ser static.',
        detail: 'static validarQuantidade(qtd) pode ser invocado na classe; métodos estáticos não recebem this de uma conta comum.' }
    ],
    elements: [
      { title: 'constructor', detail: 'Recebe titular e saldo inicial.' },
      { title: 'Método', detail: 'consumir(paginas) altera saldo.' },
      { title: 'this', detail: 'Aponta para a instância durante chamada correta.' }
    ],
    decisions: [
      { title: 'Pré-condição', detail: 'Quantidade deve ser inteiro positivo.' },
      { title: 'Pós-condição', detail: 'Saldo final nunca fica negativo.' },
      { title: 'Tratamento', detail: 'Consumo negado retorna false.' }
    ],
    pitfalls: [
      { title: 'Aceitar NaN', detail: 'Number.isFinite ou Number.isInteger evita valores inadequados.' },
      { title: 'Perder this', detail: 'Use conta.consumir(...) ou bind quando necessário.' },
      { title: 'Misturar consulta e comando', detail: 'consultarSaldo não deveria consumir créditos.' }
    ],
    quizzes: [
      { prompt: 'Quando constructor é executado?', choices: ['No new da classe', 'Em todo console.log', 'A cada leitura do saldo'], answer: 0,
        why: 'A criação da instância chama constructor.' },
      { prompt: 'this.saldo dentro de conta.consumir(2) aponta para:', choices: ['Variável global', 'Saldo da instância conta', 'Saldo de todas as contas'], answer: 1,
        why: 'A chamada como método fornece a instância como this.' },
      { prompt: 'Qual pré-condição evita saldo inconsistente?', choices: ['Aceitar saldo negativo', 'Permitir consumir NaN', 'Exigir páginas inteiras positivas'], answer: 2,
        why: 'Quantidade positiva inteira evita consumo sem sentido.' }
    ],
    starterCode: 'class Conta {\n  constructor(nome, saldo) { this.nome = nome; this.saldo = saldo; }\n  consumir(qtd) {\n    if (!Number.isInteger(qtd) || qtd <= 0 || qtd > this.saldo) return false;\n    this.saldo -= qtd;\n    return true;\n  }\n}\nconst conta = new Conta("Lia", 10);\nconsole.log(conta.consumir(3));\nconsole.log(conta.saldo);\nconsole.log(conta.consumir(8));',
    expected: 'true\n7\nfalse', distractors: ['true\n10\ntrue', 'false\n7\ntrue'],
    labTask: 'Valide saldo do constructor; crie depositar(qtd) com a mesma disciplina de validação.',
    explanation: 'Consumir três de dez deixa sete créditos; oito ultrapassa o saldo e retorna false.',
    exercises: [
      { title: 'Contrato de Conta', goal: 'Especifique entradas e saídas de depositar e consumir.',
        steps: ['Declare pré-condições.', 'Defina retornos esperados.', 'Registre invariantes.', 'Escreva exemplos válidos e inválidos.'],
        success: ['Entradas claras', 'Saldo não negativo', 'Falhas documentadas'], minutes: 35 },
      { title: 'Teste de this', goal: 'Experimente métodos em duas instâncias independentes.',
        steps: ['Crie contas distintas.', 'Execute consumo apenas em uma.', 'Compare saldos.', 'Teste extração de método com bind.'],
        success: ['Estado isolado', 'Contexto explicado', 'Sem vazamento global'], minutes: 40 },
      { title: 'Extrato de impressão', goal: 'Adicione histórico de operações sem expor escrita externa.',
        steps: ['Armazene registros em array.', 'Registre apenas operações aceitas.', 'Implemente leitura de histórico.', 'Teste operação rejeitada.'],
        success: ['Saldo correto', 'Histórico consistente', 'Sem evento inválido'], minutes: 45 }
    ],
    review: ['Crio constructor com dados válidos.', 'Sei usar this.', 'Defino retornos de métodos.', 'Distingo instância e static.', 'Testo parâmetros inválidos.'],
    references: [{ label: 'MDN · this', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' }]
  },
  {
    number: 3, slug: 'aula-03-encapsulamento-campos-privados',
    title: 'Encapsulamento, campos privados e invariantes', short: 'Encapsulamento real',
    subtitle: 'Proteja o estado; publique apenas operações seguras.',
    problem: { title: 'Qualquer código pode alterar uma nota?',
      lead: 'Se a média escolar for manipulada diretamente, valores inválidos podem entrar no sistema.',
      detail: 'Encapsulamento evita acesso direto a detalhes sensíveis de implementação, mas não substitui autorização ou segurança de servidor.' },
    concepts: [
      { title: 'Campos privados usam # na linguagem', lead: '#notas não pode ser acessado diretamente fora da classe.',
        detail: 'A privacidade é aplicada em tempo de execução pelo JavaScript, diferentemente de convenções apenas pelo nome.' },
      { title: 'Métodos públicos validam transições', lead: 'O contrato de adicionarNota deve limitar valores entre 0 e 10.',
        detail: 'A classe decide quais operações são aceitas, mantendo o próprio estado coerente.' },
      { title: 'Cópias protegem coleções privadas', lead: 'Retornar o array interno permitiria alterar o estado sem validação.',
        detail: 'Devolva cópia ou valores imutáveis; cópias rasas não protegem objetos internos mutáveis.' },
      { title: 'Encapsulamento não é segurança de backend', lead: 'Não guarde segredo no navegador só porque o campo é privado.',
        detail: 'Autenticação, autorização e validação de dados críticos devem existir também no servidor.' }
    ],
    elements: [
      { title: '#campo', detail: 'Acesso permitido apenas dentro da classe declaradora.' },
      { title: 'Método público', detail: 'Valida dados e altera estado.' },
      { title: 'Snapshot', detail: 'Devolve cópia para leitura segura.' }
    ],
    decisions: [
      { title: 'Contrato', detail: 'Nota numérica finita entre 0 e 10.' },
      { title: 'Privacidade', detail: 'Array de notas interno e inacessível diretamente.' },
      { title: 'Leitura', detail: 'Média calculada sem expor coleção mutável.' }
    ],
    pitfalls: [
      { title: 'Confundir # com _', detail: 'Underline é convenção; não protege acesso.' },
      { title: 'Expor referência privada', detail: 'Mesmo campo # pode vazar por retorno de objeto mutável.' },
      { title: 'Achar que esconde credenciais', detail: 'Código cliente pode ser inspecionado e regras devem ser validadas no servidor.' }
    ],
    quizzes: [
      { prompt: 'Qual sintaxe representa campo privado JavaScript?', choices: ['private notas', '#notas', '_notas apenas'], answer: 1,
        why: '# é sintaxe nativa para campos privados da classe.' },
      { prompt: 'Por que retornar cópia da lista de notas?', choices: ['Para ordenar sempre', 'Para gastar memória', 'Para evitar mutação externa da coleção'],
        answer: 2, why: 'Uma referência exposta quebraria as regras de adição.' },
      { prompt: 'Um #token no código do navegador é seguro para guardar segredo do servidor?', choices: ['Não', 'Sim, impossível inspecionar', 'Somente em modo anônimo'], answer: 0,
        why: 'Privacidade de campo não é sigilo de credencial entregue ao cliente.' }
    ],
    starterCode: 'class Boletim {\n  #notas = [];\n  adicionar(nota) {\n    if (!Number.isFinite(nota) || nota < 0 || nota > 10) return false;\n    this.#notas.push(nota);\n    return true;\n  }\n  media() {\n    return this.#notas.reduce((a, b) => a + b, 0) / (this.#notas.length || 1);\n  }\n  listar() { return [...this.#notas]; }\n}\nconst b = new Boletim();\nb.adicionar(8); b.adicionar(12); b.adicionar(6);\nconsole.log(b.listar().join(","));\nconsole.log(b.media());',
    expected: '8,6\n7', distractors: ['8,12,6\n8.666666666666666', '8,6\n14'],
    labTask: 'Altere o array retornado por listar(), execute media() novamente e verifique se o estado ficou protegido.',
    explanation: 'A nota 12 é rejeitada; o boletim conserva 8 e 6, cuja média é 7.',
    exercises: [
      { title: 'Invariantes da nota', goal: 'Documente limites e casos especiais.',
        steps: ['Defina domínio permitido.', 'Liste NaN, Infinity e string.', 'Escolha retorno de erro.', 'Crie testes para os extremos 0 e 10.'],
        success: ['Limites explícitos', 'Casos inválidos previstos', 'Contrato verificável'], minutes: 30 },
      { title: 'Proteção de estado', goal: 'Teste se uma cópia pode alterar dados internos.',
        steps: ['Obtenha listar().', 'Acrescente 20 na cópia.', 'Leia listar() novamente.', 'Confirme média original.'],
        success: ['Cópia independente', 'Média preservada', 'Nenhuma escrita externa'], minutes: 40 },
      { title: 'Classe Matricula', goal: 'Crie status privado com transições matrícula → concluída.',
        steps: ['Defina estados aceitos.', 'Implemente transição única.', 'Impeça conclusão duplicada.', 'Teste consulta somente leitura.'],
        success: ['Estado protegido', 'Transições válidas', 'Falhas cobertas por teste'], minutes: 45 }
    ],
    review: ['Uso campos # com segurança.', 'Valido entradas.', 'Retorno cópias de coleções.', 'Preservo invariantes.', 'Distingo privacidade de autorização.'],
    references: [{ label: 'MDN · Private elements', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements' }]
  }
];
