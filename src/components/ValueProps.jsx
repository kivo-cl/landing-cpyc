import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChefHat, Zap, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const props = [
  {
    icon: ChefHat,
    title: 'Chefs Profesionales',
    desc: 'Chefs certificados con +15 años de experiencia entregando un servicio auténtico y profesional en cada bocado.',
  },
  {
    icon: Zap,
    title: 'Servicio Versátil',
    desc: 'Desde eventos corporativos y celebraciones privadas, hasta delivery gourmet. Cubrimos de forma personalizada lo que tu evento necesita.',
  },
  {
    icon: Sparkles,
    title: 'Creatividad y Sabor',
    desc: 'Diseñamos propuestas de cóctel y coffee innovadoras y llenas de dedicación, transformando tu ocasión en una experiencia memorable.',
  },
]

export default function ValueProps() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.value-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-3">PORQUÉ ELEGIRNOS</p>
          <h2 className="font-display text-4xl md:text-5xl text-negro">
            Variedad, sabor y<br />profesionalismo para tus eventos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((p, i) => (
            <div key={i} className="value-card text-center p-8 rounded-2xl bg-beige-light hover:bg-beige transition-colors duration-300 card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe/10 rounded-2xl mb-6">
                <p.icon size={28} className="text-cafe" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-negro mb-3">{p.title}</h3>
              <p className="text-negro/60 font-lato text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
