import { Link } from 'react-router-dom'
import { GALLERY_PHOTOS } from '../../data/galleryPhotos'

export default function GalleryPreview() {
  // Select top featured highlights to showcase on the home page
  const previewPhotos = GALLERY_PHOTOS.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="section gallery-preview">
      <div className="container">
        <div className="gallery-preview__header">
          <div>
            <div className="leaf-divider">
              <LeafIcon /> <span className="eyebrow">Life at Al-Fitrah</span>
            </div>
            <h2 className="gallery-preview__title">
              Moments of Joy, Confidence &amp; Growth
            </h2>
            <p className="gallery-preview__subtitle">
              From our ceremonial graduation convocations to creative stage performances and everyday Islamic learning — see how our young learners flourish.
            </p>
          </div>
          <Link to="/gallery" className="btn btn-primary gallery-preview__more-btn">
            View All 30 Photos →
          </Link>
        </div>

        <div className="gallery-preview__grid">
          {previewPhotos.map((photo) => (
            <Link
              to="/gallery"
              key={photo.id || photo.src}
              className="gallery-preview__card"
            >
              <div className="gallery-preview__image-wrap">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
                <div className="gallery-preview__overlay">
                  <span className="gallery-preview__badge">{photo.category}</span>
                  <p className="gallery-preview__card-title">{photo.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="gallery-preview__footer-mobile">
          <Link to="/gallery" className="btn btn-primary">
            Explore Full Photo Gallery (30 Photos) →
          </Link>
        </div>
      </div>

      <style>{`
        .gallery-preview {
          background: #eee4f8;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
        }
        .gallery-preview::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(118, 82, 168, 0.16);
          top: -100px;
          right: -100px;
          pointer-events: none;
        }
        .gallery-preview::after {
          content: '';
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: rgba(246, 201, 69, 0.2);
          bottom: -80px;
          left: -80px;
          pointer-events: none;
        }
        .gallery-preview__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .gallery-preview__title {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          margin-top: 10px;
          max-width: 20ch;
        }
        .gallery-preview__subtitle {
          margin-top: 12px;
          font-size: 1.05rem;
          color: var(--ink-soft);
          max-width: 52ch;
        }
        .gallery-preview__more-btn {
          flex-shrink: 0;
        }
        .gallery-preview__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .gallery-preview__card {
          text-decoration: none;
          color: inherit;
          display: block;
          border-radius: var(--radius-card);
          overflow: hidden;
          background: var(--white);
          box-shadow: var(--shadow-card);
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
        }
        .gallery-preview__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -15px rgba(18, 51, 40, 0.25), 0 0 0 1px rgba(240, 178, 58, 0.3);
        }
        .gallery-preview__image-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .gallery-preview__image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-preview__card:hover .gallery-preview__image-wrap img {
          transform: scale(1.06);
        }
        .gallery-preview__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(48, 32, 71, 0.82) 0%,
            rgba(48, 32, 71, 0.42) 42%,
            rgba(48, 32, 71, 0) 72%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 18px;
        }
        .gallery-preview__badge {
          align-self: flex-start;
          background: var(--gold);
          color: var(--green-deep-ink);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          border-radius: 100px;
          margin-bottom: 6px;
        }
        .gallery-preview__card-title {
          color: var(--ivory);
          font-weight: 700;
          font-size: 0.95rem;
          line-height: 1.3;
        }
        .gallery-preview__footer-mobile {
          display: none;
          text-align: center;
          margin-top: 28px;
        }

        @media (max-width: 960px) {
          .gallery-preview__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .gallery-preview__grid {
            grid-template-columns: 1fr;
          }
          .gallery-preview__more-btn {
            display: none;
          }
          .gallery-preview__footer-mobile {
            display: block;
          }
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
