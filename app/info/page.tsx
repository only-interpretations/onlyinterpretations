const LOGO = "/logo.svg"
const ARROW_EMAIL = "/arrow.svg"
const ARROW_SOCIAL = "/arrow.svg"
const FOOTER = "/mainlogo.svg"

const CLIENT_1 = "/lndr.svg"
const CLIENT_2 = "/vans.svg"
const CLIENT_3 = "/valet.svg"
const CLIENT_4 = "/onlyholy.svg"
const CLIENT_5 = "/monoverse.svg"

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
            <div className="flex flex-wrap items-center gap-x-[56px] md:gap-x-[72px] gap-y-[28px] max-w-full">
              <img src={CLIENT_1} alt="LNDR" className="h-[20px] w-auto object-contain" />
              <img src={CLIENT_2} alt="Vans" className="h-[24px] w-auto object-contain" />
              <img src={CLIENT_3} alt="Valet" className="h-[24px] w-auto object-contain" />
              <img src={CLIENT_4} alt="Only Holy" className="h-[28px] w-auto object-contain" />
              <img src={CLIENT_5} alt="Monoverse" className="h-[16px] w-auto object-contain" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="border-t border-[#2a2a2a]" />
          <div className="flex flex-col gap-11 pt-2">
            <h4 className="text-[#838383] text-sm font-normal">Services</h4>
            <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-8 max-w-5xl">
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
              <a href="mailto:hello@onlyinterpretations.com" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>hello@onlyinterpretations.com</span>
                <div className="w-6 h-6 flex items-center justify-center shrink-0 ml-2">
                  <img src={ARROW_EMAIL} alt="" className="w-3 h-3 object-contain" />
                </div>
              </a>
              <a href="https://www.instagram.com/only.interpretations/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>Instagram</span>
                <div className="w-6 h-6 flex items-center justify-center shrink-0 ml-2">
                  <img src={ARROW_SOCIAL} alt="" className="w-3 h-3 object-contain" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/onlyinterpretations" target="_blank" rel="noopener noreferrer" className="flex items-center text-white text-2xl leading-9 hover:opacity-60 transition-opacity group">
                <span>Linkedin</span>
                <div className="w-6 h-6 flex items-center justify-center shrink-0 ml-2">
                  <img src={ARROW_SOCIAL} alt="" className="w-3 h-3 object-contain" />
                </div>
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