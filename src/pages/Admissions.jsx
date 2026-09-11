import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import { SCHOOL } from '../data/schoolInfo'

const STEPS = [
  { n: '01', title: 'Enquire', text: 'Fill the form below, call, or message us on WhatsApp.' },
  { n: '02', title: 'Speak With Our Admissions Team', text: 'We\u2019ll understand your child\u2019s needs and answer your questions.' },
  { n: '03', title: 'Visit the School', text: 'See the classrooms, meet teachers and experience Al-Fitrah first-hand.' },
  { n: '04', title: 'Complete Admission', text: 'Finalise documentation and secure your child\u2019s seat.' },
]

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // [CONFIRM] Wire this up to the school's actual form backend / CRM / email service.
    setSubmitted(true)
  }

  return (
    <>
      <PageMeta
        title="Admissions | Al-Fitrah Islamic Preschool Thalassery"
        description="Start your child's admission enquiry at Al-Fitrah Islamic Preschool in Thalassery. Learn about our simple 4-step admission process."
      />
      <PageHero
        eyebrow="Admissions"
        title="Give your child a beautiful beginning"
        lead="We keep the admission process simple and personal — here's what to expect."
      />

      <section className="section admissions-steps">
        <div className="container admissions-steps__grid">
          {STEPS.map((s) => (
            <div className="admissions-steps__card" key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tinted admissions-form-section">
        <div className="container admissions-form-section__grid">
          <div className="admissions-form-section__intro">
            <h2>Start Admission Enquiry</h2>
            <p>Share a few details and our admissions team will get in touch. We'll contact you regarding your enquiry.</p>
            <div className="admissions-form-section__alt">
              <a href={`tel:${SCHOOL.primaryPhoneRaw}`} className="btn btn-outline">Call {SCHOOL.primaryPhone}</a>
              <a href={`tel:${SCHOOL.secondaryPhoneRaw}`} className="btn btn-outline">Call {SCHOOL.secondaryPhone}</a>
              <a href={`https://wa.me/${SCHOOL.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp Us</a>
            </div>
          </div>

          <form className="admissions-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="admissions-form__success">
                <h3>Thank you!</h3>
                <p>Your enquiry has been received. We'll contact you regarding your enquiry shortly.</p>
              </div>
            ) : (
              <>
                <div className="admissions-form__row">
                  <label>
                    Parent Name
                    <input type="text" name="parentName" required />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" name="phone" required />
                  </label>
                </div>
                <div className="admissions-form__row">
                  <label>
                    Email
                    <input type="email" name="email" />
                  </label>
                  <label>
                    Child Name
                    <input type="text" name="childName" required />
                  </label>
                </div>
                <div className="admissions-form__row">
                  <label>
                    Child Date of Birth
                    <input type="date" name="childDob" />
                  </label>
                  <label>
                    Preferred Program
                    <select name="program" defaultValue="">
                      <option value="" disabled>Select a program</option>
                      <option>Early Years</option>
                      <option>Preschool</option>
                      <option>Level 1</option>
                      <option>Level 2</option>
                      <option>Level 3</option>
                    </select>
                  </label>
                </div>
                <label>
                  Location
                  <input type="text" name="location" placeholder="Your area in / near Thalassery" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} placeholder="Any questions for our admissions team?" />
                </label>
                <button type="submit" className="btn btn-primary admissions-form__submit">Submit Admission Enquiry</button>
              </>
            )}
          </form>
        </div>
      </section>

      <style>{`
        .admissions-steps__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .admissions-steps__card {
          background: var(--white);
          border: 1px solid rgba(27,75,58,0.1);
          border-radius: var(--radius-card);
          padding: 28px 22px;
        }
        .admissions-steps__card span { font-family: var(--font-display); font-size: 1.6rem; color: var(--leaf); }
        .admissions-steps__card h3 { margin-top: 12px; font-size: 1.02rem; }
        .admissions-steps__card p { margin-top: 8px; color: var(--ink-soft); font-size: 0.88rem; }

        .admissions-form-section__grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
        }
        .admissions-form-section__intro h2 { font-size: clamp(1.7rem, 2.6vw, 2.2rem); }
        .admissions-form-section__intro p { margin-top: 14px; color: var(--ink-soft); }
        .admissions-form-section__alt { display: flex; gap: 12px; margin-top: 26px; flex-wrap: wrap; }

        .admissions-form {
          background: var(--white);
          padding: 32px;
          border-radius: var(--radius-card);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .admissions-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
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
          font-size: 0.94rem;
          padding: 11px 14px;
          border-radius: var(--radius-soft);
          border: 1.5px solid rgba(27,75,58,0.2);
          background: var(--ivory);
        }
        .admissions-form input:focus,
        .admissions-form select:focus,
        .admissions-form textarea:focus {
          outline: none;
          border-color: var(--leaf);
        }
        .admissions-form__submit { margin-top: 6px; align-self: flex-start; }
        .admissions-form__success h3 { font-size: 1.3rem; }
        .admissions-form__success p { margin-top: 10px; color: var(--ink-soft); }

        @media (max-width: 900px) {
          .admissions-steps__grid { grid-template-columns: 1fr 1fr; }
          .admissions-form-section__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .admissions-steps__grid { grid-template-columns: 1fr; }
          .admissions-form__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
