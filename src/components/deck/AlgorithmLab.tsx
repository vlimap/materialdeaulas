import { useMemo, useState, type KeyboardEvent, type SyntheticEvent } from 'react';
import { buildAlgorithmTrace } from './algorithm-traces';
import { ArrowRight, RotateCcw, CheckCircle2, Settings } from 'lucide-react';
import type { Slide } from '../../types/course';
import './AlgorithmLab.css';

type LabSlide = Extract<Slide, { kind: 'algorithm-lab' }>;
function ignore(event: SyntheticEvent) { event.stopPropagation(); }
function ignoreKey(event: KeyboardEvent) { event.stopPropagation(); }

export function AlgorithmLab({ slide }: { slide: LabSlide }) {
  const [value, setValue] = useState(3);
  const [index, setIndex] = useState(0);
  const [repair, setRepair] = useState(false);
  const trace = useMemo(() => buildAlgorithmTrace(slide.scenario, value, repair), [slide.scenario, value, repair]);
  const current = trace.steps[index - 1];
  const done = index === trace.steps.length;

  function changeInput(next: number) {
    setValue(next);
    setIndex(0);
  }
  return (
    <section className="algorithm-lab" aria-label={'Laboratório interativo: ' + trace.title}
      onPointerDown={ignore} onPointerUp={ignore} onClick={ignore} onKeyDown={ignoreKey}>
      <div className="algorithm-simulation">
        <div className="algorithm-label">EXECUÇÃO VISUAL</div>
        <div className="algorithm-machine" aria-hidden="true">
          <div className="algorithm-machine-input"><small>ENTRADA</small><b>{trace.inputValue}</b></div>
          <span className="algorithm-machine-arrow">→</span>
          <div className={'algorithm-machine-unit' + (index ? ' is-running' : '')}>
            <Settings className="algorithm-machine-gear" aria-hidden="true" />
            <small>ALGORITMO</small>
          </div>
          <span className="algorithm-machine-arrow">→</span>
          <div className={'algorithm-machine-output' + (done ? ' is-complete' : '')}>
            <small>SAÍDA</small><b>{done ? trace.result : '?'}</b>
          </div>
        </div>
        <div className="algorithm-progress" aria-label={index + ' de ' + trace.steps.length + ' instruções executadas'}>
          <progress value={index} max={trace.steps.length} />
          <span>{index} de {trace.steps.length} etapas</span>
        </div>
        <div className="algorithm-result" role="status" aria-live="polite">
          <strong>{current?.state ?? 'Pronto para executar'}</strong>
          <span>{current?.message ?? 'Selecione uma entrada e avance.'}</span>
        </div>
      </div>
      <div className="algorithm-controls">
        <strong className="algorithm-heading">{trace.title}</strong>
        <label className="algorithm-input-label" htmlFor={'algorithm-input-' + slide.id}>{trace.inputLabel}</label>
        <div className="algorithm-input-row">
          <select id={'algorithm-input-' + slide.id} value={value} onChange={event => changeInput(Number(event.target.value))}>
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          {slide.scenario === 'debugging' && (
            <label className="algorithm-repair"><input type="checkbox" checked={repair}
              onChange={event => { setRepair(event.target.checked); setIndex(0); }} />
              Corrigir o erro</label>
          )}
        </div>
        <span className="algorithm-code-label">PSEUDOCÓDIGO · LEITURA</span>
        <pre className="algorithm-code"><code>
          {trace.source.map((line, lineNo) => (
            <span key={lineNo} className={current?.line === lineNo ? 'is-highlighted' : ''}>{line}</span>
          ))}
        </code></pre>
        <div className="algorithm-buttons">
          <button type="button" disabled={done}
            onClick={() => setIndex(previous => Math.min(trace.steps.length, previous + 1))}>
            {done ? <CheckCircle2 size={17}/> : <ArrowRight size={17}/>}
            {done ? 'Concluído' : 'Executar passo'}
          </button>
          <button type="button" className="is-secondary" onClick={() => setIndex(0)}>
            <RotateCcw size={16}/> Reiniciar
          </button>
        </div>
      </div>
    </section>
  );
}
