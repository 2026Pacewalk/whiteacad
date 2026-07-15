import { Link } from 'react-router-dom'
import {
  ChevronRight, MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle,
  Map as MapIcon, FileCode2, Navigation, ArrowRight,
} from 'lucide-react'
import PlayStoreIcon from './PlayStoreIcon.jsx'
import BackToTop from './BackToTop.jsx'
import { site, courseList, googleReviews } from '../data/site.js'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Results', to: '/results' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Decorative brand glow */}
      <span className="footer__glow" aria-hidden="true" />

      {/* Slim conversion strip — present on every page */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-copy">
            <span className="pill-live"><span className="dot" aria-hidden="true" /> Admissions Open</span>
            <p>Book a free counselling session and find the right batch for your goal.</p>
          </div>
          <div className="footer__cta-actions">
            <a className="btn btn-primary btn-sm" href={`tel:${site.phone}`}>
              <Phone aria-hidden="true" /> Call {site.phoneDisplay}
            </a>
            <a className="btn btn-wa btn-sm" href={site.social.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img src={site.logo} alt="Whitehawk Academy logo" width="120" height="105" />
            <p>
              We provide a knowledge bridge between school and dream colleges — training youth for
              IIT-JEE, NEET, NTSE, KVPY &amp; Olympiads with expert faculty and proven results.
            </p>

            <a className="footer__rating" href={googleReviews.profileUrl} target="_blank" rel="noopener noreferrer">
              <strong>{googleReviews.rating}</strong>
              <span className="footer__rating-stars" aria-hidden="true">★★★★★</span>
              <span>{googleReviews.count} Google reviews</span>
            </a>

            <div className="footer__social">
              <a className="is-fb" href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook aria-hidden="true" /></a>
              <a className="is-ig" href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram aria-hidden="true" /></a>
              <a className="is-wa" href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" /></a>
            </div>

            <a className="app-badge" href={site.app.android} target="_blank" rel="noopener noreferrer">
              <PlayStoreIcon size={26} />
              <span>
                <small>Download our app</small>
                <strong>Get it on Google Play</strong>
              </span>
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to}><ChevronRight aria-hidden="true" /> {l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Courses */}
          <nav aria-label="Courses">
            <h4>Our Courses</h4>
            <ul className="footer__links">
              {courseList.map((c) => (
                <li key={c.path}><Link to={c.path}><ChevronRight aria-hidden="true" /> {c.name}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4>Get In Touch</h4>
            <ul className="footer__contact">
              <li><MapPin className="ic" aria-hidden="true" size={17} /> <span>{site.address}</span></li>
              <li><Phone className="ic" aria-hidden="true" size={17} /> <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
              <li><Mail className="ic" aria-hidden="true" size={17} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Clock className="ic" aria-hidden="true" size={17} /> <span>Mon – Sat: 8:00 AM – 8:00 PM</span></li>
            </ul>

            <div className="footer__map">
              <iframe src={site.mapEmbed} title="Whitehawk Academy location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a className="footer__directions" href={googleReviews.profileUrl} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden="true" size={14} /> Get Directions <ArrowRight aria-hidden="true" size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Utility strip — sitemaps get a full-width row instead of a cramped column */}
      <div className="footer__utility">
        <div className="container footer__utility-inner">
          <div className="footer__sitemap-links">
            <Link to="/sitemap"><MapIcon aria-hidden="true" /> HTML Sitemap</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer"><FileCode2 aria-hidden="true" /> View XML Sitemap</a>
          </div>
          <p className="footer__utility-note">Bathinda · Mansa · Muktsar · Faridkot · Barnala</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} {site.name}. All Rights Reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms">Terms of Use</Link>
          </nav>
          <p className="footer__dev">
            Developed by{' '}
            <a href={site.developer.url} target="_blank" rel="noopener noreferrer">{site.developer.name}</a>
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
