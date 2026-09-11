import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

const VALUES = [
  { title: 'Kindness', text: 'Encouraged through everyday moments — sharing, helping and comforting a friend.' },
  { title: 'Honesty', text: 'Modelled by teachers and gently reinforced when children speak about their day.' },
  { title: 'Sharing', text: 'Practised naturally during group play and classroom activities.' },
  { title: 'Caring', text: 'Nurtured through activities that involve looking after classmates, plants or classroom pets.' },
  { title: 'Respect', text: 'Taught through simple routines like listening when others speak and taking turns.' },
  { title: 'Responsibility', text: 'Built through small tasks like tidying up after an activity.' },
  { title: 'Discipline', text: 'Encouraged through consistent, positive routines rather than strict rules.' },
  { title: 'Trustworthiness', text: 'Reinforced as children learn to keep small promises to friends and teachers.' },
  { title: 'Confidence', text: 'Grown through praise, encouragement and opportunities to try new things.' },
  { title: 'Cooperation', text: 'Practised through group activities, games and collaborative projects.' },
]

export default function CharacterValues() {
  return (
    <>
      <PageMeta
        title="Character & Values | Al-Fitrah Islamic Preschool Thalassery"
        description="How Al-Fitrah Islamic Preschool in Thalassery builds Islamic character and values — kindness, honesty, sharing and respect — into everyday classroom life."
      />
      <PageHero
        eyebrow="Character & Values"
        title="Growing good hearts alongside curious minds"
        lead="Values are not a stand-alone subject at Al-Fitrah — they're woven into the rhythm of everyday classroom life."
      />

      <section className="section values-grid">
        <div className="container values-grid__wrap">
          {VALUES.map((v) => (
            <div className="values-grid__card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .values-grid__wrap {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .values-grid__card {
          background: var(--ivory-deep);
          padding: 22px 18px;
          border-radius: var(--radius-card);
        }
        .values-grid__card h3 { font-size: 1rem; }
        .values-grid__card p { margin-top: 8px; color: var(--ink-soft); font-size: 0.84rem; }
        @media (max-width: 980px) {
          .values-grid__wrap { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid__wrap { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  )
}
