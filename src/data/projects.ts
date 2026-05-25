export interface ProjectItem {
  title: string
  client: string
  category: string
  location: string
  year: string
  services: string[]
  summary: string
  homeSummary?: string
  image: string
  gallery?: string[]
  link: string
  featured: boolean
  status: 'published' | 'draft'
}

export const projects: ProjectItem[] = [
  {
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
    image: '/projects/fursan1.jpg',
    gallery: ['/projects/fursan1.jpg', '/projects/fursan2.webp', '/projects/fursan3.webp', '/projects/fursan4.webp'],
    link: 'https://www.youtube.com/watch?v=6jQLIWzu3Ds&t=2s',
    featured: true,
    status: 'published',
  },
  {
    title: 'Purpose — Narrative Lifestyle Production',
    client: 'GRID / João Samurai',
    category: 'Lifestyle',
    location: 'Dubai, UAE',
    year: '',
    services: ['Scripted Brand Film', 'Cinematic Athlete Portrait', 'Creative Voiceover', 'Sound Design'],
    summary:
      'Purpose is a cinematic exploration of the athlete’s mindset, featuring professional MMA fighter João Samurai. More than a training video, the film turns discipline, internal struggle and dedication into a scripted narrative with emotional depth and high-end sports cinematography.',
    homeSummary: 'A scripted athlete film turning discipline, struggle and performance into a cinematic narrative.',
    image: '/projects/purpose1.jpg',
    gallery: ['/projects/purpose1.jpg', '/projects/purpose2.webp', '/projects/purpose3.webp', '/projects/purpose4.webp'],
    link: 'https://www.youtube.com/watch?v=cvdjROVQR3s&t=4s',
    featured: true,
    status: 'published',
  },
  {
    title: 'Desert Mirage — Fashion & Lifestyle Campaign',
    client: 'Desert Mirage',
    category: 'Fashion',
    location: 'Dubai, UAE',
    year: '',
    services: ['Lifestyle Campaign Film', 'Social Media Teasers', 'Visual Lookbook', 'Outdoor Production'],
    summary:
      'Desert Mirage is a fashion and lifestyle campaign shaped by the light, scale and visual atmosphere of the Dubai desert. From concept to final edit, the production blended Middle Eastern allure with international campaign standards to create a polished visual story for a global audience.',
    homeSummary: 'A fashion and lifestyle campaign shaped by the light, scale and atmosphere of the Dubai desert.',
    image: '/projects/desert1.jpg',
    gallery: ['/projects/desert1.jpg', '/projects/desert2.jpg', '/projects/desert3.jpg', '/projects/desert4.jpg'],
    link: 'https://www.youtube.com/watch?v=Mh2mYMcz7tI',
    featured: true,
    status: 'published',
  },
]
