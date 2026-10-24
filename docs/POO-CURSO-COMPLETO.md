# Curso completo — Programação Orientada a Objetos com JavaScript

**Carga horária:** 48 horas.  
**Formato:** 12 aulas de quatro horas, sem aulas pendentes.  
**Pré-requisitos:** JavaScript básico, funções, arrays e introdução a estruturas de dados.  
**Produto final:** sistema de reservas de laboratórios, com classes, estado privado, dependências injetadas, Observer e testes em Node.js.

## Sequência didática

| Aula | Tema | Entrega esperada |
| --- | --- | --- |
| 01 | Objetos e domínio | Modelar entidades, estados e responsabilidades. |
| 02 | Classes e this | Construir instâncias, métodos, construtores e contratos. |
| 03 | Encapsulamento | Proteger estado com # e preservar invariantes. |
| 04 | Getters, setters e static | Projetar propriedades derivadas, validações e fábricas. |
| 05 | Protótipos | Compreender delegação e Object.create. |
| 06 | Composição e associação | Modelar colaboração, agregação e pertencimento. |
| 07 | Herança | Usar extends e super sem quebrar contratos. |
| 08 | Polimorfismo | Implementar duck typing e colaboradores substituíveis. |
| 09 | Abstração e dependências | Separar domínio, aplicação e adaptadores injetados. |
| 10 | SOLID | Discutir SRP, OCP, LSP, ISP e DIP com exemplos. |
| 11 | Padrões de projeto | Empregar Strategy, Factory e Observer com critério. |
| 12 | Projeto final | Criar e testar sistema de reservas de laboratório. |

## Recursos de cada aula

- 20 slides com problemas, exemplos, quatro conceitos desenvolvidos, comparações e alertas.
- Um editor **JavaScript executável** no navegador (isolado em iframe; sem APIs Node.js).
- Quatro questões autocorrigidas, incluindo previsão de saída validada por testes reais.
- Três práticas progressivas (30–45 minutos), com passos e resultados verificáveis.
- Checklist de cinco competências e referências oficiais.

**Total do curso:** 240 slides, 12 laboratórios interativos, 48 questões autocorrigidas e 36 práticas.

## Roteiro-base de 240 minutos

| Bloco | Duração |
| --- | ---: |
| Problema, revisão e contextualização | 20 min |
| Conceitos e exemplos guiados | 55 min |
| Editor JavaScript e previsão de saída | 25 min |
| Três exercícios práticos | 110 min |
| Avaliação, discussão das decisões e revisão | 30 min |
| **Total** | **240 min** |

## Laboratório integrador

O diretório `labs/oop/projeto-final/` contém:
- `reservas.mjs`: `Laboratorio`, `Reserva`, `RepositorioMemoria`, `Eventos` e `ServicoReservas`.
- `reservas.test.mjs`: 17 testes com Node.js nativo; cobre conflitos, intervalos adjacentes, duplicatas, capacidades, transições de estado e Observer.
- `README.md`: requisitos, orientação de uso, critérios de avaliação (0–20) e limitações técnicas.

Rodar em PowerShell com Node.js 22 ou superior:

```powershell
npm ci
npm test
npm run build
node --test .\labs\oop\projeto-final\reservas.test.mjs
```

O comando `npm test` também executa a suíte do projeto de POO. A aplicação de laboratório usa minutos inteiros no intervalo de um dia e memória local. Para um sistema multiusuário real, verificação e inserção de reservas devem ser atômicas, por exemplo via transação e restrições de banco; segurança e autenticação exigem camadas adicionais.

## Publicação

Publicar o curso somente quando as 12 aulas estiverem integralmente escritas, todas as rotas e páginas SEO forem geradas, as saídas dos 12 exemplos coincidirem com as questões, e o CI aprovar testes, build, prévia do servidor e auditoria de dependências. Integrar em uma única entrega na `main`.
