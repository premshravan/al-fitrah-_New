import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import FinalCTA from '../components/FinalCTA'

const QA = [
  {
    q: 'What is Nour Al Bayan?',
    a: 'Nour Al Bayan wel Fathurabbani is a structured system that enables a child to read the Quran completely, from beginning to end, in accordance with the rules of Tajweed — taught through the child-friendly Tahajji method. It was designed by Egyptian scholars in 2003 and has since been adopted in Saudi Arabia, Sudan, the USA, South Africa, Sri Lanka and many other countries.',
  },
  {
    q: 'How does it help young learners?',
    a: 'The method breaks Quran reading into manageable stages suited to a young child\u2019s pace, with children typically completing at least three revisions by the end of their three years at preschool — building genuine retention rather than one-time exposure.',
  },
  {
    q: 'Why is early Quran reading important?',
    a: 'The years from roughly age 3 to 6 are when children most readily absorb what they are taught. Introducing Quran reading during this window, gently and consistently, helps build a lasting connection with the Quran.',
  },
  {
    q: 'How is learning made engaging?',
    a: 'Lessons combine repetition with child-friendly classroom activities, encouragement and a pleasing, comfortable learning environment — rather than rote drilling alone.',
  },
  {
    q: 'How does the child progress?',
    a: 'Children move through the Nour Al Bayan stages alongside their English, Mathematics and EVS learning, with teachers tracking progress and revisiting portions as needed to reinforce retention.',
  },
]

export default function NourAlBayan() {
  return (
    <>
      <PageMeta
        title="Nour Al Bayan Method | Al-Fitrah Islamic Preschool"
        description="Understand the Nour Al Bayan wel Fathurabbani method used at Al-Fitrah Islamic Preschool in Thalassery to build a strong foundation in Quran reading for young children."
      />
      <PageHero
        eyebrow="Nour Al Bayan"
        title="Building a strong foundation in Quran reading"
        lead="A structured, internationally-recognised method for teaching young children to read the Quran, adapted for Al-Fitrah's classrooms in Thalassery."
      />

      <section className="section nab-qa">
        <div className="container nab-qa__stack">
          {QA.map((item) => (
            <div className="nab-qa__row" key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tinted nab-origin">
        <div className="container nab-origin__inner">
          <h2>Where the method comes from</h2>
          <p>
            Al-Fitrah, operated by Anjuman Ta'aleemul Qur'an, introduced this system
            in India in June 2012, adapting it with the additions needed to suit
            India's secular educational fabric — alongside an English, EVS and
            Mathematics curriculum built around Oxford University Press materials.
          </p>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .nab-qa__stack { display: flex; flex-direction: column; gap: 34px; max-width: 800px; }
        .nab-qa__row h2 { font-size: 1.3rem; }
        .nab-qa__row p { margin-top: 12px; color: var(--ink-soft); font-size: 1rem; }
        .nab-origin__inner { max-width: 700px; }
        .nab-origin h2 { font-size: clamp(1.6rem, 2.6vw, 2.1rem); }
        .nab-origin p { margin-top: 16px; color: var(--ink-soft); font-size: 1.02rem; }
      `}</style>
    </>
  )
}
