import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logo.jpg'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/coding-classes', label: 'Classes' },
  { to: '/portfolio', label: 'Work' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-brown-primary/10 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-brown-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brown-primary/15 bg-white text-xs font-bold shadow-[0_8px_30px_rgba(87,60,31,0.08)]">
            <img src={Logo} alt="Moob Consulting Logo" />
          </div>
          <div>
            <div className="font-semibold">Moob Consulting</div>
            <div className="text-[10px] tracking-[0.3em] text-dark-gray/50">Digital Advisory</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm transition-colors ${
                location.pathname === item.to
                  ? 'text-brown-primary'
                  : 'text-dark-gray/68 hover:text-brown-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brown-primary/10 bg-white text-brown-primary md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-brown-primary/10 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl px-4 py-3 text-sm text-dark-gray/75 transition-colors hover:bg-cream hover:text-brown-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
