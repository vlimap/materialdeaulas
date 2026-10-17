import { buildLogicLesson } from './lesson-builder';

export const aula03Logic = buildLogicLesson({
  "number": 3,
  "slug": "aula-03-pseudocodigo-e-fluxogramas",
  "title": "Pseudocódigo e fluxogramas",
  "shortTitle": "Pseudocódigo e fluxogramas",
  "subtitle": "Representações claras antes de escrever código.",
  "objectives": [
    "Construir instruções em pseudocódigo.",
    "Identificar os símbolos principais do fluxograma.",
    "Ler uma decisão com dois caminhos.",
    "Testar representações com entradas diferentes."
  ],
  "context": {
    "title": "Como descrever a solução?",
    "lead": "Algoritmos podem ser comunicados sem escolher uma linguagem.",
    "detail": "O texto organizado e o desenho do fluxo mostram a mesma lógica de maneiras diferentes.",
    "keywords": [
      "pseudocódigo",
      "fluxograma",
      "fluxo"
    ]
  },
  "concepts": [
    {
      "title": "Pseudocódigo explica as instruções",
      "lead": "LER, SE, SENÃO e ESCREVER expressam ações.",
      "detail": "A indentação mostra quais comandos pertencem a cada bloco, sem exigir a sintaxe de uma linguagem.",
      "keywords": [
        "LER",
        "SE",
        "ESCREVER"
      ]
    },
    {
      "title": "Símbolos têm significados",
      "lead": "Oval: início e fim; retângulo: processamento.",
      "detail": "Paralelogramo indica entrada/saída; losango indica condição e seus caminhos.",
      "keywords": [
        "início/fim",
        "processo",
        "decisão"
      ]
    },
    {
      "title": "Teste os dois caminhos",
      "lead": "Um fluxograma de decisão precisa funcionar nos dois resultados.",
      "detail": "Experimente entradas que façam a condição ser verdadeira e falsa.",
      "keywords": [
        "verdadeiro",
        "falso",
        "validar"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Oval",
        "detail": "Começo ou término do fluxo.",
        "kicker": "Início/Fim",
        "tone": "blue"
      },
      {
        "title": "Retângulo",
        "detail": "Cálculo ou atribuição.",
        "kicker": "Processo",
        "tone": "green"
      },
      {
        "title": "Losango",
        "detail": "Pergunta de dois caminhos.",
        "kicker": "Decisão",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Texto",
        "detail": "Pseudocódigo enfatiza comandos e indentação.",
        "kicker": "Representação",
        "tone": "blue"
      },
      {
        "title": "Desenho",
        "detail": "Fluxograma enfatiza os caminhos.",
        "kicker": "Representação",
        "tone": "green"
      },
      {
        "title": "Teste",
        "detail": "Ambos devem produzir a mesma saída.",
        "kicker": "Validação",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "Qual texto é claro?",
      "prompt": "Qual opção representa uma ação verificável?",
      "options": [
        "ESCOLHER qualquer resultado",
        "LER nota; EXIBIR nota",
        "Fazer a coisa certa"
      ],
      "answer": 1,
      "explanation": "Uma entrada e uma saída explícitas permitem conferir a execução."
    },
    {
      "title": "Qual símbolo é utilizado?",
      "prompt": "Em um fluxograma, qual figura representa uma condição?",
      "options": [
        "Losango",
        "Oval",
        "Retângulo"
      ],
      "answer": 0,
      "explanation": "O losango abre caminhos baseados no resultado da condição."
    },
    {
      "title": "Qual mensagem será mostrada?",
      "prompt": "Considere o algoritmo abaixo.",
      "options": [
        "Suficiente",
        "Insuficiente",
        "Ambas"
      ],
      "answer": 1,
      "explanation": "A condição é falsa para quantidade igual a 2.",
      "exampleCode": "SE quantidade >= 3 ENTÃO\n    ESCREVER \"Suficiente\"\nSENÃO\n    ESCREVER \"Insuficiente\"\nFIM SE",
      "testInput": "quantidade = 2"
    },
    {
      "title": "Qual caminho é válido?",
      "prompt": "Uma condição é falsa. Qual saída deve ser seguida no fluxograma?",
      "options": [
        "Ambas",
        "O caminho marcado como falso",
        "O caminho marcado como verdadeiro"
      ],
      "answer": 1,
      "explanation": "Uma decisão seleciona somente o caminho correspondente ao teste."
    }
  ],
  "scenario": "flowchart",
  "practice": [
    {
      "title": "Organize as instruções",
      "challenge": "Represente uma consulta de disponibilidade de livro.",
      "steps": [
        "Defina uma entrada (quantidade).",
        "Escreva o teste de disponibilidade.",
        "Registre os dois resultados possíveis.",
        "Teste com zero e três exemplares."
      ],
      "success": [
        "Entrada identificada",
        "Dois caminhos previstos",
        "Testes concluídos"
      ],
      "minutes": 25
    },
    {
      "title": "Desenhe o fluxo",
      "challenge": "Converta um SE/SENÃO em fluxograma.",
      "steps": [
        "Desenhe início e leitura.",
        "Adicione um losango para a condição.",
        "Ligue os caminhos verdadeiro e falso.",
        "Encerre os caminhos com uma saída."
      ],
      "success": [
        "Símbolos apropriados",
        "Setas sem ambiguidades",
        "Todos os caminhos terminam"
      ],
      "minutes": 30
    },
    {
      "title": "Compare representações",
      "challenge": "Crie pseudocódigo e fluxograma para verificar maioridade.",
      "steps": [
        "Determine a entrada idade.",
        "Descreva a condição idade >= 18.",
        "Crie duas saídas coerentes.",
        "Teste as idades 16 e 20."
      ],
      "success": [
        "Representações equivalentes",
        "Dois testes de mesa",
        "Saídas conferidas"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Duas formas, um algoritmo",
    "lead": "Pseudocódigo e fluxograma representam decisões e ações.",
    "detail": "A qualidade está na precisão das instruções, dos caminhos e do resultado.",
    "keywords": [
      "clareza",
      "equivalência",
      "teste"
    ]
  },
  "checklist": [
    "Separo entrada e saída.",
    "Escrevo comandos legíveis.",
    "Distingo processo e decisão.",
    "Percorro os dois caminhos.",
    "Verifico resultados com exemplos."
  ],
  "sources": [
    {
      "label": "MDN · Fundamentos de JavaScript",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting"
    },
    {
      "label": "Documentação Python · Tutorial",
      "url": "https://docs.python.org/pt-br/3/tutorial/"
    }
  ]
});
