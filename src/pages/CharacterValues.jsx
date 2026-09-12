import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const VALUES = [
  { icon: '🤝', tag: 'Rahmah', title: 'Kindness', text: 'Encouraged through everyday moments — sharing, helping and comforting a friend with love.' },
  { icon: '💎', tag: 'Sidq', title: 'Honesty', text: 'Modelled by teachers and gently reinforced when children speak about their day.' },
  { icon: '🎁', tag: 'Ihsan', title: 'Sharing', text: 'Practised naturally during group play, snack times and classroom activities.' },
  { icon: '🌿', tag: 'Rifq', title: 'Caring', text: 'Nurtured through activities that involve looking after classmates, plants and the environment.' },
  { icon: '🤲', tag: 'Adab', title: 'Respect', text: 'Taught through simple routines like listening when others speak, saying Salam and taking turns.' },
  { icon: '🎒', tag: 'Amanah', title: 'Responsibility', text: 'Built through small joyful tasks like tidying toys and books after an activity.' },
  { icon: '⏰', tag: 'Nizam', title: 'Discipline', text: 'Encouraged through consistent, loving routines rather than pressure.' },
  { icon: '🛡️', tag: 'Wafa', title: 'Trustworthiness', text: 'Reinforced as children learn to keep small promises to friends and teachers.' },
  { icon: '🌟', tag: 'Izzah', title: 'Confidence', text: 'Grown through sincere praise, gentle encouragement and opportunities to express ideas.' },
  { icon: '🎈', tag: 'Ta’awun', title: 'Cooperation', text: 'Practised through group activities, circle games and collaborative creative projects.' },
]

export default function CharacterValues() {
  return (
    <>
      <PageMeta
        title="Character & Values | Al-Fitrah Islamic Preschool Thalassery"
        description="How Al-Fitrah Islamic Preschool in Thalassery builds Islamic character and values — kindness, honesty, sharing and respect — into everyday classroom life."
      />
      <PageHero
        eyebrow="Character & Islamic Values"
        title="Growing good hearts alongside curious minds"
        lead="Values are not a stand-alone subject at Al-Fitrah — they're woven into the rhythm of everyday classroom life and teacher mentorship."
      />

      <section className="section values-grid">
        <div className="container values-grid__wrap">
          {VALUES.map((v) => (
            <div className="values-grid__card" key={v.title}>
              <div className="values-grid__top">
                <span className="values-grid__icon" aria-hidden="true">{v.icon}</span>
                <span className="values-grid__tag">{v.tag}</span>
              </div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .values-grid__wrap {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .values-grid__card {
          background: #ffffff;
          padding: 24px 20px;
          border-radius: var(--radius-card);
          border: 1.5px solid rgba(246, 201, 69, 0.25);
          box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .values-grid__card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -10px rgba(85, 49, 122, 0.15);
          border-color: rgba(246, 201, 69, 0.65);
        }
        .values-grid__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .values-grid__icon {
          font-size: 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #fbf5ff;
          border: 1px solid rgba(118, 82, 168, 0.18);
        }
        .values-grid__tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--gold-deep);
          background: #fff8df;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .values-grid__card h3 {
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--green-deep-ink);
          margin-bottom: 8px;
        }
        .values-grid__card p {
          color: var(--ink-soft);
          font-size: 0.88rem;
          line-height: 1.55;
        }
        @media (max-width: 1080px) {
          .values-grid__wrap { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .values-grid__wrap { grid-template-columns: 1fr 1fr; gap: 14px; }
          .values-grid__card { padding: 18px 16px; }
        }
        @media (max-width: 440px) {
          .values-grid__wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
