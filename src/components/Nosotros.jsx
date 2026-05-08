import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { trackWhatsAppClick } from '../utils/analytics'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'
const WA = 'https://wa.me/56966571472?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento'

const stats = [
  { num: '15+', label: 'Años de Experiencia' },
  { num: '6.000+', label: 'Eventos Realizados' },
  { num: '1.200+', label: 'Comensales Satisfechos' },
]

export default function Nosotros() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nosotros-img',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo('.nosotros-text',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="bg-beige py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="nosotros-img relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={`${CDN}/a9093328-whatsapp-image-2024-03-05-at-15-34-30_10tx0jy0go0jy06m00001o.jpeg`}
                alt="Equipo Contigo Pan y Cebolla"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-cafe rounded-2xl p-6 shadow-xl">
              <p className="text-4xl text-white leading-none" style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontWeight: 900 }}>15<span className="text-2xl">+</span></p>
              <p className="text-white/80 text-xs font-lato mt-1 leading-tight">Años de<br />experiencia</p>
            </div>
          </div>

          {/* Text */}
          <div className="nosotros-text">
            <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-4">SOBRE NOSOTROS</p>
            <h2 className="font-display text-4xl md:text-5xl text-negro mb-6 leading-tight">
              Mil sabores<br />en tu mesa
            </h2>
            <div className="space-y-4 text-negro/70 font-lato text-base leading-relaxed mb-8">
              <p>
                Somos <strong className="text-negro font-bold">Contigo Pan y Cebolla</strong>, una pyme nacida de la pasión y el profesionalismo de dos jóvenes chefs. Creemos firmemente en el poder de la comida para unir a las personas, y nuestra misión es ayudarte a crear momentos inolvidables en torno a la buena mesa.
              </p>
              <p>
                Nos distinguimos por un servicio de excelencia, donde el profesionalismo y la puntualidad son los pilares de nuestra promesa. Entendemos la importancia de tu tiempo y tu confianza, por lo que cada detalle es coordinado con precisión para que tú solo te dediques a disfrutar.
              </p>
              <p>
                No somos solo un servicio de catering; somos tus cómplices para que estés más cerca de quienes quieres, hoy y siempre.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-beige-dark mb-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl text-cafe" style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontWeight: 900 }}>{s.num}</p>
                  <p className="text-negro/60 text-xs font-lato mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              onClick={() => trackWhatsAppClick('nosotros')}
            >
              Cotiza Aquí <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
