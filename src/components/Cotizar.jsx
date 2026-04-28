import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Phone, Mail, Instagram } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CDN = 'https://d9hhrg4mnvzow.cloudfront.net/www.contigopanycebolla.cl'
const WA_NUMBER = '56966571472'

const inputCls = 'bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-lato text-sm focus:outline-none focus:border-cafe transition-all'

export default function Cotizar() {
  const sectionRef = useRef(null)

  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '',
    servicio: '', fecha: '', personas: '', mensaje: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cotizar-content',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const lines = [
      '¡Hola! Quiero cotizar un evento con Contigo Pan y Cebolla 🍞',
      '',
      `👤 *Nombre:* ${form.nombre}`,
      `📞 *Teléfono:* ${form.telefono}`,
      `📧 *Correo:* ${form.email}`,
      form.servicio  ? `🍽️ *Servicio:* ${form.servicio}`                       : null,
      form.fecha     ? `📅 *Fecha del evento:* ${formatDate(form.fecha)}`       : null,
      form.personas  ? `👥 *N° de personas:* ${form.personas}`                  : null,
      form.mensaje   ? `💬 *Detalles:* ${form.mensaje}`                         : null,
    ].filter(Boolean).join('\n')

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="cotizar" ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${CDN}/a9093328-whatsapp-image-2024-03-05-at-15-34-30_100000018f0od00002m01o.jpeg`}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-negro/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-cafe/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="cotizar-content grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-4">¿LISTO PARA COMENZAR?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Cotiza tu evento con nosotros y haz que tus invitados tengan un recuerdo delicioso.
            </h2>
            <p className="text-white/60 font-lato text-base leading-relaxed mb-10">
              Llena el formulario y te enviamos un mensaje directo por WhatsApp con todos los detalles. Tus datos están 100% seguros y son confidenciales.
            </p>

            <div className="flex flex-col gap-5">
              <a href="tel:+56966571472" className="flex items-center gap-4 text-white/80 hover:text-cafe transition-colors group">
                <div className="w-11 h-11 rounded-full bg-cafe/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cafe/40 transition-colors">
                  <Phone size={18} className="text-cafe" />
                </div>
                <span className="font-lato">+569 6657 1472</span>
              </a>
              <a href="mailto:info@contigopanycebolla.cl" className="flex items-center gap-4 text-white/80 hover:text-cafe transition-colors group">
                <div className="w-11 h-11 rounded-full bg-cafe/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cafe/40 transition-colors">
                  <Mail size={18} className="text-cafe" />
                </div>
                <span className="font-lato">info@contigopanycebolla.cl</span>
              </a>
              <a href="https://instagram.com/contigopan_ycebolla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-cafe transition-colors group">
                <div className="w-11 h-11 rounded-full bg-cafe/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cafe/40 transition-colors">
                  <Instagram size={18} className="text-cafe" />
                </div>
                <span className="font-lato">@contigopan_ycebolla</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h3 className="font-display text-2xl text-white mb-6">Cotizar Evento</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" placeholder="Tu nombre" required
                  value={form.nombre} onChange={set('nombre')}
                  className={inputCls}
                />
                <input
                  type="tel" placeholder="Teléfono" required
                  value={form.telefono} onChange={set('telefono')}
                  className={inputCls}
                />
              </div>
              <input
                type="email" placeholder="Correo electrónico" required
                value={form.email} onChange={set('email')}
                className={inputCls}
              />
              <select
                value={form.servicio} onChange={set('servicio')}
                className={`${inputCls} text-white/70 appearance-none`}
              >
                <option value="">Tipo de servicio</option>
                <option>Catering Corporativo</option>
                <option>Catering Particular</option>
                <option>Coffee Break</option>
                <option>Delivery Gourmet</option>
                <option>Packs para Grupos</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={form.fecha} onChange={set('fecha')}
                  className={`${inputCls} text-white/70`}
                />
                <input
                  type="number" placeholder="N° personas" min="1"
                  value={form.personas} onChange={set('personas')}
                  className={inputCls}
                />
              </div>
              <textarea
                rows={3} placeholder="Cuéntanos más sobre tu evento..."
                value={form.mensaje} onChange={set('mensaje')}
                className={`${inputCls} resize-none`}
              />
              <button type="submit"
                className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2 mt-1">
                <Send size={17} />
                Cotizar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}
