import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MapPin, ChevronDown } from 'lucide-react'

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'
const HERO_BG = `${CDN}/a9093328-whatsapp-image-2024-03-05-at-15-34-30_10zl0nq0zl0l200001c01o.jpeg`
const WA = 'https://wa.me/56966571472?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.hero-badge', '.hero-title', '.hero-sub', '.hero-ctas', '.hero-stats'],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Catering Contigo Pan y Cebolla"
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-negro/85 via-negro/65 to-negro/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-cafe/25 border border-cafe/50 text-cafe-light px-4 py-2 rounded-full text-sm font-lato font-semibold mb-8 backdrop-blur-sm">
            <MapPin size={14} />
            Cobertura exclusiva en Región Metropolitana
          </div>

          {/* Tag line */}
          <p className="hero-badge text-cafe font-lato font-bold text-xs uppercase tracking-widest mb-4">
            EXPERTOS EN SERVICIO DE CATERING Y COFFEE BREAK PARA EMPRESAS
          </p>

          {/* Heading */}
          <h1 className="hero-title font-display text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.1] mb-6">
            Sorprende a tus invitados con una experiencia gastronómica única
          </h1>

          {/* Subtext */}
          <p className="hero-sub text-white/75 text-lg font-lato leading-relaxed mb-10 max-w-xl">
            Solicita un presupuesto y deja que nos encarguemos de realizar tu evento a la perfección. Disfruta de productos hechos con ingredientes frescos y de primer nivel.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 shadow-lg shadow-cafe/30"
            >
              Cotiza Aquí
            </a>
            <a href="#especialidades" className="btn-outline-white text-base px-10 py-4">
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/15">
            {[
              { num: '15+', label: 'Años de Experiencia' },
              { num: '6.000+', label: 'Eventos Realizados' },
              { num: '1.200+', label: 'Comensales Satisfechos' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-4xl text-cafe" style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontWeight: 900 }}>{s.num}</p>
                <p className="text-white/55 text-sm font-lato mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <ChevronDown size={22} />
      </div>
    </section>
  )
}
