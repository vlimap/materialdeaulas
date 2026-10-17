# Como contribuir

Este projeto é público para compartilhar conhecimento de tecnologia de forma simples, prática e acessível. Toda contribuição deve ser pequena, explicável e fácil de revisar.

## Antes de começar

1. Leia este arquivo e [o guia de criação de aulas](docs/LESSON_AUTHORING.md).
2. Abra uma issue descrevendo o que será feito, exceto para correções muito pequenas de texto ou acessibilidade.
3. Crie uma branch a partir de `main`:

```powershell
git switch main
git pull origin main
git switch -c feat/aula-javascript-01
```

Use nomes objetivos: `feat/`, `fix/`, `docs/`, `a11y/` ou `chore/`.

## Revisão obrigatória e responsabilidade pelo merge

- **Todo PR deve ter `base: main`**. Crie uma branch no seu fork; não
  trabalhe diretamente na branch principal deste repositório.
- Abrir um PR **não concede permissão de merge**. O mantenedor `@vlimap`
  revisa e decide sobre a integração; não utilize automerge.
- A aprovação do mantenedor deve ser exigida pela proteção da branch
  `main` no GitHub, além de `.github/CODEOWNERS`. Sem a regra de
  proteção, este arquivo é apenas um pedido de revisão.
- Nenhuma contribuição externa pode alterar credenciais, workflows com
  permissões elevadas, comandos de instalação/deploy ou scripts sem
  justificativa específica e revisão reforçada.
- Não use `pull_request_target` para executar código de forks, não
  habilite permissões de escrita nem disponibilize segredos em CI de PR.
- Aguarde testes, build, auditoria e aprovação humana. Um workflow verde
  **não é autorização de merge**.

## Fluxo de cada PR

1. **Issue** — explique objetivo, público, pré-requisitos e resultado esperado.
2. **Implementação** — altere somente o escopo da issue; preserve o catálogo publicado.
3. **Conteúdo** — adicione a aula em `src/content/<tecnologia>/` e registre-a em `src/content/catalog.ts`.
4. **Acessibilidade** — revise teclado, foco, contraste, linguagem simples, textos alternativos e redução de movimento.
5. **Testes locais**:

```powershell
npm ci
npm test
npm run build
npm run test:server
npm audit --audit-level=low
```

6. **PR** — preencha o template, explique como testar e inclua imagens quando houver mudança visual.
7. **Revisão** — aguarde pelo menos uma revisão e responda aos comentários com evidências.
8. **Merge** — somente depois de CI verde e checklist completo.

## Tipos de PR

- `feat`: nova aula, trilha ou recurso.
- `fix`: correção de comportamento ou conteúdo.
- `a11y`: melhoria de acessibilidade.
- `docs`: documentação, exemplos ou instruções.
- `chore`: manutenção técnica sem mudança pedagógica.

## Regras de conteúdo

- Escreva em português simples e explique siglas na primeira ocorrência.
- Uma aula deve ter objetivo observável e prática executável.
- Não copie material protegido sem autorização e cite fontes externas.
- Não inclua tokens, senhas, dados pessoais ou arquivos de alunos.
- Prefira exemplos pequenos, executáveis e progressivos.
- Todo texto visível deve poder ser lido por tecnologias assistivas; o VLibras é um apoio, não substitui texto claro, legenda ou descrição.
