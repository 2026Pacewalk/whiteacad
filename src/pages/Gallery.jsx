import { Link } from 'react-router-dom'
import { Instagram, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, seo, galleryImages } from '../data/site.js'

export default function Gallery() {
  return (
    <>
      <Seo meta={seo.gallery} />
      <PageHero title="Gallery" crumbs={[{ label: 'Gallery' }]} />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((g, i) => (
              <Reveal className="gallery-item" key={g.src} delay={(i % 3) * 70}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 34 }}>
            <a className="btn btn-primary" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram aria-hidden="true" /> Follow us on Instagram
            </a>
            <Link className="btn btn-outline" to="/results" style={{ marginLeft: 12 }}>
              See Our Results <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
