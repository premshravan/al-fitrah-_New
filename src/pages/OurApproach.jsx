import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import ProcessFlow from '../components/ProcessFlow'
import FinalCTA from '../components/FinalCTA'

const PRINCIPLES = [
  { icon: '🧒', title: 'Child-Centred Learning', text: 'Activities are shaped around how young children actually learn and absorb, honoring each child\'s pace.' },
  { icon: '🔍', title: 'Learning Through Exploration', text: 'Children build deep understanding by touching, trying, asking, and discovering with attentive guidance.' },
  { icon: '📈', title: 'Age-Appropriate Pacing', text: 'Every subject — from Quran to English & Mathematics — is graduated gently to match developmental readiness.' },
  { icon: '📖', title: 'Quranic Foundation', text: 'Quran reading and Arabic phonetics are introduced progressively, building joyful familiarity daily.' },
  { icon: '🌟', title: 'Positive Reinforcement', text: 'Encouragement, appreciation, and gentle praise build self-confidence rather than fear of mistakes.' },
  { icon: '🤲', title: 'Character & Sunnah Values', text: 'Islamic manners (Adab), gratitude, and empathy are actively modelled throughout the school day.' },
  { icon: '🤝', title: 'Social Cooperation', text: 'Circle time and group games nurture lifelong skills of sharing, respectful communication, and empathy.' },
  { icon: '🎨', title: 'Creative Self-Expression', text: 'Art, gentle rhymes, and imaginative play give children boundless space for individual creativity.' },
  { icon: '🏡', title: 'Parent Partnership', text: 'Parents are embraced as essential partners in their child\'s early learning milestones and growth.' },
]

export default function OurApproach() {
  return (
    <>
      <PageMeta
        title="Our Educational Approach | Al-Fitrah Islamic Preschool"
        description="How Al-Fitrah Islamic Preschool in Thalassery blends child-centred learning, Quranic foundations and Islamic values through exploration, guidance and play."
      />
      <PageHero
        eyebrow="Our Approach"
        title="Learning through love, discovery & guidance"
        lead="Every activity at Al-Fitrah follows a gentle rhythm designed to help children build understanding at their own pace."
      />

      <section className="section approach-flow-section">
        <div className="container">
          <div className="approach-flow__heading">
            <span className="sticker-badge">🌱 Everyday Flow</span>
            <h2>Our Child-Centred Learning Rhythm</h2>
          </div>
          <ProcessFlow steps={['Explore', 'Discover', 'Understand', 'Practice', 'Grow']} />
        </div>
      </section>

      <CurvedWave color="tinted" bg="ivory" />

      <section className="section section--tinted approach-principles">
        <div className="container">
          <div className="approach-principles__header">
            <span className="approach-principles__pill">Guided by Core Values</span>
            <h2>Our Foundational Principles</h2>
          </div>
          <div className="approach-principles__grid">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="approach-principles__card">
                <div className="approach-principles__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurvedWave color="gold" bg="tinted" flipX />

      <FinalCTA />

      <style>{`
        .approach-flow-section {
          padding-top: clamp(32px, 5vw, 56px);
          padding-bottom: clamp(32px, 5vw, 56px);
        }
        .approach-flow__heading {
          text-align: center;
          margin-bottom: 32px;
        }
        .approach-flow__heading h2 {
          margin-top: 10px;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          color: var(--green-deep-ink);
        }
        .approach-principles__header {
          text-align: center;
          margin-bottom: 36px;
        }
        .approach-principles__pill {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 14px;
          border-radius: 100px;
          background: rgba(218,165,32,0.25);
          color: var(--gold-light);
          margin-bottom: 12px;
        }
        .approach-principles h2 {
          font-size: clamp(1.7rem, 2.6vw, 2.2rem);
          color: var(--ivory);
        }
        .approach-principles__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .approach-principles__card {
          background: var(--white);
          padding: 26px;
          border-radius: var(--radius-card);
          border: 1px solid rgba(27,75,58,0.08);
          box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.12);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .approach-principles__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.2);
        }
        .approach-principles__icon {
          font-size: 2rem;
          margin-bottom: 12px;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(218,165,32,0.12), rgba(74,138,90,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }
        .approach-principles__card:hover .approach-principles__icon {
          transform: scale(1.12) rotate(4deg);
        }
        .approach-principles__card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--green-deep-ink) !important;
          margin-bottom: 8px;
        }
        .approach-principles__card p {
          margin-top: 4px;
          color: var(--ink-soft) !important;
          font-size: 0.94rem;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .approach-principles__grid { grid-template-columns: 1fr 1fr; gap: 18px; }
        }
        @media (max-width: 560px) {
          .approach-principles__grid { grid-template-columns: 1fr; gap: 14px; }
          .approach-principles__card { padding: 20px; }
        }
      `}</style>
    </>
  )
}
