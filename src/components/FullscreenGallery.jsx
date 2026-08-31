import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FullscreenGallery({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex || 0)

  const next = useCallback(() => {
    setCurrent(p => (p + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent(p => (p - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, next, prev])

  const touchRef = useRef(0)
  const onTouchStart = (e) => { touchRef.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const diff = touchRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev()
    }
  }

  useEffect(() => {
    const preload = []
    ;[current - 1, current + 1].forEach((i) => {
      const idx = (i + images.length) % images.length
      if (idx !== current) {
        const img = new Image()
        img.src = images[idx].src
        preload.push(img)
      }
    })
    return () => { preload.forEach(i => { i.src = '' }) }
  }, [current, images])

  return (
    <motion.div
      className="fixed inset-0 z-[150] bg-[#050505] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center text-[rgba(245,245,240,0.4)] hover:text-[#f5f5f0] transition-colors duration-300"
        aria-label="Close gallery"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="absolute top-5 left-5 z-20">
        <p className="text-[10px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.15em] uppercase">
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </p>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-[rgba(245,245,240,0.3)] hover:text-[#f5f5f0] transition-colors duration-300"
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-[rgba(245,245,240,0.3)] hover:text-[#f5f5f0] transition-colors duration-300"
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div className="w-full h-full flex items-center justify-center px-12 md:px-20 py-16">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className="max-w-full max-h-full object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
