import React, { useEffect, useRef } from "react"
import { BodyLargeMediumText, BodySmallItalicText, BodySmallMediumText, H2Text, H3Text } from "shared/FontBoxes/FontBoxes.styles"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { SetProgramEducationFooterProps } from "pages/DotationAndEducationShared/SetProgramEducationFooter"
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled } from "pages/DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles"
import { prosteSposoby } from "./ProsteSposobyText"
import { ArticleImage } from "../../ArticlesComponents/ArticleImage"
import { ArticleBodyLargeTextStyled, ArticleBodyTextStyled } from "../../ArticlesComponents/ArticlePage.styles"
import ProsteSposoby1 from '../../../../../public/pictures/articlesPictures/ProsteSposoby1.png'
import ProsteSposoby2 from '../../../../../public/pictures/articlesPictures/ProsteSposoby2.png'
import { GenerateNumericListItem } from "pages/DotationAndEducationShared/GenerateNumericListItem"
import { Box } from "@mui/material"
import '../../../../DotationsPage/ProgramBoxes/linkText.css'

export const ProsteSposoby = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])

  const listOfTexts = [
    (<Box>
      <ArticleBodyLargeTextStyled>Jeśli wietrzysz mieszkanie, pamiętaj o zakręceniu kaloryferów na czas, gdy okna lub drzwi pozostają otwarte.</ArticleBodyLargeTextStyled> Ograniczysz produkcję ciepła, które przy otwartym oknie i tak ucieknie na zewnątrz.
    </Box>),
  (<Box>
      <ArticleBodyLargeTextStyled>Upewnij się też, że wszystkie kaloryfery w mieszkaniu są odsłonięte.</ArticleBodyLargeTextStyled>  Meble, które zasłaniają kaloryfery, mogą zmniejszać ich efektywność cieplną w mieszkaniu i nie pozwalać ciepłu przepływać do innych pomieszczeń.
    </Box>),
  (<Box>
      <ArticleBodyLargeTextStyled>Jeśli nie musisz, staraj się nie stwarzać sztucznych barier dla ciepła pomiędzy pokojami.</ArticleBodyLargeTextStyled>  Wyczuwalne różnice temperatur pomiędzy pomieszczeniami mogą zmniejszać uczucie komfortu cieplnego[8].
    </Box>)
  ]

  const listOfTextsTwo = [
    (<Box>
      <ArticleBodyLargeTextStyled>Jeśli podłoga w Twoim domu jest zimna, pomyśl o położeniu dywanu lub wykładziny.</ArticleBodyLargeTextStyled>  Ten doraźny sposób uprzyjemni chodzenie po chłodnej podłodze i delikatnie zablokuje uciekanie ciepła. W domu kilkupiętrowym, ocieplenie podłogi w postaci wykładziny lub dywanu szczególnie przyda się na parterze i na piętrze nad zimnym pomieszczeniem gospodarczym lub garażem. Zimno od podłoża może przechodzić dalej i ochładzać cały dom[14].
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>W okresie zimowym chcąc zmniejszyć uciekanie ciepła z domu pamiętaj o zasuwaniu zasłon.</ArticleBodyLargeTextStyled> Jeśli zasłony są zawieszone blisko okien, mogą pomóc zapobiec nawet jednej czwartej utraty ciepła[15]. W zależności od tego, jaki dokładnie jest układ Twojego domu, to samo rozwiązanie może nieco odizolować drzwi wejściowe lub zimny przedsionek od reszty domu.
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Nie trzymaj jednak zasuniętych zasłon w całym domu przez cały dzień.</ArticleBodyLargeTextStyled> Otwieranie zasłon w nasłonecznionych oknach w ciągu dnia może pomóc podnieść temperaturę za pomocą energii słonecznej. Pamiętaj tylko, aby zasłonić zasłony na noc lub w oknach, przez które nie wpada tak dużo słońca[16].
    </Box>),
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(prosteSposoby.outsideLink, prosteSposoby.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readArticle} tabIndex={0}>
          {prosteSposoby.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={prosteSposoby.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Oszczędzanie energii nie musi być trudne ani kosztowne. Aby poczynić drobne regularne oszczędności, które docenisz w skali roku czy dwóch, wystarczy kilka pomysłowych zmian. Niezależnie od tego, czy Twój budynek jest ocieplony, czy nie, poniższe wskazówki pozwolą Ci na skuteczniejsze zatrzymanie ciepła w domu i paru złotych w portfelu.
        </ProgramPageFirstTextStyled>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Grzej skuteczniej
        </H2Text>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Izolowanie rur
        </H3Text>
        <BodyLargeMediumText tabIndex={0}>
          Izolując rury wodne i centralnego ogrzewania, zmniejszysz straty ciepła. Żeby to zrobić, będziesz potrzebować <ArticleBodyLargeTextStyled>otuliny do rur.</ArticleBodyLargeTextStyled> Taką izolację tniemy, by pasowała na rury na długość, i rozrywamy wzdłuż. Następnie nakładamy izolację na rury tak, żeby dobrze do nich przylegała. Po dokonaniu całego montażu owijamy otulinę taśmą izolacyjną[1]. Instalacji możesz dokonać w dowolnym momencie, nawet na już istniejące rury. Najpierw jednak upewnij się, że są one szczelne, i wybierz odpowiedni materiał izolujący[2].
        </BodyLargeMediumText>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Ekran zagrzejnikowy
        </H3Text>
        <BodyLargeMediumText tabIndex={0}>
          Ekran zagrzejnikowy ma za zadanie odbijać ciepło grzejników. Dzięki temu rozwiązaniu <ArticleBodyLargeTextStyled>kaloryfer nie będzie ogrzewał ściany za nim, tylko samo pomieszczenie, w którym się znajduje</ArticleBodyLargeTextStyled>[3]. Żeby zamontować taki ekran wystarczy, że przykleisz go za grzejnik.
        </BodyLargeMediumText>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Dzień i noc
        </H3Text>
        <BodyLargeMediumText tabIndex={0}>
          Temperatura pomieszczeń w nocy nie musi (a w sypialniach wręcz nie powinna) być tak wysoka, jak w ciągu dnia. Możesz więc spróbować <ArticleBodyLargeTextStyled>zmniejszać intensywność ogrzewania już na godzinę lub dwie przed snem</ArticleBodyLargeTextStyled>, a nie dopiero wtedy, gdy się kładziesz. Jeśli nie jest bardzo mroźnie, nie zdążysz odczuć ochłodzenia, zanim zanurzysz się pod kołdrę.
        </BodyLargeMediumText>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Nie wypuszczaj ciepła
        </H2Text>
        <ArticleImage image={ProsteSposoby1}/>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Jaka jest optymalna temperatura w mieszkaniu?
        </H3Text>
        <BodyLargeMediumText>
          <Box tabIndex={0}>
            Światowa Organizacja Zdrowia (WHO) orzekła w roku 1987, że <ArticleBodyLargeTextStyled>przebywanie we wnętrzach o temperaturze 18-24°C nie wiąże się z ryzykami zdrowotnymi dla zdrowych osób w sile wieku.</ArticleBodyLargeTextStyled> Temperatura powyżej 20°C może być wg WHO potrzebna małym dzieciom, senior(k)om, osobom chorym i osobom z niektórymi niepełnosprawnościami[4]. Brytyjskie Ministerstwo Zdrowia na podstawie systematycznego przeglądu literatury naukowej z roku 2014 podtrzymało rekomendację utrzymywania co najmniej 18°C we wnętrzach w okresie zimowym[5].
          </Box>     
          <p/>
          <Box>
            Dodatkowo organizacje odpowiedzialne za sprawy zdrowia publicznego i/lub sprawy socjalne w różnych krajach mogą rekomendować nieco inne temperatury grupom szczególnie wrażliwym. Np. <ArticleBodyLargeTextStyled>w Szkocji, dla gospodarstw domowych, gdzie przebywają domownicy starsi i/lub poważniej chorzy, zaleca się nie mniej niż 23°C w ciągu dnia i 18°C w nocy[6].</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box>
            Dobrze pamiętać, że rekomendacje tego rodzaju wyznaczają dopuszczalne minimum lub maksimum (a niekoniecznie optimum). Nie mówią nic o komforcie cieplnym poszczególnych osób, lecz wyrażają uśrednienia właściwe dla podejścia statystycznego. Wywodzą się zazwyczaj ze statystyk dotyczących tzw. nadmiarowych zgonów zimowych oraz badań o ryzyku pojawienia się w domu wilgoci i pleśni, wystąpienia u domowników chorób, zaostrzenia chorób, hospitalizacji etc.
          </Box>
        </BodyLargeMediumText>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Wskazówki dotyczące wietrzenia pomieszczeń
        </H3Text>
        <BodyLargeMediumText tabIndex={0}>
          Aby utrzymać odpowiednią temperaturę i wilgotność w domu, ważne jest odpowiednie wietrzenie pomieszczeń. Kontrolowana wentylacja pomaga zmniejszyć wilgoć, wpuszczając w razie potrzeby świeże powietrze. Jednak niekontrolowane przeciągi sprawiają, że wpuszczane jest zbyt dużo zimnego powietrza, na skutek czego ucieka bardzo dużo ciepła[7]. 
        </BodyLargeMediumText>
        {listOfTexts.map((l,k) => {
          return <GenerateNumericListItem text={l} number={k} key={k}/>
        })}
        <ArticleImage image={ProsteSposoby2}/>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Uszczelnianie okien
        </H3Text>
        <BodyLargeMediumText>
          <Box tabIndex={0}>
            Szacuje się, że <ArticleBodyLargeTextStyled>przez nieszczelne okna może uciekać 15–25% ciepła[9].</ArticleBodyLargeTextStyled>Dlatego bardzo ważne jest, by sprawdzić, czy nie wydostaje się przez nie powietrze. Aby to zrobić, wystarczy włożyć dłoń między szybę a ramę, po czym przesuwać ręką wzdłuż okna. Następnie należy zrobić to samo w miejscu złączeń ze ścianą. O tym, że znaleźliśmy nieszczelne miejsce, świadczyć będzie podmuch wiatru na skórze[10]. Można także posłużyć się świecą (jeśli płomień mocno drga lub przechyla się na jedną stronę, prawdopodobnie mamy nieszczelność) lub cienkim papierem, piórkiem czy innym bardzo lekkim przedmiotem, który może być uniesiony przez podmuch.
          </Box>
          <br/>
          <p/>
          <Box tabIndex={0}>
            Kiedy zlokalizujemy już źródło przeciągu, należy wybrać metodę uszczelniania. Jednym ze sposobów jest wykorzystanie pianki poliuretanowej. Aby to zrobić, wystarczy zaaplikować ją na styku murów i ramy okiennej. Warto również <ArticleBodyLargeTextStyled>przykleić na nią taśmę,</ArticleBodyLargeTextStyled> dzięki czemu pianka będzie lepiej chroniła przed zimnem. Do zalet tej metody należy zapobieganie powstawania pleśni a także wytrzymałość na uszkodzenia mechaniczne. Do innych prostych sposobów uszczelniania okien należy zastosowanie uszczelek oraz wykorzystanie specjalnej taśmy lub silikonu[11].
          </Box>
        </BodyLargeMediumText>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Uszczelnianie drzwi
        </H3Text>
        <BodyLargeMediumText>
          <Box tabIndex={0}>
            Żeby sprawdzić, czy drzwi są szczelne, należy je zamknąć i sprawdzić występowanie podmuchów lub ich brak w sposób podobny, jak w przypadku okien. <ArticleBodyLargeTextStyled>Jeżeli mimo tego, że drzwi są zamknięte, przedostaje się przez nie powietrze, to znak, że są nieszczelne[12].</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box tabIndex={0}>
           Większość zimna ucieka dołem drzwi. Jedną z metod rozwiązania tego problemu jest użycie <ArticleBodyLargeTextStyled>uszczelki piankowej.</ArticleBodyLargeTextStyled> Żeby ją zamontować, wystarczy przykleić ją do futryny i docisnąć. Innym trwałym rozwiązaniem jest wykorzystanie listwy uszczelniającej. Jest ona skuteczniejsza od uszczelki piankowej, ale trudniejsza do wykonania. Jeśli się na nią zdecydujemy, musimy dokładnie odmierzyć rozmiar szpary. Następnie musimy kupić odpowiednio grubą listwę, która jednocześnie będzie nas chronić przed mrozem, oraz nie utrudni otwierania drzwi. Na końcu należy ją przyciąć na odpowiednią długość i przybić do futryny[13]. 
          </Box>
        </BodyLargeMediumText>
        <H3Text sx={{marginTop: '24px', marginBottom: '24px'}} tabIndex={0}>
          Zasłony i dywany jako warstwy zatrzymujące ciepło
        </H3Text>
        <BodyLargeMediumText tabIndex={0}>
          Zakup wykładziny, czy świadome odsłanianie i zasłanianie zasłon w zależności od nasłonecznienia, może pomóc Ci skutecznie ocieplić Twoje mieszkanie.
        </BodyLargeMediumText>
        {listOfTextsTwo.map((l,k) => {
          return <GenerateNumericListItem text={l} number={k} key={k}/>
        })}
        <BodyLargeMediumText sx={{marginTop: '60px'}} tabIndex={0}>
          Te niewielkie zmiany mogą przyczynić się do podniesienia komfortu cieplnego i zaoszczędzenia na zbędnych wydatkach. Wypróbuj i przekonaj się sam(a)! A jeśli chciał(a)byś poczynić większą inwestycję w docieplenie domu lub wymianę źródła ciepła, sprawdź w zakładce <a className={'word-wrap'}
            rel="noreferrer"
            href={'//www.energoporada.pl/dotacjenacieplo'}
            target="_blank"
            aria-label={'Dotacje na ciepło. Link'}
          >DOTACJE NA CIEPŁO</a>, jakie programy dofinansowania są obecnie oferowane.
        </BodyLargeMediumText>
{/* --------------------------------------- */}
        <BodySmallItalicText sx={{marginTop: '86.5px'}} tabIndex={0}>
          Źródła:
        </BodySmallItalicText>
        <ArticleBodyTextStyled tabIndex={0}>
          [1]  Castorama. (2021). Jak zaizolować rury centralnego ogrzewania? Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.castorama.pl/jak-zaizolowac-rury-centralnego-ogrzewania-ins-1044812.html#:~:text=Aby%20na%C5%82o%C5%BCy%C4%87%20izolacj%C4%99%20na%20rur%C4%99%2C%20rozchylamy%20j%C4%85%20wzd%C5%82u%C5%BC%2C,wyci%C4%99cie%20w%20kszta%C5%82cie%20klina%20pod%20k%C4%85tem%2090%20stopni'}
            target="_blank"
          >
            https://www.castorama.pl/jak-zaizolowac-rury-centralnego-ogrzewania-ins-1044812.html#:~:text=Aby%20na%C5%82o%C5%BCy%C4%87%20izolacj%C4%99%20na%20rur%C4%99%2C%20rozchylamy%20j%C4%85%20wzd%C5%82u%C5%BC%2C,wyci%C4%99cie%20w%20kszta%C5%82cie%20klina%20pod%20k%C4%85tem%2090%20stopni
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [2] Castorama. (2021). Izolacja rur centralnego ogrzewania i ciepłej wody. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.castorama.pl/izolacja-rur-centralnego-ogrzewania-i-cieplej-wody-ins-65514.html'}
            target="_blank"
          >
            https://www.castorama.pl/izolacja-rur-centralnego-ogrzewania-i-cieplej-wody-ins-65514.html
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [3] Castorama. (2021). Ekran zagrzejnikowy - jak działa. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.castorama.pl/ekran-zagrzejnikowy-jak-dziala-ins-95683.html '}
            target="_blank"
          >
            https://www.castorama.pl/ekran-zagrzejnikowy-jak-dziala-ins-95683.html 
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [4] WHO, UNEP. (1990). Indoor Environment: Health Aspects of Air Quality, Thermal Environment, Light and Noise. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={' https://iris.who.int/handle/10665/62723'}
            target="_blank"
          >
             https://iris.who.int/handle/10665/62723
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [5] Wookey, R., Bone, A., Carmichael, C., Crossley, A. (2014). Minimum home temperature thresholds for health in winter – A systematic literature review. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/776497/Min_temp_threshold_for_homes_in_winter.pdf'}
            target="_blank"
          >
            https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/776497/Min_temp_threshold_for_homes_in_winter.pdf
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [6] Scottish government. (2017). A new definition of fuel poverty in Scotland: Review of recent evidence. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.gov.scot/publications/new-definition-fuel-poverty-scotland-review-recent-evidence/pages/10/'}
            target="_blank"
          >
            https://www.gov.scot/publications/new-definition-fuel-poverty-scotland-review-recent-evidence/pages/10/
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [7] Vaillant. Jak obniżyć temperaturę w domu na noc? Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.vaillant.pl/klienci-indywidualni/porady-i-wiedza/poradnik/inne/jak-obnizyc-temperature-w-domu-na-noc/'}
            target="_blank"
          >
            https://www.vaillant.pl/klienci-indywidualni/porady-i-wiedza/poradnik/inne/jak-obnizyc-temperature-w-domu-na-noc/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [8] Doradztwo energetyczne. Dobre rady przygotowane przez zespół PDE. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://doradztwo-energetyczne.gov.pl/wiedza/dobre-rady'}
            target="_blank"
          >
            https://doradztwo-energetyczne.gov.pl/wiedza/dobre-rady
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [9] Teleszewski A., Gajewski A., Gładyszewska-Fiedoruk, K. (2018). Wyznaczanie strumienia powietrza przepływającego przez okno. Ciepłownictwo, Ogrzewnictwo, Wentylacja. T. 49, nr 6, abstrakt. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'http://yadda.icm.edu.pl/yadda/element/bwmeta1.element.baztech-2e424fb2-0acb-44f8-8594-32cb8842fef9'}
            target="_blank"
          >
            http://yadda.icm.edu.pl/yadda/element/bwmeta1.element.baztech-2e424fb2-0acb-44f8-8594-32cb8842fef9
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [10] Meteo serwis okien. Jak sprawdzić szczelność okien i ustawić okna na zimę? Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.serwismeteo.pl/poradnik/jak-sprawdzic-szczelnosc-okien-i-ustawic-okna-na-zime/ '}
            target="_blank"
          >
            https://www.serwismeteo.pl/poradnik/jak-sprawdzic-szczelnosc-okien-i-ustawic-okna-na-zime/ 
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [11] OBI. Jak uszczelnić okna - sposób na uszczelnianie okien plastikowych. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.obi.pl/porady/budowac/jak-uszczelnic-okna/#:~:text=Ta%C5%9Bma%20do%20uszczelniania%20okien&text=Do%20poprawnego%20uszczelnienia%20trzeba%20przede,si%C4%99%20ta%C5%9Bmy%20poliuretanowe%20lub%20paroprzepuszczalne'}
            target="_blank"
          >
            https://www.obi.pl/porady/budowac/jak-uszczelnic-okna/#:~:text=Ta%C5%9Bma%20do%20uszczelniania%20okien&text=Do%20poprawnego%20uszczelnienia%20trzeba%20przede,si%C4%99%20ta%C5%9Bmy%20poliuretanowe%20lub%20paroprzepuszczalne
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [12] Ania Radzi. (2022). Jak uszczelnić drzwi wejściowe krok po kroku - poradnik. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://aniaradzi.pl/porady/jak-uszczelnic-drzwi-wejsciowe-krok-po-kroku-poradnik/'}
            target="_blank"
          >
            https://aniaradzi.pl/porady/jak-uszczelnic-drzwi-wejsciowe-krok-po-kroku-poradnik/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [13] Lutostanski.pl, Drzwi i okna. Poradnik dla zainteresowanych aranżacją wnętrz. Jak uszczelnić drzwi wejściowe?  
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'http://www.lutostanski.pl/jak-uszczelnic-drzwi-wejsciowe/'}
            target="_blank"
          >
            http://www.lutostanski.pl/jak-uszczelnic-drzwi-wejsciowe/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [14] Energy saving trust. Reducing home heat loss. Floor insulation. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://energysavingtrust.org.uk/advice/floor-insulation/'}
            target="_blank"
          >
            https://energysavingtrust.org.uk/advice/floor-insulation/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [15] Energy saving trust. Reducing home heat loss. Windows and doors. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={' https://energysavingtrust.org.uk/advice/windows-and-doors/'}
            target="_blank"
          >
             https://energysavingtrust.org.uk/advice/windows-and-doors/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [16] Leung, A. (2020). How to Keep Warm and Save on Energy Bills This Winter. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.nrdc.org/stories/how-keep-warm-and-save-your-energy-bills-winter'}
            target="_blank"
          >
            https://www.nrdc.org/stories/how-keep-warm-and-save-your-energy-bills-winter
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}