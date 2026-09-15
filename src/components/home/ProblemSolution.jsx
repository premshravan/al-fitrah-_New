import { Link } from 'react-router-dom'

export default function ProblemSolution() {
  return (
    <section className="section section--tinted pas">
      <div className="container pas__grid">
        <div className="pas__visual pas__visual--framed">
          <img
            src="/images/galleries/group-image-2.jpg"
            alt="Al-Fitrah preschool children learning confidence and cooperation through a group performance"
          />
        </div>

        <div className="pas__copy">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">The Early Years</span></div>
          <h2>The early years shape more than what a child learns</h2>
          <p>
            The early years are a time when children develop habits, confidence,
            social skills and attitudes that influence their future learning.
          </p>
          <p>
            Children need an environment where they feel safe, loved and encouraged
            to explore — while receiving meaningful guidance in learning, values and
            behaviour.
          </p>
          <p className="pas__solution">
            Al-Fitrah brings Quranic learning, academic foundations, Islamic values,
            character development and joyful activities together in one
            child-friendly environment.
          </p>
          <Link to="/our-approach" className="btn btn-primary">Discover Our Approach</Link>
        </div>
      </div>

      <style>{`
        .pas__grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }
        .pas__visual {
          width: min(100%, 420px);
          aspect-ratio: 5 / 7;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }
        .pas__visual--framed {
          border-radius: var(--radius-card);
          border: 5px solid rgba(255, 246, 207, 0.88);
          box-shadow: 0 22px 46px -18px rgba(18, 51, 40, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.65);
        }
        .pas__visual img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .pas__copy h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; max-width: 16ch; }
        .pas__copy p { margin-top: 18px; color: rgba(255, 250, 240, 0.86); font-size: 1.02rem; max-width: 54ch; }
        .pas__solution {
          color: var(--ivory) !important;
          font-weight: 600;
          border-left: 3px solid var(--gold);
          padding-left: 16px;
        }
        .pas__copy .btn { margin-top: 28px; }

        @media (max-width: 900px) {
          .pas__grid { grid-template-columns: 1fr; }
          .pas__visual { width: min(100%, 380px); margin: 0 auto; order: -1; }
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
