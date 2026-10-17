import type { JsLessonSpec } from './lesson-builder';
export const group02: JsLessonSpec[] = [
  {
    "number": 6,
    "slug": "aula-06-lacos-iteracao",
    "title": "Laços, iteráveis e controle de fluxo",
    "short": "Laços e iteração",
    "subtitle": "Percorra coleções com condições de término.",
    "problem": "Como repetir instruções sem duplicação?",
    "context": "for, while, do...while, for...of e for...in têm propósitos diferentes. Escolher o laço adequado evita acessos errados e repetições infinitas.",
    "concepts": [
      {
        "title": "for e while controlam repetição",
        "lead": "for combina inicialização, teste e avanço.",
        "detail": "while é adequado quando a quantidade de iterações depende de uma condição dinâmica."
      },
      {
        "title": "for...of percorre valores iteráveis",
        "lead": "Arrays, strings, Sets e Maps oferecem iteração.",
        "detail": "for...in percorre nomes de propriedades enumeráveis, não é a escolha padrão para valores de arrays."
      },
      {
        "title": "break e continue alteram o fluxo",
        "lead": "break encerra o laço; continue pula para a próxima iteração.",
        "detail": "Sempre verifique se a variável que controla o laço progride até a parada."
      }
    ],
    "terms": [
      {
        "title": "for",
        "detail": "Quando a progressão é conhecida."
      },
      {
        "title": "for...of",
        "detail": "Valores de um objeto iterável."
      },
      {
        "title": "while",
        "detail": "Repetição com condição de continuidade."
      }
    ],
    "contrasts": [
      {
        "title": "for...in",
        "detail": "Chaves, inclusive herdadas enumeráveis."
      },
      {
        "title": "for...of",
        "detail": "Valores percorridos por um iterador."
      },
      {
        "title": "break",
        "detail": "Termina apenas o laço/switch correspondente."
      }
    ],
    "starterCode": "const valores = [2, 3, 4];\nlet soma = 0;\nfor (const valor of valores) soma += valor;\nconsole.log(soma);",
    "task": "Altere os valores do array e observe a soma.",
    "output": "9",
    "incorrectOutputs": [
      "3",
      "234"
    ],
    "explanation": "for...of fornece 2, 3 e 4; o acumulador soma 9.",
    "questions": [
      {
        "prompt": "Qual laço percorre valores de um array?",
        "choices": [
          "for...in",
          "for...of",
          "switch"
        ],
        "answer": 1,
        "why": "for...of usa o iterador e fornece cada valor."
      },
      {
        "prompt": "O que continue faz?",
        "choices": [
          "Encerra todo programa",
          "Pula para a próxima iteração",
          "Declara função"
        ],
        "answer": 1,
        "why": "continue salta a parte restante da volta."
      },
      {
        "prompt": "O que pode causar laço infinito?",
        "choices": [
          "Atualizar contador",
          "Falta de progresso rumo à parada",
          "Usar array"
        ],
        "answer": 1,
        "why": "Se a condição nunca se torna falsa, o laço não termina."
      }
    ],
    "practices": [
      {
        "title": "Somatório",
        "goal": "Some os valores de [5, 1, 2].",
        "action": "Use for...of com um acumulador iniciado em zero.",
        "verify": "Confirme 8 e altere um elemento."
      },
      {
        "title": "Filtre múltiplos",
        "goal": "Exiba somente pares até 10.",
        "action": "Use for com o operador % e continue.",
        "verify": "Verifique que o resultado contém 2,4,6,8,10."
      },
      {
        "title": "Controle parada",
        "goal": "Leia uma sequência com valor de saída.",
        "action": "Use while com uma condição de parada explícita.",
        "verify": "Teste um caso curto e um longo."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 7,
    "slug": "aula-07-funcoes-parametros-escopo",
    "title": "Funções, parâmetros, argumentos e escopo",
    "short": "Funções e escopo",
    "subtitle": "Crie operações reutilizáveis e previsíveis.",
    "problem": "Como organizar uma operação usada várias vezes?",
    "context": "Declaração, expressão e arrow function podem representar operações. Parâmetros, retorno e escopo definem sua interface e comportamento.",
    "concepts": [
      {
        "title": "Funções encapsulam comportamento",
        "lead": "Uma função recebe argumentos e pode retornar um resultado.",
        "detail": "Prefira uma responsabilidade clara por função e nomes que expressem a ação."
      },
      {
        "title": "Parâmetros podem ter valores padrão",
        "lead": "Valores padrão são aplicados quando o argumento é undefined.",
        "detail": "Rest parameters (...args) coletam argumentos em um array; argumentos extras sem rest são ignorados por parâmetros nomeados."
      },
      {
        "title": "Arrow functions têm this léxico",
        "lead": "Uma arrow function não cria o próprio this.",
        "detail": "Isso difere de funções tradicionais e importa em métodos, callbacks e construtores."
      }
    ],
    "terms": [
      {
        "title": "return",
        "detail": "Entrega um valor ao chamador."
      },
      {
        "title": "Parâmetro",
        "detail": "Nome declarado na assinatura."
      },
      {
        "title": "Argumento",
        "detail": "Valor passado à chamada."
      }
    ],
    "contrasts": [
      {
        "title": "Declaração",
        "detail": "Função pode ser chamada antes da declaração."
      },
      {
        "title": "Expressão",
        "detail": "Variável com função segue regras da declaração."
      },
      {
        "title": "Arrow",
        "detail": "Captura this do contexto externo."
      }
    ],
    "starterCode": "function dobro(valor) {\n  return valor * 2;\n}\nconsole.log(dobro(6));",
    "task": "Altere o argumento 6 e observe o retorno.",
    "output": "12",
    "incorrectOutputs": [
      "6",
      "undefined"
    ],
    "explanation": "A função recebe 6 no parâmetro valor e retorna 6 × 2 = 12.",
    "questions": [
      {
        "prompt": "Qual palavra entrega um resultado?",
        "choices": [
          "console.log",
          "return",
          "let"
        ],
        "answer": 1,
        "why": "return encerra a função e entrega um valor."
      },
      {
        "prompt": "Arrow function tem this próprio?",
        "choices": [
          "Sim, sempre",
          "Não, captura o this léxico",
          "Somente em arrays"
        ],
        "answer": 1,
        "why": "Arrows não possuem o próprio binding this."
      },
      {
        "prompt": "Qual valor ativa o parâmetro padrão?",
        "choices": [
          "null",
          "0",
          "undefined"
        ],
        "answer": 2,
        "why": "Parâmetros default são usados quando o argumento é undefined."
      }
    ],
    "practices": [
      {
        "title": "Função de desconto",
        "goal": "Calcule preço descontado.",
        "action": "Escreva uma função com preço e taxa.",
        "verify": "Teste 100 e 0.1: resultado 90."
      },
      {
        "title": "Parâmetro padrão",
        "goal": "Crie saudação com idioma padrão.",
        "action": "Use um argumento opcional com valor default.",
        "verify": "Teste ausência de argumento e língua explícita."
      },
      {
        "title": "Compare sintaxes",
        "goal": "Reescreva dobra como declaração, expressão e arrow.",
        "action": "Faça três chamadas com o mesmo valor.",
        "verify": "Confira saídas iguais e explique this."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 8,
    "slug": "aula-08-arrays-e-mutabilidade",
    "title": "Arrays, índices, métodos e mutabilidade",
    "short": "Arrays e índices",
    "subtitle": "Organize listas e diferencie métodos mutáveis.",
    "problem": "Como inserir, remover e percorrer coleções?",
    "context": "Arrays são objetos indexados, com índices começando em zero e propriedade length. Alguns métodos modificam o original; outros criam novos arrays.",
    "concepts": [
      {
        "title": "O índice inicial é zero",
        "lead": "O primeiro item fica em [0]; a última posição é length-1.",
        "detail": "Acessos fora da faixa retornam undefined sem necessariamente lançar exceção."
      },
      {
        "title": "push e pop modificam o array",
        "lead": "push acrescenta ao final; pop remove o último item.",
        "detail": "slice cria uma cópia superficial; splice altera o array original."
      },
      {
        "title": "Prefira cópias quando não quiser efeitos colaterais",
        "lead": "toSorted, toReversed e toSpliced criam novas coleções.",
        "detail": "O spread e slice copiam superficialmente: objetos internos continuam compartilhados."
      }
    ],
    "terms": [
      {
        "title": "length",
        "detail": "Quantidade de posições do array."
      },
      {
        "title": "push/pop",
        "detail": "Modificam a lista original."
      },
      {
        "title": "slice",
        "detail": "Retorna parte da lista sem alterá-la."
      }
    ],
    "contrasts": [
      {
        "title": "sort",
        "detail": "Ordena o próprio array."
      },
      {
        "title": "toSorted",
        "detail": "Retorna nova versão ordenada."
      },
      {
        "title": "splice",
        "detail": "Remove/insere alterando o array."
      }
    ],
    "starterCode": "const itens = ['A', 'B'];\nitens.push('C');\nconsole.log(itens.length);\nconsole.log(itens[2]);",
    "task": "Substitua C por D e execute.",
    "output": "3\nC",
    "incorrectOutputs": [
      "2\nC",
      "3\nB"
    ],
    "explanation": "push adiciona um terceiro item na posição 2; length passa a 3.",
    "questions": [
      {
        "prompt": "Qual índice do primeiro item?",
        "choices": [
          "0",
          "1",
          "-1"
        ],
        "answer": 0,
        "why": "Arrays em JavaScript começam no índice zero."
      },
      {
        "prompt": "Qual método evita mudar o original?",
        "choices": [
          "sort",
          "toSorted",
          "push"
        ],
        "answer": 1,
        "why": "toSorted retorna novo array."
      },
      {
        "prompt": "slice copia objetos profundamente?",
        "choices": [
          "Sim",
          "Não, é uma cópia superficial",
          "Converte tudo em strings"
        ],
        "answer": 1,
        "why": "Referências a objetos internos são mantidas."
      }
    ],
    "practices": [
      {
        "title": "Lista de compras",
        "goal": "Adicione e remova itens.",
        "action": "Teste push, pop e length.",
        "verify": "Verifique ordem e quantidade."
      },
      {
        "title": "Cópia sem mutação",
        "goal": "Ordene números sem tocar no original.",
        "action": "Compare sort e toSorted.",
        "verify": "Confirme que a cópia é ordenada e o original não."
      },
      {
        "title": "Catálogo básico",
        "goal": "Implemente incluir, remover e consultar por índice.",
        "action": "Use funções sobre um array.",
        "verify": "Teste índice inexistente e remova último item."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 9,
    "slug": "aula-09-objetos-desestruturacao-optional-chaining",
    "title": "Objetos, propriedades, desestruturação e optional chaining",
    "short": "Objetos em JavaScript",
    "subtitle": "Modele entidades e acesse campos com segurança.",
    "problem": "Como agrupar informações de uma mesma entidade?",
    "context": "Objetos associam chaves a valores. Desestruturação extrai campos; ?. evita exceção em cadeias nulas e ?? fornece fallback preciso.",
    "concepts": [
      {
        "title": "Objetos possuem propriedades",
        "lead": "Notação ponto acessa chaves conhecidas; colchetes acessam chaves dinâmicas.",
        "detail": "A referência do objeto pode ser compartilhada por diferentes variáveis."
      },
      {
        "title": "Desestruturação simplifica leitura",
        "lead": "const { nome } = pessoa extrai a propriedade.",
        "detail": "Renomeie campos ou use valores padrão quando fizer sentido."
      },
      {
        "title": "?. protege caminhos ausentes",
        "lead": "pessoa.endereco?.cidade retorna undefined se endereco for null ou undefined.",
        "detail": "Não substitui toda validação: o campo retornado ainda pode ser inválido para o uso."
      }
    ],
    "terms": [
      {
        "title": "Propriedade",
        "detail": "Par chave–valor em um objeto."
      },
      {
        "title": "Desestruturação",
        "detail": "Extrai valores em variáveis."
      },
      {
        "title": "Optional chaining",
        "detail": "Interrompe acesso em valor nulo."
      }
    ],
    "contrasts": [
      {
        "title": "obj.x",
        "detail": "Acesso por propriedade conhecida."
      },
      {
        "title": "obj[chave]",
        "detail": "Acesso por chave dinâmica."
      },
      {
        "title": "?.",
        "detail": "Evita falha em cadeia ausente."
      }
    ],
    "starterCode": "const aluno = { nome: 'Ana', notas: [8, 9] };\nconst { nome } = aluno;\nconsole.log(nome);\nconsole.log(aluno.endereco?.cidade ?? 'sem cidade');",
    "task": "Adicione endereco:{cidade:'Natal'} e execute.",
    "output": "Ana\nsem cidade",
    "incorrectOutputs": [
      "undefined\nNatal",
      "Ana\nNatal"
    ],
    "explanation": "nome é extraído; endereço não existe, então ?. devolve undefined e ?? usa 'sem cidade'.",
    "questions": [
      {
        "prompt": "Qual acesso usa chave dinâmica?",
        "choices": [
          "obj[chave]",
          "obj.chave sempre dinâmica",
          "obj->chave"
        ],
        "answer": 0,
        "why": "Colchetes avaliam uma expressão como chave."
      },
      {
        "prompt": "?. evita exceção quando:",
        "choices": [
          "A propriedade é number",
          "A base do acesso é null ou undefined",
          "Há qualquer erro de sintaxe"
        ],
        "answer": 1,
        "why": "Optional chaining lida com bases nullish."
      },
      {
        "prompt": "Desestruturar cria cópia profunda?",
        "choices": [
          "Sim, sempre",
          "Não",
          "Somente com números"
        ],
        "answer": 1,
        "why": "Desestruturação atribui os valores, preservando referências de objetos."
      }
    ],
    "practices": [
      {
        "title": "Ficha de usuário",
        "goal": "Crie nome, idade e endereço.",
        "action": "Acesse propriedades usando ponto e colchetes.",
        "verify": "Teste uma chave dinâmica."
      },
      {
        "title": "Contato incompleto",
        "goal": "Leia cidade que pode faltar.",
        "action": "Use ?. e ?? com fallback.",
        "verify": "Compare endereço presente e ausente."
      },
      {
        "title": "Catálogo de objetos",
        "goal": "Organize lista de produtos com preço.",
        "action": "Desestruture nome e preço na iteração.",
        "verify": "Calcule total e trate campo opcional."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 10,
    "slug": "aula-10-strings-numeros-datas-intl",
    "title": "Strings, Numbers, Date e formatação Intl",
    "short": "Strings e números",
    "subtitle": "Manipule texto, datas e valores para apresentação.",
    "problem": "Como mostrar dados no formato correto?",
    "context": "Strings são imutáveis; operações numéricas têm limites de precisão; Intl apresenta números e datas de acordo com uma localidade.",
    "concepts": [
      {
        "title": "Strings suportam métodos sem mudar o original",
        "lead": "trim remove espaços nas extremidades; includes pesquisa texto.",
        "detail": "Template literals usam crases para interpolar expressões com ${...}."
      },
      {
        "title": "Números usam ponto flutuante IEEE 754",
        "lead": "0.1 + 0.2 não é exatamente 0.3.",
        "detail": "Para dinheiro, considere unidades inteiras menores ou bibliotecas decimais adequadas."
      },
      {
        "title": "Intl formatará conforme localidade",
        "lead": "Intl.NumberFormat aplica separadores e moedas.",
        "detail": "Date armazena um instante; fuso horário e formatação devem ser tratados explicitamente."
      }
    ],
    "terms": [
      {
        "title": "Template literal",
        "detail": "Interpolação com crases."
      },
      {
        "title": "Number.isNaN",
        "detail": "Detecta NaN sem coerção."
      },
      {
        "title": "Intl",
        "detail": "Formatação sensível a localidade."
      }
    ],
    "contrasts": [
      {
        "title": "parseInt",
        "detail": "Converte parte inteira de uma string."
      },
      {
        "title": "Number",
        "detail": "Exige conversão do valor todo."
      },
      {
        "title": "toFixed",
        "detail": "Retorna string formatada."
      }
    ],
    "starterCode": "const preco = 1234.5;\nconst moeda = new Intl.NumberFormat('pt-BR', {\n  style: 'currency', currency: 'BRL'\n});\nconsole.log(moeda.format(preco));",
    "task": "Altere preco para 10.5 e execute.",
    "output": "R$ 1.234,50",
    "incorrectOutputs": [
      "R$ 1234.5",
      "1234,50"
    ],
    "explanation": "Intl.NumberFormat usa separadores pt-BR e a representação da moeda; o espaço após R$ pode ser não separável.",
    "questions": [
      {
        "prompt": "Strings são mutáveis?",
        "choices": [
          "Sim",
          "Não",
          "Apenas com const"
        ],
        "answer": 1,
        "why": "Métodos de string retornam novos valores."
      },
      {
        "prompt": "0.1 + 0.2 === 0.3 é:",
        "choices": [
          "true",
          "false",
          "SyntaxError"
        ],
        "answer": 1,
        "why": "Representação binária de ponto flutuante introduz diferença."
      },
      {
        "prompt": "Qual API formata moeda por localidade?",
        "choices": [
          "Intl.NumberFormat",
          "JSON.stringify",
          "Object.keys"
        ],
        "answer": 0,
        "why": "Intl.NumberFormat fornece formatação internacionalizada."
      }
    ],
    "practices": [
      {
        "title": "Limpeza de texto",
        "goal": "Normalize nome digitado.",
        "action": "Use trim e toLowerCase.",
        "verify": "Teste textos com espaços."
      },
      {
        "title": "Preço internacional",
        "goal": "Exiba BRL e USD.",
        "action": "Configure Intl.NumberFormat para duas localidades.",
        "verify": "Compare separadores e símbolos."
      },
      {
        "title": "Validação de preço",
        "goal": "Calcule valores com centavos inteiros.",
        "action": "Converta reais para centavos e some.",
        "verify": "Compare com soma direta em ponto flutuante."
      }
    ],
    "runtime": "both",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
  }
];
