import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import About from './components/About'
import Restaurant from './components/Restaurant'
import Rooms from './components/Rooms'
import Bar from './components/Bar'
import Spa from './components/Spa'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FullscreenGallery from './components/FullscreenGallery'
import { useLenis } from './hooks/useLenis'

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-[rgba(245,245,240,0.04)] to-transparent" />
}

export default function App() {
  useLenis()
  const [loading, setLoading] = useState(true)
  const [gallery, setGallery] = useState(null)

  const openGallery = useCallback((images, index) => {
    setGallery({ images, index })
  }, [])

  const closeGallery = useCallback(() => {
    setGallery(null)
  }, [])

  return (
    <div className="bg-[#050505] min-h-screen">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navigation />
      <Hero ready={!loading} />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Restaurant onImageClick={openGallery} />
      <SectionDivider />
      <Rooms onImageClick={openGallery} />
      <SectionDivider />
      <Bar onImageClick={openGallery} />
      <SectionDivider />
      <Spa onImageClick={openGallery} />
      <SectionDivider />
      <Contact />
      <Footer />

      <AnimatePresence>
        {gallery && (
          <FullscreenGallery
            images={gallery.images}
            startIndex={gallery.index}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
