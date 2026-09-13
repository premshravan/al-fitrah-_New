export default function ProcessFlow({ steps }) {
  return (
    <div className="process-flow">
      {steps.map((step, i) => (
        <div className="process-flow__step" key={step}>
          <div className="process-flow__bubble">
            <span className="process-flow__topline">
              <span className="process-flow__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="process-flow__icon" aria-hidden="true">{getStepIcon(step)}</span>
            </span>
            <span className="process-flow__label">{step}</span>
          </div>
          {i < steps.length - 1 && <span className="process-flow__arrow" aria-hidden="true">↗</span>}
        </div>
      ))}

      <style>{`
        .process-flow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
          gap: 18px;
          align-items: center;
          position: relative;
        }
        .process-flow__step {
          display: flex;
          align-items: center;
          min-width: 0;
          position: relative;
        }
        .process-flow__bubble {
          width: 100%;
          min-height: 88px;
          background: linear-gradient(145deg, var(--white) 0%, #fffaf0 100%);
          border: 1px solid rgba(67, 36, 97, 0.14);
          padding: 14px 12px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
          font-weight: 800;
          color: var(--green-deep-ink);
          box-shadow: 0 12px 22px -14px rgba(38, 23, 55, 0.5);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .process-flow__step:hover .process-flow__bubble {
          transform: translateY(-4px);
          border-color: var(--gold);
          box-shadow: 0 16px 26px -14px rgba(38, 23, 55, 0.6);
        }
        .process-flow__topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .process-flow__index {
          color: var(--gold-deep);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
        }
        .process-flow__icon {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background: rgba(246, 201, 69, 0.18);
          font-size: 1.05rem;
          line-height: 1;
        }
        .process-flow__label {
          font-size: 0.9rem;
          line-height: 1.2;
        }
        .process-flow__arrow {
          position: absolute;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold-deep);
          font-size: 1.15rem;
          line-height: 1;
          z-index: 1;
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .process-flow {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .process-flow__step {
            padding-bottom: 12px;
          }
          .process-flow__step:last-child {
            padding-bottom: 0;
          }
          .process-flow__bubble {
            min-height: 68px;
            padding: 12px 14px;
          }
          .process-flow__arrow {
            right: auto;
            left: 24px;
            top: auto;
            bottom: -2px;
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  )
}

function getStepIcon(step) {
  const icons = {
    Explore: '🧭',
    Discover: '🔎',
    Understand: '💡',
    Practice: '✋',
    Practise: '✋',
    Grow: '🌱',
    Listen: '👂',
    Recognize: '👀',
    Read: '📖',
  }

  return icons[step] || '✨'
}
