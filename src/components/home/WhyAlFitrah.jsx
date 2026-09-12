const CARDS = [
  {
    icon: '📖',
    tag: 'Nour Al Bayan',
    title: 'Quranic Foundation',
    text: 'Age-appropriate Quran reading built on the Nour Al Bayan wel Fathurabbani method, so children begin their relationship with the Quran early and joyfully.',
    colorType: 'blue',
  },
  {
    icon: '🔤',
    tag: 'Phonics & Math',
    title: 'Academic Readiness',
    text: 'English, Mathematics and EVS taught alongside Quranic learning, giving children a well-rounded start before formal schooling.',
    colorType: 'green',
  },
  {
    icon: '🌙',
    tag: 'Daily Adab',
    title: 'Islamic Values',
    text: 'Everyday routines are woven with Islamic tenets, helping children understand faith in ways that feel natural and age-appropriate.',
    colorType: 'emerald',
  },
  {
    icon: '🤝',
    tag: 'Values & Care',
    title: 'Character Development',
    text: 'Kindness, honesty, sharing and respect are nurtured alongside academics, because how a child grows matters as much as what they learn.',
    colorType: 'coral',
  },
  {
    icon: '🧩',
    tag: 'Guided Play',
    title: 'Learning Through Play',
    text: 'Children explore concepts through hands-on activities and guided play, building understanding at their own pace.',
    colorType: 'gold',
  },
  {
    icon: '🎨',
    tag: 'Self Expression',
    title: 'Creativity & Exploration',
    text: 'Art, storytelling and imaginative play give children room to express themselves and discover their own instincts.',
    colorType: 'purple',
  },
]

export default function WhyAlFitrah() {
  return (
    <section className="section why">
      <div className="container">
        <div className="why__head">
          <div className="leaf-divider">
            <LeafIcon />
            <span className="eyebrow">Why Al-Fitrah</span>
          </div>
          <h2>More than preschool. A foundation for life.</h2>
          <p>
            The early years are formative — children develop habits, confidence and
            attitudes that shape how they learn for years to come. Al-Fitrah brings
            together six pillars to support that foundation.
          </p>
        </div>

        <div className="why__grid">
          {CARDS.map((card) => (
            <div
              className={`why__card why__card--${card.colorType}`}
              key={card.title}
            >
              <div className="why__card-top">
                <span className={`why__icon why__icon--${card.colorType}`} aria-hidden="true">
                  {card.icon}
                </span>
                <span className="why__card-tag">{card.tag}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why {
          position: relative;
        }
        .why__head { max-width: 660px; margin-bottom: 48px; }
        .why__head h2 {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          margin-top: 10px;
          letter-spacing: -0.01em;
        }
        .why__head p {
          margin-top: 16px;
          color: var(--ink-soft);
          font-size: 1.08rem;
          line-height: 1.6;
        }
        .why__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .why__card {
          border-radius: var(--radius-card);
          padding: 34px 28px;
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.08);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        .why__card::before {
          display: none;
        }
        .why__card:hover {
          transform: translateY(-6px);
        }

        /* Distinct Colorful Cards for Kids Theme */
        .why__card--blue {
          background: #f3edfb;
          border: 1px solid #d8c5ee;
        }
        .why__card--blue::before {
          background: var(--green-emerald);
        }
        .why__card--blue:hover {
          box-shadow: 0 20px 40px -14px rgba(56, 189, 248, 0.35);
        }

        .why__card--green {
          background: #eee4f8;
          border: 1px solid #d8c5ee;
        }
        .why__card--green::before {
          background: #8a65b5;
        }
        .why__card--green:hover {
          box-shadow: 0 20px 40px -14px rgba(74, 222, 128, 0.35);
        }

        .why__card--emerald {
          background: var(--grad-emerald);
          border: 1px solid rgba(27, 75, 58, 0.3);
          box-shadow: 0 14px 34px -12px rgba(18, 51, 40, 0.4);
        }
        .why__card--emerald::before {
          background: var(--gold);
        }
        .why__card--emerald:hover {
          box-shadow: 0 22px 48px -12px rgba(18, 51, 40, 0.6);
        }
        .why__card--emerald h3 { color: #FFEBA3 !important; }
        .why__card--emerald p { color: rgba(251, 246, 236, 0.88) !important; }

        .why__card--coral {
          background: #fff2d2;
          border: 1px solid #f1d58b;
        }
        .why__card--coral::before {
          background: var(--apricot);
        }
        .why__card--coral:hover {
          box-shadow: 0 20px 40px -14px rgba(251, 146, 60, 0.35);
        }

        .why__card--gold {
          background: #fff4c7;
          border: 1px solid #f3d46c;
        }
        .why__card--gold::before {
          background: var(--gold-deep);
        }
        .why__card--gold:hover {
          box-shadow: 0 20px 40px -14px rgba(250, 204, 21, 0.35);
        }

        .why__card--purple {
          background: #f0e8fa;
          border: 1px solid #d8c5ee;
        }
        .why__card--purple::before {
          background: var(--green-deep);
        }
        .why__card--purple:hover {
          box-shadow: 0 20px 40px -14px rgba(192, 132, 252, 0.35);
        }
        
        .why__card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .why__card-tag {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.85);
          color: var(--green-deep-ink);
          padding: 4px 12px;
          border-radius: 100px;
          box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .why__card--emerald .why__card-tag {
          background: rgba(246, 201, 69, 0.25);
          color: var(--gold);
          border-color: rgba(246, 201, 69, 0.4);
        }
        .why__icon {
          display: inline-grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          font-size: 1.5rem;
          box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.15);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .why__card:hover .why__icon {
          transform: scale(1.12) rotate(4deg);
        }
        .why__icon--blue { background: var(--grad-sky); }
        .why__icon--green { background: var(--grad-mint); }
        .why__icon--emerald { background: rgba(251, 246, 236, 0.16); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25); }
        .why__icon--coral { background: var(--grad-peach); }
        .why__icon--gold { background: var(--grad-sun); }
        .why__icon--purple { background: var(--grad-lilac); }

        .why__card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--green-deep-ink);
        }
        .why__card p {
          color: var(--ink-soft);
          font-size: 0.96rem;
          line-height: 1.58;
        }

        @media (max-width: 960px) {
          .why__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 580px) {
          .why__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="#5EA039" />
    </svg>
  )
}
