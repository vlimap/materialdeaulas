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
