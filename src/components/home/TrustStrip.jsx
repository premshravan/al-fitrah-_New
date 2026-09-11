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
          background: linear-gradient(
            90deg,
            rgba(224, 242, 254, 0.88) 0%,
            rgba(254, 243, 199, 0.88) 25%,
            rgba(254, 215, 170, 0.78) 50%,
            rgba(220, 252, 231, 0.88) 75%,
            rgba(238, 222, 254, 0.88) 100%
          );
          backdrop-filter: blur(12px);
          border-top: 2px solid transparent;
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(90deg, #38BDF8 0%, #4ADE80 25%, #FACC15 50%, #FB923C 75%, #C084FC 100%) 1;
          padding: 24px 0;
          box-shadow: 0 10px 28px -10px rgba(18, 51, 40, 0.12);
        }
        .trust-strip__row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .trust-strip__item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--green-deep-ink);
          background: rgba(255, 255, 255, 0.8);
          padding: 8px 18px 8px 10px;
          border-radius: 100px;
          box-shadow: 0 4px 14px -6px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .trust-strip__item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px -8px rgba(0, 0, 0, 0.14);
        }
        .trust-strip__icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 1.2rem;
          box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.15);
        }
        .trust-strip__icon--blue {
          background: linear-gradient(135deg, #BAE6FD 0%, #38BDF8 100%);
        }
        .trust-strip__icon--gold {
          background: linear-gradient(135deg, #FEF08A 0%, #FACC15 100%);
        }
        .trust-strip__icon--green {
          background: linear-gradient(135deg, #BBF7D0 0%, #4ADE80 100%);
        }
        .trust-strip__icon--coral {
          background: linear-gradient(135deg, #FED7AA 0%, #FB923C 100%);
        }
        .trust-strip__icon--purple {
          background: linear-gradient(135deg, #E9D5FF 0%, #C084FC 100%);
        }

        @media (max-width: 860px) {
          .trust-strip__row {
            justify-content: center;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  )
}
