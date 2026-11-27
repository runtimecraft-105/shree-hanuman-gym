
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Get To Know Us
          </p>

          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
            More Than
            <br />
            <span className="text-brand">Just A Gym.</span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Three-photo gallery */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {/* Large image */}
            <div className="row-span-2 overflow-hidden rounded-lg">
              <img
                src="/images/family1.jpg"
                alt="Shree Hanuman Gym community gathering"
                loading="lazy"
                decoding="async"
                className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:min-h-[450px]"
              />
            </div>

            {/* Second image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/family2.jpg"
                alt="Shree Hanuman Gym members together"
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Third image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/family3.jpg"
                alt="Shree Hanuman Gym family gathering"
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

          </div>

          {/* About content */}
          <div className="lg:pl-4">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Shree Hanuman Gym · Jayapur
            </p>

            <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Your Place To
              <span className="text-brand"> Get Stronger.</span>
            </h3>

            <p className="mt-7 text-base leading-8 text-white/65">
              Fitness is more than lifting weights. It is about
              building discipline, confidence and a healthier
              lifestyle, one workout at a time.
            </p>

            <p className="mt-5 text-base leading-8 text-white/65">
              At Shree Hanuman Gym, we believe every fitness
              journey deserves dedication and consistency.
              Whether you are starting out or working towards
              your next goal, make every workout count.
            </p>

            {/* Highlight */}
            <div className="mt-9 border-l-2 border-brand py-2 pl-5">
              <p className="font-display text-2xl font-semibold uppercase">
                Train Hard.
                <span className="text-brand"> Stay Strong.</span>
              </p>
              <p className="mt-2 text-sm text-white/45">
                Your fitness journey starts with one step.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#facilities"
              className="mt-10 inline-flex min-h-14 items-center gap-5 rounded-lg bg-brand px-7 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Discover Our Facilities
              <span aria-hidden="true" className="text-lg">↗</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}
