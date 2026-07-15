import { Star, Quote, ExternalLink, PenLine } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { googleReviews } from '../data/site.js'

/**
 * Real Google reviews, displayed with attribution and a link to verify.
 *
 * Deliberately emits NO Review/AggregateRating schema. Google treats reviews
 * about a business hosted on that business's own site as "self-serving": they
 * are ineligible for star rich results and marking them up risks a structured
 * data manual action. The stars that matter are earned on the Google Business
 * Profile itself — which is what the "Review us on Google" button drives.
 */
export default function Reviews() {
  const { rating, count, items, profileUrl, reviewUrl } = googleReviews

  return (
    <section className="section reviews">
      <div className="container">
        <div className="center-head text-center">
          <span className="eyebrow" style={{ justifyContent: 'center', color: '#ff738a' }}>Reviews</span>
          <h2 className="section-title" style={{ color: '#fff' }}>What Our <span className="accent">Students Say</span></h2>

          {/* Aggregate shown as plain text, linked to source so anyone can verify */}
          <a className="reviews__score" href={profileUrl} target="_blank" rel="noopener noreferrer">
            <span className="reviews__num">{rating}</span>
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </span>
            <span className="reviews__count">
              {count} Google reviews <ExternalLink size={13} aria-hidden="true" />
            </span>
          </a>
          <p className="sr-only">Rated {rating} out of 5 based on {count} Google reviews.</p>
        </div>

        <div className="testi-grid">
          {items.slice(0, 6).map((r, i) => (
            <Reveal className="testi-card" key={r.name} delay={i * 70}>
              <Quote className="quote-ic" aria-hidden="true" />
              <p>“{r.quote}”</p>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <b>{r.name}</b>
                  <span>{r.meta}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="reviews__actions">
          <a className="btn btn-primary" href={reviewUrl} target="_blank" rel="noopener noreferrer">
            <PenLine aria-hidden="true" /> Review us on Google
          </a>
          <a className="btn btn-ghost" href={profileUrl} target="_blank" rel="noopener noreferrer">
            Read all {count} reviews <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
