import { Link } from 'react-router-dom'

const STEPS = [
  { n: '01', title: 'Enquire', text: 'Fill the admission enquiry form or call the school office.' },
  { n: '02', title: 'Speak With Our Admissions Team', text: 'We understand your child\u2019s needs and answer your questions.' },
  { n: '03', title: 'Visit the School', text: 'See the classrooms, meet teachers and experience Al-Fitrah first-hand.' },
  { n: '04', title: 'Complete Admission', text: 'Finalise documentation and secure your child\u2019s seat.' },
]

export default function AdmissionsFlow() {
  return (
    <section className="section section--tinted admissions-flow">
      <div className="container">
        <div className="admissions-flow__head">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Admissions</span></div>
          <h2>Give your child a beautiful beginning</h2>
        </div>

        <div className="admissions-flow__grid">
          {STEPS.map((s) => (
            <div className="admissions-flow__card" key={s.n}>
              <span className="admissions-flow__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <Link to="/admissions" className="btn btn-primary admissions-flow__cta">Start Admission Enquiry</Link>
      </div>

      <style>{`
        .admissions-flow__head { max-width: 600px; margin-bottom: 44px; }
        .admissions-flow__head h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; }
        .admissions-flow__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .admissions-flow__card {
          background: var(--white);
          padding: 28px 22px;
          border-radius: var(--radius-card);
          border-top: 4px solid var(--gold);
        }
        .admissions-flow__num {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--leaf);
        }
        .admissions-flow__card h3 { margin-top: 12px; font-size: 1.05rem; }
        .admissions-flow__card p { margin-top: 8px; color: var(--ink-soft); font-size: 0.9rem; }
        .admissions-flow__cta { margin-top: 40px; }

        @media (max-width: 900px) {
          .admissions-flow__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .admissions-flow__grid { grid-template-columns: 1fr; }
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
