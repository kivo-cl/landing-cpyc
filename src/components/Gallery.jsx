import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'

const images = [
  { src: `${CDN}/02e5f807--mg-4660-min_113x0ql0qo0ql06l00001o.jpg`,                              alt: 'Catering Contigo Pan y Cebolla' },
  { src: `${CDN}/54508c9f--mg-4174-min_11400qo0qo0qo06o00001o.jpg`,                              alt: 'Evento catering Santiago' },
  { src: `${CDN}/c3ad4ad6--mg-4192-min_11400qo0qo0qo06o00001o.jpg`,                              alt: 'Coffee break empresas' },
  { src: `${CDN}/eec02e5d--mg-4338_11400qo0qo0qo06o00001o.jpg`,                                  alt: 'Servicio de catering profesional' },
  { src: `${CDN}/f1f57774--mg-4527-min_11400qo0qo0qo06o00001o.jpg`,                              alt: 'Bocados para eventos' },
  { src: `${CDN}/dabc76f7-whatsapp-image-2019-10-02-at-12-38-47-3_10hs0nq0hs0hs00002y01o.jpeg`, alt: 'Variedad gastronómica' },
]

function Img({ src, alt, className = '' }) {
  return (
    <div className={`gallery-img relative overflow-hidden group ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-cafe/0 group-hover:bg-cafe/20 transition-colors duration-300" />
    </div>
  )
}

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-img',
        { scale: 1.06, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.9, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-negro">
      {/*
        3-col grid on md+, 9 cells total:
        Row 1: [img0 col-span-2] [img1]
        Row 2: [img0 (cont.)  ] [img2]
        Row 3: [img3] [img4] [img5]
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        <Img src={images[0].src} alt={images[0].alt}
             className="col-span-1 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" />
        <Img src={images[1].src} alt={images[1].alt} className="aspect-square" />
        <Img src={images[2].src} alt={images[2].alt} className="aspect-square" />
        <Img src={images[3].src} alt={images[3].alt} className="aspect-square" />
        <Img src={images[4].src} alt={images[4].alt} className="aspect-square" />
        <Img src={images[5].src} alt={images[5].alt} className="aspect-square" />
      </div>
    </section>
  )
}
