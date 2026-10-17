import { useMemo, useState, type SyntheticEvent } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { createAlgorithmVisualization, type AlgorithmScenario } from './algorithm-visualization-engine';
import type { Slide } from '../../types/course';
import './AlgorithmVisualizer.css';

type VisualizationSlide = Extract<Slide, { kind: 'algorithm-visualization' }>;
const GAP = '–';

export function AlgorithmVisualizer({ slide }: { slide: VisualizationSlide }) {
  const [size, setSize] = useState(4);
  const [position, setPosition] = useState(0);
  const trace = useMemo(() => createAlgorithmVisualization(slide.scenario, size), [slide.scenario, size]);
  const frame = trace.frames[position];
  const finished = position === trace.frames.length - 1;
  const stop = (event: SyntheticEvent) => event.stopPropagation();
  const changeSize = (value: number) => { setSize(value); setPosition(0); };
  return (
    <section className="algo-viz" aria-label={'Laboratório interativo: ' + trace.title}
      onClick={stop} onPointerDown={stop} onPointerUp={stop} onKeyDown={stop}>
      <div className="algo-viz-scene">
        <div className="algo-viz-label">VISUALIZAÇÃO · SOMENTE LEITURA</div>
        <div className="algo-viz-values" role="img" aria-label={'Estado atual: ' + frame.cells.join(', ')}>
          {frame.cells.map((value, index) => (
            <div key={index} className={
              'algo-viz-cell' +
              (frame.completed.includes(index) ? ' is-complete' : '') +
              (frame.active.includes(index) ? ' is-active' : '')
            }>
              <span>{value}</span>
              <small>{index}</small>
            </div>
          ))}
        </div>
        <div className="algo-viz-status" role="status" aria-live="polite">
          <strong>{frame.message}</strong>
          <p>{frame.detail}</p>
        </div>
        <div className="algo-viz-meter">
          <progress value={position} max={trace.frames.length - 1} aria-label="Progresso da execução" />
          <span>{position + 1} / {trace.frames.length}</span>
        </div>
      </div>
      <div className="algo-viz-actions">
        <div className="algo-viz-heading">
          <strong>{trace.title}</strong>
          <span>{trace.complexity}</span>
        </div>
        <label htmlFor={'algo-size-' + slide.id}>{trace.inputLabel}</label>
        <select id={'algo-size-' + slide.id} value={size} onChange={event => changeSize(Number(event.target.value))}>
          {[3, 4, 5, 6].map(value => (
            <option value={value} key={value}>{value}</option>
          ))}
        </select>
        <div className="algo-viz-code-heading">PSEUDOCÓDIGO · SOMENTE LEITURA</div>
        <pre className="algo-viz-code"><code>{trace.code.map((line, index) => (
          <span key={index} className={frame.line === index ? 'is-running' : ''}>{line || GAP}</span>
        ))}</code></pre>
        <div className="algo-viz-footer">
          <button type="button" disabled={finished}
            onClick={() => setPosition(current => Math.min(current + 1, trace.frames.length - 1))}>
            <ArrowRight size={17} aria-hidden="true"/> {finished ? 'Concluído' : 'Próximo passo'}
          </button>
          <button className="is-secondary" type="button" onClick={() => setPosition(0)}>
            <RotateCcw size={17} aria-hidden="true"/> Reiniciar
          </button>
        </div>
        <p className="algo-viz-conclusion">
          {finished ? 'Resultado: ' + trace.answer : trace.note}
        </p>
      </div>
    </section>
  );
}
