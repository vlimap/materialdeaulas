import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson04 = makeAlgorithmLesson({
  "number": 4,
  "slug": "aula-04-busca-linear",
  "title": "Busca linear e condições de término",
  "short": "Busca linear",
  "subtitle": "Encontre um valor sem exigir dados ordenados.",
  "objectives": [
    "Executar busca sequencial.",
    "Retornar índice ou ausência.",
    "Distinguir melhor e pior caso.",
    "Testar alvo inexistente."
  ],
  "opening": {
    "title": "Como encontrar um item?",
    "lead": "Uma lista não ordenada pode ser pesquisada posição por posição.",
    "detail": "A busca linear compara cada valor com o alvo até encontrá-lo ou chegar ao fim.",
    "keywords": [
      "alvo",
      "comparar",
      "índice"
    ]
  },
  "concepts": [
    {
      "title": "Visite uma posição de cada vez",
      "lead": "A comparação começa no índice zero.",
      "detail": "Quando o valor coincidir com o alvo, retorne sua posição.",
      "keywords": [
        "percurso",
        "comparação",
        "índice"
      ]
    },
    {
      "title": "Encontrar não é garantido",
      "lead": "Se o percurso termina sem igualdade, retorne não encontrado.",
      "detail": "O algoritmo precisa distinguir a ausência de um resultado válido.",
      "keywords": [
        "ausência",
        "sentinela",
        "limite"
      ]
    },
    {
      "title": "O custo depende da posição",
      "lead": "O primeiro item exige uma comparação; o último pode exigir n.",
      "detail": "Sem ordenação, o pior caso é O(n).",
      "keywords": [
        "melhor caso",
        "pior caso",
        "O(n)"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Alvo",
        "detail": "Valor que se deseja localizar.",
        "kicker": "Entrada",
        "tone": "blue"
      },
      {
        "title": "Índice",
        "detail": "Posição do elemento encontrado.",
        "kicker": "Saída",
        "tone": "green"
      },
      {
        "title": "Ausência",
        "detail": "Nenhuma comparação corresponde.",
        "kicker": "Saída",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Melhor caso",
        "detail": "Encontrar na primeira posição.",
        "kicker": "O(1)",
        "tone": "green"
      },
      {
        "title": "Pior caso",
        "detail": "Último item ou ausência.",
        "kicker": "O(n)",
        "tone": "orange"
      },
      {
        "title": "Memória",
        "detail": "Algumas variáveis auxiliares.",
        "kicker": "O(1)",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Precisa ordenar?",
      "prompt": "A busca linear exige uma lista previamente ordenada?",
      "answers": [
        "Sim",
        "Não",
        "Somente com números pares"
      ],
      "correct": 1,
      "explanation": "A busca linear funciona sobre listas não ordenadas."
    },
    {
      "title": "Quando encerrar?",
      "prompt": "Em caso de igualdade, qual ação é adequada?",
      "answers": [
        "Continuar sem necessidade",
        "Retornar o índice encontrado",
        "Ignorar o valor"
      ],
      "correct": 1,
      "explanation": "Uma correspondência permite encerrar a busca."
    },
    {
      "title": "Onde está o 6?",
      "prompt": "A lista utiliza índices a partir de zero.",
      "answers": [
        "Índice 1",
        "Índice 2",
        "Índice 3"
      ],
      "correct": 1,
      "explanation": "Em [8, 3, 6, 1], o 6 está no índice 2.",
      "code": "lista ← [8, 3, 6, 1]\nPARA i DE 0 ATÉ 3\n    SE lista[i] = 6: RETORNAR i"
    },
    {
      "title": "Qual caso é mais caro?",
      "prompt": "Lista com n valores, alvo ausente.",
      "answers": [
        "O(1)",
        "O(n)",
        "O(log n)"
      ],
      "correct": 1,
      "explanation": "É preciso percorrer a lista inteira para confirmar ausência."
    }
  ],
  "primary": "linear-search",
  "practice": [
    {
      "title": "Encontre um produto",
      "problem": "Busque código 6 na lista [8,3,6,1].",
      "steps": [
        "Inicie no índice zero.",
        "Compare cada valor.",
        "Pare quando encontrar.",
        "Registre índice 2."
      ],
      "success": [
        "Comparações registradas",
        "Término correto",
        "Índice identificado"
      ],
      "minutes": 25
    },
    {
      "title": "Teste ausência",
      "problem": "Procure 5 na mesma lista.",
      "steps": [
        "Execute cada comparação.",
        "Verifique o final da lista.",
        "Retorne não encontrado.",
        "Conte comparações realizadas."
      ],
      "success": [
        "Quatro verificações",
        "Ausência tratada",
        "Sem índice fictício"
      ],
      "minutes": 35
    },
    {
      "title": "Construa o pseudocódigo",
      "problem": "Implemente busca de um nome em lista.",
      "steps": [
        "Defina entrada e alvo.",
        "Use um laço por índice.",
        "Retorne ao encontrar.",
        "Retorne ausência fora do laço."
      ],
      "success": [
        "Índices corretos",
        "Término definido",
        "Dois testes"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Busca linear é simples e geral",
    "lead": "Ela funciona sem pré-ordenação, mas pode percorrer tudo.",
    "detail": "O caso de ausência revela o limite do custo linear.",
    "keywords": [
      "comparar",
      "encontrar",
      "ausente"
    ]
  },
  "checklist": [
    "Começo no índice zero.",
    "Percorro posições válidas.",
    "Paro quando encontro.",
    "Trato ausência.",
    "Identifico O(n)."
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
