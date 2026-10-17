# Curso de Algoritmos — plano de ensino

**Carga horária:** 48 horas (12 aulas × 4 horas).
**Público:** estudantes que já conhecem sequência, variáveis, decisões, laços e listas.
**Formato:** slides interativos em React + TypeScript, sem vídeo ou áudio obrigatório.

## Aulas e progressão

| Aula | Tema | Laboratório de execução |
|---|---|---|
| 01 | Algoritmos e execução | Soma de lista passo a passo |
| 02 | Correção e invariantes | Prefixo e acumulador |
| 03 | Complexidade e Big-O | Contagem linear vs. quadrática |
| 04 | Busca linear | Comparações e ausência do alvo |
| 05 | Busca binária | Atualização de início, meio e fim |
| 06 | Bubble Sort e Selection Sort | Duas estratégias de ordenação |
| 07 | Insertion Sort | Deslocamento e inserção |
| 08 | Merge Sort | Divisão recursiva e intercalação |
| 09 | Quick Sort | Pivô e partições |
| 10 | Recursão | Pilha e retorno do fatorial |
| 11 | Grafos | BFS com fila e DFS com pilha |
| 12 | Guloso, programação dinâmica e projeto | Troco, Fibonacci e projeto aplicado |

## Roteiro recomendado de cada aula (240 minutos)

- **Introdução e sondagem — 20 min:** objetivo e pergunta inicial.
- **Explicações com exemplos — 45 min:** primeiro contato com as regras e restrições.
- **Laboratório visual — 35 min:** testar entradas diferentes, acompanhar operações e registrar estados.
- **Prática guiada — 25 min:** reproduzir o algoritmo com papel ou editor próprio.
- **Análise e variações — 30 min:** considerar complexidade, pré-condições e casos-limite.
- **Prática de consolidação — 35 min:** comparar abordagens e identificar erros.
- **Desafio aplicado — 45 min:** resolver problema semelhante sem depender de uma solução pronta.
- **Autoavaliação — 5 min:** verificar objetivos e registrar dúvidas.

Os tempos constituem planejamento pedagógico; a sequência de slides não impõe cronômetro ao estudante.

## Regras técnicas e pedagógicas

1. Código nos slides é **pseudocódigo**; operações e retornos devem representar o algoritmo explicado, sem fingir que são sintaxe executável do JavaScript.
2. Para estudos em JavaScript/TypeScript, cada problema pode ser reescrito e testado separadamente no editor.
3. Laboratórios apresentam entrada configurável (3–6), estado atual, índices, operações e resultado. A visualização usa dados pequenos deliberadamente para favorecer compreensão.
4. Sempre distinguir pré-condição (ex.: lista ordenada na busca binária), correção e complexidade; evitar tratar Big-O como tempo real.
5. Não sugerir que Quick Sort tem sempre O(n log n); informar o pior caso O(n²).
6. Explicar que guloso não é ótimo para qualquer conjunto de moedas e que Merge Sort comum usa memória auxiliar O(n).
7. No modo mobile, o slide deve ocupar **uma tela**, sem rolagem interna ou conteúdo essencial oculto; dividir conceitos em telas independentes.
8. Enunciados devem falar diretamente com o estudante e os elementos somente informativos não devem parecer botões.
9. O avanço automático deve permanecer pausado nos laboratórios e atividades de verificação.

## Critérios de conclusão

Cada aula inclui quatro questões com feedback, três práticas com critérios explícitos e um laboratório visual; as aulas de comparação incluem dois laboratórios. A Aula 12 culmina em projeto integrador com definição do problema, estratégia, pseudocódigo e três casos de teste.

## Referências iniciais

- [OpenDSA](https://opendsa-server.cs.vt.edu/)
- [MIT OpenCourseWare — Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

A atribuição de conteúdo segue o padrão de links de referência; exemplos e laboratórios aqui são elaboração original.
