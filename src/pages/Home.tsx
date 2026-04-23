import { ArrowRight, Code2, Landmark, MonitorSmartphone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const offers = [
  {
    title: 'Digital Platforms',
    detail: 'Editorial websites and service platforms designed to feel expensive, clear, and fast.',
  },
  {
    title: 'Operational Software',
    detail: 'Internal systems and client-facing tools that reduce friction instead of adding more.',
  },
  {
    title: 'Technical Support',
    detail: 'Ongoing maintenance, advisory, and implementation support for teams in motion.',
  },
]

const proof = [
  { value: '12+', label: 'years shaping digital products' },
  { value: '3', label: 'core markets served across consulting, education, and operations' },
  { value: '24/7', label: 'support readiness for active client systems' },
]

export default function Home() {
  return (
    <div>
      <section className="hero-shell">
        <div className="section-container grid gap-14 py-16 lg:grid-cols-[1.25fr_0.9fr] lg:items-end lg:py-24">
          <div className="space-y-8">
            <div data-reveal className="space-y-5">
              <p className="eyebrow">Technology consulting for ambitious teams</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.96] text-brown-primary sm:text-6xl lg:text-7xl">
                Built with restraint. Felt with confidence.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-dark-gray/72 sm:text-lg">
                Moob Consulting creates polished digital experiences for businesses that want a
                human, credible presence online without the noise, clutter, or template feel.
              </p>
            </div>

            <div data-reveal className="flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start a project
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline inline-flex items-center justify-center gap-2">
                See selected work
              </Link>
            </div>

            <div data-reveal className="grid gap-4 sm:grid-cols-3">
              {proof.map((item) => (
                <div key={item.label} className="metric-card">
                  <p className="font-display text-3xl text-brown-primary">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-dark-gray/62">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="panel-card space-y-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow">Current focus</p>
                <h2 className="mt-3 font-display text-3xl text-brown-primary">
                  Minimal interfaces with executive calm.
                </h2>
              </div>
              <Sparkles className="mt-1 text-mustard" size={24} />
            </div>

            <div className="space-y-4 text-sm leading-7 text-dark-gray/70">
              <p>
                We strip away generic marketing blocks and replace them with measured hierarchy,
                grounded color, stronger copy rhythm, and motion that feels deliberate.
              </p>
              <p>
                The result is a website that reads as considered work, not generated output.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="soft-row">
                <MonitorSmartphone size={18} />
                <span>Responsive product and brand websites</span>
              </div>
              <div className="soft-row">
                <Code2 size={18} />
                <span>Modern web applications and automation</span>
              </div>
              <div className="soft-row">
                <Landmark size={18} />
                <span>Consulting for institutions and growing teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div data-reveal className="space-y-4">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">
              Precision-led digital work that still feels warm.
            </h2>
          </div>

          <div className="grid gap-5">
            {offers.map((item) => (
              <article key={item.title} data-reveal className="soft-card">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-brown-primary">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-gray/68">
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-dark-gray/35">0{offers.indexOf(item) + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="panel-card">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-brown-primary">
              Fewer elements. Better judgment. Stronger outcomes.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-dark-gray/45">Discover</p>
                <p className="mt-3 text-sm leading-7 text-dark-gray/68">
                  We clarify the business problem before touching layout or code.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-dark-gray/45">Design</p>
                <p className="mt-3 text-sm leading-7 text-dark-gray/68">
                  We shape typography, spacing, and narrative until the experience feels honest.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-dark-gray/45">Deliver</p>
                <p className="mt-3 text-sm leading-7 text-dark-gray/68">
                  We build quickly, refine carefully, and stay available after launch.
                </p>
              </div>
            </div>
          </div>

          <div data-reveal className="cta-card">
            <p className="eyebrow text-cream/70">Let’s make it better</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-cream">
              If your current site feels generic, we can fix that.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-cream/75">
              We redesign websites, service pages, and supporting systems with sharper taste and
              clearer business intent.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-mustard"
            >
              Explore services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
