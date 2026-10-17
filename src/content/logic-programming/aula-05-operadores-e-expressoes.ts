import { buildLogicLesson } from './lesson-builder';

export const aula05Logic = buildLogicLesson({
  "number": 5,
  "slug": "aula-05-operadores-e-expressoes",
  "title": "Operadores e expressões",
  "shortTitle": "Operadores",
  "subtitle": "Cálculos e comparações que produzem resultados.",
  "objectives": [
    "Resolver expressões aritméticas.",
    "Aplicar precedência e parênteses.",
    "Interpretar operadores de comparação.",
    "Construir expressões lógicas simples."
  ],
  "context": {
    "title": "Como transformar valores?",
    "lead": "Operadores combinam números e condições.",
    "detail": "Uma expressão pode produzir outro número ou um resultado lógico.",
    "keywords": [
      "operação",
      "expressão",
      "resultado"
    ]
  },
  "concepts": [
    {
      "title": "Aritmética tem precedência",
      "lead": "Multiplicação e divisão vêm antes de soma e subtração.",
      "detail": "Parênteses tornam explícita a intenção e modificam a ordem do cálculo.",
      "keywords": [
        "+",
        "*",
        "parênteses"
      ]
    },
    {
      "title": "Comparações produzem verdadeiro ou falso",
      "lead": "5 > 3 é verdadeiro; 5 < 3 é falso.",
      "detail": "Diferença entre atribuir um valor e compará-lo: x ← 5 armazena; x = 5 pergunta se é igual.",
      "keywords": [
        "maior",
        "menor",
        "igual"
      ]
    },
    {
      "title": "Operadores lógicos combinam condições",
      "lead": "E exige ambas verdadeiras; OU aceita ao menos uma.",
      "detail": "NÃO inverte o valor lógico. Testar cenários evita erros.",
      "keywords": [
        "E",
        "OU",
        "NÃO"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Adição",
        "detail": "2 + 3 = 5.",
        "kicker": "Aritmético",
        "tone": "blue"
      },
      {
        "title": "Multiplicação",
        "detail": "2 * 3 = 6.",
        "kicker": "Aritmético",
        "tone": "green"
      },
      {
        "title": "Parênteses",
        "detail": "(2 + 3) * 4 = 20.",
        "kicker": "Precedência",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Maior ou igual",
        "detail": "idade >= 18.",
        "kicker": "Comparação",
        "tone": "blue"
      },
      {
        "title": "E",
        "detail": "As duas condições devem valer.",
        "kicker": "Lógica",
        "tone": "green"
      },
      {
        "title": "OU",
        "detail": "Uma condição verdadeira basta.",
        "kicker": "Lógica",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Qual resultado é correto?",
      "prompt": "Quanto vale 2 + 3 * 4?",
      "options": [
        "20",
        "14",
        "24"
      ],
      "answer": 1,
      "explanation": "Multiplicação antes da adição: 2 + 12 = 14."
    },
    {
      "title": "Qual expressão é verdadeira?",
      "prompt": "Considere x = 3.",
      "options": [
        "x > 5",
        "x = 5",
        "x <= 3"
      ],
      "answer": 2,
      "explanation": "Três é menor ou igual a três."
    },
    {
      "title": "Qual é a saída?",
      "prompt": "Observe a ordem das operações.",
      "options": [
        "17",
        "27",
        "15"
      ],
      "answer": 0,
      "explanation": "Com x=5, primeiro 3*5=15, depois 2+15=17.",
      "exampleCode": "x ← 5\nresultado ← 2 + 3 * x\nESCREVER resultado"
    },
    {
      "title": "Como funciona o operador E?",
      "prompt": "Qual expressão resulta em verdadeiro?",
      "options": [
        "verdadeiro E falso",
        "verdadeiro E verdadeiro",
        "falso E falso"
      ],
      "answer": 1,
      "explanation": "As duas partes precisam ser verdadeiras."
    }
  ],
  "scenario": "operators",
  "afterConceptC": [
    {
      "id": "logic-05-tabela-introducao",
      "kind": "statement",
      "eyebrow": "Lógica booleana · 01",
      "title": "O que é uma tabela-verdade?",
      "lead": "Ela mostra todas as combinações de entradas e o resultado de uma expressão lógica.",
      "detail": "Cada condição pode ser V (verdadeiro) ou F (falso). Duas condições, A e B, geram 2 × 2 = 4 combinações possíveis. Cada linha é um caso a ser testado.",
      "chips": [
        "entradas A e B",
        "quatro combinações",
        "resultado"
      ]
    },
    {
      "id": "logic-05-tabela-como-ler",
      "kind": "cards",
      "eyebrow": "Aprenda a ler",
      "title": "Uma linha por combinação",
      "items": [
        {
          "title": "Colunas A e B",
          "detail": "Representam as entradas: cada uma vale verdadeiro (V) ou falso (F).",
          "kicker": "Entrada",
          "tone": "blue"
        },
        {
          "title": "Coluna da expressão",
          "detail": "Exibe o resultado após aplicar E, OU ou NÃO às entradas.",
          "kicker": "Saída",
          "tone": "green"
        },
        {
          "title": "Linha destacada",
          "detail": "Mostra o caso correspondente aos valores escolhidos.",
          "kicker": "Execução",
          "tone": "orange"
        }
      ]
    },
    {
      "id": "logic-05-tabela-e-conceito",
      "kind": "statement",
      "eyebrow": "Operador lógico · E",
      "title": "E: duas condições obrigatórias",
      "lead": "A E B só é verdadeiro quando A e B são verdadeiros.",
      "detail": "Se A e B forem falsos, o resultado é falso. Se somente uma das condições for verdadeira, também será falso. Apenas V E V produz V.",
      "chips": [
        "F E F = F",
        "F E V = F",
        "V E F = F",
        "V E V = V"
      ]
    },
    {
      "id": "logic-05-tabela-e-interativa",
      "kind": "truth-table",
      "eyebrow": "Experimente · operador E",
      "title": "Tabela-verdade do operador E",
      "subtitle": "Escolha A e B para destacar cada uma das quatro possibilidades.",
      "operator": "and"
    },
    {
      "id": "logic-05-tabela-ou-conceito",
      "kind": "statement",
      "eyebrow": "Operador lógico · OU",
      "title": "OU: ao menos uma condição",
      "lead": "A OU B é verdadeiro quando uma ou ambas são verdadeiras.",
      "detail": "Na lógica booleana, OU é inclusivo: V OU V também produz V. O único caso falso ocorre quando A e B são falsos.",
      "chips": [
        "F OU F = F",
        "F OU V = V",
        "V OU F = V",
        "V OU V = V"
      ]
    },
    {
      "id": "logic-05-tabela-ou-interativa",
      "kind": "truth-table",
      "eyebrow": "Experimente · operador OU",
      "title": "Tabela-verdade do operador OU",
      "subtitle": "Teste os quatro casos, inclusive quando A e B são verdadeiros.",
      "operator": "or"
    },
    {
      "id": "logic-05-tabela-nao-conceito",
      "kind": "statement",
      "eyebrow": "Operador lógico · NÃO",
      "title": "NÃO: inverta o valor lógico",
      "lead": "NÃO A transforma verdadeiro em falso e falso em verdadeiro.",
      "detail": "Diferentemente de E e OU, NÃO utiliza apenas uma condição. Por isso sua tabela tem duas linhas: NÃO V = F e NÃO F = V.",
      "chips": [
        "uma entrada",
        "duas linhas",
        "inversão"
      ]
    },
    {
      "id": "logic-05-tabela-nao-interativa",
      "kind": "truth-table",
      "eyebrow": "Experimente · operador NÃO",
      "title": "Tabela-verdade do operador NÃO",
      "subtitle": "Alterne A entre verdadeiro e falso e observe a inversão.",
      "operator": "not"
    },
    {
      "id": "logic-05-tabela-comparacao",
      "kind": "cards",
      "eyebrow": "Síntese · operadores lógicos",
      "title": "Como diferenciar E, OU e NÃO?",
      "items": [
        {
          "title": "E — conjunção",
          "detail": "Duas condições precisam ser verdadeiras ao mesmo tempo.",
          "kicker": "Ambas",
          "tone": "blue"
        },
        {
          "title": "OU — disjunção",
          "detail": "Uma condição verdadeira já basta; ambas também servem.",
          "kicker": "Pelo menos uma",
          "tone": "green"
        },
        {
          "title": "NÃO — negação",
          "detail": "Inverte uma condição, sem utilizar uma segunda entrada.",
          "kicker": "Inversão",
          "tone": "orange"
        }
      ]
    },
    {
      "id": "logic-05-tabela-desafio",
      "kind": "challenge",
      "eyebrow": "Teste seu entendimento",
      "title": "Qual será a saída da expressão?",
      "prompt": "Leia o pseudocódigo e aplique a regra do operador OU.",
      "exampleCode": "A ← verdadeiro\nB ← falso\nESCREVER (A OU B)",
      "testInput": "A = verdadeiro; B = falso",
      "options": [
        {
          "label": "Verdadeiro"
        },
        {
          "label": "Falso"
        },
        {
          "label": "Indefinido"
        }
      ],
      "answerIndex": 0,
      "explanation": "A OU B produz verdadeiro quando pelo menos uma das duas condições é verdadeira. Como A é verdadeiro, o resultado é verdadeiro."
    }
  ],
  "practice": [
    {
      "title": "Calcule descontos",
      "challenge": "Encontre o valor com desconto de 10 reais.",
      "steps": [
        "Defina preço de 50.",
        "Defina desconto de 10.",
        "Calcule preço - desconto.",
        "Compare com o esperado: 40."
      ],
      "success": [
        "Expressão escrita",
        "Resultado verificado",
        "Valores identificados"
      ],
      "minutes": 25
    },
    {
      "title": "Explicite precedência",
      "challenge": "Resolva cálculos com e sem parênteses.",
      "steps": [
        "Calcule 2 + 3 * 4.",
        "Calcule (2 + 3) * 4.",
        "Compare os resultados.",
        "Explique a mudança de ordem."
      ],
      "success": [
        "14 identificado",
        "20 identificado",
        "Precedência justificada"
      ],
      "minutes": 30
    },
    {
      "title": "Combine comparações",
      "challenge": "Valide inscrições com idade e vagas.",
      "steps": [
        "Crie idade >= 18.",
        "Crie vagas > 0.",
        "Junte as condições com E.",
        "Teste um caso verdadeiro e outro falso."
      ],
      "success": [
        "Duas condições corretas",
        "Operador apropriado",
        "Testes registrados"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Expressões permitem decidir",
    "lead": "O resultado depende dos valores e dos operadores.",
    "detail": "Parênteses, precedência e comparações tornam o comportamento previsível.",
    "keywords": [
      "calcular",
      "comparar",
      "validar"
    ]
  },
  "checklist": [
    "Reconheço operadores aritméticos.",
    "Resolvo precedência corretamente.",
    "Distingo atribuição de comparação.",
    "Interpreto E, OU e NÃO.",
    "Verifico o resultado com números."
  ],
  "sources": [
    {
      "label": "MDN · Fundamentos de JavaScript",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting"
    },
    {
      "label": "Documentação Python · Tutorial",
      "url": "https://docs.python.org/pt-br/3/tutorial/"
    }
  ]
});
