import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 250)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => onComplete(), 1600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 10 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <img
                src="/logo.png"
                alt="Vari Park"
                className="h-9 md:h-10 w-auto"
              />
            </motion.div>

            <motion.div
              className="w-14 h-[1px] bg-[rgba(245,245,240,0.1)] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#f5f5f0]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>

            <motion.p
              className="eyebrow text-[rgba(245,245,240,0.3)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vari Park · Dindigul
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
