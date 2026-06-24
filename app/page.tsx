const LOGO = "/logo.svg"
const CLIENTS = "https://www.figma.com/api/mcp/asset/1115bdbb-c5f2-4ec5-b5f4-39616d5b43d0"
const ARROW_EMAIL = "/arrow.svg"
const ARROW_SOCIAL = "/arrow.svg"
const FOOTER = "/mainlogo.svg"

const col1 = ['Brand Strategy', 'Brand Identity', 'Digital Design', 'Graphic Design']
const col2 = ['Art Direction', 'Photography', 'Illustration', 'Motion Design']
const col3 = ['User Experience', 'User Interface', 'Website Design', 'Web Development']

export default function Home() {
  return (
    <div className="p-4 flex flex-col">

      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={LOGO} alt="Only Interpretations" className="h-4 w-auto" />
        </a>
        <a href="/info" className="text-white text-base font-semibold tracking-wide">
          INFO
        </a>
      </nav>

      <h1 className="text-white font-normal mt-[164px] md:mt-[232px] text-[40px]/[48px] md:text-[72px]/[80px]">
        Only Interpretations is a creative studio focused on visual communication.
      </h1>

      <main className="flex flex-col gap-24 mt-24 md:mt-[364px]">

        <section className="flex flex-col gap-2">
          <div className="border-t border-[#2a2a2a]" />
          <div className="flex flex-col gap-11 pt-2">
            <h4 className="text-[#838383] text-sm font-normal">Clients</h4>
            <div className="flex items-start">
              <img src={CLIENTS} alt="Client logos" className="h-7 w-auto object-contain object-left" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="border-t border-[#2a2a2a]" />
          <div className="flex flex-col gap-11 pt-2">
            <h4 className="text-[#838383] text-sm font-normal">Services</h4>
            {/* FIXED: Replaced flex gap-256 with responsive CSS Grid columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              <div>{col1.map(s => <p key={s} className="text-white text-2xl leading-8 whitespace-nowrap">{s}</p>)}</div>
              <div>{col2.map(s => <p key={s} className="text-white text-2xl leading-8 whitespace-nowrap">{s}</p>)}</div>
              <div>{col3.map(s => <p key={s} className="text-white text-2xl leading-8 whitespace-nowrap">{s}</p>)}</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="border-t border-[#2a2a2a]" />
          <div className="flex flex-col gap-11 pt-2">
            <h4 className="text-[#838383] text-sm font-normal">Approach</h4>
            <p className="text-white text-2xl leading-8 max-w-[800px]">
              Before we start designing, we take the time to listen. We learn about your business,
              where you are now, what you want to achieve, and the challenges you&apos;re facing.
              Whether you&apos;re starting from scratch, updating, or changing direction, we help you
              create a clear and consistent brand that people can recognise and trust over time.
              We bring your idea to life across the key touchpoints of your business, showing how
              it should be applied clearly and effectively within your ecosystem.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="border-t border-[#2a2a2a]" />
          <div className="flex flex-col gap-11 pt-2">
            <h4 className="text-[#838383] text-sm font-normal">Contact</h4>
            <div className="flex flex-col items-start">
              {/* FIXED: Applied shrink-0 object-contain to icons to prevent stretching */}
              <a href="mailto:hello@onlyinterpretations.com" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>hello@onlyinterpretations.com</span>
                <img src={ARROW_EMAIL} alt="" className="w-10 h-10 ml-2 shrink-0 object-contain" />
              </a>
              <a href="https://www.instagram.com/only.interpretations/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>Instagram</span>
                <img src={ARROW_SOCIAL} alt="" className="w-10 h-10 ml-2 shrink-0 object-contain" />
              </a>
              <a href="https://www.linkedin.com/company/onlyinterpretations" target="_blank" rel="noopener noreferrer" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>Linkedin</span>
                <img src={ARROW_SOCIAL} alt="" className="w-10 h-10 ml-2 shrink-0 object-contain" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-24 md:mt-[364px]">
        <img src={FOOTER} alt="Only Interpretations" className="w-full h-auto object-contain" />
      </footer>

    </div>
  )
}