const REASONS = [
  'A Quranic foundation built through a structured, age-appropriate method rather than rote repetition',
  'Academic learning in English, Mathematics and EVS alongside Islamic education',
  'A child-friendly environment with teachers trained to work with young children',
  'Character and values embedded into everyday classroom life',
  'A balance of structured learning and open, joyful play',
]

export default function WhyParentsChoose() {
  return (
    <section className="section why-choose">
      <div className="container">
        <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Why Parents Choose Al-Fitrah</span></div>
        <h2>What families in Thalassery can expect</h2>
        <ul className="why-choose__list">
          {REASONS.map((r) => (
            <li key={r}>
              <span aria-hidden="true">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="why-choose__note">
          We're building our collection of parent stories — verified testimonials and
          Google reviews will appear here as families share their experience.
        </p>
      </div>

      <style>{`
        .why-choose h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; max-width: 20ch; }
        .why-choose__list {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 40px;
          max-width: 900px;
        }
        .why-choose__list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 1rem;
          color: var(--ink-soft);
        }
        .why-choose__list span:first-child {
          color: var(--leaf);
          font-weight: 800;
          margin-top: 2px;
        }
        .why-choose__note {
          margin-top: 32px;
          font-size: 0.86rem;
          color: var(--ink-soft);
          font-style: italic;
        }
        @media (max-width: 700px) {
          .why-choose__list { grid-template-columns: 1fr; }
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
