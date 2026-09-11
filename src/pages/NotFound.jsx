import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found | Al-Fitrah Islamic Preschool" />
      <section className="section not-found">
        <div className="container not-found__inner">
          <span className="eyebrow">404</span>
          <h1>We couldn't find that page</h1>
          <p>The page you're looking for may have moved. Try one of these instead:</p>
          <div className="not-found__links">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/admissions" className="btn btn-outline">Admissions</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        .not-found { padding: 120px 0; text-align: center; }
        .not-found__inner { max-width: 480px; margin: 0 auto; }
        .not-found h1 { font-size: clamp(1.8rem, 3vw, 2.3rem); margin-top: 12px; }
        .not-found p { margin-top: 14px; color: var(--ink-soft); }
        .not-found__links { display: flex; gap: 12px; justify-content: center; margin-top: 32px; flex-wrap: wrap; }
      `}</style>
    </>
  )
}
