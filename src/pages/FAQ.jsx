import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { FAQS } from '../data/faqs'
import { SCHOOL } from '../data/schoolInfo'

export default function FAQ() {
  return (
    <>
      <PageMeta
        title="FAQ | Al-Fitrah Islamic Preschool Thalassery"
        description="Answers to common questions about Al-Fitrah Islamic Preschool in Thalassery — curriculum, Quranic education, admissions, timings and more."
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything parents ask us most"
        lead="Clear answers about admissions, Nour Al Bayan Quran learning, Oxford academics, daily timings, and preschool life in Thalassery."
      />

      <section className="section faq-page">
        <div className="container faq-page__wrap">
          <div className="faq-page__quick-card">
            <div className="faq-page__quick-copy">
              <span className="sticker-badge">💬 Direct Parent Support</span>
              <h3>Need an immediate answer?</h3>
              <p>Our admissions coordinator is available on WhatsApp to answer your specific questions or arrange a campus visit.</p>
            </div>
            <a
              href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Assalamu%20Alaikum!%20I%20have%20a%20question%20regarding%20Al-Fitrah%20Preschool.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .faq-page {
          padding-top: clamp(32px, 5vw, 60px);
          padding-bottom: clamp(40px, 6vw, 70px);
        }
        .faq-page__wrap {
          max-width: 840px;
          margin: 0 auto;
        }
        .faq-page__quick-card {
          background: linear-gradient(135deg, rgba(218,165,32,0.1), rgba(74,138,90,0.06));
          border: 1px solid rgba(218,165,32,0.3);
          border-radius: var(--radius-card);
          padding: 24px 28px;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .faq-page__quick-copy h3 {
          margin-top: 10px;
          font-size: 1.2rem;
          color: var(--green-deep-ink);
        }
        .faq-page__quick-copy p {
          margin-top: 4px;
          color: var(--ink-soft);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        @media (max-width: 680px) {
          .faq-page__quick-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .faq-page__quick-card .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  )
}
