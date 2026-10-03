# Curso SDLC — referência e linguagem visual

## Referência-base

**Ian Sommerville — Engenharia de Software, 9ª edição, Pearson, 2011.**

O curso usa o livro como eixo conceitual, especialmente:

- Parte 1 — introdução à engenharia de software;
- Capítulo 2 — processos de software;
- Capítulo 4 — engenharia de requisitos;
- Capítulo 5 — modelagem de sistemas;
- Capítulo 6 — projeto de arquitetura;
- Capítulo 7 — projeto e implementação;
- Capítulo 8 — testes de software;
- Capítulo 9 — evolução de software;
- capítulos 22 a 26 — gerenciamento, planejamento, qualidade, configuração e melhoria de processos.

Conteúdos modernos que não aparecem com o mesmo nível de detalhe na edição de 2011 — por exemplo, observabilidade moderna, CI/CD e estratégias atuais de deploy — devem aparecer como **atualização complementar**, sem serem atribuídos ao livro.

## Regra pedagógica

Cada aula deve seguir esta sequência:

1. **conceito** — uma ideia por slide;
2. **visual** — diagrama autoral que torna a relação visível;
3. **movimento** — animação apenas quando ajuda a explicar sequência, fluxo, feedback ou mudança;
4. **aplicação** — exemplo ou caso realista;
5. **decisão** — pergunta, comparação ou desafio;
6. **síntese** — checkpoint curto.

Evitar:

- parágrafos longos projetados;
- cards usados apenas para esconder texto;
- animação decorativa sem função;
- excesso de ícones;
- repetir a mesma informação em texto e diagrama.

## Política para figuras do livro

O PDF informa que a reprodução da obra exige autorização prévia da editora.

Por isso, o curso **não incorpora scans nem recortes das figuras do PDF**. Os diagramas são redesenhos autorais e recebem crédito conceitual quando correspondem diretamente a uma figura ou modelo apresentado no livro.

Exemplo:

> Redesenho autoral baseado em Sommerville, 9ª ed., cap. 2, Figura 2.1.

Isso permite manter a referência acadêmica sem publicar páginas do livro dentro do repositório.

## Mapa das 12 aulas

| Aula | Eixo | Sommerville | Direção visual |
| --- | --- | --- | --- |
| 01 | Processos e ciclo de vida | Caps. 1–2 | quatro atividades, cascata, incremental, feedback |
| 02 | Problema, viabilidade e risco | Cap. 2 + Cap. 22 | stakeholders, viabilidade, matriz de risco |
| 03 | Requisitos | Cap. 4 | espiral de requisitos, tipos e rastreabilidade |
| 04 | Modelagem | Cap. 5 | contexto, interação, estrutura e comportamento |
| 05 | Planejamento e qualidade | Caps. 22–24 | cronograma, risco, estimativa e quality gates |
| 06 | Arquitetura | Cap. 6 | visões, padrões, trade-offs e decisões |
| 07 | Implementação e configuração | Cap. 7 + Cap. 25 | branch, revisão, build, versão e mudança |
| 08 | Testes | Cap. 8 + Cap. 24 | níveis de teste, TDD e evidências |
| 09 | Release e implantação | Cap. 25 + RUP no Cap. 2 | build → release → deploy |
| 10 | Operação | Caps. 10–11 | sistema em uso, confiabilidade, feedback; observabilidade como complemento |
| 11 | Evolução e legado | Cap. 9 | manutenção, evolução, legado e retirada |
| 12 | Modelos e melhoria | Caps. 2–3 + Cap. 26 | comparação de modelos e melhoria contínua |

## Regra de qualidade

Uma aula publicada de SDLC deve ter:

- referência-base cadastrada em `sources`;
- plano visual cadastrado em `visualPlan`;
- no mínimo três recursos visuais ou interativos entre `visual`, `challenge`, `exercise` e `missions`;
- referências no fechamento;
- texto de projeção curto e legível.

O objetivo é que o professor explique o conteúdo; o slide deve **mostrar a relação**, não substituir a fala.
