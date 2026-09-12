import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const ACTIVITIES = [
  { icon: '🎨', tag: 'Creativity', title: 'Art & Craft', text: 'Colouring, painting and craft projects that build fine motor skills and joyful self-expression.' },
  { icon: '📚', tag: 'Language', title: 'Storytelling & Puppet Play', text: 'Guided moral stories that cultivate active listening, rich vocabulary and vivid imagination.' },
  { icon: '🎵', tag: 'Rhythm', title: 'Rhymes & Nasheeds', text: 'Gentle Islamic rhymes and movement activities that support coordination and rhythm in learning.' },
  { icon: '🤸', tag: 'Physical', title: 'Outdoor & Free Play', text: 'Supervised safe outdoor time for physical fitness, agility and energetic collaborative games.' },
  { icon: '🧩', tag: 'Cognitive', title: 'Sensory Exploration', text: 'Hands-on tactile activities using everyday sensory materials to stimulate curiosity and cognitive skills.' },
  { icon: '👥', tag: 'Social', title: 'Collaborative Projects', text: 'Group tasks and circle time that teach sharing, patience, cooperation, and empathy.' },
  { icon: '🌱', tag: 'Discovery', title: 'Nature & EVS Exploration', text: 'Simple outdoor nature walks connected to the EVS curriculum, discovering the wonders of creation.' },
  { icon: '📖', tag: 'Quranic', title: 'Interactive Quran Learning', text: 'Fun flashcard games, letter tracing, and recitation drills reinforcing Nour Al Bayan progress.' },
  { icon: '🎉', tag: 'Celebrations', title: 'Themed Days & Milestones', text: 'Colour days, fruit days, graduation convocations, and Eid celebrations bringing festive joy to school.' },
]

export default function Activities() {
  return (
    <>
      <PageMeta
        title="Activities | Al-Fitrah Islamic Preschool Thalassery"
        description="From art and storytelling to Quran learning activities and outdoor play — see how Al-Fitrah Islamic Preschool keeps learning joyful and hands-on."
      />
      <PageHero
        eyebrow="Preschool Life & Activities"
        title="Learning that feels like joyful play"
        lead="A thoughtful balance of creative arts, physical games, social discovery, and interactive Quranic routines that keep every day bright."
      />

      <section className="section activities-grid-section">
        <div className="container">
          <div className="activities-grid__wrap">
            {ACTIVITIES.map((a) => (
              <div className="activities-grid__card" key={a.title}>
                <div className="activities-grid__header">
                  <div className="activities-grid__icon-badge" aria-hidden="true">
                    {a.icon}
                  </div>
                  <span className="activities-grid__tag">{a.tag}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>

          <div className="activities-grid__banner">
            <span className="activities-grid__banner-icon">🎈</span>
            <p>
              <strong>Daily Joyful Balance:</strong> Activities rotate throughout the week to provide balanced cognitive, physical, creative, and spiritual development without overwhelming young minds.
            </p>
          </div>
        </div>
      </section>

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .activities-grid-section {
          padding-top: clamp(32px, 5vw, 60px);
          padding-bottom: clamp(40px, 6vw, 70px);
        }
        .activities-grid__wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .activities-grid__card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.08);
          padding: 26px;
          border-radius: var(--radius-card);
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .activities-grid__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -6px rgba(27,75,58,0.1);
          border-color: rgba(218,165,32,0.3);
        }
        .activities-grid__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .activities-grid__icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(218,165,32,0.12), rgba(74,138,90,0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: transform 0.3s ease;
        }
        .activities-grid__card:hover .activities-grid__icon-badge {
          transform: scale(1.1) rotate(4deg);
        }
        .activities-grid__tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(27,75,58,0.06);
          color: var(--green-deep-ink);
        }
        .activities-grid__card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--green-deep-ink);
          margin-bottom: 8px;
        }
        .activities-grid__card p {
          color: var(--ink-soft);
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 0;
        }
        .activities-grid__banner {
          margin-top: 36px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg, rgba(218,165,32,0.08), rgba(27,75,58,0.04));
          border: 1px dashed rgba(218,165,32,0.35);
          border-radius: var(--radius-card);
          padding: 16px 22px;
        }
        .activities-grid__banner-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        .activities-grid__banner p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .activities-grid__wrap { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 600px) {
          .activities-grid__wrap { grid-template-columns: 1fr; gap: 14px; }
          .activities-grid__card { padding: 20px; }
          .activities-grid__banner { flex-direction: column; text-align: center; gap: 8px; }
        }
      `}</style>
    </>
  )
}
