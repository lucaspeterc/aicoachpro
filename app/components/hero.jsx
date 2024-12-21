import Image from 'next/image'

export default function Hero() {

  return (
    <div className="bg-white">
      
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="/assets/image2.png"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 bg-darkGreen -z-10 mix-blend-multiply" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Rewolucja <br/>w Treningach Młodzieży
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              AICoachPro to innowacyjny system, który rewolucjonizuje sposób, w jaki prowadzone są treningi młodzieży w piłce nożnej.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-darkGray shadow-xs hover:bg-lightGreen focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                Zgłoś klub                
                </a>
                <a href="#features" className="text-sm/6 font-semibold text-white">
                  Dowiedz się więcej <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
