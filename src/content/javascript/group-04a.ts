import type { JsLessonSpec } from './lesson-builder';
export const group04a: JsLessonSpec[] = [
  {
    "number": 16,
    "slug": "aula-16-web-storage-json-url",
    "title": "Web Storage, JSON e URLs no navegador",
    "short": "Dados no navegador",
    "subtitle": "Persistência local, URLs e validação de dados.",
    "problem": "Como manter preferências após atualizar uma página?",
    "context": "localStorage e sessionStorage persistem pequenas strings por origem; em iframes isolados ou modos privados, o acesso pode falhar.",
    "concepts": [
      {
        "title": "localStorage armazena strings",
        "lead": "setItem grava uma chave e getItem recupera.",
        "detail": "É síncrono, limitado por origem e inadequado para dados sensíveis; trate exceções e cotas."
      },
      {
        "title": "JSON permite guardar estruturas",
        "lead": "JSON.stringify converte objetos; JSON.parse reconstitui dados.",
        "detail": "Valide o formato antes de usar; não preserva automaticamente métodos e tipos especiais."
      },
      {
        "title": "URLSearchParams trata parâmetros",
        "lead": "Manipule queries sem concatenar manualmente caracteres especiais.",
        "detail": "Use encode e as APIs específicas para gerar URLs válidas."
      }
    ],
    "terms": [
      {
        "title": "localStorage",
        "detail": "Persistência simples por origem."
      },
      {
        "title": "JSON",
        "detail": "Formato de intercâmbio."
      },
      {
        "title": "URLSearchParams",
        "detail": "Manipulação de query strings."
      }
    ],
    "contrasts": [
      {
        "title": "sessionStorage",
        "detail": "Persiste no contexto da aba."
      },
      {
        "title": "localStorage",
        "detail": "Persiste além da sessão usual."
      },
      {
        "title": "IndexedDB",
        "detail": "Banco para dados estruturados."
      }
    ],
    "starterCode": "const p = new URLSearchParams({ busca: 'café', pagina: '2' });\nconsole.log(p.get('busca'));\nconsole.log(p.get('pagina'));",
    "task": "Altere o parâmetro pagina para 3.",
    "output": "café\n2",
    "incorrectOutputs": [
      "busca\npagina",
      "cafe\n3"
    ],
    "explanation": "URLSearchParams lê valores pelas chaves e preserva acentos decodificados.",
    "questions": [
      {
        "prompt": "Que tipo localStorage armazena?",
        "choices": [
          "Objetos diretamente",
          "Strings",
          "Funções executáveis"
        ],
        "answer": 1,
        "why": "Converta objetos para JSON se necessário."
      },
      {
        "prompt": "Armazenar um segredo em localStorage é sempre seguro?",
        "choices": [
          "Sim",
          "Não",
          "Só com CSS"
        ],
        "answer": 1,
        "why": "JavaScript da origem pode ler os valores."
      },
      {
        "prompt": "O que URLSearchParams manipula?",
        "choices": [
          "Query strings",
          "Banco SQL",
          "Arquivos do SO"
        ],
        "answer": 0,
        "why": "Trata parâmetros da URL."
      }
    ],
    "practices": [
      {
        "title": "Preferência de tema",
        "goal": "Salve claro/escuro em página própria.",
        "action": "Use localStorage com try/catch e fallback.",
        "verify": "Teste atualização e restrição de armazenamento."
      },
      {
        "title": "Objeto JSON",
        "goal": "Converta objeto de e para texto.",
        "action": "Use stringify/parse com validação.",
        "verify": "Teste texto JSON inválido."
      },
      {
        "title": "Filtros de busca",
        "goal": "Gere query de catálogo.",
        "action": "Use URLSearchParams para busca e página.",
        "verify": "Teste espaços e caracteres especiais."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
  },
  {
    "number": 17,
    "slug": "aula-17-event-loop-tasks-microtasks",
    "title": "Event loop, call stack, tasks e microtasks",
    "short": "Event loop",
    "subtitle": "Entenda a ordem de execução sem bloquear a interface.",
    "problem": "Por que Promise.then pode executar antes de setTimeout?",
    "context": "Código síncrono roda na pilha. Microtasks são processadas depois da pilha atual antes da próxima task.",
    "concepts": [
      {
        "title": "Call stack executa código síncrono",
        "lead": "As chamadas ativas ocupam a pilha.",
        "detail": "Trabalho síncrono prolongado pode bloquear a interface."
      },
      {
        "title": "Promises agendam microtasks",
        "lead": "then de Promise resolvida não interrompe a pilha atual.",
        "detail": "Microtasks são processadas antes da próxima task agendada."
      },
      {
        "title": "Timers não têm horário absoluto garantido",
        "lead": "setTimeout agenda uma task após tempo elegível.",
        "detail": "O event loop e políticas do ambiente influenciam o momento real."
      }
    ],
    "terms": [
      {
        "title": "Call stack",
        "detail": "Quadros de chamadas ativas."
      },
      {
        "title": "Microtask",
        "detail": "Reação de Promise."
      },
      {
        "title": "Task",
        "detail": "Eventos e timers."
      }
    ],
    "contrasts": [
      {
        "title": "console.log",
        "detail": "Execução síncrona."
      },
      {
        "title": "Promise.then",
        "detail": "Microtask."
      },
      {
        "title": "setTimeout",
        "detail": "Task futura."
      }
    ],
    "starterCode": "console.log('A');\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');",
    "task": "Altere as letras e observe a ordem do console.",
    "output": "A\nC\nB",
    "incorrectOutputs": [
      "A\nB\nC",
      "C\nB\nA"
    ],
    "explanation": "A e C são síncronos. B executa depois como microtask.",
    "questions": [
      {
        "prompt": "O que executa antes das microtasks?",
        "choices": [
          "Código síncrono atual",
          "Timer de 10ms",
          "Requisição de rede"
        ],
        "answer": 0,
        "why": "A pilha síncrona precisa terminar."
      },
      {
        "prompt": "then agenda:",
        "choices": [
          "Microtask",
          "Execução síncrona imediata",
          "Renderização obrigatória"
        ],
        "answer": 0,
        "why": "Reações de Promises são microtasks."
      },
      {
        "prompt": "setTimeout(0) é imediato?",
        "choices": [
          "Sim",
          "Não, agenda uma task",
          "Sempre antes de Promise"
        ],
        "answer": 1,
        "why": "Timer não executa na mesma pilha."
      }
    ],
    "practices": [
      {
        "title": "Preveja a ordem",
        "goal": "Misture log e Promise.then.",
        "action": "Anote antes de executar.",
        "verify": "Compare com o console."
      },
      {
        "title": "Adicione timer",
        "goal": "Teste setTimeout zero.",
        "action": "Compare logs síncronos, microtasks e task.",
        "verify": "Explique a sequência observada."
      },
      {
        "title": "Evite bloqueios",
        "goal": "Divida cálculo intenso em blocos menores.",
        "action": "Experimente chunking no navegador real.",
        "verify": "Observe responsividade durante trabalho."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
  },
  {
    "number": 18,
    "slug": "aula-18-promises-async-await-erros",
    "title": "Promises, async/await e tratamento de rejeições",
    "short": "Promises e async/await",
    "subtitle": "Organize operações assíncronas e falhas.",
    "problem": "Como aguardar resultados sem perder a sequência lógica?",
    "context": "Promises representam estados pendente, cumprido ou rejeitado; async sempre retorna Promise.",
    "concepts": [
      {
        "title": "Uma Promise tem três estados",
        "lead": "pending, fulfilled e rejected compõem seu ciclo.",
        "detail": "then observa cumprimento; catch observa rejeição; finally executa limpeza."
      },
      {
        "title": "await organiza a sequência",
        "lead": "await espera resolução dentro de função async.",
        "detail": "Rejeições podem ser tratadas por try/catch."
      },
      {
        "title": "Concorrência difere de sequência",
        "lead": "Promise.all aguarda tarefas iniciadas juntas.",
        "detail": "all rejeita se uma falhar; allSettled registra resultados de todas."
      }
    ],
    "terms": [
      {
        "title": "resolve",
        "detail": "Cumpre com um valor."
      },
      {
        "title": "reject",
        "detail": "Rejeita com motivo."
      },
      {
        "title": "await",
        "detail": "Espera resultado em contexto async."
      }
    ],
    "contrasts": [
      {
        "title": "Promise.all",
        "detail": "Falha ao receber uma rejeição."
      },
      {
        "title": "allSettled",
        "detail": "Registra todos os estados."
      },
      {
        "title": "try/catch",
        "detail": "Trata erro de await."
      }
    ],
    "starterCode": "async function calcular() {\n  const valor = await Promise.resolve(7);\n  console.log(valor * 2);\n}\ncalcular();",
    "task": "Altere o valor 7 para 5.",
    "output": "14",
    "incorrectOutputs": [
      "7",
      "Promise {14}"
    ],
    "explanation": "await extrai 7 e a continuação registra 14.",
    "questions": [
      {
        "prompt": "async sempre retorna:",
        "choices": [
          "Promise",
          "Number",
          "undefined"
        ],
        "answer": 0,
        "why": "A chamada de uma função async retorna Promise."
      },
      {
        "prompt": "Como tratar rejeição no await?",
        "choices": [
          "try/catch",
          "switch apenas",
          "while(true)"
        ],
        "answer": 0,
        "why": "Rejeição vira exceção no contexto async."
      },
      {
        "prompt": "Promise.all com uma rejeição:",
        "choices": [
          "Resolve tudo",
          "Rejeita",
          "Bloqueia event loop"
        ],
        "answer": 1,
        "why": "Promise.all rejeita ao receber rejeição de qualquer entrada."
      }
    ],
    "practices": [
      {
        "title": "Resposta simulada",
        "goal": "Crie async retornando número.",
        "action": "Use await Promise.resolve.",
        "verify": "Confira valor final."
      },
      {
        "title": "Falha controlada",
        "goal": "Rejeite com Error.",
        "action": "Trate com try/catch.",
        "verify": "Confirme que não há rejeição não tratada."
      },
      {
        "title": "Execuções paralelas",
        "goal": "Compare all e allSettled.",
        "action": "Prepare três Promises, uma rejeitada.",
        "verify": "Confira comportamento dos combinadores."
      }
    ],
    "runtime": "both",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
  }
];
