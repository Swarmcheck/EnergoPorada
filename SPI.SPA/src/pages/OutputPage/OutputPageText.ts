interface OutputPageI {
  title: string,
  description: string,
  descriptionForEmptyOutput: string,
  descriptionUnder18: string,
  descriptionNotInRybnik: string,
}

export const outputPageText:OutputPageI = {
  title: 'Miasto Rybnik dziękuje za skorzystanie z aplikacji EnergoPorada!',
  description: 'Dzięki przekazanym przez Ciebie informacjom Miasto Rybnik będzie mogło zaprojektować celowane działania, aby poprawić sytuację energetyczną mieszkańców i jakość powietrza.\n\nW dużych niebieskich prostokątach poniżej znajdziesz rekomendacje wskazane na podstawie Twoich odpowiedzi. Mamy nadzieję, że będą wsparciem w modernizacji Twojego domu/mieszkania oraz utrzymaniu właściwego komfortu cieplnego.\n\nPo zjechaniu na dół strony zobaczysz odnośniki do przydatnej wiedzy o tym, jak oszczędzać pieniądze przez oszczędzanie energii oraz jak skontaktować się z doradcą energetycznym.',
  descriptionForEmptyOutput: 'Niestety, nie udało nam się na podstawie Twoich odpowiedzi znaleźć dotacji ani zasiłków, z których mógłbyś/mogłabyś skorzystać. Proponujemy Ci jednak garść przydatnej wiedzy, która może pomóc Ci w poprawie warunków cieplnych w Twoim domu i oszczędzaniu pieniędzy przeznaczanych na energię.\n\nPamiętaj, Twoja odpowiedź nie poszła na marne! Dzięki przekazanym przez Ciebie informacjom Miasto Rybnik będzie mogło projektować celowane działania, aby poprawić sytuację energetyczną mieszkańców i jakość powietrza.\nTwoja pomoc jest bardzo cenna!\n\nJeśli nie jesteś właścicielem lub współwłaścicielem mieszkania, mogłeś/aś otrzymać mniej dopasowane wyniki ankiety. Zaproponuj właścicielowi/właścicielce mieszkania skorzystanie z aplikacji EnergoPorada. Otrzyma on(a) więcej pytań, które są kluczowe pod kątem kwalifikacji do różnych programów dofinansowania. ',
  descriptionUnder18: 'Miasto Rybnik dziękuje za zainteresowanie aplikacją EnergoPorada!\n\nCzęść ankietowa EnergoPorady jest przeznaczona wyłącznie dla osób pełnoletnich. Jeśli masz mniej niż 18 lat, zachęć kogoś starszego ze swojej rodziny do skorzystania z EnergoPorady.\n\nTymczasem możesz poczytać ciekawe treści umieszczone poniżej – dowiesz się czegoś nowego o czystości powietrza, doradztwie energetycznym i oszczędnościach dla domu.',
  descriptionNotInRybnik: 'Miasto Rybnik dziękuje za zainteresowanie aplikacją EnergoPorada!\n\nCzęść ankietowa aplikacji jest przeznaczona wyłącznie dla mieszkańców i mieszkanek Rybnika. Jeśli masz krewnych lub znajomych w Rybniku, poleć im EnergoPoradę.\n\nTymczasem możesz poczytać ciekawe treści umieszczone poniżej – dowiesz się czegoś nowego o czystości powietrza, doradztwie energetycznym i oszczędnościach dla domu.'
}