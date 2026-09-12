import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
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
              <span className="curriculum-grid__icon" aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .curriculum-grid__wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .curriculum-grid__card {
          background: #ffffff;
          padding: 28px 22px;
          border-radius: var(--radius-card);
          border: 1.5px solid rgba(246, 201, 69, 0.25);
          box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .curriculum-grid__card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -10px rgba(85, 49, 122, 0.15);
          border-color: rgba(246, 201, 69, 0.65);
        }
        .curriculum-grid__icon {
          font-size: 1.6rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #f7effd;
          border: 1px solid rgba(118, 82, 168, 0.2);
          box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.1);
        }
        .curriculum-grid__card h3 {
          margin-top: 16px;
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--green-deep-ink);
        }
        .curriculum-grid__card p {
          margin-top: 8px;
          color: var(--ink-soft);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        @media (max-width: 980px) {
          .curriculum-grid__wrap { grid-template-columns: 1fr 1fr; gap: 16px; }
        }
        @media (max-width: 480px) {
          .curriculum-grid__wrap { grid-template-columns: 1fr; }
          .curriculum-grid__card { padding: 22px 18px; }
        }
      `}</style>
    </>
  )
}
