import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SCHOOL } from '../data/schoolInfo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__row">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)} aria-label="Al-Fitrah Islamic Preschool Home">
          <img
            src={SCHOOL.logo || '/images/logo.png'}
            alt="Al-Fitrah Islamic Preschool Thalassery"
            className="navbar__logo"
          />
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/admissions" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Enquire Now
          </Link>
        </nav>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 2.5px solid transparent;
          border-image: linear-gradient(90deg, #38BDF8 0%, #4ADE80 25%, #FACC15 50%, #FB923C 75%, #C084FC 100%) 1;
          transition: box-shadow 0.2s ease;
        }
        .navbar--scrolled {
          box-shadow: 0 10px 30px -15px rgba(18, 51, 40, 0.15);
        }
        .navbar__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 24px;
        }
        .navbar__brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .navbar__logo {
          height: 64px;
          width: auto;
          max-width: 210px;
          object-fit: contain;
          transition: transform 0.2s ease;
          display: block;
        }
        .navbar__brand:hover .navbar__logo {
          transform: scale(1.03);
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .navbar__link {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--ink-soft);
          padding: 6px 2px;
          border-bottom: 2px solid transparent;
        }
        .navbar__link.is-active,
        .navbar__link:hover {
          color: var(--green-deep-ink);
          border-bottom-color: var(--gold);
        }
        .navbar__cta { padding: 10px 22px; font-size: 0.9rem; }
        .navbar__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        .navbar__toggle span {
          width: 24px;
          height: 2.5px;
          background: var(--green-deep-ink);
          border-radius: 2px;
        }

        @media (max-width: 900px) {
          .navbar__toggle { display: flex; }
          .navbar__links {
            position: fixed;
            inset: 0 0 0 auto;
            height: 100vh;
            width: min(320px, 82vw);
            background: var(--ivory);
            flex-direction: column;
            align-items: flex-start;
            padding: 100px 28px 28px;
            gap: 22px;
            transform: translateX(100%);
            transition: transform 0.25s ease;
            box-shadow: -12px 0 30px -20px rgba(0,0,0,0.4);
          }
          .navbar__links.is-open { transform: translateX(0); }
          .navbar__cta { margin-top: 10px; }
          .navbar__logo {
            height: 48px;
            max-width: 160px;
          }
        }
        @media (max-width: 480px) {
          .navbar__logo {
            height: 42px;
            max-width: 140px;
          }
        }
      `}</style>
    </header>
  )
}
