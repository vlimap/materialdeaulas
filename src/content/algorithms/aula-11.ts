import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson11 = makeAlgorithmLesson({
  "number": 11,
  "slug": "aula-11-grafos-bfs-dfs",
  "title": "Grafos e percursos BFS e DFS",
  "short": "Grafos, BFS e DFS",
  "subtitle": "Explore conexões usando fila ou pilha.",
  "objectives": [
    "Modelar vértices e arestas.",
    "Executar BFS com fila.",
    "Executar DFS com pilha.",
    "Analisar visitas O(V+E)."
  ],
  "opening": {
    "title": "Como explorar conexões?",
    "lead": "Redes sociais, mapas e dependências podem ser grafos.",
    "detail": "Um grafo reúne vértices ligados por arestas. Um percurso visita nós seguindo as conexões.",
    "keywords": [
      "vértice",
      "aresta",
      "percurso"
    ]
  },
  "concepts": [
    {
      "title": "Grafo é estrutura de relações",
      "lead": "Os vértices representam entidades; arestas representam ligações.",
      "detail": "Uma lista de adjacência indica quais são os vizinhos de cada vértice.",
      "keywords": [
        "grafo",
        "vizinhos",
        "adjacência"
      ]
    },
    {
      "title": "BFS percorre em camadas",
      "lead": "A fila retira primeiro o elemento mais antigo.",
      "detail": "Em grafos não ponderados, BFS encontra caminhos com menor número de arestas.",
      "keywords": [
        "fila",
        "camadas",
        "BFS"
      ]
    },
    {
      "title": "DFS aprofunda antes de voltar",
      "lead": "A pilha retira primeiro o elemento inserido mais recentemente.",
      "detail": "Ambos requerem marcação de visitados para evitar ciclos e repetições.",
      "keywords": [
        "pilha",
        "DFS",
        "visitados"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Vértice",
        "detail": "Uma pessoa, cidade ou tarefa.",
        "kicker": "Nó",
        "tone": "blue"
      },
      {
        "title": "Aresta",
        "detail": "Ligação entre dois vértices.",
        "kicker": "Relação",
        "tone": "green"
      },
      {
        "title": "Adjacência",
        "detail": "Representação dos vizinhos.",
        "kicker": "Estrutura",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "BFS",
        "detail": "Usa fila, expande por níveis.",
        "kicker": "Busca em largura",
        "tone": "blue"
      },
      {
        "title": "DFS",
        "detail": "Usa pilha ou recursão.",
        "kicker": "Busca em profundidade",
        "tone": "green"
      },
      {
        "title": "Ambos",
        "detail": "Visitam V vértices e E arestas.",
        "kicker": "O(V+E)",
        "tone": "orange"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é um vértice?",
      "prompt": "Em um grafo:",
      "answers": [
        "Uma entidade representada por um nó",
        "Uma comparação booleana",
        "O índice de um vetor ordenado"
      ],
      "correct": 0,
      "explanation": "Vértices representam entidades."
    },
    {
      "title": "Qual estrutura BFS utiliza?",
      "prompt": "Uma versão iterativa típica de BFS usa:",
      "answers": [
        "Fila",
        "Pilha apenas",
        "Árvore binária obrigatória"
      ],
      "correct": 0,
      "explanation": "BFS mantém uma fila para expansão por camadas."
    },
    {
      "title": "O que evita visitar repetidamente?",
      "prompt": "Grafo com ciclos deve usar:",
      "answers": [
        "Um conjunto de visitados",
        "Apenas contador de tempo",
        "Ordenação de números"
      ],
      "correct": 0,
      "explanation": "O conjunto de visitados evita retornos indefinidos."
    },
    {
      "title": "Custo de percursos?",
      "prompt": "Para lista de adjacência, BFS e DFS são:",
      "answers": [
        "O(V²) sempre",
        "O(V+E)",
        "O(1)"
      ],
      "correct": 1,
      "explanation": "Cada vértice e aresta é processado um número limitado de vezes."
    }
  ],
  "primary": "graph-bfs",
  "secondary": "graph-dfs",
  "practice": [
    {
      "title": "Desenhe um grafo",
      "problem": "Monte relações entre cinco cidades.",
      "steps": [
        "Defina cinco vértices.",
        "Ligue cidades com arestas.",
        "Liste os vizinhos.",
        "Indique um vértice inicial."
      ],
      "success": [
        "Grafo conectado",
        "Vizinhos corretos",
        "Partida definida"
      ],
      "minutes": 25
    },
    {
      "title": "Simule BFS",
      "problem": "Percorra os vértices por camadas.",
      "steps": [
        "Inicie uma fila.",
        "Visite o primeiro vértice.",
        "Acrescente vizinhos não visitados.",
        "Registre a ordem resultante."
      ],
      "success": [
        "Fila acompanhada",
        "Sem visitas duplicadas",
        "Ordem registrada"
      ],
      "minutes": 35
    },
    {
      "title": "Compare BFS e DFS",
      "problem": "Use o mesmo grafo e ponto de partida.",
      "steps": [
        "Rastreie BFS.",
        "Rastreie DFS.",
        "Compare ordens de visita.",
        "Indique qual encontra caminho mínimo sem pesos."
      ],
      "success": [
        "Dois percursos",
        "Fila versus pilha",
        "Propriedade BFS"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Grafos conectam problemas reais",
    "lead": "BFS e DFS percorrem a mesma estrutura de modos distintos.",
    "detail": "A escolha depende do objetivo: camadas, caminhos ou exploração aprofundada.",
    "keywords": [
      "grafo",
      "BFS",
      "DFS"
    ]
  },
  "checklist": [
    "Distingo vértices e arestas.",
    "Leio vizinhos.",
    "Simulo fila no BFS.",
    "Simulo pilha no DFS.",
    "Uso conjunto de visitados."
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
