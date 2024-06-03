import React, { useEffect, useRef } from "react"
import { BodySmallItalicText, BodySmallMediumText } from "shared/FontBoxes/FontBoxes.styles"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { SetProgramEducationFooterProps } from "pages/DotationAndEducationShared/SetProgramEducationFooter"
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled, ProgramPageListBoxStyled } from "pages/DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles"
import { Box } from "@mui/material"
import { skadSmog } from "./SkadSmogText"
import { GenerateNumericListItem } from "pages/DotationAndEducationShared/GenerateNumericListItem"
import SkadSmog1 from '../../../../../public/pictures/articlesPictures/SkadSmog1.png'
import { ArticleImage } from "../../ArticlesComponents/ArticleImage"
import { ArticleBodyLargeTextStyled, ArticleBodyTextStyled, ArticlesLinkStyled, ArticleTitleTextStyled } from "../../ArticlesComponents/ArticlePage.styles"
import '../../../../DotationsPage/ProgramBoxes/linkText.css'

export const SkadSmog = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])

  const listInsideList = [
    '„Smog” to obce, anglojęzyczne słowo. Starsze pokolenia Polaków i Polek niekoniecznie nim operowały. W TVP Katowice można było za to codziennie obejrzeć zestawienie stężeń m.in. pyłu zawieszonego. Potrzeba czasu, aby opinia publiczna uświadomiła sobie, że to może być to samo, i że o tym właśnie zjawisku obecnie się alarmuje, choć przez całe dekady nikomu by to nie przyszło do głowy.',
    'Główną przyczyną smogu w wielu zachodnich metropoliach, np. w Paryżu, rzeczywiście jest motoryzacja. Łatwiej jest nam więc skojarzyć zagrożenie trującym powietrzem z zakorkowanymi ulicami niż ze spokojną dzielnicą domów jednorodzinnych.',
    (<Box>
      Ktoś mógłby pomyśleć, że smog musi być problemem jedynie najbardziej rozwiniętych (czytaj: uprzemysłowionych) krajów i, rzecz jasna, nie zaliczać Polski do tego grona. Współcześnie taki pogląd jest przestarzały nie tylko dlatego, że również gospodarki oparte raczej na usługach niż przemyśle osiągają najwyższe stopnie rozwoju, ale także dlatego, że to kraje zamożniejsze mają większe możliwości radzenia sobie z zanieczyszczeniami. <ArticleBodyLargeTextStyled> Zły stan powietrza czy w ogóle słabsze regulacje ekologiczne są więc raczej oznaką zacofania niż rozwoju.</ArticleBodyLargeTextStyled>
    </Box>)
  ]
  
  const listOfTexts = [
    'Wydaje nam się, że działanie pojedynczego gospodarstwa domowego ma tak niewielką skalę w porównaniu do fabryki czy elektrowni, że nie może mieć istotnego znaczenia. Szczególnie w kontekście tak ogromnego problemu, jak zanieczyszczenie powietrza na obszarze wielu kilometrów kwadratowych w stopniu wielokrotnie przekraczającym dopuszczalne normy. Jednak gdy domów są setki, skala zjawiska narasta.',
    (<Box>
      Pomijając ostatnie 10-15 lat, byliśmy przyzwyczajani do wiadomości o smogu z miast Europy Zachodniej i Stanów Zjednoczonych, co ma trojakie konsekwencje.
      {listInsideList.map(l =>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
          <Box sx={{marginRight: '10px', fontSize: 40}}> · </Box>
          <Box> {l} </Box>
        </Box>
      )}
    </Box>)
  ]

  const listOfTextsMore = [
    (<BodySmallMediumText tabIndex={0}>
      Dr inż. Kazimierz Warmiński o smogu zimowym dla Gazety Uniwersytetu  Warmińsko-Mazurskiego w Olsztynie:
      <br/>
      <ArticlesLinkStyled
        href={'http://www.uwm.edu.pl/egazeta/smog-zimowy-towarzysz-mrozu'}
        target="_blank"
        sx={{fontSize: '16px'}}
      >
        http://www.uwm.edu.pl/egazeta/smog-zimowy-towarzysz-mrozu.
      </ArticlesLinkStyled> 
    </BodySmallMediumText>),
    (<BodySmallMediumText tabIndex={0}>
      Infografiki Polskiego Alarmu Smogowego o źródłach 
      <br/>
      <ArticlesLinkStyled
        href={'https://polskialarmsmogowy.pl/files/artykuly/2077.jpg'}
        target="_blank"
        sx={{fontSize: '16px'}}
      >
        pyłu zawieszonego PM10 i rakotwórczego benzo(a)pirenu.
      </ArticlesLinkStyled> 
    </BodySmallMediumText>)
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(skadSmog.outsideLink, skadSmog.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readArticle} tabIndex={0}>
          {skadSmog.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={skadSmog.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Polska jest niechlubnym liderem emisji smogu w Unii Europejskiej. Najgorsza sytuacja jest w województwie śląskim, które emituje 1/5 zanieczyszczeń pyłowych i 50% zanieczyszczeń gazowych w naszym kraju. Odpowiedzialna za te skażenia powietrza jest głównie tzw. niska emisja pochodząca przede wszystkim z gospodarstw domowych[1].
        </ProgramPageFirstTextStyled>
        <ArticleTitleTextStyled tabIndex={0}>
          Główna przyczyna smogu
          <br/>
          …i dlaczego czasem w nią nie wierzymy
        </ArticleTitleTextStyled>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Nazwa niskiej emisji wzięła się od odpowiadających za nią kominów, które liczą sobie mniej niż 40 metrów – są niskie[2].  Wydobywają się z nich spaliny pochodzące z pieców na paliwa stałe (czyli te paliwa, które nie są płynne/gazowe) i kotłów w gospodarstwach domowych[3]. To właśnie te spaliny są odpowiedzialne za większość zanieczyszczeń powietrza. Wielu osobom trudno w to uwierzyć, prawdopodobnie z trzech głównych powodów.
        </ProgramPageFirstTextStyled>
        {listOfTexts.map((t,n) => {
          return <GenerateNumericListItem number={n} text={t} key={n}/>
        })}
        <ProgramPageTitleBoxStyled tabIndex={0}>
          A co z przemysłem i ruchem samochodowym?
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={SkadSmog1}/>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            O złą jakość powietrza wiele osób nadal obwinia przemysł, który już od pięćdziesięciu lat nie jest głównym źródłem zanieczyszczeń. Jego wpływ na produkcję smogu został zmniejszony między innymi przez rozwój technologiczny oraz egzekwowanie norm emisji spalin. <ArticleBodyLargeTextStyled>Choć polski przemysł nadal dostarcza wiele niebezpiecznych składników do atmosfery, nie stanowią one nawet połowy zanieczyszczeń[4].</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box tabIndex={0}>
            Sektor energetyczny, który również czasem wskazuje się jako źródło smogu, w ciągu ostatnich kilku lat znacząco zredukował emisję zanieczyszczeń. Obecnie energetyka zmierza ku rozwiązaniom przyjaznym dla środowiska, a co za tym idzie dbającym o jakość powietrza. Potwierdza to fakt, że <ArticleBodyLargeTextStyled>sektor energetyczny od kilku lat inwestuje w redukcję emisji zanieczyszczeń oraz modernizuje jednostki produkujące energię.</ArticleBodyLargeTextStyled> W efekcie od 2005 roku emisja pyłu w elektrowniach spadła osiemnastokrotnie[5].
          </Box>
          <p/>
          <Box tabIndex={0}>
            Obok przemysłu oraz energetyki, jako główną przyczynę problemu smogowego niektórzy podają transport samochodowy. Mimo że pojazdy spalinowe faktycznie emitują liczne zanieczyszczenia, w rzeczywistości stanowią one ułamek problemu. Z wyników badań Krajowego Ośrodka Bilansowania i Zarządzania Emisjami wiemy, że <ArticleBodyLargeTextStyled>w Polsce w 2017 roku transport drogowy przyczynił się do produkcji jedynie 8% pyłu PM10 w powietrzu i 1% rakotwórczego benzo(a)pirenu.</ArticleBodyLargeTextStyled> W tym czasie niska emisja wyprodukowała 46% pyłu i 84% benzo(a)pirenu[3]. Te liczby bardzo wyraźnie pokazują wpływ niskiej emisji na stan powietrza. Można się o nim przekonać również porównując letnie nasilenie smogu z jesienno-zimowym. A przecież latem auta ani ciężarówki nie znikają z polskich dróg.
          </Box>
          <br/>
          <Box tabIndex={0}>
            Wzrasta natomiast niska emisja, a wraz z nią poziom spalin w powietrzu.
          </Box>
        </ProgramPageFirstTextStyled>
        <ArticleTitleTextStyled tabIndex={0}>
          A zatem…
        </ArticleTitleTextStyled>
        <ProgramPageFirstTextStyled tabIndex={0}>
          …żeby maksymalnie złagodzić problem zanieczyszczenia powietrza w Polsce, <ArticleBodyLargeTextStyled>należy przede wszystkim wymieniać w gospodarstwach domowych i budynkach użyteczności publicznej piece i kotły zasilane paliwami stałymi na inne urządzenia grzewcze.</ArticleBodyLargeTextStyled> Niewygody i koszty z tym związane – choć bardzo realne i wymagające wzmożonego wsparcia obywateli przez władze krajowe, unijne i regionalne – nie powinny być traktowane jako pozwolenie na głoszenie nieprawdy o tym, skąd cały problem się bierze.
        </ProgramPageFirstTextStyled>
        <ProgramPageFirstTextStyled sx={{marginTop: '60px'}} tabIndex={0}>
          Jeśli chcesz, możesz czytać dalej.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTextsMore.map((l,k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodySmallItalicText sx={{marginTop: '86.5px'}} tabIndex={0}>
          Źródła:
        </BodySmallItalicText>
        <ArticleBodyTextStyled tabIndex={0}>
          [1] Samorząd województwa śląskiego. (2018). Silesia pod błękitnym niebem. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://powietrze.slaskie.pl/content/silesia-pod-blekitnym-niebem_20181019131218'}
            target="_blank"
          >
            https://powietrze.slaskie.pl/content/silesia-pod-blekitnym-niebem_20181019131218
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [2] Misja Emisja Walczmy Razem. Dobre praktyki. Policzmy się z niską emisją. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://misja-emisja.pl/goodpractice/policzymy-sie-niska-emisja-2/#:~:text=Niska%20emisja%20to%20wprowadzanie%20do%20powietrza%20zanieczyszcze%C5%84%20z,olejem%20opa%C5%82owym%2C%20indywidualnych%20paleniskach%20domowych%20oraz%20w%20transporcie'}
            target="_blank"
          >
            https://misja-emisja.pl/goodpractice/policzymy-sie-niska-emisja-2/#:~:text=Niska%20emisja%20to%20wprowadzanie%20do%20powietrza%20zanieczyszcze%C5%84%20z,olejem%20opa%C5%82owym%2C%20indywidualnych%20paleniskach%20domowych%20oraz%20w%20transporcie
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [3] Polski alarm smogowy. Skąd się bierze smog? Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://polskialarmsmogowy.pl/smog/skad-sie-bierze-smog/'}
            target="_blank"
          >
            https://polskialarmsmogowy.pl/smog/skad-sie-bierze-smog/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [4] Łuszczyk, Z. (2018). Węgiel Tak, Smog Nie – świadomość i odpowiedzialność. Systemy Wspomagania w Inżynierii Produkcji, 7(1), s. 484-496 Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://bibliotekanauki.pl/articles/113411'}
            target="_blank"
          >
            https://bibliotekanauki.pl/articles/113411
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [5] Nieczypor, K. (2018). Raport PKEE: Za smog odpowiedzialne są gospodarstwa domowe. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://energetyka24.com/elektroenergetyka/raport-pkee-za-smog-odpowiedzialne-sa-gospodarstwa-domowe'}
            target="_blank"
          >
            https://energetyka24.com/elektroenergetyka/raport-pkee-za-smog-odpowiedzialne-sa-gospodarstwa-domowe
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}