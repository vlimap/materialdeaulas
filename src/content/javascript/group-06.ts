import type { JsLessonSpec } from './lesson-builder';
export const group06: JsLessonSpec[] = [
  {
    "number": 26,
    "slug": "aula-26-testes-depuracao-tdd",
    "title": "Testes automatizados, depuração e TDD",
    "short": "Testes e depuração",
    "subtitle": "Escreva evidências de comportamento esperado.",
    "problem": "Como impedir que correções causem novas falhas?",
    "context": "Testes unitários isolam regras; integração verifica partes combinadas; E2E exercita fluxos pela perspectiva do usuário.",
    "concepts": [
      {
        "title": "Testes têm entrada e saída esperada",
        "lead": "assert compara valor real com expectativa explícita.",
        "detail": "Cobrir casos válidos, inválidos e limites é melhor do que testar apenas caminho feliz."
      },
      {
        "title": "TDD segue vermelho, verde, refatorar",
        "lead": "Primeiro um teste que falha; depois implementação mínima.",
        "detail": "Refatorar preserva o comportamento comprovado pela suíte."
      },
      {
        "title": "Depuração usa inspeção de estados",
        "lead": "Breakpoints pausam na linha e permitem observar variáveis.",
        "detail": "Testes não eliminam necessidade de diagnóstico e logs; evite registrar segredos."
      }
    ],
    "terms": [
      {
        "title": "assert",
        "detail": "Verifica uma condição."
      },
      {
        "title": "Unitário",
        "detail": "Regra isolada."
      },
      {
        "title": "E2E",
        "detail": "Fluxo real entre componentes."
      }
    ],
    "contrasts": [
      {
        "title": "Unitário",
        "detail": "Rápido, foco pequeno."
      },
      {
        "title": "Integração",
        "detail": "Colaboração entre partes."
      },
      {
        "title": "E2E",
        "detail": "Comportamento de ponta a ponta."
      }
    ],
    "starterCode": "function dobro(n) { return n * 2; }\nconst atual = dobro(4);\nconsole.log(atual === 8 ? 'PASSOU' : 'FALHOU');",
    "task": "Mude a expectativa 8 para 9 e observe falha.",
    "output": "PASSOU",
    "incorrectOutputs": [
      "FALHOU",
      "undefined"
    ],
    "explanation": "dobro(4) é 8, logo a verificação é verdadeira.",
    "questions": [
      {
        "prompt": "Qual prática define resultado esperado?",
        "choices": [
          "Assert",
          "Timeout",
          "HTML"
        ],
        "answer": 0,
        "why": "Testes com assert conferem comportamento."
      },
      {
        "prompt": "TDD começa por:",
        "choices": [
          "Teste que falha",
          "Deploy direto",
          "Refatoração sem teste"
        ],
        "answer": 0,
        "why": "O ciclo Red-Green-Refactor começa com um teste."
      },
      {
        "prompt": "Breakpoint serve para:",
        "choices": [
          "Pausar e inspecionar estado",
          "Atualizar npm",
          "Formatar CSS"
        ],
        "answer": 0,
        "why": "Depurador permite analisar a execução."
      }
    ],
    "practices": [
      {
        "title": "Testes de soma",
        "goal": "Escreva teste com node:assert/strict.",
        "action": "Compare soma(2,3) com 5.",
        "verify": "Teste entrada zero e negativa."
      },
      {
        "title": "Ciclo TDD",
        "goal": "Implemente validação de idade.",
        "action": "Crie teste que falha, corrija, refatore.",
        "verify": "Verifique que testes continuem passando."
      },
      {
        "title": "Suíte de regras",
        "goal": "Teste serviço sem rede.",
        "action": "Use node:test ou Vitest com casos distintos.",
        "verify": "Confira saída do CI e relatório de falhas."
      }
    ],
    "runtime": "both",
    "docs": "https://nodejs.org/api/test.html"
  },
  {
    "number": 27,
    "slug": "aula-27-performance-memory-workers",
    "title": "Performance, memória, profiling e Web Workers",
    "short": "Performance e memória",
    "subtitle": "Observe gargalos sem otimização prematura.",
    "problem": "Como manter interface responsiva com muitos dados?",
    "context": "Complexidade e perfil real precisam ser analisados juntos. Performance API mede duração; Web Workers podem executar tarefas na thread de trabalho separada.",
    "concepts": [
      {
        "title": "Meça antes de otimizar",
        "lead": "performance.now fornece marca temporal de alta resolução.",
        "detail": "Use ferramentas de profiling e compare cenários reproduzíveis; microbenchmarks podem enganar."
      },
      {
        "title": "Memória depende de referências alcançáveis",
        "lead": "O coletor de lixo libera objetos não alcançáveis.",
        "detail": "Listeners e closures duradouras podem manter objetos vivos mais tempo que o necessário."
      },
      {
        "title": "Web Workers isolam processamento",
        "lead": "Worker executa JavaScript sem acesso direto ao DOM.",
        "detail": "postMessage troca dados por structured clone ou transferência de alguns objetos."
      }
    ],
    "terms": [
      {
        "title": "Profiling",
        "detail": "Mede execução real."
      },
      {
        "title": "GC",
        "detail": "Coleta objetos inalcançáveis."
      },
      {
        "title": "Worker",
        "detail": "Thread isolada sem acesso direto ao DOM."
      }
    ],
    "contrasts": [
      {
        "title": "O(n)",
        "detail": "Custo cresce linearmente."
      },
      {
        "title": "O(n²)",
        "detail": "Crescimento quadrático."
      },
      {
        "title": "Worker",
        "detail": "Move tarefas intensivas fora da thread UI."
      }
    ],
    "starterCode": "const dados = [1, 2, 3, 4];\nlet soma = 0;\nfor (const n of dados) soma += n;\nconsole.log(soma);",
    "task": "Adicione números e compare quantidade de iterações.",
    "output": "10",
    "incorrectOutputs": [
      "4",
      "1234"
    ],
    "explanation": "O laço percorre quatro valores e acumula 10; custo cresce com o tamanho.",
    "questions": [
      {
        "prompt": "Como identificar gargalo?",
        "choices": [
          "Medir e perfilar",
          "Adivinhar",
          "Adicionar console em todo pixel"
        ],
        "answer": 0,
        "why": "Medições orientam decisões."
      },
      {
        "prompt": "Web Worker acessa DOM diretamente?",
        "choices": [
          "Sim",
          "Não",
          "Somente com CSS"
        ],
        "answer": 1,
        "why": "Worker não possui DOM da página."
      },
      {
        "prompt": "O GC libera objetos:",
        "choices": [
          "Alcançáveis sempre",
          "Não alcançáveis",
          "Somente arrays"
        ],
        "answer": 1,
        "why": "O coletor lida com objetos inalcançáveis."
      }
    ],
    "practices": [
      {
        "title": "Benchmark responsável",
        "goal": "Meça execução de funções.",
        "action": "Use performance.now e múltiplas repetições.",
        "verify": "Compare distribuição e não único número."
      },
      {
        "title": "Remoção de listeners",
        "goal": "Registre e remova ouvinte.",
        "action": "Use removeEventListener ou AbortSignal.",
        "verify": "Confira ausência de chamadas posteriores."
      },
      {
        "title": "Worker de cálculo",
        "goal": "Transfira cálculo custoso para Worker.",
        "action": "Use postMessage e onmessage.",
        "verify": "Verifique que a interface não congela."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
  },
  {
    "number": 28,
    "slug": "aula-28-seguranca-xss-cors-csp-dependencias",
    "title": "Segurança: XSS, CORS, CSP e dependências",
    "short": "JavaScript seguro",
    "subtitle": "Proteja dados, interfaces e fronteiras de confiança.",
    "problem": "Como evitar que dados externos virem código malicioso?",
    "context": "XSS acontece quando conteúdo não confiável é interpretado como código ativo. Validação, saída contextual e CSP reduzem a superfície de risco.",
    "concepts": [
      {
        "title": "Nunca interprete texto como HTML sem necessidade",
        "lead": "Use textContent para textos de usuários.",
        "detail": "Evite eval, Function dinâmica e innerHTML com dados não confiáveis; sanitização deve ser contextual."
      },
      {
        "title": "CORS não é autenticação",
        "lead": "CORS controla leitura de respostas por scripts entre origens.",
        "detail": "Servidor precisa autenticar, autorizar e validar entradas independentemente de CORS."
      },
      {
        "title": "CSP e dependências exigem manutenção",
        "lead": "Content Security Policy restringe fontes de scripts.",
        "detail": "Audite dependências e trate segredos fora do código cliente; CSP é defesa em profundidade."
      }
    ],
    "terms": [
      {
        "title": "XSS",
        "detail": "Execução indevida de código na página."
      },
      {
        "title": "CORS",
        "detail": "Política de leitura entre origens."
      },
      {
        "title": "CSP",
        "detail": "Política de fontes de conteúdo."
      }
    ],
    "contrasts": [
      {
        "title": "textContent",
        "detail": "Não interpreta tags."
      },
      {
        "title": "innerHTML",
        "detail": "Interpreta markup; risco com dados."
      },
      {
        "title": "CORS",
        "detail": "Não substitui autenticação."
      }
    ],
    "starterCode": "const entrada = '<b>texto</b>';\nconst el = document.createElement('p');\nel.textContent = entrada;\nconsole.log(el.textContent);",
    "task": "Altere entrada e observe que é tratada como texto.",
    "output": "<b>texto</b>",
    "incorrectOutputs": [
      "texto",
      "undefined"
    ],
    "explanation": "textContent mantém tags como caracteres, sem convertê-las em elementos HTML.",
    "questions": [
      {
        "prompt": "Qual opção segura para texto externo?",
        "choices": [
          "textContent",
          "innerHTML sem sanear",
          "eval"
        ],
        "answer": 0,
        "why": "textContent não interpreta HTML."
      },
      {
        "prompt": "CORS protege autenticação do servidor?",
        "choices": [
          "Sim",
          "Não",
          "Só com HTTPS"
        ],
        "answer": 1,
        "why": "CORS não autentica solicitações."
      },
      {
        "prompt": "Onde guardar segredo de API privada?",
        "choices": [
          "Em código cliente",
          "No servidor/gerenciador seguro",
          "Em data-attribute público"
        ],
        "answer": 1,
        "why": "Segredos não devem ser enviados ao navegador."
      }
    ],
    "practices": [
      {
        "title": "Entrada não confiável",
        "goal": "Renderize string que contém tags.",
        "action": "Use textContent em elemento.",
        "verify": "Confirme ausência de marcação criada."
      },
      {
        "title": "Requisição com controle de acesso",
        "goal": "Explique diferença entre CORS e autenticação.",
        "action": "Descreva quem valida credenciais.",
        "verify": "Documente a regra do servidor."
      },
      {
        "title": "Auditoria de projeto",
        "goal": "Revise dependências e potenciais sinks XSS.",
        "action": "Use npm audit e inspeção manual.",
        "verify": "Registre correções, CSP e testes."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP"
  },
  {
    "number": 29,
    "slug": "aula-29-arquitetura-design-patterns-typescript",
    "title": "Arquitetura JavaScript, padrões e integração TypeScript",
    "short": "Arquitetura e padrões",
    "subtitle": "Organize projetos testáveis e fáceis de manter.",
    "problem": "Como crescer uma aplicação sem centralizar tudo em um arquivo?",
    "context": "Separar regras, adaptadores e interface melhora testabilidade. JavaScript suporta funções, classes e módulos; TypeScript adiciona análise estática durante desenvolvimento.",
    "concepts": [
      {
        "title": "Separe lógica de interface",
        "lead": "Regras de negócio devem ser testáveis sem o DOM.",
        "detail": "Uma arquitetura modular permite trocar fonte de dados sem reescrever todas as regras."
      },
      {
        "title": "Injete dependências quando necessário",
        "lead": "Passe a dependência como argumento ou construtor.",
        "detail": "Evite acoplamento direto a fetch, localStorage e serviços externos dentro da regra pura."
      },
      {
        "title": "TypeScript verifica antes do runtime",
        "lead": "Tipos desaparecem na emissão de JavaScript.",
        "detail": "Validação de dados externos continua necessária mesmo com TypeScript."
      }
    ],
    "terms": [
      {
        "title": "Módulo",
        "detail": "Fronteira de responsabilidade."
      },
      {
        "title": "Injeção",
        "detail": "Receber dependência de fora."
      },
      {
        "title": "TypeScript",
        "detail": "Análise estática adicional."
      }
    ],
    "contrasts": [
      {
        "title": "Domínio",
        "detail": "Regras independentes de UI."
      },
      {
        "title": "Adaptador",
        "detail": "Integra APIs e persistência."
      },
      {
        "title": "Interface",
        "detail": "Mostra dados e interações."
      }
    ],
    "starterCode": "function total(precos) {\n  return precos.reduce((s, p) => s + p, 0);\n}\nconsole.log(total([10, 5, 2]));",
    "task": "Altere preços mantendo a função pura.",
    "output": "17",
    "incorrectOutputs": [
      "3",
      "1052"
    ],
    "explanation": "Uma função de domínio pura calcula o total sem depender do DOM ou fetch.",
    "questions": [
      {
        "prompt": "Onde colocar cálculo puro?",
        "choices": [
          "Na regra de domínio",
          "Somente em evento DOM",
          "Dentro do CSS"
        ],
        "answer": 0,
        "why": "Regras podem executar e ser testadas isoladamente."
      },
      {
        "prompt": "TypeScript valida automaticamente JSON externo em runtime?",
        "choices": [
          "Sempre",
          "Não",
          "Apenas ao compilar CSS"
        ],
        "answer": 1,
        "why": "Tipos são apagados; dados externos exigem validação."
      },
      {
        "prompt": "O que melhora inversão de dependência?",
        "choices": [
          "Criar global",
          "Injetar serviço por argumento",
          "Usar eval"
        ],
        "answer": 1,
        "why": "Dependências explícitas reduzem acoplamento."
      }
    ],
    "practices": [
      {
        "title": "Separe camadas",
        "goal": "Divida cálculo de carrinho e DOM.",
        "action": "Crie módulo total() independente.",
        "verify": "Teste sem navegador."
      },
      {
        "title": "Fake de serviço",
        "goal": "Injete função para buscar dados.",
        "action": "Use fake nos testes e fetch real na aplicação.",
        "verify": "Verifique que regras não dependem da rede."
      },
      {
        "title": "Migração gradual",
        "goal": "Adicione checagens com JSDoc ou TypeScript.",
        "action": "Configure checagem gradual.",
        "verify": "Teste entradas externas em runtime."
      }
    ],
    "runtime": "both",
    "docs": "https://www.typescriptlang.org/docs/"
  },
  {
    "number": 30,
    "slug": "aula-30-projeto-final-javascript",
    "title": "Projeto integrador: aplicação JavaScript completa",
    "short": "Projeto final JavaScript",
    "subtitle": "Da especificação ao teste e deploy.",
    "problem": "Como aplicar JavaScript para resolver um problema real?",
    "context": "O projeto final reúne módulos, DOM, eventos, formulários, persistência, requisições, validação, segurança e testes automatizados.",
    "concepts": [
      {
        "title": "Defina requisitos testáveis",
        "lead": "Descreva usuários, entradas, regras e saídas.",
        "detail": "Um MVP bem delimitado evita funcionalidades desnecessárias e facilita concluir o projeto."
      },
      {
        "title": "Construa fluxo ponta a ponta",
        "lead": "Separe regras, interface, persistência e comunicação com API.",
        "detail": "Implemente loading, vazio, erro e sucesso como estados explícitos."
      },
      {
        "title": "Valide qualidade antes de publicar",
        "lead": "Teste regras, acessibilidade, segurança e desempenho.",
        "detail": "Documente limitações, faça build e configure deploy sem segredos no frontend."
      }
    ],
    "terms": [
      {
        "title": "MVP",
        "detail": "Solução mínima verificável."
      },
      {
        "title": "Testes",
        "detail": "Evidências de comportamento."
      },
      {
        "title": "Deploy",
        "detail": "Publicação da versão construída."
      }
    ],
    "contrasts": [
      {
        "title": "Interface",
        "detail": "DOM, eventos e formulários."
      },
      {
        "title": "Domínio",
        "detail": "Cálculos e validações puras."
      },
      {
        "title": "Infraestrutura",
        "detail": "Fetch, armazenamento e deploy."
      }
    ],
    "starterCode": "const itens = [{ preco: 10 }, { preco: 5 }];\nconst total = itens.reduce((s, item) => s + item.preco, 0);\nconsole.log(total);",
    "task": "Adicione um item de preço 7 e verifique o total.",
    "output": "15",
    "incorrectOutputs": [
      "2",
      "105"
    ],
    "explanation": "O acumulador soma preços 10 e 5, produzindo 15.",
    "questions": [
      {
        "prompt": "Qual primeira etapa?",
        "choices": [
          "Definir problema e critérios",
          "Criar animação",
          "Fazer deploy sem testes"
        ],
        "answer": 0,
        "why": "Objetivo e critérios tornam resultados verificáveis."
      },
      {
        "prompt": "Qual estado deve ser tratado em chamadas de API?",
        "choices": [
          "Apenas sucesso",
          "Carregamento, erro, vazio e sucesso",
          "Somente spinner"
        ],
        "answer": 1,
        "why": "Fluxos reais possuem estados distintos."
      },
      {
        "prompt": "Pode colocar segredo privado no bundle?",
        "choices": [
          "Sim",
          "Não",
          "Somente com minificação"
        ],
        "answer": 1,
        "why": "Código entregue ao navegador é público."
      }
    ],
    "practices": [
      {
        "title": "Especificação",
        "goal": "Defina um catálogo ou gerenciador de tarefas.",
        "action": "Escreva três requisitos e casos de aceitação.",
        "verify": "Revise entradas e estados."
      },
      {
        "title": "Implementação",
        "goal": "Construa módulos, DOM e persistência.",
        "action": "Implemente operações e feedback acessível.",
        "verify": "Teste casos de sucesso e falha."
      },
      {
        "title": "Entrega final",
        "goal": "Finalize testes, documentação e build.",
        "action": "Faça avaliação de acessibilidade e segurança.",
        "verify": "Registre URL, limitações e evidências."
      }
    ],
    "runtime": "both"
  }
];
