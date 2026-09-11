import { Link } from 'react-router-dom'
import ProcessFlow from '../ProcessFlow'

const PRINCIPLES = [
  'Child-centred learning',
  'Learning through exploration',
  'Age-appropriate education',
  'Quranic foundation',
  'Positive reinforcement',
  'Parent involvement',
]

export default function ApproachSection() {
  return (
    <section className="section approach">
      <div className="container">
        <div className="approach__head">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Our Educational Approach</span></div>
          <h2>Learning through love, discovery &amp; guidance</h2>
        </div>

        <div className="approach__body">
          <ul className="approach__principles">
            {PRINCIPLES.map((p) => (
              <li key={p}>
                <span aria-hidden="true">✓</span> {p}
              </li>
            ))}
          </ul>

          <div className="approach__flow">
            <p className="approach__flow-label">Every activity follows a gentle rhythm:</p>
            <ProcessFlow steps={['Explore', 'Discover', 'Understand', 'Practice', 'Grow']} />
          </div>
        </div>

        <Link to="/our-approach" className="btn btn-outline approach__cta">Explore Our Approach</Link>
      </div>

      <style>{`
        .approach__head { max-width: 640px; margin-bottom: 40px; }
        .approach__head h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; }
        .approach__body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }
        .approach__principles li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(27,75,58,0.1);
          font-weight: 600;
        }
        .approach__principles span {
          color: var(--leaf);
          font-weight: 800;
        }
        .approach__flow {
          background: var(--ivory-deep);
          border-radius: var(--radius-card);
          padding: 32px;
        }
        .approach__flow-label { font-weight: 600; margin-bottom: 18px; }
        .approach__cta { margin-top: 40px; }

        @media (max-width: 860px) {
          .approach__body { grid-template-columns: 1fr; }
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
