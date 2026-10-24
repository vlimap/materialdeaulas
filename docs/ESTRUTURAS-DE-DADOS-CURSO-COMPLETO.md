# Curso completo — Estruturas de Dados (JavaScript)

**Carga horária:** 48 horas, 12 aulas de 240 minutos.  
**Público:** estudantes que concluíram fundamentos de lógica, algoritmos e JavaScript.  
**Produto final:** sistema de chamados com prioridades, protocolos, tags, estados, testes e documentação.

## Plano didático

| Aula | Conteúdo | Evidência de aprendizagem |
| --- | --- | --- |
| 01 | Estruturas de dados, ADT e complexidade | Definir operações, distinguir representação e avaliar custos. |
| 02 | Arrays e vetores dinâmicos | Operar índices, splice, deslocamentos e custos amortizados. |
| 03 | Matrizes bidimensionais | Percorrer grades, validar limites e calcular O(mn). |
| 04 | Pilhas LIFO | Implementar stack e validar parênteses com casos-limite. |
| 05 | Filas FIFO, circular e deque | Atender por chegada e projetar buffer circular sem shift. |
| 06 | Listas encadeadas | Inserir, percorrer e remover nós preservando referências. |
| 07 | Map, Set e hashing | Associar chaves, eliminar duplicatas e modelar colisões. |
| 08 | Árvores binárias e percursos | Percorrer pré, em, pós-ordem e largura. |
| 09 | BST e balanceamento | Buscar, inserir e explicar efeito da altura. |
| 10 | Heaps e prioridades | Inserir e extrair mínimo com custos logarítmicos. |
| 11 | Grafos, BFS e DFS | Percorrer conexões, distâncias não ponderadas e componentes. |
| 12 | Projeto integrador | Implementar e defender um sistema de chamados testado. |

## Estrutura de cada aula

- 20 slides completos, incluindo conceitos, comparações, custos e armadilhas.
- Laboratório JavaScript executável no navegador (iframe isolado, sem Node.js).
- Quatro questões autocorrigidas: diagnóstico, compreensão, previsão de saída e aplicação.
- Três exercícios práticos com passos verificáveis, resultado esperado e estimativa de duração.
- Referências para MDN e OpenDSA; progressão até projeto interdisciplinar.

## Distribuição sugerida de 240 minutos

| Atividade | Minutos |
| --- | ---: |
| Contexto, revisão e problema | 20 |
| Conceitos, exemplos e comparações | 55 |
| Demonstração no editor e previsão de saída | 25 |
| Três práticas guiadas | 110 |
| Revisão, reflexão, avaliação e extensão | 30 |
| **Total** | **240** |

As questões podem ser feitas durante as etapas, sem exigir sessão isolada. Dê atenção à complexidade de tempo e espaço e aos casos de borda em todos os tópicos.

## Projeto integrador de referência

Arquivos em `labs/data-structures/projeto-final/`:
- `chamados.mjs` — Map + Set + MinHeap com validação de domínio e transições.
- `chamados.test.mjs` — 10 testes automatizados com `node:test`.
- `README.md` — requisitos, desafios progressivos e rubrica de 20 pontos.

Execute em Windows 11, usando PowerShell e Node.js 22 ou superior:

```powershell
npm ci
npm test
npm run build
node --test .\labs\data-structures\projeto-final\chamados.test.mjs
```

Os testes do projeto final também fazem parte de `npm test`.

## Critério de publicação

Nenhuma aula pode ficar como `planned`. Verificar 12 rotas navegáveis, índice SEO das 12 aulas, integridade de IDs, execução e saída dos 12 exemplos de código, quatro questões, três práticas e referências em cada aula. Após aprovação integral do CI, integrar uma única entrega na `main`.
