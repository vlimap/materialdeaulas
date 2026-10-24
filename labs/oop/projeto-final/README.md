# Laboratório final — Sistema de Reservas orientado a objetos

Projeto de referência do curso **Programação Orientada a Objetos com JavaScript**, contendo classes e testes executáveis no Node.js 22 ou superior.

## Situação-problema

Uma escola reserva laboratórios para atividades. Cada laboratório tem ID e capacidade; uma reserva utiliza um laboratório e um intervalo de minutos do dia. A aplicação deve impedir sobreposição de reservas ativas na mesma sala, respeitar a capacidade e permitir cancelamentos.

A regra de intervalos é **[início, fim)**: início inclusivo e fim exclusivo. Por isso, `[08:00, 10:00)` e `[10:00, 12:00)` não conflitam.

## Arquitetura e contratos

| Objeto | Responsabilidade |
| --- | --- |
| `Laboratorio` | Identificação e capacidade protegidas por campos privados |
| `Reserva` | Estado e intervalo, invariantes e transição de cancelamento |
| `RepositorioMemoria` | Persistir laboratórios e reservas com `Map` |
| `ServicoReservas` | Orquestrar validações, conflitos, cadastro e cancelamento |
| `Eventos` | Observer com inscrever, publicar e cancelar inscrição |

O serviço recebe repositório e publicador por **injeção de dependência**. O repositório de memória é uma implementação educacional e não fornece isolamento transacional. Em ambiente multiusuário, a verificação de conflito e a inserção precisam ser atômicas no armazenamento persistente.

## Execução

No PowerShell, dentro da pasta deste laboratório:

```powershell
node --version
node --test .\reservas.test.mjs
```

Não há dependências externas. A suíte contém **17 testes** cobrindo entradas inválidas, duplicações, sobreposição, bordas, estado, encapsulamento, Observer e adaptadores.

## Etapas para o estudante

1. Leia `reservas.mjs`, liste as regras de negócio e desenhe um diagrama com classes e colaborações.
2. Execute os testes e identifique a regra protegida por cada um.
3. Implemente consulta de reservas ativas por sala, ordenadas por início, sem modificar a coleção interna.
4. Adicione um campo de responsável pela reserva e uma regra de validação que não quebre os testes existentes.
5. Crie fake do publicador e comprove que a operação rejeitada não produz evento.
6. Explique que a verificação e a gravação não são atômicas em uma implementação remota e proponha uma solução transacional.
7. Documente decisões e limitations, incluindo intervalos de um único dia e ausência de fusos horários.

## Avaliação — cinco eixos de 0 a 4 pontos

| Eixo | Evidência para nota máxima |
| --- | --- |
| Modelagem | Entidades, atributos privados, responsabilidades e invariantes coerentes |
| Implementação | Casos de uso sem duplicidades, capacidade respeitada e sobreposição bloqueada |
| Testes | Suíte passando e cenários adicionais automatizados |
| Arquitetura | Composição, inversão de dependência e Observer bem empregados |
| Comunicação | README, diagrama, explicação de trade-offs e limitações |

**Nota máxima: 20 pontos.** Uma entrega precisa demonstrar o código funcionando, não apenas apresentar slides.

Referências: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes ; https://nodejs.org/api/test.html
