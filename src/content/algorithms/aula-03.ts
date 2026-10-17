import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson03 = makeAlgorithmLesson({
  "number": 3,
  "slug": "aula-03-complexidade-big-o",
  "title": "Complexidade de tempo e notação Big-O",
  "short": "Complexidade e Big-O",
  "subtitle": "Compare algoritmos pelo crescimento do trabalho.",
  "objectives": [
    "Diferenciar tempo de execução e operações.",
    "Reconhecer O(1), O(n) e O(n²).",
    "Interpretar crescimento assintótico.",
    "Relacionar complexidade e escala."
  ],
  "opening": {
    "title": "Por que alguns algoritmos ficam lentos?",
    "lead": "A quantidade de dados muda o número de operações.",
    "detail": "Big-O descreve a ordem de crescimento do custo quando a entrada aumenta.",
    "keywords": [
      "n",
      "custo",
      "crescimento"
    ]
  },
  "concepts": [
    {
      "title": "Conte operações, não milissegundos",
      "lead": "Máquinas diferentes executam em velocidades distintas.",
      "detail": "A análise assintótica observa como o trabalho cresce com n.",
      "keywords": [
        "custo",
        "entrada n",
        "comparações"
      ]
    },
    {
      "title": "Um laço é diferente de dois",
      "lead": "Um percurso completo custa O(n). Dois laços aninhados podem custar O(n²).",
      "detail": "Quando n dobra, um algoritmo quadrático pode executar quatro vezes mais operações.",
      "keywords": [
        "linear",
        "quadrático",
        "escala"
      ]
    },
    {
      "title": "Big-O é uma cota assintótica superior",
      "lead": "O(n) indica crescimento limitado por uma função linear, até constantes.",
      "detail": "Descarte fatores constantes na classificação, mas não no tempo real.",
      "keywords": [
        "limite superior",
        "constantes",
        "ordem"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "O(1)",
        "detail": "Operações limitadas, independentes de n.",
        "kicker": "Constante",
        "tone": "blue"
      },
      {
        "title": "O(n)",
        "detail": "Trabalho proporcional a n.",
        "kicker": "Linear",
        "tone": "green"
      },
      {
        "title": "O(n²)",
        "detail": "Duas dimensões de iteração.",
        "kicker": "Quadrático",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Melhor caso",
        "detail": "Entrada mais favorável.",
        "kicker": "Análise",
        "tone": "blue"
      },
      {
        "title": "Pior caso",
        "detail": "Entrada de maior custo.",
        "kicker": "Análise",
        "tone": "orange"
      },
      {
        "title": "Espaço",
        "detail": "Memória adicional também tem custo.",
        "kicker": "Análise",
        "tone": "green"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é n?",
      "prompt": "Em análise de algoritmos, n costuma indicar:",
      "answers": [
        "Tamanho da entrada",
        "Velocidade do monitor",
        "Número do professor"
      ],
      "correct": 0,
      "explanation": "n representa alguma medida do tamanho da entrada."
    },
    {
      "title": "Quanto custa um percurso completo?",
      "prompt": "Um laço visita n elementos uma única vez.",
      "answers": [
        "O(1)",
        "O(n)",
        "O(n²)"
      ],
      "correct": 1,
      "explanation": "Há uma quantidade de operações proporcional a n."
    },
    {
      "title": "Quantas operações?",
      "prompt": "Considere dois laços independentes aninhados com n=3.",
      "answers": [
        "3",
        "6",
        "9"
      ],
      "correct": 2,
      "explanation": "3 × 3 = 9.",
      "code": "PARA i DE 1 ATÉ n\n    PARA j DE 1 ATÉ n\n        EXECUTAR\n    FIM PARA\nFIM PARA",
      "input": "n = 3"
    },
    {
      "title": "O que Big-O não mede diretamente?",
      "prompt": "Qual alternativa está correta?",
      "answers": [
        "Taxa assintótica",
        "Milissegundos exatos de uma máquina",
        "Limite superior de crescimento"
      ],
      "correct": 1,
      "explanation": "Tempo real depende de constantes, hardware e ambiente."
    }
  ],
  "primary": "complexity",
  "practice": [
    {
      "title": "Conte um laço",
      "problem": "Execute uma operação para cada item.",
      "steps": [
        "Teste n igual a 3.",
        "Conte as operações.",
        "Repita para n igual a 6.",
        "Compare 3 e 6."
      ],
      "success": [
        "Contagem correta",
        "Crescimento linear",
        "Notação O(n)"
      ],
      "minutes": 25
    },
    {
      "title": "Compare dois laços",
      "problem": "Observe uma operação dentro de laços aninhados.",
      "steps": [
        "Defina n igual a 3.",
        "Conte 3 × 3.",
        "Repita para n igual a 6.",
        "Classifique o crescimento."
      ],
      "success": [
        "9 operações",
        "36 operações",
        "Notação O(n²)"
      ],
      "minutes": 35
    },
    {
      "title": "Escolha uma estratégia",
      "problem": "Compare percorrer uma lista e verificar todos os pares.",
      "steps": [
        "Descreva o objetivo da busca.",
        "Determine os laços necessários.",
        "Compare o custo com n=10.",
        "Explique a escolha para n grande."
      ],
      "success": [
        "Estratégias distintas",
        "Custo estimado",
        "Justificativa coerente"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "A escala importa",
    "lead": "Complexidade não mede a duração exata de uma execução.",
    "detail": "Ela permite comparar como diferentes técnicas se comportam ao aumentar o volume de dados.",
    "keywords": [
      "O(1)",
      "O(n)",
      "O(n²)"
    ]
  },
  "checklist": [
    "Identifico o tamanho n.",
    "Conto laços independentes.",
    "Comparo linear e quadrático.",
    "Distingo custo de tempo real.",
    "Considero memória adicional."
  ],
  "references": [
    {
      "label": "OpenDSA · Estruturas de dados e algoritmos",
      "url": "https://opendsa-server.cs.vt.edu/"
    },
    {
      "label": "MIT OpenCourseWare · Introduction to Algorithms",
      "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
    }
  ]
});
