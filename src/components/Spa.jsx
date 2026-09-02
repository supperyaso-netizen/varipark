import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Spa() {
  const sectionRef = useRef(null)
  const [headingRef, headingInView] = useInView({ threshold: 0.15 })

  return (
    <section id="spa" ref={sectionRef} className="relative bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto">
          <div ref={headingRef} className="text-center">
            <motion.p
              className="label-micro text-[rgba(245,245,240,0.35)] mb-5 md:mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
               Spa
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h2
                className="text-display text-[clamp(32px,5vw,56px)] text-[#f5f5f0] leading-[1]"
                initial={{ y: '110%', opacity: 0 }}
                animate={headingInView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Vari Park Spa
              </motion.h2>
            </div>

            <motion.div
              className="divider-line mx-auto my-6 md:my-8"
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.p
              className="text-editorial text-[rgba(245,245,240,0.45)] text-[13px] md:text-[14px] max-w-md mx-auto leading-[1.8]"
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              After a day of travel or exploration, find your calm with our wellness facilities designed to relax your body and mind.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
