const LOGO = "/logo.svg"
const BACK_ARROW = "/backarrow.svg"
const ARROW_EMAIL = "/arrow.svg"
const ARROW_SOCIAL = "/arrow.svg"
const FOOTER = "/mainlogo.svg"

export default function Info() {
  return (
    <div className="p-4 min-h-screen flex flex-col justify-between">

      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={LOGO} alt="Only Interpretations" className="h-4 w-auto" />
        </a>
        <a href="/" className="text-white text-base font-semibold tracking-wide">
          HOME
        </a>
      </nav>

      <main className="flex flex-col gap-24 mt-[172px]">

        <div className="flex flex-col items-start">
          <a href="/" className="mb-4">
            <img src={BACK_ARROW} alt="Back" className="w-5 h-5 object-contain" />
          </a>
          <h1 className="text-white font-normal text-[28px]/[38px] md:text-[48px]/[60px]">
            We are a creative studio based in Byron Bay, Australia, and Athens, Greece.
            We partner with clients from the earliest stages of an idea, shaping brand strategy
            and creative direction through to final delivery across all platforms. Our work is
            visually strong and emotionally meaningful, designed to help brands connect with the
            right audience while supporting real business goals.
          </h1>
        </div>

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