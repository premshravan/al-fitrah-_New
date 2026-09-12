import CurvedWave from './CurvedWave'

export default function PageHero({ eyebrow, title, lead, waveColor = 'ivory' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__aurora page-hero__aurora--sky" />
      <div className="page-hero__aurora page-hero__aurora--gold" />
      <div className="page-hero__aurora page-hero__aurora--coral" />

      {/* Subtle Floating Ambient Accents for Interior Pages */}
      <div className="floating-doodle floating-doodle--twinkle" style={{ top: '16%', right: '12%', fontSize: '1.4rem', opacity: 0.85 }} aria-hidden="true">✨</div>
      <div className="floating-doodle floating-doodle--1" style={{ bottom: '26%', right: '6%', fontSize: '1.5rem', opacity: 0.75 }} aria-hidden="true">🌙</div>
      <div className="floating-doodle floating-doodle--2" style={{ top: '24%', left: '3%', fontSize: '1.3rem', opacity: 0.7 }} aria-hidden="true">🍃</div>

      <div className="container page-hero__inner">
        <div className="page-hero__panel">
          <div className="leaf-divider">
            <LeafIcon />
            <span className="eyebrow page-hero__eyebrow">{eyebrow}</span>
          </div>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </div>
      </div>

      <CurvedWave color={waveColor} bg="transparent" className="page-hero__wave" />

      <style>{`
        .page-hero {
          position: relative;
          padding: 82px 0 0;
          background: linear-gradient(135deg, #2a1645 0%, #442663 38%, #351c53 100%);
          overflow: hidden;
        }
        .page-hero__inner {
          padding-bottom: 64px;
        }
        .page-hero__wave {
          position: relative;
          z-index: 3;
        }
        .page-hero__aurora {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          pointer-events: none;
          opacity: 0.9;
        }
        .page-hero__aurora--sky {
          width: 420px;
          height: 420px;
          background: rgba(216, 197, 238, 0.2);
          top: -110px;
          right: 3%;
        }
        .page-hero__aurora--gold {
          width: 430px;
          height: 430px;
          background: rgba(246, 201, 69, 0.18);
          bottom: -120px;
          left: -60px;
        }
        .page-hero__aurora--coral {
          width: 310px;
          height: 310px;
          background: rgba(229, 155, 47, 0.18);
          top: 12px;
          left: 39%;
        }
        .page-hero__inner {
          position: relative;
          z-index: 2;
        }
        .page-hero__panel {
          max-width: 760px;
          padding: 28px 28px 24px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 28px;
          box-shadow: 0 16px 42px -20px rgba(18, 9, 30, 0.7);
        }
        .page-hero__eyebrow {
          color: var(--gold) !important;
        }
        .page-hero h1 {
          font-size: clamp(2.1rem, 4vw, 3.3rem);
          margin-top: 14px;
          max-width: 18ch;
          color: #fffaf0;
          letter-spacing: -0.02em;
          line-height: 1.06;
        }
        .page-hero p {
          margin-top: 18px;
          font-size: 1.12rem;
          color: rgba(255, 250, 240, 0.88);
          max-width: 62ch;
          line-height: 1.65;
        }
        @media (max-width: 640px) {
          .page-hero {
            padding-top: 64px;
            padding-bottom: 58px;
          }
          .page-hero__panel {
            padding: 20px 18px 18px;
          }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="#5EA039" />
    </svg>
  )
}
