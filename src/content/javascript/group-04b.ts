import type { JsLessonSpec } from './lesson-builder';
export const group04b: JsLessonSpec[] = [
  {
    "number": 19,
    "slug": "aula-19-fetch-http-rest-abortcontroller",
    "title": "Fetch API, HTTP, JSON e AbortController",
    "short": "Consumindo APIs",
    "subtitle": "Faça requisições, trate respostas e cancelamentos.",
    "problem": "Como consumir uma API?",
    "context": "fetch devolve Promise de Response; códigos HTTP 4xx/5xx não rejeitam automaticamente. Verifique response.ok e valide os dados.",
    "concepts": [
      {
        "title": "fetch retorna Response",
        "lead": "response.ok indica status HTTP entre 200 e 299.",
        "detail": "Uma resposta 404 resolve a Promise com ok=false; falha de rede costuma rejeitar."
      },
      {
        "title": "JSON precisa ser validado",
        "lead": "await response.json() lê e converte o corpo.",
        "detail": "Dados externos exigem validação de tipos e campos antes de renderizar."
      },
      {
        "title": "AbortController cancela requisições",
        "lead": "Passe signal ao fetch e invoque abort().",
        "detail": "Trate AbortError separadamente de falhas de rede ou servidor."
      }
    ],
    "terms": [
      {
        "title": "fetch",
        "detail": "Cliente HTTP presente no navegador e Node moderno."
      },
      {
        "title": "Response.ok",
        "detail": "Status HTTP de sucesso."
      },
      {
        "title": "AbortController",
        "detail": "Sinal de cancelamento."
      }
    ],
    "contrasts": [
      {
        "title": "Falha de rede",
        "detail": "Rejeita a Promise."
      },
      {
        "title": "HTTP 404",
        "detail": "Response com ok=false."
      },
      {
        "title": "CORS",
        "detail": "Política de acesso na Web."
      }
    ],
    "starterCode": "async function exemplo() {\n  const res = new Response('{\"ok\":true}');\n  const dados = await res.json();\n  console.log(dados.ok);\n}\nexemplo();",
    "task": "Altere true para false no JSON simulado.",
    "output": "true",
    "incorrectOutputs": [
      "200",
      "undefined"
    ],
    "explanation": "O exemplo usa Response local sem rede; json() obtém a propriedade booleana ok.",
    "questions": [
      {
        "prompt": "fetch rejeita automaticamente no HTTP 404?",
        "choices": [
          "Sim",
          "Não",
          "Sempre retorna null"
        ],
        "answer": 1,
        "why": "A resposta é recebida normalmente; cheque status."
      },
      {
        "prompt": "Qual propriedade indica sucesso 2xx?",
        "choices": [
          "response.ok",
          "response.json",
          "response.bodyUsed"
        ],
        "answer": 0,
        "why": "ok é verdadeiro para códigos 2xx."
      },
      {
        "prompt": "Qual recurso permite cancelar fetch?",
        "choices": [
          "AbortController",
          "JSON.stringify",
          "setInterval"
        ],
        "answer": 0,
        "why": "AbortSignal permite cancelamento da operação."
      }
    ],
    "practices": [
      {
        "title": "Status e corpo",
        "goal": "Compare Response 200 e 404 simuladas.",
        "action": "Crie instâncias Response e cheque ok.",
        "verify": "Diferencie sucesso e resposta HTTP inválida."
      },
      {
        "title": "API pública",
        "goal": "Consuma endpoint de teste no projeto local.",
        "action": "Use fetch, response.ok e json.",
        "verify": "Trate carregamento e erros."
      },
      {
        "title": "Cancelar requisição",
        "goal": "Interrompa uma operação demorada.",
        "action": "Passe signal de AbortController ao fetch.",
        "verify": "Trate abort sem mensagem de falha falsa."
      }
    ],
    "runtime": "browser",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
  },
  {
    "number": 20,
    "slug": "aula-20-modulos-esm-npm-vite",
    "title": "Módulos ES, import/export, npm e ferramentas",
    "short": "Módulos e ferramentas",
    "subtitle": "Organize projetos e dependências.",
    "problem": "Como dividir código em arquivos?",
    "context": "Módulos ES usam import/export e escopo próprio; package.json declara dependências e scripts.",
    "concepts": [
      {
        "title": "ES Modules criam fronteiras",
        "lead": "export publica valores; import consome exports.",
        "detail": "Import estático fica no nível superior do módulo; use type=module no navegador."
      },
      {
        "title": "npm gerencia pacotes",
        "lead": "dependencies são necessárias em produção; devDependencies no desenvolvimento.",
        "detail": "npm ci instala árvore definida no lockfile em ambientes CI."
      },
      {
        "title": "Módulos não são globais",
        "lead": "Cada módulo preserva suas declarações locais.",
        "detail": "CommonJS require e ES Modules possuem diferenças de resolução e interoperabilidade."
      }
    ],
    "terms": [
      {
        "title": "export",
        "detail": "Disponibiliza ligação para outro arquivo."
      },
      {
        "title": "import",
        "detail": "Consome valor exportado."
      },
      {
        "title": "package.json",
        "detail": "Manifesto com scripts e dependências."
      }
    ],
    "contrasts": [
      {
        "title": "ESM",
        "detail": "import/export."
      },
      {
        "title": "CommonJS",
        "detail": "require/module.exports no Node."
      },
      {
        "title": "Vite",
        "detail": "Servidor e build de aplicações Web."
      }
    ],
    "starterCode": "const math = { dobro: n => n * 2 };\nconst preco = 15;\nconsole.log(math.dobro(preco));",
    "task": "Altere preço e execute; depois use módulos reais em um projeto.",
    "output": "30",
    "incorrectOutputs": [
      "15",
      "undefined"
    ],
    "explanation": "O console ilustra uma operação reutilizável; import/export real exige módulos separados.",
    "questions": [
      {
        "prompt": "Qual palavra importa export nomeado?",
        "choices": [
          "include",
          "import",
          "create"
        ],
        "answer": 1,
        "why": "ES Modules usam import/export."
      },
      {
        "prompt": "npm ci usa:",
        "choices": [
          "Lockfile consistente",
          "Somente HTML",
          "Nenhum package.json"
        ],
        "answer": 0,
        "why": "npm ci instala a partir do lockfile."
      },
      {
        "prompt": "Um módulo ES possui escopo próprio?",
        "choices": [
          "Sim",
          "Não",
          "Somente no Node"
        ],
        "answer": 0,
        "why": "Declarações não viram globais automaticamente."
      }
    ],
    "practices": [
      {
        "title": "Dois arquivos",
        "goal": "Crie math.js e main.js.",
        "action": "Exporte dobro e importe em main.",
        "verify": "Execute em type=module."
      },
      {
        "title": "Manifesto npm",
        "goal": "Crie package.json e script test.",
        "action": "Gere lockfile e experimente npm ci.",
        "verify": "Verifique dependências."
      },
      {
        "title": "App modular",
        "goal": "Separe regras, dados e interface.",
        "action": "Use módulos e Vite.",
        "verify": "Execute build e verifique comportamento."
      }
    ],
    "runtime": "both",
    "docs": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
  }
];
