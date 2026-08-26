import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [inViewRef, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="relative bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div ref={inViewRef} className="lg:col-span-7">
            <motion.p
              className="label-micro text-[rgba(245,245,240,0.35)] mb-5 md:mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Contact
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h2
                className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Your Next Experience
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8 md:mb-12">
              <motion.h2
                className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Begins Here.
              </motion.h2>
            </div>

            <motion.div
              className="divider-line mb-8 md:mb-10"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-14">
              {[
                { label: 'Address', value: '41, Palani Road, New Agraharam, Dindigul — 624001, Tamil Nadu' },
                { label: 'Phone', value: '+91 91500 07202', href: 'tel:+919150007202' },
                { label: 'Check-In / Check-Out', value: '12:00 PM / 12:00 PM' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.08 }}
                >
                  <p className="text-[9px] font-medium text-[rgba(245,245,240,0.25)] tracking-[0.2em] uppercase mb-1.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-editorial text-[rgba(245,245,240,0.55)] text-[13px] hover:text-[#f5f5f0] transition-colors duration-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-editorial text-[rgba(245,245,240,0.55)] text-[13px]">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a href="https://maps.google.com/?q=Vari+Park+Dindigul+Palani+Road" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Get Directions</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="tel:+919150007202" className="btn-outline">
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 relative aspect-square lg:aspect-[4/3] overflow-hidden bg-[#0a0a0a] border border-[rgba(245,245,240,0.04)] lg:mt-14"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Vari%20Park%20Dindigul&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.85) contrast(1.05) brightness(0.5)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vari Park location — Dindigul"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 pointer-events-none" />
            <div className="absolute inset-0 border border-[rgba(245,245,240,0.04)] pointer-events-none" />

            <div className="absolute top-4 left-4 flex items-center gap-2 bg-[rgba(5,5,5,0.6)] backdrop-blur-sm px-3 py-2 border border-[rgba(245,245,240,0.08)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[rgba(245,245,240,0.6)]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[9px] font-medium text-[rgba(245,245,240,0.7)] tracking-[0.18em] uppercase">
                Vari Park · Dindigul
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-light text-[rgba(245,245,240,0.35)] tracking-[0.08em] leading-relaxed">
                41, Palani Road, New Agraharam, Dindigul — 624001
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
