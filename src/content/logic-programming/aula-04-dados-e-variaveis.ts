import { buildLogicLesson } from './lesson-builder';

export const aula04Logic = buildLogicLesson({
  "number": 4,
  "slug": "aula-04-dados-e-variaveis",
  "title": "Dados, constantes e variáveis",
  "shortTitle": "Variáveis e dados",
  "subtitle": "Como guardar informações e acompanhar mudanças.",
  "objectives": [
    "Identificar dados numéricos, lógicos e textuais.",
    "Diferenciar constantes e variáveis.",
    "Executar atribuições passo a passo.",
    "Prever estados após mudanças."
  ],
  "context": {
    "title": "Onde ficam as informações?",
    "lead": "Uma solução precisa lembrar valores durante sua execução.",
    "detail": "Variáveis guardam valores nomeados; constantes representam valores que não deveriam mudar.",
    "keywords": [
      "estado",
      "memória",
      "valor"
    ]
  },
  "concepts": [
    {
      "title": "Tipos representam conteúdos diferentes",
      "lead": "Texto, número e valor lógico têm usos distintos.",
      "detail": "O número 12 permite cálculos; o texto \"12\" representa caracteres; verdadeiro/falso descreve uma condição.",
      "keywords": [
        "texto",
        "número",
        "lógico"
      ]
    },
    {
      "title": "Atribuição muda o estado",
      "lead": "numero ← 5 guarda um valor.",
      "detail": "Uma atribuição posterior para a mesma variável substitui o valor anterior.",
      "keywords": [
        "variável",
        "atribuição",
        "estado"
      ]
    },
    {
      "title": "Copiar não é vincular",
      "lead": "copia ← numero guarda o valor atual de numero.",
      "detail": "Alterar numero depois não modifica automaticamente uma cópia de valor primitivo.",
      "keywords": [
        "cópia",
        "valor atual",
        "mudança"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Inteiro",
        "detail": "Quantidade de itens: 5.",
        "kicker": "Número",
        "tone": "blue"
      },
      {
        "title": "Texto",
        "detail": "Nome do produto: \"Livro\".",
        "kicker": "String",
        "tone": "green"
      },
      {
        "title": "Lógico",
        "detail": "Livro disponível? verdadeiro.",
        "kicker": "Booleano",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Constante",
        "detail": "PI permanece fixo dentro do algoritmo.",
        "kicker": "Imutável",
        "tone": "blue"
      },
      {
        "title": "Variável",
        "detail": "saldo recebe novos valores.",
        "kicker": "Mutável",
        "tone": "green"
      },
      {
        "title": "Estado",
        "detail": "Conjunto de valores em dado momento.",
        "kicker": "Rastreamento",
        "tone": "orange"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "O que é uma variável?",
      "prompt": "Qual afirmação descreve uma variável?",
      "options": [
        "É um local nomeado que pode guardar um valor.",
        "É obrigatoriamente um texto.",
        "Nunca pode receber outro valor."
      ],
      "answer": 0,
      "explanation": "O algoritmo pode atualizar uma variável por atribuição."
    },
    {
      "title": "Qual tipo é apropriado?",
      "prompt": "Qual valor representa a disponibilidade de um livro?",
      "options": [
        "\"Biblioteca\"",
        "verdadeiro",
        "42"
      ],
      "answer": 1,
      "explanation": "Uma condição de disponibilidade é naturalmente lógica."
    },
    {
      "title": "Qual será o valor final?",
      "prompt": "Execute as atribuições na ordem.",
      "options": [
        "2",
        "5",
        "7"
      ],
      "answer": 2,
      "explanation": "Primeiro x recebe 5 e depois soma 2.",
      "exampleCode": "x ← 5\nx ← x + 2\nESCREVER x"
    },
    {
      "title": "A cópia muda junto?",
      "prompt": "Após copia ← numero, a variável numero aumenta. O que acontece com copia?",
      "options": [
        "Acompanha todas as mudanças.",
        "Mantém o valor copiado.",
        "É apagada."
      ],
      "answer": 1,
      "explanation": "Atribuir um número copia seu valor para outra variável."
    }
  ],
  "scenario": "variables",
  "practice": [
    {
      "title": "Simule uma carteira",
      "challenge": "Acompanhe o saldo após duas operações.",
      "steps": [
        "Defina saldo inicial de 20.",
        "Subtraia uma compra de 8.",
        "Some um depósito de 5.",
        "Anote o saldo após cada passo."
      ],
      "success": [
        "Saldo inicial claro",
        "Estados intermediários anotados",
        "Resultado final: 17"
      ],
      "minutes": 25
    },
    {
      "title": "Escolha tipos de dados",
      "challenge": "Modele uma ficha simplificada.",
      "steps": [
        "Defina nome como texto.",
        "Defina quantidade como número.",
        "Defina ativo como lógico.",
        "Justifique os tipos escolhidos."
      ],
      "success": [
        "Tipos coerentes",
        "Nomes compreensíveis",
        "Exemplos preenchidos"
      ],
      "minutes": 30
    },
    {
      "title": "Teste atribuições",
      "challenge": "Escreva um algoritmo com valor original e cópia.",
      "steps": [
        "Leia um número.",
        "Copie para outra variável.",
        "Some dois ao original.",
        "Exiba ambos e compare."
      ],
      "success": [
        "Atribuições corretas",
        "Cópia preservada",
        "Saídas conferidas"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Valores formam o estado",
    "lead": "Uma variável guarda o que é necessário para avançar.",
    "detail": "Os tipos ajudam a interpretar dados, e cada atribuição altera um estado observável.",
    "keywords": [
      "tipos",
      "atribuição",
      "rastreio"
    ]
  },
  "checklist": [
    "Distingo número de texto.",
    "Identifico valores lógicos.",
    "Sei o que é uma constante.",
    "Acompanho atribuições sucessivas.",
    "Explico cópia de um valor."
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
