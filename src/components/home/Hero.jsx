import { Link } from 'react-router-dom'
import { SCHOOL } from '../../data/schoolInfo'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__ambient-glow hero__ambient-glow--emerald" />
      <div className="hero__ambient-glow hero__ambient-glow--gold" />
      <div className="hero__ambient-glow hero__ambient-glow--blue" />
      <div className="hero__ambient-glow hero__ambient-glow--coral" />

      {/* Playful Floating Ambient Doodles for Kids & Warmth */}
      <div className="floating-doodle floating-doodle--1" style={{ top: '12%', left: '4%', fontSize: '1.8rem', opacity: 0.85 }} aria-hidden="true">🌙</div>
      <div className="floating-doodle floating-doodle--twinkle" style={{ top: '18%', left: '46%', fontSize: '1.4rem', opacity: 0.9 }} aria-hidden="true">✨</div>
      <div className="floating-doodle floating-doodle--2" style={{ top: '78%', left: '8%', fontSize: '1.6rem', opacity: 0.8 }} aria-hidden="true">🍃</div>
      <div className="floating-doodle floating-doodle--3" style={{ top: '10%', right: '8%', fontSize: '1.5rem', opacity: 0.85 }} aria-hidden="true">⭐</div>
      <div className="floating-doodle floating-doodle--1" style={{ bottom: '14%', right: '4%', fontSize: '1.6rem', opacity: 0.8 }} aria-hidden="true">🎈</div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__badge">
            <span className="live-dot" />
            <LeafIcon />
            <span>Admissions Open 2026–27 &bull; Thalassery</span>
          </div>

          <h1>
            Where young minds <span className="hero__title-highlight">learn, grow &amp; bloom</span>
          </h1>

          <p className="hero__lead">
            Al-Fitrah Islamic Preschool nurtures children in Thalassery through
            authentic Quranic learning (Nour Al Bayan), foundational academics,
            Islamic adab, character building and hands-on discovery.
          </p>

          <div className="hero__ctas">
            <Link to="/admissions" className="btn btn-primary hero__cta-main">
              Enquire for Admission 2026–27
            </Link>
            <a
              href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Al-Fitrah.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline hero__cta-wa"
            >
              <WhatsAppIcon />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Delight Pills for Parents */}
          <div className="hero__quick-pills">
            <span className="sticker-badge sticker-badge--gold">📖 Nour Al Bayan Method</span>
            <span className="sticker-badge sticker-badge--purple">🧸 Loving Ayahs &amp; Teachers</span>
            <span className="sticker-badge sticker-badge--mint">🎨 Play-Based Discovery</span>
          </div>

          <div className="hero__numbers">
            <span className="hero__numbers-label">Admissions &amp; Enquiry Desk:</span>
            <div className="hero__numbers-links">
              <a href={`tel:${SCHOOL.primaryPhoneRaw}`}>{SCHOOL.primaryPhone}</a>
              <span className="hero__numbers-sep">&bull;</span>
              <a href={`tel:${SCHOOL.secondaryPhoneRaw}`}>{SCHOOL.secondaryPhone}</a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-glow" />
          <div className="hero__blob blob">
            <img
              src="/images/galleries/photo_2026-09-09_12-54-19.jpg"
              alt="Al-Fitrah preschool children celebrating their graduation with teachers"
            />
          </div>

          <div className="hero__chip hero__chip--one">
            <span className="hero__chip-icon">🌱</span>
            <div>
              <strong>Nour Al Bayan</strong>
              <small>Quran &amp; Tajweed</small>
            </div>
          </div>

          <div className="hero__chip hero__chip--two">
            <span className="hero__chip-icon">🎓</span>
            <div>
              <strong>Convocation Honors</strong>
              <small>Preschool Graduation</small>
            </div>
          </div>

          <div className="hero__stat-card">
            <div className="hero__stat-avatars">
              <span>🌟</span>
              <span>📚</span>
              <span>🎨</span>
            </div>
            <div>
              <strong>Holistic Islamic Growth</strong>
              <small>Spiritual, Cognitive &amp; Social</small>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 64px 0 96px;
          overflow: hidden;
          background: linear-gradient(135deg, #3a1d5d 0%, #5d3d8d 38%, #4a2f6d 100%);
        }
        .hero__ambient-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.8;
        }
        .hero__ambient-glow--emerald {
          width: 520px;
          height: 520px;
          background: rgba(118, 82, 168, 0.18);
          top: -120px;
          left: -120px;
        }
        .hero__ambient-glow--gold {
          width: 480px;
          height: 480px;
          background: rgba(246, 201, 69, 0.3);
          bottom: -80px;
          right: -60px;
        }
        .hero__ambient-glow--blue {
          width: 460px;
          height: 460px;
          background: rgba(216, 197, 238, 0.3);
          top: -80px;
          right: 25%;
        }
        .hero__ambient-glow--coral {
          width: 420px;
          height: 420px;
          background: rgba(229, 155, 47, 0.22);
          bottom: -60px;
          left: 30%;
        }

        .hero__grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 60px;
          align-items: center;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(27, 75, 58, 0.15);
          padding: 6px 16px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--green-deep-ink);
          box-shadow: 0 4px 14px -6px rgba(18, 51, 40, 0.12);
        }
        .hero__badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--leaf);
          box-shadow: 0 0 0 3px rgba(111, 168, 75, 0.3);
        }

        .hero h1 {
          font-size: clamp(2.4rem, 4.4vw, 3.7rem);
          margin-top: 18px;
          line-height: 1.12;
          letter-spacing: -0.015em;
          color: var(--ivory);
        }
        .hero__title-highlight {
          display: inline;
          color: var(--gold);
        }

        .hero__lead {
          margin-top: 22px;
          font-size: 1.15rem;
          color: rgba(255, 250, 240, 0.88);
          max-width: 48ch;
          line-height: 1.62;
        }

        .hero__ctas {
          display: flex;
          gap: 16px;
          margin-top: 34px;
          flex-wrap: wrap;
        }
        .hero__cta-main {
          background: var(--apricot);
          box-shadow: 0 12px 28px -8px rgba(242, 136, 75, 0.65);
        }
        .hero__cta-main:hover {
          box-shadow: 0 16px 34px -8px rgba(242, 136, 75, 0.8);
        }
        .hero__cta-wa {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-color: rgba(27, 75, 58, 0.25);
          color: var(--green-deep-ink);
        }
        .hero__cta-wa:hover {
          background: var(--white);
          border-color: #25D366;
          color: #128C7E;
        }
        .hero__cta-wa svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        .hero__quick-pills {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .hero__numbers {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 0.88rem;
        }
        .hero__numbers-label {
          font-weight: 600;
          color: rgba(255, 250, 240, 0.72);
        }
        .hero__numbers-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero__numbers-links a {
          font-weight: 700;
          color: var(--ivory);
          text-decoration: underline;
        }
        .hero__numbers-links a:hover {
          color: var(--gold);
        }
        .hero__numbers-sep {
          color: var(--leaf);
        }

        /* Visual column */
        .hero__visual {
          position: relative;
        }
        .hero__visual-glow {
          position: absolute;
          inset: 10% 10% 10% 10%;
          background: rgba(246, 201, 69, 0.3);
          filter: blur(45px);
          border-radius: 50%;
          z-index: 1;
        }
        .hero__blob {
          position: relative;
          z-index: 2;
          aspect-ratio: 4 / 4.7;
          border-radius: 34% 66% 52% 48% / 24% 28% 72% 76%;
          border: 10px solid rgba(255, 249, 233, 0.82);
          box-shadow: 0 24px 50px -18px rgba(18, 51, 40, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.6);
        }
        .hero__blob img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero__chip {
          position: absolute;
          z-index: 3;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 10px 16px;
          border-radius: 100px;
          box-shadow: 0 12px 28px -10px rgba(18, 51, 40, 0.25), 0 0 0 1px rgba(27, 75, 58, 0.08);
          display: flex;
          align-items: center;
          gap: 10px;
          animation: heroChipFloat 4s ease-in-out infinite;
        }
        .hero__chip strong {
          display: block;
          font-size: 0.84rem;
          color: var(--green-deep-ink);
          line-height: 1.1;
        }
        .hero__chip small {
          font-size: 0.72rem;
          color: var(--ink-soft);
        }
        .hero__chip-icon {
          font-size: 1.1rem;
        }

        .hero__chip--one {
          top: 8%;
          left: -8%;
        }
        .hero__chip--two {
          bottom: 12%;
          right: -8%;
          animation-delay: 2s;
        }

        .hero__stat-card {
          position: absolute;
          bottom: -5%;
          left: 4%;
          z-index: 3;
          background: var(--green-deep-ink);
          backdrop-filter: blur(12px);
          color: var(--ivory);
          padding: 10px 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 16px 36px -12px rgba(18, 51, 40, 0.5), 0 0 0 1px rgba(240, 178, 58, 0.3);
        }
        .hero__stat-avatars {
          display: flex;
          font-size: 1.1rem;
          gap: 2px;
        }
        .hero__stat-card strong {
          display: block;
          font-size: 0.82rem;
          color: var(--gold);
        }
        .hero__stat-card small {
          font-size: 0.72rem;
          color: rgba(251, 246, 236, 0.78);
        }

        @keyframes heroChipFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 980px) {
          .hero__grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero__visual {
            max-width: 440px;
            margin: 0 auto;
          }
        }
        @media (max-width: 520px) {
          .hero { padding: 40px 0 64px; }
          .hero__chip--one { left: 0; }
          .hero__chip--two { right: 0; }
          .hero__stat-card {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 16px;
          }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 16, height: 16 }}>
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="#6FA84B" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.88.52 3.65 1.43 5.16L2.35 21.6l4.58-1.06A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.18c-1.64 0-3.18-.46-4.5-1.27l-.32-.2-2.98.69.7-2.9-.22-.34A8.15 8.15 0 0 1 3.82 12c0-4.51 3.67-8.18 8.18-8.18s8.18 3.67 8.18 8.18-3.67 8.18-8.18 8.18Zm4.85-6.07c-.27-.13-1.58-.78-1.82-.87-.25-.09-.43-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.41-2.15-1.32-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.33-.01-.51-.01-.18 0-.47.07-.71.33-.25.27-.94.92-.94 2.23 0 1.32.96 2.59 1.09 2.76.13.18 1.89 2.88 4.57 4.04.64.28 1.14.44 1.53.56.64.2 1.23.17 1.69.1.51-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.51-.31Z"
        fill="#25D366"
      />
    </svg>
  )
}
