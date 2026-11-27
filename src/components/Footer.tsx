
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-3">
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-bold uppercase"
            >
              SHREE HANUMAN GYM<span className="text-brand">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Train harder. Live stronger. Start your fitness
              journey with us and work towards a healthier lifestyle.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold uppercase">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/60">
              <a href="#home" className="transition-colors hover:text-brand">Home</a>
              <a href="#facilities" className="transition-colors hover:text-brand">Facilities</a>
              <a href="#membership" className="transition-colors hover:text-brand">Membership</a>
              <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
              <a href="#about" className="transition-colors hover:text-brand">About Us</a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold uppercase">
              Follow Our Journey
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Stay connected with our gym community, workouts and updates.
            </p>

            <a
              href="https://www.instagram.com/iron_mandir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Iron Mandir on Instagram"
              className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold transition-colors hover:border-brand hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="size-5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row">
          <p>© {currentYear} Shree Hanuman Gym. All rights reserved.</p>
          <a href="#home" className="transition-colors hover:text-brand">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
