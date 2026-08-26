import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Bar', href: '#bar' },
  { label: 'Spa', href: '#spa' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [inViewRef, inView] = useInView({ threshold: 0.15 })

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer ref={inViewRef} className="bg-[#050505] border-t border-[rgba(245,245,240,0.04)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/logo.png"
                alt="Vari Park"
                className="h-8 md:h-9 w-auto"
              />
            </motion.div>
            <motion.p
              className="text-editorial text-[rgba(245,245,240,0.25)] text-[12px] leading-[1.8] mt-4 max-w-xs"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Premium hospitality in the heart of Dindigul, Tamil Nadu. Welcoming guests since 2007.
            </motion.p>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.2em] uppercase mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map(l => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors duration-300 text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.2em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <p className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px]">
                41, Palani Road, New Agraharam
              </p>
              <p className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px]">
                Dindigul — 624001, Tamil Nadu
              </p>
              <a href="tel:+919150007202" className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors">
                +91 91500 07202
              </a>
              <p className="text-editorial text-[rgba(245,245,240,0.25)] text-[11px] mt-1">
                Check-in: 12:00 PM · Check-out: 12:00 PM
              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </footer>
  )
}
