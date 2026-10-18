import { useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import type { Slide } from '../../types/course';
import '../../styles/sdlc-visual.css';

type VisualName = Extract<Slide, { kind: 'visual' }>['visual'];
export type SdlcVisualName = Extract<VisualName, `sdlc-${string}`>;
type Phase = { label: string; title: string; explanation: string; result: string };
type Diagram = { title: string; instruction: string; phases: Phase[] };

const diagrams: Record<SdlcVisualName, Diagram> = {
  'sdlc-four-activities': {
    title: 'As quatro atividades fundamentais',
    instruction: 'Selecione uma atividade para entender como ela contribui para o produto.',
    phases: [
      { label: '01', title: 'Especificação', explanation: 'Entender necessidades, objetivos e restrições antes de definir a solução.', result: 'Saída: requisitos e critérios de aceitação' },
      { label: '02', title: 'Desenvolvimento', explanation: 'Projetar a solução e implementar as funcionalidades planejadas.', result: 'Saída: software implementado' },
      { label: '03', title: 'Validação', explanation: 'Confrontar o software com os requisitos e com a necessidade real.', result: 'Saída: evidências de testes e aceite' },
      { label: '04', title: 'Evolução', explanation: 'Adaptar o produto após seu uso, corrigindo problemas e incorporando mudanças.', result: 'Saída: melhorias e novas versões' }
    ]
  },
  'sdlc-waterfall': {
    title: 'Cascata: estágios encadeados',
    instruction: 'Percorra os estágios; uma descoberta pode exigir retorno a etapas anteriores.',
    phases: [
      { label: '01', title: 'Requisitos', explanation: 'A equipe documenta o que o sistema precisa realizar e suas restrições.', result: 'Artefato: especificação' },
      { label: '02', title: 'Projeto', explanation: 'Define arquitetura, componentes, interfaces e decisões de implementação.', result: 'Artefato: modelos de projeto' },
      { label: '03', title: 'Implementação', explanation: 'Transforma o projeto em código integrado e verificável.', result: 'Artefato: componentes implementados' },
      { label: '04', title: 'Integração e testes', explanation: 'Integra os componentes e verifica se o sistema atende ao esperado.', result: 'Artefato: evidências de qualidade' },
      { label: '05', title: 'Operação', explanation: 'O produto entra em uso e recebe correções e manutenção.', result: 'Artefato: feedback e melhorias' }
    ]
  },
  'sdlc-incremental': {
    title: 'Incremental: valor entregue em versões',
    instruction: 'Cada incremento combina especificar, desenvolver e validar.',
    phases: [
      { label: 'v1', title: 'Primeiro incremento', explanation: 'Entrega uma funcionalidade essencial já utilizável. A equipe recolhe feedback antes de ampliar a solução.', result: 'Entrega: agendamento básico' },
      { label: 'v2', title: 'Segundo incremento', explanation: 'Reavalia prioridades e acrescenta uma capacidade sem descartar o que já funciona.', result: 'Entrega: confirmação e cancelamento' },
      { label: 'v3', title: 'Terceiro incremento', explanation: 'Novas funcionalidades são incorporadas e validadas com usuários reais.', result: 'Entrega: lembretes e relatórios' }
    ]
  },
  'sdlc-feedback': {
    title: 'O feedback altera decisões',
    instruction: 'Avance até a operação e observe como o aprendizado retorna ao início.',
    phases: [
      { label: '01', title: 'Especificar', explanation: 'Registrar uma necessidade e os critérios para considerá-la atendida.', result: 'Necessidade → requisito' },
      { label: '02', title: 'Projetar', explanation: 'Planejar a solução a partir do problema conhecido.', result: 'Requisito → projeto' },
      { label: '03', title: 'Construir', explanation: 'Implementar a solução e integrar seus componentes.', result: 'Projeto → código' },
      { label: '04', title: 'Validar', explanation: 'Verificar se o sistema funciona e atende à expectativa.', result: 'Código → evidências' },
      { label: '05', title: 'Operar e aprender', explanation: 'O uso real revela novos requisitos e problemas. O feedback retorna para a especificação.', result: 'Feedback → nova especificação' }
    ]
  },
  'sdlc-artifacts': {
    title: 'Artefatos conectam decisões',
    instruction: 'A rastreabilidade permite responder por que cada entrega existe.',
    phases: [
      { label: '01', title: 'Necessidade', explanation: 'Uma pessoa ou organização descreve o problema que precisa resolver.', result: 'Registro: necessidade de negócio' },
      { label: '02', title: 'Requisito', explanation: 'A necessidade torna-se um comportamento ou restrição verificável.', result: 'Registro: requisito identificável' },
      { label: '03', title: 'Projeto', explanation: 'O requisito orienta uma decisão técnica documentada.', result: 'Registro: modelo ou decisão de arquitetura' },
      { label: '04', title: 'Código', explanation: 'A implementação está associada ao requisito que a motivou.', result: 'Registro: mudança de implementação' },
      { label: '05', title: 'Teste', explanation: 'Um teste fornece evidência para aquele requisito.', result: 'Registro: caso de teste e resultado' },
      { label: '06', title: 'Operação', explanation: 'Uso e métricas mostram se a necessidade inicial foi atendida.', result: 'Registro: feedback e evolução' }
    ]
  },
  'sdlc-models': {
    title: 'Processos adequados a contextos diferentes',
    instruction: 'Compare o princípio e o contexto de cada abordagem.',
    phases: [
      { label: 'A', title: 'Cascata', explanation: 'Organiza o trabalho em estágios e entregas bem definidos; mudanças tardias tendem a ser mais custosas.', result: 'Mais adequado: requisitos relativamente estáveis' },
      { label: 'B', title: 'Incremental', explanation: 'Entrega versões utilizáveis, aprende com feedback e ajusta prioridades ao longo do desenvolvimento.', result: 'Mais adequado: necessidades que evoluem' },
      { label: 'C', title: 'Orientado a risco', explanation: 'A escolha das atividades prioriza incertezas e riscos técnicos ou de negócio.', result: 'Mais adequado: alta incerteza ou criticidade' }
    ]
  }
};

function stopPointer(event: PointerEvent<HTMLElement>) { event.stopPropagation(); }
function stopKeys(event: KeyboardEvent<HTMLElement>) {
  if (['ArrowLeft', 'ArrowRight', ' ', 'Home', 'End'].includes(event.key)) event.stopPropagation();
}

export function SdlcVisual({ name }: { name: SdlcVisualName }) {
  const diagram = diagrams[name];
  const [step, setStep] = useState(0);
  const current = diagram.phases[step];
  const total = diagram.phases.length;
  const isLast = step === total - 1;

  return (
    <section
      className="sdlc2"
      data-variant={name}
      aria-label={diagram.title}
      onPointerDown={stopPointer}
      onPointerUp={stopPointer}
      onClick={event => event.stopPropagation()}
      onKeyDown={stopKeys}
    >
      <div className="sdlc2-heading">
        <p className="sdlc2-kicker">Exploração guiada</p>
        <p className="sdlc2-instruction">{diagram.instruction}</p>
      </div>
      <div className="sdlc2-map" role="group" aria-label="Etapas do diagrama">
        {diagram.phases.map((phase, index) => (
          <button
            key={phase.label}
            type="button"
            className={'sdlc2-node' + (index === step ? ' is-active' : '') + (index < step ? ' is-visited' : '')}
            aria-pressed={step === index}
            onClick={() => setStep(index)}
            style={{ '--phase': index } as React.CSSProperties}
          >
            <span className="sdlc2-index">{phase.label}</span>
            <strong>{phase.title}</strong>
            <span className="sdlc2-node-line" aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="sdlc2-detail" aria-live="polite" aria-atomic="true">
        <div className="sdlc2-detail-index">{String(step + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
        <div className="sdlc2-detail-copy">
          <h3>{current.title}</h3>
          <p>{current.explanation}</p>
          <strong className="sdlc2-outcome">{current.result}</strong>
        </div>
      </div>
      <div className="sdlc2-footer">
        <div className="sdlc2-progress" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={step + 1} aria-label="Progresso das etapas">
          <span style={{ width: `${(step + 1) / total * 100}%` }} />
        </div>
        <div className="sdlc2-actions">
          <button type="button" onClick={() => setStep(Math.max(step - 1, 0))} disabled={step === 0} aria-label="Etapa anterior"><ArrowLeft size={17} /> Anterior</button>
          <button type="button" className="sdlc2-next" onClick={() => setStep(isLast ? 0 : step + 1)}>
            {isLast ? <><RotateCcw size={17} /> Reiniciar</> : <>Próximo <ArrowRight size={17} /></>}
          </button>
        </div>
      </div>
    </section>
  );
}
