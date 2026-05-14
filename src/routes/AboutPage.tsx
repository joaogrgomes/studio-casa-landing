import { useReveal } from '@/hooks/use-reveal'
import { Nav } from '@/components/site/Nav'
import { AboutContent } from '@/components/site/AboutContent'
import { Cta } from '@/components/site/Cta'
import { Footer } from '@/components/site/Footer'

export default function AboutPage() {
  useReveal()
  return (
    <>
      <Nav />
      <AboutContent />
      <Cta />
      <Footer />
    </>
  )
}
