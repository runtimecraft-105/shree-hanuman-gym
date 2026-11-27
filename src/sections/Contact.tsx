
const GYM_PHONE = '919861617707'
const GYM_EMAIL = 'ADD_GYM_EMAIL_HERE'
const GYM_MAPS_LINK = 'https://maps.app.goo.gl/oE2P3UcaWyNwnu4NA'
const INSTAGRAM_LINK = 'https://www.instagram.com/iron_mandir/'

const openingHours = [
  { day: 'Monday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
  { day: 'Tuesday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
  { day: 'Wednesday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
  { day: 'Thursday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
  { day: 'Friday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
  { day: 'Saturday', morning: '5:30–9:30 AM', evening: 'Closed' },
  { day: 'Sunday', morning: '5:30–9:30 AM', evening: '4:30–9:30 PM' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" className="size-6" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
      <path d="M8.5 8.5c.5 2.5 2.5 4.5 5 5l1-1 2 1c-.3 1.5-1.5 2-2.5 2-3.5-.5-6-3-6.5-6.5 0-1 .5-2.2 2-2.5l1 2-1 1Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" className="size-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" className="size-6" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" className="size-7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
    </svg>
  )
}

export default function Contact() {
  const openDirections = () => {
    if (!navigator.geolocation) {
      window.open(GYM_MAPS_LINK, '_blank', 'noopener,noreferrer')
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const origin = `${coords.latitude},${coords.longitude}`

        const directionsUrl =
          `https://www.google.com/maps/dir/?api=1&origin=${origin}` +
          `&destination=${encodeURIComponent('Shree Hanuman Gym Jayapur')}` +
          '&travelmode=driving'

        window.open(directionsUrl, '_blank', 'noopener,noreferrer')
      },
      () => {
        window.open(GYM_MAPS_LINK, '_blank', 'noopener,noreferrer')
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <section
      id="contact"
      className="bg-paper px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Get In Touch
          </p>

          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-tight sm:text-6xl">
            Ready To
            <span className="text-brand"> Get Stronger?</span>
          </h2>

          <p className="mt-5 leading-7 text-black/60">
            Have questions about membership, training or fitness?
            Contact Shree Hanuman Gym today.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {/* Contact Information */}
          <div className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <h3 className="font-display text-3xl font-bold uppercase">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Reach out to us directly for membership enquiries
              and other information.
            </p>

            <div className="mt-9 space-y-7">

              <a
                href={`https://wa.me/${GYM_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition-colors hover:text-brand"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-white/10">
                  <WhatsAppIcon />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    WhatsApp / Phone
                  </span>
                  <span className="mt-1 block font-semibold">
                    +91 98616 17707
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-white/10">
                  <EmailIcon />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Email
                  </span>

                  {GYM_EMAIL !== 'ADD_GYM_EMAIL_HERE' ? (
                    <a
                      href={`mailto:${GYM_EMAIL}`}
                      className="mt-1 block font-semibold transition-colors hover:text-brand"
                    >
                      {GYM_EMAIL}
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm text-white/50">
                      Email address to be added
                    </span>
                  )}
                </span>
              </div>

              <a
                href={GYM_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition-colors hover:text-brand"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-white/10">
                  <MapPinIcon />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Gym Location
                  </span>
                  <span className="mt-1 block font-semibold">
                    Shree Hanuman Gym, Jayapur
                  </span>
                </span>
              </a>
            </div>

            <a
              href={`https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(
                'Hello! I would like to enquire about Shree Hanuman Gym membership.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex min-h-14 items-center justify-center gap-3 rounded-lg bg-brand px-6 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
            >
              <WhatsAppIcon />
              Send an Enquiry
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
            <div className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <InstagramIcon />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Stay Connected
            </p>

            <h3 className="mt-3 font-display text-3xl font-bold uppercase">
              Follow Us On Instagram
            </h3>

            <p className="mt-4 flex-1 leading-7 text-black/60">
              Follow our fitness journey, discover workout updates,
              explore gym activities and stay connected with the
              Shree Hanuman Gym community.
            </p>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-ink px-7 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand"
            >
              <InstagramIcon />
              Follow @iron_mandir
            </a>
          </div>

          {/* Opening Hours */}
          <div className="rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
            <h3 className="font-display text-3xl font-bold uppercase">
              Opening Hours
            </h3>

            <p className="mt-3 text-sm text-black/50">
              Visit us during our weekly training hours.
            </p>

            <div className="mt-8 space-y-4">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col justify-between gap-1 border-b border-black/10 pb-3 text-sm sm:flex-row sm:gap-2"
                >
                  <span className="font-bold">{item.day}</span>

                  <span className="text-black/60 sm:text-right">
                    {item.morning} / {item.evening}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={openDirections}
              className="mt-9 flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-ink px-6 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand"
            >
              <MapPinIcon />
              Get Directions
            </button>

            <p className="mt-3 text-xs leading-5 text-black/45">
              Allow location access when prompted to get directions
              from your current location.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
