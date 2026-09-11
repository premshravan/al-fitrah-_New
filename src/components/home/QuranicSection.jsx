import { Link } from 'react-router-dom'
import ProcessFlow from '../ProcessFlow'

export default function QuranicSection() {
  return (
    <section className="section section--deep quranic">
      <div className="container quranic__grid">
        <div className="quranic__copy">
          <div className="leaf-divider" style={{ color: 'var(--gold)' }}>
            <LeafIcon /> <span className="eyebrow" style={{ color: 'var(--gold)' }}>Quranic Education</span>
          </div>
          <h2>A beautiful beginning with the Quran</h2>
          <p>
            Quran learning at Al-Fitrah is built around the Nour Al Bayan wel
            Fathurabbani method, combined with the child-friendly "Tahajji" approach
            to Tajweed. Children move through the Quran gradually and revisit each
            portion, building genuine familiarity rather than rote memorisation alone.
          </p>
          <div className="quranic__flow">
            <ProcessFlow steps={['Listen', 'Recognize', 'Read', 'Practise', 'Understand', 'Grow']} />
          </div>
          <Link to="/quranic-education" className="btn btn-primary quranic__cta">Explore Quranic Education</Link>
        </div>
      </div>

      <style>{`
        .quranic__grid { max-width: 760px; }
        .quranic h2 { font-size: clamp(1.9rem, 3vw, 2.5rem); margin-top: 10px; }
        .quranic__copy p { margin-top: 20px; color: rgba(251,246,236,0.85); font-size: 1.03rem; }
        .quranic__flow { margin-top: 32px; }
        .quranic .process-flow__bubble {
          background: rgba(251,246,236,0.08);
          border-color: rgba(251,246,236,0.28);
          color: var(--ivory);
        }
        .quranic__cta { margin-top: 32px; }
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
