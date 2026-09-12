import { Link } from 'react-router-dom'

const PROGRAMS = [
  { name: 'Early Years', age: 'Age 3+', focus: 'Settling in, sensory play and first Quranic sounds' },
  { name: 'Preschool', age: 'Age 4+', focus: 'Language, number sense and guided Quran reading' },
  { name: 'Level 1–3', age: 'Age 5–6', focus: 'Reading fluency, EVS, Mathematics and Tajweed practice' },
]

export default function ProgramsPreview() {
  return (
    <section className="section section--tinted programs-preview">
      <div className="container">
        <div className="programs-preview__head">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Programs</span></div>
          <h2>A gentle progression, age by age</h2>
          <p>Age groupings shown below are indicative; exact class names and cut-off dates are confirmed at admission.</p>
        </div>

        <div className="programs-preview__grid">
          {PROGRAMS.map((p) => (
            <div className="programs-preview__card" key={p.name}>
              <span className="pill">{p.age}</span>
              <h3>{p.name}</h3>
              <p>{p.focus}</p>
            </div>
          ))}
        </div>

        <Link to="/programs" className="btn btn-outline programs-preview__cta">See All Programs</Link>
      </div>

      <style>{`
        .programs-preview__head { max-width: 640px; margin-bottom: 40px; }
        .programs-preview__head h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; }
        .programs-preview__head p { margin-top: 12px; color: rgba(255, 250, 240, 0.86); font-size: 0.94rem; }
        .programs-preview__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .programs-preview__card {
          background: var(--white);
          border-radius: var(--radius-card);
          padding: 28px;
          border: 1px solid rgba(27,75,58,0.08);
          box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.12);
        }
        .programs-preview__card h3 {
          margin-top: 14px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--green-deep-ink) !important;
        }
        .programs-preview__card p {
          margin-top: 10px;
          color: var(--ink-soft) !important;
          font-size: 0.94rem;
        }
        .programs-preview__cta { margin-top: 36px; }

        @media (max-width: 800px) {
          .programs-preview__grid { grid-template-columns: 1fr; }
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
