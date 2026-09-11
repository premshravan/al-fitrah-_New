import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

export default function About() {
  return (
    <>
      <PageMeta
        title="About Al-Fitrah Islamic Preschool | Thalassery"
        description="Learn about Al-Fitrah Islamic Preschool in Thalassery — operated by Anjuman Ta'aleemul Qur'an, bringing Quranic education, academics and character development together for young children."
      />
      <PageHero
        eyebrow="About Al-Fitrah"
        title="Our Children's Instincts — Let's Help Them Bloom"
        lead="Al-Fitrah Islamic Preschool is operated by Anjuman Ta'aleemul Qur'an, bringing together Quranic learning, academic foundations and character development for young children in Thalassery."
      />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__image blob">
            <img src="/images/brochure-cover.jpg" alt="Al-Fitrah Islamic Preschool children playing together" />
          </div>
          <div className="about-story__copy">
            <h2>Every child is born with pure instincts</h2>
            <p>
              We believe every child is born with pure instincts, and it's our
              responsibility to preserve and nurture them in a balanced way. Just as
              children need pure air, food and water to thrive, they also need
              thoughtful guidance and upbringing to grow into confident, grounded
              individuals.
            </p>
            <p>
              The years between roughly age 3 and 6 are a crucial period — children
              look at the world around them with openness, ready to absorb whatever
              is taught with love, care and affection. Al-Fitrah was built to meet
              that window with a balanced education that honours Islamic values,
              academic readiness and each child's natural curiosity.
            </p>
            <p>
              Al-Fitrah is part of the wider Nour Al Bayan wel Fathurabbani network
              introduced in India by Anjuman Ta'aleemul Qur'an, adapting a
              Quran-reading method with the additions needed to suit India's
              secular educational fabric — alongside a recognised English, EVS and
              Mathematics curriculum.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tinted about-values">
        <div className="container">
          <h2>What we hold onto</h2>
          <div className="about-values__grid">
            <div>
              <h3>Balanced by design</h3>
              <p>We aim to raise children with a balanced education — upholding Islamic values while preparing them for the world they'll grow up in.</p>
            </div>
            <div>
              <h3>Guided, not rushed</h3>
              <p>Learning happens through repetition, revision and gentle pacing rather than pressure — especially in Quran reading.</p>
            </div>
            <div>
              <h3>Teachers as the foundation</h3>
              <p>Specially trained teachers and ayahs work closely with children in child-friendly classrooms designed for this age group.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .about-story__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .about-story__image { aspect-ratio: 4/5; box-shadow: var(--shadow-soft); }
        .about-story__image img { width: 100%; height: 100%; object-fit: cover; }
        .about-story__copy h2 { font-size: clamp(1.8rem, 3vw, 2.3rem); max-width: 16ch; }
        .about-story__copy p { margin-top: 18px; color: var(--ink-soft); font-size: 1.02rem; }
        .about-values h2 { font-size: clamp(1.8rem, 3vw, 2.3rem); margin-bottom: 36px; }
        .about-values__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .about-values__grid h3 { font-size: 1.1rem; }
        .about-values__grid p { margin-top: 10px; color: var(--ink-soft); font-size: 0.94rem; }

        @media (max-width: 900px) {
          .about-story__grid { grid-template-columns: 1fr; }
          .about-story__image { max-width: 380px; margin: 0 auto; }
          .about-values__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
