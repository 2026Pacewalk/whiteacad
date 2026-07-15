import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import LastUpdated from '../components/LastUpdated.jsx'
import { site, seo } from '../data/site.js'

export default function Terms() {
  return (
    <>
      <Seo meta={seo.terms} />
      <PageHero title="Terms of Use" crumbs={[{ label: 'Terms of Use' }]} />

      <section className="section">
        <div className="container legal">
          <LastUpdated />

          <p className="lead">
            These terms apply to your use of the Whitehawk Academy website. By using this website,
            you agree to them. If you do not agree, please do not use the site.
          </p>

          <h2>About this website</h2>
          <p>
            This website is operated by Whitehawk Academy, {site.address}. It exists to describe our
            coaching programmes and to let prospective students and parents contact us.
          </p>

          <h2>Course information</h2>
          <p>
            Course details, durations and structures shown on this website are provided for general
            guidance. Batch timings, availability, syllabus coverage and fees may change, and are
            confirmed only at the time of admission. Nothing on this website is an offer or a
            guarantee of admission.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            Results, ranks and achievements shown on this website reflect the past performance of
            individual students. Competitive examinations depend on many factors, including a
            student&rsquo;s own effort. We do not guarantee any particular result, rank, score or
            admission outcome.
          </p>

          <h2>Enquiries</h2>
          <p>
            The enquiry form composes a WhatsApp message that you send from your own device. Sending
            an enquiry does not reserve a seat or create any obligation on either side. See our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> for how your details are handled.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Whitehawk Academy name, logo, course material and website content are the property of
            Whitehawk Academy. You may view and share pages for personal, non-commercial purposes.
            You may not copy, republish or reuse our content or branding without written permission.
          </p>

          <h2>External links</h2>
          <p>
            This website links to third-party services, including our student login portal and social
            media pages. We are not responsible for the content, availability or practices of those
            external sites.
          </p>

          <h2>Availability</h2>
          <p>
            We aim to keep the website available and accurate, but we do not warrant that it will be
            uninterrupted or free of errors, and we may change or remove content at any time.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> or
            email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <p className="legal__note">
            <strong>Please note:</strong> these terms are a general starting point, not legal advice.
            Have them reviewed by a qualified professional before relying on them.
          </p>

          <p>
            See also our <Link to="/privacy-policy">Privacy Policy</Link> or{' '}
            <Link to="/contact">contact the academy</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
