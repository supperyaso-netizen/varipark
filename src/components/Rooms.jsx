import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const rooms = [
  {
    name: 'Premium AC',
    tagline: 'Comfort. Simplicity. Essential.',
    sqft: '225 sq.ft',
    description: 'Elegantly appointed with modern amenities, city views, and everything you need for a comfortable stay.',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Work Desk', 'In-Room Dining'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&auto=format',
  },
  {
    name: 'Deluxe King',
    tagline: 'Space. Premium. Refined.',
    sqft: '280 sq.ft',
    description: 'Spacious comfort with premium bedding, enhanced amenities, and thoughtful touches for the discerning traveler.',
    amenities: ['King Bed', 'Mini Bar', 'Safe', 'Tea Maker', 'Premium Linens'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80&auto=format',
  },
  {
    name: 'King Studio',
    tagline: 'Living. Style. Generous.',
    sqft: '320 sq.ft',
    description: 'A generous living space combining comfort and style, ideal for extended stays and families.',
    amenities: ['King Bed', 'Sitting Area', 'Work Station', 'Blackout Curtains', 'Streaming'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d955e30db?w=1200&q=80&auto=format',
  },
  {
    name: 'Junior Suite',
    tagline: 'Finest. Separate. Premium.',
    sqft: '350 sq.ft',
    description: 'The finest accommodation featuring a separate living area and premium furnishings throughout.',
    amenities: ['Separate Living Area', 'King Bed', 'Sofa Bed', 'Luxury Bath', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80&auto=format',
  },
]

export default function Rooms({ onImageClick }) {
  const sectionRef = useRef(null)
  const [activeRoom, setActiveRoom] = useState(0)
  const [headingRef, headingInView] = useInView({ threshold: 0.15 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])

  const nextRoom = () => setActiveRoom(p => (p + 1) % rooms.length)
  const prevRoom = () => setActiveRoom(p => (p - 1 + rooms.length) % rooms.length)

  const room = rooms[activeRoom]

  return (
    <section id="rooms" ref={sectionRef} className="relative bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div ref={headingRef} className="mb-12 md:mb-16 lg:mb-20">
          <motion.p
            className="label-micro text-[rgba(245,245,240,0.35)] mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Stay
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h2
              className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={headingInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Rest. Reset.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-[clamp(32px,5vw,64px)] text-[#f5f5f0] leading-[1]"
              initial={{ y: '110%', opacity: 0 }}
              animate={headingInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Repeat.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 relative">
            <motion.div
              className="overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ scale: imgScale }}
              onClick={() => onImageClick?.([{ src: room.image, alt: room.name }], 0)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom}
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
              </AnimatePresence>
            </motion.div>

            <div className="flex items-center justify-between mt-4 md:mt-6">
              <div className="flex items-center gap-3">
                {rooms.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className={`h-[2px] transition-all duration-500 ${
                      i === activeRoom
                        ? 'w-8 bg-[#f5f5f0]'
                        : 'w-4 bg-[rgba(245,245,240,0.15)] hover:bg-[rgba(245,245,240,0.3)]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevRoom}
                  className="w-9 h-9 border border-[rgba(245,245,240,0.08)] flex items-center justify-center text-[rgba(245,245,240,0.3)] hover:text-[#f5f5f0] hover:border-[rgba(245,245,240,0.2)] transition-all duration-400"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextRoom}
                  className="w-9 h-9 border border-[rgba(245,245,240,0.08)] flex items-center justify-center text-[rgba(245,245,240,0.3)] hover:text-[#f5f5f0] hover:border-[rgba(245,245,240,0.2)] transition-all duration-400"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.2em] uppercase mb-2">
                  Room {String(activeRoom + 1).padStart(2, '0')} / {String(rooms.length).padStart(2, '0')}
                </p>

                <h3 className="text-[clamp(24px,3vw,36px)] font-bold text-[#f5f5f0] tracking-[-0.02em] mb-1">
                  {room.name}
                </h3>

                <p className="text-[11px] font-light text-[rgba(245,245,240,0.35)] tracking-[0.1em] uppercase mb-5">
                  {room.tagline}
                </p>

                <div className="divider-line mb-5" />

                <p className="text-editorial text-[rgba(245,245,240,0.45)] text-[13px] leading-[1.8] mb-6">
                  {room.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-medium text-[rgba(245,245,240,0.5)] tracking-[0.1em] uppercase">
                    {room.sqft}
                  </span>
                </div>

                <div className="mb-8">
                  <p className="text-[9px] font-medium text-[rgba(245,245,240,0.25)] tracking-[0.2em] uppercase mb-3">
                    Amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map(a => (
                      <span
                        key={a}
                        className="text-[10px] font-medium text-[rgba(245,245,240,0.4)] border border-[rgba(245,245,240,0.08)] px-3 py-1.5 tracking-[0.05em]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn-primary">
                  <span>View Rooms</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
