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
                {
                  label: 'Phone',
                  value: '+91 91500 07201',
                  href: 'tel:+919150007201',
                  secondary: { value: '+91 91500 07202', href: 'tel:+919150007202' },
                },
                { label: 'Email', value: 'variparkfo@gmail.com', href: 'mailto:variparkfo@gmail.com' },
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
                  <div>
                    {item.href ? (
                      <a href={item.href} className="text-editorial text-[rgba(245,245,240,0.55)] text-[13px] hover:text-[#f5f5f0] transition-colors duration-300 block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-editorial text-[rgba(245,245,240,0.55)] text-[13px]">
                        {item.value}
                      </p>
                    )}
                    {item.secondary?.href && (
                      <a href={item.secondary.href} className="text-editorial text-[rgba(245,245,240,0.55)] text-[13px] hover:text-[#f5f5f0] transition-colors duration-300 block">
                        {item.secondary.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a href="tel:+919150007201" className="btn-outline">
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919150007202?text=Hi%20Vari%20Park%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href="https://maps.google.com/?q=Vari+Park+Dindigul+Palani+Road" target="_blank" rel="noopener noreferrer" className="btn-primary hidden lg:inline-flex">
                <span>Get Directions</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://www.booking.com/hotel/in/vari-park.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden lg:inline-flex"
              >
                <span>Book a Room</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="mt-10 md:mt-14 p-5 md:p-6 bg-[rgba(245,245,240,0.02)] border border-[rgba(245,245,240,0.1)] flex items-start gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              <div className="flex items-center justify-center w-11 h-11 flex-none border border-[rgba(245,245,240,0.15)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="text-[#f5f5f0]">
                  <path d="M5 11h14M5 11c-.9 0-1.7-.7-1.7-1.6S4.7 7.8 5.6 7.8h12.8c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.7 1.6M5 11v5a1.5 1.5 0 001.5 1.5h2A1.5 1.5 0 0010 16v-2h4v2a1.5 1.5 0 001.5 1.5h2A1.5 1.5 0 0019 16v-5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-medium text-[rgba(245,245,240,0.25)] tracking-[0.2em] uppercase mb-1.5">
                  Guest Facilities
                </p>
                <p className="text-[15px] md:text-[16px] font-semibold text-[#f5f5f0] leading-snug mb-1">
                  Complimentary Parking Available
                </p>
                <p className="text-editorial text-[rgba(245,245,240,0.4)] text-[12px] leading-relaxed">
                  Free on-site parking for all guests, right at the hotel.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 relative aspect-square lg:aspect-[4/3] overflow-hidden bg-[#0a0a0a] border border-[rgba(245,245,240,0.04)] lg:mt-14"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {inView && (
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
            )}

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

          <motion.div
            className="grid grid-cols-2 gap-3 mt-5 lg:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href="https://maps.google.com/?q=Vari+Park+Dindigul+Palani+Road" target="_blank" rel="noopener noreferrer" className="btn-cta-mobile">
              <span>Get Directions</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.booking.com/hotel/in/vari-park.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-mobile"
            >
              <span>Book a Room</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
