import { buildLogicLesson } from './lesson-builder';

export const aula11Logic = buildLogicLesson({
  "number": 11,
  "slug": "aula-11-desafios-integrados",
  "title": "Desafios integrados de lógica",
  "shortTitle": "Desafios integrados",
  "subtitle": "Combine entradas, decisões, repetição e estado.",
  "objectives": [
    "Integrar estruturas de lógica.",
    "Validar pedidos com dados.",
    "Atualizar estado após decisões.",
    "Planejar casos de teste completos."
  ],
  "context": {
    "title": "Como as estruturas trabalham juntas?",
    "lead": "Sistemas reais não usam uma única estrutura isoladamente.",
    "detail": "Um pedido pode exigir entrada, decisão, cálculo e atualização dos dados disponíveis.",
    "keywords": [
      "entrada",
      "decisão",
      "estado"
    ]
  },
  "concepts": [
    {
      "title": "Comece pelo objetivo do processo",
      "lead": "Defina o que acontece quando um pedido chega.",
      "detail": "Verifique pré-condições antes de alterar o estoque ou registrar um resultado.",
      "keywords": [
        "problema",
        "entrada",
        "pré-condição"
      ]
    },
    {
      "title": "Decidir antes de alterar o estado",
      "lead": "Uma reserva só deve reduzir o estoque se for aceita.",
      "detail": "Alterar dados antes da validação cria inconsistências quando o pedido é rejeitado.",
      "keywords": [
        "SE",
        "validação",
        "consistência"
      ]
    },
    {
      "title": "Teste caminhos alternativos",
      "lead": "Pedido válido e pedido excessivo exigem resultados diferentes.",
      "detail": "Os testes devem conferir mensagem e estado final, não somente a resposta na tela.",
      "keywords": [
        "sucesso",
        "falha",
        "estado final"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Entrada",
        "detail": "Quantidade solicitada pelo usuário.",
        "kicker": "Dado",
        "tone": "blue"
      },
      {
        "title": "Regra",
        "detail": "Pedido não pode exceder estoque.",
        "kicker": "Condição",
        "tone": "green"
      },
      {
        "title": "Estado",
        "detail": "Saldo muda somente se a reserva for aceita.",
        "kicker": "Atualização",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Aceito",
        "detail": "Reduz o estoque e confirma.",
        "kicker": "Resultado",
        "tone": "green"
      },
      {
        "title": "Negado",
        "detail": "Preserva o estoque e informa motivo.",
        "kicker": "Resultado",
        "tone": "orange"
      },
      {
        "title": "Teste",
        "detail": "Cobre ambos os caminhos.",
        "kicker": "Validação",
        "tone": "blue"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "O que vem primeiro?",
      "prompt": "Antes de descontar o estoque, devemos:",
      "options": [
        "Validar se há unidades suficientes",
        "Descontar mesmo assim",
        "Mostrar confirmação"
      ],
      "answer": 0,
      "explanation": "A alteração depende da validação."
    },
    {
      "title": "O que não pode acontecer?",
      "prompt": "Quando um pedido é recusado:",
      "options": [
        "O estoque permanece igual",
        "O estoque reduz",
        "O cliente recebe a informação"
      ],
      "answer": 1,
      "explanation": "Uma falha não deve modificar o estoque disponível."
    },
    {
      "title": "Qual será o estoque final?",
      "prompt": "Considere estoque 3 e pedido 2.",
      "options": [
        "1",
        "2",
        "3"
      ],
      "answer": 0,
      "explanation": "A validação aceita o pedido, e o estoque passa de 3 para 1.",
      "exampleCode": "estoque ← 3\nSE pedido <= estoque ENTÃO\n    estoque ← estoque - pedido\nSENÃO\n    ESCREVER \"Sem estoque\"\nFIM SE",
      "testInput": "pedido = 2"
    },
    {
      "title": "Qual teste cobre a falha?",
      "prompt": "Com estoque 3, qual pedido deve ser rejeitado?",
      "options": [
        "1",
        "2",
        "4"
      ],
      "answer": 2,
      "explanation": "Quatro unidades excedem o estoque disponível."
    }
  ],
  "scenario": "integrated",
  "practice": [
    {
      "title": "Planeje uma reserva",
      "challenge": "Defina algoritmo para reservar equipamentos.",
      "steps": [
        "Defina estoque inicial 3.",
        "Receba uma quantidade.",
        "Valide antes de descontar.",
        "Exiba confirmação ou rejeição."
      ],
      "success": [
        "Validação prevista",
        "Estoque coerente",
        "Dois caminhos"
      ],
      "minutes": 25
    },
    {
      "title": "Acompanhe o estado",
      "challenge": "Teste sequência de dois pedidos.",
      "steps": [
        "Inicie estoque igual a 3.",
        "Aceite pedido de 2.",
        "Tente novo pedido de 2.",
        "Registre estoque após cada tentativa."
      ],
      "success": [
        "Primeiro estoque: 1",
        "Segundo pedido negado",
        "Estoque final: 1"
      ],
      "minutes": 30
    },
    {
      "title": "Desafio com repetição",
      "challenge": "Processe uma lista de pedidos.",
      "steps": [
        "Defina pedidos [1, 2, 1].",
        "Percorra a lista com repetição.",
        "Valide cada pedido contra saldo atual.",
        "Anote aceitos, recusados e estoque final."
      ],
      "success": [
        "Laço finito",
        "Cada pedido validado",
        "Estado final conferido"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Estruturas cooperam",
    "lead": "Entrada, seleção, repetição e atualização resolvem o mesmo problema.",
    "detail": "Separar regras do estado torna os testes mais previsíveis.",
    "keywords": [
      "integração",
      "consistência",
      "teste"
    ]
  },
  "checklist": [
    "Defino a entrada.",
    "Valido antes de alterar.",
    "Atualizo o estado corretamente.",
    "Trato sucesso e falha.",
    "Escrevo testes para ambos."
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
