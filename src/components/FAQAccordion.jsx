import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-accordion__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <button
              className="faq-accordion__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="faq-accordion__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-accordion__answer">{item.a}</div>}
          </div>
        )
      })}

      <style>{`
        .faq-accordion__item {
          border-bottom: 1px solid rgba(27,75,58,0.14);
        }
        .faq-accordion__question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: none;
          border: none;
          text-align: left;
          padding: 20px 4px;
          font-weight: 700;
          font-size: 1.02rem;
          color: var(--green-deep-ink);
          cursor: pointer;
        }
        .faq-accordion__icon {
          font-size: 1.3rem;
          color: var(--white);
          flex-shrink: 0;
        }
        .faq-accordion__answer {
          padding: 0 4px 22px;
          color: var(--ink);
          font-size: 0.96rem;
          max-width: 68ch;
        }
      `}</style>
    </div>
  )
}
