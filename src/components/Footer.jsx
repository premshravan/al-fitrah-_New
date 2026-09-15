import { Link, useLocation } from 'react-router-dom'
import { SCHOOL } from '../data/schoolInfo'
import CurvedWave from './CurvedWave'

export default function Footer() {
  const { pathname } = useLocation()
  // Determine background of the section directly above the footer
  const prevBg = ['/contact', '/privacy-policy', '/terms'].includes(pathname)
    ? 'ivory'
    : pathname === '/admissions'
    ? 'tinted'
    : 'gold'

  return (
    <footer className="footer">
      <CurvedWave color="deep" bg={prevBg} showStroke={false} className="footer__wave" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-wrap" aria-label="Al-Fitrah Islamic Preschool">
            <img
              src="/images/logo.png"
              alt="Al-Fitrah Islamic Preschool"
              className="footer__logo-img"
            />
          </Link>
          <p>Where young minds learn, grow &amp; bloom — Quranic learning, academic foundations, Islamic values and character development in {SCHOOL.locality}.</p>
          <div className="footer__social">
            <a
              href={SCHOOL.instagram}
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={SCHOOL.facebook}
              aria-label="Facebook"
              title="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Al-Fitrah</Link></li>
            <li><Link to="/our-approach">Our Approach</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/curriculum">Curriculum</Link></li>
            <li><Link to="/quranic-education">Quranic Education</Link></li>
            <li><Link to="/nour-al-bayan">Nour Al Bayan</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>School</h4>
          <ul>
            <li><Link to="/character-and-values">Character &amp; Values</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Reach Us</h4>
          <ul className="footer__contact">
            <li className="footer__address">
              <strong>{SCHOOL.campusName}</strong><br />
              Near Vayalalam Juma Masjid<br />
              Post Paral, Madapeedika<br />
              PIN: 670102
            </li>
            <li>
              <strong>Primary: </strong>
              <a href={`tel:${SCHOOL.primaryPhoneRaw}`}>{SCHOOL.primaryPhone}</a>
            </li>
            <li>
              <strong>Helpline: </strong>
              <a href={`tel:${SCHOOL.secondaryPhoneRaw}`}>{SCHOOL.secondaryPhone}</a>
            </li>
            <li>
              <strong>Email: </strong>
              <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SCHOOL.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="footer__wa-link"
              >
                💬 WhatsApp (+91 94462 54007)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>&copy; {new Date().getFullYear()} Al-Fitrah Islamic Preschool, {SCHOOL.operatedBy}. All rights reserved.</span>
        <div className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: var(--green-deep);
          color: var(--ivory);
          padding: 0 0 0;
          border: none;
          outline: none;
        }
        .footer__wave {
          position: relative;
          z-index: 3;
          border: none;
          outline: none;
        }
        .footer__grid {
          padding-top: 56px;
        }
        .footer__grid,
        .footer__bottom {
          position: relative;
          z-index: 1;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(251,246,236,0.14);
        }
        .footer__logo-wrap {
          display: inline-block;
          background: #FFFFFF;
          padding: 8px 14px;
          border-radius: 12px;
          box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s ease;
          margin-bottom: 6px;
        }
        .footer__logo-wrap:hover {
          transform: translateY(-2px);
        }
        .footer__logo-img {
          height: 52px;
          width: auto;
          max-width: 170px;
          object-fit: contain;
          display: block;
        }
        .footer__brand p {
          margin-top: 12px;
          color: rgba(251,246,236,0.78);
          font-size: 0.92rem;
          max-width: 320px;
        }
        .footer__social {
          display: flex;
          gap: 10px;
          margin-top: 18px;
        }
        .footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          color: var(--ivory);
          border: 1px solid rgba(251, 246, 236, 0.28);
          border-radius: 10px;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .footer__social a:hover,
        .footer__social a:focus-visible {
          transform: translateY(-2px);
        }
        .footer__social a:first-child:hover,
        .footer__social a:first-child:focus-visible {
          color: #e4405f;
          background: rgba(228, 64, 95, 0.12);
          border-color: #e4405f;
        }
        .footer__social a:last-child:hover,
        .footer__social a:last-child:focus-visible {
          color: #1877f2;
          background: rgba(24, 119, 242, 0.12);
          border-color: #1877f2;
        }
        .footer__social svg {
          width: 20px;
          height: 20px;
        }
        .footer__col h4 {
          color: var(--ivory);
          font-family: var(--font-body);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
          opacity: 0.85;
        }
        .footer__col li { margin-bottom: 10px; font-size: 0.92rem; }
        .footer__col a { color: rgba(251,246,236,0.85); }
        .footer__col a:hover { color: var(--gold); }
        .footer__contact li { color: rgba(251,246,236,0.85); }
        .footer__address { line-height: 1.55; margin-bottom: 14px !important; }
        .footer__address strong { color: var(--ivory); font-weight: 700; font-size: 0.88rem; letter-spacing: 0.02em; display: inline-block; margin-bottom: 4px; }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 24px;
          font-size: 0.8rem;
          color: rgba(251,246,236,0.65);
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer__legal { display: flex; gap: 18px; }
        @media (max-width: 900px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer { padding-top: 112px; }
          .footer__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
    </svg>
  )
}
