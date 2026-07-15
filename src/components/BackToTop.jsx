import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Back-to-top control. Appears once the user is well down the page, so it
 * never competes with the hero. Respects prefers-reduced-motion by jumping
 * instead of smooth-scrolling.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`to-top ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  )
}
