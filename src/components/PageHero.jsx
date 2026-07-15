import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'

// Inner-page hero with breadcrumb.
export default function PageHero({ title, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner container">
        <h1>{title}</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/"><Home aria-hidden="true" size={15} /> Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <ChevronRight aria-hidden="true" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
