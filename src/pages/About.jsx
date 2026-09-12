import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const VALUES = [
  {
    icon: '🌱',
    badge: 'Balance',
    title: 'Balanced by design',
    text: "We aim to raise children with a balanced education — upholding Islamic values while preparing them for the world they'll grow up in.",
  },
  {
    icon: '📖',
    badge: 'Patience',
    title: 'Guided, not rushed',
    text: 'Learning happens through repetition, revision and gentle pacing rather than pressure — especially in Quran reading.',
  },
  {
    icon: '🤝',
    badge: 'Nurture',
    title: 'Teachers as the foundation',
    text: 'Specially trained teachers and ayahs work closely with children in child-friendly classrooms designed for this age group.',
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="About Al-Fitrah Islamic Preschool | Thalassery"
        description="Learn about Al-Fitrah Islamic Preschool in Thalassery — operated by Anjuman Ta'aleemul Qur'an, bringing Quranic education, academics and character development together for young children."
      />
      <PageHero
        eyebrow="About Al-Fitrah"
        title="Our Children's Instincts — Let's Help Them Bloom"
        lead="Al-Fitrah Islamic Preschool is operated by Anjuman Ta'aleemul Qur'an, bringing together Quranic learning, academic foundations and character development for young children in Thalassery."
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__image blob">
            <img src="/images/brochure-cover.jpg" alt="Al-Fitrah Islamic Preschool children playing together" />
          </div>
          <div className="about-story__copy">
            <h2>Every child is born with pure instincts</h2>
            <p>
              We believe every child is born with pure instincts, and it's our
              responsibility to preserve and nurture them in a balanced way. Just as
              children need pure air, food and water to thrive, they also need
              thoughtful guidance and upbringing to grow into confident, grounded
              individuals.
            </p>
            <p>
              The years between roughly age 3 and 6 are a crucial period — children
              look at the world around them with openness, ready to absorb whatever
              is taught with love, care and affection. Al-Fitrah was built to meet
              that window with a balanced education that honours Islamic values,
              academic readiness and each child's natural curiosity.
            </p>
            <p>
              Al-Fitrah is part of the wider Nour Al Bayan wel Fathurabbani network
              introduced in India by Anjuman Ta'aleemul Qur'an, adapting a
              Quran-reading method with the additions needed to suit India's
              secular educational fabric — alongside a recognised English, EVS and
              Mathematics curriculum.
            </p>
          </div>
        </div>
      </section>

      <CurvedWave color="tinted" bg="ivory" />

      <section className="section section--tinted about-values">
        <div className="container">
          <div className="about-values__head">
            <h2>What we hold onto</h2>
          </div>
          <div className="about-values__grid">
            {VALUES.map((v, i) => (
              <div className={`about-values__card about-values__card--${i + 1}`} key={v.title}>
                <div className="about-values__card-top">
                  <span className="about-values__icon" aria-hidden="true">{v.icon}</span>
                  <span className="about-values__badge">{v.badge}</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurvedWave color="gold" bg="tinted" flipX />

      <FinalCTA />

      <style>{`
        .about-story__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .about-story__image { aspect-ratio: 4/5; box-shadow: var(--shadow-soft); }
        .about-story__image img { width: 100%; height: 100%; object-fit: cover; }
        .about-story__copy h2 { font-size: clamp(1.8rem, 3vw, 2.3rem); max-width: 16ch; }
        .about-story__copy p { margin-top: 18px; color: var(--ink-soft); font-size: 1.02rem; }

        .about-values__head {
          text-align: center;
          margin-bottom: 44px;
        }
        .about-values h2 {
          font-size: clamp(1.9rem, 3vw, 2.5rem);
          color: #000000 !important;
          display: inline-block;
          background: var(--gold);
          padding: 8px 24px;
          border-radius: 100px;
          box-shadow: 0 8px 24px -6px rgba(246, 201, 69, 0.4);
        }
        .about-values__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .about-values__card {
          position: relative;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          border-radius: var(--radius-card);
          padding: 34px 28px;
          box-shadow: 0 18px 40px -12px rgba(18, 5, 30, 0.5);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease;
          animation: floatMotion 6s ease-in-out infinite;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .about-values__card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246, 201, 69, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-values__card--1 {
          animation-delay: 0s;
        }
        .about-values__card--2 {
          animation-delay: 2s;
        }
        .about-values__card--3 {
          animation-delay: 4s;
        }

        @keyframes floatMotion {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .about-values__card:hover {
          transform: translateY(-14px) scale(1.02);
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(246, 201, 69, 0.7);
          box-shadow: 0 24px 50px -10px rgba(246, 201, 69, 0.35), 0 0 0 1.5px rgba(246, 201, 69, 0.5);
          animation-play-state: paused;
        }

        .about-values__card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .about-values__icon {
          font-size: 1.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(246, 201, 69, 0.2);
          border: 1px solid rgba(246, 201, 69, 0.4);
          box-shadow: 0 6px 16px -4px rgba(246, 201, 69, 0.3);
        }
        .about-values__badge {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #000000;
          background: var(--gold);
          padding: 4px 12px;
          border-radius: 100px;
          box-shadow: 0 4px 12px -3px rgba(246, 201, 69, 0.5);
        }

        .about-values__card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #000000 !important;
          margin-bottom: 12px;
          line-height: 1.3;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 10px;
          display: inline-block;
          width: fit-content;
          box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.15);
        }
        .about-values__card p {
          margin-top: 10px;
          color: #ffffff !important;
          font-size: 0.98rem;
          line-height: 1.68;
        }

        @media (max-width: 900px) {
          .about-story__grid { grid-template-columns: 1fr; }
          .about-story__image { max-width: 380px; margin: 0 auto; }
          .about-values__grid { grid-template-columns: 1fr; gap: 20px; }
          .about-values__card { animation: none; }
        }
      `}</style>
    </>
  )
}
