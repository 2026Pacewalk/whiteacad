import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import LastUpdated from '../components/LastUpdated.jsx'
import { site, seo } from '../data/site.js'

export default function Privacy() {
  return (
    <>
      <Seo meta={seo.privacy} />
      <PageHero title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />

      <section className="section">
        <div className="container legal">
          <LastUpdated />

          <p className="lead">
            This policy explains what information Whitehawk Academy collects when you use this
            website, how we use it, and the choices you have. If you have any questions, contact us
            at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <p>
            We only collect information you choose to send us. When you submit the registration or
            enquiry form on this website, you provide:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>The course you are interested in, and any preferred date</li>
            <li>Any message you write</li>
          </ul>

          <h2>How the enquiry form works</h2>
          <p>
            This website does not run a server-side database. When you submit the form, the details
            you entered are used to compose a WhatsApp message addressed to the academy, which opens
            in your own WhatsApp app. <strong>Nothing is sent until you press send in WhatsApp.</strong>{' '}
            Your details are not stored on this website.
          </p>
          <p>
            Once you send that message, the conversation is handled through WhatsApp and is subject
            to WhatsApp&rsquo;s own privacy policy. You may also contact us directly by phone at{' '}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> or by email.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To answer your enquiry and discuss suitable courses</li>
            <li>To arrange counselling sessions, admissions and batch details</li>
            <li>To contact you about the specific enquiry you made</li>
          </ul>
          <p>We do not sell your information, and we do not share it with third parties for marketing.</p>

          <h2>Third-party services</h2>
          <p>This website relies on a small number of third-party services:</p>
          <ul>
            <li><strong>Cloudflare</strong> — hosting and content delivery for this website.</li>
            <li><strong>Google Maps</strong> — the embedded map on our contact page.</li>
            <li><strong>WhatsApp (Meta)</strong> — used to deliver your enquiry message.</li>
            <li><strong>Google Fonts</strong> — website typography.</li>
          </ul>
          <p>Each of these providers processes data under its own privacy policy.</p>

          <h2>Cookies</h2>
          <p>
            This website does not set advertising or tracking cookies of its own. Embedded content
            (such as the Google Map) may set cookies controlled by that provider.
          </p>

          <h2>Your choices</h2>
          <p>
            You can contact us at <a href={`mailto:${site.email}`}>{site.email}</a> to ask what
            information we hold about you from your enquiry, to correct it, or to ask us to delete
            it. You can also simply choose not to submit the form and call us instead.
          </p>

          <h2>Children&rsquo;s information</h2>
          <p>
            Many of our students are under 18. Where a student is a minor, we expect enquiries to be
            made by a parent or guardian, and we use the details only to discuss coaching for that
            student.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date above shows when it was last
            revised.
          </p>

          <p className="legal__note">
            <strong>Please note:</strong> this policy describes how this website behaves. It is not
            legal advice, and it should be reviewed by a qualified professional before you rely on it
            for compliance purposes.
          </p>

          <p>
            See also our <Link to="/terms">Terms of Use</Link> or{' '}
            <Link to="/contact">contact the academy</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
