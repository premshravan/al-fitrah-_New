import { Link } from 'react-router-dom'
import ProcessFlow from '../ProcessFlow'

const PRINCIPLES = [
  'Child-centred learning environment',
  'Authentic Nour Al Bayan Quran method',
  'Loving teacher & ayah supervision',
  'Montessori-inspired sensory exploration',
  'Gentle character & Sunnah adab habits',
  'Active collaboration with parents',
]

export default function ApproachSection() {
  return (
    <section className="section approach">
      <div className="container">
        <div className="approach__head">
          <h2>Learning through love, discovery &amp; guidance</h2>
          <p className="approach__subtitle">
            Every day at Al-Fitrah is intentionally balanced between sacred learning, foundational academics, and joyful creative play.
          </p>
        </div>

        <div className="approach__body">
          <ul className="approach__principles">
            {PRINCIPLES.map((p) => (
              <li key={p}>
                <span className="approach__check" aria-hidden="true">🌱</span> {p}
              </li>
            ))}
          </ul>

          <div className="approach__flow">
            <p className="approach__flow-label">Every learning activity follows a gentle pathway:</p>
            <ProcessFlow steps={['Explore', 'Discover', 'Understand', 'Practice', 'Grow']} />
          </div>
        </div>

        <Link to="/our-approach" className="btn btn-outline approach__cta">Explore Our Educational Approach</Link>
      </div>

      <style>{`
        .approach__head { max-width: 720px; margin-bottom: 36px; }
        .approach__head h2 { font-size: clamp(2rem, 3.2vw, 2.7rem); margin-top: 10px; }
        .approach__subtitle { margin-top: 12px; color: var(--ink-soft); font-size: 1.05rem; }

        .approach__body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }
        .approach__principles li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--green-deep-ink);
        }
        .approach__check {
          font-size: 1.1rem;
        }
        .approach__flow {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent 58%),
            repeating-linear-gradient(135deg, rgba(67, 36, 97, 0.035) 0 1px, transparent 1px 13px),
            var(--ivory-deep);
          border-radius: var(--radius-card);
          padding: 32px;
          border: 1px solid rgba(246, 201, 69, 0.3);
          box-shadow: 0 16px 28px -24px rgba(38, 23, 55, 0.7);
        }
        .approach__flow-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 22px;
          color: var(--green-deep-ink);
        }
        .approach__flow-label::before {
          content: '';
          width: 28px;
          height: 3px;
          border-radius: 3px;
          background: var(--gold);
        }
        .approach__cta { margin-top: 40px; }

        @media (max-width: 900px) {
          .approach__body { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .approach__flow { padding: 22px 18px; }
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
