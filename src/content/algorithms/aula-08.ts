import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson08 = makeAlgorithmLesson({
  "number": 8,
  "slug": "aula-08-merge-sort",
  "title": "Merge Sort e divisão e conquista",
  "short": "Merge Sort",
  "subtitle": "Divida, ordene as partes e intercale.",
  "objectives": [
    "Reconhecer a divisão recursiva.",
    "Explicar o caso-base.",
    "Intercalar sequências ordenadas.",
    "Analisar O(n log n) e memória."
  ],
  "opening": {
    "title": "E se dividirmos o problema?",
    "lead": "Duas metades pequenas são mais fáceis de organizar.",
    "detail": "Merge Sort ordena as metades recursivamente e intercala os resultados.",
    "keywords": [
      "divisão",
      "recursão",
      "intercalação"
    ]
  },
  "concepts": [
    {
      "title": "Dividir reduz o tamanho",
      "lead": "Corte o vetor em duas metades até restarem elementos únicos.",
      "detail": "Um único elemento já está em ordem, formando o caso-base da recursão.",
      "keywords": [
        "metade",
        "caso-base",
        "recursão"
      ]
    },
    {
      "title": "Intercalar preserva a ordem",
      "lead": "Compare o primeiro valor disponível das duas metades.",
      "detail": "Copie o menor e continue até esgotar ambas as partes.",
      "keywords": [
        "comparar",
        "intercalar",
        "combinar"
      ]
    },
    {
      "title": "Há custo adicional de memória",
      "lead": "Merge Sort executa em O(n log n) no pior caso.",
      "detail": "A implementação usual precisa de memória auxiliar O(n) para intercalação.",
      "keywords": [
        "O(n log n)",
        "O(n) espaço",
        "estável"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Dividir",
        "detail": "Reduzir em partes menores.",
        "kicker": "Estratégia",
        "tone": "blue"
      },
      {
        "title": "Conquistar",
        "detail": "Ordenar as partes.",
        "kicker": "Recursão",
        "tone": "green"
      },
      {
        "title": "Combinar",
        "detail": "Intercalar resultados.",
        "kicker": "Resultado",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Tempo",
        "detail": "O(n log n) no pior caso.",
        "kicker": "Análise",
        "tone": "green"
      },
      {
        "title": "Memória",
        "detail": "O(n) auxiliar, implementação usual.",
        "kicker": "Análise",
        "tone": "orange"
      },
      {
        "title": "Estabilidade",
        "detail": "Pode preservar a ordem dos iguais.",
        "kicker": "Qualidade",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Qual é o caso-base?",
      "prompt": "Em Merge Sort, quando a divisão pode parar?",
      "answers": [
        "Vetor com 0 ou 1 item",
        "Vetor com cem itens",
        "Todos os valores iguais apenas"
      ],
      "correct": 0,
      "explanation": "Um intervalo com até um elemento já está ordenado."
    },
    {
      "title": "Como intercalar?",
      "prompt": "Entre o início das metades ordenadas, escolha:",
      "answers": [
        "O maior sempre",
        "O menor disponível",
        "Qualquer um"
      ],
      "correct": 1,
      "explanation": "Escolher o menor mantém a saída ordenada."
    },
    {
      "title": "Qual intercalação?",
      "prompt": "Combine [1,4] e [2,3].",
      "answers": [
        "[1,4,2,3]",
        "[2,3,1,4]",
        "[1,2,3,4]"
      ],
      "correct": 2,
      "explanation": "Compare as frentes e copie na ordem 1, 2, 3, 4."
    },
    {
      "title": "Qual o custo?",
      "prompt": "Na implementação usual de Merge Sort:",
      "answers": [
        "O(n log n) de tempo e O(n) extra",
        "O(n²) e O(1) sempre",
        "O(1) para qualquer n"
      ],
      "correct": 0,
      "explanation": "A recorrência típica é T(n)=2T(n/2)+O(n)."
    }
  ],
  "primary": "merge-sort",
  "practice": [
    {
      "title": "Divida em partes",
      "problem": "Comece com [5,2,4,1].",
      "steps": [
        "Separe em duas metades.",
        "Divida cada metade.",
        "Identifique os casos-base.",
        "Desenhe a árvore de chamadas."
      ],
      "success": [
        "Divisão correta",
        "Casos-base",
        "Árvore completa"
      ],
      "minutes": 25
    },
    {
      "title": "Intercale duas metades",
      "problem": "Combine [2,5] e [1,4].",
      "steps": [
        "Compare 2 com 1.",
        "Copie o menor.",
        "Continue até esgotar as metades.",
        "Confira [1,2,4,5]."
      ],
      "success": [
        "Comparações coerentes",
        "Itens preservados",
        "Ordem crescente"
      ],
      "minutes": 35
    },
    {
      "title": "Analise Merge Sort",
      "problem": "Compare uma solução quadrática e Merge Sort.",
      "steps": [
        "Defina valores de n.",
        "Calcule n² e n log₂n aproximadamente.",
        "Observe o crescimento.",
        "Registre o custo da memória auxiliar."
      ],
      "success": [
        "Crescimento comparado",
        "Memória considerada",
        "Escolha justificada"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Dividir e combinar evita comparações excessivas",
    "lead": "Merge Sort ordena metades e depois intercala.",
    "detail": "Seu custo O(n log n) é previsível, com utilização de memória auxiliar.",
    "keywords": [
      "dividir",
      "recursão",
      "combinar"
    ]
  },
  "checklist": [
    "Separo metades.",
    "Identifico o caso-base.",
    "Intercalo em ordem.",
    "Explico O(n log n).",
    "Reconheço memória auxiliar."
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
