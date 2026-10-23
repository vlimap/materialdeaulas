# SDLC — Curso completo de 48 horas

## Estrutura pedagógica

12 aulas com 4 horas (240 minutos) cada. As aulas 02 a 12 foram publicadas junto à Aula 01 existente, mantendo seus objetivos, referências a Ian Sommerville e planos visuais.

| Aula | Tema |
| --- | --- |
| 01 | Processos e fundamentos do ciclo de vida |
| 02 | Discovery, problema e viabilidade |
| 03 | Requisitos e rastreabilidade |
| 04 | Análise e modelagem |
| 05 | Planejamento, risco e qualidade |
| 06 | Arquitetura e decisões |
| 07 | Implementação, configuração e integração |
| 08 | Verificação, validação e testes |
| 09 | Release e implantação |
| 10 | Operação, observabilidade e incidentes |
| 11 | Evolução, legado e retirada |
| 12 | Modelos de processo e projeto integrador |

## Metodologia

Estudo de caso transversal: **Portal de Reservas de Laboratórios**. Em cada nova aula, o estudante recebe contexto, objetivos, cinco conceitos, comparações, sequência de trabalho, quatro questões com correção explicativa, três exercícios progressivos e checklist de autoavaliação, além de referências bibliográficas.

O projeto final consolida o problema, stakeholders, requisitos funcionais e não funcionais, modelos, decisões arquiteturais, planejamento de implementação, testes, plano de entrega, operação e evolução.

## Validação

Para validar localmente, a partir da raiz do repositório:

```powershell
npm ci
npm test
npm run build
```

As 11 aulas novas reutilizam o mesmo player de slides e tipos TypeScript já existentes. Nenhuma nova dependência é necessária.
