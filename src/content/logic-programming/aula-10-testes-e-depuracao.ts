import { buildLogicLesson } from './lesson-builder';

export const aula10Logic = buildLogicLesson({
  "number": 10,
  "slug": "aula-10-testes-e-depuracao",
  "title": "Testes de mesa e depuração",
  "shortTitle": "Testes de mesa",
  "subtitle": "Descubra erros acompanhando cada mudança de estado.",
  "objectives": [
    "Realizar testes de mesa.",
    "Comparar resultado obtido e esperado.",
    "Identificar erros de atribuição.",
    "Corrigir e testar regressões."
  ],
  "context": {
    "title": "E se a resposta estiver errada?",
    "lead": "Uma solução pode executar sem produzir o resultado esperado.",
    "detail": "Testes de mesa revelam os valores intermediários que levam ao defeito.",
    "keywords": [
      "teste",
      "estado",
      "depuração"
    ]
  },
  "concepts": [
    {
      "title": "Teste de mesa acompanha instruções",
      "lead": "Anote o estado depois de cada linha.",
      "detail": "A comparação entre esperado e obtido permite localizar o primeiro passo divergente.",
      "keywords": [
        "entrada",
        "estado",
        "saída"
      ]
    },
    {
      "title": "Erros lógicos são silenciosos",
      "lead": "Substituir um total em vez de somar pode gerar um número plausível.",
      "detail": "Nem todo erro causa interrupção. Alguns apenas produzem o resultado incorreto.",
      "keywords": [
        "lógica",
        "atribuição",
        "erro"
      ]
    },
    {
      "title": "Corrigir exige testar novamente",
      "lead": "Após alterar o algoritmo, repita os casos anteriores.",
      "detail": "Casos-limite são especialmente úteis: valores pequenos, máximos e vazios, quando previstos.",
      "keywords": [
        "correção",
        "regressão",
        "limite"
      ]
    }
  ],
  "cards": [
    [
      {
        "title": "Entrada",
        "detail": "Valor fornecido para o teste.",
        "kicker": "Dado",
        "tone": "blue"
      },
      {
        "title": "Esperado",
        "detail": "Resposta calculada independentemente.",
        "kicker": "Critério",
        "tone": "green"
      },
      {
        "title": "Obtido",
        "detail": "Saída real da execução.",
        "kicker": "Evidência",
        "tone": "orange"
      }
    ],
    [
      {
        "title": "Sintaxe",
        "detail": "Código não pode ser interpretado como escrito.",
        "kicker": "Erro",
        "tone": "blue"
      },
      {
        "title": "Lógica",
        "detail": "Executa, mas calcula incorretamente.",
        "kicker": "Erro",
        "tone": "orange"
      },
      {
        "title": "Correção",
        "detail": "Restabelece o comportamento esperado.",
        "kicker": "Depuração",
        "tone": "green"
      }
    ]
  ],
  "quizzes": [
    {
      "title": "O que se anota num teste de mesa?",
      "prompt": "Qual informação é indispensável?",
      "options": [
        "Apenas a cor da interface",
        "Valores das variáveis a cada passo",
        "Somente o título do algoritmo"
      ],
      "answer": 1,
      "explanation": "O rastreamento registra os valores e o caminho efetivamente executado."
    },
    {
      "title": "Qual é o defeito?",
      "prompt": "Um acumulador recebe total ← i em vez de total ← total + i. O que ocorre?",
      "options": [
        "Acumula corretamente",
        "Substitui o valor anterior",
        "Dobra o resultado"
      ],
      "answer": 1,
      "explanation": "O total anterior é perdido em cada iteração."
    },
    {
      "title": "Qual é o valor obtido?",
      "prompt": "Execute o algoritmo com n = 3.",
      "options": [
        "6",
        "3",
        "0"
      ],
      "answer": 1,
      "explanation": "A cada volta total é substituído por i. A última atribuição é 3.",
      "exampleCode": "total ← 0\nPARA i DE 1 ATÉ 3\n    total ← i\nFIM PARA\nESCREVER total"
    },
    {
      "title": "Qual é a correção?",
      "prompt": "Como corrigir o acumulador?",
      "options": [
        "total ← total + i",
        "total ← 0 dentro do laço",
        "total ← i sempre"
      ],
      "answer": 0,
      "explanation": "É necessário preservar a soma anterior a cada volta."
    }
  ],
  "scenario": "debugging",
  "practice": [
    {
      "title": "Compare os resultados",
      "challenge": "Rastreie uma soma incorreta.",
      "steps": [
        "Execute com n=3.",
        "Registre total em cada passo.",
        "Compare obtido 3 e esperado 6.",
        "Identifique a linha do erro."
      ],
      "success": [
        "Passos registrados",
        "Divergência localizada",
        "Causa identificada"
      ],
      "minutes": 25
    },
    {
      "title": "Faça a correção",
      "challenge": "Altere a instrução defeituosa.",
      "steps": [
        "Substitua total ← i.",
        "Use total ← total + i.",
        "Repita o teste com n=3.",
        "Confira a saída 6."
      ],
      "success": [
        "Correção justificada",
        "Teste repetido",
        "Saída correta"
      ],
      "minutes": 30
    },
    {
      "title": "Crie casos de teste",
      "challenge": "Teste uma soma de 1 até n.",
      "steps": [
        "Prepare n=1, n=3 e n=5.",
        "Calcule o esperado manualmente.",
        "Execute a versão corrigida.",
        "Compare todas as saídas."
      ],
      "success": [
        "Casos diferentes",
        "Resultados esperados",
        "Sem regressão"
      ],
      "minutes": 40
    }
  ],
  "synthesis": {
    "title": "Depurar é investigar",
    "lead": "O erro aparece quando o estado diverge do esperado.",
    "detail": "Com entradas reproduzíveis e testes sucessivos, a correção se torna verificável.",
    "keywords": [
      "reproduzir",
      "corrigir",
      "conferir"
    ]
  },
  "checklist": [
    "Registro valores intermediários.",
    "Comparo esperado e obtido.",
    "Reconheço um erro lógico.",
    "Corrijo a causa, não o sintoma.",
    "Repito testes após alterações."
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
