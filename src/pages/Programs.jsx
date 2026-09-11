import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

const PROGRAMS = [
  {
    name: 'Early Years',
    age: 'Age 3+',
    focus: 'Settling into school life, sensory play, and first exposure to Quranic sounds and letters.',
    outcomes: ['Comfort with the classroom routine', 'Basic listening and following simple instructions', 'First familiarity with Arabic letter sounds'],
  },
  {
    name: 'Preschool',
    age: 'Age 4+',
    focus: 'Building language, number sense and guided Quran reading practice.',
    outcomes: ['Growing vocabulary in English', 'Counting and early number concepts', 'Reading short Quranic portions with guidance'],
  },
  {
    name: 'Level 1',
    age: 'Age 4–5',
    focus: 'Strengthening reading, writing readiness and Tajweed basics.',
    outcomes: ['Letter recognition and early writing strokes', 'Simple Mathematics concepts', 'Progress through Nour Al Bayan stages'],
  },
  {
    name: 'Level 2',
    age: 'Age 5+',
    focus: 'Consolidating academic skills alongside continued Quran revision.',
    outcomes: ['Reading short sentences confidently', 'Applying basic Mathematics operations', 'Improved Tajweed application'],
  },
  {
    name: 'Level 3',
    age: 'Age 5–6',
    focus: 'Preparing for the transition into formal schooling.',
    outcomes: ['Reading fluency across subjects', 'Confident number work and EVS concepts', 'Multiple revisions of Quranic portions completed'],
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
        eyebrow="Programs"
        title="A gentle progression, age by age"
        lead="Class names and exact age cut-offs below are indicative and will be confirmed with the school before publishing."
      />

      <section className="section programs-list">
        <div className="container programs-list__stack">
          {PROGRAMS.map((p) => (
            <article className="programs-list__card" key={p.name}>
              <div className="programs-list__meta">
                <span className="pill">{p.age}</span>
                <h2>{p.name}</h2>
                <p>{p.focus}</p>
              </div>
              <ul>
                {p.outcomes.map((o) => (
                  <li key={o}><span aria-hidden="true">✓</span>{o}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .programs-list__stack { display: flex; flex-direction: column; gap: 24px; }
        .programs-list__card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.1);
          border-radius: var(--radius-card);
          padding: 34px;
        }
        .programs-list__meta h2 { font-size: 1.5rem; margin-top: 12px; }
        .programs-list__meta p { margin-top: 10px; color: var(--ink-soft); font-size: 0.96rem; }
        .programs-list__card ul { display: flex; flex-direction: column; gap: 12px; justify-content: center; }
        .programs-list__card li { display: flex; gap: 10px; font-size: 0.94rem; color: var(--ink-soft); }
        .programs-list__card li span { color: var(--leaf); font-weight: 800; }

        @media (max-width: 760px) {
          .programs-list__card { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
