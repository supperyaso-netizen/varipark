import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import hall1Img from '../assets/hall1.jpg'
import hall2Img from '../assets/minihall.jpg'

const halls = [
  {
    name: 'Vari Park Grand Hall',
    capacity: '115 – 130 Guests',
    tagline: 'Celebrations. Gatherings. Occasions.',
    features: ['Stage & Sound', 'Event Staff', 'Dedicated Catering'],
    image: hall1Img,
  },
  {
    name: 'Vari Park Mini Hall',
    capacity: '50 – 65 Guests',
    tagline: 'Quiet. Personal. Memorable.',
    features: ['Stage & Sound', 'Event Staff', 'Dedicated Catering'],
    image: hall2Img,
  },
]

function HallCard({ hall, index, inView }) {
  return (
    <motion.article
      className="relative group overflow-hidden border border-[rgba(245,245,240,0.06)] bg-[#0a0a0a]"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
            src={hall.image}
              alt={hall.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="text-[9px] font-medium text-[rgba(245,245,240,0.7)] tracking-[0.2em] uppercase border border-[rgba(245,245,240,0.15)] bg-[rgba(5,5,5,0.5)] px-3 py-1.5">
            Hall 0{index + 1}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-9">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {hall.size && (
            <>
              <p className="text-[10px] font-medium text-[rgba(245,245,240,0.5)] tracking-[0.18em] uppercase">
                {hall.size}
              </p>
              <span className="w-6 h-[1px] bg-[rgba(245,245,240,0.15)]" />
            </>
          )}
          <p className="text-[10px] font-medium text-[#f5f5f0] tracking-[0.18em] uppercase">
            {hall.capacity}
          </p>
        </div>

        <h3 className="text-display text-[clamp(26px,3vw,36px)] text-[#f5f5f0] mb-1">
          {hall.name}
        </h3>
        <p className="text-[11px] font-light text-[rgba(245,245,240,0.35)] tracking-[0.12em] uppercase mb-5">
          {hall.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {hall.features.map((f) => (
            <span
              key={f}
              className="text-[10px] font-medium text-[rgba(245,245,240,0.4)] border border-[rgba(245,245,240,0.08)] px-3 py-1.5 tracking-[0.05em]"
            >
              {f}
            </span>
          ))}
        </div>

        <a
          href="https://wa.me/919150007202?text=Hi%20Vari%20Park%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20hall."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <span>Enquire Now</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.article>
  )
}

export default function Halls() {
  const sectionRef = useRef(null)
  const [headingRef, headingInView] = useInView({ threshold: 0.15 })
  const [gridRef, gridInView] = useInView({ threshold: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="halls" ref={sectionRef} className="relative bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: bgY }} className="absolute -top-40 right-0 w-[40%] h-[60%] opacity-[0.04]">
          <motion.img
            src={hall1Img}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div ref={headingRef} className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
          <motion.p
            className="label-micro text-[rgba(245,245,240,0.35)] mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Events & Celebrations
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h2
              className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={headingInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Spaces To
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={headingInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Celebrate.
            </motion.h2>
          </div>

          <motion.p
            className="text-editorial text-[rgba(245,245,240,0.45)] text-[13px] md:text-[14px] max-w-lg mt-6 leading-[1.8]"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Two distinct halls for every occasion — from grand weddings and corporate events to intimate dinners and private gatherings.
          </motion.p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {halls.map((hall, i) => (
            <HallCard key={hall.name} hall={hall} index={i} inView={gridInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
