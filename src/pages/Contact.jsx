import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site, seo } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <Seo meta={seo.contact} />
      <PageHero title="Contact Us" crumbs={[{ label: 'Contact Us' }]} />

      <section className="section">
        <div className="container content-grid" style={{ gridTemplateColumns: '1fr 1.1fr' }}>
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="section-title" style={{ marginBottom: 22 }}>We’d Love to <span className="accent">Hear From You</span></h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="ic"><MapPin aria-hidden="true" /></div>
                <div><h4>Address</h4><p>{site.address}</p></div>
              </div>
              <div className="contact-card">
                <div className="ic"><Phone aria-hidden="true" /></div>
                <div><h4>Phone</h4><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
              </div>
              <div className="contact-card">
                <div className="ic"><Mail aria-hidden="true" /></div>
                <div><h4>Email</h4><a href={`mailto:${site.email}`}>{site.email}</a></div>
              </div>
              <div className="contact-card">
                <div className="ic"><Clock aria-hidden="true" /></div>
                <div><h4>Timings</h4><p>Mon – Sat: 8:00 AM – 8:00 PM</p></div>
              </div>
            </div>
            <iframe className="map-frame" src={site.mapEmbed} title="Whitehawk Academy location on Google Maps" loading="lazy" style={{ marginTop: 18 }} referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>

          <Reveal className="side-card side-form" delay={100}>
            <EnquiryForm variant="contact" title="Send Us a Message" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
