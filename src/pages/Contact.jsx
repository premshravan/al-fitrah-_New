import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import { SCHOOL } from '../data/schoolInfo'

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact & Location | Al-Fitrah Islamic Preschool Thalassery"
        description="Get in touch with Al-Fitrah Islamic Preschool in Thalassery, Kannur. Call or WhatsApp +91 94462 54007 or +91 95623 09061."
      />
      <PageHero
        eyebrow="Contact & Admissions Enquiry"
        title="We'd love to welcome you & your child"
        lead="Have questions about admissions, our Nour Al Bayan Quranic program, or want to schedule a visit? Connect with our team directly via phone or WhatsApp."
      />

      <section className="section contact-section">
        <div className="container contact-wrap">
          <div className="contact-cards-grid">
            {/* Primary Contact Card */}
            <div className="contact-card contact-card--primary">
              <div className="contact-card__badge">Primary Contact &amp; WhatsApp</div>
              <div className="contact-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>+91 94462 54007</h3>
              <p>Direct school inquiries, principal office, and official admissions.</p>
              <div className="contact-card__actions">
                <a
                  href={`tel:${SCHOOL.primaryPhoneRaw}`}
                  className="btn btn-outline contact-card__btn"
                >
                  Call +91 94462 54007
                </a>
                <a
                  href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Al-Fitrah%20Preschool.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary contact-card__btn contact-card__btn--wa"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Secondary Contact Card */}
            <div className="contact-card contact-card--secondary">
              <div className="contact-card__badge contact-card__badge--secondary">Alternative Contact</div>
              <div className="contact-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>+91 95623 09061</h3>
              <p>Admissions helpline, parent assistance, and general coordination.</p>
              <div className="contact-card__actions">
                <a
                  href={`tel:${SCHOOL.secondaryPhoneRaw}`}
                  className="btn btn-outline contact-card__btn"
                >
                  Call +91 95623 09061
                </a>
                <a
                  href={`https://wa.me/${SCHOOL.secondaryWhatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Al-Fitrah%20Preschool.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary contact-card__btn"
                >
                  WhatsApp This Number
                </a>
              </div>
            </div>

            {/* Address & Timings Card */}
            <div className="contact-card contact-card--info">
              <div className="contact-info-block">
                <span className="contact-info-label">School Campus &amp; Address</span>
                <h4>{SCHOOL.campusName}</h4>
                <div className="contact-address-box">
                  <p>Near Vayalalam Juma Masjid</p>
                  <p>Post Paral, Madapeedika</p>
                  <p className="contact-pincode">PIN: 670102</p>
                </div>
                <p className="contact-info-sub">Thalassery, Kannur, Kerala &bull; Operated by {SCHOOL.operatedBy}</p>
              </div>

              <div className="contact-info-block">
                <span className="contact-info-label">School Timings</span>
                <p><strong>{SCHOOL.timings}</strong></p>
                <p className="contact-info-sub">Office hours available for parent visits &amp; campus tours.</p>
              </div>

              <div className="contact-info-block">
                <span className="contact-info-label">Email Inquiries</span>
                <a href={`mailto:${SCHOOL.email}`} className="contact-email-link">
                  {SCHOOL.email}
                </a>
              </div>
            </div>
          </div>

          {/* Visit invitation banner */}
          <div className="contact-visit-banner">
            <div className="contact-visit-banner__copy">
              <h3>Schedule an In-Person Campus Tour</h3>
              <p>
                Pictures and brochures capture our spaces, but a visit lets you experience firsthand the warm Islamic atmosphere, dedicated mentors, and joyful learning environment.
              </p>
            </div>
            <a
              href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20schedule%20a%20campus%20visit%20at%20Al-Fitrah%20Preschool.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book Campus Tour on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .contact-section {
          padding-top: 48px;
        }
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .contact-card {
          background: var(--white);
          border-radius: var(--radius-card);
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 16px 36px -18px rgba(18, 51, 40, 0.14), 0 0 0 1px rgba(27, 75, 58, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 48px -18px rgba(18, 51, 40, 0.22), 0 0 0 1px rgba(240, 178, 58, 0.35);
        }
        .contact-card--primary {}
        .contact-card--secondary {}
        .contact-card--info {
          gap: 24px;
        }

        .contact-card__badge {
          align-self: flex-start;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(240, 178, 58, 0.18);
          color: #B57905;
          margin-bottom: 20px;
        }
        .contact-card__badge--secondary {
          background: rgba(111, 168, 75, 0.16);
          color: #407525;
        }

        .contact-card__icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--ivory-deep);
          color: var(--green-deep);
          display: grid;
          place-items: center;
          margin-bottom: 18px;
        }
        .contact-card__icon-wrap svg {
          width: 26px;
          height: 26px;
        }

        .contact-card h3 {
          font-size: 1.45rem;
          margin-bottom: 10px;
          color: var(--green-deep-ink);
        }
        .contact-card p {
          color: var(--ink-soft);
          font-size: 0.94rem;
          line-height: 1.5;
          margin-bottom: 26px;
        }

        .contact-card__actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-card__btn {
          width: 100%;
          justify-content: center;
          text-align: center;
          padding: 12px 18px;
          font-size: 0.92rem;
        }
        .contact-card__btn--wa {
          background: #25D366;
          color: #ffffff;
          box-shadow: 0 8px 20px -8px rgba(18, 140, 126, 0.7);
        }

        .contact-info-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-info-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--leaf);
        }
        .contact-info-block h4 {
          font-size: 1.15rem;
          color: var(--green-deep-ink);
        }
        .contact-info-block p {
          margin-bottom: 0;
          font-size: 0.92rem;
        }
        .contact-address-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
          color: var(--ink-soft);
          font-size: 0.94rem;
          line-height: 1.45;
          margin: 4px 0 2px;
        }
        .contact-address-box p {
          margin-bottom: 0;
        }
        .contact-pincode {
          font-weight: 700;
          color: var(--green-deep-ink);
        }
        .contact-info-sub {
          font-size: 0.84rem;
          color: var(--ink-soft);
          margin-top: 4px;
        }
        .contact-email-link {
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--green-deep);
          text-decoration: underline;
        }

        .contact-visit-banner {
          margin-top: 48px;
          background: var(--green-deep-ink);
          color: var(--ivory);
          border-radius: var(--radius-card);
          padding: 42px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          box-shadow: 0 20px 40px -15px rgba(18, 51, 40, 0.4);
        }
        .contact-visit-banner h3 {
          color: var(--ivory);
          font-size: 1.6rem;
          margin-bottom: 8px;
        }
        .contact-visit-banner p {
          color: rgba(251, 246, 236, 0.82);
          max-width: 58ch;
          font-size: 0.98rem;
        }
        .contact-visit-banner .btn {
          flex-shrink: 0;
        }

        @media (max-width: 980px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .contact-visit-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  )
}
