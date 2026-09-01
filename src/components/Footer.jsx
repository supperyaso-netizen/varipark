import { useInView } from '../hooks/useInView'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Bar', href: '#bar' },
  { label: 'Halls', href: '#halls' },
  { label: 'Spa', href: '#spa' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [inViewRef, inView] = useInView({ threshold: 0.15 })

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer ref={inViewRef} className="bg-[#050505] border-t border-[rgba(245,245,240,0.04)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <div
              className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src="/logo.png"
                alt="Vari Park"
                className="h-8 md:h-9 w-auto"
              />
            </div>
            <p className="text-editorial text-[rgba(245,245,240,0.25)] text-[12px] leading-[1.8] mt-4 max-w-xs">
              Premium hospitality in the heart of Dindigul, Tamil Nadu. Welcoming guests since 2007.
            </p>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.2em] uppercase mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map(l => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors duration-300 text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.2em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <p className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px]">
                41, Palani Road, New Agraharam
              </p>
              <p className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px]">
                Dindigul — 624001, Tamil Nadu
              </p>
              <a href="tel:+919150007201" className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors">
                +91 91500 07201
              </a>
              <a href="tel:+919150007202" className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors">
                +91 91500 07202
              </a>
              <a href="mailto:variparkfo@gmail.com" className="text-editorial text-[rgba(245,245,240,0.3)] text-[12px] hover:text-[#f5f5f0] transition-colors">
                variparkfo@gmail.com
              </a>
              <p className="text-editorial text-[rgba(245,245,240,0.25)] text-[11px] mt-1">
                Check-in: 12:00 PM · Check-out: 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(245,245,240,0.04)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col items-center justify-center gap-1.5">
          <p className="text-[9px] font-medium text-[rgba(245,245,240,0.3)] tracking-[0.25em] uppercase">
            © 2026 VariPark. All Rights Reserved.
          </p>
          <p className="text-[9px] font-medium text-[rgba(245,245,240,0.18)] tracking-[0.25em] uppercase">
            Crafted by Yaso
          </p>
        </div>
      </div>
    </footer>
  )
}
