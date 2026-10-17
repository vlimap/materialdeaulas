import type { JsLessonSpec } from './lesson-builder';
export const group05: JsLessonSpec[] = [
  {
    "number": 21,
    "slug": "aula-21-this-prototypes-classes",
    "title": "this, prototypes, classes e herança",
    "short": "Objetos e classes",
    "subtitle": "Compreenda o modelo de objetos da linguagem.",
    "problem": "Como compartilhar comportamento entre objetos?",
    "context": "JavaScript utiliza herança por protótipos. class é uma sintaxe sobre esse modelo, não o substitui.",
    "concepts": [
      {
        "title": "this depende da forma de chamada",
        "lead": "Métodos regulares podem usar this como receptor.",
        "detail": "Arrow functions capturam o this externo; bind cria função com this predefinido."
      },
      {
        "title": "Protótipos permitem delegação",
        "lead": "Objetos podem herdar métodos via cadeia de protótipos.",
        "detail": "Propriedades próprias prevalecem sobre propriedades herdadas com mesmo nome."
      },
      {
        "title": "class oferece sintaxe organizada",
        "lead": "constructor inicializa instâncias; extends expressa herança.",
        "detail": "Campos privados com # têm verificação de acesso no runtime."
      }
    ],
    "terms": [
      {
        "title": "this",
        "detail": "Receptor da chamada, em função regular."
      },
      {
        "title": "prototype",
        "detail": "Objeto de delegação de comportamento."
      },
      {
        "title": "class",
        "detail": "Sintaxe para construtores e protótipos."
      }
    ],
    "contrasts": [
      {
        "title": "Método regular",
        "detail": "this depende de chamada."
      },
      {
        "title": "Arrow",
        "detail": "this léxico."
      },
      {
        "title": "Herança",
        "detail": "Delegação via protótipos."
      }
    ],
    "starterCode": "class Pessoa {\n  constructor(nome) { this.nome = nome; }\n  saudacao() { return `Olá, ${this.nome}`; }\n}\nconsole.log(new Pessoa('Ana').saudacao());",
    "task": "Altere o nome na instância.",
    "output": "Olá, Ana",
    "incorrectOutputs": [
      "Olá, undefined",
      "Pessoa"
    ],
    "explanation": "new cria a instância, constructor define nome, e saudacao lê this.nome.",
    "questions": [
      {
        "prompt": "Classes usam qual modelo de herança?",
        "choices": [
          "Protótipos",
          "SQL",
          "CSS"
        ],
        "answer": 0,
        "why": "class é sintaxe sobre protótipos."
      },
      {
        "prompt": "Uma arrow possui this próprio?",
        "choices": [
          "Sim",
          "Não",
          "Somente em strict"
        ],
        "answer": 1,
        "why": "Arrow captura lexicalmente."
      },
      {
        "prompt": "Campo #privado é acessível fora da classe?",
        "choices": [
          "Sim sempre",
          "Não, normalmente gera erro",
          "Somente via JSON"
        ],
        "answer": 1,
        "why": "Private fields têm controle de acesso do runtime."
      }
    ],
    "practices": [
      {
        "title": "Classe Pessoa",
        "goal": "Adicione idade e método descrever.",
        "action": "Use constructor e this.",
        "verify": "Teste duas instâncias."
      },
      {
        "title": "Herança",
        "goal": "Crie classe Estudante extends Pessoa.",
        "action": "Chame super e adicione matrícula.",
        "verify": "Confira herança de saudacao."
      },
      {
        "title": "Comparar contexto",
        "goal": "Use método tradicional e arrow callback.",
        "action": "Teste bind/call e this.",
        "verify": "Explique o receptor em cada caso."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 22,
    "slug": "aula-22-closures-funcoes-superiores",
    "title": "Closures, funções de ordem superior e composição",
    "short": "Closures e composição",
    "subtitle": "Construa funções que preservam estado privado.",
    "problem": "Como criar comportamentos configuráveis?",
    "context": "Uma closure conserva acesso ao ambiente léxico de sua criação; funções podem ser passadas ou retornadas como valores.",
    "concepts": [
      {
        "title": "Closure mantém variáveis do entorno",
        "lead": "Uma função interna continua acessando valores da função externa.",
        "detail": "A variável retida existe enquanto for alcançável; não equivale automaticamente a vazamento."
      },
      {
        "title": "Funções de ordem superior recebem funções",
        "lead": "map, filter e callbacks são exemplos de composição de comportamento.",
        "detail": "A função deve ser passada, não executada prematuramente quando se espera callback."
      },
      {
        "title": "Funções puras facilitam testes",
        "lead": "Uma função pura produz mesmo resultado para mesmas entradas sem efeitos observáveis.",
        "detail": "Prefira transformações imutáveis quando possível; efeitos pertencem às fronteiras."
      }
    ],
    "terms": [
      {
        "title": "Closure",
        "detail": "Função + ambiente léxico."
      },
      {
        "title": "Callback",
        "detail": "Função fornecida a outra."
      },
      {
        "title": "Pureza",
        "detail": "Sem efeitos colaterais observáveis."
      }
    ],
    "contrasts": [
      {
        "title": "Estado global",
        "detail": "Compartilhado e difícil de isolar."
      },
      {
        "title": "Closure",
        "detail": "Estado encapsulado em função."
      },
      {
        "title": "Pura",
        "detail": "Transforma argumentos sem efeitos."
      }
    ],
    "starterCode": "function multiplicador(fator) {\n  return n => n * fator;\n}\nconst triplo = multiplicador(3);\nconsole.log(triplo(4));",
    "task": "Altere o fator 3 para 5.",
    "output": "12",
    "incorrectOutputs": [
      "7",
      "3"
    ],
    "explanation": "A arrow devolvida mantém acesso a fator=3 mesmo depois de multiplicador terminar.",
    "questions": [
      {
        "prompt": "Closure preserva acesso a:",
        "choices": [
          "Variáveis léxicas do entorno",
          "Banco de dados automaticamente",
          "Outro programa"
        ],
        "answer": 0,
        "why": "É a associação entre função e ambiente."
      },
      {
        "prompt": "Higher-order function recebe ou devolve:",
        "choices": [
          "Apenas string",
          "Outra função",
          "Somente números"
        ],
        "answer": 1,
        "why": "Funções são valores em JavaScript."
      },
      {
        "prompt": "Função pura é caracterizada por:",
        "choices": [
          "Resultado estável e sem efeitos observáveis",
          "Acesso global",
          "Modificar DOM sempre"
        ],
        "answer": 0,
        "why": "Pureza favorece previsibilidade."
      }
    ],
    "practices": [
      {
        "title": "Gerador de taxas",
        "goal": "Crie função que fixa taxa.",
        "action": "Retorne outra função aplicando-a.",
        "verify": "Teste duas taxas com o mesmo preço."
      },
      {
        "title": "Contador privado",
        "goal": "Use closure com let contador.",
        "action": "Retorne função de incremento.",
        "verify": "Confirme que o estado não é global."
      },
      {
        "title": "Pipeline de dados",
        "goal": "Componha funções de filtro e transformação.",
        "action": "Evite modificar o array original.",
        "verify": "Escreva testes simples para cada parte."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 23,
    "slug": "aula-23-iteradores-generators-async-iterables",
    "title": "Iteradores, generators e iteração assíncrona",
    "short": "Iteradores e generators",
    "subtitle": "Produza sequências sob demanda.",
    "problem": "Como gerar dados sem construir toda a lista?",
    "context": "O protocolo de iteração usa Symbol.iterator e objetos {value, done}; generators suspendem a execução com yield.",
    "concepts": [
      {
        "title": "Iteráveis fornecem iterador",
        "lead": "for...of chama Symbol.iterator para obter itens.",
        "detail": "Arrays, strings, Map e Set já são iteráveis."
      },
      {
        "title": "Generators mantêm progresso",
        "lead": "function* pode produzir vários valores com yield.",
        "detail": "next retorna {value,done}; o fluxo retoma no ponto de suspensão."
      },
      {
        "title": "for await...of trata dados assíncronos",
        "lead": "Async iterables fornecem valores de forma assíncrona.",
        "detail": "Útil para fluxos e paginação; finalize recursos ao interromper a iteração."
      }
    ],
    "terms": [
      {
        "title": "Symbol.iterator",
        "detail": "Método do protocolo iterável."
      },
      {
        "title": "yield",
        "detail": "Pausa e emite um valor."
      },
      {
        "title": "for await",
        "detail": "Iteração sobre fonte assíncrona."
      }
    ],
    "contrasts": [
      {
        "title": "Array",
        "detail": "Dados materializados."
      },
      {
        "title": "Generator",
        "detail": "Produz sob demanda."
      },
      {
        "title": "Async generator",
        "detail": "Pode aguardar operações."
      }
    ],
    "starterCode": "function* numeros() {\n  yield 2;\n  yield 4;\n}\nconsole.log([...numeros()]);",
    "task": "Acrescente yield 6 antes do fechamento.",
    "output": "[2,4]",
    "incorrectOutputs": [
      "[2]",
      "undefined"
    ],
    "explanation": "Spread consome o iterável gerado, produzindo o array [2,4].",
    "questions": [
      {
        "prompt": "Qual palavra emite item de generator?",
        "choices": [
          "yield",
          "return apenas",
          "await obrigatório"
        ],
        "answer": 0,
        "why": "yield suspende e entrega valor."
      },
      {
        "prompt": "Generator é executado inteiro na chamada inicial?",
        "choices": [
          "Sim",
          "Não, avança sob demanda",
          "Sempre lança erro"
        ],
        "answer": 1,
        "why": "A execução é retomada por iteração."
      },
      {
        "prompt": "Qual laço usa iteráveis assíncronos?",
        "choices": [
          "for await...of",
          "for...in",
          "switch"
        ],
        "answer": 0,
        "why": "for await consome resultados assíncronos."
      }
    ],
    "practices": [
      {
        "title": "Sequência sob demanda",
        "goal": "Gere números pares.",
        "action": "Implemente function* e yield.",
        "verify": "Consuma somente três itens."
      },
      {
        "title": "Iterador customizado",
        "goal": "Crie objeto com Symbol.iterator.",
        "action": "Implemente next retornando value/done.",
        "verify": "Percorra com for...of."
      },
      {
        "title": "Paginação assíncrona",
        "goal": "Simule páginas obtidas via Promise.",
        "action": "Use async function* e for await.",
        "verify": "Confirme ordem e encerramento."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 24,
    "slug": "aula-24-regex-validacao-texto",
    "title": "Expressões regulares, textos e validação",
    "short": "Regex em JavaScript",
    "subtitle": "Pesquise padrões sem confundir formato e regra de negócio.",
    "problem": "Como localizar padrões num texto?",
    "context": "RegExp expressa padrões para pesquisa e substituição. Flags como g, i e u modificam correspondências.",
    "concepts": [
      {
        "title": "Padrões usam classes e quantificadores",
        "lead": "\\d encontra dígitos; + indica uma ou mais ocorrências.",
        "detail": "Use âncoras ^ e $ para validar a string inteira, quando adequado."
      },
      {
        "title": "test e match têm retornos distintos",
        "lead": "test retorna booleano; match devolve correspondências ou null.",
        "detail": "Strings também oferecem replace e replaceAll, com regras próprias."
      },
      {
        "title": "Regex não resolve toda validação",
        "lead": "Para endereços de e-mail e formatos complexos, prefira validação apropriada ao domínio.",
        "detail": "Evite padrões exponenciais em entradas não confiáveis (ReDoS)."
      }
    ],
    "terms": [
      {
        "title": "RegExp",
        "detail": "Objeto de expressão regular."
      },
      {
        "title": "test",
        "detail": "Retorna true/false."
      },
      {
        "title": "Flags",
        "detail": "g, i, u e outras opções."
      }
    ],
    "contrasts": [
      {
        "title": "^ e $",
        "detail": "Âncoras de início/fim."
      },
      {
        "title": "\\d",
        "detail": "Um dígito decimal ASCII típico."
      },
      {
        "title": "+",
        "detail": "Repetição uma ou mais vezes."
      }
    ],
    "starterCode": "const codigo = 'AB-123';\nconst padrao = /^[A-Z]{2}-\\d{3}$/;\nconsole.log(padrao.test(codigo));",
    "task": "Mude o código para AB-12 e execute.",
    "output": "true",
    "incorrectOutputs": [
      "false",
      "AB-123"
    ],
    "explanation": "O padrão exige duas letras maiúsculas, hífen e três dígitos.",
    "questions": [
      {
        "prompt": "Qual método retorna booleano?",
        "choices": [
          "regex.test",
          "regex.match",
          "regex.parse"
        ],
        "answer": 0,
        "why": "test indica se houve correspondência."
      },
      {
        "prompt": "O que significa {3}?",
        "choices": [
          "Qualquer número",
          "Exatamente três repetições",
          "Até três palavras"
        ],
        "answer": 1,
        "why": "Quantificador {3} fixa contagem."
      },
      {
        "prompt": "Uma regex valida todas as regras de domínio?",
        "choices": [
          "Sempre",
          "Não",
          "Somente para CPF"
        ],
        "answer": 1,
        "why": "Formato e regras de negócio são coisas diferentes."
      }
    ],
    "practices": [
      {
        "title": "Código de produto",
        "goal": "Valide formato XX-999.",
        "action": "Escreva regex com âncoras e quantificadores.",
        "verify": "Teste válido e inválido."
      },
      {
        "title": "Busca insensível",
        "goal": "Procure uma palavra com flag i.",
        "action": "Use match/test e compare resultados.",
        "verify": "Verifique maiúsculas e minúsculas."
      },
      {
        "title": "Extrator simples",
        "goal": "Extraia números de texto.",
        "action": "Use match com flag g.",
        "verify": "Trate ausência retornando lista vazia."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 25,
    "slug": "aula-25-nodejs-runtime-files-streams",
    "title": "Node.js, APIs de arquivos, streams e ambiente",
    "short": "Node.js em prática",
    "subtitle": "Execute JavaScript no sistema operacional.",
    "problem": "Como JavaScript acessa arquivos e processos?",
    "context": "Node.js disponibiliza process, fs, path, streams e APIs de servidor. Essas interfaces não estão disponíveis num iframe de navegador.",
    "concepts": [
      {
        "title": "Node.js é um runtime",
        "lead": "V8 executa JavaScript com APIs específicas de servidor.",
        "detail": "Use node --version e scripts npm para conferir o ambiente."
      },
      {
        "title": "fs/promises trabalha com arquivos",
        "lead": "readFile e writeFile retornam Promises.",
        "detail": "Resolva caminhos com path ou URL de módulo e trate erros como ENOENT."
      },
      {
        "title": "Streams processam dados em partes",
        "lead": "Streams evitam carregar arquivos enormes inteiramente na memória.",
        "detail": "pipeline gerencia backpressure e propaga erros melhor que pipes manuais."
      }
    ],
    "terms": [
      {
        "title": "process",
        "detail": "Informações e variáveis de ambiente."
      },
      {
        "title": "fs/promises",
        "detail": "Arquivo com APIs assíncronas."
      },
      {
        "title": "stream",
        "detail": "Processamento incremental."
      }
    ],
    "contrasts": [
      {
        "title": "Browser",
        "detail": "Possui DOM e políticas da Web."
      },
      {
        "title": "Node.js",
        "detail": "Possui filesystem e process."
      },
      {
        "title": "Sandbox da aula",
        "detail": "Não acessa fs nem process."
      }
    ],
    "starterCode": "const linhas = ['arquivo 1', 'arquivo 2'];\nfor (const linha of linhas) console.log(linha);",
    "task": "Adicione 'arquivo 3' e execute a simulação de leitura.",
    "output": "arquivo 1\narquivo 2",
    "incorrectOutputs": [
      "undefined",
      "arquivo 2\narquivo 1"
    ],
    "explanation": "Este laboratório simula registros; leitura real de arquivos Node exige o terminal e node:fs/promises.",
    "questions": [
      {
        "prompt": "fs/promises é uma API de:",
        "choices": [
          "Navegador puro",
          "Node.js",
          "CSS"
        ],
        "answer": 1,
        "why": "O filesystem é fornecido pelo runtime Node."
      },
      {
        "prompt": "Por que streams são úteis?",
        "choices": [
          "Carregar tudo na RAM",
          "Processar dados incrementalmente",
          "Evitar tratamento de erro"
        ],
        "answer": 1,
        "why": "Streams trabalham com partes e backpressure."
      },
      {
        "prompt": "Qual comando mostra versão do Node?",
        "choices": [
          "node --version",
          "npm install sempre",
          "git status"
        ],
        "answer": 0,
        "why": "node --version consulta a versão do runtime."
      }
    ],
    "practices": [
      {
        "title": "Arquivo de texto",
        "goal": "Leia e grave notas em Node.js.",
        "action": "Use import {readFile,writeFile} from 'node:fs/promises'.",
        "verify": "Execute localmente e trate caminho ausente."
      },
      {
        "title": "Variáveis de ambiente",
        "goal": "Leia process.env com fallback.",
        "action": "Evite registrar segredos no console.",
        "verify": "Confira ausência de variável."
      },
      {
        "title": "Arquivo grande",
        "goal": "Copie arquivo com streams.",
        "action": "Use pipeline de node:stream/promises.",
        "verify": "Compare memória com readFile para entrada grande."
      }
    ],
    "runtime": "node",
    "docs": "https://nodejs.org/api/fs.html"
  }
];
