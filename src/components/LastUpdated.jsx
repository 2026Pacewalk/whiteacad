import { CalendarClock } from 'lucide-react'
import { lastUpdated } from '../data/site.js'

// Content-freshness signal (EEAT). Uses a real <time> element so the date is
// machine-readable as well as visible.
export default function LastUpdated({ date = lastUpdated }) {
  const pretty = new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
  return (
    <p className="last-updated">
      <CalendarClock aria-hidden="true" size={15} />
      Last updated: <time dateTime={date}>{pretty}</time>
    </p>
  )
}
