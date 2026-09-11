export default function ProcessFlow({ steps }) {
  return (
    <div className="process-flow">
      {steps.map((step, i) => (
        <div className="process-flow__step" key={step}>
          <div className="process-flow__bubble">{step}</div>
          {i < steps.length - 1 && <span className="process-flow__arrow" aria-hidden="true">→</span>}
        </div>
      ))}

      <style>{`
        .process-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          row-gap: 18px;
        }
        .process-flow__step {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .process-flow__bubble {
          background: var(--white);
          border: 1.5px solid rgba(27,75,58,0.16);
          padding: 12px 22px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--green-deep-ink);
        }
        .process-flow__arrow {
          color: var(--leaf);
          font-size: 1.2rem;
        }
        @media (max-width: 640px) {
          .process-flow { flex-direction: column; align-items: flex-start; }
          .process-flow__step { flex-direction: column; align-items: flex-start; }
          .process-flow__arrow { transform: rotate(90deg); margin-left: 20px; }
        }
      `}</style>
    </div>
  )
}
