import { Phone, Mail, Instagram, MapPin } from 'lucide-react'
import Logo from './Logo'
import { trackWhatsAppClick } from '../utils/analytics'

const WA = 'https://wa.me/56966571472?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento'

const navLinks = [
  { label: 'Servicios',    href: '#especialidades' },
  { label: 'Carta',        href: '#sabores' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Testimonios',  href: '#testimonios' },
  { label: 'Contáctanos',  href: '#cotizar' },
]

const services = [
  'Catering Corporativo',
  'Catering Particular',
  'Coffee Break',
  'Delivery Gourmet',
  'Packs para Grupos',
]

export default function Footer() {
  return (
    <footer className="bg-negro text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size={72} variant="white" />
            </div>
            <p className="text-white/50 font-lato text-sm leading-relaxed">
              Desde el primer café hasta el último brindis, nos encargamos de cada detalle para que tú solo tengas que disfrutar. Nuestra propuesta combina profesionalismo, creatividad y cercanía.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs text-cafe uppercase tracking-widest mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-cafe font-lato text-sm transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs text-cafe uppercase tracking-widest mb-5">Servicios</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <span className="text-white/60 font-lato text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs text-cafe uppercase tracking-widest mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+56966571472" className="flex items-center gap-3 text-white/60 hover:text-cafe transition-colors text-sm font-lato">
                  <Phone size={15} className="text-cafe flex-shrink-0" />+569 6657 1472
                </a>
              </li>
              <li>
                <a href="mailto:info@contigopanycebolla.cl" className="flex items-center gap-3 text-white/60 hover:text-cafe transition-colors text-sm font-lato">
                  <Mail size={15} className="text-cafe flex-shrink-0" />info@contigopanycebolla.cl
                </a>
              </li>
              <li>
                <a href="https://instagram.com/contigopan_ycebolla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-cafe transition-colors text-sm font-lato">
                  <Instagram size={15} className="text-cafe flex-shrink-0" />@contigopan_ycebolla
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/60 text-sm font-lato">
                  <MapPin size={15} className="text-cafe flex-shrink-0 mt-0.5" />
                  Región Metropolitana, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-lato text-xs">
            Copyright © 2025 Contigo Pan y Cebolla
          </p>
          <p className="text-white/20 font-lato text-xs">
            www.contigopanycebolla.cl
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Escríbenos por WhatsApp"
        title="¿Tienes Dudas? Háblanos"
        onClick={() => trackWhatsAppClick('boton_flotante')}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.43-1.77A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4c-2.2 0-4.27-.6-6.04-1.64l-.43-.26-4.41 1.05 1.08-4.3-.28-.44A11.4 11.4 0 0 1 4.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4zm6.25-8.55c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z"/>
        </svg>
      </a>
    </footer>
  )
}
