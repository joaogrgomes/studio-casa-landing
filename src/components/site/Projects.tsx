import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Asterisk, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import type { ProjectItem } from '@/data/projects'

const palette = [
  { bgClass: 'bg-forest', toneClass: 'text-lime', iconClass: 'icon-cream' },
  { bgClass: 'bg-lime', toneClass: 'text-ink', iconClass: 'icon-forest' },
  { bgClass: 'bg-tomato', toneClass: 'text-beige', iconClass: 'icon-cream' },
  { bgClass: 'bg-beige', toneClass: 'text-ink', iconClass: 'icon-forest' },
]

type ProjectCardProps = {
  project: ProjectItem
  visual: (typeof palette)[number]
  delay: string
}

function ProjectCard({ project, visual, delay }: ProjectCardProps) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : project.image ? [project.image] : []
  const hasMultipleImages = images.length > 1
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectHref = project.slug ? `/projects/${project.slug}` : '/projects'

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <article className="card-light reveal flex flex-col gap-0 overflow-hidden" style={{ transitionDelay: delay }}>
      <div className={`relative h-[210px] overflow-hidden ${visual.bgClass} ${visual.toneClass} flex items-center justify-center`}>
        {images.length > 0 ? (
          <img src={images[currentImageIndex]} alt={`${project.title} visual ${currentImageIndex + 1}`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex items-center gap-3 opacity-80">
              <Asterisk size={16} />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Case Visual Placeholder</span>
            </div>
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goToPreviousImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-beige/90 text-ink border border-ink/10 hover:bg-beige transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goToNextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-beige/90 text-ink border border-ink/10 hover:bg-beige transition-colors flex items-center justify-center"
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={`${project.title}-dot-${index}`}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentImageIndex ? 'bg-beige' : 'bg-beige/45'}`}
                />
              ))}
            </div>
          </>
        )}

        <span className={`icon-circle ${visual.iconClass} absolute top-4 right-4`}>
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <p className="eyebrow">
          {project.client}
          {project.year ? ` · ${project.year}` : ''}
        </p>
        <h3 className="font-brand font-bold text-[22px] text-ink leading-tight">{project.title}</h3>
        <p className="font-brand text-[15px] text-muted leading-relaxed">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          <span className="pill !text-[11px] !py-1 !px-3">{project.category}</span>
          <span className="pill !text-[11px] !py-1 !px-3">{project.location}</span>
          {project.featured && <span className="pill pill-tomato !text-[11px] !py-1 !px-3">Featured</span>}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-stone/30">
          <span className="font-mono text-[11px] text-muted tracking-[0.12em] uppercase">{project.services.slice(0, 2).join(' · ')}</span>
          <Link
            to={projectHref}
            className="btn btn-secondary !text-[12px] !py-2 !px-4"
          >
            View Project <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const publishedProjects = projects.filter((project) => project.status === 'published')

  return (
    <>
      <section className="pt-32 pb-20 px-6 radial-bg">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-col gap-5 max-w-3xl">
            <span className="pill pill-forest w-fit">Our Projects</span>
            <p className="eyebrow">03 — Portfolio</p>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}>
              Creative projects,
              <br />
              built with intention.
            </h1>
            <p className="font-brand text-[16px] text-muted leading-relaxed max-w-2xl">
              From strategy to campaign delivery, we build work that combines strong ideas, clear execution, and long-term brand value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige px-6 py-20 sm:py-24">
        {publishedProjects.length > 0 ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publishedProjects.map((project, i) => {
              const visual = palette[i % palette.length]
              const delay = `${i * 70}ms`
              return <ProjectCard key={`${project.client}-${project.title}-${project.year}`} project={project} visual={visual} delay={delay} />
            })}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="card-light reveal text-center py-14 px-6">
              <p className="font-brand text-[18px] text-muted leading-relaxed max-w-2xl mx-auto">
                Selected case studies are being curated. For portfolio requests, contact us.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="bg-beige px-6 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto reveal">
          <div className="card-dark flex flex-col items-center text-center gap-6 py-12 px-6">
            <span className="pill pill-lime">Next Case Updates</span>
            <h2 className="heading-lime text-[clamp(30px,4vw,42px)] max-w-3xl">
              Ready to review a full case study tailored to your project goals?
            </h2>
            <a href="mailto:create@casastudioae.com" className="btn btn-primary">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
