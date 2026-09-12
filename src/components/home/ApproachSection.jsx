import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProcessFlow from '../ProcessFlow'

const DAILY_RHYTHM = [
  {
    time: '09:00 AM',
    icon: '☀️',
    title: 'Morning Circle & Duas',
    tag: 'Adab & Connection',
    desc: 'Warm smiles, gentle morning Adhkar, and settling into the day with our loving teachers and ayahs.',
  },
  {
    time: '09:30 AM',
    icon: '📖',
    title: 'Nour Al Bayan Quran',
    tag: 'Quranic Reading',
    desc: 'Interactive letter recognition, joyful sound exploration, and step-by-step Tajweed pronunciation.',
  },
  {
    time: '10:30 AM',
    icon: '🔤',
    title: 'Phonics, Numbers & Nature',
    tag: 'Academic Readiness',
    desc: 'Hands-on counting games, phonics sound cards, and exploring the wonders of the natural world.',
  },
  {
    time: '11:30 AM',
    icon: '🎨',
    title: 'Sensory Art & Play',
    tag: 'Creative Discovery',
    desc: 'Finger painting, clay exploration, storytelling, and building imagination at their own pace.',
  },
  {
    time: '12:30 PM',
    icon: '🤝',
    title: 'Manners & Lunchtime',
    tag: 'Character & Hygiene',
    desc: 'Handwashing hygiene, eating du\u2019as, sharing snacks, and peaceful reflections before heading home.',
  },
]

const PRINCIPLES = [
  'Child-centred learning environment',
  'Authentic Nour Al Bayan Quran method',
  'Loving teacher & ayah supervision',
  'Montessori-inspired sensory exploration',
  'Gentle character & Sunnah adab habits',
  'Active collaboration with parents',
]

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="section approach">
      <div className="container">
        <div className="approach__head">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Our Everyday Rhythm</span></div>
          <h2>Learning through love, discovery &amp; guidance</h2>
          <p className="approach__subtitle">
            Every day at Al-Fitrah is intentionally balanced between sacred learning, foundational academics, and joyful creative play.
          </p>
        </div>

        {/* Interactive Daily Rhythm Explorer */}
        <div className="approach__rhythm-box">
          <div className="approach__rhythm-nav">
            {DAILY_RHYTHM.map((item, idx) => (
              <button
                key={item.time}
                className={`approach__rhythm-tab ${activeStep === idx ? 'is-active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="approach__rhythm-icon">{item.icon}</span>
                <span className="approach__rhythm-time">{item.time}</span>
                <span className="approach__rhythm-title">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="approach__rhythm-card">
            <div className="approach__rhythm-card-header">
              <span className="approach__rhythm-card-icon">{DAILY_RHYTHM[activeStep].icon}</span>
              <div>
                <span className="sticker-badge sticker-badge--gold">{DAILY_RHYTHM[activeStep].tag}</span>
                <h3>{DAILY_RHYTHM[activeStep].title} &bull; <small>{DAILY_RHYTHM[activeStep].time}</small></h3>
              </div>
            </div>
            <p>{DAILY_RHYTHM[activeStep].desc}</p>
          </div>
        </div>

        <div className="approach__body">
          <ul className="approach__principles">
            {PRINCIPLES.map((p) => (
              <li key={p}>
                <span className="approach__check" aria-hidden="true">🌱</span> {p}
              </li>
            ))}
          </ul>

          <div className="approach__flow">
            <p className="approach__flow-label">Every learning activity follows a gentle pathway:</p>
            <ProcessFlow steps={['Explore', 'Discover', 'Understand', 'Practice', 'Grow']} />
          </div>
        </div>

        <Link to="/our-approach" className="btn btn-outline approach__cta">Explore Our Educational Approach</Link>
      </div>

      <style>{`
        .approach__head { max-width: 720px; margin-bottom: 36px; }
        .approach__head h2 { font-size: clamp(2rem, 3.2vw, 2.7rem); margin-top: 10px; }
        .approach__subtitle { margin-top: 12px; color: var(--ink-soft); font-size: 1.05rem; }

        /* Daily Rhythm Interactive Box */
        .approach__rhythm-box {
          background: rgba(255, 255, 255, 0.94);
          border-radius: var(--radius-card);
          padding: 24px;
          box-shadow: var(--shadow-card);
          border: 1.5px solid rgba(246, 201, 69, 0.35);
          margin-bottom: 44px;
        }
        .approach__rhythm-nav {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .approach__rhythm-tab {
          background: var(--ivory);
          border: 1.5px solid rgba(27, 75, 58, 0.08);
          padding: 14px 10px;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
          text-align: center;
        }
        .approach__rhythm-tab:hover {
          transform: translateY(-3px);
          background: #fff;
          border-color: var(--leaf);
        }
        .approach__rhythm-tab.is-active {
          background: var(--green-deep);
          color: var(--ivory);
          border-color: var(--gold);
          box-shadow: 0 8px 20px -6px rgba(85, 49, 122, 0.4);
          transform: translateY(-4px) scale(1.02);
        }
        .approach__rhythm-icon { font-size: 1.5rem; }
        .approach__rhythm-time { font-size: 0.72rem; font-weight: 800; opacity: 0.85; text-transform: uppercase; }
        .approach__rhythm-title { font-size: 0.82rem; font-weight: 700; line-height: 1.2; }
        .approach__rhythm-tab.is-active .approach__rhythm-time { color: var(--gold); }

        .approach__rhythm-card {
          background: linear-gradient(135deg, #fdf8ee 0%, #f7effd 100%);
          border-radius: 16px;
          padding: 24px 28px;
          border: 1px solid rgba(246, 201, 69, 0.3);
          box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.06);
        }
        .approach__rhythm-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .approach__rhythm-card-icon {
          font-size: 2.2rem;
          background: #ffffff;
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.1);
        }
        .approach__rhythm-card h3 {
          font-size: 1.28rem;
          color: var(--green-deep-ink);
          margin-top: 6px;
        }
        .approach__rhythm-card small {
          font-size: 0.9rem;
          color: var(--ink-soft);
          font-weight: 600;
        }
        .approach__rhythm-card p {
          color: var(--ink);
          font-size: 1.02rem;
          line-height: 1.6;
        }

        .approach__body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: start;
        }
        .approach__principles li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--green-deep-ink);
        }
        .approach__check {
          font-size: 1.1rem;
        }
        .approach__flow {
          background: var(--ivory-deep);
          border-radius: var(--radius-card);
          padding: 32px;
          border: 1px solid rgba(246, 201, 69, 0.3);
        }
        .approach__flow-label { font-weight: 800; margin-bottom: 18px; color: var(--green-deep-ink); }
        .approach__cta { margin-top: 40px; }

        @media (max-width: 900px) {
          .approach__rhythm-nav {
            display: flex;
            overflow-x: auto;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
          .approach__rhythm-nav::-webkit-scrollbar { display: none; }
          .approach__rhythm-tab {
            min-width: 140px;
            flex-shrink: 0;
          }
          .approach__body { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}
