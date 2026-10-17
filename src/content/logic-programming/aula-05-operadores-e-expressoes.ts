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
