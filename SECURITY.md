# Política de Segurança — Material de Aulas

## Escopo suportado

A única versão com correções de segurança é a publicada pela branch `main`.
Branches antigas, forks, previews e arquivos exportados anteriormente não recebem
correções automaticamente.

## Comunicação responsável de vulnerabilidades

**Não publique exploits, tokens ou dados pessoais em issues ou PRs públicos.**
Use a opção **Security → Advisories → Report a vulnerability** do repositório,
caso esteja habilitada. Se não estiver, entre em contato de forma privada com
o mantenedor pelo perfil do GitHub antes de divulgar detalhes técnicos.

Inclua: comportamento observado, versões afetadas, passos mínimos para
reprodução e impacto. Não inclua credenciais reais ou informações de terceiros.

## Política de dependências

- `npm ci` para instalação reproduzível, sem modificar o lockfile.
- `npm test`, `npm run build`, `npm run test:server` e
  `npm audit --audit-level=low` devem passar antes do merge.
- Uma vulnerabilidade não deve ser ignorada ou dispensada apenas para deixar o
  indicador verde: documente impacto, evidência e correção.
- Dependências diretas e transitivas são revisadas. Quando não há correção,
  deve-se remover o caminho vulnerável ou documentar uma mitigação verificável.
- Alterações de `package.json`, `package-lock.json`, `.github/workflows/`,
  scripts de build e exportação exigem revisão especial do mantenedor.

## Contribuições externas e execução de código

Toda alteração deve ser proposta em PR direcionado a `main`, preferencialmente
a partir de um fork. PRs não recebem credenciais de deploy. Workflows usam
`permissions: contents: read` e o evento `pull_request`, nunca
`pull_request_target` para executar código não confiável.

O arquivo `.github/CODEOWNERS` indica o mantenedor responsável, mas **a
aprovação só se torna obrigatória com a proteção/ruleset da branch no GitHub**.
Consulte [CONTRIBUTING.md](CONTRIBUTING.md).

## Limitação

Um relatório de auditoria com 0 vulnerabilidades conhecidas não garante
ausência absoluta de falhas inéditas ou de erros na aplicação.
