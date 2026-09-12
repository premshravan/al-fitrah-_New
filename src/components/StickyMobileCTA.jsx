import { Link } from 'react-router-dom'
import { SCHOOL } from '../data/schoolInfo'

export default function StickyMobileCTA() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Quick actions">
      <a href={`tel:${SCHOOL.phoneRaw}`} className="mobile-cta__btn mobile-cta__btn--call">
        <span>📞</span> Call
      </a>
      <a
        href={`https://wa.me/${SCHOOL.whatsappRaw}`}
        className="mobile-cta__btn mobile-cta__btn--wa"
        target="_blank"
        rel="noreferrer"
      >
        <span>💬</span> WhatsApp
      </a>
      <Link to="/admissions" className="mobile-cta__btn mobile-cta__btn--fill">
        <span>✨</span> Enquire
      </Link>

      <style>{`
        .mobile-cta {
          display: none;
        }
        @media (max-width: 767px) {
          .mobile-cta {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 55;
            background: rgba(255, 250, 240, 0.94);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-top: 1.5px solid rgba(246, 201, 69, 0.35);
            padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
            gap: 10px;
            box-shadow: 0 -8px 24px -10px rgba(22, 10, 36, 0.35);
          }
          .mobile-cta__btn {
            flex: 1;
            min-width: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            text-align: center;
            font-weight: 800;
            font-size: 0.88rem;
            padding: 12px 6px;
            border-radius: 100px;
            text-decoration: none;
            transition: transform 0.18s ease;
          }
          .mobile-cta__btn:active {
            transform: scale(0.96);
          }
          .mobile-cta__btn--call {
            background: #ffffff;
            border: 1.5px solid rgba(118, 82, 168, 0.3);
            color: var(--green-deep-ink);
            box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.08);
          }
          .mobile-cta__btn--wa {
            background: #ffffff;
            border: 1.5px solid rgba(37, 211, 102, 0.4);
            color: #128C7E;
            box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.08);
          }
          .mobile-cta__btn--fill {
            background: var(--gold);
            color: #000000;
            box-shadow: 0 4px 14px -3px rgba(246, 201, 69, 0.6);
          }
        }
      `}</style>
    </div>
  )
}
