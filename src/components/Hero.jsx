import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '../assets/hero.png'
import mobileImg from '../assets/mobile.png'

export default function Hero({ ready }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 0.95])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: imgScale, y: imgY }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImg} />
          <img
            src={heroImg}
            alt="Vari Park hotel exterior"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-[#050505]/30 mix-blend-multiply" />

      <motion.div
        className="absolute inset-0 will-change-opacity"
        style={{
          background: 'linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.3) 35%, rgba(5,5,5,0.75) 65%, rgba(5,5,5,1) 100%)',
          opacity: overlayOpacity,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 45%, transparent 30%, rgba(5,5,5,0.5) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="text-[9px] md:text-[10px] font-medium text-[rgba(245,245,240,0.4)] tracking-[0.7em] uppercase mb-4 md:mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Welcome To
        </motion.p>

        <div className="overflow-hidden mb-2 md:mb-3">
          <motion.h1
            className="text-[#f5f5f0] font-bold leading-[0.95] tracking-[0.02em] whitespace-nowrap"
            style={{ fontSize: 'clamp(40px, 8vw, 100px)' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={ready ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            VARI PARK
          </motion.h1>
        </div>

        <motion.p
          className="text-[9px] md:text-[10px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.5em] uppercase mb-5 md:mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Dindigul · Tamil Nadu
        </motion.p>

        <motion.div
          className="w-8 h-[1px] bg-[rgba(245,245,240,0.15)] mb-5 md:mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={ready ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="text-[rgba(245,245,240,0.4)] text-[12px] md:text-[15px] font-light leading-[1.8] mb-6 md:mb-10 max-w-[300px] md:max-w-[340px] tracking-[0.02em]"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          A refined destination for dining, stay, celebration and relaxation in the heart of Dindigul.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <button onClick={() => scrollTo('#rooms')} className="btn-primary">
            <span>Explore Vari Park</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-[1px] h-8 bg-[rgba(245,245,240,0.12)] origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <p className="text-[7px] font-medium text-[rgba(245,245,240,0.12)] tracking-[0.35em] uppercase">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
