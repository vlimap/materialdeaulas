import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson09 = makeAlgorithmLesson({
  "number": 9,
  "slug": "aula-09-quick-sort",
  "title": "Quick Sort e particionamento",
  "short": "Quick Sort",
  "subtitle": "Escolha um pivô, particione e ordene recursivamente.",
  "objectives": [
    "Explicar o papel do pivô.",
    "Executar uma partição.",
    "Rastrear limites recursivos.",
    "Comparar caso médio e pior caso."
  ],
  "opening": {
    "title": "Como ordenar em torno de uma referência?",
    "lead": "Quick Sort escolhe um pivô para reorganizar a lista.",
    "detail": "Valores menores ou iguais ficam à esquerda; os maiores, à direita, antes das chamadas recursivas.",
    "keywords": [
      "pivô",
      "partição",
      "recursão"
    ]
  },
  "concepts": [
    {
      "title": "A partição organiza grupos",
      "lead": "Compare cada elemento com o pivô escolhido.",
      "detail": "Após posicionar o pivô, ele já ocupa sua posição definitiva na ordem.",
      "keywords": [
        "comparar",
        "trocar",
        "posicionar"
      ]
    },
    {
      "title": "Ordene cada subintervalo",
      "lead": "Execute a mesma estratégia à esquerda e à direita do pivô.",
      "detail": "Subvetores com zero ou um elemento são casos-base.",
      "keywords": [
        "subproblema",
        "caso-base",
        "limites"
      ]
    },
    {
      "title": "Pivôs ruins degradam o desempenho",
      "lead": "O caso médio é O(n log n); o pior pode chegar a O(n²).",
      "detail": "Pivôs que geram divisões muito desequilibradas causam mais trabalho e profundidade.",
      "keywords": [
        "equilíbrio",
        "pior caso",
        "O(n log n)"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Pivô",
        "detail": "Referência para dividir o vetor.",
        "kicker": "Escolha",
        "tone": "blue"
      },
      {
        "title": "Partição",
        "detail": "Separa grupos menores e maiores.",
        "kicker": "Organização",
        "tone": "green"
      },
      {
        "title": "Recursão",
        "detail": "Ordena os dois subintervalos.",
        "kicker": "Execução",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Média",
        "detail": "O(n log n) esperado em condições usuais.",
        "kicker": "Tempo",
        "tone": "green"
      },
      {
        "title": "Pior",
        "detail": "O(n²) com partições desequilibradas.",
        "kicker": "Tempo",
        "tone": "orange"
      },
      {
        "title": "Estabilidade",
        "detail": "Versão tradicional não estável.",
        "kicker": "Propriedade",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é o pivô?",
      "prompt": "Em Quick Sort, sua função é:",
      "answers": [
        "Separar valores em grupos",
        "Somar todo o vetor",
        "Representar o índice zero"
      ],
      "correct": 0,
      "explanation": "O pivô orienta a partição."
    },
    {
      "title": "O pivô precisa ser a mediana?",
      "prompt": "Qual afirmação é correta?",
      "answers": [
        "Sempre",
        "Não; pode ser escolhido por estratégia",
        "O pivô não participa da ordenação"
      ],
      "correct": 1,
      "explanation": "O algoritmo funciona com diferentes escolhas de pivô, embora o custo varie."
    },
    {
      "title": "Após a partição, o que vale?",
      "prompt": "Para ordenação crescente e pivô em sua posição:",
      "answers": [
        "Menores à esquerda; maiores à direita",
        "Tudo à esquerda é maior",
        "Todos os itens já estão ordenados"
      ],
      "correct": 0,
      "explanation": "A partição posiciona o pivô; as regiões ainda podem precisar de ordenação."
    },
    {
      "title": "Qual é o pior caso?",
      "prompt": "Para partições extremamente desequilibradas:",
      "answers": [
        "O(1)",
        "O(log n)",
        "O(n²)"
      ],
      "correct": 2,
      "explanation": "O desequilíbrio pode elevar o número de comparações."
    }
  ],
  "primary": "quick-sort",
  "practice": [
    {
      "title": "Particione um vetor",
      "problem": "Use pivô 4 em [5,2,4,1].",
      "steps": [
        "Defina a regra de partição.",
        "Separe valores <= 4.",
        "Posicione o pivô.",
        "Identifique os subvetores."
      ],
      "success": [
        "Grupos coerentes",
        "Pivô posicionado",
        "Limites definidos"
      ],
      "minutes": 25
    },
    {
      "title": "Rastreie duas chamadas",
      "problem": "Execute Quick Sort com quatro itens.",
      "steps": [
        "Registre a primeira partição.",
        "Identifique o intervalo esquerdo.",
        "Identifique o intervalo direito.",
        "Encerre nos casos-base."
      ],
      "success": [
        "Partições documentadas",
        "Chamadas finitas",
        "Saída crescente"
      ],
      "minutes": 35
    },
    {
      "title": "Compare estratégias",
      "problem": "Analise escolha de primeiro ou último pivô.",
      "steps": [
        "Teste vetor crescente.",
        "Teste vetor embaralhado.",
        "Observe o equilíbrio das partições.",
        "Explique o risco do pior caso."
      ],
      "success": [
        "Duas entradas",
        "Divisões comparadas",
        "Complexidade analisada"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "O pivô decide a qualidade da divisão",
    "lead": "Quick Sort combina partição e recursão.",
    "detail": "O desempenho é favorável na média, mas depende do equilíbrio entre subproblemas.",
    "keywords": [
      "pivô",
      "partição",
      "recursão"
    ]
  },
  "checklist": [
    "Identifico um pivô.",
    "Separo por comparação.",
    "Rastreio subintervalos.",
    "Conheço o caso-base.",
    "Distingo média e pior caso."
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
