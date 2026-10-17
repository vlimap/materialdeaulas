import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson02 = makeAlgorithmLesson({
  "number": 2,
  "slug": "aula-02-correcao-e-invariantes",
  "title": "Correção de algoritmos e invariantes",
  "short": "Correção e invariantes",
  "subtitle": "Demonstre por que uma execução está correta.",
  "objectives": [
    "Definir pré e pós-condições.",
    "Explicar um invariante de laço.",
    "Testar estados intermediários.",
    "Identificar limites e defeitos."
  ],
  "opening": {
    "title": "Como saber se está correto?",
    "lead": "Um resultado certo em um exemplo não prova correção geral.",
    "detail": "Precisamos de condições claras e uma justificativa que se mantenha durante a execução.",
    "keywords": [
      "pré-condição",
      "pós-condição",
      "invariante"
    ]
  },
  "concepts": [
    {
      "title": "Pré-condições definem entradas válidas",
      "lead": "A lista deve existir e conter números para ser somada.",
      "detail": "A saída esperada é uma pós-condição: total igual à soma de todos os elementos.",
      "keywords": [
        "entrada válida",
        "garantia",
        "contrato"
      ]
    },
    {
      "title": "Invariante permanece verdadeiro",
      "lead": "Depois de i itens, total é a soma dos primeiros i valores.",
      "detail": "Essa afirmação vale antes do laço, após cada volta e no final.",
      "keywords": [
        "inicialização",
        "manutenção",
        "término"
      ]
    },
    {
      "title": "Casos-limite fortalecem os testes",
      "lead": "Verifique lista vazia, um item e múltiplos itens.",
      "detail": "Uma correção precisa preservar todos os casos, não apenas o exemplo que falhou.",
      "keywords": [
        "limite",
        "regressão",
        "evidência"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Antes",
        "detail": "Total é zero; nenhum item foi visitado.",
        "kicker": "Inicialização",
        "tone": "blue"
      },
      {
        "title": "Durante",
        "detail": "Total representa o prefixo percorrido.",
        "kicker": "Manutenção",
        "tone": "green"
      },
      {
        "title": "Depois",
        "detail": "Todo item entrou no total.",
        "kicker": "Término",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Pré-condição",
        "detail": "Estabelece restrições para a entrada.",
        "kicker": "Contrato",
        "tone": "blue"
      },
      {
        "title": "Pós-condição",
        "detail": "Define o resultado correto.",
        "kicker": "Contrato",
        "tone": "green"
      },
      {
        "title": "Teste",
        "detail": "Exercita casos concretos.",
        "kicker": "Evidência",
        "tone": "orange"
      }
    ]
  ],
  "quiz": [
    {
      "title": "O que é um invariante?",
      "prompt": "Escolha a afirmação correta.",
      "answers": [
        "Algo que continua válido durante o laço",
        "Um erro de sintaxe",
        "Um valor sempre crescente"
      ],
      "correct": 0,
      "explanation": "É uma propriedade preservada em cada iteração."
    },
    {
      "title": "Quando vale a invariante?",
      "prompt": "Qual sequência é necessária para argumentar a correção?",
      "answers": [
        "Somente depois do laço",
        "Antes, durante e ao terminar",
        "Somente no primeiro passo"
      ],
      "correct": 1,
      "explanation": "Inicialização, manutenção e término sustentam a demonstração."
    },
    {
      "title": "Qual total estará armazenado?",
      "prompt": "Após processar os dois primeiros itens:",
      "answers": [
        "2",
        "6",
        "7"
      ],
      "correct": 1,
      "explanation": "2 + 4 = 6; esse é o prefixo já somado.",
      "code": "total ← 0\nvalores ← [2, 4, 1]\ntotal ← total + valores[0]\ntotal ← total + valores[1]"
    },
    {
      "title": "O que é uma pós-condição?",
      "prompt": "Para uma soma, escolha um exemplo.",
      "answers": [
        "Os dados têm cor azul",
        "total equivale à soma dos itens",
        "Sempre usamos três variáveis"
      ],
      "correct": 1,
      "explanation": "Descreve o que deve ser verdadeiro ao concluir."
    }
  ],
  "primary": "invariant",
  "practice": [
    {
      "title": "Declare os contratos",
      "problem": "Defina o comportamento de uma soma.",
      "steps": [
        "Liste entradas aceitas.",
        "Descreva a pré-condição.",
        "Descreva a pós-condição.",
        "Teste com [1, 2, 3]."
      ],
      "success": [
        "Entradas válidas",
        "Contratos claros",
        "Total 6"
      ],
      "minutes": 25
    },
    {
      "title": "Demonstre uma invariante",
      "problem": "Acompanhe o total parcial.",
      "steps": [
        "Escreva o estado inicial.",
        "Observe dois incrementos.",
        "Explique por que o prefixo está correto.",
        "Mostre a saída ao terminar."
      ],
      "success": [
        "Inicialização justificada",
        "Manutenção justificada",
        "Término explicado"
      ],
      "minutes": 35
    },
    {
      "title": "Projete casos-limite",
      "problem": "Teste um acumulador com entradas variadas.",
      "steps": [
        "Considere lista vazia.",
        "Considere somente um item.",
        "Considere números negativos.",
        "Registre esperado e obtido."
      ],
      "success": [
        "Casos distintos",
        "Conferência manual",
        "Erros identificados"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Correção é uma propriedade",
    "lead": "Um invariante conecta os estados parciais à resposta final.",
    "detail": "Testes complementam a demonstração, mas não a substituem.",
    "keywords": [
      "contratos",
      "invariantes",
      "testes"
    ]
  },
  "checklist": [
    "Defino entradas válidas.",
    "Escrevo a pós-condição.",
    "Identifico um invariante.",
    "Explico sua preservação.",
    "Incluo casos-limite."
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
