import { useState, type SyntheticEvent } from 'react';
import type { Slide } from '../../types/course';
import {
  evaluateTruth,
  explainTruth,
  getTruthRows,
  TRUTH_OPERATORS,
  truthLabel,
  type TruthOperator
} from './truth-table';
import './TruthTablePlayground.css';

type TruthSlide = Extract<Slide, { kind: 'truth-table' }>;
const OPERATORS: TruthOperator[] = ['and', 'or', 'not'];
const boolShort = (value: boolean) => value ? 'V' : 'F';

function Choice({ symbol, value, onChange }: {
  symbol: 'A' | 'B';
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="truth-choice">
      <span className="truth-choice-label">{symbol}</span>
      <div className="truth-choice-options" role="group" aria-label={'Valor lógico de ' + symbol}>
        {[true, false].map(option => (
          <button
            key={String(option)}
            type="button"
            aria-pressed={value === option}
            className={value === option ? 'is-selected' : ''}
            onClick={() => onChange(option)}
          >
            {truthLabel(option)}
          </button>
        ))}
      </div>
    </div>
  );
}

/** A full truth table stays visible while real buttons change the highlighted row. */
export function TruthTablePlayground({ slide }: { slide: TruthSlide }) {
  const [operator, setOperator] = useState<TruthOperator>(slide.operator);
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const rows = getTruthRows(operator);
  const result = evaluateTruth(operator, a, b);
  const info = TRUTH_OPERATORS[operator];
  const stop = (event: SyntheticEvent) => event.stopPropagation();

  return (
    <section
      className="truth-lab"
      aria-label="Simulador de tabela-verdade"
      onPointerDown={stop}
      onPointerUp={stop}
      onClick={stop}
      onKeyDown={stop}
    >
      <div className="truth-lab-controls">
        <p className="truth-lab-step">1. Escolha o operador lógico</p>
        <div className="truth-operator-options" role="group" aria-label="Operador lógico">
          {OPERATORS.map(option => (
            <button
              key={option}
              type="button"
              aria-pressed={operator === option}
              className={operator === option ? 'is-selected' : ''}
              onClick={() => setOperator(option)}
            >
              {TRUTH_OPERATORS[option].label}
            </button>
          ))}
        </div>
        <p className="truth-lab-step">2. Escolha os valores de entrada</p>
        <div className="truth-inputs">
          <Choice symbol="A" value={a} onChange={setA} />
          {operator !== 'not' && <Choice symbol="B" value={b} onChange={setB} />}
        </div>
        <div className="truth-rule">
          <strong>Regra do operador {info.label}</strong>
          <p>{info.rule}</p>
        </div>
      </div>

      <div className="truth-lab-display">
        <p className="truth-table-heading">3. Veja a tabela-verdade <span>somente leitura</span></p>
        <table className="truth-table">
          <caption>V = verdadeiro; F = falso. A linha destacada corresponde às entradas selecionadas.</caption>
          <thead>
            <tr>
              <th scope="col">A</th>
              {operator !== 'not' && <th scope="col">B</th>}
              <th scope="col">{info.expression}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => {
              const active = row.a === a && (operator === 'not' || row.b === b);
              return (
                <tr key={String(row.a) + String(row.b ?? '')} className={active ? 'is-current' : ''}>
                  <td>{boolShort(row.a)}</td>
                  {operator !== 'not' && <td>{boolShort(row.b ?? false)}</td>}
                  <td><strong>{boolShort(row.output)}</strong>{active && <span className="truth-current-marker">Atual</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="truth-output" role="status" aria-live="polite" aria-atomic="true">
          <div>
            <span>Resultado de {info.expression}</span>
            <strong>{truthLabel(result)}</strong>
          </div>
          <p>{explainTruth(operator, a, b)}</p>
        </div>
      </div>
    </section>
  );
}
