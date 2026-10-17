import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson06 = makeAlgorithmLesson({
  "number": 6,
  "slug": "aula-06-ordenacao-bubble-selection",
  "title": "Ordenação com Bubble Sort e Selection Sort",
  "short": "Bubble e Selection Sort",
  "subtitle": "Compare trocas de vizinhos e seleção do menor.",
  "objectives": [
    "Reconhecer listas ordenadas.",
    "Executar Bubble Sort.",
    "Executar Selection Sort.",
    "Comparar comparações e trocas."
  ],
  "opening": {
    "title": "Por que ordenar os dados?",
    "lead": "Ordenar facilita buscas e apresentação de resultados.",
    "detail": "Bubble e Selection Sort são algoritmos introdutórios com estratégias diferentes e custo quadrático.",
    "keywords": [
      "ordem",
      "comparar",
      "trocar"
    ]
  },
  "concepts": [
    {
      "title": "Bubble compara vizinhos",
      "lead": "Quando dois valores estão invertidos, suas posições são trocadas.",
      "detail": "A cada passagem, um valor maior se aproxima da posição final.",
      "keywords": [
        "vizinhos",
        "inversão",
        "troca"
      ]
    },
    {
      "title": "Selection procura o menor restante",
      "lead": "Escolha o menor elemento da parte não ordenada.",
      "detail": "Troque-o para a primeira posição disponível. Repita com o resto.",
      "keywords": [
        "menor",
        "selecionar",
        "prefixo"
      ]
    },
    {
      "title": "Custo e estabilidade diferem",
      "lead": "Ambos têm O(n²) no pior caso; Selection costuma realizar menos trocas.",
      "detail": "Bubble com comparação estrita pode ser estável; Selection tradicional não é estável.",
      "keywords": [
        "O(n²)",
        "trocas",
        "estabilidade"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Bubble",
        "detail": "Compara pares vizinhos.",
        "kicker": "Estratégia",
        "tone": "blue"
      },
      {
        "title": "Selection",
        "detail": "Encontra o menor restante.",
        "kicker": "Estratégia",
        "tone": "green"
      },
      {
        "title": "Ordenação",
        "detail": "Produz valores em ordem crescente.",
        "kicker": "Saída",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Bubble",
        "detail": "Muitas trocas possíveis.",
        "kicker": "Movimentação",
        "tone": "orange"
      },
      {
        "title": "Selection",
        "detail": "No máximo n-1 trocas.",
        "kicker": "Movimentação",
        "tone": "green"
      },
      {
        "title": "Ambos",
        "detail": "Custo de comparação quadrático.",
        "kicker": "Análise",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Quem compara vizinhos?",
      "prompt": "Qual algoritmo analisa a[i] e a[i+1]?",
      "answers": [
        "Bubble Sort",
        "Busca binária",
        "Busca em largura"
      ],
      "correct": 0,
      "explanation": "Bubble Sort percorre pares vizinhos."
    },
    {
      "title": "Quem busca o menor?",
      "prompt": "Qual é a ideia central do Selection Sort?",
      "answers": [
        "Escolher o elemento mínimo restante",
        "Dividir recursivamente",
        "Usar uma fila"
      ],
      "correct": 0,
      "explanation": "Selection coloca o menor restante na posição definitiva."
    },
    {
      "title": "Qual sequência ordenada?",
      "prompt": "Ordene [3, 1, 2] em ordem crescente.",
      "answers": [
        "[3,2,1]",
        "[1,2,3]",
        "[2,1,3]"
      ],
      "correct": 1,
      "explanation": "A ordem crescente começa pelo menor número."
    },
    {
      "title": "Qual pior caso?",
      "prompt": "Bubble e Selection Sort tradicionais:",
      "answers": [
        "O(log n)",
        "O(1)",
        "O(n²)"
      ],
      "correct": 2,
      "explanation": "As comparações crescem quadraticamente com a entrada."
    }
  ],
  "primary": "bubble-sort",
  "secondary": "selection-sort",
  "practice": [
    {
      "title": "Faça uma passagem Bubble",
      "problem": "Comece com [4,2,3,1].",
      "steps": [
        "Compare os pares vizinhos.",
        "Troque se necessário.",
        "Continue até o final.",
        "Identifique o maior no final."
      ],
      "success": [
        "Comparações corretas",
        "Trocas documentadas",
        "Maior ao final"
      ],
      "minutes": 25
    },
    {
      "title": "Selecione o menor",
      "problem": "Ordene [5,3,1,4] com Selection.",
      "steps": [
        "Encontre o menor valor.",
        "Troque com a primeira posição.",
        "Repita na parte restante.",
        "Confira a ordenação final."
      ],
      "success": [
        "Mínimos identificados",
        "Trocas corretas",
        "Lista crescente"
      ],
      "minutes": 35
    },
    {
      "title": "Compare os métodos",
      "problem": "Execute ambos em listas iguais.",
      "steps": [
        "Defina uma lista de cinco elementos.",
        "Conte comparações Bubble.",
        "Conte trocas Selection.",
        "Discuta custo e estabilidade."
      ],
      "success": [
        "Contagens registradas",
        "Custo O(n²) identificado",
        "Diferenças explicadas"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Objetivo igual, estratégias distintas",
    "lead": "Uma ordenação pode mover valores de formas diferentes.",
    "detail": "Compare quantidade de operações, memória e estabilidade ao escolher um método.",
    "keywords": [
      "bubble",
      "selection",
      "análise"
    ]
  },
  "checklist": [
    "Reconheço uma inversão.",
    "Executo uma troca de vizinhos.",
    "Encontro o menor restante.",
    "Confiro o vetor ordenado.",
    "Comparo as estratégias."
  ],
  "references": [
    {
      "label": "OpenDSA · Algoritmos e análise",
      "url": "https://opendsa-server.cs.vt.edu/"
    },
    {
      "label": "MIT OpenCourseWare · Introduction to Algorithms",
      "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
    }
  ]
});
