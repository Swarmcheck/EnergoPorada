import React, { useEffect, useRef } from "react";
import { BodySmallItalicText, BodySmallMediumText, H2Text, H3Text } from "../../../../../shared/FontBoxes/FontBoxes.styles";
import { useFooter } from "../../../../../contexts/Footer/footer"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { PageEnum } from "../../../../../contexts/Footer/Page.enum";
import { ArticleBodyLargeTextStyled, ArticleBodyTextStyled, ArticlesLinkStyled } from "../../ArticlesComponents/ArticlePage.styles";
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled, ProgramPageListBoxStyled } from "../../../../DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles";
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import '../../../../DotationsPage/ProgramBoxes/linkText.css';
import { ArticleImage } from "../../ArticlesComponents/ArticleImage";
import { chronicPrzedSmogiem } from "./ChronicPrzedSmogiemText";
import ChronicSmog1 from '../../../../../public/pictures/articlesPictures/ChronicSmog1.png'
import ChronicSmog2 from '../../../../../public/pictures/articlesPictures/ChronicSmog2.png'
import { Box } from "@mui/material";

export const ChronicPrzedSmogiem = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])

  const listOfTexts = [
    (<ProgramPageFirstTextStyled>
      <Box tabIndex={0}>
        Wybierz maskę w <ArticleBodyLargeTextStyled>sprawdzonym standardzie podlegającym certyfikacji.</ArticleBodyLargeTextStyled> Standardów tych jest kilka, przy czym inne oznaczenia stosowane są dla produktów europejskich, a inne dla amerykańskich lub chińskich. Te najpopularniejsze w Polsce i zaufane maski mają oznaczenia zaczynające się od liter N (N90, N95 i N99), P (P1, P2 i P3) lub FFP (FFP1, FFP2 i FFP3). Możesz też spotkać literę R lub inne cyfry następujące po P (P95, P99). Porównanie i wyjaśnienie różnych standardów możesz znaleźć na <ArticlesLinkStyled
        href={'https://www.gov.pl/attachment/7bcf393b-081b-4c34-b049-2ff3047ce09b'}
        target="_blank"
        sx={{fontSize: '16px'}}
        aria-label={'tej stronie rządowej. Link'}
        >tej stronie rządowej</ArticlesLinkStyled>[7]. Jeśli bywasz za granicą, może Ci się przydać również <ArticlesLinkStyled
        href={'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/types-of-masks.html'}
        target="_blank"
        sx={{fontSize: '16px'}}
        aria-label={'ten przewodnik. Link'}
        >ten przewodnik</ArticlesLinkStyled>[8] amerykańskiej agencji rządowej CDC.
      </Box>
      <p/>
      <Box tabIndex={0}>
        Ale czy oglądanie się na jakieś literki i certyfikaty to nie przesadna skrupulatność? Badania naukowe przekonują, że nie! Skuteczność odpowiednio stosowanych masek N95 w blokowaniu zanieczyszczeń powietrza jest istotnie wyższa w porównaniu nie tylko do masek tekstylnych (zarówno bawełnianych, jak i syntetycznych), ale też do maseczek chirurgicznych[9].
      </Box>
      <p/>
      <Box tabIndex={0}>
        Jeśli kupujesz maski w zagranicznych sklepach, zwróć uwagę na nazewnictwo w języku angielskim, które dla polskojęzycznych klientów i klientek może być mylące. Certyfikowane maski zazwyczaj oznaczane są nazwą respirators, podczas gdy dust masks to nieprofilowalne przysłonki z „noskiem” i paskiem dookoła głowy, wykonane z kartonu i niepoddawane żadnym testom skuteczności. Są podobne z wyglądu, ale zupełnie niepodobne w działaniu. Wg badań Larry’ego E. Bowena[10] oferowały jedynie 6,1% skuteczności w blokowaniu zanieczyszczeń, podczas gdy zwykła chusta z materiału dawała 11,3%, maseczka chirurgiczna 33,3%, a maska N95 aż 89,6%. Badacz przestrzegał nawet przed fałszywym poczuciem bezpieczeństwa, jakie może dawać użytkowanie nieskutecznych produktów – użytkownicy i użytkowniczki, bezpodstawnie wierząc, że są chronieni, mogą przestać unikać ryzykownych sytuacji czy zabezpieczać się w inny sposób. 
      </Box>
    </ProgramPageFirstTextStyled>),
    (<ProgramPageFirstTextStyled tabIndex={0}>
      Ważne jest, by maska była <ArticleBodyLargeTextStyled>dopasowana do twarzy.</ArticleBodyLargeTextStyled> W przeciwnym razie powietrze będzie się dostawało przez miejsca, które odstają od skóry, a nie przez filtr zatrzymujący pyły[4].
    </ProgramPageFirstTextStyled>),
    (<ProgramPageFirstTextStyled tabIndex={0}>
      Maskę przeciwpyłową (lub tylko jej część filtrującą, jeśli używasz maski w formie filtr + obudowa, np. 
      <ArticlesLinkStyled
        href={'https://www.magazynbieganie.pl/wp-content/uploads/2021/01/Broyx-Alfa-foto-1536x1152.jpg'}
        target="_blank"
        sx={{fontSize: '16px'}}
        aria-label={'takiej jak ta. Link'}
      >takiej jak ta</ArticlesLinkStyled>) należy <ArticleBodyLargeTextStyled>regularnie wymieniać</ArticleBodyLargeTextStyled>, ponieważ pyły ją „zapychają”.
    </ProgramPageFirstTextStyled>),
    (<ProgramPageFirstTextStyled tabIndex={0}>
      <ArticleBodyLargeTextStyled>Nie należy prać, wyparzać ani w ogóle moczyć</ArticleBodyLargeTextStyled> maski przeciwpyłowej (jeśli używasz konstrukcji maska filtrująca + obudowa dopasowująca do twarzy, prawdopodobnie możesz czyścić obudowę wodą z łagodnym środkiem czyszczącym – zawsze sprawdzaj zalecenia producenta). Zużyte maski czy filtry trzeba po prostu zastąpić nowymi.
    </ProgramPageFirstTextStyled>)
  ]

  const listOfTextsMore = [
    (<ProgramPageFirstTextStyled tabIndex={0}>
      Okulary, zwłaszcza duże lub załamane po bokach, same w sobie stanowią częściową fizyczną barierę między zanieczyszczeniami a Twoimi oczami.
    </ProgramPageFirstTextStyled>),
    (<ProgramPageFirstTextStyled tabIndex={0}>
      Zarówno kontakt z zanieczyszczeniami powietrza, jak i noszenie soczewek, może wywoływać suchość oczu[14]. Jeśli skumulujesz te czynniki, ryzykujesz bolesne i nieestetyczne schorzenia, takie jak zapalenie spojówek czy tzw. jęczmień.
    </ProgramPageFirstTextStyled>),
    (<ProgramPageFirstTextStyled tabIndex={0}>
      Soczewki mogą zatrzymywać zanieczyszczenia na oczach, zamiast dać im naturalnie uciec wraz ze łzami.
    </ProgramPageFirstTextStyled>),
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(chronicPrzedSmogiem.outsideLink, chronicPrzedSmogiem.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled tabIndex={0} ref={readArticle}>
          {chronicPrzedSmogiem.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={chronicPrzedSmogiem.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          <ArticleBodyLargeTextStyled>
            <ArticlesLinkStyled
              href={'/przydatnawiedza/SmogNaZdrowie'}
              target="_blank"
              sx={{fontSize: '16px'}}
              aria-label='Smog negatywnie w pływa na nasze zdrowie. Link'
            >Smog negatywnie wpływa na nasze zdrowie</ArticlesLinkStyled>, to nie ulega wątpliwości. Dlatego tak ważne jest, by wiedzieć, jak się przed nim chronić, jak ograniczać jego negatywne skutki na nasze organizmy. W niniejszym artykule przedstawiamy listę sposobów ochrony przed smogiem oraz informacje o miejscach, gdzie można sprawdzić stan powietrza.
          </ArticleBodyLargeTextStyled>
        </ProgramPageFirstTextStyled>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Sposoby ochrony przed smogiem
        </H2Text>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          1. Sprawdzaj jakość powietrza
        </H3Text>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Istnieje wiele <ArticleBodyLargeTextStyled>aplikacji śledzących jakość powietrza. Listę aplikacji polecanych przez województwo śląskie znajdziesz <ArticlesLinkStyled
              href={'https://powietrze.slaskie.pl/content/aplikacje'}
              target="_blank"
              sx={{fontSize: '16px'}}
              aria-label={'tutaj. Link'}
            >tutaj</ArticlesLinkStyled></ArticleBodyLargeTextStyled>[1]. Dzięki aplikacjom możesz poznać aktualny poziom smogu w swoim regionie, dzięki czemu będziesz mógł/mogła skuteczniej się przed nim chronić. Wielokrotne przekroczenia normy dopuszczalnych stężeń pyłów PM10 i PM2,5 powinny stanowić alarm ostrzegawczy. Sprawdź, gdzie znajduje się <ArticleBodyLargeTextStyled>stacja pomiarowa najbliższa Twojego mieszkania, miejsca pracy czy nauki</ArticleBodyLargeTextStyled>, i ustaw w aplikacji odczyty właśnie z tej stacji. Takie wiadomości warto śledzić szczególnie wtedy, jeśli jesteś w ciąży, masz dzieci lub ktoś z Twoich bliskich to osoba starsza albo cierpiąca na astmę lub przewlekłą obturacyjną chorobę płuc.
        </ProgramPageFirstTextStyled>

        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          2. W czasie alarmu smogowego pozostań w domu
        </H3Text>
        <ProgramPageFirstTextStyled tabIndex={0}>
          W dni, kiedy poziom zanieczyszczeń jest wysoki, najlepiej pozostać w domu. Lepiej odroczyć <ArticleBodyLargeTextStyled>wtedy sprawunki, które nie są niezbędne</ArticleBodyLargeTextStyled>, lub załatwić je online. Warto także zrezygnować z rozrywek czy widowisk plenerowych. Aktywność fizyczną można przenieść do siłowni czy, w przypadku osób młodszych, na szkolną salę gimnastyczną. Gdy poziom smogu jest wysoki <ArticleBodyLargeTextStyled>nie powinno się także wietrzyć</ArticleBodyLargeTextStyled> mieszkań „świeżym” powietrzem – jeśli już starasz się nie wychodzić na smog, to zadbaj też o to, aby on nie przychodził do ciebie[2].
        </ProgramPageFirstTextStyled>

        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          3. Włącz oczyszczacz powietrza
        </H3Text>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Nawet przy zamkniętych oknach nie odcinasz się całkowicie od smogu. Okna nie są przecież całkowicie szczelne – część zanieczyszczeń dostaje się do środka. Dobrym rozwiązaniem jest skorzystanie z oczyszczacza powietrza. Dzięki niemu będziesz w stanie znacząco poprawić jakość powietrza w swoim domu[3]. Jeśli się na to zdecydujesz, pamiętaj o <ArticleBodyLargeTextStyled>czyszczeniu i/lub wymianie filtrów</ArticleBodyLargeTextStyled> w urządzeniach oczyszczających powietrze. Ponieważ każde urządzenie jest inne i może zawierać np. kombinację trzech różnych rodzajów filtrów, które mają różne funkcje, wyczytaj z instrukcji obsługi, który filtr możesz wyczyścić samodzielnie, jak to zrobić, oraz jak często taka wymiana jest potrzebna. Niestety duże nasilenie zanieczyszczenia powietrza skraca okres skutecznego działania filtrów. Mogą się po prostu zużywać czy „zatykać” szybciej niż przy standardowym użytkowaniu przewidzianym przez producenta. Jeśli mieszkasz w Rybniku, w okresie jesienno-zimowym tego właśnie możesz się spodziewać.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Jeśli w trakcie poszukiwań odpowiedniego dla ciebie oczyszczacza powietrza poczujesz się zagubiony/a pośród nadmiaru marek, modeli i funkcji urządzeń, zajrzyj do <ArticlesLinkStyled
              href={'https://www.iqair.com/us/blog/air-cleaning-technology/do-air-purifiers-work'}
              target="_blank"
              sx={{fontSize: '16px'}}
              aria-label={'Poradnika. Link'}
            >poradnika</ArticlesLinkStyled> przygotowanego przez IQAir[5], światowego lidera technologii dla czystego powietrza. Dowiesz się z niego, na co zwracać uwagę. Pewnie przyda Ci się informacja, że dla efektywności oczyszczania powietrza z pyłów nie wystarczy sam filtr HEPA (konieczne jest także jego właściwe zamontowanie w urządzeniu), oraz że <ArticleBodyLargeTextStyled>nie wszystkie urządzenia związane z poprawą jakości powietrza we wnętrzach są przeznaczone do niwelowania smogu</ArticleBodyLargeTextStyled> (niektóre z nich mają za zadanie raczej zwalczać zarazki).
          </Box>
          <p/>
          <Box>
            Zawsze <ArticleBodyLargeTextStyled>uważaj na urządzenia generujące ozon!</ArticleBodyLargeTextStyled> Amerykańska Agencja Ochrony Środowiska wyraźnie wskazuje[6], że – wbrew temu, co głoszą w reklamach wytwórcy ozonatorów i jonizatorów powietrza – ozon stosowany w dopuszczalnych stężeniach praktycznie nie przynosi korzyści jeśli chodzi o oczyszczanie powietrza – nie usuwa pyłów zawieszonych ani pyłków roślin, nie jest też zbyt skuteczny w zwalczaniu bakterii, wirusów, pleśni czy brzydkich zapachów. Co więcej, ozon może podrażniać drogi oddechowe i nasilać objawy chorób układu oddechowego, a przecież dokładnie przed tym chcemy się uchronić.
          </Box>
          <p/>
        </ProgramPageFirstTextStyled>

        <ArticleImage image={ChronicSmog1}/>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          4. Korzystaj z maseczki przeciwpyłowej
        </H3Text>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Jeżeli podczas alarmu smogowego musisz wyjść z mieszkania, powinieneś/powinnaś wyposażyć się w maskę przeciwpyłową. Dzięki niej ograniczysz przyjmowanie szkodliwych substancji do swojego organizmu. Jaką maskę wybrać i jak jej używać?
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTexts.map((l, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Pamiętaj również, że maska z zaworkami ułatwiającymi wydychanie i odprowadzanie wilgoci nie powinna być używana jako środek ochrony przed COVID-19, grypą czy innymi chorobami przenoszonymi w powietrzu – takie zaworki pozwalają na uwolnienie się poza maskę wirusów potencjalnie znajdujących się w Twoim organizmie.
        </ProgramPageFirstTextStyled>

        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          5. Unikaj wysiłku fizycznego na świeżym powietrzu
        </H3Text>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Podczas ćwiczeń nasze płuca „przerabiają” większą ilość powietrza niż w czasie spoczynku, co może prowadzić do tego, że pochłoną też więcej zawartych w tym powietrzu zanieczyszczeń. Ważne jest zatem, by w dni, gdy poziom zanieczyszczeń jest wysoki, ograniczyć wysiłek fizyczny. Dotyczy to w szczególności wysiłku na zewnątrz, gdzie poziom smogu jest najwyższy. Jeśli trenujesz regularnie i/lub ćwiczenia są szczególnie ważne dla twojego stanu zdrowia, <ArticleBodyLargeTextStyled>możesz rozważyć ćwiczenie w domu, ćwiczenie na siłowni lub ćwiczenie w masce przeciwpyłowej.</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box tabIndex={0}>
            Wyniki badań oraz <ArticleBodyLargeTextStyled>zalecenia dotyczące wysiłku fizycznego przy założonej certyfikowanej masce przeciwpyłowej (np. N95) nie są jednoznaczne.</ArticleBodyLargeTextStyled> Z jednej strony zauważono u niektórych postępujących w ten sposób osób duszność gorszą niż zwykła zadyszka biegacza oraz bóle czy zawroty głowy. Naukowcy wykazali również podwyższony poziom dwutlenku węgla we wydychanym powietrzu u zdrowych osób dorosłych wykonujących ćwiczenia fizyczne w masce N95 na twarzy[11]. Z drugiej strony u tych samych osób nie wykazano znaczących różnic we wzroście ciśnienia krwi czy spadku nasycenia krwi tlenem w porównaniu do osób trenujących bez maski lub w maseczce chirurgicznej. Wszyscy byli też w stanie trenować tak samo długo i intensywnie w masce lub bez niej. Generalnie nie wydaje się, aby suma badań dotyczących tego zagadnienia jednoznacznie wskazywała na jakieś istotne niebezpieczeństwa związane z podjęciem treningu przy założonej masce (przy braku innych problemów zdrowotnych). Niektórzy hobbyści wręcz celowo ćwiczą w masce, traktując tę praktykę jako symulację warunków panujących przy uprawianiu biegów górskich lub kolarstwa górskiego, tj. gorszego dostępu tlenu w nieco rozrzedzonym górskim powietrzu.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Prawdopodobnie należałoby się więc kierować własnym stopniem przyzwyczajenia do aktywności fizycznej, własnymi objawami i własnym poziomem komfortu lub dyskomfortu. Światowa Organizacja Zdrowia nie zaleca podejmowania intensywnych ćwiczeń fizycznych z założoną maską, wskazując na ograniczoną zdolność swobodnego oddychania oraz na spadek skuteczności masek zawilgoconych[12]. Poradnik dla pacjentów wydany przez szpital w Bangkoku[13], mieście dalekim od idealnej czystości powietrza, stwierdza, że <ArticleBodyLargeTextStyled>osoby starsze, niezbyt wysportowane, cierpiące na choroby układu oddechowego czy początkujące na swojej ścieżce sportowej nie powinny podejmować treningów w maskach przeciwpyłowych.</ArticleBodyLargeTextStyled> Ten sposób trenowania może się jednak sprawdzić u osób o świetnej wydolności oddechowej, przyzwyczajonych do wzmożonej pracy płuc i serca. W razie wątpliwości co do własnego postępowania skonsultuj się ze specjalistą z zakresu medycyny sportu i/lub zdrowia serca oraz układu oddechowego.
          </Box>        
          <p/>
        </ProgramPageFirstTextStyled>

        <ArticleImage image={ChronicSmog2}/>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          6. Nie zapominaj o ochronie oczu
        </H3Text>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Jeśli w dzień, w którym poziom zanieczyszczeń jest wysoki, musisz wyjść z domu, załóż okulary korekcyjne (a nawet “zerówki”, jeśli nie potrzebujesz korekcji) lub przeciwsłoneczne. W ten sposób będziesz w stanie chociaż częściowo ochronić oczy przed pyłami w powietrzu. W przypadku, gdy Twoja praca każe Ci przebywać długie godziny na zewnątrz, oraz w czasie przemieszczania się rowerem lub innym otwartym pojazdem warto wręcz założyć gogle. <ArticleBodyLargeTextStyled>Jeżeli używasz na co dzień soczewek kontaktowych, rozważ zastąpienie ich okularami na czas alarmów smogowych.</ArticleBodyLargeTextStyled> Jest jasne, że masz swoje powody, aby nosić soczewki, a nie okulary. Istnieją jednak trzy ważne racje za tym, aby się przełamać.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTextsMore.map((l, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Mimo iż zanieczyszczenie powietrza może podrażniać oczy, <ArticleBodyLargeTextStyled>powstrzymaj się od ich pocierania</ArticleBodyLargeTextStyled>, aby uniknąć infekcji. Żeby chronić oczy przed wpływem smogu, warto je <ArticleBodyLargeTextStyled>przemywać po powrocie do domu</ArticleBodyLargeTextStyled> i umyciu rąk. Najlepiej użyć do tego roztworu soli fizjologicznej (dostępny w ampułkach w aptekach w niskiej cenie) lub ewentualnie czystej wody, jeśli twoje oczy dobrze tolerują taki zabieg. Dzięki temu spłuczesz szkodliwe pyły. Na łagodne objawy suchego oka pomogą <ArticleBodyLargeTextStyled>krople nawilżające bez konserwantów</ArticleBodyLargeTextStyled>[15].
        </ProgramPageFirstTextStyled>

        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Na koniec: porady o poradach
        </H3Text>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Należy pamiętać, że żadna metoda chroniąca przed smogiem nie jest w 100% skuteczna. Najlepiej jest więc łączyć ze sobą jak największą liczbę technik. Dzięki temu odniesiesz o wiele większy efekt niż gdybyś korzystał(a) z tych sposobów pojedynczo. Ponadto <ArticleBodyLargeTextStyled>jeśli czytasz czy oglądasz jakikolwiek poradnik dotyczący smogu, masek itd., zastanów się nad kontekstem, w jakim go stworzono</ArticleBodyLargeTextStyled> – kiedy, gdzie i dla kogo powstał. Eksplozja treści dotyczących masek nastąpiła oczywiście w czasie pandemii COVID-19, która jest innym tematem niż smog. Również niektóre zalecenia dla miejscowości czy krajów, gdzie zanieczyszczenie powietrza pochodzi przede wszystkim z motoryzacji, mogą się nie sprawdzić w Rybniku. Przykład? Sugestia, aby trenować na zewnątrz przede wszystkim wcześnie rano, zanim wszyscy ruszą samochodami do pracy. W województwie śląskim nieraz oznaczałoby to wbiegnięcie prosto w kłęby dymu z domów budzących się do życia ok. dwie godziny wcześniej niż następuje szczyt ruchu samochodów. Troska o siebie i bliskich wymaga zatem, jak to zwykle bywa, uważności.
        </ProgramPageFirstTextStyled>

        <BodySmallItalicText sx={{marginTop: '86.5px'}}tabIndex={0}>
          Źródła:
        </BodySmallItalicText>
        <ArticleBodyTextStyled tabIndex={0}>
          [1] Samorząd Województwa Śląskiego. Śląskie. Pełne czystej energii. Aplikacje. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://powietrze.slaskie.pl/content/aplikacje'}
            target="_blank"
          >
            https://powietrze.slaskie.pl/content/aplikacje
          </a> (15.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [2] Ceon.pl. (2019). Smog albo zdrowie! Nie truj siebie i innych. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://depot.ceon.pl/bitstream/handle/123456789/15435/broszura_ekodoradca_DRUK.pdf?sequence=1'}
            target="_blank"
          >
            https://depot.ceon.pl/bitstream/handle/123456789/15435/broszura_ekodoradca_DRUK.pdf?sequence=1
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [3] Sowa J. (2017).  Wpływ adsorpcji zanieczyszczeń na jakość powietrza w pomieszczeniach. Fizyka Budowli w Teorii i Praktyce, Tom 2, s. 251-254. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.researchgate.net/publication/319998756_WPLYW_ADSORPCJI_ZANIECZYSZCZEN_NA_JAKOSC_POWIETRZA_W_POMIESZCZENIACH?msclkid=dce777f7aaaa11ec94130657140960e4'}
            target="_blank"
          >
            https://www.researchgate.net/publication/319998756_WPLYW_ADSORPCJI_ZANIECZYSZCZEN_NA_JAKOSC_POWIETRZA_W_POMIESZCZENIACH?
          </a> (23.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [4] Sweeney A. (2020). Pył węglowy i choroby płuc. Pobrane z:  
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://emps.exeter.ac.uk/media/universityofexeter/emps/research/rocd/ROCD_adult_leaflet_on_dust_hazards_in_coal_mines_-_Polish.pdf?msclkid=03d54cb5aaab11ecbb90e8e191306966'}
            target="_blank"
          >
            https://emps.exeter.ac.uk/media/universityofexeter/emps/research/rocd/ROCD_adult_leaflet_on_dust_hazards_in_coal_mines_-_Polish.pdf?
          </a> (23.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [5] IQAir (2022). Do Air Purifiers Work? Air Purifier Myths and Facts Debunked. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.iqair.com/us/blog/air-cleaning-technology/do-air-purifiers-work'}
            target="_blank"
          >
            https://www.iqair.com/us/blog/air-cleaning-technology/do-air-purifiers-work
          </a> (01.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [6] United States Environmental Protection Agency. Ozone Generators that are Sold as Air Cleaners. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.epa.gov/indoor-air-quality-iaq/ozone-generators-are-sold-air-cleaners'}
            target="_blank"
          >
            https://www.epa.gov/indoor-air-quality-iaq/ozone-generators-are-sold-air-cleaners
          </a> (01.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [7] Cisowski S. (2020). Standardy masek oddechowych. Wydział Doskonalenia Zawodowego Komendy Stołecznej Policji. Pobrane z:  
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.gov.pl/attachment/7bcf393b-081b-4c34-b049-2ff3047ce09b'}
            target="_blank"
          >
            https://www.gov.pl/attachment/7bcf393b-081b-4c34-b049-2ff3047ce09b
          </a> (15.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [8] Center for Disease Control and Prevention (2022). Types of Masks and Respirators. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/types-of-masks.html'}
            target="_blank"
          >
            https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/types-of-masks.html
          </a> (15.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [9] Kodros J.K. et al. (2021). Quantifying the Health Benefits of Face Masks and Respirators to Mitigate Exposure to Severe Air Pollution. GeoHealth, 5, DOI: 10.1029/2021GH000482. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2021GH000482'}
            target="_blank"
          >
            https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2021GH000482
          </a> (11.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [10] Bowen L.E. (2010). Does That Face Mask Really Protect You? Applied Biosafety. vol. 15, no. 2, pp. 67-71. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.liebertpub.com/doi/pdf/10.1177/153567601001500204?download=true'}
            target="_blank"
          >
            https://www.liebertpub.com/doi/pdf/10.1177/153567601001500204?download=true
          </a> (11.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [11] Epstein D. et al. (2020). Return to Training in the COVID-19 Era: The Physiological Effects of Face Masks During Exercise. Scandinavian Journal of Medicine and Science in Sports, vol. 31, issue 1, pp. 70-75, DOI: 10.1111/sms.13832. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://onlinelibrary.wiley.com/doi/10.1111/sms.13832'}
            target="_blank"
          >
            https://onlinelibrary.wiley.com/doi/10.1111/sms.13832
          </a> (12.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [12] World Health Organization (2022). Coronavirus Disease (COVID-19): Masks. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-masks'}
            target="_blank"
          >
            https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-masks
          </a> (12.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [13] Bangkok Hospital. Must-Know! Exercising With A Face Mask. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.bangkokhospital.com/en/content/wearing-mask-while-exercising'}
            target="_blank"
          >
            https://www.bangkokhospital.com/en/content/wearing-mask-while-exercising
          </a> (12.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [14] Łatka P., Nowakowska D., Nowomiejska K., Rejdak R. (2018). How Air Pollution Affects the Eyes — A Review. Ophthalmology Journal, vol. 3, no. 2, pp. 58-62, DOI: 10.5603/OJ.2018.0032. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://journals.viamedica.pl/ophthalmology_journal/article/view/59495'}
            target="_blank"
          >
            https://journals.viamedica.pl/ophthalmology_journal/article/view/59495
          </a> (13.04.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [15] Zespół Przychodni Specjalistycznych w Tarnowie (2020). Chroń oczy przed smogiem! WYWIAD z lek. Ireną Rajtar. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://zps.tarnow.pl/chron-oczy-przed-smogiem-wywiad-z-lek-irena-rajtar/'}
            target="_blank"
          >
            https://zps.tarnow.pl/chron-oczy-przed-smogiem-wywiad-z-lek-irena-rajtar/
          </a> (14.04.2022).
        </ArticleBodyTextStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}