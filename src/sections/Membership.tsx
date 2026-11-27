
const GYM_PHONE = '919861617707'

const plans = [
  {
    number: '01',
    name: 'Monthly',
    duration: '1 Month',
    description: 'A flexible way to start your fitness journey.',
    featured: false,
    tag: 'GET STARTED',
  },
  {
    number: '02',
    name: 'Quarterly',
    duration: '3 Months',
    description: 'Build consistency with a longer commitment.',
    featured: true,
    tag: 'MOST POPULAR',
  },
  {
    number: '03',
    name: 'Yearly',
    duration: '12 Months',
    description: 'Make fitness a long-term lifestyle.',
    featured: false,
    tag: 'LONG-TERM COMMITMENT',
  },
]

export default function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-black px-5 py-24 text-white lg:px-8 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Train With Purpose
          </p>

          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
            Choose Your
            <br />
            <span className="text-brand">Membership.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Every fitness journey starts with a decision.
            Choose your membership, show up consistently
            and work towards a stronger you.
          </p>
        </div>

        {/* Membership cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-9 ${
                plan.featured
                  ? 'border-brand bg-brand text-white'
                  : 'border-white/15 bg-[#171717] text-white hover:border-brand/70'
              }`}
            >
              {/* Decorative number */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-2 top-10 font-display text-8xl font-bold leading-none transition-transform duration-500 group-hover:-translate-y-2 ${
                  plan.featured ? 'text-white/10' : 'text-white/[0.04]'
                }`}
              >
                {plan.number}
              </span>

              {/* Plan header */}
              <div className="relative flex items-center justify-between gap-3">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    plan.featured ? 'text-white/80' : 'text-brand'
                  }`}
                >
                  {plan.name}
                </span>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    plan.featured
                      ? 'border border-white/30 px-3 py-2 text-white'
                      : 'border border-white/15 px-3 py-2 text-white/50'
                  }`}
                >
                  {plan.tag}
                </span>
              </div>

              {/* Duration */}
              <div className="relative mt-12">
                <h3 className="font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
                  {plan.duration}
                </h3>

                <div
                  className={`mt-6 h-1 w-14 transition-all duration-300 group-hover:w-24 ${
                    plan.featured ? 'bg-white' : 'bg-brand'
                  }`}
                />
              </div>

              {/* Description */}
              <p
                className={`relative mt-7 max-w-xs flex-1 leading-7 ${
                  plan.featured ? 'text-white/80' : 'text-white/55'
                }`}
              >
                {plan.description}
              </p>

              {/* WhatsApp enquiry */}
              <a
                href={`https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(
                  `Hello! I would like to enquire about the ${plan.name} (${plan.duration}) membership at Shree Hanuman Gym.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative mt-9 inline-flex min-h-14 items-center justify-between gap-4 rounded-lg px-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-white hover:text-black'
                    : 'bg-brand text-white hover:bg-white hover:text-black'
                }`}
              >
                Enquire Now
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/45">
            Your journey. Your commitment. Your transformation.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Shree Hanuman Gym · Jayapur
          </p>
        </div>

      </div>
    </section>
  )
}
