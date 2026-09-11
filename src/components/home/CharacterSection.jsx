import { Link } from 'react-router-dom'

const VALUES = ['Kindness', 'Honesty', 'Sharing', 'Caring', 'Respect', 'Responsibility', 'Discipline', 'Cooperation']

export default function CharacterSection() {
  return (
    <section className="section character">
      <div className="container character__grid">
        <div className="character__visual blob">
          <img
            src="/images/brochure-events.jpg"
            alt="Al-Fitrah preschool children in costumed classroom activities and celebrations"
          />
        </div>

        <div className="character__copy">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Character Development</span></div>
          <h2>Growing good hearts alongside curious minds</h2>
          <p>
            Values are not taught as a separate subject — they're woven into
            everyday moments: sharing a toy, waiting a turn, saying sorry, helping
            a friend. Over time, these small moments build lasting character.
          </p>
          <ul className="character__pills">
            {VALUES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <Link to="/character-and-values" className="btn btn-primary character__cta">See How Values Come Alive</Link>
        </div>
      </div>

      <style>{`
        .character__grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .character__visual { aspect-ratio: 4/5; box-shadow: var(--shadow-soft); }
        .character__visual img { width: 100%; height: 100%; object-fit: cover; }
        .character__copy h2 { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 10px; max-width: 16ch; }
        .character__copy p { margin-top: 18px; color: var(--ink-soft); font-size: 1.02rem; max-width: 52ch; }
        .character__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .character__pills li {
          background: var(--ivory-deep);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--green-deep-ink);
        }
        .character__cta { margin-top: 30px; }

        @media (max-width: 900px) {
          .character__grid { grid-template-columns: 1fr; }
          .character__visual { max-width: 380px; margin: 0 auto; }
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
