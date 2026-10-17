import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson10 = makeAlgorithmLesson({
  "number": 10,
  "slug": "aula-10-recursao-e-pilha",
  "title": "Recursão, pilha de chamadas e caso-base",
  "short": "Recursão e pilha",
  "subtitle": "Resolva um problema por versões menores dele mesmo.",
  "objectives": [
    "Definir caso-base.",
    "Acompanhar chamadas recursivas.",
    "Interpretar retornos da pilha.",
    "Estimar profundidade de execução."
  ],
  "opening": {
    "title": "Uma função pode chamar a si mesma?",
    "lead": "Uma função recursiva reduz o problema até chegar ao caso-base.",
    "detail": "As chamadas pendentes ficam na pilha e são resolvidas no retorno.",
    "keywords": [
      "chamada",
      "caso-base",
      "retorno"
    ]
  },
  "concepts": [
    {
      "title": "O caso-base interrompe a recursão",
      "lead": "fatorial(1) devolve 1 sem nova chamada.",
      "detail": "Sem progresso rumo ao caso-base, a função pode exceder a pilha.",
      "keywords": [
        "parada",
        "terminação",
        "segurança"
      ]
    },
    {
      "title": "Chamadas ficam pendentes",
      "lead": "fatorial(4) precisa do retorno de fatorial(3).",
      "detail": "O desempilhamento combina os valores até produzir o resultado final.",
      "keywords": [
        "pilha",
        "desempilhar",
        "multiplicar"
      ]
    },
    {
      "title": "Profundidade também custa memória",
      "lead": "O fatorial recursivo usa O(n) de pilha.",
      "detail": "A implementação iterativa pode alcançar O(1) de memória auxiliar para o mesmo cálculo.",
      "keywords": [
        "profundidade",
        "tempo O(n)",
        "espaço"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Base",
        "detail": "Resposta imediata para caso simples.",
        "kicker": "Parada",
        "tone": "blue"
      },
      {
        "title": "Recursivo",
        "detail": "Chamada para problema menor.",
        "kicker": "Progresso",
        "tone": "green"
      },
      {
        "title": "Retorno",
        "detail": "Combina respostas pendentes.",
        "kicker": "Resultado",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Tempo",
        "detail": "Fatorial visita n níveis.",
        "kicker": "O(n)",
        "tone": "blue"
      },
      {
        "title": "Pilha",
        "detail": "Há chamadas pendentes.",
        "kicker": "O(n) espaço",
        "tone": "orange"
      },
      {
        "title": "Iteração",
        "detail": "Alternativa com estado explícito.",
        "kicker": "O(1) extra",
        "tone": "green"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Por que definir caso-base?",
      "prompt": "Qual é sua função?",
      "answers": [
        "Encerrar as chamadas",
        "Aumentar o número de chamadas",
        "Trocar o valor de n aleatoriamente"
      ],
      "correct": 0,
      "explanation": "O caso-base impede recursão infinita."
    },
    {
      "title": "O que vem antes do retorno?",
      "prompt": "Em fatorial(4), para retornar, a função precisa resolver:",
      "answers": [
        "fatorial(3)",
        "fatorial(100)",
        "Nenhuma chamada"
      ],
      "correct": 0,
      "explanation": "O problema diminui de 4 para 3."
    },
    {
      "title": "Qual resultado?",
      "prompt": "Execute a função.",
      "answers": [
        "6",
        "24",
        "10"
      ],
      "correct": 1,
      "explanation": "4 × 3 × 2 × 1 = 24.",
      "code": "FATORIAL(n)\n    SE n <= 1: RETORNAR 1\n    RETORNAR n * FATORIAL(n-1)",
      "input": "n = 4"
    },
    {
      "title": "Qual espaço adicional?",
      "prompt": "Fatorial recursivo mantém até n chamadas pendentes:",
      "answers": [
        "O(1)",
        "O(log n) sempre",
        "O(n)"
      ],
      "correct": 2,
      "explanation": "A profundidade linear da pilha implica O(n) de espaço."
    }
  ],
  "primary": "factorial",
  "practice": [
    {
      "title": "Desenhe a pilha",
      "problem": "Rastreie fatorial(3).",
      "steps": [
        "Anote chamadas 3, 2 e 1.",
        "Identifique a condição de parada.",
        "Anote retornos de baixo para cima.",
        "Confira o resultado 6."
      ],
      "success": [
        "Três níveis",
        "Caso-base correto",
        "Retorno 6"
      ],
      "minutes": 25
    },
    {
      "title": "Compare com iteração",
      "problem": "Calcule fatorial sem recursão.",
      "steps": [
        "Inicie produto em 1.",
        "Multiplique de 1 até n.",
        "Teste n=4.",
        "Compare memória usada."
      ],
      "success": [
        "Produto 24",
        "Laço finito",
        "Comparação coerente"
      ],
      "minutes": 35
    },
    {
      "title": "Detecte recursão incorreta",
      "problem": "Analise função que nunca reduz n.",
      "steps": [
        "Localize a chamada recursiva.",
        "Confira se o argumento diminui.",
        "Adicione caso-base.",
        "Teste entradas 1, 2 e 3."
      ],
      "success": [
        "Progresso definido",
        "Parada alcançada",
        "Três testes"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Recursão precisa diminuir o problema",
    "lead": "O caso-base fornece uma resposta definitiva.",
    "detail": "A pilha conserva chamadas pendentes até que os resultados possam ser combinados.",
    "keywords": [
      "caso-base",
      "pilha",
      "retorno"
    ]
  },
  "checklist": [
    "Encontro caso-base.",
    "Identifico a chamada menor.",
    "Acompanho desempilhamento.",
    "Explico custo da pilha.",
    "Comparo com iteração."
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
