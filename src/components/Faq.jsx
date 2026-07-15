import { useState } from 'react'
import { Plus } from 'lucide-react'

/**
 * Visible FAQ accordion. Google only honours FAQPage schema when the same Q&A
 * is visible on the page, so this renders the real content — the schema is
 * emitted separately from the same `faqs` data source.
 *
 * Answers stay in the DOM (collapsed via CSS grid) rather than being
 * conditionally rendered, so crawlers and AI engines always read the text.
 */
export default function Faq({ items, title = 'Frequently Asked Questions', eyebrow = 'FAQ' }) {
  const [open, setOpen] = useState(0)
  if (!items?.length) return null

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="center-head text-center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="faq-list">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
                <h3 className="faq-q">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <Plus className="faq-icon" aria-hidden="true" size={20} />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`}>
                  <div className="faq-a-inner"><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
