import { useEffect, useRef, useState } from 'react'

// Count up to `value` when scrolled into view.
export default function Counter({ value = 0, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setN(value); return }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.4 })

    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="num">
      {n.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
