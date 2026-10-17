import { buildLogicLesson } from './lesson-builder';

export const aula12Logic = buildLogicLesson({
  "number": 12,
  "slug": "aula-12-projeto-final",
  "title": "Projeto final de lógica de programação",
  "shortTitle": "Projeto final",
  "subtitle": "Uma solução completa, da necessidade aos testes.",
  "objectives": [
    "Definir um problema verificável.",
    "Decompor a solução em requisitos e passos.",
    "Implementar pseudocódigo com decisões.",
    "Validar o resultado e apresentar evidências."
  ],
  "context": {
    "title": "Transforme uma necessidade em solução",
    "lead": "O projeto reúne todas as habilidades do curso.",
    "detail": "O objetivo é demonstrar um algoritmo coerente, testável e documentado, antes de escolher uma linguagem.",
    "keywords": [
      "problema",
      "algoritmo",
      "resultado"
    ]
  },
  "concepts": [
    {
      "title": "Descreva o problema e os critérios",
      "lead": "Uma necessidade bem definida permite verificar se a solução funciona.",
      "detail": "Documente entradas válidas, resultado esperado e casos de falha antes de desenvolver.",
      "keywords": [
        "objetivo",
        "entrada",
        "saída"
      ]
    },
    {
      "title": "Separe etapas e regras",
      "lead": "Construa um algoritmo com validação antes do cálculo.",
      "detail": "Uma reserva só pode ser confirmada se o número solicitado estiver disponível.",
      "keywords": [
        "sequência",
        "decisão",
        "cálculo"
      ]
    },
    {
      "title": "Entregue evidências de testes",
      "lead": "Um projeto não termina quando a primeira entrada funciona.",
      "detail": "Registre testes de sucesso, rejeição e limites; confronte resultados esperados e obtidos.",
      "keywords": [
        "teste",
        "evidência",
        "correção"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Definição",
        "detail": "Problema, público e resultado.",
        "kicker": "Planejamento",
        "tone": "blue"
      },
      {
        "title": "Algoritmo",
        "detail": "Passos e condições em pseudocódigo.",
        "kicker": "Construção",
        "tone": "green"
      },
      {
        "title": "Validação",
        "detail": "Casos de teste e saídas.",
        "kicker": "Qualidade",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Entrada válida",
        "detail": "Solicitação dentro da capacidade.",
        "kicker": "Cenário",
        "tone": "green"
      },
      {
        "title": "Entrada inválida",
        "detail": "Solicitação além do limite.",
        "kicker": "Cenário",
        "tone": "orange"
      },
      {
        "title": "Fronteira",
        "detail": "Solicitação igual ao máximo.",
        "kicker": "Cenário",
        "tone": "blue"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Qual objetivo é verificável?",
      "prompt": "Escolha uma descrição do problema suficientemente específica.",
      "options": [
        "Fazer um sistema moderno",
        "Reservar até quatro vagas e informar o valor total",
        "Usar muitas funções"
      ],
      "answer": 1,
      "explanation": "O segundo objetivo descreve uma regra e um resultado observáveis."
    },
    {
      "title": "Qual comportamento é seguro?",
      "prompt": "O pedido excede as vagas disponíveis. O algoritmo deve:",
      "options": [
        "Confirmar mesmo assim",
        "Rejeitar sem cobrar",
        "Cobrar o dobro"
      ],
      "answer": 1,
      "explanation": "Uma solicitação inválida não pode gerar confirmação."
    },
    {
      "title": "Qual será o resultado?",
      "prompt": "O preço de cada vaga é R$ 12 e existem quatro vagas.",
      "options": [
        "R$ 36,00",
        "Indisponível",
        "R$ 48,00"
      ],
      "answer": 0,
      "explanation": "Três vagas custam 3 × 12 = R$ 36.",
      "exampleCode": "vagas ← 4\nSE pedido <= vagas ENTÃO\n    total ← pedido * 12\n    ESCREVER total\nSENÃO\n    ESCREVER \"Indisponível\"\nFIM SE",
      "testInput": "pedido = 3"
    },
    {
      "title": "Qual teste é de fronteira?",
      "prompt": "Quando existem 4 vagas, qual pedido deve ser testado no limite?",
      "options": [
        "4",
        "1",
        "100"
      ],
      "answer": 0,
      "explanation": "Quatro é exatamente o máximo permitido."
    }
  ],
  "scenario": "project",
  "practice": [
    {
      "title": "Defina seu projeto",
      "challenge": "Escolha uma necessidade real e delimitada.",
      "steps": [
        "Escreva o problema em uma frase.",
        "Defina duas entradas necessárias.",
        "Descreva o resultado esperado.",
        "Registre uma situação de falha."
      ],
      "success": [
        "Objetivo claro",
        "Entradas identificadas",
        "Cenário negativo previsto"
      ],
      "minutes": 25
    },
    {
      "title": "Construa o algoritmo",
      "challenge": "Escreva pseudocódigo da solução.",
      "steps": [
        "Divida a tarefa em passos.",
        "Adicione a condição de validação.",
        "Calcule ou atualize apenas se válida.",
        "Defina saída para sucesso e falha."
      ],
      "success": [
        "Passos legíveis",
        "Validação explícita",
        "Saídas completas"
      ],
      "minutes": 40
    },
    {
      "title": "Valide e conclua",
      "challenge": "Teste e apresente as evidências do projeto.",
      "steps": [
        "Execute um caso de sucesso.",
        "Execute um caso de rejeição.",
        "Execute um teste na fronteira.",
        "Compare obtido e esperado e corrija divergências."
      ],
      "success": [
        "Três testes registrados",
        "Resultados coerentes",
        "Projeto revisado"
      ],
      "minutes": 45
    }
  ],
  "synthesis": {
    "title": "Seu algoritmo é o produto",
    "lead": "Uma solução boa é clara, completa e verificável.",
    "detail": "Documentação breve e testes demonstram como o resultado foi alcançado.",
    "keywords": [
      "requisito",
      "algoritmo",
      "evidência"
    ]
  },
  "checklist": [
    "O problema está delimitado.",
    "As entradas são explícitas.",
    "As condições são compreensíveis.",
    "Os resultados estão definidos.",
    "O algoritmo passou pelos testes."
  ],
  "sources": [
    {
      "label": "Python · Definindo funções",
      "url": "https://docs.python.org/pt-br/3/tutorial/controlflow.html#defining-functions"
    },
    {
      "label": "MDN · JavaScript",
      "url": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide"
    }
  ]
});
