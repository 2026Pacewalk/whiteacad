import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin,
  Facebook, Instagram, MessageCircle, LogIn, GraduationCap,
  Home, Users, Image as ImageIcon, Trophy,
} from 'lucide-react'
import PlayStoreIcon from './PlayStoreIcon.jsx'
import { site, nav } from '../data/site.js'

// Leading icon for each mobile nav item.
const navIcons = {
  '/': Home,
  '/about': Users,
  '/courses': GraduationCap,
  '/gallery': ImageIcon,
  '/results': Trophy,
  '/contact': Mail,
}

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

  // Auto-expand the Courses group when viewing a course page
  useEffect(() => {
    const courseChildren = nav.find((n) => n.children)?.children || []
    if (courseChildren.some((c) => c.to === pathname)) setCoursesOpen(true)
  }, [pathname])

  // Lock body scroll + ESC to close while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

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

      {/* ---------------- Mobile drawer ---------------- */}
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} hidden={!open} onClick={() => setOpen(false)} />

      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Mobile menu">
        <div className="drawer__top">
          <img src={site.logo} alt="Whitehawk Academy logo" width="120" height="105" />
          <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X aria-hidden="true" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          <p className="drawer__label">Menu</p>

          {nav.map((item, i) => {
            const Icon = navIcons[item.to] || ChevronRight
            const style = { animationDelay: `${60 + i * 45}ms` }

            if (item.children) {
              return (
                <div key={item.label} className="drawer__group">
                  <button
                    className={`drawer__link drawer__accordion-btn ${coursesOpen ? 'is-open' : ''}`}
                    aria-expanded={coursesOpen}
                    onClick={() => setCoursesOpen((v) => !v)}
                    style={style}
                  >
                    <span className="drawer__link-main">
                      <span className="drawer__ic"><Icon aria-hidden="true" size={18} /></span>
                      {item.label}
                    </span>
                    <ChevronDown className={`drawer__chevron ${coursesOpen ? 'open' : ''}`} aria-hidden="true" size={18} />
                  </button>

                  <div className={`drawer__sub ${coursesOpen ? 'open' : ''}`}>
                    <div className="drawer__sub-inner">
                      {item.children.map((c) => (
                        <NavLink key={c.to} to={c.to}>
                          <span className="dot" aria-hidden="true" /> {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="drawer__link" style={style}>
                <span className="drawer__link-main">
                  <span className="drawer__ic"><Icon aria-hidden="true" size={18} /></span>
                  {item.label}
                </span>
                <ChevronRight className="drawer__go" aria-hidden="true" size={16} />
              </NavLink>
            )
          })}
        </nav>

        <div className="drawer__foot">
          <div className="drawer__actions">
            <a className="btn btn-primary" href={`tel:${site.phone}`}>
              <Phone aria-hidden="true" /> Call Now
            </a>
            <a className="btn btn-wa" href={site.social.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
          </div>

          <a className="app-badge app-badge--drawer" href={site.app.android} target="_blank" rel="noopener noreferrer">
            <PlayStoreIcon size={24} />
            <span>
              <small>Download our app</small>
              <strong>Get it on Google Play</strong>
            </span>
          </a>

          <ul className="drawer__contact">
            <li><MapPin aria-hidden="true" size={15} /> <span>{site.addressShort}</span></li>
            <li><Mail aria-hidden="true" size={15} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>

          <div className="drawer__social">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook aria-hidden="true" size={16} /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram aria-hidden="true" size={16} /></a>
            <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" size={16} /></a>
          </div>
        </div>
      </aside>
    </>
  )
}
