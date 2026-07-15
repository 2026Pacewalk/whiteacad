import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'

const meta = {
  path: '/404',
  title: 'Page Not Found | Whitehawk Academy',
  description: 'Sorry, the page you are looking for does not exist or has moved.',
  image: '/images/slider-1.jpg',
}

export default function NotFound() {
  return (
    <>
      <Seo meta={meta} noindex />
      <PageHero title="404 — Page Not Found" crumbs={[{ label: '404' }]} />
      <section className="section">
        <div className="container text-center">
          <p className="lead" style={{ margin: '0 auto 24px' }}>
            Sorry, the page you’re looking for doesn’t exist or has moved.
          </p>
          <Link className="btn btn-primary" to="/"><Home aria-hidden="true" /> Back to Home</Link>
        </div>
      </section>
    </>
  )
}
