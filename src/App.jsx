import { useState, useCallback, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import { preloadHeroImages } from './lib/preload'
import { useLenis } from './hooks/useLenis'

const About = lazy(() => import('./components/About'))
const Rooms = lazy(() => import('./components/Rooms'))
const Restaurant = lazy(() => import('./components/Restaurant'))
const Bar = lazy(() => import('./components/Bar'))
const Halls = lazy(() => import('./components/Halls'))
const Spa = lazy(() => import('./components/Spa'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const FullscreenGallery = lazy(() => import('./components/FullscreenGallery'))

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-[rgba(245,245,240,0.04)] to-transparent" />
}

function SectionFallback() {
  return <div className="min-h-[40vh] bg-[#050505]" />
}

export default function App() {
  useLenis()
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)
  const [gallery, setGallery] = useState(null)

  const openGallery = useCallback((images, index) => {
    setGallery({ images, index })
  }, [])

  const closeGallery = useCallback(() => {
    setGallery(null)
  }, [])

  useEffect(() => {
    let cancelled = false
    const t = setTimeout(() => {
      if (!cancelled) setReady(true)
    }, 1400)
    preloadHeroImages()
    return () => { cancelled = true; clearTimeout(t) }
  }, [])

  const handleLoaded = useCallback(() => {
    if (ready) setLoading(false)
  }, [ready])

  return (
    <div className="bg-[#050505] min-h-screen">
      {loading && <LoadingScreen onComplete={handleLoaded} contentReady={ready} />}
      <Navigation />
      <Hero ready={!loading} />
      <Suspense fallback={<SectionFallback />}>
        <SectionDivider />
        <About />
        <SectionDivider />
        <Rooms onImageClick={openGallery} />
        <SectionDivider />
        <Restaurant onImageClick={openGallery} />
        <SectionDivider />
        <Bar onImageClick={openGallery} />
        <SectionDivider />
        <Halls />
        <SectionDivider />
        <Spa onImageClick={openGallery} />
        <SectionDivider />
        <Contact />
        <Footer />
      </Suspense>

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
