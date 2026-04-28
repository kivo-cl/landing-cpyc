import { Star } from 'lucide-react'

// Testimonios reales del sitio web original
const testimonios = [
  {
    name: 'Macarena Mercado',
    initials: 'MM',
    text: 'Nos han acompañado en nuestros últimos 3 eventos corporativos y todo ha salido increíble: la comida, la atención, la buena onda del equipo… todo perfecto. Se preocupan de cada detalle. Los recomendaría mil veces, siempre que hacemos eventos nos piden el dato. ¡Gracias por todo!',
    rating: 5,
  },
  {
    name: 'Mariel Bacigalupe',
    initials: 'MB',
    text: 'He comprado varias cajitas para distintos eventos y siempre han sido un éxito. La calidad y presentación de cada producto demuestran el cuidado y la dedicación que ponen en cada detalle. ¡100% recomendado!',
    rating: 5,
  },
  {
    name: 'Marcela Gavilán',
    initials: 'MG',
    text: 'Conozco a la banquetera de Contigo Pan y Cebolla desde mi matrimonio civil en el 2021. Recientemente los contacté para el bautizo y cumpleaños de mi hija. El servicio fue de un cóctel abundante para 80 personas. En precio y calidad nos sorprendió enormemente. Además la atención fue maravillosa.',
    rating: 5,
  },
  {
    name: 'Francisca Onel',
    initials: 'FO',
    text: 'Excelente servicio. Tuve una muy buena experiencia contratando al equipo de Contigo Pan y Cebolla para el catering de un evento importante. ¡Se pasaron!',
    rating: 5,
  },
  // Duplicados para que el slider sea más largo y fluido
  {
    name: 'Macarena Mercado',
    initials: 'MM',
    text: 'Nos han acompañado en nuestros últimos 3 eventos corporativos y todo ha salido increíble: la comida, la atención, la buena onda del equipo… todo perfecto. Se preocupan de cada detalle. Los recomendaría mil veces.',
    rating: 5,
  },
  {
    name: 'Mariel Bacigalupe',
    initials: 'MB',
    text: 'He comprado varias cajitas para distintos eventos y siempre han sido un éxito. La calidad y presentación de cada producto demuestran el cuidado y la dedicación que ponen en cada detalle. ¡100% recomendado!',
    rating: 5,
  },
]

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#f4b400] text-[#f4b400]" />
      ))}
    </div>
  )
}

function Card({ t }) {
  return (
    <div className="w-80 md:w-96 flex-shrink-0 bg-white rounded-2xl p-7 shadow-sm mx-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Stars n={t.rating} />
        <span className="text-xs text-negro/40 font-lato bg-beige-light px-2 py-1 rounded-full">Google</span>
      </div>
      {/* Text */}
      <p className="text-negro/70 font-lato text-sm leading-relaxed flex-1 italic">
        &ldquo;{t.text}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-beige">
        <div className="w-10 h-10 rounded-full bg-cafe/15 flex items-center justify-center flex-shrink-0">
          <span className="font-display text-sm text-cafe">{t.initials}</span>
        </div>
        <p className="font-lato font-bold text-sm text-negro">{t.name}</p>
      </div>
    </div>
  )
}

export default function Testimonios() {
  // Triplicamos para un loop perfecto sin saltos
  const all = [...testimonios, ...testimonios, ...testimonios]

  return (
    <section id="testimonios" className="bg-beige py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <p className="text-cafe font-lato font-semibold text-sm uppercase tracking-widest mb-3">LA OPINIÓN DE NUESTROS CLIENTES</p>
        <h2 className="font-display text-4xl md:text-5xl text-negro">Testimonios</h2>
      </div>

      {/* Slider container */}
      <div className="overflow-hidden w-full">
        <div className="marquee-track py-2">
          {all.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
