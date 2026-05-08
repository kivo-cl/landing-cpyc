import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { trackWhatsAppClick } from '../utils/analytics'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-negro/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <Logo size={56} variant={scrolled ? 'white' : 'white'} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/90 hover:text-cafe transition-colors duration-200 font-lato text-sm font-semibold tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+56966571472"
              className="flex items-center gap-2 text-white/80 hover:text-cafe transition-colors text-sm font-lato"
            >
              <Phone size={15} />
              +56 9 6657 1472
            </a>
            <a href="https://wa.me/56966571472?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-6" onClick={() => trackWhatsAppClick('navbar_desktop')}>
              Cotiza aquí
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-negro/98 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-cafe text-base font-lato font-semibold py-2 border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/56966571472?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento" target="_blank" rel="noopener noreferrer" onClick={() => { setOpen(false); trackWhatsAppClick('navbar_mobile') }} className="btn-primary text-center mt-2">
              Cotiza aquí
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
