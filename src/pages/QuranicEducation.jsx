import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import ProcessFlow from '../components/ProcessFlow'
import FinalCTA from '../components/FinalCTA'

const TOPICS = [
  { title: 'Quran Reading', text: 'Children are guided through the Quran from the beginning, building recognition of letters, sounds and words before moving to full verses.' },
  { title: 'Nour Al Bayan', text: 'A structured method that sequences Quran reading so children progress steadily, revisiting portions for retention.' },
  { title: 'Fathurabbani Methodology', text: 'Paired with Nour Al Bayan, combining Quran practice with English, Mathematics and basic Islamic tenets suited to young learners.' },
  { title: 'Tahajji', text: 'A child-friendly method for introducing the rules of Tajweed gradually, rather than all at once.' },
  { title: 'Tajweed', text: 'Correct pronunciation and recitation rules are built up over time through repetition and gentle correction.' },
  { title: 'Age-Appropriate Pacing', text: 'Each stage is paced for the child\u2019s developmental level rather than a fixed academic calendar.' },
]

export default function QuranicEducation() {
  return (
    <>
      <PageMeta
        title="Quranic Education for Kids in Thalassery | Al-Fitrah"
        description="Al-Fitrah Islamic Preschool in Thalassery teaches age-appropriate Quran reading through the Nour Al Bayan wel Fathurabbani method and the child-friendly Tahajji approach to Tajweed."
      />
      <PageHero
        eyebrow="Quranic Education"
        title="A beautiful beginning with the Quran"
        lead="Quran learning at Al-Fitrah is structured, age-appropriate and built for genuine familiarity — not just memorisation."
      />

      <section className="section quran-pathway">
        <div className="container">
          <h2>The learning pathway</h2>
          <ProcessFlow steps={['Listen', 'Recognize', 'Read', 'Practise', 'Understand', 'Grow']} />
        </div>
      </section>

      <section className="section section--tinted quran-topics">
        <div className="container quran-topics__grid">
          {TOPICS.map((t) => (
            <div className="quran-topics__card" key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section quran-love">
        <div className="container quran-love__inner">
          <h2>Love and connection with the Quran</h2>
          <p>
            Beyond reading accuracy, our goal is for children to develop a warm,
            positive relationship with the Quran from an early age — one built on
            patience, encouragement and consistent, gentle practice rather than
            pressure.
          </p>
          <Link to="/nour-al-bayan" className="btn btn-primary">Learn About Nour Al Bayan</Link>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .quran-pathway h2 { font-size: clamp(1.7rem, 2.6vw, 2.2rem); margin-bottom: 30px; }
        .quran-topics__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .quran-topics__card {
          background: var(--white);
          padding: 26px;
          border-radius: var(--radius-card);
        }
        .quran-topics__card h3 { font-size: 1.05rem; }
        .quran-topics__card p { margin-top: 10px; color: var(--ink-soft); font-size: 0.92rem; }
        .quran-love__inner { max-width: 640px; }
        .quran-love h2 { font-size: clamp(1.7rem, 2.6vw, 2.2rem); }
        .quran-love p { margin-top: 16px; color: var(--ink-soft); font-size: 1.02rem; }
        .quran-love .btn { margin-top: 28px; }

        @media (max-width: 900px) {
          .quran-topics__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .quran-topics__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
