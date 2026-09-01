import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Bar', href: '#bar' },
  { label: 'Halls', href: '#halls' },
  { label: 'Spa', href: '#spa' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const observerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const ids = ['hero', 'about', 'rooms', 'restaurant', 'bar', 'halls', 'spa', 'contact']
    const visible = new Set()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        })

        for (const id of ids) {
          if (visible.has(id)) {
            const link = navLinks.find((l) => l.href === `#${id}`)
            if (link) setActiveLink(link.label)
            break
          }
        }
      },
      { threshold: 0, rootMargin: '-40% 0px -55% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observerRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = useCallback((href, label) => {
    setMobileOpen(false)
    setActiveLink(label)
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-b border-[rgba(245,245,240,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-14 md:h-16 lg:h-20">
          <a href="#hero" className="relative z-10 flex items-center" onClick={(e) => { e.preventDefault(); scrollTo('#hero', 'Home') }}>
            <img
              src="/logo.png"
              alt="Vari Park"
              className="h-7 md:h-8 w-auto transition-all duration-500"
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.label)}
                className={`relative px-3 xl:px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-400 ${
                  activeLink === link.label
                    ? 'text-[#f5f5f0]'
                    : 'text-[rgba(245,245,240,0.35)] hover:text-[rgba(245,245,240,0.7)]'
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-3 right-3 h-[1px] bg-[rgba(245,245,240,0.3)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="https://www.booking.com/hotel/in/vari-park.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-medium tracking-[0.2em] uppercase text-[rgba(245,245,240,0.4)] border border-[rgba(245,245,240,0.1)] px-5 py-2.5 hover:text-[#f5f5f0] hover:border-[rgba(245,245,240,0.25)] transition-all duration-500"
            >
              Reserve
            </a>
          </div>

          <button
            className="lg:hidden relative z-10 w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[18px] h-[1px] bg-[rgba(245,245,240,0.6)] block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[18px] h-[1px] bg-[rgba(245,245,240,0.6)] block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[18px] h-[1px] bg-[rgba(245,245,240,0.6)] block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.href, link.label)}
                  className={`text-[clamp(20px,5vw,28px)] font-light tracking-[0.08em] uppercase transition-colors duration-300 ${
                    activeLink === link.label
                      ? 'text-[#f5f5f0]'
                      : 'text-[rgba(245,245,240,0.35)]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + navLinks.length * 0.04 }}
                className="mt-4"
              >
                <a
                  href="https://www.booking.com/hotel/in/vari-park.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-[10px] font-medium tracking-[0.2em] uppercase text-[rgba(245,245,240,0.4)] border border-[rgba(245,245,240,0.1)] px-8 py-3 hover:text-[#f5f5f0] hover:border-[rgba(245,245,240,0.25)] transition-all duration-500"
                >
                  Reserve
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-8 text-center"
            >
              <p className="text-[8px] font-medium text-[rgba(245,245,240,0.15)] tracking-[0.25em] uppercase">
                41, Palani Road, Dindigul — 624001
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
