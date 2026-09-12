import { Link } from 'react-router-dom'
import { SCHOOL } from '../data/schoolInfo'

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="container announcement__row">
        <span>Admissions Open | 2026–27 · {SCHOOL.locality}</span>
        <div className="announcement__links">
          <a href={`tel:${SCHOOL.primaryPhoneRaw}`}>{SCHOOL.primaryPhone}</a>
          <span className="announcement__sep">/</span>
          <a href={`tel:${SCHOOL.secondaryPhoneRaw}`}>{SCHOOL.secondaryPhone}</a>
          <Link to="/admissions" className="announcement__cta">Enquire for Admission</Link>
        </div>
      </div>
      <style>{`
        .announcement {
          background: var(--green-deep);
          color: var(--ivory);
          font-size: 0.82rem;
        }
        .announcement__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 8px 24px;
          flex-wrap: wrap;
        }
        .announcement__links {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .announcement__links a {
          font-weight: 600;
          color: rgba(251, 246, 236, 0.95);
        }
        .announcement__links a:hover {
          color: var(--gold);
        }
        .announcement__sep {
          opacity: 0.4;
          font-weight: 300;
        }
        .announcement__cta {
          background: var(--gold);
          color: var(--green-deep-ink);
          padding: 5px 14px;
          border-radius: 100px;
          font-weight: 700;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .announcement__cta:hover {
          color: #000000 !important;
          background: #ffe375;
          transform: translateY(-1px);
        }
        @media (max-width: 560px) {
          .announcement__row {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 7px;
            padding: 8px 16px 10px;
          }
          .announcement__links {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            gap: 4px 10px;
            line-height: 1.35;
          }
          .announcement__links a {
            white-space: nowrap;
          }
          .announcement__cta {
            flex-basis: 100%;
            width: min(100%, 260px);
            padding: 6px 14px;
          }
        }
      `}</style>
    </div>
  )
}
