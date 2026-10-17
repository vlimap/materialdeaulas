/* Integration smoke test for the dependency-free preview server. */
'use strict';
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const path = require('node:path');

async function main() {
  const port = 5174;
  const child = spawn(process.execPath,
    [path.join(__dirname, 'dev-server.cjs'), '--preview'],
    { env: { ...process.env, PORT: String(port) },
      stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
  let logs = '';
  child.stdout.on('data', bytes => { logs += bytes.toString(); });
  child.stderr.on('data', bytes => { logs += bytes.toString(); });
  const base = 'http://127.0.0.1:' + port;

  try {
    let ready = false;
    for (let attempt = 0; attempt < 40; attempt++) {
      if (child.exitCode !== null) throw new Error('Servidor finalizou: ' + logs);
      try {
        const res = await fetch(base + '/');
        if (res.ok) { ready = true; break; }
      } catch { /* Retry during startup. */ }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    assert.ok(ready, 'Servidor não iniciou: ' + logs);

    const home = await fetch(base + '/');
    assert.equal(home.status, 200);
    assert.match(home.headers.get('content-type') || '', /text\/html/);
    assert.match(await home.text(), /<html/i);

    const deep = await fetch(base + '/curso/curso-javascript/uc/fundamentos-javascript/aula/aula-01-introducao-ambientes', {
      headers: { Accept: 'text/html' }
    });
    assert.equal(deep.status, 200, 'Rotas SPA precisam retornar index.html.');

    const head = await fetch(base + '/', { method: 'HEAD' });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');

    const missing = await fetch(base + '/arquivo-inexistente.js');
    assert.equal(missing.status, 404);

    const post = await fetch(base + '/', { method: 'POST' });
    assert.equal(post.status, 405);

    const events = await fetch(base + '/__dev/events');
    assert.equal(events.status, 404, 'Preview não deve expor canal de desenvolvimento.');

    console.log('PASS: preview HTTP, SPA deep route, HEAD, 404, 405 e SSE desabilitado.');
  } finally {
    child.kill();
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
