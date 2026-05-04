import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-brown-primary/10 bg-[#f3ede3]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-5">
          <p className="eyebrow">Moob Consulting</p>
          <h2 className="max-w-md font-display text-3xl leading-tight text-brown-primary">
            Quietly premium digital systems for teams that need clarity, speed, and trust.
          </h2>
          <p className="max-w-lg text-sm leading-7 text-dark-gray/68">
            We partner with founders, operators, and institutions across Nigeria and the United
            States to design better websites, internal tools, and learning experiences.
          </p>
        </div>

        <div className="space-y-4 text-sm text-dark-gray/70">
          <p className="eyebrow">Explore</p>
          <Link to="/about" className="block hover:text-brown-primary">About</Link>
          <Link to="/services" className="block hover:text-brown-primary">Services</Link>
          <Link to="/portfolio" className="block hover:text-brown-primary">Selected Work</Link>
          <Link to="/coding-classes" className="block hover:text-brown-primary">Coding Classes</Link>
          <Link to="/contact" className="block hover:text-brown-primary">Contact</Link>
        </div>

        <div className="space-y-4 text-sm text-dark-gray/70">
          <p className="eyebrow">Contact</p>
          <p>moobconsulting@gmail.com</p>
          <p>+234 813 552 3948</p>
          <p>+1 (903) 265-1195</p>
          <p>Theodak Plaza, CBD, Abuja</p>
          <p>Nigeria and United States</p>
        </div>
      </div>

      <div className="border-t border-brown-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs uppercase tracking-[0.22em] text-dark-gray/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© Moob Consulting LLC</p>
          <p>Strategy • Design • Delivery</p>
        </div>
      </div>
    </footer>
  )
}
