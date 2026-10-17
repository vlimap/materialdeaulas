import { buildLogicLesson } from './lesson-builder';

export const aula09Logic = buildLogicLesson({
  "number": 9,
  "slug": "aula-09-funcoes",
  "title": "Funções e reutilização",
  "shortTitle": "Funções",
  "subtitle": "Divida uma solução em operações reaproveitáveis.",
  "objectives": [
    "Identificar entradas de uma função.",
    "Distinguir argumento, parâmetro e retorno.",
    "Reconhecer escopos locais.",
    "Utilizar funções para evitar duplicação."
  ],
  "context": {
    "title": "Por que repetir a mesma solução?",
    "lead": "Uma tarefa bem definida pode receber um nome e ser reutilizada.",
    "detail": "Funções agrupam instruções e permitem executar uma operação várias vezes com entradas diferentes.",
    "keywords": [
      "função",
      "reuso",
      "modularidade"
    ]
  },
  "concepts": [
    {
      "title": "Uma função resolve uma responsabilidade",
      "lead": "dobro recebe um valor e devolve seu dobro.",
      "detail": "O nome da função deve comunicar a operação; suas instruções permanecem agrupadas.",
      "keywords": [
        "nome",
        "responsabilidade",
        "corpo"
      ]
    },
    {
      "title": "Parâmetro não é argumento",
      "lead": "O parâmetro recebe o dado da chamada.",
      "detail": "Na chamada dobro(3), o argumento é 3; na definição dobro(valor), valor é o parâmetro.",
      "keywords": [
        "argumento",
        "parâmetro",
        "chamada"
      ]
    },
    {
      "title": "Retorno entrega um resultado",
      "lead": "RETORNAR devolve um valor para quem chamou.",
      "detail": "Mostrar uma mensagem não é o mesmo que retornar um dado para outro cálculo.",
      "keywords": [
        "retorno",
        "resultado",
        "escopo"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Definição",
        "detail": "Descreve como a função trabalha.",
        "kicker": "FUNÇÃO",
        "tone": "blue"
      },
      {
        "title": "Chamada",
        "detail": "Solicita a execução com argumentos.",
        "kicker": "Invocação",
        "tone": "green"
      },
      {
        "title": "Retorno",
        "detail": "Produz um valor para quem chamou.",
        "kicker": "Resultado",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Parâmetro",
        "detail": "Nome utilizado dentro da definição.",
        "kicker": "Entrada",
        "tone": "blue"
      },
      {
        "title": "Argumento",
        "detail": "Valor real da chamada.",
        "kicker": "Dado",
        "tone": "green"
      },
      {
        "title": "Escopo",
        "detail": "Limita o alcance de variáveis locais.",
        "kicker": "Organização",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Para que serve uma função?",
      "prompt": "Qual é o principal benefício?",
      "options": [
        "Copiar o mesmo código várias vezes",
        "Agrupar e reutilizar instruções",
        "Evitar toda entrada de dados"
      ],
      "answer": 1,
      "explanation": "Funções organizam operações reutilizáveis."
    },
    {
      "title": "O que é um argumento?",
      "prompt": "Na chamada dobro(4), o número 4 é:",
      "options": [
        "O argumento",
        "O nome da função",
        "Uma variável global"
      ],
      "answer": 0,
      "explanation": "Argumento é o valor fornecido na chamada."
    },
    {
      "title": "Qual será a saída?",
      "prompt": "A função devolve o dobro do argumento.",
      "options": [
        "5",
        "10",
        "20"
      ],
      "answer": 1,
      "explanation": "A função recebe 5 e retorna 5 * 2 = 10.",
      "exampleCode": "FUNÇÃO dobro(valor)\n    RETORNAR valor * 2\nFIM FUNÇÃO\nx ← dobro(5)\nESCREVER x"
    },
    {
      "title": "Qual instrução devolve um valor?",
      "prompt": "Escolha a instrução que entrega um resultado a quem chamou.",
      "options": [
        "RETORNAR total",
        "EXIBIR total",
        "LER total"
      ],
      "answer": 0,
      "explanation": "RETORNAR fornece um valor utilizável em outra expressão."
    }
  ],
  "scenario": "functions",
  "practice": [
    {
      "title": "Faça uma função de soma",
      "challenge": "Crie SOMAR(a, b).",
      "steps": [
        "Defina parâmetros a e b.",
        "Calcule a + b.",
        "Retorne o resultado.",
        "Teste com 2 e 3: resultado 5."
      ],
      "success": [
        "Parâmetros definidos",
        "Retorno correto",
        "Teste concluído"
      ],
      "minutes": 25
    },
    {
      "title": "Reaproveite um cálculo",
      "challenge": "Crie uma função de preço total.",
      "steps": [
        "Receba quantidade e preço.",
        "Calcule o produto.",
        "Retorne o total.",
        "Teste dois conjuntos de entradas."
      ],
      "success": [
        "Sem duplicação",
        "Dois testes",
        "Resultados coerentes"
      ],
      "minutes": 30
    },
    {
      "title": "Separe responsabilidades",
      "challenge": "Planeje um algoritmo de biblioteca com funções.",
      "steps": [
        "Crie função de busca.",
        "Crie função de verificação.",
        "Crie função de registro.",
        "Defina entradas e saídas de cada uma."
      ],
      "success": [
        "Funções coesas",
        "Entradas e saídas claras",
        "Fluxo principal legível"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Funções tornam o algoritmo legível",
    "lead": "Cada função deve ter uma responsabilidade clara.",
    "detail": "Entradas e retornos documentados permitem reutilização e testes isolados.",
    "keywords": [
      "definir",
      "chamar",
      "retornar"
    ]
  },
  "checklist": [
    "Identifico uma função.",
    "Distingo parâmetro e argumento.",
    "Sei a diferença entre exibir e retornar.",
    "Divido problemas em operações.",
    "Testo funções com várias entradas."
  ],
  "sources": [
    {
      "label": "Python · Definindo funções",
      "url": "https://docs.python.org/pt-br/3/tutorial/controlflow.html#defining-functions"
    },
    {
      "label": "MDN · JavaScript",
      "url": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide"
    }
  ]
});
