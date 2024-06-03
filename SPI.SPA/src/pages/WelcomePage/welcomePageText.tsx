import { Box } from "@mui/material";
import React from "react";
import InfoIcon from '../../public/icons/InfoIcon.svg';

interface WelcomePageI {
  title: string,
  description: string,
  expandTitle: string,
  expandDescription: string | JSX.Element,
}

const TipIcon = <Box
  component='img'
  src={InfoIcon}
  sx={{ cursor: 'pointer', maxHeight: '20px'}}
  aria-label={'. sprawdź dodatkowy opis'}
  tabIndex={0}
  />

const welcomePageText: WelcomePageI = {
  title: 'Witaj w aplikacji EnergoPorada!',
  description: 'EnergoPorada to narzędzie, które posłuży Ci do przejścia prostej drogi, na końcu której znajdziesz dopasowane do Twoich potrzeb formy wsparcia w zakresie termomodernizacji, wymiany ogrzewania i zmniejszenia opłat za energię.\n\nJeśli skorzystasz z EnergoPorady, pomożesz też innym mieszkańcom i mieszkankom Rybnika. Informacje przekazywane za pomocą aplikacji pozwolą Miastu lepiej kierować sprawami mieszkaniowo-energetycznymi.\n\nUżywanie EnergoPorady jest całkowicie darmowe, a Twoje odpowiedzi są anonimowe. W każdej chwili możesz przerwać korzystanie z aplikacji, bez żadnych konsekwencji.',
  expandTitle: 'Dowiedz się więcej o przebiegu Twojej drogi w aplikacji.',
  expandDescription: <div>
    <div tabIndex={0}>
      Podczas przejścia przez aplikację będziesz odpowiadać na pytania ankietowe jednokrotnego i wielokrotnego wyboru. Zostaniesz też poproszony/a o wpisanie kilku krótkich odpowiedzi w postaci liczb lub zdań.
    </div>
    <p/>
    <div tabIndex={0}>
      Po udzieleniu odpowiedzi (wpisaniu jej lub wybraniu z listy) naciśnij przycisk „dalej”, aby przejść do kolejnego ekranu. Jeśli się pomylisz lub będziesz chciał(a) zmienić swoją odpowiedź, kliknij przycisk „wstecz” i wybierz inną odpowiedź.
    </div>
    <p/>
    <div tabIndex={0}>
      W kilku miejscach w aplikacji znajdziesz okrągłą ikonę {TipIcon}.
    </div>
    <div tabIndex={0}>
        Po kliknięciu na nią zobaczysz dodatkową informację, która może Ci się przydać przy odpowiadaniu na pytanie. Możesz śledzić swój postęp w wypełnianiu ankiety na procentowym pasku u góry.
      </div>
    <p/>
    <div tabIndex={0}>
      W drugiej połowie ankiety nie wszystkie pytania są obowiązkowe, jednak to ważne, abyś odpowiedział(a) na jak najwięcej z nich. Dzięki temu otrzymasz informacje i porady najlepiej dopasowane do Twoich potrzeb. Jeśli zdecydujesz się pominąć niektóre pytania, informacja zwrotna będzie mniej spersonalizowana.
    </div>
  </div>,
}

export default welcomePageText;