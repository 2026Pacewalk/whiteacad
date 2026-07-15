import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, GraduationCap, Presentation, PhoneCall, ArrowRight, Eye, Flag,
  Smile, Users, Trophy, BookMarked, Quote, Star, Check, Sparkles,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import {
  site, seo, slides, features, stats, testimonials, courseList, galleryImages,
} from '../data/site.js'

const featureIcons = { BookOpen, GraduationCap, Presentation, PhoneCall }
const statIcons = [Smile, Users, Trophy, BookMarked]

export default function Home() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
    logo: site.url + site.logo,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Model Town Phase-3, Opp. Dadi Poti Park',
      addressLocality: 'Bathinda',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    sameAs: [site.social.facebook, site.social.instagram],
  }

  return (
    <>
      <Seo meta={seo.home} jsonLd={jsonLd} />

      {/* Hero */}
      <section className="hero" aria-roledescription="carousel" aria-label="Highlights">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero__slide ${i === active ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
            role="img"
            aria-label={s.alt}
            aria-hidden={i !== active}
          />
        ))}
        <div className="hero__wrap">
          <div className="container">
            <div className="hero__inner">
              <span className="hero__kicker"><span className="dot" /> {slides[active].kicker}</span>
              <h1 className="hero__title">
                {slides[active].title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="accent">{slides[active].title.split(' ').slice(-1)}</span>
              </h1>
              <p className="hero__text">{slides[active].text}</p>
              <div className="hero__actions">
                <Link className="btn btn-primary" to="/contact">Book Free Counselling <ArrowRight aria-hidden="true" /></Link>
                <Link className="btn btn-ghost" to="/about">Explore Courses</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={i === active ? 'active' : ''} aria-label={`Go to slide ${i + 1}`} aria-current={i === active} onClick={() => setActive(i)} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section section--tight">
        <div className="container">
          <div className="feature-grid">
            {features.map((f, i) => {
              const Icon = featureIcons[f.icon]
              return (
                <Reveal className="feature-card" key={f.title} delay={i * 80}>
                  <div className="feature-icon"><Icon aria-hidden="true" /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-media">
            <img src="/images/about-2.jpg" alt="Whitehawk Academy faculty guiding students in Bathinda" width="560" height="440" loading="lazy" />
            <div className="about-badge"><b>10+</b><span>Years of Excellence</span></div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">Welcome to Whitehawk Academy</span>
            <h2 className="section-title">Building <span className="accent">Beautiful Minds</span> in Bathinda</h2>
            <blockquote>{site.tagline}.</blockquote>
            <p className="lead" style={{ marginBottom: 6 }}>
              We provide a knowledge bridge between school and dream colleges — training youth for
              IIT-JEE, NEET, NTSE, KVPY &amp; Olympiads. We recognise every student’s strengths and
              give equal personal attention so each career gets a bright shape.
            </p>
            <div className="vm-grid">
              <div className="vm-card">
                <div className="ic"><Eye aria-hidden="true" size={20} /></div>
                <h4>Our Vision</h4>
                <p>Excellence and leadership in quality education, where ambitions are achieved and values are built.</p>
              </div>
              <div className="vm-card">
                <div className="ic"><Flag aria-hidden="true" size={20} /></div>
                <h4>Our Mission</h4>
                <p>To advance knowledge and develop competent students with good values for a changing world.</p>
              </div>
            </div>
            <Link className="btn btn-navy" to="/about">More About Us <ArrowRight aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="center-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What We Offer</span>
            <h2 className="section-title">Our <span className="accent">Courses</span></h2>
            <p className="lead" style={{ margin: '10px auto 0' }}>Structured programmes for every stage — from foundation to final entrance exams.</p>
          </div>
          <div className="course-grid">
            {courseList.map((c, i) => (
              <Reveal className="course-card" key={c.slug} delay={i * 80}>
                <Link to={c.path} className="course-card__media" aria-label={c.name}>
                  <img src={c.image} alt={c.alt} loading="lazy" />
                  <span className="course-card__tag">{c.exams.split(',')[0]}</span>
                </Link>
                <div className="course-card__body">
                  <h3>{c.name}</h3>
                  <p>{c.intro.slice(0, 92)}…</p>
                  <Link to={c.path} className="course-card__link">View Details <ArrowRight aria-hidden="true" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section why">
        <div className="container why__grid">
          <Reveal>
            <span className="eyebrow" style={{ color: '#ff738a' }}>Why Whitehawk</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Why Students <span className="accent">Choose Us</span></h2>
            <div className="why__list">
              <div className="why__item">
                <div className="ic"><Eye aria-hidden="true" /></div>
                <div><h4>Result-Oriented Teaching</h4><p>“Education is not the learning of facts, but the training of the mind to think.” We teach the way students learn.</p></div>
              </div>
              <div className="why__item">
                <div className="ic"><Users aria-hidden="true" /></div>
                <div><h4>Personal Attention</h4><p>We recognise the strengths and weaknesses of every student and mentor them individually.</p></div>
              </div>
              <div className="why__item">
                <div className="ic"><Sparkles aria-hidden="true" /></div>
                <div><h4>Smart Classrooms</h4><p>Technology-enabled smart classes, quality study material and regular test series.</p></div>
              </div>
            </div>
          </Reveal>
          <Reveal className="why__media" delay={120}>
            <img src="/images/why-right-bg.jpg" alt="Whitehawk Academy smart classroom and learning environment" width="560" height="440" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats">
        <div className="container">
          <div className="stat-grid">
            {stats.map((s, i) => {
              const Icon = statIcons[i]
              return (
                <Reveal className="stat-card" key={s.label} delay={i * 70}>
                  <div className="ic"><Icon aria-hidden="true" /></div>
                  <Counter value={s.value} suffix={s.suffix} />
                  <div className="lbl">{s.label}</div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration + Testimonials */}
      <section className="section testi">
        <div className="container">
          <div className="center-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center', color: '#ff738a' }}>Testimonials</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Our Students <span className="accent">Say</span></h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <Reveal className="testi-card" key={t.name} delay={i * 80}>
                <Quote className="quote-ic" aria-hidden="true" />
                <p>“{t.quote}”</p>
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} aria-hidden="true" />)}
                </div>
                <div className="who">
                  <div className="avatar">{t.name[0]}</div>
                  <div><b>{t.name}</b><span>{t.role}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="container">
          <div className="center-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Moments</span>
            <h2 className="section-title">Our <span className="accent">Gallery</span></h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.slice(0, 3).map((g) => (
              <Reveal className="gallery-item" key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 28 }}>
            <Link className="btn btn-outline" to="/gallery">View Full Gallery <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CTA + quick form */}
      <section className="section section--tight">
        <div className="container">
          <div className="content-grid" style={{ gridTemplateColumns: '1.2fr 1fr', alignItems: 'center' }}>
            <Reveal className="cta-band" style={{ margin: 0 }}>
              <div>
                <h2>Ready to Start Your Journey?</h2>
                <p>Book a free counselling session and find the right course for your goals.</p>
              </div>
              <a className="btn btn-ghost" href={`tel:${site.phone}`}><PhoneCall aria-hidden="true" /> Call {site.phoneDisplay}</a>
            </Reveal>
            <Reveal className="side-card side-form" delay={100}>
              <EnquiryForm variant="register" title="Get A Free Registration!" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
