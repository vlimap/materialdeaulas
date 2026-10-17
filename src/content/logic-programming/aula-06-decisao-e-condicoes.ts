import { buildLogicLesson } from './lesson-builder';

export const aula06Logic = buildLogicLesson({
  "number": 6,
  "slug": "aula-06-decisao-e-condicoes",
  "title": "Decisões e condições compostas",
  "shortTitle": "Estruturas condicionais",
  "subtitle": "Escolha caminhos com uma ou várias condições.",
  "objectives": [
    "Descrever decisões simples e compostas.",
    "Comparar resultados de E e OU.",
    "Evitar ramos inalcançáveis.",
    "Testar condições-limite."
  ],
  "context": {
    "title": "Quando a resposta depende de regras?",
    "lead": "Um sistema decide com base nos dados recebidos.",
    "detail": "Nem toda decisão cabe em uma única comparação: algumas exigem duas ou mais verificações.",
    "keywords": [
      "SE",
      "SENÃO",
      "condição"
    ]
  },
  "concepts": [
    {
      "title": "Uma condição determina um caminho",
      "lead": "SE é executado quando o teste é verdadeiro.",
      "detail": "O ramo SENÃO cobre o resultado falso. Apenas um dos caminhos é seguido no mesmo teste.",
      "keywords": [
        "verdadeiro",
        "falso",
        "ramo"
      ]
    },
    {
      "title": "Condições combinadas exigem atenção",
      "lead": "E exige todas verdadeiras. OU aceita uma.",
      "detail": "Uma promoção pode exigir quantidade mínima E máxima para determinar o desconto.",
      "keywords": [
        "E",
        "OU",
        "operadores"
      ]
    },
    {
      "title": "Limites revelam erros",
      "lead": ">= inclui o valor de fronteira; > não inclui.",
      "detail": "Teste exatamente no limite e nos valores imediatamente próximos.",
      "keywords": [
        "fronteira",
        "inclusivo",
        "teste"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "SE",
        "detail": "Executa um bloco quando há condição verdadeira.",
        "kicker": "Estrutura",
        "tone": "blue"
      },
      {
        "title": "SENÃO",
        "detail": "Caminho alternativo se a condição for falsa.",
        "kicker": "Estrutura",
        "tone": "orange"
      },
      {
        "title": "SENÃO SE",
        "detail": "Verifica outra condição após a anterior falhar.",
        "kicker": "Estrutura",
        "tone": "green"
      }
    ],
    [
      {
        "title": "E",
        "detail": "As duas regras são obrigatórias.",
        "kicker": "Conjunção",
        "tone": "blue"
      },
      {
        "title": "OU",
        "detail": "Uma regra pode ser suficiente.",
        "kicker": "Disjunção",
        "tone": "green"
      },
      {
        "title": "NÃO",
        "detail": "Inverte o resultado de uma condição.",
        "kicker": "Negação",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Quantos caminhos executam?",
      "prompt": "Em um SE/SENÃO simples, quantos ramos são executados?",
      "options": [
        "Nenhum",
        "Um",
        "Dois"
      ],
      "answer": 1,
      "explanation": "O teste escolhe um dos caminhos possíveis."
    },
    {
      "title": "Quando o E é verdadeiro?",
      "prompt": "Considere duas verificações combinadas com E.",
      "options": [
        "Uma delas verdadeira",
        "As duas verdadeiras",
        "As duas falsas"
      ],
      "answer": 1,
      "explanation": "A conjunção exige todas as condições verdadeiras."
    },
    {
      "title": "Haverá desconto?",
      "prompt": "Considere o algoritmo e a entrada.",
      "options": [
        "10%",
        "0%",
        "Os dois"
      ],
      "answer": 0,
      "explanation": "3 satisfaz as duas comparações de intervalo.",
      "exampleCode": "SE quantidade >= 3 E quantidade <= 4 ENTÃO\n    desconto ← 10\nSENÃO\n    desconto ← 0\nFIM SE\nESCREVER desconto",
      "testInput": "quantidade = 3"
    },
    {
      "title": "Qual é o caso-limite?",
      "prompt": "Se a regra é idade >= 18, qual valor é essencial testar?",
      "options": [
        "18",
        "1000",
        "-1000"
      ],
      "answer": 0,
      "explanation": "O valor da fronteira revela confusão entre maior e maior ou igual."
    }
  ],
  "scenario": "conditions",
  "practice": [
    {
      "title": "Classifique o desempenho",
      "challenge": "Determine se uma nota permite aprovação.",
      "steps": [
        "Leia a nota.",
        "Use SE nota >= 7.",
        "Defina as saídas aprovado/revisão.",
        "Teste as notas 6, 7 e 8."
      ],
      "success": [
        "Comparação correta",
        "Caminhos definidos",
        "Fronteira testada"
      ],
      "minutes": 25
    },
    {
      "title": "Componha condições",
      "challenge": "Decida o acesso a uma atividade.",
      "steps": [
        "Verifique idade >= 16.",
        "Verifique autorização válida.",
        "Combine ambas com E.",
        "Teste os quatro cenários lógicos."
      ],
      "success": [
        "Operador E correto",
        "Cenários completos",
        "Saída coerente"
      ],
      "minutes": 30
    },
    {
      "title": "Monte uma classificação",
      "challenge": "Classifique temperatura em baixa, moderada ou alta.",
      "steps": [
        "Defina os limites de faixa.",
        "Ordene condições sem sobreposição.",
        "Crie SE/SENÃO SE/SENÃO.",
        "Teste os pontos de fronteira."
      ],
      "success": [
        "Faixas sem lacunas",
        "Uma saída por entrada",
        "Testes de limite"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Decidir é verificar regras",
    "lead": "Condições tornam os algoritmos adaptáveis.",
    "detail": "Uma boa estrutura testa cenários verdadeiros, falsos e de fronteira.",
    "keywords": [
      "condição",
      "ramo",
      "limite"
    ]
  },
  "checklist": [
    "Separo condição e ações.",
    "Entendo o comportamento do SENÃO.",
    "Combino testes com E e OU.",
    "Crio faixas sem conflitos.",
    "Confiro valores de fronteira."
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
