import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import { SCHOOL } from '../data/schoolInfo'

const STEPS = [
  { n: '01', icon: '📝', title: 'Enquire', text: 'Fill the form below, call us directly, or send a quick WhatsApp message.' },
  { n: '02', icon: '📞', title: 'Admissions Dialogue', text: 'We understand your child\'s unique stage and walk you through programs & timings.' },
  { n: '03', icon: '🏫', title: 'Campus Visit', text: 'Tour our classrooms, meet teachers, and experience the warm Islamic preschool environment.' },
  { n: '04', icon: '🎓', title: 'Enrolment & Welcome', text: 'Finalise simple documentation and secure your child\'s seat for the upcoming term.' },
]

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageMeta
        title="Admissions | Al-Fitrah Islamic Preschool Thalassery"
        description="Start your child's admission enquiry at Al-Fitrah Islamic Preschool in Thalassery. Learn about our simple 4-step admission process."
      />
      <PageHero
        eyebrow="Admissions 2025–26"
        title="Give your child a beautiful, blessed beginning"
        lead="We keep the admission process warm, simple, and personal — here is what you can expect."
      />

      <section className="section admissions-steps">
        <div className="container">
          <div className="admissions-steps__heading">
            <span className="sticker-badge">✨ 4-Step Pathway</span>
            <h2>Simple, Guided Admission Process</h2>
          </div>

          <div className="admissions-steps__grid">
            {STEPS.map((s) => (
              <div className="admissions-steps__card" key={s.n}>
                <div className="admissions-steps__top">
                  <span className="admissions-steps__num">{s.n}</span>
                  <div className="admissions-steps__icon" aria-hidden="true">{s.icon}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurvedWave color="tinted" bg="ivory" />

      <section className="section section--tinted admissions-form-section">
        <div className="container admissions-form-section__grid">
          <div className="admissions-form-section__intro">
            <span className="sticker-badge sticker-badge--gold">📬 Quick Enquiry</span>
            <h2>Start Your Child's Admission Enquiry</h2>
            <p>
              Share a few details and our admissions coordinator will reach out promptly with fee details, curriculum guides, and visit schedules.
            </p>
            <div className="admissions-form-section__alt">
              <a href={`tel:${SCHOOL.primaryPhoneRaw}`} className="btn btn-outline">
                📞 Call {SCHOOL.primaryPhone}
              </a>
              <a href={`tel:${SCHOOL.secondaryPhoneRaw}`} className="btn btn-outline">
                📞 Call {SCHOOL.secondaryPhone}
              </a>
              <a
                href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20my%20child.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <svg className="admissions-whatsapp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.88.52 3.65 1.43 5.16L2.35 21.6l4.58-1.06A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.18c-1.64 0-3.18-.46-4.5-1.27l-.32-.2-2.98.69.7-2.9-.22-.34A8.15 8.15 0 0 1 3.82 12c0-4.51 3.67-8.18 8.18-8.18s8.18 3.67 8.18 8.18-3.67 8.18-8.18 8.18Zm4.85-6.07c-.27-.13-1.58-.78-1.82-.87-.25-.09-.43-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.41-2.15-1.32-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.33-.01-.51-.01-.18 0-.47.07-.71.33-.25.27-.94.92-.94 2.23 0 1.32.96 2.59 1.09 2.76.13.18 1.89 2.88 4.57 4.04.64.28 1.14.44 1.53.56.64.2 1.23.17 1.69.1.51-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.51-.31Z"
                    fill="currentColor"
                  />
                </svg>
                WhatsApp Admissions
              </a>
            </div>
          </div>

          <form className="admissions-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="admissions-form__success">
                <div className="admissions-form__success-icon">🎉</div>
                <h3>Jazakallahu Khairan!</h3>
                <p>Your enquiry has been received. Our admissions team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="admissions-form__row">
                  <label>
                    Parent / Guardian Name *
                    <input type="text" name="parentName" required placeholder="e.g. Fathima / Mohammed" />
                  </label>
                  <label>
                    Contact Phone Number *
                    <input type="tel" name="phone" required placeholder="e.g. +91 94462 XXXXX" />
                  </label>
                </div>
                <div className="admissions-form__row">
                  <label>
                    Email Address
                    <input type="email" name="email" placeholder="e.g. parent@example.com" />
                  </label>
                  <label>
                    Child's Full Name *
                    <input type="text" name="childName" required placeholder="Child's name" />
                  </label>
                </div>
                <div className="admissions-form__row">
                  <label>
                    Child's Date of Birth
                    <input type="date" name="childDob" />
                  </label>
                  <label>
                    Preferred Program *
                    <select name="program" defaultValue="" required>
                      <option value="" disabled>Select a program</option>
                      <option>Early Years (2.5 – 3.5 yrs)</option>
                      <option>Preschool (3 – 4 yrs)</option>
                      <option>Level 1 / LKG (4 – 5 yrs)</option>
                      <option>Level 2 / UKG (5 – 6 yrs)</option>
                      <option>Level 3 / Primary Foundation (6 – 7 yrs)</option>
                    </select>
                  </label>
                </div>
                <label>
                  Location / Area in Thalassery
                  <input type="text" name="location" placeholder="e.g. Paral, Madapeedika, Temple Gate" />
                </label>
                <label>
                  Questions or Notes for Teachers
                  <textarea name="message" rows={3} placeholder="Tell us anything specific about your child or any questions you have..." />
                </label>
                <button type="submit" className="btn btn-primary admissions-form__submit">
                  ✨ Submit Admission Enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <style>{`
        .admissions-steps {
          padding-top: clamp(32px, 5vw, 60px);
          padding-bottom: clamp(36px, 5vw, 60px);
        }
        .admissions-steps__heading {
          text-align: center;
          margin-bottom: 36px;
        }
        .admissions-steps__heading h2 {
          margin-top: 10px;
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          color: var(--green-deep-ink);
        }
        .admissions-steps__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .admissions-steps__card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.1);
          border-radius: var(--radius-card);
          padding: 26px 22px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .admissions-steps__card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -6px rgba(27,75,58,0.12);
        }
        .admissions-steps__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .admissions-steps__num {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--gold);
        }
        .admissions-steps__icon {
          font-size: 1.6rem;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(218,165,32,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admissions-steps__card h3 {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--green-deep-ink);
          margin-bottom: 6px;
        }
        .admissions-steps__card p {
          margin: 0;
          color: var(--ink-soft);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .admissions-form-section {
          padding-top: clamp(40px, 6vw, 70px);
          padding-bottom: clamp(40px, 6vw, 70px);
        }
        .admissions-form-section__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 52px;
          align-items: start;
        }
        .admissions-form-section__intro h2 {
          font-size: clamp(1.7rem, 2.6vw, 2.2rem);
          color: var(--ivory);
          margin-top: 12px;
        }
        .admissions-form-section__intro p {
          margin-top: 14px;
          color: rgba(255, 250, 240, 0.92);
          line-height: 1.65;
          font-size: 1rem;
        }
        .admissions-form-section__alt {
          display: flex;
          gap: 12px;
          margin-top: 26px;
          flex-wrap: wrap;
        }
        .admissions-whatsapp-icon {
          width: 1.25em;
          height: 1.25em;
          flex: 0 0 auto;
        }
        .sticker-badge--gold {
          background: rgba(218,165,32,0.25);
          color: var(--gold-light);
          border: 1px solid rgba(218,165,32,0.4);
        }

        .admissions-form {
          background: var(--white);
          padding: 32px;
          border-radius: var(--radius-card);
          box-shadow: 0 16px 36px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .admissions-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .admissions-form label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--green-deep-ink);
        }
        .admissions-form input,
        .admissions-form select,
        .admissions-form textarea {
          font-family: var(--font-body);
          font-size: 0.96rem;
          padding: 12px 14px;
          border-radius: var(--radius-soft);
          border: 1.5px solid rgba(27,75,58,0.18);
          background: var(--ivory);
          color: var(--green-deep-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .admissions-form input:focus,
        .admissions-form select:focus,
        .admissions-form textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(218,165,32,0.2);
          background: #fff;
        }
        .admissions-form__submit {
          margin-top: 8px;
          padding: 14px 24px;
          font-size: 1rem;
        }
        .admissions-form__success {
          text-align: center;
          padding: 36px 20px;
        }
        .admissions-form__success-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }
        .admissions-form__success h3 {
          font-size: 1.4rem;
          color: var(--green-deep-ink);
        }
        .admissions-form__success p {
          margin-top: 10px;
          color: var(--ink-soft);
          font-size: 1rem;
        }

        @media (max-width: 960px) {
          .admissions-steps__grid { grid-template-columns: repeat(2, 1fr); }
          .admissions-form-section__grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 600px) {
          .admissions-steps__grid { grid-template-columns: 1fr; gap: 14px; }
          .admissions-form__row { grid-template-columns: 1fr; gap: 14px; }
          .admissions-form { padding: 22px 18px; }
          .admissions-form__submit { width: 100%; justify-content: center; }
          .admissions-form-section__alt a { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  )
}
