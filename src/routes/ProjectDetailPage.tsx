import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/site/Nav'
import { Footer } from '@/components/site/Footer'
import { getProjectBySlug } from '@/data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <>
        <Nav />
        <main className="radial-bg min-h-screen px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="card-light">
              <p className="eyebrow mb-4">Project not found</p>
              <h1 className="display display-md mb-4">Project not found</h1>
              <p className="font-brand text-[16px] text-muted leading-relaxed mb-8 max-w-2xl">
                The project you are looking for is not available.
              </p>
              <Link to="/projects" className="btn btn-primary">
                Back to Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="bg-beige">
        <section className="radial-bg px-6 pt-32 pb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div className="flex flex-col gap-6">
              <span className="pill pill-forest w-fit">{project.client}</span>
              <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                <span className="pill">{project.category}</span>
                <span className="pill">{project.client}</span>
                <span className="pill">{project.location}</span>
                {project.year ? <span className="pill">{project.year}</span> : null}
              </div>

              <p className="font-brand text-[18px] text-muted leading-relaxed max-w-2xl">
                {project.intro}
              </p>
              <p className="font-brand text-[16px] text-muted leading-relaxed max-w-2xl">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Watch on YouTube <ArrowRight size={16} />
                </a>
                <Link to="/projects" className="btn btn-secondary">
                  All Projects
                </Link>
              </div>
            </div>

            {project.image ? (
              <div className="rounded-[24px] overflow-hidden border border-stone/20 bg-forest aspect-[4/5] lg:aspect-[5/6]">
                <img
                  src={project.image}
                  alt={`${project.title} featured visual`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
            <div className="card-light">
              <p className="eyebrow mb-4">Overview</p>
              <p className="font-brand text-[16px] text-muted leading-relaxed max-w-2xl">{project.summary}</p>
            </div>

            <div className="card-dark">
              <p className="eyebrow !text-lime/60 mb-4">Project Details</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime/60">Deliverables</p>
                  <ul className="mt-3 space-y-3">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-brand text-[15px] text-lime/80 leading-relaxed">
                        <span className="mt-2 w-2 h-2 rounded-full bg-lime shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime/60">Highlights</p>
                  <ul className="mt-3 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-brand text-[15px] text-lime/80 leading-relaxed">
                        <span className="mt-2 w-2 h-2 rounded-full bg-lime shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
            <div className="card-light h-full">
              <p className="eyebrow mb-4">Video</p>
              <div className="relative w-full overflow-hidden rounded-[18px] bg-ink aspect-video">
                <iframe
                  src={project.videoEmbedUrl}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="card-light h-full">
              <p className="eyebrow mb-4">Project Info</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Category</span>
                  <p className="font-brand text-[16px] text-ink mt-1">{project.category}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Location</span>
                  <p className="font-brand text-[16px] text-ink mt-1">{project.location}</p>
                </div>
                {project.year ? (
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Year</span>
                    <p className="font-brand text-[16px] text-ink mt-1">{project.year}</p>
                  </div>
                ) : null}
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Client</span>
                  <p className="font-brand text-[16px] text-ink mt-1">{project.client}</p>
                </div>
              </div>

              <div className="mt-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Services</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.services.map((service) => (
                    <span key={service} className="pill">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:pb-24">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            {project.gallery?.length ? (
              <>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-3">Gallery</p>
                    <h2 className="display display-md">Snaps from the project</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={image} className="rounded-[18px] overflow-hidden bg-forest aspect-[4/5]">
                      <img
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>

        {project.testimonial || project.rating ? (
          <section className="px-6 pb-24 sm:pb-32">
            <div className="max-w-6xl mx-auto">
              <div className="card-dark">
                <p className="eyebrow !text-lime/60 mb-4">Testimonial</p>
                {project.testimonial ? (
                  <p className="font-brand text-[24px] sm:text-[30px] text-lime leading-snug italic max-w-4xl">
                    &quot;{project.testimonial}&quot;
                  </p>
                ) : null}
                {project.testimonialByline ? (
                  <p className="font-mono text-[11px] text-lime/60 uppercase tracking-[0.16em] mt-5">{project.testimonialByline}</p>
                ) : null}
                {project.rating ? (
                  <p className="font-mono text-[11px] text-lime/60 uppercase tracking-[0.16em] mt-5">Rating: {project.rating}/5</p>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-6 pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="card-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="eyebrow mb-3">Final Navigation</p>
                <h2 className="display display-md">Ready to see more work?</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-secondary">
                  All Projects
                </Link>
                <a href="mailto:create@casastudioae.com" className="btn btn-primary">
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
