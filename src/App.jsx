import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Especialidades from './components/Especialidades'
import Sabores from './components/Sabores'
import Nosotros from './components/Nosotros'
import Clientes from './components/Clientes'
import Testimonios from './components/Testimonios'
import Gallery from './components/Gallery'
import Cotizar from './components/Cotizar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Especialidades />
        <Sabores />
        <Nosotros />
        <Clientes />
        <Testimonios />
        <Gallery />
        <Cotizar />
      </main>
      <Footer />
    </div>
  )
}
