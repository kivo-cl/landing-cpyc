import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'

const WA_BASE = 'https://wa.me/56966571472?text='

const especialidades = [
  {
    title: 'Eventos Corporativos',
    desc: 'Impulsa tus reuniones y eventos de empresa con un servicio gastronómico profesional que refleja la calidad y seriedad de tu marca.',
    img: `${CDN}/5b8d3089-eventos-corporativos_100000000000000000001o.jpeg`,
    wa: WA_BASE + encodeURIComponent('Hola, me interesa cotizar un Evento Corporativo'),
  },
  {
    title: 'Eventos Particulares',
    desc: 'Creamos eventos únicos, con opciones personalizables de productos para que la experiencia sea en base a tus gustos. Contamos con desarrollo de evento completo, mesón de cóctel y cóctel delivery.',
    img: `${CDN}/040a6552-generated-image-september-05-2025-11-38am_10000000yo0n200000001o.jpeg`,
    wa: WA_BASE + encodeURIComponent('Hola, me interesa cotizar un Evento Particular'),
  },
  {
    title: 'Coffee Breaks',
    desc: 'Deliciosas pausas diseñadas para recargar energías y fortalecer la conexión entre tus equipos o invitados.',
    img: `${CDN}/05e04019-generated-image-september-05-2025-11-30am_10000000xf0m801200001o.jpeg`,
    wa: WA_BASE + encodeURIComponent('Hola, me interesa cotizar un Coffee Break'),
  },
]

export default function Especialidades() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.esp-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="especialidades" ref={sectionRef} className="bg-beige py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-3">BIENVENIDO A CONTIGO PAN Y CEBOLLA</p>
          <h2 className="font-display text-4xl md:text-5xl text-negro">Nuestras Especialidades</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {especialidades.map((e, i) => (
            <article key={i} className="esp-card group rounded-2xl overflow-hidden bg-white shadow-md card-hover flex flex-col">
              <div className="relative h-60 overflow-hidden flex-shrink-0">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-negro/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl text-negro mb-3">{e.title}</h3>
                <p className="text-negro/60 font-lato text-sm leading-relaxed mb-6 flex-1">{e.desc}</p>
                <a
                  href={e.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cafe text-white font-lato font-bold text-sm py-3 px-6 rounded-full hover:bg-cafe-dark transition-colors duration-200 active:scale-95 self-start"
                >
                  <MessageCircle size={16} />
                  Más Info
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
