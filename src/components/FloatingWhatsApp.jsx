import { useState } from 'react'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = '919446254007'
  const message = encodeURIComponent(
    'Assalamu Alaikum! I would like to enquire about admissions at Al-Fitrah Islamic Preschool.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div
      className="floating-wa"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`floating-wa__tooltip ${showTooltip ? 'is-visible' : ''}`}>
        <span className="floating-wa__tooltip-title">Chat with us on WhatsApp</span>
        <span className="floating-wa__tooltip-phone">+91 94462 54007</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa__btn"
        aria-label="Chat with Al-Fitrah Islamic Preschool on WhatsApp (+91 94462 54007)"
      >
        <span className="floating-wa__pulse" />
        <span className="floating-wa__pulse floating-wa__pulse--delayed" />
        <svg
          className="floating-wa__icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C8.268 2 2 8.268 2 16c0 2.65.736 5.13 2.015 7.252L2.5 29.5l6.452-1.492A13.92 13.92 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.545c-2.31 0-4.48-.65-6.326-1.78l-.454-.277-4.18.968.986-4.068-.3-.473A11.464 11.464 0 0 1 4.455 16C4.455 9.634 9.634 4.455 16 4.455S27.545 9.634 27.545 16 22.366 27.545 16 27.545Zm6.822-8.528c-.374-.187-2.213-1.092-2.556-1.217-.344-.124-.593-.187-.843.187-.249.375-.967 1.217-1.186 1.466-.218.25-.436.281-.81.094-.374-.187-1.579-.582-3.007-1.855-1.112-.992-1.863-2.218-2.082-2.593-.218-.374-.023-.576.164-.763.169-.168.374-.436.562-.655.187-.218.249-.374.374-.624.124-.25.062-.468-.032-.655-.093-.187-.842-2.028-1.154-2.777-.303-.73-.612-.631-.842-.643-.218-.011-.468-.013-.717-.013-.25 0-.655.094-.998.468-.344.375-1.31 1.28-1.31 3.12 0 1.84 1.341 3.62 1.528 3.869.187.25 2.64 4.032 6.395 5.653.894.386 1.591.617 2.134.79.897.285 1.714.245 2.359.149.719-.108 2.213-.905 2.525-1.778.312-.873.312-1.622.218-1.778-.093-.156-.343-.25-.717-.437Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <style>{`
        .floating-wa {
          position: fixed;
          bottom: 28px;
          right: 26px;
          z-index: 900;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .floating-wa__btn {
          position: relative;
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #ffffff;
          border-radius: 50%;
          box-shadow: 0 12px 28px -6px rgba(18, 140, 126, 0.55), 0 0 0 1px rgba(255,255,255,0.25);
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease;
          text-decoration: none;
        }
        .floating-wa__btn:hover {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 0 18px 36px -8px rgba(18, 140, 126, 0.7), 0 0 0 3px rgba(37, 211, 102, 0.35);
        }
        .floating-wa__icon {
          width: 32px;
          height: 32px;
          position: relative;
          z-index: 2;
        }
        .floating-wa__pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          opacity: 0;
          animation: waPulse 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite;
          pointer-events: none;
        }
        .floating-wa__pulse--delayed {
          animation-delay: 1.2s;
        }
        @keyframes waPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          60% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .floating-wa__tooltip {
          background: rgba(18, 51, 40, 0.94);
          backdrop-filter: blur(8px);
          color: #FBF6EC;
          padding: 8px 14px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
          border: 1px solid rgba(251, 246, 236, 0.12);
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .floating-wa__tooltip.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .floating-wa__tooltip-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: #F0B23A;
          letter-spacing: 0.02em;
        }
        .floating-wa__tooltip-phone {
          font-size: 0.84rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        @media (max-width: 767px) {
          .floating-wa {
            bottom: 84px;
            right: 18px;
          }
          .floating-wa__btn {
            width: 52px;
            height: 52px;
          }
          .floating-wa__icon {
            width: 28px;
            height: 28px;
          }
          .floating-wa__tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
