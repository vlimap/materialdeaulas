import { makeAlgorithmLesson } from './lesson-builder';

export const algorithmsLesson01 = makeAlgorithmLesson({
  "number": 1,
  "slug": "aula-01-algoritmos-e-execucao",
  "title": "Algoritmos e execução passo a passo",
  "short": "Algoritmos na prática",
  "subtitle": "Da entrada às instruções e ao resultado.",
  "objectives": [
    "Distinguir problema e algoritmo.",
    "Identificar entradas e saídas.",
    "Rastrear o estado de variáveis.",
    "Conferir o término e o resultado."
  ],
  "opening": {
    "title": "Como um computador resolve uma tarefa?",
    "lead": "Ele executa uma sequência de instruções bem definidas.",
    "detail": "Para analisar a solução, observe o que muda em cada passo: entrada, estado e resultado.",
    "keywords": [
      "entrada",
      "estado",
      "saída"
    ]
  },
  "concepts": [
    {
      "title": "Um algoritmo transforma dados",
      "lead": "Cada instrução altera ou consulta informações.",
      "detail": "Rastrear variáveis permite conferir a evolução antes de implementar em qualquer linguagem.",
      "keywords": [
        "dados",
        "passos",
        "resultado"
      ]
    },
    {
      "title": "O estado muda na execução",
      "lead": "O acumulador começa em zero e recebe parcelas.",
      "detail": "A mesma ordem de comandos produz o mesmo resultado com a mesma entrada.",
      "keywords": [
        "acumulador",
        "atribuição",
        "execução"
      ]
    },
    {
      "title": "Um algoritmo precisa terminar",
      "lead": "A quantidade de passos deve ser finita para as entradas válidas.",
      "detail": "Uma condição de parada inadequada pode impedir a conclusão.",
      "keywords": [
        "finitude",
        "clareza",
        "teste"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Entrada",
        "detail": "Lista de números a somar.",
        "kicker": "Dados",
        "tone": "blue"
      },
      {
        "title": "Processamento",
        "detail": "Visitar cada elemento e somá-lo.",
        "kicker": "Passos",
        "tone": "green"
      },
      {
        "title": "Saída",
        "detail": "Exibir o total calculado.",
        "kicker": "Resultado",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Precisão",
        "detail": "Cada comando possui sentido claro.",
        "kicker": "Qualidade",
        "tone": "blue"
      },
      {
        "title": "Terminação",
        "detail": "O processo alcança o fim.",
        "kicker": "Qualidade",
        "tone": "green"
      },
      {
        "title": "Verificação",
        "detail": "O resultado pode ser testado.",
        "kicker": "Qualidade",
        "tone": "orange"
      }
    ]
  ],
  "quiz": [
    {
      "title": "Por onde começar?",
      "prompt": "Qual informação é necessária antes de executar?",
      "answers": [
        "Uma entrada definida",
        "Uma cor para a página",
        "Uma marca de computador"
      ],
      "correct": 0,
      "explanation": "É preciso conhecer os dados ou recursos utilizados."
    },
    {
      "title": "Qual ação altera o total?",
      "prompt": "Em total ← total + valor, o que acontece?",
      "answers": [
        "O valor é ignorado",
        "O valor é somado ao total",
        "O total sempre zera"
      ],
      "correct": 1,
      "explanation": "O valor atual do acumulador participa da nova atribuição."
    },
    {
      "title": "Qual saída será produzida?",
      "prompt": "Execute o pseudocódigo de cima para baixo.",
      "answers": [
        "5",
        "7",
        "9"
      ],
      "correct": 1,
      "explanation": "2 + 4 + 1 = 7.",
      "code": "total ← 0\nPARA valor EM [2, 4, 1]\n    total ← total + valor\nESCREVER total"
    },
    {
      "title": "O que garante o fim?",
      "prompt": "Ao percorrer uma lista finita, qual requisito importa?",
      "answers": [
        "Um próximo elemento infinito",
        "Um número definido de iterações",
        "Uma animação rápida"
      ],
      "correct": 1,
      "explanation": "Uma lista finita permite concluir quando seus itens terminam."
    }
  ],
  "primary": "walkthrough",
  "practice": [
    {
      "title": "Rastreie três números",
      "problem": "Some a lista [3, 2, 4] manualmente.",
      "steps": [
        "Inicie total com zero.",
        "Registre cada novo valor de total.",
        "Identifique quando a lista acaba.",
        "Compare com o esperado: 9."
      ],
      "success": [
        "Três visitas",
        "Estados registrados",
        "Saída 9"
      ],
      "minutes": 25
    },
    {
      "title": "Encontre instruções ambíguas",
      "problem": "Melhore uma receita de cálculo.",
      "steps": [
        "Escreva as entradas necessárias.",
        "Troque ações vagas por verbos precisos.",
        "Ordene as etapas.",
        "Teste com duas entradas."
      ],
      "success": [
        "Ações verificáveis",
        "Ordem correta",
        "Dois testes"
      ],
      "minutes": 35
    },
    {
      "title": "Planeje a soma de vendas",
      "problem": "Calcule o total de um pequeno carrinho.",
      "steps": [
        "Escolha quatro preços.",
        "Descreva o algoritmo com acumulador.",
        "Rastreie cada iteração.",
        "Compare obtido com cálculo manual."
      ],
      "success": [
        "Entrada documentada",
        "Rastreamento completo",
        "Total correto"
      ],
      "minutes": 45
    }
  ],
  "summary": {
    "title": "Rastrear revela o comportamento",
    "lead": "Entrada e instruções determinam o estado e a saída.",
    "detail": "Antes de otimizar, comprove que o algoritmo funciona para exemplos definidos.",
    "keywords": [
      "executar",
      "observar",
      "validar"
    ]
  },
  "checklist": [
    "Distingo entrada e saída.",
    "Descrevo instruções precisas.",
    "Acompanho valores intermediários.",
    "Entendo o encerramento.",
    "Confiro um resultado manualmente."
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
