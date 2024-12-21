import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Reserch() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-darkGreen">Badania</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Informacja o prowadzonych badaniach B+R
        </h1>
        <p className="mt-6 text-xl/8">
        Nasza spółka, czerpiąc inspirację z dynamicznego rozwoju nowoczesnych technologii w sporcie, prowadzi intensywne prace badawczo-rozwojowe (B+R) w celu stworzenia innowacyjnego narzędzia – Coach AI. Projekt jest współfinansowany dzięki pozyskanej dotacji na działalność badawczo-rozwojową, co pozwala nam realizować naszą misję transformacji procesu szkoleniowego młodych piłkarzy.


        </p>
        <div className="mt-10 mx-auto text-center max-w-4xl">
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Cel Badań:
        </h1>
          <p>
          Głównym celem naszych badań jest opracowanie zaawansowanego systemu analizy danych, który umożliwi:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 mx-auto text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-darkGreen" />
              <span>
                <strong className="font-semibold text-gray-900">Personalizację treningów</strong> Stworzenie narzędzia, które będzie analizować wyniki każdego zawodnika w czasie rzeczywistym, identyfikować jego mocne i słabe strony, a następnie automatycznie dostosowywać plan treningowy. Dzięki temu każdy zawodnik otrzyma program dostosowany do jego indywidualnych potrzeb i etapu rozwoju.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-darkGreen" />
              <span>
                <strong className="font-semibold text-gray-900">Monitorowanie kondycji fizycznej</strong> Badania koncentrują się na integracji systemów śledzenia parametrów fizycznych, takich jak poziom zmęczenia, kondycja czy potencjalne ryzyko kontuzji. Opracowujemy technologię, która pozwoli na stałe monitorowanie stanu zdrowia zawodników, minimalizując ryzyko urazów.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-darkGreen" />
              <span>
                <strong className="font-semibold text-gray-900">Analiza taktyczna i techniczna</strong>Tworzymy system umożliwiający szczegółową analizę zachowań zawodników na boisku. Dzięki analizie gry w czasie rzeczywistym młodzi piłkarze będą mogli szybciej rozwijać swoje umiejętności techniczne i taktyczne. 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-darkGreen" />
              <span>
                <strong className="font-semibold text-gray-900">Optymalizacja zarządzania czasem treningowym </strong>Opracowujemy narzędzie wspomagające trenerów w planowaniu i organizacji treningów, pozwalające na maksymalizację efektywności każdej jednostki treningowej i skrócenie czasu poświęcanego na mniej efektywne ćwiczenia. 
              </span>
            </li>
          </ul>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Korzyści z Badań:
          </h1>

          <p className="mt-8">
            Efektem prowadzonych badań będzie nowoczesny system Coach AI, który nie tylko zrewolucjonizuje szkolenie piłkarskie, ale także podniesie poziom sportowy młodzieży oraz wesprze kluby w uzyskiwaniu lepszych wyników sportowych. Nasze rozwiązanie stanie się fundamentem dla budowania przyszłych mistrzów i liderów na boisku.
            <br>
            </br>
            Projekt ten jest dowodem na to, że technologia i sport mogą harmonijnie współpracować, tworząc nowe standardy w szkoleniu piłkarskim na poziomie krajowym i międzynarodowym.
          </p>
    </div>
    </div>
    </div>
  )
}
