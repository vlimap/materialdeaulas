/* Lightweight Windows/Linux development server, no third-party HTTP stack. */
'use strict';
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawn } = require('node:child_process');

const DIR = path.resolve(__dirname, '../dist');
const PORT = Number(process.env.PORT || 5173);
const PREVIEW = process.argv.includes('--preview');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8'
};
const connections = new Set();
let compiler;

const reloadSnippet = '<script>const source=new EventSource("/__dev/events");' +
  'source.addEventListener("reload",()=>window.location.reload());' +
  'window.addEventListener("beforeunload",()=>source.close());</script>';

async function serveFile(file, req, res, shouldInject) {
  try {
    const stat = await fs.stat(file);
    if (!stat.isFile()) return false;
    const ext = path.extname(file).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', type);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-cache');
    if (req.method === 'HEAD') {
      res.statusCode = 200;
      res.end();
      return true;
    }
    if (shouldInject && ext === '.html') {
      const body = await fs.readFile(file, 'utf8');
      res.end(body.replace('</body>', reloadSnippet + '</body>'));
    } else {
      const content = await fs.readFile(file);
      res.end(content);
    }
    return true;
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return false;
    throw error;
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/__dev/events' && !PREVIEW && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive'
    });
    connections.add(res);
    req.on('close', () => connections.delete(res));
    res.write(': conectado\n\n');
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Método não permitido.');
    return;
  }
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (pathname.includes('\0') || pathname.includes('\\')) {
      res.writeHead(400);
      res.end('Caminho inválido.');
      return;
    }
    const requested = path.resolve(DIR, pathname.replace(/^\/+/, ''));
    if (requested !== DIR && !requested.startsWith(DIR + path.sep)) {
      res.writeHead(403);
      res.end('Caminho proibido.');
      return;
    }
    if (await serveFile(requested === DIR ? path.join(DIR, 'index.html') : requested, req, res, !PREVIEW)) return;
    const acceptsHtml = (req.headers.accept || '').includes('text/html');
    if (acceptsHtml && !path.extname(pathname)) {
      if (await serveFile(path.join(DIR, 'index.html'), req, res, !PREVIEW)) return;
    }
    res.writeHead(404);
    res.end('Arquivo não encontrado.');
  } catch (error) {
    console.error('[dev-server]', error);
    if (!res.headersSent) res.writeHead(500);
    res.end('Erro interno.');
  }
});

if (!PREVIEW) {
  compiler = spawn(process.execPath,
    [require.resolve('webpack/bin/webpack.js'), '--mode', 'development', '--watch'],
    { cwd: path.resolve(__dirname, '..'), stdio: ['inherit', 'pipe', 'pipe'], windowsHide: true }
  );
  compiler.stdout.on('data', data => {
    const output = data.toString();
    process.stdout.write(output);
    if (/compiled successfully/i.test(output)) {
      for (const stream of connections) stream.write('event: reload\ndata: atualizado\n\n');
    }
  });
  compiler.stderr.on('data', data => process.stderr.write(data));
  compiler.on('error', error => console.error('[webpack]', error));
}

server.listen(PORT, '0.0.0.0', () =>
  console.log('Material de Aulas: http://localhost:' + PORT + (PREVIEW ? ' (preview)' : ' (watch)'))
);
function shutdown() {
  server.close();
  for (const stream of connections) stream.end();
  if (compiler && !compiler.killed) compiler.kill();
}
process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
