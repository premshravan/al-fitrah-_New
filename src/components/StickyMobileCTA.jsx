import { Link } from 'react-router-dom'
import { SCHOOL } from '../data/schoolInfo'

export default function StickyMobileCTA() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Quick actions">
      <a href={`tel:${SCHOOL.phoneRaw}`} className="mobile-cta__btn mobile-cta__btn--outline">Call</a>
      <a
        href={`https://wa.me/${SCHOOL.whatsappRaw}`}
        className="mobile-cta__btn mobile-cta__btn--outline"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <Link to="/admissions" className="mobile-cta__btn mobile-cta__btn--fill">Enquire Now</Link>

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
            z-index: 70;
            background: var(--ivory);
            border-top: 1px solid rgba(27,75,58,0.15);
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
            gap: 8px;
            box-shadow: 0 -8px 20px -16px rgba(0,0,0,0.4);
          }
          .mobile-cta__btn {
            flex: 1;
            text-align: center;
            font-weight: 700;
            font-size: 0.86rem;
            padding: 11px 8px;
            border-radius: 100px;
          }
          .mobile-cta__btn--outline {
            border: 1.5px solid var(--green-deep);
            color: var(--green-deep-ink);
          }
          .mobile-cta__btn--fill {
            background: var(--apricot);
            color: var(--white);
          }
        }
      `}</style>
    </div>
  )
}
