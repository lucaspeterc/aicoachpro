export default function Example() {
    return (
      <div className="bg-lightGray">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Odkryj możliwości jakie daje sztuczna inteligencja w procesie treningowym.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <a
              href="#contact"
              className="rounded-md bg-darkGreen px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lightGreen focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Wyślij zapytanie
            </a>
            <a href="#research" className="text-sm/6 font-semibold text-white hover:text-lightGreen">
              Dowiedz się więcej <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  