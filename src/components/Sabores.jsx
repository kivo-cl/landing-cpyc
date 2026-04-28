import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'

const sabores = [
  {
    title: 'Bocados Salados',
    items: ['Mini Sandwich', 'Mini Quiches'],
    img: `${CDN}/720635e6-whatsapp-image-2019-10-02-at-12-38-47-2_10hs0hs00000000000001o.jpeg`,
  },
  {
    title: 'Tablas y Ceviches',
    items: ['Tablas de Picoteo', 'Tablas Vegetarianas', 'Ceviches', 'Brochetas'],
    img: `${CDN}/b486c8ef-charcuterie-board-h1.webp`,
  },
  {
    title: 'Pastelería Artesanal',
    items: ['Postres', 'Cheesecakes', 'Apple Crumbel', 'Galletas'],
    img: `${CDN}/84fdff1e-269-mif-2034-surtido-de-pastelitos-1080x1080.webp`,
  },
  {
    title: 'Wraps y Quesadillas',
    items: ['Wraps variados', 'Quesadillas', 'Opciones vegetarianas'],
    img: `${CDN}/b03bdd1a-generated-image-september-24-2025-4-40pm_10hu0bk000000000000028.png`,
  },
  {
    title: 'Packs para Grupos',
    items: ['10 a 15 Personas', '20 a 25 Personas', '30 a 35 Personas'],
    img: `${CDN}/a9093328-whatsapp-image-2024-03-05-at-15-34-30_10a506r00000000000001o.jpeg`,
  },
]

function SaborCard({ s, className = '' }) {
  return (
    <div className={`sabor-card relative rounded-2xl overflow-hidden group cursor-pointer ${className}`}>
      <img
        src={s.img}
        alt={s.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
      />
      {/* Strong dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-negro/90 via-negro/55 to-negro/15" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-xl text-white mb-2 leading-tight">{s.title}</h3>
        <ul className="text-white/80 text-xs font-lato space-y-1">
          {s.items.map(item => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cafe flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Sabores() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sabor-card',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="sabores" ref={sectionRef} className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-3">NUESTRA CARTA DELIVERY</p>
          <h2 className="font-display text-4xl md:text-5xl text-negro">Nuestra variedad<br />de sabores</h2>
        </div>

        {/*
          Layout 5 cards:
          Row 1: [Bocados Salados — wide] [Tablas y Ceviches]
          Row 2: [Pastelería] [Wraps] [Packs para Grupos — wide]
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {/* Row 1 — col 1: spans 2 on md */}
          <SaborCard
            s={sabores[0]}
            className="col-span-2 md:col-span-2 h-64 md:h-80"
          />
          <SaborCard
            s={sabores[1]}
            className="col-span-2 md:col-span-1 h-64 md:h-80"
          />

          {/* Row 2 */}
          <SaborCard s={sabores[2]} className="col-span-1 h-56 md:h-72" />
          <SaborCard s={sabores[3]} className="col-span-1 h-56 md:h-72" />
          <SaborCard
            s={sabores[4]}
            className="col-span-2 md:col-span-1 h-56 md:h-72"
          />
        </div>

        {/* CTA banner */}
        <div className="bg-cafe rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-sm font-lato mb-1">¿Quieres ver todo nuestro menú?</p>
            <h3 className="font-display text-2xl text-white">Revisa nuestra carta completa de productos disponibles para delivery</h3>
          </div>
          <a
            href={`${CDN}/3e76ea21-menu_109909903l03300f036028.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-cafe font-lato font-bold px-8 py-4 rounded-full hover:bg-beige transition-colors duration-200"
          >
            <Download size={18} />
            Descargar Carta
          </a>
        </div>
      </div>
    </section>
  )
}
