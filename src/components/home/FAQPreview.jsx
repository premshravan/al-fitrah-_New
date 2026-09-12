import { Link } from 'react-router-dom'
import FAQAccordion from '../FAQAccordion'
import { FAQS } from '../../data/faqs'

export default function FAQPreview() {
  return (
    <section className="section faq-preview">
      <div className="container faq-preview__grid">
        <div className="faq-preview__intro">
          <div className="leaf-divider"><LeafIcon /><span className="eyebrow">Common Questions</span></div>
          <h2>Answers before you need to ask</h2>
          <p>A few of the questions parents ask most often about Al-Fitrah.</p>
          <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
        </div>
        <FAQAccordion items={FAQS.slice(0, 5)} />
      </div>

      <style>{`
        .faq-preview__grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
        }
        .faq-preview__intro h2 { font-size: clamp(1.7rem, 2.6vw, 2.1rem); margin-top: 10px; max-width: 14ch; }
        .faq-preview__intro p { margin-top: 14px; color: var(--ink-soft); }
        .faq-preview__intro .btn { margin-top: 26px; }

        @media (max-width: 860px) {
          .faq-preview__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}
