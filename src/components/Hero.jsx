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

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const contentY = useTransform(scrollYProgress, [0, 0.42], [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} id="hero" className="relative h-screen min-h-[620px] overflow-hidden">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: imgScale, y: imgY }}
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileImg}
            className="w-full h-full object-cover object-[center_30%]"
          />
          <img
            src={heroImg}
            alt="The architectural facade of Vari Park hotel on Palani Road, Dindigul"
            className="w-full h-full object-cover object-[center_38%] lg:object-[center_42%]"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/55 via-[#050505]/20 to-[#050505]/40" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.42)_100%)]" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0) 40%, rgba(5,5,5,0.55) 78%, rgba(5,5,5,1) 100%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="inset-0 absolute"
      />

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="eyebrow text-[rgba(245,245,240,0.55)] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Welcome To
        </motion.p>

        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.h1
            className="font-serif-display text-[#f5f5f0]"
            style={{
              fontSize: 'clamp(52px, 11vw, 148px)',
              letterSpacing: '0.04em',
              textShadow: '0 6px 40px rgba(0,0,0,0.35)',
            }}
            initial={{ y: '112%', opacity: 0 }}
            animate={ready ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Vari&nbsp;Park
          </motion.h1>
        </div>

        <motion.p
          className="text-[9px] md:text-[10px] font-medium tracking-[0.5em] uppercase text-[rgba(245,245,240,0.55)] mb-6 md:mb-7"
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Dindigul&nbsp;·&nbsp;Tamil&nbsp;Nadu
        </motion.p>

        <motion.div
          className="w-10 h-[1px] bg-[rgba(245,245,240,0.3)] mb-6 md:mb-7"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={ready ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="text-editorial text-[rgba(245,245,240,0.6)] text-[13px] md:text-[15px] font-light leading-[1.9] mb-9 md:mb-12 max-w-[320px] md:max-w-[420px] tracking-[0.02em]"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
        >
          A refined destination for dining, stay, celebration and relaxation in the heart of Dindigul.
        </motion.p>

        <motion.button
          onClick={() => scrollTo('#about')}
          className="btn-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Explore Vari Park</span>
          <span className="arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none"
        style={{ opacity: scrollOpacity }}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <p className="text-[7px] font-medium text-[rgba(245,245,240,0.35)] tracking-[0.45em] uppercase">
          Scroll
        </p>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-[rgba(245,245,240,0.5)] to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
