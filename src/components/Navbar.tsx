
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
      >
        {/* Gym Logo */}
        <a
          href="#home"
          aria-label="Shree Hanuman Gym home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/images/logo.jpg"
            alt="Shree Hanuman Gym"
            className="h-14 w-auto max-w-[150px] object-contain sm:h-16 sm:max-w-[170px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group relative py-2 text-sm font-semibold uppercase tracking-wider text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#membership"
          className="hidden min-h-12 items-center justify-center gap-2 bg-brand px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:inline-flex"
        >
          Join Now
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/25 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"

        >
          {isOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-6"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="border-t border-white/10 bg-black px-5 py-5 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white/75 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
            >
              {label}
            </a>
          ))}

          <a
            href="#membership"
            onClick={closeMenu}
            className="mt-5 flex min-h-14 items-center justify-center gap-2 bg-brand px-6 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            Join Now
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
