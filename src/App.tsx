import { About } from './components/About'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Region } from './components/Region'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Areas />
        <Region />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
