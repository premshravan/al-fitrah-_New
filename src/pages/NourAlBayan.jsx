import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'

const HIGHLIGHTS = [
  { icon: '🔤', title: 'Phonetic Accuracy', text: 'Gentle step-by-step Makharij & letter articulation from age 3.' },
  { icon: '🧩', title: 'Tahajji (Syllables)', text: 'Children read through understanding word structures rather than memorizing blind shapes.' },
  { icon: '📖', title: 'Tajweed Rules', text: 'Built-in natural rules for beautiful, correct Quran recitation.' },
  { icon: '🌟', title: 'Dual Excellence', text: 'Taught alongside Oxford English, Maths & EVS without burnout.' },
]

const QA = [
  {
    badge: 'Method Overview',
    q: 'What is Nour Al Bayan wel Fathurabbani?',
    a: 'It is a structured, internationally-recognised phonetic method for teaching young children to read the Noble Quran, specifically adapted for Al-Fitrah\'s preschool classrooms in Thalassery.',
  },
  {
    badge: 'Gentle Progression',
    q: 'How does it help young children?',
    a: 'It begins with single letter recognition and sound articulation, gradually advancing into joined letters, short vowels (Harakat), Madd rules, and Tajweed in a gentle, age-appropriate sequence.',
  },
  {
    badge: 'Deep Understanding',
    q: 'What is the "Tahajji" approach?',
    a: 'Tahajji breaks down words into their constituent sounds and syllables so children learn the mechanics of decoding words independently, fostering genuine literacy rather than rote memorisation.',
  },
  {
    badge: 'Holistic Balance',
    q: 'Does it replace academic learning?',
    a: 'No. At Al-Fitrah, Nour Al Bayan runs seamlessly alongside recognized English, Mathematics and Environmental Studies (EVS) curricula adapted from Oxford University Press.',
  },
]

export default function NourAlBayan() {
  return (
    <>
      <PageMeta
        title="Nour Al Bayan Method | Al-Fitrah Islamic Preschool"
        description="Understand the Nour Al Bayan wel Fathurabbani method used at Al-Fitrah Islamic Preschool in Thalassery to build a strong foundation in Quran reading for young children."
      />
      <PageHero
        eyebrow="Quranic Methodology"
        title="Building a lifelong foundation in Quran reading"
        lead="A structured, internationally-recognised phonetic method for teaching young children to read the Quran with confidence, clarity, and joy."
      />

      {/* 4 Pillars Strip */}
      <section className="section nab-pillars-section">
        <div className="container">
          <div className="nab-pillars__grid">
            {HIGHLIGHTS.map((h) => (
              <div className="nab-pillar-card" key={h.title}>
                <div className="nab-pillar-card__icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Section */}
      <section className="section nab-qa">
        <div className="container nab-qa__wrap">
          <div className="nab-qa__heading">
            <span className="sticker-badge">✨ Key Insights</span>
            <h2>Understanding the Method</h2>
          </div>

          <div className="nab-qa__stack">
            {QA.map((item, idx) => (
              <div className="nab-qa__card" key={item.q}>
                <div className="nab-qa__header">
                  <span className="nab-qa__num">0{idx + 1}</span>
                  <span className="nab-qa__badge">{item.badge}</span>
                </div>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurvedWave color="tinted" bg="ivory" />

      <section className="section section--tinted nab-origin">
        <div className="container nab-origin__inner">
          <div className="nab-origin__stamp">Established Pioneer</div>
          <h2>Where the method comes from</h2>
          <p>
            Al-Fitrah, operated by Anjuman Ta'aleemul Qur'an, introduced this system
            in India in June 2012, adapting it with the additions needed to suit
            India's secular educational fabric — alongside an English, EVS and
            Mathematics curriculum built around Oxford University Press materials.
          </p>
        </div>
      </section>

      <CurvedWave color="gold" bg="tinted" flipX />

      <FinalCTA />

      <style>{`
        .nab-pillars-section {
          padding-top: clamp(32px, 5vw, 60px);
          padding-bottom: 20px;
        }
        .nab-pillars__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .nab-pillar-card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.08);
          border-radius: var(--radius-card);
          padding: 24px 20px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .nab-pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px -6px rgba(27,75,58,0.1);
        }
        .nab-pillar-card__icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }
        .nab-pillar-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--green-deep-ink);
          margin-bottom: 6px;
        }
        .nab-pillar-card p {
          font-size: 0.86rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0;
        }

        .nab-qa {
          padding-top: 30px;
          padding-bottom: clamp(40px, 6vw, 70px);
        }
        .nab-qa__wrap {
          max-width: 860px;
        }
        .nab-qa__heading {
          text-align: center;
          margin-bottom: 36px;
        }
        .nab-qa__heading h2 {
          margin-top: 12px;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          color: var(--green-deep-ink);
        }
        .nab-qa__stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .nab-qa__card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.08);
          border-radius: var(--radius-card);
          padding: 26px 28px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .nab-qa__card:hover {
          border-color: rgba(218,165,32,0.35);
          transform: translateX(4px);
        }
        .nab-qa__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .nab-qa__num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--gold);
        }
        .nab-qa__badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          background: rgba(74,138,90,0.1);
          color: var(--leaf);
          border-radius: 100px;
        }
        .nab-qa__card h3 {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--green-deep-ink);
          margin-bottom: 8px;
        }
        .nab-qa__card p {
          color: var(--ink-soft);
          font-size: 0.96rem;
          line-height: 1.6;
          margin: 0;
        }

        .nab-origin__inner {
          max-width: 740px;
          text-align: center;
          margin: 0 auto;
        }
        .nab-origin__stamp {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 14px;
          border-radius: 100px;
          background: rgba(218,165,32,0.25);
          color: var(--gold-light);
          margin-bottom: 16px;
        }
        .nab-origin h2 {
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          color: var(--ivory);
        }
        .nab-origin p {
          margin-top: 16px;
          color: rgba(255, 250, 240, 0.95);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .nab-pillars__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 600px) {
          .nab-pillars__grid { grid-template-columns: 1fr; gap: 14px; }
          .nab-qa__card { padding: 20px; }
        }
      `}</style>
    </>
  )
}
