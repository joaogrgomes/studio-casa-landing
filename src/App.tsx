import { lazy, Suspense } from 'react'
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

const ProjectsPage = lazy(() => import('./routes/ProjectsPage'))
const AboutPage    = lazy(() => import('./routes/AboutPage'))
const ProjectDetailPage = lazy(() => import('./routes/ProjectDetailPage'))

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
      <Route path="/projects" element={
        <Suspense fallback={null}>
          <ProjectsPage />
        </Suspense>
      } />
      <Route path="/projects/:slug" element={
        <Suspense fallback={null}>
          <ProjectDetailPage />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={null}>
          <AboutPage />
        </Suspense>
      } />
    </Routes>
  )
}
