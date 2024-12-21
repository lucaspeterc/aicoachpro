import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import { RocketLaunchIcon } from '@heroicons/react/24/outline';


const features = [
  {
    name: 'Inteligentne Algorytmy AI do Planowania Treningów',
    description: 'Nasza platforma AI do planowania treningów wykorzystuje sztuczną inteligencję w sporcie do analizy danych treningowych. Generuje spersonalizowane plany treningowe, które automatyzują proces planowania i wspierają rozwój zawodników, przyspieszając ich postępy i redukując ryzyko kontuzji.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Nowoczesne Systemy Pomiarowe i Analiza Wyników Sportowych AI',
    description: 'Dzięki zaawansowanym czujnikom i fotokomórkom nasz system śledzi każdy ruch piłkarzy. Automatyzacja analizy wyników sportowych online pozwala trenerom na bieżąco monitorować wydajność zawodników i korygować błędy, co wpływa na lepsze wyniki sportowe z AI.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Zgodność z Wytycznymi PZPN i Certyfikacja Klubów',
    description: 'Platforma AI Coach Pro generuje konspekty treningowe zgodne z wytycznymi PZPN AI, co wspiera szkółki piłkarskie w uzyskaniu certyfikacji oraz dotacji. Automatyzacja planowania treningów ułatwia spełnianie wymagań PZPN, podnosząc jakość treningów w klubie.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Wsparcie Rozwoju Klubu z AI i Automatyzacją Treningów',
    description: 'Nasza platforma analityczna dla sportu jest dostępna zarówno dla dużych, jak i małych klubów. Oferujemy możliwość wynajmu sprzętu, co czyni platformę dostępną i opłacalną. Innowacje w treningach sportowych wspierają rozwój zawodników i klubu na każdym poziomie.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Personalizowane Plany Treningowe dla Piłkarzy i Trenerów',
    description: 'AI Coach Pro to narzędzie AI dla trenerów, które automatyzuje planowanie makrocykli treningowych. Trenerzy piłki nożnej mogą skupić się na analizie wyników sportowych AI, a zawodnicy otrzymują personalizowane plany treningowe, które poprawiają ich wyniki sportowe.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Certyfikacja i Dotacje dla Klubów Piłkarskich',
    description: 'Nasza aplikacja treningowa dla sportowców i trenerów wspiera kluby w uzyskaniu certyfikacji PZPN oraz dotacji. AI Coach Pro to platforma analityczna do monitorowania wyników sportowych z AI, która rewolucjonizuje podejście do planowania treningów w klubach sportowych.',
    icon: RocketLaunchIcon,
  },
]


export default function Hero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-darkGreen">Wszystko czego porzebujesz by trenować lepiej</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
          Co wyróżnia AiCoachPro?

          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Odkryj możliwości jakie daje sztuczna inteligencja w procesie treningowym.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="/assets/image3.png"
            width={2432}
            height={1442}
            className="rounded-xl ring-1 shadow-2xl ring-gray-900/10 inset-0 bg-darkGreen mix-blend-multiply"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-darkGreen" />
                {feature.name}
              </dt>{' '}
              <dd className="mt-4">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
