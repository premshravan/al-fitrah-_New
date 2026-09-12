const ITEMS = [
  { label: 'Quranic Learning', icon: '📖', colorClass: 'trust-strip__icon--blue' },
  { label: 'Academic Foundation', icon: '✏️', colorClass: 'trust-strip__icon--gold' },
  { label: 'Islamic Values', icon: '🌙', colorClass: 'trust-strip__icon--green' },
  { label: 'Character Development', icon: '🤝', colorClass: 'trust-strip__icon--coral' },
  { label: 'Creative Learning', icon: '🎨', colorClass: 'trust-strip__icon--purple' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-strip__row">
        {ITEMS.map((item) => (
          <div className="trust-strip__item" key={item.label}>
            <span className={`trust-strip__icon ${item.colorClass}`} aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        .trust-strip {
          background: #f8eebd;
          padding: 22px 0;
          position: relative;
        }
        .trust-strip__row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .trust-strip__item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 0.92rem;
          color: var(--green-deep-ink);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 18px 8px 10px;
          border-radius: 100px;
          box-shadow: 0 6px 18px -6px rgba(0, 0, 0, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
          flex-shrink: 0;
        }
        .trust-strip__item:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.18);
        }
        .trust-strip__icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 1.25rem;
          box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.15);
        }
        .trust-strip__icon--blue {
          background: #d9caf0;
        }
        .trust-strip__icon--gold {
          background: var(--gold);
        }
        .trust-strip__icon--green {
          background: #e8ddf7;
        }
        .trust-strip__icon--coral {
          background: #f2c45b;
        }
        .trust-strip__icon--purple {
          background: #d8c5ee;
        }

        @media (max-width: 900px) {
          .trust-strip {
            padding: 16px 0;
          }
          .trust-strip__row {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            padding: 4px 20px 8px;
            justify-content: flex-start;
            gap: 12px;
          }
          .trust-strip__row::-webkit-scrollbar {
            display: none;
          }
          .trust-strip__item {
            font-size: 0.86rem;
            padding: 6px 14px 6px 8px;
          }
          .trust-strip__icon {
            width: 36px;
            height: 36px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
