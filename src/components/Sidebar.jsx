import { Link } from 'react-router-dom'
import EnquiryForm from './EnquiryForm.jsx'
import { site } from '../data/site.js'

// Reusable page sidebar: registration form + promo image.
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-card side-form">
        <EnquiryForm variant="register" title="Get A Free Registration!" />
      </div>
      <div className="side-img">
        <Link to="/contact" aria-label="Contact Whitehawk Academy">
          <img
            src="/images/sidebar-img.jpg"
            alt="Enrol at Whitehawk Academy — admissions open for IIT, NEET and Foundation batches"
            loading="lazy"
          />
        </Link>
      </div>
    </aside>
  )
}
