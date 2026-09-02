import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import bar1 from '../assets/bar1.jpg'
import bar2 from '../assets/bar2.jpg'
import bar3 from '../assets/bar3.jpg'
import bar4 from '../assets/bar4.jpg'

const barImages = [
  { src: bar1, alt: 'Bar ambience' },
  { src: bar2, alt: 'Craft cocktails' },
  { src: bar3, alt: 'Fine spirits' },
  { src: bar4, alt: 'Evening bar' },
]

function GalleryItem({ img, index, inView, onImageClick }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[72vw] sm:w-[44vw] aspect-[3/4] overflow-hidden cursor-pointer snap-center md:flex-1 md:max-w-[260px]"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onImageClick?.(barImages, index)}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.05]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.6)] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-end opacity-0 hover:opacity-100 transition-opacity duration-500">
        <span className="text-[9px] font-medium text-[rgba(245,245,240,0.4)] tracking-[0.15em]">
          0{index + 1}
        </span>
      </div>
      <div className="absolute inset-0 border border-[rgba(245,245,240,0.04)] pointer-events-none" />
    </motion.div>
  )
}

export default function Bar({ onImageClick }) {
  const sectionRef = useRef(null)
  const [headingRef, headingInView] = useInView({ threshold: 0.15 })
  const [galleryRef, galleryInView] = useInView({ threshold: 0.08 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="bar" ref={sectionRef} className="relative bg-[#070605] overflow-hidden">
      <div className="relative h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
          <img
            src="https://lh3.ggpht.com/p/AF1QipPSUaimeIu7RW8n7sWkz4MQ4H87OYcrXErmFebq=s1024"
            alt="Bar atmosphere"
            className="w-full h-[120%] object-cover opacity-25"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070605] via-[rgba(7,6,5,0.5)] to-[#070605]" />

        <div ref={headingRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <motion.p
            className="label-micro text-[rgba(245,245,240,0.4)] mb-5 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Bar
          </motion.p>

          <div className="overflow-hidden mb-6 md:mb-10">
            <motion.h2
              className="text-display text-[clamp(36px,7vw,96px)] text-[#f5f5f0] leading-[0.95]"
              initial={{ y: '110%', opacity: 0 }}
              animate={headingInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Ignite Bar
            </motion.h2>
          </div>

          <motion.div
            className="divider-line mx-auto mb-6 md:mb-8"
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            className="text-editorial text-[rgba(245,245,240,0.4)] text-[13px] md:text-[14px] max-w-md leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Craft cocktails, intimate conversations, and live music in the heart of Dindigul. Unwind after a long day.
          </motion.p>

          <motion.button
            onClick={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-4 mt-3"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span className="relative text-[10px] font-medium text-[rgba(245,245,240,0.45)] tracking-[0.2em] uppercase transition-colors duration-400 group-hover:text-[#f5f5f0]">
              View The Gallery
              <span className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-[rgba(245,245,240,0.25)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(245,245,240,0.12)] group-hover:border-[rgba(245,245,240,0.3)] transition-colors duration-400">
              <motion.svg
                width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="text-[rgba(245,245,240,0.4)] group-hover:text-[#f5f5f0]"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </span>
          </motion.button>
        </div>
      </div>

      <div ref={galleryRef} className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible md:flex-wrap md:justify-center">
          {barImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} inView={galleryInView} onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
