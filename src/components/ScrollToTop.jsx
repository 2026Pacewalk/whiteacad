import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll to top on every route change (predictable back/forward feel).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}
