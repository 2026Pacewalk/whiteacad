import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { site, courseList } from '../data/site.js'

/**
 * Enquiry / registration form. With no PHP backend, a valid submission opens a
 * pre-filled WhatsApp chat to the academy and shows an inline success message.
 * Includes a honeypot field to deter bots.
 */
export default function EnquiryForm({ variant = 'register', title = 'Get A Free Registration!' }) {
  const isContact = variant === 'contact'
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = e.currentTarget
    if (f.honeypot.value) return // bot

    const lines = [
      `*New ${isContact ? 'Enquiry' : 'Registration'} — Whitehawk Academy*`,
      `Name: ${f.name.value}`,
      `Email: ${f.email.value}`,
      `Phone: ${f.mobile.value}`,
      isContact ? `Subject: ${f.subject.value}` : `Course: ${f.course.value}`,
      !isContact && f.date.value ? `Preferred date: ${f.date.value}` : null,
      `Message: ${f.msg.value}`,
    ].filter(Boolean)

    const url = `${site.social.whatsapp}&text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener')
    setSent(true)
    f.reset()
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate>
      {title && <h3>{title}</h3>}

      {sent && (
        <div className="alert alert-success" role="status">
          <CheckCircle2 aria-hidden="true" /> Thank you! Your details are ready — please send the WhatsApp
          message that just opened, or call us at {site.phoneDisplay}.
        </div>
      )}

      {/* Honeypot (hidden from users) */}
      <input className="honeypot" type="text" name="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <div className="field">
        <label htmlFor="ef-name">Full Name <span className="req">*</span></label>
        <input id="ef-name" className="input" name="name" type="text" required placeholder="Enter your name" autoComplete="name" />
      </div>

      <div className="form-row2">
        <div className="field">
          <label htmlFor="ef-email">Email <span className="req">*</span></label>
          <input id="ef-email" className="input" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="ef-mobile">Phone <span className="req">*</span></label>
          <input id="ef-mobile" className="input" name="mobile" type="tel" required placeholder="Mobile number" autoComplete="tel" inputMode="tel" />
        </div>
      </div>

      {isContact ? (
        <div className="field">
          <label htmlFor="ef-subject">Subject <span className="req">*</span></label>
          <input id="ef-subject" className="input" name="subject" type="text" required placeholder="How can we help?" />
        </div>
      ) : (
        <div className="form-row2">
          <div className="field">
            <label htmlFor="ef-course">Course <span className="req">*</span></label>
            <select id="ef-course" className="select" name="course" required defaultValue="">
              <option value="" disabled>Select a course</option>
              {courseList.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ef-date">Preferred Date</label>
            <input id="ef-date" className="input" name="date" type="date" />
          </div>
        </div>
      )}

      <div className="field">
        <label htmlFor="ef-msg">Message <span className="req">*</span></label>
        <textarea id="ef-msg" className="textarea" name="msg" required placeholder="Tell us about your requirement" />
      </div>

      <button className="btn btn-primary" type="submit">
        <Send aria-hidden="true" /> {isContact ? 'Send Message' : 'Submit Request'}
      </button>
    </form>
  )
}
