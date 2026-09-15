import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const PROGRAMS = [
  {
    name: 'Beginners',
    age: 'Age 2.5–3.5',
    icon: '🧸',
    tagClass: 'sticker-badge--mint',
    focus: 'A gentle first step into school life through secure routines, sensory play, and joyful Quranic discovery.',
    outcomes: ['Settling happily into classroom routines with loving teacher support', 'Building listening, sharing, self-care, and simple communication skills', 'Recognising first Arabic sounds, letters, colours, shapes, and numbers'],
  },
  {
    name: 'Level 1',
    age: 'Age 3.5–4.5',
    icon: '✏️',
    tagClass: 'sticker-badge--gold',
    focus: 'Building confident foundations in language, early mathematics, creativity, and guided Quran reading.',
    outcomes: ['Developing vocabulary, phonics awareness, pencil control, and early writing', 'Counting, sorting, patterns, and simple problem-solving with confidence', 'Progressing through foundational Nour Al Bayan reading and Tajweed sounds'],
  },
  {
    name: 'Level 2',
    age: 'Age 4.5–6',
    icon: '🌱',
    tagClass: 'sticker-badge--purple',
    focus: 'Consolidating academic confidence, Quranic fluency, character, and readiness for the next stage of schooling.',
    outcomes: ['Reading simple sentences, writing independently, and expressing ideas clearly', 'Applying number operations, reasoning, and environmental understanding', 'Strengthening Tajweed, Quran revision, independence, and school-readiness habits'],
  },
]

export default function Programs() {
  return (
    <>
      <PageMeta
        title="Programs | Al-Fitrah Islamic Preschool Thalassery"
        description="Explore Al-Fitrah Islamic Preschool's age-based programs in Thalassery — Beginners through Level 2 — combining Quranic education with academic learning."
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
