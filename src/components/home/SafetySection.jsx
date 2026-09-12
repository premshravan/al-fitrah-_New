const POINTS = [
  { icon: '🏫', title: 'Child-friendly classrooms', text: 'Bright, clean spaces sized and furnished for young children.' },
  { icon: '👩\u200d🏫', title: 'Attentive supervision', text: 'Trained teachers and ayahs supporting children throughout the day.' },
  { icon: '🧸', title: 'Emotional wellbeing', text: 'A warm, patient environment where children feel safe to explore and express themselves.' },
  { icon: '🧼', title: 'Hygiene & routine', text: 'Consistent daily routines that help children feel secure.' },
]

export default function SafetySection() {
  return (
    <section className="section section--tinted safety">
      <div className="container">
        <div className="safety__head">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Safety &amp; Well-Being</span></div>
          <h2>A safe place to learn, explore &amp; grow</h2>
        </div>
        <div className="safety__grid">
          {POINTS.map((p) => (
            <div className="safety__card" key={p.title}>
              <span aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .safety__head { max-width: 600px; margin-bottom: 40px; }
        .safety__head h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; }
        .safety__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .safety__card {
          background: var(--white);
          padding: 26px 22px;
          border-radius: var(--radius-card);
          box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.12);
        }
        .safety__card span { font-size: 1.6rem; }
        .safety__card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--green-deep-ink) !important;
          margin-top: 14px;
        }
        .safety__card p {
          margin-top: 8px;
          color: var(--ink-soft) !important;
          font-size: 0.88rem;
        }

        @media (max-width: 900px) {
          .safety__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .safety__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}
