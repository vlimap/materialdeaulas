import { buildLogicLesson } from './lesson-builder';

export const aula07Logic = buildLogicLesson({
  "number": 7,
  "slug": "aula-07-lacos-e-contadores",
  "title": "Laços, contadores e acumuladores",
  "shortTitle": "Repetições",
  "subtitle": "Repita tarefas com limites e acompanhe os resultados.",
  "objectives": [
    "Reconhecer iterações e condições de parada.",
    "Utilizar contadores em laços PARA.",
    "Atualizar acumuladores corretamente.",
    "Identificar risco de laço infinito."
  ],
  "context": {
    "title": "E quando a tarefa se repete?",
    "lead": "Escrever a mesma instrução várias vezes não é necessário.",
    "detail": "Repetições permitem processar sequências com um único bloco de comandos.",
    "keywords": [
      "laço",
      "iteração",
      "parada"
    ]
  },
  "concepts": [
    {
      "title": "Contador acompanha as voltas",
      "lead": "A cada iteração, o contador assume o próximo valor.",
      "detail": "PARA i DE 1 ATÉ 4 executa com i igual a 1, 2, 3 e 4.",
      "keywords": [
        "i",
        "incremento",
        "iteração"
      ]
    },
    {
      "title": "Acumulador guarda o total",
      "lead": "soma ← soma + i adiciona o item atual.",
      "detail": "Inicializar em zero evita carregar um valor não definido para o cálculo.",
      "keywords": [
        "soma",
        "estado",
        "inicializar"
      ]
    },
    {
      "title": "Todo laço deve terminar",
      "lead": "Uma condição de parada impede repetições indefinidas.",
      "detail": "Testar o menor e o maior valor ajuda a reconhecer possíveis erros de contagem.",
      "keywords": [
        "limite",
        "parada",
        "progresso"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Contador",
        "detail": "Indica em que volta estamos.",
        "kicker": "i",
        "tone": "blue"
      },
      {
        "title": "Acumulador",
        "detail": "Guarda o total calculado.",
        "kicker": "soma",
        "tone": "green"
      },
      {
        "title": "Iteração",
        "detail": "Uma execução do bloco.",
        "kicker": "volta",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "PARA",
        "detail": "Conhecemos a faixa de valores.",
        "kicker": "Laço",
        "tone": "blue"
      },
      {
        "title": "ENQUANTO",
        "detail": "Repetimos enquanto a condição vale.",
        "kicker": "Laço",
        "tone": "green"
      },
      {
        "title": "Parada",
        "detail": "A condição deixa de ser verdadeira.",
        "kicker": "Segurança",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Quantas iterações?",
      "prompt": "PARA i DE 1 ATÉ 4 executa quantas vezes?",
      "options": [
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "Os valores executados são 1, 2, 3 e 4."
    },
    {
      "title": "Qual inicialização?",
      "prompt": "Para somar valores, qual estado inicial é adequado?",
      "options": [
        "soma ← 0",
        "soma ← verdadeiro",
        "soma ← texto"
      ],
      "answer": 0,
      "explanation": "O acumulador numérico começa em zero."
    },
    {
      "title": "Qual será o total?",
      "prompt": "Some os valores de 1 até 3.",
      "options": [
        "3",
        "6",
        "9"
      ],
      "answer": 1,
      "explanation": "1 + 2 + 3 resulta em 6.",
      "exampleCode": "soma ← 0\nPARA i DE 1 ATÉ 3\n    soma ← soma + i\nFIM PARA\nESCREVER soma"
    },
    {
      "title": "Qual é o perigo?",
      "prompt": "ENQUANTO verdadeiro, sem atualização nem parada, pode causar:",
      "options": [
        "Um laço infinito",
        "Uma repetição apenas",
        "Um cálculo impossível de iniciar"
      ],
      "answer": 0,
      "explanation": "A condição permanece verdadeira; o processo pode não terminar."
    }
  ],
  "scenario": "loops",
  "practice": [
    {
      "title": "Conte pessoas",
      "challenge": "Exiba uma numeração de atendimento.",
      "steps": [
        "Defina quantidade 4.",
        "Crie contador iniciando em 1.",
        "Repita até chegar a 4.",
        "Confira os valores produzidos."
      ],
      "success": [
        "Quatro iterações",
        "Sequência correta",
        "Parada alcançada"
      ],
      "minutes": 25
    },
    {
      "title": "Some compras",
      "challenge": "Acumule três preços em uma variável.",
      "steps": [
        "Inicie total ← 0.",
        "Some 5, depois 8, depois 2.",
        "Anote o total após cada passo.",
        "Confira o resultado final de 15."
      ],
      "success": [
        "Estado rastreado",
        "Acumulador usado",
        "Total 15"
      ],
      "minutes": 30
    },
    {
      "title": "Detecte erro de repetição",
      "challenge": "Corrija um laço que não termina.",
      "steps": [
        "Leia a condição de repetição.",
        "Identifique qual valor controla a parada.",
        "Acrescente uma atualização do valor.",
        "Teste o laço até terminar."
      ],
      "success": [
        "Condição coerente",
        "Atualização prevista",
        "Execução finita"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Uma ação pode ser repetida",
    "lead": "O laço precisa de progressão e de um fim.",
    "detail": "Contadores indicam as voltas; acumuladores guardam resultados.",
    "keywords": [
      "contar",
      "somar",
      "terminar"
    ]
  },
  "checklist": [
    "Sei definir o intervalo.",
    "Acompanho o contador.",
    "Inicializo o acumulador.",
    "Distingo PARA e ENQUANTO.",
    "Verifico a condição de parada."
  ],
  "sources": [
    {
      "label": "MDN · Condições e laços",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Conditionals"
    },
    {
      "label": "Python · Estruturas de controle",
      "url": "https://docs.python.org/pt-br/3/tutorial/controlflow.html"
    }
  ]
});
