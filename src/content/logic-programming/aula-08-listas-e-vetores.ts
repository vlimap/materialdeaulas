import { buildLogicLesson } from './lesson-builder';

export const aula08Logic = buildLogicLesson({
  "number": 8,
  "slug": "aula-08-listas-e-vetores",
  "title": "Listas e vetores",
  "shortTitle": "Listas e vetores",
  "subtitle": "Armazene vários valores e percorra uma coleção.",
  "objectives": [
    "Representar conjuntos de valores em listas.",
    "Identificar posições e índices.",
    "Percorrer os itens com uma repetição.",
    "Calcular totais de uma coleção."
  ],
  "context": {
    "title": "E se houver muitos valores?",
    "lead": "Uma variável por item não escala para grandes conjuntos.",
    "detail": "Listas agrupam dados relacionados e permitem processar cada item.",
    "keywords": [
      "coleção",
      "posição",
      "índice"
    ]
  },
  "concepts": [
    {
      "title": "Uma lista reúne valores",
      "lead": "[4, 7, 2] é uma coleção de três números.",
      "detail": "Em muitas linguagens, o primeiro índice é zero, embora esta convenção dependa da linguagem.",
      "keywords": [
        "lista",
        "índice",
        "item"
      ]
    },
    {
      "title": "Percorrer é visitar cada posição",
      "lead": "Um laço permite processar os itens em sequência.",
      "detail": "Cada iteração lê um elemento e atualiza o resultado parcial.",
      "keywords": [
        "percorrer",
        "laço",
        "acessar"
      ]
    },
    {
      "title": "Limites evitam acessos inválidos",
      "lead": "Cinco itens possuem índices 0 até 4 quando a indexação começa em zero.",
      "detail": "Tentar ler uma posição inexistente causa erro ou valor indefinido, dependendo da linguagem.",
      "keywords": [
        "comprimento",
        "limite",
        "índice"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Lista",
        "detail": "Armazena vários valores.",
        "kicker": "Coleção",
        "tone": "blue"
      },
      {
        "title": "Índice",
        "detail": "Identifica a posição de um item.",
        "kicker": "Endereço",
        "tone": "green"
      },
      {
        "title": "Comprimento",
        "detail": "Quantidade total de elementos.",
        "kicker": "Tamanho",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Soma",
        "detail": "Atualize total a cada elemento.",
        "kicker": "Acumulador",
        "tone": "blue"
      },
      {
        "title": "Busca",
        "detail": "Compare cada elemento ao alvo.",
        "kicker": "Verificação",
        "tone": "green"
      },
      {
        "title": "Limite",
        "detail": "Pare antes de acessar fora da lista.",
        "kicker": "Validação",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Qual é o primeiro índice?",
      "prompt": "Em uma lista indexada a partir de zero, qual é o índice inicial?",
      "options": [
        "0",
        "1",
        "-1"
      ],
      "answer": 0,
      "explanation": "A convenção de indexação a partir de zero usa 0 na primeira posição."
    },
    {
      "title": "Quantos elementos?",
      "prompt": "Qual é o comprimento da lista [4, 7, 2, 9]?",
      "options": [
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "A lista possui quatro elementos."
    },
    {
      "title": "Qual é a soma?",
      "prompt": "O laço percorre as três primeiras posições.",
      "options": [
        "11",
        "13",
        "18"
      ],
      "answer": 1,
      "explanation": "4 + 7 + 2 = 13.",
      "exampleCode": "valores ← [4, 7, 2, 9]\nsoma ← 0\nPARA i DE 0 ATÉ 2\n    soma ← soma + valores[i]\nFIM PARA\nESCREVER soma"
    },
    {
      "title": "Qual posição existe?",
      "prompt": "Uma lista de cinco elementos, indexada a partir de zero, possui:",
      "options": [
        "Índice 5",
        "Índice 4",
        "Índice 9"
      ],
      "answer": 1,
      "explanation": "A última posição é comprimento - 1, isto é, 4."
    }
  ],
  "scenario": "arrays",
  "practice": [
    {
      "title": "Registre temperaturas",
      "challenge": "Use uma lista com três temperaturas.",
      "steps": [
        "Defina valores [25, 27, 24].",
        "Identifique os índices 0, 1 e 2.",
        "Leia cada elemento.",
        "Calcule a soma: 76."
      ],
      "success": [
        "Índices corretos",
        "Todos os itens lidos",
        "Soma verificada"
      ],
      "minutes": 25
    },
    {
      "title": "Encontre um número",
      "challenge": "Busque o valor 7 em uma lista.",
      "steps": [
        "Defina [4, 7, 2, 9].",
        "Compare o alvo com cada item.",
        "Pare ao encontrar o 7.",
        "Registre o índice encontrado."
      ],
      "success": [
        "Comparações registradas",
        "Índice 1 identificado",
        "Condição de parada clara"
      ],
      "minutes": 30
    },
    {
      "title": "Calcule uma média",
      "challenge": "Calcule a média de três notas.",
      "steps": [
        "Armazene [6, 8, 10].",
        "Some os três valores.",
        "Divida pela quantidade de itens.",
        "Confira a média igual a 8."
      ],
      "success": [
        "Lista construída",
        "Soma igual a 24",
        "Média igual a 8"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Coleções permitem resolver mais",
    "lead": "Um algoritmo processa muitos valores com os mesmos passos.",
    "detail": "Índices, comprimentos e limites são essenciais para evitar erros.",
    "keywords": [
      "lista",
      "iteração",
      "limite"
    ]
  },
  "checklist": [
    "Reconheço uma lista.",
    "Identifico os índices válidos.",
    "Percorro cada posição.",
    "Utilizo acumuladores sobre itens.",
    "Evito índices fora do intervalo."
  ],
  "sources": [
    {
      "label": "MDN · Condições e laços",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Conditionals"
    },
    {
      "label": "Python · Estruturas de controle",
      "url": "https://docs.python.org/pt-br/3/tutorial/controlflow.html"
    }
  ]
});
