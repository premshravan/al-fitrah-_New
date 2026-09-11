export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="page-hero__aurora page-hero__aurora--sky" />
      <div className="page-hero__aurora page-hero__aurora--gold" />
      <div className="page-hero__aurora page-hero__aurora--coral" />
      <div className="container page-hero__inner">
        <div className="leaf-divider">
          <LeafIcon />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>

      <style>{`
        .page-hero {
          position: relative;
          padding: 72px 0 56px;
          background: linear-gradient(
            135deg,
            rgba(186, 230, 253, 0.65) 0%,
            rgba(254, 240, 138, 0.58) 35%,
            rgba(254, 215, 170, 0.52) 70%,
            rgba(187, 247, 208, 0.6) 100%
          );
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(90deg, #38BDF8 0%, #4ADE80 25%, #FACC15 50%, #FB923C 75%, #C084FC 100%) 1;
          overflow: hidden;
        }
        .page-hero__aurora {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          pointer-events: none;
        }
        .page-hero__aurora--sky {
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 70%);
          top: -80px;
          right: 5%;
        }
        .page-hero__aurora--gold {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(250, 204, 21, 0.35) 0%, transparent 70%);
          bottom: -80px;
          left: -40px;
        }
        .page-hero__aurora--coral {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%);
          top: 10px;
          left: 45%;
        }
        .page-hero__inner {
          position: relative;
          z-index: 2;
        }
        .page-hero h1 {
          font-size: clamp(2.1rem, 3.8vw, 3.1rem);
          margin-top: 14px;
          max-width: 20ch;
          color: var(--green-deep-ink);
          letter-spacing: -0.01em;
        }
        .page-hero p {
          margin-top: 18px;
          font-size: 1.12rem;
          color: var(--ink-soft);
          max-width: 62ch;
          line-height: 1.6;
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
