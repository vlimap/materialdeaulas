# Como criar uma aula

Uma aula é uma unidade independente de aprendizagem. Ela deve explicar um assunto, mostrar um exemplo e levar o aluno a praticar.

## Estrutura

```text
src/content/
└── javascript/
    └── aula-01-variaveis.ts
```

O arquivo deve exportar um `LessonDefinition`:

```ts
import type { LessonDefinition } from '../../types/course';

export const aula01Variaveis: LessonDefinition = {
  id: 'javascript-aula-01-variaveis',
  slug: 'aula-01-variaveis',
  number: 1,
  title: 'Variáveis e tipos: primeiros passos com JavaScript',
  shortTitle: 'Variáveis e tipos',
  durationMinutes: 120,
  audience: 'iniciantes',
  ucSlug: 'fundamentos-javascript',
  objectives: [
    'Declarar uma variável com const e let',
    'Identificar os tipos básicos usados no exemplo',
    'Executar uma pequena prática no navegador'
  ],
  slides: [
    {
      id: 'javascript-aula-01-capa',
      kind: 'cover',
      eyebrow: 'JavaScript · Aula 01',
      title: 'Variáveis e tipos',
      subtitle: 'Como guardar e transformar informações.',
      badge: 'JavaScript',
      duration: '2h'
    }
  ]
};
```

## Linguagem dos slides: conteúdo voltado a quem estuda

O slide é lido diretamente pelo estudante, não é um roteiro para o professor. Todas as explicações, perguntas e atividades devem funcionar sem mediação de um docente.

- Escreva instruções que possam ser executadas diretamente por quem estuda: "Execute os passos", "Confira o resultado", "Compare as saídas".
- Evite comandos de mediação ou organização de turma, como "Peça à dupla", "Divida os alunos em grupos", "Solicite que os estudantes..." ou "O professor deve...".
- Não obrigue interação com colegas: exercícios devem poder ser realizados individualmente, ainda que também sejam adequados ao trabalho colaborativo.
- Retire referências a papéis didáticos nos títulos de slides ("prática em dupla", "desafio em equipe") quando não forem indispensáveis à resolução.
- Descreva o problema, as instruções, os dados de entrada, o resultado esperado e os critérios de conclusão de forma autossuficiente.
- Informações exclusivas do docente devem ser registradas fora do texto projetado, como metadados internos ou orientações do autor.

## Interface das atividades interativas

As atividades são operadas diretamente pelo estudante. Evite usar a mesma aparência para instruções informativas e controles de interação.

- **Ação:** agrupe campos e botões em uma área claramente intitulada "Sua vez", com instruções numeradas e verbos específicos (marcar, mover, executar).
- **Visualização:** imagens, fluxos e indicadores devem ser identificados como "Visualização" ou "Resultado" e não apresentar quadrados, botões falsos ou cartões que imitam controles.
- **Seleção:** utilize inputs nativos (checkbox/radio), botões com rótulos claros e feedback visual e textual; não desenhe controles falsos com divs.
- **Progresso:** prefira indicadores textuais e barras de progresso não clicáveis, informando a contagem e o que o resultado significa.
- **Conceitos-chave:** nos slides explicativos, palavras-chave (`chips`) são texto informativo precedido do rótulo "Conceitos-chave". Nunca apresentá-las como cápsulas coloridas ou elementos que se pareçam com botões.
- **Separação:** diagramas e exemplos de pseudocódigo devem indicar "Somente leitura" quando estiverem ao lado de controles interativos.
- **Validação:** não dependa apenas da cor ou da animação; informe o resultado por texto e não conclua a tarefa automaticamente sem a ação do estudante.
- **Tela pequena:** preserve instruções e controles completos, evite alvos diminutos e respeite `prefers-reduced-motion`.

Ao testar com iniciantes, verifique se a pessoa consegue identificar onde clicar sem explicações adicionais e se distingue os elementos que apenas mostram o resultado.

## Slides responsivos no celular

O modo Stories deve ocupar **uma única área visível da tela**, sem barra de rolagem interna ou corte de personagens, botões e resultados. A interface deve funcionar mesmo com as barras do navegador móvel abertas.

