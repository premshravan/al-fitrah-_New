import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

const AREAS = [
  { icon: '📖', title: 'Quran', text: 'Reading practice through Nour Al Bayan wel Fathurabbani, with repeated revision for retention.' },
  { icon: '🔤', title: 'English', text: 'Vocabulary, phonics and early reading and writing skills, supported by the Oxford University Press curriculum.' },
  { icon: '🔢', title: 'Mathematics', text: 'Number sense, counting, shapes and early problem-solving through hands-on activities.' },
  { icon: '🌿', title: 'EVS', text: 'Environmental studies introducing children to the world around them — nature, seasons and everyday science.' },
  { icon: '🗣️', title: 'Language Development', text: 'Listening, speaking and vocabulary-building in English and the mother tongue.' },
  { icon: '🎨', title: 'Creative Activities', text: 'Art, craft and imaginative expression that build fine motor skills and confidence.' },
  { icon: '🤝', title: 'Social Development', text: 'Group activities that build cooperation, sharing and communication.' },
  { icon: '🌙', title: 'Character Education', text: 'Islamic values and character traits reinforced through daily classroom life.' },
]

export default function Curriculum() {
  return (
    <>
      <PageMeta
        title="Curriculum | Al-Fitrah Islamic Preschool Thalassery"
        description="Al-Fitrah's curriculum brings together Quran, English, Mathematics, EVS, language development, creative activities and character education for young learners in Thalassery."
      />
      <PageHero
        eyebrow="Curriculum"
        title="Strong foundations for lifelong learning"
        lead="Al-Fitrah's curriculum combines Nour Al Bayan wel Fathurabbani Quranic learning with an English, EVS and Mathematics curriculum adapted from Oxford University Press."
      />

      <section className="section curriculum-grid">
        <div className="container curriculum-grid__wrap">
          {AREAS.map((a) => (
            <div className="curriculum-grid__card" key={a.title}>
              <span aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .curriculum-grid__wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .curriculum-grid__card {
          background: var(--ivory-deep);
          padding: 26px 22px;
          border-radius: var(--radius-card);
        }
        .curriculum-grid__card span { font-size: 1.7rem; }
        .curriculum-grid__card h3 { margin-top: 14px; font-size: 1.05rem; }
        .curriculum-grid__card p { margin-top: 8px; color: var(--ink-soft); font-size: 0.88rem; }
        @media (max-width: 900px) {
          .curriculum-grid__wrap { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .curriculum-grid__wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
