
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-ink sm:min-h-[700px]"
    >
      {/* Background image */}
      <img
        src="/images/hero.png"
        alt="Inside Shree Hanuman Gym"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl text-white">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-brand sm:text-base">
            Welcome to Jayapur's Fitness Destination
          </p>

          <h1 className="font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            SHREE HANUMAN
            <br />
            <span className="text-brand">GYM.</span>
          </h1>

          <h2 className="mt-7 font-display text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
            Your Fitness. Your Strength. Your Journey.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Build strength, improve your fitness and become a
            stronger version of yourself. Train with dedication,
            stay consistent and achieve your fitness goals with us.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#membership"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-brand px-8 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"

            >
              Join the Gym
            </a>

            <a
              href="#facilities"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/40 bg-white/5 px-8 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black hover:shadow-xl active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"

            >
              Explore Facilities
            </a>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-brand" />
    </section>
  )
}
