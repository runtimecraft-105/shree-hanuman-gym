const facilities = [
   {
    number: '01',
    title: 'Powerlifting Bench',
    description: 'Build upper-body strength and power with focused bench press training.',
    image: '/images/hero4.png',
    alt: 'Athlete performing a barbell bench press on a gym bench.',
    span: 'lg:col-span-7',
  },
  {
    number: '02',
    title: 'Customized Dumbbells',
    description: 'Improve strength and build muscle with versatile dumbbell exercises for your entire body.',
    image: '/images/hero2.png',
    alt: 'Customized dumbbells arranged on a gym weight rack.',
    span: 'lg:col-span-5',
  },
  {
    number: '03',
    title: 'Functional Zone',
    description: 'Kettlebells, sleds and open space for full-body movement.',
    image: '/images/functional.png',
    alt: 'Open turf area with kettlebells and a training sled',
    span: 'lg:col-span-5',
  },
   {
    number: '04',
    title: 'Strength Training',
    description: 'Racks, barbells and free weights to build real strength.',
    image: '/images/strength.png',
    alt: 'Barbell loaded on a power rack in the strength area',
    span: 'lg:col-span-7',
  },
  {
    number: '05',
    title: 'Personal Guidance',
    description: 'Work towards your fitness goals with proper guidance.',
    image: '/images/hero4.png',
    alt: 'Coach helping a member with their form',
    span: 'lg:col-span-6',
  },
  {
    number: '06',
    title: 'Customized Squate Rack',
    description:'Train safely with adjustable squat racks designed for strength, stability and controlled lifting.',
    image: '/images/hero3.png',
    alt: 'Athlete performing barbell squats using an adjustable squat rack.',
    span: 'lg:col-span-6',
  },
]

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-ink px-5 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              What We Offer
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-bold uppercase leading-tight sm:text-6xl">
              Built For Every
              <span className="text-brand"> Part Of Your Training.</span>
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-white/60">
            Six areas under one roof, so you can lift, run, learn and recover
            without leaving the gym.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {facilities.map((facility) => (
            <article
              key={facility.number}
              className={`group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden bg-white/5 p-6 sm:min-h-[380px] sm:p-8 ${facility.span}`}
            >
              <img
                src={facility.image}
                alt={facility.alt}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

              <span className="font-display text-3xl font-bold text-brand">
                {facility.number}
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold uppercase sm:text-3xl">
                  {facility.title}
                </h3>
                <p className="mt-3 max-w-md leading-7 text-white/70">
                  {facility.description}
                </p>
              </div>

              {/* Brand bar grows across the bottom on hover */}
              <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
