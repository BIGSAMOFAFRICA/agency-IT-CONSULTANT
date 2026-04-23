import { ArrowRight, BookOpen, Code2, Headphones, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Website Design',
    icon: Monitor,
    image: 'webdesign.jpg',
    summary:
      'Service websites, landing pages, and brand platforms with cleaner hierarchy, stronger tone, and better conversion flow.',
    deliverables: [
      'Information architecture and messaging refinement',
      'Responsive UI design with premium spacing and typography',
      'Performance-led implementation on modern stacks',
    ],
  },
  {
    title: 'Product and App Development',
    icon: Code2,
    image: 'mobile development class.jpg',
    summary:
      'Internal tools and customer-facing applications built to reduce operational friction and hold up under real usage.',
    deliverables: [
      'React-based interfaces and tailored workflows',
      'API integrations, data handling, and scalable architecture',
      'Launch support and post-release iteration',
    ],
  },
  {
    title: 'IT Support and Advisory',
    icon: Headphones,
    image: 'backend class.jpg',
    summary:
      'Hands-on technical support for teams that need reliable guidance, system maintenance, and implementation help.',
    deliverables: [
      'Ongoing support retainers and troubleshooting',
      'Infrastructure, security, and maintenance planning',
      'Practical advisory for in-house teams and leaders',
    ],
  },
  {
    title: 'Coding Classes',
    icon: BookOpen,
    image: 'bootcamp.jpg',
    summary:
      'Structured training for students, entry-level professionals, and organizations that want practical technical skills.',
    deliverables: [
      'Beginner-friendly and intermediate class pathways',
      'Project-based teaching with mentor support',
      'Flexible formats for individuals and groups',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="hero-shell">
        <div className="section-container grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-24">
          <div data-reveal className="space-y-6">
            <p className="eyebrow">Services</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.97] text-brown-primary sm:text-6xl">
              Digital delivery with more taste and less noise.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-dark-gray/72 sm:text-lg">
              We design and build for clients who want a sharper online presence, cleaner user
              journeys, and technology that feels considered from the first interaction.
            </p>
          </div>

          <div data-reveal className="panel-card">
            <p className="eyebrow">Engagement model</p>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-dark-gray/68">
              <p>Project-based design and development for launches, redesigns, and growth phases.</p>
              <p>Advisory support for teams that need strategic clarity before they build.</p>
              <p>Longer-term maintenance and support where continuity matters.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20 lg:py-24">
        <div className="space-y-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              className="grid gap-8 border-b border-brown-primary/10 py-8 md:grid-cols-[0.24fr_1fr_0.8fr]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-dark-gray/40">
                <service.icon size={18} className="text-mustard" />
                <span>0{index + 1}</span>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-brown-primary">{service.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-gray/68">
                  {service.summary}
                </p>
                <div className="mt-6 rounded-3xl overflow-hidden border border-brown-primary/10 shadow-sm">
                  <img
                    src={new URL(`../assets/${service.image}`, import.meta.url).href}
                    alt={`${service.title} illustration`}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item) => (
                  <div key={item} className="soft-row">
                    <ArrowRight size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal className="soft-card">
            <p className="eyebrow">What clients usually need</p>
            <h2 className="mt-4 font-display text-4xl text-brown-primary">Most engagements begin with one of three asks.</h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-dark-gray/68">
              <p>“Our current website makes us look smaller than we are.”</p>
              <p>“We need a cleaner digital system for clients or internal staff.”</p>
              <p>“We want a trusted technical partner, not just another freelancer.”</p>
            </div>
          </div>

          <div data-reveal className="cta-card">
            <p className="eyebrow text-cream/70">Start here</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-cream">
              Bring the brief. We’ll shape the right response.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-cream/75">
              Whether you need a redesign, a product build, or sharper technical guidance, we can
              map the work and move quickly.
            </p>
            <Link to="/contact" className="btn-secondary mt-8 inline-flex">
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
