import { Link } from 'react-router-dom'
import {
  ChevronRight, MapPin, Phone, Mail, Facebook, Instagram, MessageCircle,
  Map as MapIcon, FileCode2,
} from 'lucide-react'
import { site, courseList } from '../data/site.js'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Successful Results', to: '/results' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Sitemap', to: '/sitemap' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img src={site.logo} alt="Whitehawk Academy logo" width="120" height="105" />
            <p>
              We provide a knowledge bridge between school and dream colleges — training youth for
              IIT-JEE, NEET, NTSE, KVPY &amp; Olympiads with expert faculty and proven results.
            </p>
            <div className="footer__social">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook aria-hidden="true" /></a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram aria-hidden="true" /></a>
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" /></a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to}><ChevronRight aria-hidden="true" /> {l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4>Our Courses</h4>
            <ul className="footer__links">
              {courseList.map((c) => (
                <li key={c.path}><Link to={c.path}><ChevronRight aria-hidden="true" /> {c.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Get In Touch</h4>
            <ul className="footer__contact">
              <li><MapPin className="ic" aria-hidden="true" size={18} /> <span>{site.address}</span></li>
              <li><Phone className="ic" aria-hidden="true" size={18} /> <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
              <li><Mail className="ic" aria-hidden="true" size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
            <div className="footer__map">
              <iframe src={site.mapEmbed} title="Whitehawk Academy location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            {/* Sitemap links */}
            <div className="footer__sitemap-links">
              <Link to="/sitemap"><MapIcon aria-hidden="true" /> HTML Sitemap</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer"><FileCode2 aria-hidden="true" /> View XML Sitemap</a>
            </div>
          </div>
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
            <span aria-hidden="true">·</span>
            <Link to="/sitemap">Sitemap</Link>
          </nav>
          <p className="footer__dev">
            Developed by{' '}
            <a href={site.developer.url} target="_blank" rel="noopener noreferrer">{site.developer.name}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
