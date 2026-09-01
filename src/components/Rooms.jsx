import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const rooms = [
  {
    name: 'Deluxe Room',
    tagline: 'Comfort. Simplicity. Essential.',
    description: 'A thoughtfully appointed room offering modern comfort, city views, and everything you need for a restful stay.',
    amenities: ['King Bed', 'Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Work Desk', 'In-Room Dining', 'Intercom', 'Breakfast', 'Snacks'],
    image: 'https://vari-park.hotelsintamilnadu.com/data/Pics/OriginalPhoto/12472/1247243/1247243173/vari-park-comfort-stay-dindigul-pic-7.JPEG',
  },
  {
    name: 'Superior Room',
    tagline: 'Space. Comfort. Refined.',
    description: 'A spacious retreat with a separate living area, fridge and cosy sofa, ideal for a relaxed, effortless stay.',
    amenities: ['Fridge', 'Living Room', 'Sofa', 'Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Work Desk', 'In-Room Dining', 'Intercom', 'Breakfast', 'Snacks'],
    image: 'https://vari-park.hotelsintamilnadu.com/data/Pics/OriginalPhoto/11553/1155365/1155365487/vari-park-comfort-stay-dindigul-pic-8.JPEG',
  },
  {
    name: 'Family Room – 3 Bed',
    tagline: 'Comfort. Family. Together.',
    description: 'Designed for families, this generous room features three beds, a fridge, a separate living room and a sofa for shared comfort.',
    amenities: ['3 Beds', 'Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Work Desk', 'In-Room Dining', 'Intercom', 'Breakfast', 'Snacks'],
    image: 'https://vari-park.hotelsintamilnadu.com/data/Pics/OriginalPhoto/12472/1247248/1247248960/vari-park-comfort-stay-dindigul-pic-9.JPEG',
  },
  {
    name: 'Family Room – 4 Bed',
    tagline: 'Space. Family. Freedom.',
    description: 'Our largest family option with four beds, a fridge, a separate living room and a sofa — spacious and welcoming for the whole family.',
    amenities: ['4 Beds', 'Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Work Desk', 'In-Room Dining', 'Intercom', 'Breakfast', 'Snacks'],
    image: 'https://vari-park.hotelsintamilnadu.com/data/Pics/OriginalPhoto/12509/1250934/1250934655/vari-park-comfort-stay-dindigul-pic-10.JPEG',
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
                  className="w-full h-full object-cover will-change-transform"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                  decoding="async"
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

                {room.sqft && (
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[11px] font-medium text-[rgba(245,245,240,0.5)] tracking-[0.1em] uppercase">
                      {room.sqft}
                    </span>
                  </div>
                )}

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

                <a
                  href="https://www.booking.com/hotel/in/vari-park.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>View Rooms</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <div className="flex items-center gap-2 mt-6 pt-5 border-t border-[rgba(245,245,240,0.05)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[rgba(245,245,240,0.3)] flex-none">
                    <path d="M5 11h14M5 11c-.9 0-1.7-.7-1.7-1.6S4.7 7.8 5.6 7.8h12.8c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.7 1.6M5 11v5a1.5 1.5 0 001.5 1.5h2A1.5 1.5 0 0010 16v-2h4v2a1.5 1.5 0 001.5 1.5h2A1.5 1.5 0 0019 16v-5" />
                  </svg>
                  <p className="text-[10px] font-light text-[rgba(245,245,240,0.3)] tracking-[0.05em]">
                    Complimentary parking facility available for guests
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
