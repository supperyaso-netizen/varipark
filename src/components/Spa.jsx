import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Spa({ onImageClick }) {
  const sectionRef = useRef(null)
  const [headingRef, headingInView] = useInView({ threshold: 0.15 })
  const [imgRef, imgInView] = useInView({ threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const features = [
    { title: 'Sauna & Steam', desc: 'Traditional facilities for deep relaxation and detoxification.' },
    { title: 'Hot Spring Bath', desc: 'Therapeutic waters to soothe and rejuvenate.' },
    { title: 'Massage Services', desc: 'Professional therapy to relieve tension and restore balance.' },
    { title: 'Yoga & Fitness', desc: 'Dedicated spaces for practice and a well-equipped fitness center.' },
  ]

  return (
    <section id="spa" ref={sectionRef} className="relative bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div ref={imgRef} className="lg:col-span-5 order-2 lg:order-1">
            <motion.div style={{ y: imgY }}>
              <motion.div
                className="overflow-hidden aspect-[3/4] cursor-pointer"
                initial={{ clipPath: 'inset(10% 0 10% 0)' }}
                animate={imgInView ? { clipPath: 'inset(0% 0 0% 0)' } : {}}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onImageClick?.([{ src: 'https://lh3.ggpht.com/p/AC9h4npSbPsqEt1EeThe0HL4aIovTr0P81HRGTfRM75oEb0b0plkhwMHQiytpaS9OrATjPUv15w933ntZvMRFknD669jL2NcOnSYarDCicq5QJyI8dSKx0pWbV7VT86X6AazWSYAM1pQkw=s1024', alt: 'Spa wellness' }], 0)}
              >
                <img
                  src="https://lh3.ggpht.com/p/AC9h4npSbPsqEt1EeThe0HL4aIovTr0P81HRGTfRM75oEb0b0plkhwMHQiytpaS9OrATjPUv15w933ntZvMRFknD669jL2NcOnSYarDCicq5QJyI8dSKx0pWbV7VT86X6AazWSYAM1pQkw=s1024"
                  alt="Spa at Vari Park"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>

          <div ref={headingRef} className="lg:col-span-7 order-1 lg:order-2">
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
                Slow Down
              </motion.h2>
            </div>

            <motion.div
              className="divider-line my-6 md:my-8"
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              className="text-editorial text-[rgba(245,245,240,0.45)] text-[13px] md:text-[14px] max-w-md leading-[1.8] mb-10 md:mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              After a day of travel or exploration, find your calm with our wellness facilities designed to relax your body and mind.
            </motion.p>

            <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="border border-[rgba(245,245,240,0.06)] bg-[rgba(245,245,240,0.015)] p-5 hover:border-[rgba(245,245,240,0.12)] transition-all duration-500"
                  initial={{ opacity: 0, y: 16 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                >
                  <h4 className="text-[11px] font-semibold text-[#f5f5f0] tracking-[0.08em] mb-2">{f.title}</h4>
                  <p className="text-editorial text-[rgba(245,245,240,0.35)] text-[11px] leading-[1.7]">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <button className="btn-primary">
                <span>Enter The Spa</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
