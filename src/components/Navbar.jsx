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
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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

        {/* Backdrop overlay on mobile */}
        <div
          className={`navbar__backdrop ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          <div className="navbar__menu-header">
            <span className="navbar__menu-title">Al-Fitrah</span>
            <button
              className="navbar__close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="navbar__menu-items">
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
          </div>

          <Link to="/admissions" className="btn btn-gold navbar__cta" onClick={() => setOpen(false)}>
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
          background: rgba(255, 253, 242, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
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
          height: 72px;
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
          gap: 22px;
        }
        .navbar__menu-header {
          display: none;
        }
        .navbar__menu-items {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .navbar__backdrop {
          display: none;
        }
        .navbar__link {
          font-size: 0.94rem;
          font-weight: 800;
          color: var(--ink-soft);
          padding: 6px 2px;
          border-bottom: 2px solid transparent;
        }
        .navbar__link.is-active,
        .navbar__link:hover {
          color: var(--green-deep-ink);
          border-bottom-color: var(--gold);
        }
        .navbar__cta {
          padding: 10px 22px;
          font-size: 0.9rem;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .navbar__cta:hover {
          color: #000000 !important;
        }
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

          .navbar__backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(22, 10, 36, 0.65);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 65;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
          }
          .navbar__backdrop.is-open {
            opacity: 1;
            pointer-events: auto;
          }

          .navbar__links {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            height: 100vh;
            height: 100dvh;
            width: min(250px, 68vw);
            max-width: 260px;
            z-index: 70;
            background:
              linear-gradient(135deg, rgba(246, 201, 69, 0.07) 0 1px, transparent 1px 100%),
              linear-gradient(165deg, #211131 0%, #32194b 42%, #432461 75%, #26143b 100%);
            background-size: 34px 34px, 100% 100%;
            border-left: 1.5px solid rgba(246, 201, 69, 0.35);
            flex-direction: column;
            align-items: stretch;
            padding: 18px 18px 24px;
            gap: 16px;
            transform: translateX(100%);
            transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
            box-shadow: -12px 0 35px -8px rgba(18, 5, 30, 0.7);
            overflow-y: auto;
            overflow-x: hidden;
            isolation: isolate;
            animation: navbarMenuTexture 16s linear infinite;
          }

          .navbar__links::before {
            content: '';
            position: absolute;
            top: 8%;
            right: -78px;
            width: 210px;
            height: 210px;
            border-radius: 50%;
            border: 1px solid rgba(246, 201, 69, 0.25);
            box-shadow:
              0 0 0 22px rgba(246, 201, 69, 0.04),
              0 0 0 44px rgba(246, 201, 69, 0.025);
            pointer-events: none;
            z-index: -1;
            animation: navbarMenuOrbit 12s ease-in-out infinite;
          }

          .navbar__links::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              115deg,
              transparent 12%,
              rgba(255, 250, 240, 0.08) 30%,
              transparent 48%
            );
            background-size: 220% 100%;
            pointer-events: none;
            z-index: -1;
            animation: navbarMenuSweep 9s ease-in-out infinite;
          }

          @keyframes navbarMenuTexture {
            from { background-position: 0 0, 0 0; }
            to { background-position: 34px 34px, 0 0; }
          }

          @keyframes navbarMenuOrbit {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
            50% { transform: translate3d(-14px, 18px, 0) rotate(18deg); }
          }

          @keyframes navbarMenuSweep {
            0%, 18% { background-position: 130% 0; }
            58%, 100% { background-position: -30% 0; }
          }

          .navbar__menu-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(246, 201, 69, 0.22);
            position: relative;
            z-index: 2;
          }
          .navbar__menu-title {
            font-family: var(--font-display);
            font-size: 1.12rem;
            font-weight: 700;
            color: var(--gold);
            letter-spacing: 0.02em;
          }
          .navbar__close-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(246, 201, 69, 0.14);
            border: 1px solid rgba(246, 201, 69, 0.35);
            color: var(--gold);
            cursor: pointer;
            transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
            padding: 0;
          }
          .navbar__close-btn svg {
            width: 16px;
            height: 16px;
          }
          .navbar__close-btn:hover,
          .navbar__close-btn:active {
            background: var(--gold);
            color: var(--green-deep-ink);
            transform: scale(1.08);
          }

          .navbar__menu-items {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
            position: relative;
            z-index: 2;
          }

          .navbar__links .navbar__link {
            color: rgba(255, 249, 233, 0.9);
            border-bottom: none;
            padding: 9px 12px;
            font-size: 0.92rem;
            border-radius: 10px;
            transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          }
          .navbar__links .navbar__link.is-active,
          .navbar__links .navbar__link:hover {
            color: var(--gold);
            background: rgba(246, 201, 69, 0.15);
            transform: translateX(3px);
          }
          .navbar__links.is-open { transform: translateX(0); }
          .navbar__links .navbar__cta {
            margin-top: 10px;
            width: 100%;
            text-align: center;
            justify-content: center;
            position: relative;
            z-index: 2;
            box-shadow: 0 8px 20px -4px rgba(246, 201, 69, 0.45);
          }
          .navbar__logo {
            height: 56px;
            max-width: 160px;
          }
        }

        @media (max-width: 480px) {
          .navbar__logo {
            height: 48px;
            max-width: 140px;
          }
        }
      `}</style>
    </header>
  )
}
