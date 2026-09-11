import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

const ACTIVITIES = [
  { icon: '🎨', title: 'Art & Craft', text: 'Colouring, painting and craft projects that build fine motor skills and self-expression.' },
  { icon: '📚', title: 'Storytelling', text: 'Guided stories that build listening skills, vocabulary and imagination.' },
  { icon: '🎵', title: 'Music & Movement', text: 'Rhymes, songs and movement activities that support coordination and joy in learning.' },
  { icon: '🤸', title: 'Outdoor Play', text: 'Supervised outdoor time for physical activity and free play.' },
  { icon: '🧩', title: 'Sensory Activities', text: 'Hands-on activities using everyday materials to build early cognitive skills.' },
  { icon: '👥', title: 'Group Activities', text: 'Collaborative games and projects that build cooperation and communication.' },
  { icon: '🌱', title: 'Nature Activities', text: 'Simple nature-based exploration connected to the EVS curriculum.' },
  { icon: '📖', title: 'Quran Learning Activities', text: 'Interactive practice sessions that reinforce Nour Al Bayan progress.' },
  { icon: '🎉', title: 'Celebrations & Events', text: 'Themed classroom days and events that bring festive learning into the school year.' },
]

export default function Activities() {
  return (
    <>
      <PageMeta
        title="Activities | Al-Fitrah Islamic Preschool Thalassery"
        description="From art and storytelling to Quran learning activities and outdoor play — see how Al-Fitrah Islamic Preschool keeps learning joyful and hands-on."
      />
      <PageHero
        eyebrow="Activities"
        title="Learning that looks like play"
        lead="A mix of creative, physical and Quran-focused activities that keep each day engaging."
      />

      <section className="section activities-grid">
        <div className="container activities-grid__wrap">
          {ACTIVITIES.map((a) => (
            <div className="activities-grid__card" key={a.title}>
              <span aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
        <p className="activities-grid__note">
          Activities shown are indicative categories; the specific weekly schedule will be confirmed with the school.
        </p>
      </section>

      <FinalCTA />

      <style>{`
        .activities-grid__wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .activities-grid__card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.08);
          padding: 26px;
          border-radius: var(--radius-card);
        }
        .activities-grid__card span { font-size: 1.6rem; }
        .activities-grid__card h3 { margin-top: 14px; font-size: 1.05rem; }
        .activities-grid__card p { margin-top: 8px; color: var(--ink-soft); font-size: 0.9rem; }
        .activities-grid__note { margin-top: 32px; font-size: 0.84rem; color: var(--ink-soft); font-style: italic; }
        @media (max-width: 900px) {
          .activities-grid__wrap { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .activities-grid__wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
