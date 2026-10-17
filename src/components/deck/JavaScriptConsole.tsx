import { useState, type SyntheticEvent } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import type { Slide } from '../../types/course';
import './JavaScriptConsole.css';

type ConsoleSlide = Extract<Slide, { kind: 'javascript-console' }>;

function makeDocument(code: string): string {
  // A script closing sequence must never be able to terminate its script element.
  // sandbox="allow-scripts" creates an opaque, cross-origin execution environment.
  const safeCode = code.replace(/<\/script/gi, '<\\/script');
  return \`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>
html,body{margin:0;min-height:100%;background:#0f1b2d;color:#e7f2ff;font:13px/1.5 Consolas,monospace}
#console{padding:10px;white-space:pre-wrap;overflow-wrap:anywhere}
.line{padding:2px 0;border-bottom:1px solid #223249}
.error{color:#ffc7c7}.warn{color:#ffe2a3}
</style></head><body><main id="console" aria-label="Saída do programa"></main><script>
"use strict";
(() => {
  const output = document.getElementById('console');
  const write = (kind, args) => {
    const line = document.createElement('div');
    line.className = 'line ' + kind;
    line.textContent = args.map(arg => {
      if (typeof arg === 'string') return arg;
      if (arg instanceof Error) return arg.name + ': ' + arg.message;
      try { return JSON.stringify(arg, null, 2) ?? String(arg); }
      catch { return String(arg); }
    }).join(' ');
    output.appendChild(line);
  };
  const log = console.log.bind(console);
  for (const kind of ['log', 'info', 'warn', 'error', 'table']) {
    console[kind] = (...args) => { write(kind === 'error' ? 'error' : kind === 'warn' ? 'warn' : '', args); };
  }
  addEventListener('error', event => { write('error', [event.message]); event.preventDefault(); });
  addEventListener('unhandledrejection', event => {
    write('error', [event.reason instanceof Error ? event.reason.message : event.reason]);
    event.preventDefault();
  });
  write('', ['Pronto. A saída aparecerá abaixo.']);
})();
<\/script><script>
\${safeCode}
<\/script></body></html>\`;
}

function stop(event: SyntheticEvent) { event.stopPropagation(); }

export function JavaScriptConsole({ slide }: { slide: ConsoleSlide }) {
  const [code, setCode] = useState(slide.starterCode);
  const [execution, setExecution] = useState(0);
  const [ranCode, setRanCode] = useState(slide.starterCode);
  return (
    <section className="js-console" aria-label="Laboratório JavaScript executável"
      onClick={stop} onPointerDown={stop} onPointerUp={stop} onKeyDown={stop}>
      <div className="js-console-editor">
        <div className="js-console-topline"><strong>SEU CÓDIGO · JavaScript</strong><span>Edite e execute</span></div>
        <label htmlFor={'js-editor-' + slide.id}>{slide.task}</label>
        <textarea
          id={'js-editor-' + slide.id}
          value={code}
          onChange={event => setCode(event.target.value)}
          spellCheck={false}
          aria-label="Editor de JavaScript"
        />
        <div className="js-console-buttons">
          <button type="button" onClick={() => { setRanCode(code); setExecution(i => i + 1); }}>
            <Play size={16} aria-hidden="true"/> Executar
          </button>
          <button type="button" className="is-secondary" onClick={() => {
            setCode(slide.starterCode);
            setRanCode(slide.starterCode);
            setExecution(i => i + 1);
          }}>
            <RotateCcw size={16} aria-hidden="true"/> Restaurar
          </button>
        </div>
      </div>
      <div className="js-console-output">
        <strong>RESULTADO · Console isolado</strong>
        <iframe key={execution} title="Saída de JavaScript" sandbox="allow-scripts" srcDoc={makeDocument(ranCode)} />
        <p>{slide.explanation}</p>
        <small>A execução ocorre em um quadro isolado, sem acesso aos dados da página. APIs de Node.js não estão disponíveis aqui.</small>
      </div>
    </section>
  );
}
