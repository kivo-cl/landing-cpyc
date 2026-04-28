import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'
const SZ = '_1046046000000000000028'

const clientes = [
  { name: 'TVN',                       img: `${CDN}/1e9121a8-captura-de-pantalla-2025-09-04-a-las-02-09-51_10da0gn000000000000028.png` },
  { name: 'Canal 13',                   img: `${CDN}/8af55b35-canal-13-300x300${SZ}.png` },
  { name: 'Santander',                  img: `${CDN}/090a98cd-santander-300x300${SZ}.png` },
  { name: 'Telefónica',                 img: `${CDN}/51f5138d-telefonica-300x300${SZ}.png` },
  { name: 'entel',                      img: `${CDN}/07ab8b7b-entel-300x300${SZ}.png` },
  { name: 'INACAP',                     img: `${CDN}/8024f9ed-5_1000000000000000000028.png` },
  { name: 'Universidad San Sebastián',  img: `${CDN}/86897db8-universidad-san-sebastian-300x300${SZ}.png` },
  { name: 'Prokart',                    img: `${CDN}/640056f4-prokart-300x300${SZ}.png` },
  { name: 'White World',                img: `${CDN}/ccdd3a4e-whiteworld-300x300${SZ}.png` },
  { name: 'IFF',                        img: `${CDN}/42ae1af9-diseno-sin-titulo-2025-10-02t102529-703${SZ}.png` },
  { name: 'Cliente',                    img: `${CDN}/82b1a8eb-diseno-sin-titulo-2025-10-02t102416-253${SZ}.png` },
  { name: 'Cliente',                    img: `${CDN}/30f5a900-1${SZ}.png` },
  { name: 'Cliente',                    img: `${CDN}/597af861-2${SZ}.png` },
  { name: 'Cliente',                    img: `${CDN}/8297c5c6-3${SZ}.png` },
  { name: 'Cliente',                    img: `${CDN}/c9000f30-4${SZ}.png` },
]

export default function Clientes() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cliente-item',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-3">ELLOS HAN CONFIADO EN NOSOTROS</p>
          <h2 className="font-display text-3xl md:text-4xl text-negro">Algunos de nuestros clientes</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {clientes.map((c, i) => (
            <div
              key={i}
              className="cliente-item w-20 h-16 md:w-24 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              title={c.name}
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
