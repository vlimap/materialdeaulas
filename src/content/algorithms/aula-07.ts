import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson07 = makeAlgorithmLesson({
  "number": 7,
  "slug": "aula-07-insertion-sort",
  "title": "Insertion Sort e ordenação incremental",
  "short": "Insertion Sort",
  "subtitle": "Insira cada item na posição correta do prefixo.",
  "objectives": [
    "Manter prefixo ordenado.",
    "Deslocar elementos maiores.",
    "Inserir a chave.",
    "Analisar entradas quase ordenadas."
  ],
  "opening": {
    "title": "Como ordenar uma mão de cartas?",
    "lead": "Pegue um valor e insira-o entre os que já estão ordenados.",
    "detail": "Insertion Sort preserva uma parte ordenada e amplia esse prefixo a cada passo.",
    "keywords": [
      "chave",
      "inserção",
      "prefixo"
    ]
  },
  "concepts": [
    {
      "title": "O primeiro item já é um prefixo",
      "lead": "Um vetor com um elemento está ordenado.",
      "detail": "A partir da segunda posição, cada valor deve ser inserido no trecho anterior.",
      "keywords": [
        "prefixo",
        "invariante",
        "posição"
      ]
    },
    {
      "title": "Desloque até achar espaço",
      "lead": "Os elementos maiores que a chave se movem à direita.",
      "detail": "A chave ocupa a posição livre após o último valor menor ou igual.",
      "keywords": [
        "comparar",
        "deslocar",
        "inserir"
      ]
    },
    {
      "title": "Quase ordenados são favoráveis",
      "lead": "Insertion Sort pode chegar a O(n) para entradas já ordenadas.",
      "detail": "No pior caso, deslocamentos sucessivos produzem O(n²); o método é estável.",
      "keywords": [
        "O(n) melhor caso",
        "O(n²) pior",
        "estável"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Chave",
        "detail": "Item que será inserido.",
        "kicker": "Estado",
        "tone": "blue"
      },
      {
        "title": "Deslocamento",
        "detail": "Abre espaço no prefixo.",
        "kicker": "Ação",
        "tone": "orange"
      },
      {
        "title": "Inserção",
        "detail": "Posiciona a chave.",
        "kicker": "Ação",
        "tone": "green"
      }
    ],
    [
      {
        "title": "Melhor caso",
        "detail": "Lista já ordenada: O(n).",
        "kicker": "Tempo",
        "tone": "green"
      },
      {
        "title": "Pior caso",
        "detail": "Ordem inversa: O(n²).",
        "kicker": "Tempo",
        "tone": "orange"
      },
      {
        "title": "Estabilidade",
        "detail": "Preserva a ordem de valores iguais.",
        "kicker": "Qualidade",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é a chave?",
      "prompt": "No Insertion Sort, a chave é:",
      "answers": [
        "Elemento a inserir",
        "Maior valor obrigatório",
        "Índice fixo final"
      ],
      "correct": 0,
      "explanation": "A chave é comparada ao prefixo para ser inserida."
    },
    {
      "title": "Por que deslocar?",
      "prompt": "Se a chave é menor que o valor anterior:",
      "answers": [
        "Mover maior valor à direita",
        "Excluir a chave",
        "Encerrar toda execução"
      ],
      "correct": 0,
      "explanation": "Deslocamento abre espaço para a chave."
    },
    {
      "title": "Qual resultado?",
      "prompt": "Insira 2 no prefixo [1,3,5].",
      "answers": [
        "[1,3,5,2]",
        "[1,2,3,5]",
        "[2,1,3,5]"
      ],
      "correct": 1,
      "explanation": "Desloque 5 e 3 para inserir 2 após 1."
    },
    {
      "title": "Qual melhor caso?",
      "prompt": "Insertion Sort sobre uma lista já ordenada.",
      "answers": [
        "O(n²) obrigatoriamente",
        "O(log n)",
        "O(n)"
      ],
      "correct": 2,
      "explanation": "Há uma comparação por item, sem deslocamentos relevantes."
    }
  ],
  "primary": "insertion-sort",
  "practice": [
    {
      "title": "Insira uma carta",
      "problem": "Insira 3 em [1,2,5,6].",
      "steps": [
        "Guarde a chave 3.",
        "Compare com 6 e 5.",
        "Desloque os valores maiores.",
        "Insira após o 2."
      ],
      "success": [
        "Chave preservada",
        "Deslocamentos corretos",
        "Prefixo ordenado"
      ],
      "minutes": 25
    },
    {
      "title": "Rastreie a invariante",
      "problem": "Ordene [4,1,3,2].",
      "steps": [
        "Considere o primeiro item ordenado.",
        "Insira 1.",
        "Insira 3 e depois 2.",
        "Confira o prefixo após cada etapa."
      ],
      "success": [
        "Prefixos registrados",
        "Valores sem perda",
        "Saída ordenada"
      ],
      "minutes": 35
    },
    {
      "title": "Compare entradas",
      "problem": "Teste uma lista ordenada e outra inversa.",
      "steps": [
        "Defina dois vetores de mesmo tamanho.",
        "Conte os deslocamentos.",
        "Compare o número de operações.",
        "Explique a diferença de custo."
      ],
      "success": [
        "Dois casos",
        "Diferença observada",
        "Análise coerente"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Ordenar incrementa um prefixo",
    "lead": "Insertion Sort mantém uma invariante clara.",
    "detail": "Cada iteração amplia a região ordenada sem perder nenhum valor.",
    "keywords": [
      "prefixo",
      "chave",
      "estabilidade"
    ]
  },
  "checklist": [
    "Identifico a chave.",
    "Desloco elementos maiores.",
    "Insiro na posição correta.",
    "Acompanho o prefixo.",
    "Reconheço melhor e pior caso."
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
