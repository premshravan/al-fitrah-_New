import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { FAQS } from '../data/faqs'

export default function FAQ() {
  return (
    <>
      <PageMeta
        title="FAQ | Al-Fitrah Islamic Preschool Thalassery"
        description="Answers to common questions about Al-Fitrah Islamic Preschool in Thalassery — curriculum, Quranic education, admissions, timings and more."
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions parents ask us most"
        lead="Can't find what you're looking for? Reach out to our admissions team directly."
      />

      <section className="section faq-page">
        <div className="container faq-page__wrap">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .faq-page__wrap { max-width: 800px; margin: 0 auto; }
      `}</style>
    </>
  )
}
