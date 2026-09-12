import { Link } from 'react-router-dom'
import { SCHOOL } from '../data/schoolInfo'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__ambient-glow final-cta__ambient-glow--1" />
      <div className="final-cta__ambient-glow final-cta__ambient-glow--2" />
      <div className="container final-cta__inner">
        <div className="final-cta__badge">
          <span>🌱</span> Begin Your Child's Journey
        </div>
        <h2>Every child has something beautiful within</h2>
        <p>
          Give your child an environment where curiosity is encouraged, Quranic values are
          nurtured and learning becomes a lifelong joyful journey in Thalassery.
        </p>
        <div className="final-cta__ctas">
          <Link to="/admissions" className="btn btn-secondary final-cta__primary-btn">
            Enquire for Admission
          </Link>
          <a
            href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20my%20child.`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline final-cta__wa-btn"
          >
            WhatsApp Us (+91 94462 54007)
          </a>
        </div>
        <p className="final-cta__helpline">
          Direct Helplines: <a href="tel:+919446254007">+91 94462 54007</a> &middot; <a href="tel:+919562309061">+91 95623 09061</a>
        </p>
      </div>

      <style>{`
        .final-cta {
          position: relative;
          background: var(--gold);
          padding: 100px 0;
          text-align: center;
          overflow: hidden;
        }
        .final-cta__ambient-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
        }
        .final-cta__ambient-glow--1 {
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.45);
          top: -100px;
          left: -80px;
        }
        .final-cta__ambient-glow--2 {
          width: 350px;
          height: 350px;
          background: rgba(242, 136, 75, 0.35);
          bottom: -100px;
          right: -80px;
        }
        .final-cta__inner {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }
        .final-cta__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(18, 51, 40, 0.12);
          border: 1px solid rgba(18, 51, 40, 0.18);
          color: var(--green-deep-ink);
          font-weight: 700;
          font-size: 0.84rem;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .final-cta h2 {
          font-size: clamp(2.1rem, 4vw, 3rem);
          color: var(--green-deep-ink);
          letter-spacing: -0.01em;
          line-height: 1.15;
        }
        .final-cta p {
          margin-top: 18px;
          font-size: 1.1rem;
          color: var(--green-deep-ink);
          opacity: 0.9;
          line-height: 1.6;
        }
        .final-cta__ctas {
          margin-top: 36px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .final-cta__primary-btn {
          background: var(--green-deep-ink);
          color: var(--ivory);
          box-shadow: 0 12px 28px -10px rgba(18, 51, 40, 0.6);
        }
        .final-cta__primary-btn:hover {
          background: #0d281f;
          box-shadow: 0 16px 32px -10px rgba(18, 51, 40, 0.8);
        }
        .final-cta__wa-btn {
          color: var(--green-deep-ink);
          border-color: var(--green-deep-ink);
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
        }
        .final-cta__wa-btn:hover {
          background: rgba(255, 255, 255, 0.6);
        }
        .final-cta__helpline {
          margin-top: 24px !important;
          font-size: 0.88rem !important;
          font-weight: 600;
          color: var(--green-deep-ink);
          opacity: 0.85;
        }
        .final-cta__helpline a {
          text-decoration: underline;
          color: inherit;
        }
        @media (max-width: 767px) {
          .final-cta { padding: 68px 0; }
        }
      `}</style>
    </section>
  )
}
