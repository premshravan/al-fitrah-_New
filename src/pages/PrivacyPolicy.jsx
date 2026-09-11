import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy | Al-Fitrah Islamic Preschool" />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ color: 'var(--ink-soft)' }}>
            [CONFIRM] This page is a placeholder. Replace with Al-Fitrah's actual
            privacy policy — covering what information is collected through the
            admission enquiry form, how it is stored and used, and how parents can
            request its removal — before the site goes live.
          </p>
        </div>
      </section>
    </>
  )
}
