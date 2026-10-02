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