- Prefira um título curto e **uma única ideia principal por slide**.
- Remova textos redundantes, avatares decorativos e rodapés do layout mobile; preserve as informações necessárias para executar e interpretar a atividade.
- Adapte personagens SVG à altura disponível, sem aplicar `min-height` que force a cena a ultrapassar o quadro.
- Mantenha os controles sempre visíveis, com rótulos claros e áreas de toque confortáveis.
- Evite `overflow-y: auto` no corpo do slide e dentro das simulações. Se o conteúdo não couber, divida-o em slides menores em vez de esconder partes essenciais ou tornar o texto ilegível.
- Use `100svh`/`100dvh` com cuidado e confirme os tamanhos de 320–430 px de largura em celulares com barras do navegador abertas.
- As regras de compactação do modo Stories devem atingir somente a apresentação visível em `.deck-stage`, **não** os slides da `.export-stage`, que são utilizados na geração de PDF e PPTX.
- Atividades longas não devem avançar automaticamente antes de uma ação explícita do estudante.

**Critério de aceite visual:** cena completa, instruções e botões visíveis simultaneamente, sem rolar e sem sobreposição, em telas pequenas. Caso não seja possível, reparta o conteúdo em dois slides.

## Questões com algoritmos ou trechos de código

Em desafios sobre lógica, **não escreva algoritmos inteiros no enunciado como uma frase corrida**. Utilize os campos opcionais do slide `challenge`:

- `prompt`: pergunta em linguagem natural.
- `exampleCode`: algoritmo multilinha exibido em `pre > code`, somente leitura.
- `testInput`: dados de entrada apresentados separadamente do algoritmo.
- `options`: alternativas selecionáveis, sem misturar código com comandos de navegação.

Mantenha indentação consistente e indique o início e o fim das estruturas condicionais e de repetição. Prefira pseudocódigo para os fundamentos da lógica e sintaxe real somente ao apresentar uma linguagem específica. No celular, a pergunta, o algoritmo, a entrada e todas as alternativas precisam caber no slide visível.

## Tabela-verdade nas aulas de operadores lógicos

Ao introduzir os operadores **E**, **OU** e **NÃO**, apresente sempre a tabela-verdade completa ao lado de uma interação em que o estudante possa escolher entradas verdadeiras ou falsas.

- Use o tipo de slide `truth-table` com `operator: 'and' | 'or' | 'not'`. O componente permite alternar operador e entradas, destaca a linha ativa e explica o resultado.
- E/OU são operadores binários: exiba as quatro combinações `F/F`, `F/V`, `V/F`, `V/V`. NÃO é unário: exiba duas combinações de A e o resultado da negação.
- Explique separadamente a conjunção (ambos verdadeiros), a disjunção **inclusiva** (ao menos um verdadeiro, inclusive ambos) e a negação (inversão da única entrada).
- Mantenha as escolhas em botões reais com `aria-pressed`; a tabela é de **somente leitura**. A linha ativa deve ter indicação textual, não apenas cor.
- Apresente a regra, a tabela e um exemplo testável, distribuídos em slides menores quando necessário para preservar a tela única no Android.
- Garanta que `E`, `OU` e `NÃO` não sejam confundidos com operadores aritméticos ou atribuição; prefira pseudocódigo na introdução à lógica.

## Sequência pedagógica

1. **Capa** — assunto, tecnologia e duração.
2. **Objetivo** — o que a pessoa conseguirá fazer.
3. **Contexto** — por que o assunto existe.
4. **Explicação curta** — um conceito por vez.
5. **Exemplo** — código pequeno, comentado e executável.
6. **Prática guiada** — passos numerados e resultado esperado.
7. **Checklist** — como conferir a conclusão.
8. **Referências** — documentação oficial e leituras acessíveis.

## Registro no catálogo

1. Importe a definição no `src/content/catalog.ts`.
2. Coloque-a dentro do módulo correto.
3. Use `id` e `slug` únicos.
4. Mantenha `ucSlug` igual ao slug da unidade curricular.
5. Adicione ou atualize um teste em `scripts/test-catalog.ts`.

## Checklist do PR

- [ ] O título explica o resultado da aula.
- [ ] Os objetivos podem ser verificados.
- [ ] O código foi testado.
- [ ] Há uma atividade prática e critérios de conclusão.
- [ ] Imagens têm descrição ou são decorativas.
- [ ] A aula funciona com teclado e sem movimento obrigatório.
- [ ] O texto não depende apenas de cor, áudio ou imagem.
- [ ] `npm test` e `npm run build` passaram.
