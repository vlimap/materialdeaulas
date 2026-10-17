import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson12 = makeAlgorithmLesson({
  "number": 12,
  "slug": "aula-12-gulosos-programacao-dinamica-projeto",
  "title": "Algoritmos gulosos, programação dinâmica e projeto final",
  "short": "Gulosos e dinâmica",
  "subtitle": "Escolhas locais, subproblemas e uma solução final.",
  "objectives": [
    "Reconhecer estratégia gulosa.",
    "Compreender reutilização de resultados.",
    "Comparar estratégias e limitações.",
    "Elaborar e testar um projeto integrador."
  ],
  "opening": {
    "title": "Como escolher uma estratégia?",
    "lead": "Alguns problemas permitem decisões locais; outros exigem guardar soluções parciais.",
    "detail": "Estratégias gulosas e programação dinâmica resolvem classes diferentes de problemas.",
    "keywords": [
      "guloso",
      "subproblema",
      "memória"
    ]
  },
  "concepts": [
    {
      "title": "Guloso escolhe o melhor agora",
      "lead": "No troco com moedas 10, 5 e 1, pegue sempre a maior possível.",
      "detail": "Esse método funciona neste sistema de moedas, mas pode falhar em outros.",
      "keywords": [
        "escolha local",
        "moedas",
        "limitação"
      ]
    },
    {
      "title": "Dinâmica reutiliza respostas",
      "lead": "No Fibonacci, F(n) depende de F(n-1) e F(n-2).",
      "detail": "Guardar os resultados anteriores evita recalcular os mesmos subproblemas.",
      "keywords": [
        "memorização",
        "tabela",
        "reuso"
      ]
    },
    {
      "title": "Compare antes de aplicar",
      "lead": "Uma estratégia não é universalmente correta ou ótima.",
      "detail": "Descreva regras, restrições e critérios de teste para justificar a solução.",
      "keywords": [
        "correção",
        "otimalidade",
        "testes"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Guloso",
        "detail": "Escolhe uma opção local por etapa.",
        "kicker": "Técnica",
        "tone": "blue"
      },
      {
        "title": "Dinâmico",
        "detail": "Guarda resultados intermediários.",
        "kicker": "Técnica",
        "tone": "green"
      },
      {
        "title": "Projeto",
        "detail": "Define e valida comportamento.",
        "kicker": "Aplicação",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Troco",
        "detail": "Pode falhar fora de sistemas adequados.",
        "kicker": "Contraexemplo",
        "tone": "orange"
      },
      {
        "title": "Fibonacci",
        "detail": "Tabela reduz recomputação.",
        "kicker": "O(n)",
        "tone": "green"
      },
      {
        "title": "Validação",
        "detail": "Testes confirmam as regras do problema.",
        "kicker": "Critério",
        "tone": "blue"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é escolha gulosa?",
      "prompt": "Qual alternativa descreve a ideia?",
      "answers": [
        "Melhor escolha local a cada etapa",
        "Recalcular sempre tudo",
        "Visitar grafos sem condição"
      ],
      "correct": 0,
      "explanation": "Um guloso usa uma escolha local, que nem sempre leva ao ótimo global."
    },
    {
      "title": "Para que guardar subproblemas?",
      "prompt": "Em programação dinâmica:",
      "answers": [
        "Evitar recomputação",
        "Apagar entradas",
        "Aumentar recursões duplicadas"
      ],
      "correct": 0,
      "explanation": "Reutilizar resultados reduz trabalho."
    },
    {
      "title": "Qual é F(5)?",
      "prompt": "Considere F(0)=0 e F(1)=1.",
      "answers": [
        "3",
        "5",
        "8"
      ],
      "correct": 1,
      "explanation": "A sequência é 0, 1, 1, 2, 3, 5.",
      "code": "F[0] ← 0\nF[1] ← 1\nPARA i DE 2 ATÉ 5\n    F[i] ← F[i-1] + F[i-2]"
    },
    {
      "title": "Guloso é sempre ótimo?",
      "prompt": "Um conjunto arbitrário de moedas garante o menor número de moedas?",
      "answers": [
        "Sim, sempre",
        "Não; depende das moedas",
        "Só depende da tela"
      ],
      "correct": 1,
      "explanation": "Com moedas [4,3,1] e total 6, escolher 4+1+1 usa três; 3+3 usa duas."
    }
  ],
  "primary": "greedy",
  "secondary": "dynamic-programming",
  "practice": [
    {
      "title": "Faça troco guloso",
      "problem": "Use moedas de 10, 5 e 1 para valor 16.",
      "steps": [
        "Escolha a maior moeda possível.",
        "Atualize o valor restante.",
        "Repita até chegar a zero.",
        "Registre 10+5+1."
      ],
      "success": [
        "Troco completo",
        "Restante zero",
        "Três moedas"
      ],
      "minutes": 25
    },
    {
      "title": "Reutilize Fibonacci",
      "problem": "Calcule a tabela até F(6).",
      "steps": [
        "Defina F(0) e F(1).",
        "Some os dois valores anteriores.",
        "Registre cada resultado.",
        "Confira F(6)=8."
      ],
      "success": [
        "Tabela completa",
        "Sem recomputação",
        "Saída 8"
      ],
      "minutes": 35
    },
    {
      "title": "Projeto final: alocação",
      "problem": "Defina algoritmo de distribuição de recursos.",
      "steps": [
        "Descreva demanda, limite e restrições.",
        "Escolha estratégia e justifique.",
        "Escreva pseudocódigo e rastreamento.",
        "Teste sucesso, falha e caso-limite."
      ],
      "success": [
        "Problema delimitado",
        "Estratégia argumentada",
        "Três testes documentados"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Não existe algoritmo universal",
    "lead": "A solução precisa respeitar a estrutura do problema.",
    "detail": "Comparar correção, custo, memória e restrições ajuda a selecionar o método.",
    "keywords": [
      "estratégia",
      "reuso",
      "evidência"
    ]
  },
  "checklist": [
    "Explico escolha gulosa.",
    "Reconheço um contraexemplo.",
    "Monto tabela dinâmica.",
    "Comparo custos e restrições.",
    "Valido um projeto com testes."
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
