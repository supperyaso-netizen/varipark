import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const sectionRef = useRef(null)
  const [textRef, textInView] = useInView({ threshold: 0.15 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 max-sm:px-6 py-28 max-sm:pt-36 max-sm:pb-28 md:py-32 lg:py-40">
        <motion.div
          ref={textRef}
          className="max-w-3xl mx-auto text-center will-change-transform"
          style={{ y: contentY }}
        >
          <motion.p
            className="label-micro text-[rgba(245,245,240,0.35)] mb-7 max-sm:mb-10 md:mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            About Vari Park
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h2
              className="text-display text-[clamp(38px,6vw,72px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={textInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              More Than
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              className="text-display text-[clamp(38px,6vw,72px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={textInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              A Destination.
            </motion.h2>
          </div>

          <motion.div
            className="divider-line my-10 max-sm:my-14 md:my-11 mx-auto"
            initial={{ scaleX: 0 }}
            animate={textInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
          />

          <motion.p
            className="text-editorial text-[rgba(245,245,240,0.45)] text-[14px] md:text-[15px] max-w-xl mx-auto mb-6 max-sm:mb-8 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Nestled on Palani Road in the heart of Dindigul, Vari Park has been welcoming guests since 2007 with warmth, comfort, and genuine Tamil Nadu hospitality.
          </motion.p>

          <motion.p
            className="text-editorial text-[rgba(245,245,240,0.45)] text-[14px] md:text-[15px] max-w-xl mx-auto mb-14 max-sm:mb-20 md:mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Every detail is designed to make your stay effortless — from our well-appointed rooms and curated dining to our bar and wellness spaces.
          </motion.p>

          <motion.div
            className="flex justify-center items-stretch max-sm:mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { num: '4.5/5', label: 'Guest Rating' },
              { num: '18+', label: 'Years' },
              { num: '627', label: 'Reviews' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center px-6 md:px-12 text-center ${
                  i > 0 ? 'border-l border-[rgba(245,245,240,0.08)]' : ''
                }`}
              >
                <p className="text-[clamp(24px,3.2vw,40px)] font-bold text-[#f5f5f0] leading-none mb-2">{s.num}</p>
                <p className="text-[8px] md:text-[9px] text-[rgba(245,245,240,0.25)] tracking-[0.14em] uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
