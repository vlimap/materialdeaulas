import type { JsLessonSpec } from './lesson-builder';
export const group03: JsLessonSpec[] = [
  {
    "number": 11,
    "slug": "aula-11-map-filter-reduce",
    "title": "Programação de arrays com map, filter e reduce",
    "short": "map, filter e reduce",
    "subtitle": "Transforme, selecione e agregue dados.",
    "problem": "Como processar dados sem criar laços manuais a cada etapa?",
    "context": "map devolve uma transformação por elemento; filter preserva os que atendem ao predicado; reduce acumula um resultado.",
    "concepts": [
      {
        "title": "map transforma cada elemento",
        "lead": "Retorna um novo array com o mesmo comprimento do original.",
        "detail": "O callback recebe valor, índice e array; retorne o valor transformado."
      },
      {
        "title": "filter seleciona elementos",
        "lead": "Retorna novo array contendo somente resultados truthy do predicado.",
        "detail": "O comprimento pode diminuir, e o original não é modificado pelo método em si."
      },
      {
        "title": "reduce combina em um acumulador",
        "lead": "O callback recebe acumulador e valor atual.",
        "detail": "Informe valor inicial explicitamente para evitar erros em arrays vazios."
      }
    ],
    "terms": [
      {
        "title": "map",
        "detail": "Transformação um-para-um."
      },
      {
        "title": "filter",
        "detail": "Seleção por predicado."
      },
      {
        "title": "reduce",
        "detail": "Acumulação com valor inicial."
      }
    ],
    "contrasts": [
      {
        "title": "forEach",
        "detail": "Executa efeitos; retorna undefined."
      },
      {
        "title": "map",
        "detail": "Retorna array transformado."
      },
      {
        "title": "reduce",
        "detail": "Retorna valor agregado."
      }
    ],
    "starterCode": "const nums = [1, 2, 3, 4];\nconst pares = nums.filter(n => n % 2 === 0);\nconsole.log(pares.map(n => n * 10));",
    "task": "Mude o multiplicador 10 para 3.",
    "output": "[20,40]",
    "incorrectOutputs": [
      "[10,20,30,40]",
      "[2,4]"
    ],
    "explanation": "filter conserva 2 e 4; map transforma esses itens em 20 e 40.",
    "questions": [
      {
        "prompt": "Qual método retorna array do mesmo tamanho?",
        "choices": [
          "filter",
          "map",
          "reduce"
        ],
        "answer": 1,
        "why": "map transforma um-para-um."
      },
      {
        "prompt": "Qual método calcula um total?",
        "choices": [
          "reduce",
          "find",
          "includes"
        ],
        "answer": 0,
        "why": "reduce acumula valores com função redutora."
      },
      {
        "prompt": "Qual é importante para reduce sobre lista vazia?",
        "choices": [
          "Uma string de espaço",
          "Valor inicial do acumulador",
          "Um DOM"
        ],
        "answer": 1,
        "why": "Sem valor inicial, reduce lança erro para lista vazia."
      }
    ],
    "practices": [
      {
        "title": "Preços com imposto",
        "goal": "Aplique multiplicação a cada preço.",
        "action": "Use map retornando novo valor.",
        "verify": "Compare entrada e saída."
      },
      {
        "title": "Produtos ativos",
        "goal": "Selecione itens com ativo=true.",
        "action": "Use filter com predicado.",
        "verify": "Verifique que a lista original permaneceu."
      },
      {
        "title": "Resumo financeiro",
        "goal": "Some subtotais de um carrinho.",
        "action": "Combine map e reduce com inicial 0.",
        "verify": "Teste carrinho vazio e preenchido."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 12,
    "slug": "aula-12-set-map-weakmap-json",
    "title": "Set, Map, WeakMap e serialização JSON",
    "short": "Coleções avançadas",
    "subtitle": "Chaves únicas, mapas e conversão de dados.",
    "problem": "Como representar itens únicos e associações?",
    "context": "Set descarta duplicatas pelo critério SameValueZero; Map permite chaves de qualquer valor; JSON é um formato textual de dados.",
    "concepts": [
      {
        "title": "Set reúne valores únicos",
        "lead": "new Set([1,1,2]) contém dois valores.",
        "detail": "has verifica presença; spread transforma o Set em array."
      },
      {
        "title": "Map armazena chave e valor",
        "lead": "Diferentemente de objetos convencionais, chaves podem ser objetos.",
        "detail": "WeakMap usa chaves que devem ser objetos ou symbols não registrados e não é iterável."
      },
      {
        "title": "JSON não conserva todos os tipos JavaScript",
        "lead": "JSON.stringify serializa valores JSON válidos.",
        "detail": "Funções, undefined e BigInt exigem cuidados; JSON.parse lê texto, não valida seu esquema de domínio."
      }
    ],
    "terms": [
      {
        "title": "Set",
        "detail": "Coleção de valores únicos."
      },
      {
        "title": "Map",
        "detail": "Associação de chave e valor."
      },
      {
        "title": "JSON",
        "detail": "Representação textual interoperável."
      }
    ],
    "contrasts": [
      {
        "title": "Set",
        "detail": "Somente valores únicos."
      },
      {
        "title": "Map",
        "detail": "Associa chaves e valores."
      },
      {
        "title": "WeakMap",
        "detail": "Não enumerável e referências fracas às chaves."
      }
    ],
    "starterCode": "const ids = [1, 2, 2, 3];\nconst unicos = [...new Set(ids)];\nconsole.log(unicos.length);\nconsole.log(JSON.stringify(unicos));",
    "task": "Acrescente mais um ID repetido e observe o tamanho.",
    "output": "3\n[1,2,3]",
    "incorrectOutputs": [
      "4\n[1,2,2,3]",
      "3\nundefined"
    ],
    "explanation": "Set descarta o ID duplicado e JSON.stringify serializa o array com três números.",
    "questions": [
      {
        "prompt": "Set permite duplicatas iguais?",
        "choices": [
          "Sim",
          "Não",
          "Somente strings"
        ],
        "answer": 1,
        "why": "Set mantém valores únicos."
      },
      {
        "prompt": "Map permite objeto como chave?",
        "choices": [
          "Sim",
          "Não, somente string",
          "Somente número"
        ],
        "answer": 0,
        "why": "Map aceita chaves de qualquer tipo."
      },
      {
        "prompt": "JSON.parse realiza validação de domínio?",
        "choices": [
          "Sempre",
          "Não, somente converte JSON sintático",
          "Executa JavaScript"
        ],
        "answer": 1,
        "why": "O formato ser válido não garante dados esperados."
      }
    ],
    "practices": [
      {
        "title": "Remova duplicatas",
        "goal": "Prepare lista de e-mails repetidos.",
        "action": "Converta com new Set e spread.",
        "verify": "Confira ordem e quantidade."
      },
      {
        "title": "Tabela de preços",
        "goal": "Associe produto a preço usando Map.",
        "action": "Use set, get e has.",
        "verify": "Teste chave ausente."
      },
      {
        "title": "Salvar configuração",
        "goal": "Serializa configurações em JSON.",
        "action": "Use stringify e parse com try/catch.",
        "verify": "Confira erro de JSON malformado."
      }
    ],
    "runtime": "both"
  },
  {
    "number": 13,
    "slug": "aula-13-dom-selecao-manipulacao",
    "title": "DOM, seleção de elementos e manipulação segura",
    "short": "DOM na prática",
    "subtitle": "Conecte dados JavaScript a elementos HTML.",
    "problem": "Como atualizar o conteúdo visível de uma página?",
    "context": "O navegador expõe a estrutura do documento por meio do DOM. querySelector localiza elementos e textContent altera texto sem interpretar HTML.",
    "concepts": [
      {
        "title": "DOM representa nós e elementos",
        "lead": "document.querySelector retorna o primeiro elemento correspondente.",
        "detail": "O retorno pode ser null, portanto verifique antes de acessar propriedades."
      },
      {
        "title": "textContent evita interpretar marcação",
        "lead": "Use textContent quando estiver mostrando dados fornecidos por usuários.",
        "detail": "innerHTML interpreta HTML e pode introduzir XSS se receber conteúdo não confiável."
      },
      {
        "title": "Crie elementos com APIs do DOM",
        "lead": "document.createElement e append permitem montar interfaces.",
        "detail": "Reutilize classes CSS em vez de misturar lógica e estilos inline."
      }
    ],
    "terms": [
      {
        "title": "DOM",
        "detail": "Modelo de objetos do documento."
      },
      {
        "title": "querySelector",
        "detail": "Seleciona primeiro elemento CSS correspondente."
      },
      {
        "title": "textContent",
        "detail": "Atribui texto sem interpretar tags."
      }
    ],
    "contrasts": [
      {
        "title": "textContent",
        "detail": "Seguro para conteúdo textual."
      },
      {
        "title": "innerHTML",
        "detail": "Interpreta HTML: cuidado com XSS."
      },
      {
        "title": "createElement",
        "detail": "Cria um nó com API DOM."
      }
    ],
    "starterCode": "const p = document.createElement('p');\np.textContent = 'Olá, DOM';\ndocument.body.append(p);\nconsole.log(p.textContent);",
    "task": "Altere o texto e observe a saída.",
    "output": "Olá, DOM",
    "incorrectOutputs": [
      "<p>Olá, DOM</p>",
      "undefined"
    ],
    "explanation": "textContent contém apenas o texto definido e o nó é inserido no documento isolado.",
    "questions": [
      {
        "prompt": "querySelector pode retornar:",
        "choices": [
          "Somente elementos",
          "Elemento ou null",
          "Somente strings"
        ],
        "answer": 1,
        "why": "Nenhum elemento correspondente resulta em null."
      },
      {
        "prompt": "Para texto de usuário, prefira:",
        "choices": [
          "innerHTML",
          "textContent",
          "eval"
        ],
        "answer": 1,
        "why": "textContent não interpreta marcação HTML."
      },
      {
        "prompt": "Qual API cria elemento?",
        "choices": [
          "document.createElement",
          "JSON.stringify",
          "Object.freeze"
        ],
        "answer": 0,
        "why": "createElement instancia um elemento DOM."
      }
    ],
    "practices": [
      {
        "title": "Saudação dinâmica",
        "goal": "Exiba nome em um elemento.",
        "action": "Crie p e defina textContent.",
        "verify": "Teste textos contendo tags literais."
      },
      {
        "title": "Lista dinâmica",
        "goal": "Adicione itens em ul com createElement.",
        "action": "Monte li para cada entrada.",
        "verify": "Confira a árvore DOM pelo inspetor."
      },
      {
        "title": "Componente de aviso",
        "goal": "Crie caixa de aviso sem innerHTML.",
        "action": "Use APIs DOM e classes CSS.",
        "verify": "Verifique que dados externos não viram marcação."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
  },
  {
    "number": 14,
    "slug": "aula-14-eventos-delegacao-bubbling",
    "title": "Eventos, propagação e delegação",
    "short": "Eventos do navegador",
    "subtitle": "Responda a cliques sem misturar responsabilidades.",
    "problem": "Como reagir a ações de usuários?",
    "context": "addEventListener registra callbacks. Eventos se propagam por captura e bubbling; delegação usa um ancestral para lidar com elementos dinâmicos.",
    "concepts": [
      {
        "title": "Eventos conectam interação e lógica",
        "lead": "Clique, teclado e entrada disparam callbacks.",
        "detail": "Use addEventListener em vez de atributos inline como onclick."
      },
      {
        "title": "Propagação possui fases",
        "lead": "Captura percorre ancestrais; bubbling retorna por ancestrais.",
        "detail": "stopPropagation altera propagação; preventDefault cancela a ação padrão quando permitido."
      },
      {
        "title": "Delegação evita múltiplos ouvintes",
        "lead": "Um ancestral observa interações em seus descendentes.",
        "detail": "Use target ou closest com validação para interpretar corretamente o elemento acionado."
      }
    ],
    "terms": [
      {
        "title": "Evento",
        "detail": "Objeto com informações da interação."
      },
      {
        "title": "Bubbling",
        "detail": "Propagação do alvo aos ancestrais."
      },
      {
        "title": "Delegação",
        "detail": "Tratamento em um elemento ancestral."
      }
    ],
    "contrasts": [
      {
        "title": "preventDefault",
        "detail": "Cancela ação padrão, não a propagação."
      },
      {
        "title": "stopPropagation",
        "detail": "Interrompe propagação."
      },
      {
        "title": "once",
        "detail": "Configuração para ouvir uma vez."
      }
    ],
    "starterCode": "const botao = document.createElement('button');\nbotao.textContent = 'Clique';\nbotao.addEventListener('click', () => console.log('clicou'));\nbotao.click();",
    "task": "Altere o texto da mensagem do evento.",
    "output": "clicou",
    "incorrectOutputs": [
      "Clique",
      "undefined"
    ],
    "explanation": "botao.click() dispara programaticamente o evento e o listener registra 'clicou'.",
    "questions": [
      {
        "prompt": "Qual método registra um listener?",
        "choices": [
          "addEventListener",
          "appendChild",
          "parseInt"
        ],
        "answer": 0,
        "why": "addEventListener vincula o callback."
      },
      {
        "prompt": "preventDefault e stopPropagation são iguais?",
        "choices": [
          "Sim",
          "Não",
          "Apenas em forms"
        ],
        "answer": 1,
        "why": "Um cancela ação padrão; o outro controla propagação."
      },
      {
        "prompt": "Delegação costuma usar:",
        "choices": [
          "Um ancestral como listener",
          "Um listener por pixel",
          "eval"
        ],
        "answer": 0,
        "why": "Eventos propagados podem ser tratados no ancestral."
      }
    ],
    "practices": [
      {
        "title": "Clique e contador",
        "goal": "Incremente uma variável por evento.",
        "action": "Registre click em botão criado.",
        "verify": "Dispare duas vezes e confira o total."
      },
      {
        "title": "Fases de evento",
        "goal": "Monte pai e botão interno.",
        "action": "Adicione listeners capture e bubbling.",
        "verify": "Registre a ordem de execução."
      },
      {
        "title": "Lista dinâmica",
        "goal": "Crie itens adicionados após o listener.",
        "action": "Delegue click ao contêiner.",
        "verify": "Confira ações para novos itens."
      }
    ],
    "runtime": "browser"
  },
  {
    "number": 15,
    "slug": "aula-15-formularios-validacao-acessibilidade",
    "title": "Formulários, validação e acessibilidade",
    "short": "Formulários acessíveis",
    "subtitle": "Colete dados sem bloquear teclado ou leitores de tela.",
    "problem": "Como validar dados enviados por um formulário?",
    "context": "HTML oferece restrições nativas; JavaScript complementa validações de domínio. Eventos submit e FormData ajudam a tratar o envio.",
    "concepts": [
      {
        "title": "Campos precisam de rótulos reais",
        "lead": "label associado a input torna o formulário compreensível.",
        "detail": "required e type=email auxiliam, mas não dispensam validação no servidor."
      },
      {
        "title": "submit centraliza o envio",
        "lead": "O evento submit representa a tentativa de envio do formulário.",
        "detail": "FormData coleta pares nome/valor; preventDefault é usado quando o fluxo é controlado por JS."
      },
      {
        "title": "Informe os erros com clareza",
        "lead": "Mensagens devem explicar o problema e como corrigir.",
        "detail": "Associe mensagens ao campo com aria-describedby e mantenha foco navegável."
      }
    ],
    "terms": [
      {
        "title": "label",
        "detail": "Descrição acessível de controle."
      },
      {
        "title": "FormData",
        "detail": "Leitura de campos de formulário."
      },
      {
        "title": "ValidityState",
        "detail": "Estado das restrições nativas."
      }
    ],
    "contrasts": [
      {
        "title": "HTML required",
        "detail": "Validação básica na interface."
      },
      {
        "title": "JavaScript",
        "detail": "Regras e feedback personalizados."
      },
      {
        "title": "Servidor",
        "detail": "Validação obrigatória para confiança."
      }
    ],
    "starterCode": "const form = document.createElement('form');\nconst campo = document.createElement('input');\ncampo.name = 'nome'; campo.required = true;\nform.append(campo);\nconsole.log(campo.validity.valueMissing);",
    "task": "Atribua campo.value = 'Ana' antes do console e teste.",
    "output": "true",
    "incorrectOutputs": [
      "false",
      "undefined"
    ],
    "explanation": "O campo required vazio não satisfaz a restrição de preenchimento.",
    "questions": [
      {
        "prompt": "Validação no navegador substitui o backend?",
        "choices": [
          "Sim",
          "Não",
          "Só com TypeScript"
        ],
        "answer": 1,
        "why": "Entradas do cliente não são confiáveis."
      },
      {
        "prompt": "Qual elemento dá nome acessível ao input?",
        "choices": [
          "label",
          "div sem texto",
          "script"
        ],
        "answer": 0,
        "why": "label vinculado ao campo fornece um rótulo."
      },
      {
        "prompt": "Qual evento representa envio de form?",
        "choices": [
          "mouseover",
          "submit",
          "keydown obrigatório"
        ],
        "answer": 1,
        "why": "submit é disparado na submissão."
      }
    ],
    "practices": [
      {
        "title": "Form de contato",
        "goal": "Crie campos nome e e-mail.",
        "action": "Use labels e type=email/required.",
        "verify": "Teste vazio e formato inválido."
      },
      {
        "title": "Feedback de erro",
        "goal": "Exiba orientação para campo inválido.",
        "action": "Use setCustomValidity ou texto associado.",
        "verify": "Teste navegação por teclado."
      },
      {
        "title": "Cadastro acessível",
        "goal": "Implemente submissão client-side com FormData.",
        "action": "Intercepte submit, valide e mostre feedback.",
        "verify": "Verifique foco, anúncio de erro e segurança dos dados."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms"
  }
];
