import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Reveal from '../components/Reveal.jsx'
import { seo, resultImages } from '../data/site.js'

export default function Results() {
  return (
    <>
      <Seo meta={seo.results} />
      <PageHero title="Successful Result" crumbs={[{ label: 'Successful Result' }]} />

      <section className="section">
        <div className="container content-grid">
          <Reveal className="prose">
            <span className="eyebrow">Proud Moments</span>
            <h3>Our Achievers</h3>
            <p>
              Year after year, Whitehawk Academy students secure top ranks and selections across
              IIT-JEE, NEET, NTSE and other competitive examinations. Here are a few of our proud results.
            </p>
            <div className="result-grid" style={{ marginTop: 20 }}>
              {resultImages.map((r) => (
                <img key={r.src} src={r.src} alt={r.alt} loading="lazy" />
              ))}
            </div>
            <div style={{ marginTop: 26 }}>
              <Link className="btn btn-primary" to="/contact">Join the Next Batch <ArrowRight aria-hidden="true" /></Link>
            </div>
          </Reveal>
          <Sidebar />
        </div>
      </section>
    </>
  )
}
