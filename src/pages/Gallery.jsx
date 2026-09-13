import { useState, useEffect, useCallback } from 'react'
import PageMeta from '../components/PageMeta'
import PageHero from '../components/PageHero'
import CurvedWave from '../components/CurvedWave'
import FinalCTA from '../components/FinalCTA'
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '../data/galleryPhotos'
import { SCHOOL } from '../data/schoolInfo'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory)

  const openLightbox = (index) => {
    setActivePhotoIndex(index)
  }

  const closeLightbox = () => {
    setActivePhotoIndex(null)
  }

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation()
    setActivePhotoIndex((prev) => (prev === null ? null : (prev + 1) % filteredPhotos.length))
  }, [filteredPhotos.length])

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation()
    setActivePhotoIndex((prev) => (prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length))
  }, [filteredPhotos.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePhotoIndex, showNext, showPrev])

  return (
    <>
      <PageMeta
        title="Photo Gallery | Al-Fitrah Islamic Preschool Thalassery"
        description="Explore memorable moments from our convocation ceremonies, annual celebrations, stage performances, awards and classroom learning at Al-Fitrah Islamic Preschool."
      />
      
      <PageHero
        eyebrow="Moments & Milestones"
        title="Life and Celebrations at Al-Fitrah"
        lead="A vibrant window into our students' journeys — graduation convocations, stage performances, academic awards, and everyday joyful discovery in Thalassery."
      />

      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === cat).length

              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  className={`gallery-filter-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat)
                    setActivePhotoIndex(null)
                  }}
                >
                  <span>{cat}</span>
                  <span className="gallery-filter-count">{count}</span>
                </button>
              )
            })}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid" role="region" aria-label="Photos grid">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id || photo.src}
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-card__media">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                  />
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__badge">{photo.category}</span>
                    <h3 className="gallery-card__title">{photo.title}</h3>
                    <span className="gallery-card__zoom-hint">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
          onClick={closeLightbox}
        >
          <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__meta">
              <span className="lightbox__pill">{filteredPhotos[activePhotoIndex].category}</span>
              <span className="lightbox__counter">
                {activePhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
            <button
              className="lightbox__close"
              aria-label="Close lightbox"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous photo"
              onClick={showPrev}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="lightbox__image-wrap">
              <img
                src={filteredPhotos[activePhotoIndex].src}
                alt={filteredPhotos[activePhotoIndex].alt}
                className="lightbox__image"
              />
              <div className="lightbox__caption">
                <h4>{filteredPhotos[activePhotoIndex].title}</h4>
                <p>{filteredPhotos[activePhotoIndex].alt}</p>
                <div className="lightbox__actions">
                  <a
                    href={`https://wa.me/${SCHOOL.whatsappRaw}?text=Hello,%20I%20saw%20this%20gallery%20photo%20(${encodeURIComponent(filteredPhotos[activePhotoIndex].title)})%20and%20would%20like%20to%20know%20more%20about%20admissions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox__wa-btn"
                  >
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <button
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next photo"
              onClick={showNext}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}

      <CurvedWave color="gold" bg="ivory" />

      <FinalCTA />

      <style>{`
        .gallery-section {
          padding-top: 24px;
        }
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 40px;
        }
        .gallery-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid rgba(27, 75, 58, 0.15);
          background: var(--white);
          color: var(--green-deep-ink);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: 0 4px 14px -6px rgba(18, 51, 40, 0.08);
        }
        .gallery-filter-btn:hover {
          border-color: var(--leaf);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -8px rgba(18, 51, 40, 0.18);
        }
        .gallery-filter-btn.is-active {
          background: var(--green-deep);
          color: var(--ivory);
          border-color: transparent;
          box-shadow: 0 10px 24px -8px rgba(18, 51, 40, 0.45);
        }
        .gallery-filter-count {
          font-size: 0.76rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 50px;
          background: rgba(27, 75, 58, 0.08);
          color: inherit;
        }
        .gallery-filter-btn.is-active .gallery-filter-count {
          background: rgba(240, 178, 58, 0.35);
          color: #FFE59E;
        }

        /* Responsive Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 22px;
        }

        .gallery-card {
          position: relative;
          border-radius: var(--radius-card);
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 10px 30px -15px rgba(18, 51, 40, 0.16), 0 0 0 1px rgba(27, 75, 58, 0.06);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
        }
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -16px rgba(18, 51, 40, 0.3), 0 0 0 1px rgba(240, 178, 58, 0.35);
        }

        .gallery-card__media {
          position: relative;
          aspect-ratio: 4 / 3.2;
          overflow: hidden;
          background: var(--ivory-deep);
        }
        .gallery-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .gallery-card:hover .gallery-card__media img {
          transform: scale(1.08);
        }

        .gallery-card__overlay {
          position: absolute;
          inset: 0;
          background: rgba(48, 32, 71, 0.82);
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          transition: opacity 0.26s ease;
        }
        .gallery-card:hover .gallery-card__overlay {
          opacity: 1;
        }

        .gallery-card__badge {
          align-self: flex-start;
          background: rgba(240, 178, 58, 0.95);
          color: var(--green-deep-ink);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 100px;
          margin-bottom: 8px;
        }

        .gallery-card__title {
          color: var(--ivory);
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .gallery-card__zoom-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: rgba(251, 246, 236, 0.82);
          font-weight: 600;
        }
        .gallery-card__zoom-hint svg {
          width: 14px;
          height: 14px;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(10, 32, 24, 0.96);
          backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          padding: 20px;
          overflow: hidden;
        }

        .lightbox__bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto 12px;
          padding: 0 10px;
        }

        .lightbox__meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .lightbox__pill {
          background: var(--gold);
          color: var(--green-deep-ink);
          font-weight: 700;
          font-size: 0.78rem;
          padding: 4px 12px;
          border-radius: 100px;
        }
        .lightbox__counter {
          color: rgba(251, 246, 236, 0.75);
          font-size: 0.88rem;
          font-weight: 600;
        }
        .lightbox__close {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--ivory);
          font-size: 2rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          line-height: 1;
          transition: all 0.18s ease;
        }
        .lightbox__close:hover {
          background: var(--apricot);
          color: var(--white);
          transform: rotate(90deg);
        }

        .lightbox__content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          min-height: 0;
        }

        .lightbox__image-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: 100%;
          max-width: 90%;
        }

        .lightbox__image {
          max-width: 100%;
          max-height: calc(82vh - 130px);
          object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7);
        }

        .lightbox__caption {
          margin-top: 14px;
          text-align: center;
          color: var(--ivory);
          max-width: 640px;
        }
        .lightbox__caption h4 {
          color: var(--ivory);
          font-size: 1.2rem;
          margin-bottom: 4px;
        }
        .lightbox__caption p {
          font-size: 0.88rem;
          color: rgba(251, 246, 236, 0.78);
          margin-bottom: 12px;
        }
        .lightbox__actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .lightbox__wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 20px -6px rgba(18, 140, 126, 0.6);
          transition: transform 0.18s ease;
        }
        .lightbox__wa-btn:hover {
          transform: scale(1.04);
        }

        .lightbox__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: var(--ivory);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .lightbox__nav svg {
          width: 24px;
          height: 24px;
        }
        .lightbox__nav:hover {
          background: var(--gold);
          color: var(--green-deep-ink);
          transform: translateY(-50%) scale(1.1);
        }
        .lightbox__nav--prev {
          left: 0;
        }
        .lightbox__nav--next {
          right: 0;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .gallery-card__overlay {
            opacity: 1;
            background: linear-gradient(
              180deg,
              rgba(48, 32, 71, 0) 28%,
              rgba(48, 32, 71, 0.12) 48%,
              rgba(48, 32, 71, 0.86) 100%
            );
            padding: 12px;
          }
          .gallery-card__title {
            font-size: 0.86rem;
          }
          .gallery-card__badge {
            font-size: 0.65rem;
            padding: 2px 8px;
          }
          .gallery-card__zoom-hint {
            display: none;
          }
          .lightbox__nav {
            width: 40px;
            height: 40px;
          }
          .lightbox__nav svg {
            width: 20px;
            height: 20px;
          }
          .lightbox__image-wrap {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-card__media {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </>
  )
}
