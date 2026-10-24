# Projeto integrador: sistema de chamados

## Requisitos

Uma equipe abre chamados por protocolo único, classifica-os de prioridade 1 (crítica) a 5 (baixa), associa tags sem duplicações e atende chamados em ordem de prioridade; em caso de empate, respeita a chegada.

## Estruturas e contratos

- `Map`: fonte de verdade para consulta por protocolo.
- `Set`: tags sem duplicatas em cada chamado.
- `MinHeap`: próxima prioridade a atender (desempate pela ordem de chegada).
- Cancelamentos deixam entradas obsoletas no heap, descartadas durante a extração (invalidação preguiçosa).

## Executar no Windows 11

Node.js >= 22, PowerShell na pasta do laboratório:

```powershell
node --test .\chamados.test.mjs
```

Os dez testes usam o módulo nativo `node:test`, sem instalar pacotes. O arquivo `chamados.mjs` é a implementação didática de referência.

## Etapas obrigatórias

1. Execute a suíte de testes e explique o papel das três estruturas.
2. Implemente `countPending()` e testes para todos os estados.
3. Planeje atualização de prioridade: invalide entradas antigas do heap sem atender tickets desatualizados.
4. Compare Map com busca linear por protocolo e heap com lista ordenada a cada inserção.
5. Documente complexidades com hipóteses, consumo de memória e comportamento sob cancelamentos frequentes.
6. Apresente README com uso, decisões, riscos, evidências e captura da saída de testes.

## Rubrica (0–4 por critério)

| Critério | Evidência |
| --- | --- |
| Modelagem | APIs, entradas, estados e erros definidos |
| Implementação | Invariantes de Map, Set e heap preservadas |
| Testes | Casos normais, vazios, duplicações, prioridades e regressões |
| Complexidade | Custos por operação, hipóteses e limitações |
| Comunicação | Documentação, execução e justificativa de alternativas |

**Total: 20 pontos.** Critério eliminatório: execução que perde chamados, fura prioridade ou ignora protocolo duplicado.

Referências: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map ; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set ; https://nodejs.org/api/test.html
