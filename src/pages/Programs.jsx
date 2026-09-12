import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const PROGRAMS = [
  {
    name: 'Early Years',
    age: 'Age 3+',
    icon: '🧸',
    tagClass: 'sticker-badge--mint',
    focus: 'Settling into school life, sensory play, and first exposure to Quranic sounds and letters.',
    outcomes: ['Comfort with the classroom routine & gentle ayahs', 'Basic listening and following simple instructions', 'First joyful familiarity with Arabic letter sounds'],
  },
  {
    name: 'Preschool',
    age: 'Age 4+',
    icon: '✏️',
    tagClass: 'sticker-badge--gold',
    focus: 'Building language, number sense and guided Quran reading practice.',
    outcomes: ['Growing vocabulary in English & early communication', 'Counting, patterns and early number concepts', 'Reading short Quranic portions with gentle guidance'],
  },
  {
    name: 'Level 1',
    age: 'Age 4–5',
    icon: '🌱',
    tagClass: 'sticker-badge--purple',
    focus: 'Strengthening reading, writing readiness and Tajweed basics.',
    outcomes: ['Letter recognition, phonics and early writing strokes', 'Simple Mathematics & spatial concepts', 'Progressing through foundational Nour Al Bayan stages'],
  },
  {
    name: 'Level 2',
    age: 'Age 5+',
    icon: '📖',
    tagClass: 'sticker-badge--mint',
    focus: 'Consolidating academic skills alongside continued Quran revision.',
    outcomes: ['Reading short sentences confidently in English & Arabic', 'Applying basic Mathematics operations & reasoning', 'Improved Tajweed application and memorisation revision'],
  },
  {
    name: 'Level 3',
    age: 'Age 5–6',
    icon: '🎓',
    tagClass: 'sticker-badge--gold',
    focus: 'Preparing for the transition into formal schooling.',
    outcomes: ['Reading fluency across English, EVS & Islamic studies', 'Confident number work and environmental awareness', 'Multiple revisions of Quranic portions completed with joy'],
  },
]

export default function Programs() {
  return (
    <>
      <PageMeta
        title="Programs | Al-Fitrah Islamic Preschool Thalassery"
        description="Explore Al-Fitrah Islamic Preschool's age-based programs in Thalassery — Early Years through Level 3 — combining Quranic education with academic learning."
      />
      <PageHero
        eyebrow="Programs & Age Groups"
        title="A gentle progression, age by age"
        lead="Class names and exact age cut-offs below are indicative and will be confirmed with the school during your admissions enquiry."
      />

      <section className="section programs-list">
        <div className="container programs-list__stack">
          {PROGRAMS.map((p) => (
            <article className="programs-list__card" key={p.name}>
              <div className="programs-list__meta">
                <span className={`sticker-badge ${p.tagClass}`}>
                  <span>{p.icon}</span> {p.age}
                </span>
                <h2>{p.name}</h2>
                <p>{p.focus}</p>
              </div>
              <div className="programs-list__outcomes">
                <span className="programs-list__outcomes-title">Key Learning Milestones:</span>
                <ul>
                  {p.outcomes.map((o) => (
                    <li key={o}>
                      <span className="programs-list__check" aria-hidden="true">✓</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .programs-list__stack { display: flex; flex-direction: column; gap: 26px; }
        .programs-list__card {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 36px;
          background: var(--white);
          border: 1.5px solid rgba(27, 75, 58, 0.08);
          border-radius: var(--radius-card);
          padding: 36px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .programs-list__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px -12px rgba(85, 49, 122, 0.15);
          border-color: rgba(246, 201, 69, 0.5);
        }
        .programs-list__meta h2 {
          font-size: 1.65rem;
          font-weight: 800;
          margin-top: 14px;
          color: var(--green-deep-ink);
        }
        .programs-list__meta p {
          margin-top: 10px;
          color: var(--ink-soft);
          font-size: 0.98rem;
          line-height: 1.6;
        }
        .programs-list__outcomes-title {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--gold-deep);
          margin-bottom: 12px;
        }
        .programs-list__outcomes ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .programs-list__outcomes li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--ink);
          line-height: 1.5;
        }
        .programs-list__check {
          color: #ffffff;
          background: var(--leaf);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 840px) {
          .programs-list__card {
            grid-template-columns: 1fr;
            padding: 26px 20px;
            gap: 22px;
          }
        }
      `}</style>
    </>
  )
}
