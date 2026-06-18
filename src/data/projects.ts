export interface ProjectItem {
  slug: string
  title: string
  client: string
  category: string
  location: string
  year: string
  services: string[]
  summary: string
  homeSummary?: string
  intro: string
  highlights: string[]
  deliverables: string[]
  videoEmbedUrl: string
  image: string
  gallery?: string[]
  link: string
  featured: boolean
  status: 'published' | 'draft'
  testimonial?: string
  testimonialByline?: string
  rating?: number
}

export const projects: ProjectItem[] = [
  {
    slug: 'fursan-mma',
    title: 'Fursan MMA — Building the Future of Combat',
    client: 'Fursan MMA',
    category: 'Event',
    location: 'Dubai, UAE',
    year: '',
    services: [
      'Event Promo',
      'Highlight Reels',
      'Behind the Scenes Storytelling',
      'Visual Identity for Promotional Materials',
    ],
    summary:
      'Content production for Fursan MMA required a balance between professional polish and the raw intensity of amateur combat sports. Based in Dubai, the project focused on promotional materials, event highlights and fighter-driven storytelling, helping position Fursan as a strong platform for emerging MMA talent.',
    homeSummary: 'Promotional content and fighter-driven storytelling for a Dubai-based MMA event platform.',
    intro:
      'A Dubai-based event content project created to give amateur MMA the visual intensity, structure and storytelling of a top-tier combat platform.',
    highlights: [
      'Built a strong visual direction for promotional materials and event highlights.',
      'Captured the emotion, sacrifice and intensity behind each fighter.',
      'Positioned the event as a serious platform for emerging MMA talent.',
    ],
    deliverables: [
      'Official Event Promo',
      'Rising Stars Highlight Reels',
      'Behind the Scenes Storytelling',
      'Promotional Visual Direction',
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/6jQLIWzu3Ds',
    image: '/projects/fursan1.jpg',
    gallery: ['/projects/fursan1.jpg', '/projects/fursan2.webp', '/projects/fursan3.webp', '/projects/fursan4.webp'],
    link: 'https://www.youtube.com/watch?v=6jQLIWzu3Ds&t=2s',
    featured: true,
    status: 'published',
  },
  {
    slug: 'purpose',
    title: 'Purpose — Narrative Lifestyle Production',
    client: 'GRID / João Samurai',
    category: 'Lifestyle',
    location: 'Dubai, UAE',
    year: '',
    services: ['Scripted Brand Film', 'Cinematic Athlete Portrait', 'Creative Voiceover', 'Sound Design'],
    summary:
      'Purpose is a cinematic exploration of the athlete’s mindset, featuring professional MMA fighter João Samurai. More than a training video, the film turns discipline, internal struggle and dedication into a scripted narrative with emotional depth and high-end sports cinematography.',
    homeSummary: 'A scripted athlete film turning discipline, struggle and performance into a cinematic narrative.',
    intro: 'A cinematic athlete film exploring discipline, internal struggle and the mindset behind professional performance.',
    highlights: [
      'Developed a scripted narrative around the mindset of João Samurai.',
      'Combined intimate camera work, voiceover and sound design.',
      'Moved beyond training content to create an emotional athlete portrait.',
    ],
    deliverables: [
      'Scripted Brand Film',
      'Cinematic Athlete Portrait',
      'Creative Voiceover Integration',
      'Sound Design',
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/cvdjROVQR3s',
    image: '/projects/purpose1.jpg',
    gallery: ['/projects/purpose1.jpg', '/projects/purpose2.webp', '/projects/purpose3.webp', '/projects/purpose4.webp'],
    link: 'https://www.youtube.com/watch?v=cvdjROVQR3s&t=4s',
    featured: true,
    status: 'published',
  },
  {
    slug: 'desert-mirage',
    title: 'Desert Mirage — Fashion & Lifestyle Campaign',
    client: 'Desert Mirage',
    category: 'Fashion',
    location: 'Dubai, UAE',
    year: '',
    services: ['Lifestyle Campaign Film', 'Social Media Teasers', 'Visual Lookbook', 'Outdoor Production'],
    summary:
      'Desert Mirage is a fashion and lifestyle campaign shaped by the light, scale and visual atmosphere of the Dubai desert. From concept to final edit, the production blended Middle Eastern allure with international campaign standards to create a polished visual story for a global audience.',
    homeSummary: 'A fashion and lifestyle campaign shaped by the light, scale and atmosphere of the Dubai desert.',
    intro: 'A fashion and lifestyle campaign shaped by the light, scale and atmosphere of the Dubai desert.',
    highlights: [
      'Used the Dubai desert as a cinematic backdrop for fashion and lifestyle storytelling.',
      'Balanced outdoor production demands with a polished campaign aesthetic.',
      'Created visual assets designed for a global audience.',
    ],
    deliverables: [
      'Main Lifestyle Campaign Film',
      'Social Media Fashion Teasers',
      'High-End Visual Lookbook',
      'Outdoor Production',
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/Mh2mYMcz7tI',
    image: '/projects/desert1.jpg',
    gallery: ['/projects/desert1.jpg', '/projects/desert2.jpg', '/projects/desert3.jpg', '/projects/desert4.jpg'],
    link: 'https://www.youtube.com/watch?v=Mh2mYMcz7tI',
    featured: true,
    status: 'published',
  },
]

export const publishedProjects = projects.filter((project) => project.status === 'published')

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
