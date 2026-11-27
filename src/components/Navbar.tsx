
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('')
  const [views, setViews] = useState<number | null>(null)
  const [isOnline, setIsOnline] = useState<boolean | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Live Indian time
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
      )
    }

    updateTime()
    const interval = window.setInterval(updateTime, 1000)

    return () => window.clearInterval(interval)
  }, [])

  // Website views API
  useEffect(() => {
    let active = true

    const loadViews = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
        })

        if (!response.ok) {
          throw new Error('Unable to load views')
        }

        const data = await response.json()

        if (active && typeof data.views === 'number') {
          setViews(data.views)
          setIsOnline(true)
        } else if (active) {
          setIsOnline(false)
        }
      } catch {
        if (active) {
          setIsOnline(false)
        }
      }
    }

    loadViews()

    return () => {
      active = false
    }
  }, [])

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const closeMenu = () => setIsOpen(false)

  const WebsiteStats = () => (
    <div className="flex items-center gap-3 text-xs font-medium text-white/80 sm:gap-4">
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          className="size-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>{views === null ? '—' : views.toLocaleString('en-IN')}</span>
        <span className="text-white/50">Views</span>
      </div>

      <span className="h-4 w-px bg-white/15" />

      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          className="size-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <span>{time || '--:--'}</span>
      </div>

      <span className="h-4 w-px bg-white/15" />

      <div className="flex items-center gap-1.5">
        <span
          className={`size-2 rounded-full ${
            isOnline === true
              ? 'bg-green-500'
              : isOnline === false
                ? 'bg-red-500'
                : 'bg-yellow-400'
          }`}
        />
        <span>
          {isOnline === true
            ? 'Online'
            : isOnline === false
              ? 'Offline'
              : 'Checking'}
        </span>
      </div>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Shree Hanuman Gym home"
        >
          <img
            src="/images/logo.jpg"
            alt="Shree Hanuman Gym logo"
            className="size-11 rounded-lg object-cover"
          />

          <div className="leading-tight">
            <span className="block font-display text-lg font-bold uppercase tracking-wide">
              SHREE HANUMAN
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
              GYM · JAYAPUR
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop stats and CTA */}
        <div className="hidden items-center gap-5 xl:flex">
          <WebsiteStats />

          <a
            href="#membership"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-6 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
          >
            Join Now ↗
          </a>
        </div>

        {/* Mobile / tablet menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-all duration-300 hover:border-brand hover:bg-brand xl:hidden"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / tablet stats: always visible */}
      <div className="border-t border-white/10 px-4 py-3 xl:hidden">
        <div className="mx-auto flex max-w-7xl justify-center">
          <WebsiteStats />
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 xl:hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-brand"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#membership"
            onClick={closeMenu}
            className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-brand px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Join Now ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
