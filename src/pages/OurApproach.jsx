import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import ProcessFlow from '../components/ProcessFlow'
import FinalCTA from '../components/FinalCTA'

const PRINCIPLES = [
  { title: 'Child-centred learning', text: 'Activities are shaped around how young children actually learn, not adult expectations of a classroom.' },
  { title: 'Learning through exploration', text: 'Children build understanding by touching, trying and asking, guided by attentive teachers.' },
  { title: 'Age-appropriate education', text: 'Every subject — from Quran to Mathematics — is paced to suit early developmental stages.' },
  { title: 'Quranic foundation', text: 'Quran reading is introduced gradually and revisited often, building familiarity over time.' },
  { title: 'Positive reinforcement', text: 'Encouragement and praise are used to build confidence rather than fear of mistakes.' },
  { title: 'Character development', text: 'Values are modelled and practised throughout the day, not confined to a single lesson.' },
  { title: 'Social interaction', text: 'Group activities help children learn to share, cooperate and communicate.' },
  { title: 'Creativity', text: 'Art, music and imaginative play give children room for self-expression.' },
  { title: 'Parent involvement', text: 'Parents are treated as partners in a child\u2019s early development.' },
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
          <h2>Our everyday rhythm</h2>
          <ProcessFlow steps={['Explore', 'Discover', 'Understand', 'Practice', 'Grow']} />
        </div>
      </section>

      <section className="section section--tinted approach-principles">
        <div className="container">
          <h2>Core principles</h2>
          <div className="approach-principles__grid">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="approach-principles__card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .approach-flow-section h2 { font-size: clamp(1.7rem, 2.6vw, 2.2rem); margin-bottom: 30px; }
        .approach-principles h2 { font-size: clamp(1.7rem, 2.6vw, 2.2rem); margin-bottom: 36px; }
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
        }
        .approach-principles__card h3 { font-size: 1.05rem; }
        .approach-principles__card p { margin-top: 10px; color: var(--ink-soft); font-size: 0.92rem; }
        @media (max-width: 900px) {
          .approach-principles__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .approach-principles__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
