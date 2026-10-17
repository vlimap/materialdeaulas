import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson05 = makeAlgorithmLesson({
  "number": 5,
  "slug": "aula-05-busca-binaria",
  "title": "Busca binária e divisão do intervalo",
  "short": "Busca binária",
  "subtitle": "Reduza pela metade a região pesquisada.",
  "objectives": [
    "Identificar pré-condição de ordenação.",
    "Calcular o índice médio.",
    "Atualizar os limites.",
    "Explicar O(log n)."
  ],
  "opening": {
    "title": "É possível buscar mais rápido?",
    "lead": "Dados ordenados permitem descartar regiões inteiras.",
    "detail": "A busca binária compara o alvo ao elemento central e preserva somente a metade que ainda pode conter a resposta.",
    "keywords": [
      "ordenado",
      "meio",
      "limites"
    ]
  },
  "concepts": [
    {
      "title": "A ordem dos dados é obrigatória",
      "lead": "Busque em uma sequência crescente.",
      "detail": "Sem ordenação prévia, eliminar metade da lista pode descartar o valor procurado.",
      "keywords": [
        "pré-condição",
        "crescente",
        "busca"
      ]
    },
    {
      "title": "Cada comparação elimina uma metade",
      "lead": "Se o alvo é maior que o meio, avance o início.",
      "detail": "Se é menor, recue o fim. Se é igual, termine retornando o índice.",
      "keywords": [
        "inicio",
        "meio",
        "fim"
      ]
    },
    {
      "title": "O(log n) cresce lentamente",
      "lead": "Dobrar a quantidade de elementos acrescenta poucas comparações.",
      "detail": "Cuidado: ordenar uma lista apenas para uma busca também tem custo.",
      "keywords": [
        "logaritmo",
        "custo",
        "pré-processamento"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Início",
        "detail": "Primeiro índice do intervalo.",
        "kicker": "Limite",
        "tone": "blue"
      },
      {
        "title": "Meio",
        "detail": "Divisão inteira de início + fim.",
        "kicker": "Comparação",
        "tone": "green"
      },
      {
        "title": "Fim",
        "detail": "Último índice ainda pesquisado.",
        "kicker": "Limite",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Ordenada",
        "detail": "Pré-condição para descartar metades.",
        "kicker": "Dados",
        "tone": "blue"
      },
      {
        "title": "Busca",
        "detail": "O(log n) no pior caso.",
        "kicker": "Tempo",
        "tone": "green"
      },
      {
        "title": "Pré-ordenação",
        "detail": "Também demanda trabalho.",
        "kicker": "Custo total",
        "tone": "orange"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Qual pré-condição?",
      "prompt": "Para aplicar corretamente a busca binária:",
      "answers": [
        "Lista ordenada",
        "Lista colorida",
        "Todos os itens iguais"
      ],
      "correct": 0,
      "explanation": "A ordem permite descartar uma metade sem perder candidatos."
    },
    {
      "title": "Quando olhar à direita?",
      "prompt": "O elemento central é menor que o alvo.",
      "answers": [
        "Buscar apenas à esquerda",
        "Buscar apenas à direita",
        "Encerrar imediatamente"
      ],
      "correct": 1,
      "explanation": "Valores menores podem ser descartados."
    },
    {
      "title": "Onde está o 8?",
      "prompt": "Use índices iniciados em zero.",
      "answers": [
        "Índice 2",
        "Índice 3",
        "Índice 4"
      ],
      "correct": 1,
      "explanation": "O 8 ocupa o índice 3.",
      "code": "lista ← [2,4,6,8,10,12,14]\nmeio ← piso((0 + 6) / 2)\nCOMPARAR lista[meio] COM 8"
    },
    {
      "title": "Qual complexidade?",
      "prompt": "Busca binária em uma lista ordenada.",
      "answers": [
        "O(n²)",
        "O(log n)",
        "O(n) sempre"
      ],
      "correct": 1,
      "explanation": "A região de busca cai aproximadamente pela metade em cada iteração."
    }
  ],
  "primary": "binary-search",
  "practice": [
    {
      "title": "Localize o valor central",
      "problem": "Busque 10 em [2,4,6,8,10,12,14].",
      "steps": [
        "Determine início 0 e fim 6.",
        "Calcule meio 3.",
        "Compare 8 com 10.",
        "Busque na metade direita."
      ],
      "success": [
        "Intervalo correto",
        "Meio identificado",
        "Descarte seguro"
      ],
      "minutes": 25
    },
    {
      "title": "Teste limites",
      "problem": "Busque o primeiro e o último elemento.",
      "steps": [
        "Procure 2.",
        "Procure 14.",
        "Registre início, meio e fim.",
        "Confirme os índices 0 e 6."
      ],
      "success": [
        "Dois casos testados",
        "Índices corretos",
        "Limites atualizados"
      ],
      "minutes": 35
    },
    {
      "title": "Compare duas buscas",
      "problem": "Escolha busca linear ou binária.",
      "steps": [
        "Descreva uma lista não ordenada.",
        "Descreva uma lista ordenada.",
        "Compare o custo das buscas.",
        "Considere o custo de ordenar primeiro."
      ],
      "success": [
        "Condições explícitas",
        "Complexidades corretas",
        "Escolha justificada"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Ordenação permite reduzir tentativas",
    "lead": "A busca binária não verifica cada posição.",
    "detail": "Cada etapa conserva somente os valores que ainda podem ser a resposta.",
    "keywords": [
      "dividir",
      "comparar",
      "reduzir"
    ]
  },
  "checklist": [
    "Verifico a ordenação.",
    "Calculo o meio.",
    "Atualizo os limites.",
    "Trato a ausência.",
    "Explico O(log n)."
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
