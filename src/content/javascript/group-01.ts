import type { JsLessonSpec } from './lesson-builder';
const T=(title:string,lead:string,detail:string)=>({title,lead,detail});
const D=(title:string,detail:string)=>({title,detail});
const Q=(prompt:string,choices:[string,string,string],answer:0|1|2,why:string)=>({prompt,choices,answer,why});
const P=(title:string,goal:string,action:string,verify:string)=>({title,goal,action,verify});
export const group01: JsLessonSpec[] = [
  {
    "number": 1,
    "slug": "aula-01-introducao-ambientes",
    "title": "História, fundamentos e ambientes JavaScript",
    "short": "Começando com JavaScript",
    "subtitle": "A linguagem da Web também executa fora do navegador.",
    "problem": "Como executar instruções em um navegador?",
    "context": "JavaScript surgiu para dar comportamento às páginas Web. Motores modernos compilam código em diferentes etapas e o Node.js fornece execução fora do navegador.",
    "concepts": [
      {
        "title": "JavaScript e Java são linguagens diferentes",
        "lead": "JavaScript foi criado em 1995, inicialmente para navegadores.",
        "detail": "Apesar da semelhança dos nomes, sintaxe, ecossistemas e modelos de execução são distintos."
      },
      {
        "title": "O motor executa o programa",
        "lead": "Chrome utiliza V8, Firefox usa SpiderMonkey.",
        "detail": "O motor lê e otimiza o JavaScript; o navegador oferece DOM, eventos e APIs adicionais."
      },
      {
        "title": "Ambientes possuem APIs próprias",
        "lead": "console.log funciona em navegadores e Node.js.",
        "detail": "document pertence ao navegador; fs pertence ao Node.js. Aprenda a distinguir linguagem de ambiente."
      }
    ],
    "terms": [
      {
        "title": "ECMAScript",
        "detail": "Especificação padronizada da linguagem."
      },
      {
        "title": "Engine",
        "detail": "Implementação que executa JavaScript."
      },
      {
        "title": "Runtime",
        "detail": "Ambiente com APIs como DOM ou Node.js."
      }
    ],
    "contrasts": [
      {
        "title": "JavaScript",
        "detail": "Linguagem distinta de Java."
      },
      {
        "title": "Browser",
        "detail": "DOM, eventos e interface gráfica."
      },
      {
        "title": "Node.js",
        "detail": "Processos, arquivos e servidores."
      }
    ],
    "starterCode": "const curso = \"JavaScript\";\nconst ano = 1995;\nconsole.log(curso);\nconsole.log(ano);",
    "task": "Altere o nome da linguagem e execute novamente.",
    "output": "JavaScript\n1995",
    "incorrectOutputs": [
      "Java\n1995",
      "undefined"
    ],
    "explanation": "O console exibe primeiro a string e depois o número 1995, cada um em sua linha.",
    "questions": [
      {
        "prompt": "JavaScript e Java são a mesma linguagem?",
        "choices": [
          "Não, são linguagens diferentes",
          "Sim, apenas o nome muda",
          "JavaScript é apenas HTML"
        ],
        "answer": 0,
        "why": "As linguagens têm origens e características diferentes."
      },
      {
        "prompt": "Quem fornece document.querySelector?",
        "choices": [
          "ECMAScript puro",
          "Ambiente do navegador",
          "SQL"
        ],
        "answer": 1,
        "why": "A API DOM pertence ao ambiente de navegador."
      },
      {
        "prompt": "Onde console.log normalmente funciona?",
        "choices": [
          "Somente em Node.js",
          "Somente no navegador",
          "Em navegadores e Node.js"
        ],
        "answer": 2,
        "why": "Ambos fornecem console como API do ambiente."
      }
    ],
    "practices": [
      {
        "title": "Primeiro console",
        "goal": "Execute duas mensagens no console.",
        "action": "Mude os argumentos de console.log para seu nome e uma tecnologia.",
        "verify": "Verifique que os valores aparecem em linhas independentes."
      },
      {
        "title": "Linguagem ou API?",
        "goal": "Classifique console, document e fs.",
        "action": "Identifique qual objeto depende do navegador ou do Node.js.",
        "verify": "Explique por que document não funciona em Node.js sem bibliotecas extras."
      },
      {
        "title": "Diário de aprendizagem",
        "goal": "Crie um arquivo de exemplos introdutórios.",
        "action": "Escreva três chamadas console.log com valores diferentes.",
        "verify": "Execute, altere uma entrada e documente o resultado."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 2,
    "slug": "aula-02-sintaxe-variaveis-escopo",
    "title": "Sintaxe, variáveis e escopo com let e const",
    "short": "Variáveis e escopo",
    "subtitle": "Declare e atualize valores com regras previsíveis.",
    "problem": "Como armazenar e atualizar informações?",
    "context": "Variáveis tornam os programas adaptáveis. let permite reatribuição; const exige inicialização e impede reatribuir a referência.",
    "concepts": [
      {
        "title": "const e let têm papéis diferentes",
        "lead": "Prefira const para valores não reatribuídos.",
        "detail": "Use let quando for necessário mudar a ligação. var tem escopo de função e comportamento de hoisting diferente."
      },
      {
        "title": "Blocos criam escopos léxicos",
        "lead": "Declarações let e const pertencem ao bloco que as contém.",
        "detail": "Evite depender de variáveis globais: nomes locais reduzem colisões e efeitos colaterais."
      },
      {
        "title": "const não congela objetos",
        "lead": "const impede atribuir outra referência à variável.",
        "detail": "As propriedades de um objeto const podem continuar mutáveis; Object.freeze limita mudanças superficiais."
      }
    ],
    "terms": [
      {
        "title": "Declaração",
        "detail": "Cria uma ligação com um nome."
      },
      {
        "title": "Atribuição",
        "detail": "Define ou modifica o valor."
      },
      {
        "title": "Bloco",
        "detail": "Escopo delimitado por chaves."
      }
    ],
    "contrasts": [
      {
        "title": "const",
        "detail": "Ligação não reatribuível."
      },
      {
        "title": "let",
        "detail": "Ligação que pode ser reatribuída."
      },
      {
        "title": "var",
        "detail": "Forma legada com escopo de função."
      }
    ],
    "starterCode": "const preco = 10;\nlet quantidade = 2;\nquantidade += 1;\nconsole.log(preco * quantidade);",
    "task": "Altere a quantidade inicial e confira o novo total.",
    "output": "30",
    "incorrectOutputs": [
      "20",
      "12"
    ],
    "explanation": "quantidade começa em 2, aumenta para 3 e então 10 × 3 produz 30.",
    "questions": [
      {
        "prompt": "Qual declaração aceita reatribuição?",
        "choices": [
          "const",
          "let",
          "Ambas sempre"
        ],
        "answer": 1,
        "why": "let permite atualizar a ligação."
      },
      {
        "prompt": "Uma variável const com objeto permite alterar propriedades?",
        "choices": [
          "Nunca",
          "Sim, salvo restrições de mutabilidade",
          "Const transforma o objeto em texto"
        ],
        "answer": 1,
        "why": "const fixa a referência, não torna o objeto profundamente imutável."
      },
      {
        "prompt": "Qual é o escopo de let num bloco?",
        "choices": [
          "Global automaticamente",
          "Escopo léxico do bloco",
          "Sempre o arquivo inteiro"
        ],
        "answer": 1,
        "why": "let e const são limitados ao bloco."
      }
    ],
    "practices": [
      {
        "title": "Atualize um carrinho",
        "goal": "Calcule total após adicionar unidades.",
        "action": "Altere quantidade e experimente += e -=.",
        "verify": "Compare os totais com a multiplicação manual."
      },
      {
        "title": "Declare com intenção",
        "goal": "Classifique cinco variáveis em let ou const.",
        "action": "Use const onde não houver reatribuição e let onde houver.",
        "verify": "Explique sua escolha para cada nome."
      },
      {
        "title": "Teste o escopo",
        "goal": "Crie blocos com variáveis locais.",
        "action": "Declare uma variável dentro de um if e outra fora.",
        "verify": "Observe que nomes declarados no bloco não ficam disponíveis fora dele."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 3,
    "slug": "aula-03-tipos-coercao-igualdade",
    "title": "Tipos primitivos, conversões e igualdade",
    "short": "Tipos e conversões",
    "subtitle": "Evite surpresas com valores e coerção.",
    "problem": "Por que '5' e 5 não são a mesma coisa?",
    "context": "JavaScript diferencia valores numéricos, strings, booleanos, undefined, null, bigint e symbol; objetos são valores por referência.",
    "concepts": [
      {
        "title": "O tipo acompanha o valor",
        "lead": "JavaScript possui tipagem dinâmica.",
        "detail": "typeof 5 retorna number; typeof '5' retorna string. typeof null é object por compatibilidade histórica."
      },
      {
        "title": "Conversão explícita é previsível",
        "lead": "Number('5') produz o número 5.",
        "detail": "Alguns operadores realizam coerção implícita, como o + entre número e texto."
      },
      {
        "title": "Compare com === por padrão",
        "lead": "=== exige mesmo tipo e valor.",
        "detail": "== pode converter tipos antes de comparar; Object.is trata NaN e -0 de forma específica."
      }
    ],
    "terms": [
      {
        "title": "Primitivo",
        "detail": "Valor não objeto."
      },
      {
        "title": "Coerção",
        "detail": "Conversão automática em expressões."
      },
      {
        "title": "Identidade",
        "detail": "Objetos são comparados por referência."
      }
    ],
    "contrasts": [
      {
        "title": "5 + '2'",
        "detail": "Concatenação produz '52'."
      },
      {
        "title": "5 - '2'",
        "detail": "Subtração converte string, produz 3."
      },
      {
        "title": "5 === '5'",
        "detail": "Falso porque os tipos são distintos."
      }
    ],
    "starterCode": "const texto = '5';\nconst numero = Number(texto);\nconsole.log(typeof texto);\nconsole.log(numero === 5);",
    "task": "Troque '5' por '7' e observe o resultado da comparação.",
    "output": "string\ntrue",
    "incorrectOutputs": [
      "number\ntrue",
      "string\nfalse"
    ],
    "explanation": "typeof texto é string; Number('5') transforma em 5 e a comparação estrita com 5 é verdadeira.",
    "questions": [
      {
        "prompt": "typeof null retorna:",
        "choices": [
          "null",
          "object",
          "undefined"
        ],
        "answer": 1,
        "why": "Esse comportamento é legado da linguagem."
      },
      {
        "prompt": "Qual operador compara sem coerção?",
        "choices": [
          "==",
          "=",
          "==="
        ],
        "answer": 2,
        "why": "=== não converte tipos antes da comparação."
      },
      {
        "prompt": "O que Number('12') retorna?",
        "choices": [
          "Número 12",
          "String '12'",
          "Booleano true"
        ],
        "answer": 0,
        "why": "Number faz conversão numérica explícita."
      }
    ],
    "practices": [
      {
        "title": "Mapeie valores",
        "goal": "Teste typeof com valores variados.",
        "action": "Passe número, texto, true, undefined e null para typeof.",
        "verify": "Registre e explique o caso especial de null."
      },
      {
        "title": "Evite coerção",
        "goal": "Converta entrada de formulário.",
        "action": "Use Number() antes de somar dois valores textuais.",
        "verify": "Diferencie '5'+'2' de Number('5')+Number('2')."
      },
      {
        "title": "Compare objetos",
        "goal": "Reconheça igualdade por referência.",
        "action": "Crie dois objetos com campos iguais e compare com ===.",
        "verify": "Explique por que objetos distintos não têm a mesma identidade."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 4,
    "slug": "aula-04-operadores-e-tabela-verdade",
    "title": "Operadores, precedência e lógica booleana",
    "short": "Operadores e booleana",
    "subtitle": "Calcule, compare e combine condições.",
    "problem": "Como compor regras com E, OU e NÃO?",
    "context": "Expressões lógicas retornam valores booleanos ou operandos conforme o operador. && e || usam curto-circuito; ?? trata especificamente null e undefined.",
    "concepts": [
      {
        "title": "Operadores têm precedência",
        "lead": "Multiplicação precede adição; parênteses explicitam ordem.",
        "detail": "=== compara igualdade estrita; >, <, >= e <= expressam relações numéricas ou lexicográficas."
      },
      {
        "title": "E, OU e NÃO modelam regras",
        "lead": "&& exige duas condições truthy; || aceita uma.",
        "detail": "Em operandos booleanos eles seguem tabelas-verdade. ! inverte o valor lógico."
      },
      {
        "title": "Curto-circuito não é só booleano",
        "lead": "&& e || retornam um dos operandos.",
        "detail": "A expressão a ?? b usa b só quando a é null ou undefined; 0 e string vazia não ativam o fallback."
      }
    ],
    "terms": [
      {
        "title": "&&",
        "detail": "Conjunção e curto-circuito."
      },
      {
        "title": "||",
        "detail": "Disjunção inclusiva e curto-circuito."
      },
      {
        "title": "??",
        "detail": "Fallback apenas para valores nulos."
      }
    ],
    "contrasts": [
      {
        "title": "||",
        "detail": "0 ativa a segunda opção."
      },
      {
        "title": "??",
        "detail": "0 é mantido como valor válido."
      },
      {
        "title": "!",
        "detail": "Converte e inverte truthiness."
      }
    ],
    "starterCode": "const a = true;\nconst b = false;\nconsole.log(a && b);\nconsole.log(a || b);",
    "task": "Altere b para true e observe a tabela-verdade.",
    "output": "false\ntrue",
    "incorrectOutputs": [
      "true\nfalse",
      "false\nfalse"
    ],
    "explanation": "true && false é false; true || false é true.",
    "questions": [
      {
        "prompt": "Quando A && B é verdadeiro?",
        "choices": [
          "Quando ambos são verdadeiros",
          "Quando um é verdadeiro",
          "Sempre que A existe"
        ],
        "answer": 0,
        "why": "A conjunção exige ambas as condições."
      },
      {
        "prompt": "true || true produz:",
        "choices": [
          "false",
          "true",
          "undefined"
        ],
        "answer": 1,
        "why": "OU em JavaScript é inclusivo."
      },
      {
        "prompt": "Qual fallback preserva o número 0?",
        "choices": [
          "valor || 10",
          "valor ?? 10",
          "!valor"
        ],
        "answer": 1,
        "why": "?? só substitui null ou undefined."
      }
    ],
    "practices": [
      {
        "title": "Teste E e OU",
        "goal": "Percorra as quatro combinações booleanas.",
        "action": "Troque a e b entre true e false.",
        "verify": "Registre todos os resultados na tabela-verdade."
      },
      {
        "title": "Avalie precedência",
        "goal": "Compare duas expressões com parênteses.",
        "action": "Execute 2+3*4 e (2+3)*4.",
        "verify": "Explique os valores 14 e 20."
      },
      {
        "title": "Construa regra de acesso",
        "goal": "Verifique idade e autorização.",
        "action": "Crie condições com >=, === e &&.",
        "verify": "Teste casos-limite e explique o comportamento."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 5,
    "slug": "aula-05-condicionais-switch-guard-clauses",
    "title": "Condições, switch e cláusulas de guarda",
    "short": "Tomada de decisão",
    "subtitle": "Escreva caminhos claros e trate casos inválidos.",
    "problem": "Como tratar diferentes entradas sem duplicar lógica?",
    "context": "if, else if, switch e expressões condicionais escolhem caminhos; cláusulas de guarda reduzem aninhamento excessivo.",
    "concepts": [
      {
        "title": "if testa um resultado truthy",
        "lead": "Condições não precisam ser literalmente true.",
        "detail": "Falsy inclui false, 0, -0, 0n, '', null, undefined e NaN."
      },
      {
        "title": "switch compara casos por ===",
        "lead": "switch seleciona o bloco correspondente à expressão.",
        "detail": "Use break quando não quiser continuar para o próximo case; default cuida do não reconhecido."
      },
      {
        "title": "Cláusula de guarda falha cedo",
        "lead": "Valide entradas e retorne antes da lógica principal.",
        "detail": "Essa estrutura melhora legibilidade e concentra tratamento de casos inválidos."
      }
    ],
    "terms": [
      {
        "title": "if/else",
        "detail": "Decisões condicionais encadeadas."
      },
      {
        "title": "switch",
        "detail": "Seleção por comparação estrita."
      },
      {
        "title": "Guarda",
        "detail": "Saída antecipada para caso inválido."
      }
    ],
    "contrasts": [
      {
        "title": "Falsy",
        "detail": "0 e string vazia não entram no if."
      },
      {
        "title": "switch",
        "detail": "Sem break pode haver fallthrough."
      },
      {
        "title": "Ternário",
        "detail": "Boa opção para expressões curtas."
      }
    ],
    "starterCode": "const nota = 7;\nconst situacao = nota >= 7 ? 'aprovado' : 'revisar';\nconsole.log(situacao);",
    "task": "Altere nota para 6 e veja a decisão mudar.",
    "output": "aprovado",
    "incorrectOutputs": [
      "revisar",
      "true"
    ],
    "explanation": "A condição 7 >= 7 é verdadeira, então o ternário seleciona 'aprovado'.",
    "questions": [
      {
        "prompt": "Qual valor é falsy?",
        "choices": [
          "[]",
          "'0'",
          "0"
        ],
        "answer": 2,
        "why": "O número zero é falsy; arrays e strings não vazias são truthy."
      },
      {
        "prompt": "switch usa equivalência de tipo:",
        "choices": [
          "Estrita",
          "Sempre converte strings",
          "Compara apenas números"
        ],
        "answer": 0,
        "why": "switch usa comparações do tipo ===."
      },
      {
        "prompt": "Para que serve uma guarda?",
        "choices": [
          "Adiar validação",
          "Rejeitar caso inválido cedo",
          "Criar global automaticamente"
        ],
        "answer": 1,
        "why": "Guard clauses deixam o fluxo principal menos aninhado."
      }
    ],
    "practices": [
      {
        "title": "Aprovação por nota",
        "goal": "Classifique notas com fronteira em 7.",
        "action": "Teste valores 6, 7 e 8 no ternário.",
        "verify": "Confirme aprovação exatamente na fronteira."
      },
      {
        "title": "Estados de pedido",
        "goal": "Classifique status pendente, pago e cancelado.",
        "action": "Use switch com default para status desconhecido.",
        "verify": "Inclua break ou return evitando execução acidental."
      },
      {
        "title": "Função com guarda",
        "goal": "Retorne erro legível para idade negativa.",
        "action": "Valide a entrada antes do restante da função.",
        "verify": "Teste -1, 0 e 18."
      }
    ],
    "runtime": "both"
  }
];
