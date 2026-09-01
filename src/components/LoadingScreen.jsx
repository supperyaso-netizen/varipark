import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  useEffect(() => {
    let value = 0
    const id = setInterval(() => {
      value += Math.random() * 3 + 1.5
      if (value >= 100) {
        value = 100
        clearInterval(id)
        setTimeout(() => setLeaving(true), 250)
        setTimeout(() => onCompleteRef.current(), 700)
      }
      setProgress(value)
    }, 60)

    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <img
                src="/logo.png"
                alt="Vari Park"
                className="h-9 md:h-10 w-auto"
              />
            </motion.div>

            <div className="w-36 md:w-44 h-[2px] bg-[rgba(245,245,240,0.12)] overflow-hidden rounded-full">
              <div
                className="h-full bg-[#f5f5f0] rounded-full"
                style={{
                  transform: `scaleX(${progress / 100})`,
                  transformOrigin: 'left',
                  transition: 'transform 150ms linear',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
