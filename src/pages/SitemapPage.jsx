import { Link } from 'react-router-dom'
import { ChevronRight, LayoutGrid, GraduationCap, FileText, FileCode2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { seo, courseList } from '../data/site.js'

const groups = [
  {
    icon: LayoutGrid,
    title: 'Main Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Successful Result', to: '/results' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Courses',
    links: courseList.map((c) => ({ label: c.name, to: c.path })),
  },
  {
    icon: FileText,
    title: 'Resources',
    links: [
      { label: 'HTML Sitemap', to: '/sitemap' },
      { label: 'Student Login', href: 'https://whitehawkacademy.speedlabs.in/LoginWHAB.aspx' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <Seo meta={seo.sitemap} />
      <PageHero title="Sitemap" crumbs={[{ label: 'Sitemap' }]} />

      <section className="section">
        <div className="container">
          <div className="center-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Site Navigation</span>
            <h2 className="section-title">Explore Every <span className="accent">Page</span></h2>
          </div>

          <div className="sitemap-grid">
            {groups.map((g, i) => {
              const Icon = g.icon
              return (
                <Reveal className="sitemap-col" key={g.title} delay={i * 80}>
                  <h3><Icon aria-hidden="true" /> {g.title}</h3>
                  <ul>
                    {g.links.map((l) => (
                      <li key={l.label}>
                        {l.to ? (
                          <Link to={l.to}><ChevronRight aria-hidden="true" /> {l.label}</Link>
                        ) : (
                          <a href={l.href} target="_blank" rel="noopener noreferrer"><ChevronRight aria-hidden="true" /> {l.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>

          <div className="text-center" style={{ marginTop: 34 }}>
            <a className="btn btn-navy" href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              <FileCode2 aria-hidden="true" /> View XML Sitemap
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
