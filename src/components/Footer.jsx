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
            <a href={SCHOOL.instagram} aria-label="Instagram">Instagram</a>
            <a href={SCHOOL.facebook} aria-label="Facebook">Facebook</a>
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
          gap: 16px;
          margin-top: 18px;
          font-size: 0.86rem;
          font-weight: 600;
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
