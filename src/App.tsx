import { Routes, Route } from 'react-router-dom'
import { useReveal } from './hooks/use-reveal'
import { Nav } from './components/site/Nav'
import { Hero } from './components/site/Hero'
import { About } from './components/site/About'
import { Services } from './components/site/Services'
import { Work } from './components/site/Work'
import { Process } from './components/site/Process'
import { Clients } from './components/site/Clients'
import { Cta } from './components/site/Cta'
import { Footer } from './components/site/Footer'

function HomePage() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Clients />
      <Cta />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
