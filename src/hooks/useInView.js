import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.1, rootMargin = '100px 0px', once } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const optionsRef = useRef({ threshold, rootMargin, once })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const { threshold: t, rootMargin: rm, once: o } = optionsRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (o !== false) observer.unobserve(element)
        } else if (o === false) {
          setIsInView(false)
        }
      },
      { threshold: t, rootMargin: rm }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
