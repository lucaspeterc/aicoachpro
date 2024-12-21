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
    name: 'Inteligentne Algorytmy',
    description: 'System wykorzystuje sztuczną inteligencję, aby analizować dane treningowe i generować spersonalizowane rekomendacje treningowe, wspierając szybszy i bardziej efektywny rozwój piłkarzy.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Nowoczesne Systemy Pomiarowe',
    description: 'Dzięki czujnikom i fotokomórkom system precyzyjnie monitoruje ruchy zawodników, co pozwala na bieżącą analizę ich wydajności i korygowanie błędów.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Zgodność z wytycznymi PZPN',
    description: 'Generowane przez system konspekty treningowe są zgodne z wymogami PZPN, co ułatwia uzyskanie certyfikacji i dotacji dla szkółek piłkarskich.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Wsparcie Rozwoju Klubu',
    description: 'System jest dostępny zarówno dla dużych, jak i mniejszych klubów, z możliwością wypożyczenia niezbędnego sprzętu, co czyni go dostępnym i ekonomicznie korzystnym dla każdego.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Rozwój sportowy',
    description: 'Dzięki AICoachPro kluby piłkarskie mogą łatwiej i efektywniej organizować treningi, a trenerzy zyskują narzędzie, które pozwala im skupić się na rozwoju zawodników. Zawodnicy natomiast otrzymują spersonalizowany trening, co przyspiesza ich rozwój sportowy i buduje solidne podstawy ich kariery piłkarskiej.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Certyfikacja',
    description: 'AICoachPro to kompleksowe, innowacyjne i przystępne rozwiązanie dla szkółek piłkarskich w Polsce, które podnosi jakość i efektywność treningów, wspierając jednocześnie dążenia klubu do uzyskania certyfikacji i dotacji.',
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
            src="/assets/image1.png"
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
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
