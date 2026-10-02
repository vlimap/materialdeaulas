# Windows 11 e políticas de App Control

## Sintoma tratado

Em máquinas com Windows App Control, WDAC ou políticas equivalentes, o Vite pode falhar antes de iniciar porque Rollup tenta carregar um módulo nativo como:

```text
@rollup/rollup-win32-x64-msvc/rollup.win32-x64-msvc.node
```

A mensagem normalmente contém:

```text
ERR_DLOPEN_FAILED
Uma política de Controle de Aplicativo bloqueou este arquivo.
```

Instalar `@rollup/wasm-node` em paralelo não resolve o problema, pois o Vite continua resolvendo o pacote `rollup` convencional.

Além disso, o Vite utiliza esbuild em partes do toolchain, criando outro ponto de dependência em executável nativo.

## Estratégia adotada

O projeto usa:

- Webpack 5;
- webpack-dev-server;
- ts-loader;
- TypeScript;
- ts-node para testes de conteúdo.

Esse caminho evita Rollup e esbuild no fluxo principal.

## Migração local

Depois que esta alteração estiver na `main`:

```powershell
git pull origin main

Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

npm cache verify
npm install
npm run dev
```

Não reutilize o `node_modules` antigo, porque ele continuará contendo os pacotes nativos instalados anteriormente.

## Verificação

O comando esperado é:

```powershell
npm run dev
```

e o servidor deve responder em:

```text
http://localhost:5173
```

Também valide:

```powershell
npm test
npm run build
```

## Segurança

Não é necessário desativar Smart App Control, WDAC, Code Integrity ou adicionar exclusões genéricas para `node_modules`.

Se outro binário for bloqueado por política no futuro, o comportamento correto é identificar a dependência específica e substituir o componente ou formalizar uma regra de confiança administrada, em vez de reduzir a política global da máquina.
