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
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[rgba(5,5,5,0.72)] backdrop-blur-xl border-b border-[rgba(245,245,240,0.06)]'
            : 'bg-gradient-to-b from-[rgba(5,5,5,0.45)] to-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20 lg:h-24">
          <a href="#hero" className="relative z-10 flex items-center" onClick={(e) => { e.preventDefault(); scrollTo('#hero', 'Home') }}>
            <img
              src="/logo.png"
              alt="Vari Park"
              className="h-8 md:h-9 w-auto transition-all duration-500"
            />
          </a>

          <div className="hidden lg:flex items-center gap-[2px]">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.label)}
                className={`relative px-3.5 xl:px-4 py-2 text-[10.5px] font-medium tracking-[0.18em] uppercase transition-colors duration-400 ${
                  activeLink === link.label
                    ? 'text-[#f5f5f0]'
                    : 'text-[rgba(245,245,240,0.4)] hover:text-[rgba(245,245,240,0.75)]'
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
              className="text-[9px] font-medium tracking-[0.22em] uppercase text-[rgba(245,245,240,0.55)] border-b border-[rgba(245,245,240,0.2)] pb-1.5 hover:text-[#f5f5f0] hover:border-[#f5f5f0] transition-all duration-500"
            >
              Reserve
            </a>
          </div>

          <button
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[20px] h-[1px] bg-[rgba(245,245,240,0.7)] block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[20px] h-[1px] bg-[rgba(245,245,240,0.7)] block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[20px] h-[1px] bg-[rgba(245,245,240,0.7)] block origin-center"
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
            className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.98)] backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-5 md:gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.href, link.label)}
                  className={`font-serif-display text-[clamp(26px,7vw,34px)] transition-colors duration-300 ${
                    activeLink === link.label
                      ? 'text-[#f5f5f0]'
                      : 'text-[rgba(245,245,240,0.4)]'
                  }`}
                  style={{ letterSpacing: '0.06em' }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + navLinks.length * 0.05 }}
                className="mt-6"
              >
                <a
                  href="https://www.booking.com/hotel/in/vari-park.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-[10px] font-medium tracking-[0.22em] uppercase text-[rgba(245,245,240,0.6)] border border-[rgba(245,245,240,0.15)] px-9 py-3.5 hover:text-[#050505] hover:bg-[#f5f5f0] transition-all duration-500"
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
