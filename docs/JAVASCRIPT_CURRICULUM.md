# JavaScript completo — plano didático

**Carga horária planejada:** 120 horas (30 aulas × 4 horas).
**Rota:** `/curso/curso-javascript`
**Ambientes:** navegador e Node.js, conforme a API apresentada.
**Público:** iniciantes que avançam até práticas intermediárias e avançadas.

## Sequência pedagógica

| Aula | Tema |
|---|---|
| 01 | História, ECMAScript, engines, navegador e Node.js |
| 02 | Sintaxe, let, const, escopos e mutabilidade |
| 03 | Tipos primitivos, coerção, igualdade e referências |
| 04 | Operadores, precedência e tabelas-verdade interativas |
| 05 | if/else, switch, ternário, cláusulas de guarda |
| 06 | for, while, for...of, for...in, break e continue |
| 07 | Funções, parâmetros, arrow functions, retorno e this |
| 08 | Arrays, índices, mutabilidade e métodos de cópia |
| 09 | Objetos, desestruturação, optional chaining |
| 10 | Strings, números, precisão, datas e Intl |
| 11 | map, filter, reduce e callbacks |
| 12 | Set, Map, WeakMap e JSON |
| 13 | DOM, seleção e manipulação segura |
| 14 | Eventos, propagação e delegação |
| 15 | Formulários, validação e acessibilidade |
| 16 | Web Storage, JSON e URLs |
| 17 | Call stack, event loop, tasks e microtasks |
| 18 | Promises, async/await e erros |
| 19 | Fetch, HTTP, JSON, CORS e AbortController |
| 20 | ES Modules, import/export, npm e Vite |
| 21 | this, protótipos, classes, herança |
| 22 | Closures, funções superiores e funções puras |
| 23 | Iteradores, generators e async iterables |
| 24 | Expressões regulares e validação |
| 25 | Node.js, process, fs/promises e streams |
| 26 | Testes, node:test, TDD e depuração |
| 27 | Desempenho, coleta de lixo, profiling e Workers |
| 28 | Segurança: XSS, CSP, CORS e dependências |
| 29 | Arquitetura modular, testes e TypeScript |
| 30 | Projeto final com DOM, formulários, persistência e API |

## Metodologia

Cada aula tem 18 slides (a Aula 04 tem 22):
- Enunciado do problema e contexto técnico
- Três conceitos progressivos, diferenciações e exemplos
- Quatro verificações de aprendizagem com feedback
- Um **editor JavaScript executável** com código de exemplo, botão Executar e console visual
- Três práticas, com objetivos, passos e critérios de conclusão
- Síntese, autoavaliação e referências oficiais

O plano temporal de 4 horas destina-se a prática orientada, exercícios fora do console e revisão. Não representa 4 horas de reprodução automática dos slides.

## Limites e segurança do console

O código fornecido pelo estudante executa em um **iframe `sandbox="allow-scripts"`**, com origem opaca e sem acesso ao DOM da aplicação hospedeira. Logs e erros aparecem na área de saída do próprio iframe. O código não é executado na página principal nem enviado ao servidor pelo componente.

O iframe **não é um ambiente Node.js**: não fornece `node:fs`, `process`, servidor Express ou banco de dados. Tarefas com essas APIs devem ser executadas num projeto local Node, com comandos nativos e testes. `localStorage` também pode ser bloqueado num iframe de origem opaca; use a aplicação local para testar persistência real. Chamadas de rede podem estar sujeitas a CORS e restrições do sandbox.

Esta execução isolada melhora segurança de origem, mas **não impõe limite rígido de CPU** a código enviado ao navegador. Evite laços infinitos e trabalhos pesados. Código e exemplos enviados por usuários são conteúdo não confiável.

## Acessibilidade

- Modo Stories com uma tela por slide; não esconder código ou botões necessários.
- Indicar visualmente o que é editável e o que é leitura.
- Controles com rótulos e foco visível, suporte ao teclado.
- Quatro linhas de tabela-verdade para E/OU, duas para NÃO; seleção real de A e B.
- Não incluir comandos destinados ao professor em slides do estudante.
- Não induzir cliques em pílulas ou diagramas apenas informativos.

## Projeto final (aula 30)

Construir uma aplicação web sem framework obrigatório, com HTML semântico, módulos JS, DOM, formulários acessíveis, estado, persistência apropriada, consumo de API com estados de loading/erro/sucesso, validação, testes e documentação. Critérios: comportamento verificável, ausência de XSS por injeção de HTML, execução de testes e build documentado.

## Referências oficiais

- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ECMAScript® Language Specification](https://tc39.es/ecma262/)
- [Node.js Docs](https://nodejs.org/api/)
- [npm Docs](https://docs.npmjs.com/)
- [W3C WAI — Forms](https://www.w3.org/WAI/tutorials/forms/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

O curso apresenta cobertura ampla da linguagem e de aplicações comuns. JavaScript e suas plataformas continuam evoluindo; tópicos especializados como WebGPU, WebRTC, WebAssembly e implementações específicas de frameworks exigem trilhas próprias.
