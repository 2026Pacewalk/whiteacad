import { Quote, BadgeCheck, User } from 'lucide-react'
import { founder } from '../data/site.js'

/**
 * EEAT author/founder block.
 *
 * Deliberately renders ONLY the fields that are actually filled in
 * (`founder` in data/site.js). Nothing here is invented — an empty bio or an
 * empty credentials array simply doesn't render, rather than showing a
 * placeholder or a guessed qualification.
 */
export default function FounderBio() {
  const hasDetail = founder.bio || founder.credentials.length > 0
  if (!hasDetail && !founder.quote) return null

  return (
    <section className="section founder-section">
      <div className="container">
        <div className="founder-card">
          <div className="founder-card__media">
            {founder.photo ? (
              <img src={founder.photo} alt={`${founder.name}, ${founder.role} of Whitehawk Academy`} />
            ) : (
              <div className="founder-card__avatar" aria-hidden="true"><User size={44} /></div>
            )}
          </div>

          <div className="founder-card__body">
            <span className="eyebrow">Leadership</span>
            <h2 className="founder-card__name">{founder.name}</h2>
            <p className="founder-card__role">
              {founder.role}
              {founder.yearsExperience ? ` · ${founder.yearsExperience}+ years in education` : ''}
            </p>

            {founder.quote && (
              <blockquote className="founder-card__quote">
                <Quote aria-hidden="true" size={18} /> {founder.quote}
              </blockquote>
            )}

            {founder.bio && <p>{founder.bio}</p>}

            {founder.credentials.length > 0 && (
              <ul className="founder-card__creds">
                {founder.credentials.map((c) => (
                  <li key={c}><BadgeCheck aria-hidden="true" size={16} /> {c}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
