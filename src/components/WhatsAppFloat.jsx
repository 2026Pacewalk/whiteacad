import { MessageCircle } from 'lucide-react'
import { site } from '../data/site.js'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Whitehawk Academy on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  )
}
