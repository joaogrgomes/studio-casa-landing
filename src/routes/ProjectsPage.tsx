import { useReveal } from '@/hooks/use-reveal'
import { Nav } from '@/components/site/Nav'
import { Projects } from '@/components/site/Projects'
import { Cta } from '@/components/site/Cta'
import { Footer } from '@/components/site/Footer'

export default function ProjectsPage() {
  useReveal()
  return (
    <>
      <Nav />
      <Projects />
      <Cta />
      <Footer />
    </>
  )
}
