import { Link } from 'react-router-dom'
import { Eye, Flag, Check, ArrowRight, Target } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, seo } from '../data/site.js'

const values = [
  'Personal attention to every student',
  'Career guidance & counselling',
  'Best and comprehensive study material',
  'Smart, technology-enabled classrooms',
  'Regular test series & performance tracking',
  'Experienced and caring faculty',
]

export default function About() {
  return (
    <>
      <Seo meta={seo.about} />
      <PageHero title="About Us" crumbs={[{ label: 'About Us' }]} />

      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-media">
            <img src="/images/about-2.jpg" alt="Whitehawk Academy campus and faculty in Bathinda" width="560" height="440" />
            <div className="about-badge"><b>500+</b><span>Happy Students</span></div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Welcome to <span className="accent">Whitehawk Academy</span></h2>
            <blockquote>{site.tagline}.</blockquote>
            <p>
              We provide a knowledge bridge to students between schools and their dream colleges,
              training the youth for competitive examinations like IIT-JEE (Main &amp; Advanced), NEET,
              NTSE, KVPY and Olympiads. Keeping individuality in mind, we believe no single career path
              suits all — so we guide students on career options and provide dedicated counselling.
            </p>
            <p>
              We recognise the strengths and weaknesses of every student and pay equal personal
              attention to each one, so that their career can be given a bright shape.
            </p>
            <Link className="btn btn-primary" to="/contact">Talk to a Counsellor <ArrowRight aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section why">
        <div className="container why__grid">
          <Reveal>
            <span className="eyebrow" style={{ color: '#ff738a' }}>Our Purpose</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Vision &amp; <span className="accent">Mission</span></h2>
            <div className="why__list">
              <div className="why__item">
                <div className="ic"><Eye aria-hidden="true" /></div>
                <div>
                  <h4>Our Vision</h4>
                  <p>Whitehawk Academy strives to achieve excellence and leadership in quality education by providing a platform where ambitions are achieved, talent is nurtured and values are built. “Education is not the learning of facts alone, but the training of the mind to think.” — Albert Einstein.</p>
                </div>
              </div>
              <div className="why__item">
                <div className="ic"><Flag aria-hidden="true" /></div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To promote excellence in education through advancing knowledge and to develop the competencies of students with good values, so that they can face the challenges of this changing world.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="why__media" delay={120}>
            <img src="/images/counter-bg.jpg" alt="Whitehawk Academy students achieving competitive exam success" width="560" height="440" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="center-head text-center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The Whitehawk Way</span>
            <h2 className="section-title">Why Families <span className="accent">Trust Us</span></h2>
          </div>
          <div className="feature-grid">
            {values.map((v, i) => (
              <Reveal className="feature-card" key={v} delay={i * 60} style={{ textAlign: 'left' }}>
                <div className="feature-icon" style={{ margin: 0, width: 48, height: 48 }}><Check aria-hidden="true" /></div>
                <p style={{ marginTop: 14, color: 'var(--ink)', fontWeight: 500 }}>{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
