import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail,
  Facebook, Instagram, MessageCircle, LogIn, GraduationCap,
} from 'lucide-react'
import { site, nav } from '../data/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const { pathname } = useLocation()

  // Shrink / add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll + ESC to close while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  const courses = nav.find((n) => n.children)?.children || []

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={`tel:${site.phone}`}><Phone aria-hidden="true" size={14} /> {site.phoneDisplay}</a>
            <a className="email-item" href={`mailto:${site.email}`}><Mail aria-hidden="true" size={14} /> {site.email}</a>
          </div>
          <div className="topbar__social">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook aria-hidden="true" /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram aria-hidden="true" /></a>
            <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <div className="container navbar__inner">
            <Link to="/" className="brand" aria-label="Whitehawk Academy — home">
              <img src={site.logo} alt="Whitehawk Academy — IIT, NEET & NTSE coaching in Bathinda logo" width="120" height="105" />
            </Link>

            <nav className="nav-links" aria-label="Primary">
              {nav.map((item) =>
                item.children ? (
                  <div className="nav-item" key={item.label}>
                    <NavLink to={item.to} className="nav-link">
                      {item.label} <ChevronDown aria-hidden="true" />
                    </NavLink>
                    <div className="dropdown" role="menu">
                      {item.children.map((c) => (
                        <NavLink key={c.to} to={c.to} role="menuitem">
                          <GraduationCap aria-hidden="true" /> {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.to} to={item.to} className="nav-link" end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="header-cta">
              <a className="btn btn-primary btn-sm" href={site.studentLogin} target="_blank" rel="noopener noreferrer">
                <LogIn aria-hidden="true" /> Student Login
              </a>
              <button className="hamburger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
                <Menu aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} hidden={!open} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Mobile menu">
        <div className="drawer__top">
          <img src={site.logo} alt="Whitehawk Academy logo" width="120" height="105" />
          <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X aria-hidden="true" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item, i) =>
            item.children ? (
              <div key={item.label} style={{ animationDelay: `${i * 45}ms` }}>
                <button
                  className="drawer__link drawer__accordion-btn"
                  aria-expanded={coursesOpen}
                  onClick={() => setCoursesOpen((v) => !v)}
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  {item.label}
                  <ChevronDown className={`drawer__chevron ${coursesOpen ? 'open' : ''}`} aria-hidden="true" size={18} />
                </button>
                {coursesOpen && (
                  <div className="drawer__sub">
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to}>
                        <ChevronRight aria-hidden="true" /> {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="drawer__link"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {item.label}
                <ChevronRight aria-hidden="true" size={16} />
              </NavLink>
            ),
          )}
        </nav>

        <div className="drawer__foot">
          <a className="btn btn-primary" href={site.studentLogin} target="_blank" rel="noopener noreferrer">
            <LogIn aria-hidden="true" /> Student Login
          </a>
          <div className="drawer__contact">
            <a href={`tel:${site.phone}`}><Phone aria-hidden="true" /> {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}><Mail aria-hidden="true" /> {site.email}</a>
          </div>
        </div>
      </aside>
    </>
  )
}
