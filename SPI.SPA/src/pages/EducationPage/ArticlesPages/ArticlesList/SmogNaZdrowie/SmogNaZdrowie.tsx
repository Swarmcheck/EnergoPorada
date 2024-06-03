import React, { useEffect, useRef } from "react";
import { BodySmallItalicText, BodySmallMediumText, H2Text } from "../../../../../shared/FontBoxes/FontBoxes.styles";
import { useFooter } from "../../../../../contexts/Footer/footer"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { PageEnum } from "../../../../../contexts/Footer/Page.enum";
import { ArticleBodyLargeTextStyled, ArticleBodyTextStyled, ArticlesLinkStyled } from "../../ArticlesComponents/ArticlePage.styles";
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled, ProgramPageListBoxStyled } from "../../../../../pages/DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles";
import { SetProgramEducationFooterProps } from "../../../../../pages/DotationAndEducationShared/SetProgramEducationFooter"
import '../../../../DotationsPage/ProgramBoxes/linkText.css';
import { ArticleImage } from "../../ArticlesComponents/ArticleImage";
import { smogNaZdrowie } from "../SmogNaZdrowie/SmogNaZdrowieText";
import SmogZdrowie1 from '../../../../../public/pictures/articlesPictures/SmogZdrowie1.png'
import SmogZdrowie2 from '../../../../../public/pictures/articlesPictures/SmogZdrowie2.png'
import SmogZdrowie3 from '../../../../../public/pictures/articlesPictures/SmogZdrowie3.png'
import { Box } from "@mui/material";

export const SmogNaZdrowie = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])

  const listOfTextsMore = [
    (<BodySmallMediumText tabIndex={0}>
      Tekst Piotra Łyczki
      <br/>
      <ArticlesLinkStyled
        href={'https://powietrze.malopolska.pl/baza/substancje-z-grupy-dioksyn-zrodla-pochodzenia-i-wplyw-na-zdrowie/'}
        target="_blank"
        sx={{fontSize: '16px'}}
        aria-label={'Substancje z grupy dioksyn – źródła pochodzenia i wpływ na zdrowie w portalu powietrze.malopolska.pl. Link'}
      >
        Substancje z grupy dioksyn – źródła pochodzenia i wpływ na zdrowie w portalu powietrze.malopolska.pl.
      </ArticlesLinkStyled> 
    </BodySmallMediumText>),
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(smogNaZdrowie.outsideLink, smogNaZdrowie.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readArticle} tabIndex={0}>
          {smogNaZdrowie.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={smogNaZdrowie.icon}/>
        <ProgramPageFirstTextStyled>
          <ArticleBodyLargeTextStyled tabIndex={0}>
            Choć nie zawsze go widzimy i czujemy w powietrzu, to nie znaczy, że nie istnieje. Smog jest z nami na co dzień i nie pozostaje bez wpływu na nasze zdrowie. Szczególnie groźny jest dla osób w ciąży, seniorów i dzieci, ale mieszkając w Rybniku każdy z nas w sezonie jesienno-zimowym oddycha zanieczyszczonym, trującym powietrzem[1]. Według danych WHO w 2013 roku spośród 50 najbardziej zanieczyszczonych miast Europie 30 znajdowało się w Polsce. Wśród nich znalazł się także Rybnik[2]. Czym skutkuje życie w przewlekle zanieczyszczonym środowisku? 
          </ArticleBodyLargeTextStyled>
          <p/>
          <Box tabIndex={0}>
            W wyniku spalania węgla i drewna do atmosfery uwalniają się między innymi metale ciężkie, dioksyny, benzo(a)piren i pył zawieszony. Jeszcze gorzej jest w przypadku spalania mułu, flotokoncentratu, plastiku czy przedmiotów lakierowanych. Zanieczyszczenia metalami ciężkimi kojarzymy głównie z przemysłem i motoryzacją (niektórzy pamiętają powszechność stosowania benzyny z dodatkiem związku ołowiu), ale zwykłe domowe piece węglowe również są zdolne zatruć powietrze arsenem, rtęcią czy właśnie ołowiem. O toksyczności metali ciężkich zapewne nie trzeba nikogo przekonywać. Co jednak z pyłem zawieszonym? Czy nie jest to zwykła sadza? Jak może być tak bardzo szkodliwa? Czytaj dalej, aby dowiedzieć się więcej nie tylko o pyle zawieszonym, ale też o tym, na czym polega szkodliwość benzo(a)pirenu oraz o tym, czemu piszemy w kontekście smogu o dioksynach, które kojarzą się raczej z wypadkami przemysłowymi i aferami mięsnymi.
          </Box>
          <p/>
          <Box tabIndex={0}>
            <ArticleBodyLargeTextStyled>Badania nie pozostawiają złudzeń – smog negatywnie wpływa na całokształt naszego zdrowia, destabilizuje pracę wielu układów, zwiększa ryzyko chorób, pogarsza stan osób już chorujących, a także całkowicie zdrowych mieszkańców.</ArticleBodyLargeTextStyled> Zanieczyszczenie powietrza szczególnie mocno odbija się na dzieciach, osobach w ciąży, ludziach starszych i żyjących z obciążeniami zdrowotnymi.
          </Box>  
          <p/>
          <Box tabIndex={0}>
            Pierwsze symptomy oddychania pyłami możemy poczuć nawet po kilku godzinach. Ból głowy, ogólne osłabienie, uczucie suchości w gardle czy kaszel mogą być skutkiem wdychania skażonego szkodliwymi substancjami powietrza. Im dłużej jesteśmy wyeksponowani na zanieczyszczenia, tym wyższe jest ryzyko powikłań zdrowotnych, szczególnie w obrębie układów oddechowego, nerwowego oraz układu krążenia[3]. 
          </Box>
          <p/>
          <Box tabIndex={0}>
            <ArticleBodyLargeTextStyled>Regularna ekspozycja na smog zwiększa ryzyko infekcji takich jak zapalenie płuc i oskrzeli, prowadzi również do nasilenia objawów astmy oraz przewlekłej obturacyjnej choroby płuc.</ArticleBodyLargeTextStyled> Oba wspomniane schorzenia dotyczą milionów ludzi w Polsce (odpowiednio około 4 i 2 mln chorych). Znaczna część z nich pozostaje niezdiagnozowana, a więc nie jest też odpowiednio leczona, co skutkuje dodatkowym podwyższonym ryzykiem zaostrzenia choroby przy częstej ekspozycji na smog[3].
          </Box>
          <p/>
          <Box tabIndex={0}>
            Mniej oczywistą konsekwencją zanieczyszczenia powietrza jest nasilenie się chorób układu sercowo-naczyniowego, ale także występowanie ich po raz pierwszy u osób dotychczas zupełnie zdrowych. Nagłe zatrzymanie krążenia, zawał mięśnia sercowego czy niedokrwienny udar mózgu to tylko niektóre z przykrych konsekwencji ciągłego zwiększonego narażenia na smog. Skalę zagrożenia obrazuje choćby fakt, że przewlekła ekspozycja na zanieczyszczone powietrze została uznana przez Polskie Forum Profilaktyki za bezpośrednią przyczynę chorób układu krążenia[4].
          </Box>  
          <p/>
        </ProgramPageFirstTextStyled>

        <ArticleImage image={SmogZdrowie1}/>
        <H2Text sx={{marginTop: '5px', marginBottom: '40px'}} tabIndex={0}>
          Jak szkodzą nam dioksyny?
        </H2Text>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Dioksyny powstają w wyniku spalania różnych materiałów w zbyt niskich temperaturach. Aby uniknąć emisji dioksyn, nowoczesne spalarnie śmieci muszą zapewniać temperaturę co najmniej 850oC, a zalecana jest jeszcze wyższa, 1000oC. Piece domowe operują częściej w granicach 500oC[5]. 850oC nie jest też temperaturą, która powstawałaby w ognisku na wolnym powietrzu (między innymi dlatego nawet liści nie powinno się próbować utylizować na własną rękę, chyba że w kompostowniku, tj. bez spalania). Baza wiedzy dostępna na stworzonym przez uczonych z Uniwersytetu Wrocławskiego geoportalu Nasze Powietrze podaje, że – niestety – również standardowe sposoby spalania węgla i oleju opałowego powodują wydzielanie się dioksyn[6].
          </Box>   
          <p/>
          <Box tabIndex={0}>
            <ArticleBodyLargeTextStyled>Uporczywa szkodliwość dioksyn bierze się z tego, że pozostają one w środowisku praktycznie na zawsze.</ArticleBodyLargeTextStyled>
           Nie rozpadają się, nie wyparowują, nie są przetwarzane w coś innego przez organizmy żywe. Raz uwolnione krążą w niezmienionej, szkodliwej postaci w przyrodzie. Tego rodzaju substancje nazywamy trwałymi zanieczyszczeniami organicznymi.
          </Box>
          <br/>
          <Box tabIndex={0}>
            Ktoś, kto słyszał więcej o dioksynach, mógłby zapytać: „zaraz, ale czy nie jest prawdą, że przez wdychanie oraz wchłanianie z powietrza przez skórę przeciętny człowiek przyjmuje tylko ok. 10% sumy dioksyn w ciągu swojego życia, zaś większość spożyje wraz z jedzeniem? Po co więc robić tyle hałasu o dioksyny w kontekście smogu?”. To wszystko prawda, i ta prawda prowadzi nas z powrotem do trwałości dioksyn i ich krążenia w przyrodzie. Poprzez powietrze, glebę i wodę dioksyny dostają się do organizmów żywych, w których kumulują się w niezmienionej postaci, a przecież organizmy żywe są właśnie tym, co zjadają ludzie (również nasza przemiana materii nie jest w stanie przekształcić dioksyn w coś nieszkodliwego). Dlatego właśnie dioksyny znajdowane są nawet w ciałach zwierząt bytujących daleko od cywilizacji, np. w Arktyce i Antarktyce, a wysokie stężenia dioksyn występują w ciałach, mleku i jajach zwierząt hodowanych blisko szczególnie wysokoemisyjnych zakładów przemysłowych. <ArticleBodyLargeTextStyled>Prawdopodobne jest więc, że dioksyny kryjące się w kupowanym przez Ciebie mleku, maśle, serach, rybach, jajach czy mięsie (zwłaszcza tłustym – dioksyny mają tendencję do odkładania się w tłuszczu) wyleciały kiedyś z jakiegoś komina.</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box tabIndex={0}>
            Światowa Organizacja Zdrowia (WHO) informuje, że po dostaniu się do organizmu człowieka dioksyny mają <ArticleBodyLargeTextStyled>potencjał upośledzania układu odpornościowego, działania hormonów płciowych (niezbędnych dla płodności, utrzymania ciąży oraz zdrowia płodu i noworodka) i rozwoju układu nerwowego[7].</ArticleBodyLargeTextStyled> Badania z udziałem zwierząt wskazują też na potencjał rakotwórczy dioksyn lub przynajmniej takie ich działanie, które hamuje naturalne sposoby spowalniania rozwoju raka lub przyspiesza wzrost już istniejących guzów nowotworowych[8]. Można przypuszczać, że to z tego powodu amerykańska Agencja Ochrony Środowiska (US EPA) określiła dioksyny jako „prawdopodobnie rakotwórcze dla człowieka”[9]. Dotyczy to dawek wyższych niż przeciętne ilości dioksyn w środowisku na świecie. Należy jednak pamiętać, że jako jedno z najbardziej zanieczyszczonych miast w Europie Rybnik w istocie doświadcza ponadprzeciętnych emisji.
          </Box>
          <p/>
        </ProgramPageFirstTextStyled>

        <ArticleImage image={SmogZdrowie2}/>
        <H2Text sx={{marginTop: '5px', marginBottom: '40px'}} tabIndex={0}>
          Jak szkodzi nam Benzo(a)piren?
        </H2Text>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Benzo(a)piren, czyli benzoalfapiren, również jest produktem niekompletnego spalania (w temperaturze między 300oC a 600oC) materii organicznej i również dociera do ludzkiego ciała głównie za pośrednictwem żywności, zwłaszcza mięsa i nabiału, ponieważ, podobnie jak dioksyny, odkłada się w tkance tłuszczowej i przenika do produktów odzwierzęcych zawierających tłuszcz. Warto jednak pamiętać, że mieszkanki i mieszkańcy Rybnika, ze względu na bezpośrednie przebywanie w katastrofalnie zanieczyszczonym powietrzu, przyjmują też duże dawki benzo(a)pirenu drogą oddechową. <ArticleBodyLargeTextStyled>Szacuje się, że rybniczanie i rybniczanki średnio dziennie wdychają dawkę benzo(a)pirenu równą wypaleniu od 3 do 10 papierosów[10].</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
          <Box tabIndex={0}>
            Rakotwórcze działanie benzo(a)pirenu zostało wykazane przez naukę ponad wszelką wątpliwość. Jest to jedna z kilku zabójczych substancji wchłanianych przez palaczy i palaczki papierosów. Już w XVIII w. zauważono związek pomiędzy wykonywaniem zawodu kominiarza a narażeniem na raka skóry moszny. Dziś wiemy, że czynnikiem odpowiedzialnym za te nowotwory był między innymi benzo(a)piren. <ArticleBodyLargeTextStyled>Udowodniono, że benzo(a)piren negatywnie oddziałuje na ludzki materiał genetyczny (wchodzi pomiędzy ogniwa łańcucha DNA w komórkach ciała)[11], zaś uszkodzenia DNA, tj. mutacje, których ciało nie zdoła na czas skutecznie naprawić, to właśnie bezpośrednia przyczyna nowotworów.</ArticleBodyLargeTextStyled>
          </Box>
          <p/>
        </ProgramPageFirstTextStyled>

        <ArticleImage image={SmogZdrowie3}/>
        <H2Text sx={{marginTop: '5px', marginBottom: '40px'}} tabIndex={0}>
          Jak szkodzą nam pyły zawieszone?
        </H2Text>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Czy pyły zawieszone to „zwyczajna sadza”? Można powiedzieć, że jest to rodzaj sadzy, ale bardzo, bardzo drobnej. Jej cząsteczki unoszą się w powietrzu i są jedną z najczęstszych przyczyn skażenia powietrza w Polsce[1]. Czy to nie lepiej, gdy coś, co jest szkodliwe, jest też drobne? Niestety nie – przypadku pyłów zawieszonych jest wręcz przeciwnie. Im mniejsze są cząsteczki pyłów zawieszonych, tym gorzej, ponieważ dzięki swojemu mikroskopijnemu rozmiarowi pył może dostawać się do najgłębszych zakamarków układu oddechowego, przyczyniając się do pogorszenia jego funkcjonowania i powstawania chorób, w tym także nowotworowych. <ArticleBodyLargeTextStyled>Najdrobniejsze pyły (o średnicy mniejszej niż 2,5 mikrometra) mogą nawet dostawać się z płuc do krwi, a następnie być rozprowadzane po całym organizmie, szkodząc wszystkim narządom, w tym sercu i mózgowi[1].</ArticleBodyLargeTextStyled> Cząsteczki pyłów zawieszonych dostające się do mózgu mogą znacznie pogarszać funkcjonowanie także układu nerwowego człowieka – począwszy od nasilenia symptomów depresyjnych, przez osłabienie funkcjonowania poznawczego, po przewlekłe stany zapalne i procesy degeneracyjne przyczyniające się np. do rozwoju choroby Alzheimera[3].
          </Box>
          <p/>
          <Box tabIndex={0}>
            Pył zawieszony został też w 2013 roku uznany przez Międzynarodową Agencję Badań nad Rakiem (IARC) za substancję o działaniu rakotwórczym. W badaniach widać wyraźny związek pomiędzy stopniem zanieczyszczenia powietrza a liczbą zachorowań na raka płuc. <ArticleBodyLargeTextStyled>Szacuje się, że w Polsce różnica w wysokości ryzyka zachorowania na raka płuc może wynosić od 20% do nawet 40% pomiędzy najbardziej a najmniej zanieczyszczonymi terenami kraju.</ArticleBodyLargeTextStyled> Różne badania wskazują także na powiązanie smogu z ryzykiem wykształcenia się innych nowotworów, m.in. raka pęcherza moczowego oraz raka szyjki macicy[1]. Narażenie osób w ciąży na zanieczyszczenia powietrza może przyczynić się także do występowania nowotworów u dzieci[2].
          </Box>
          <p/>
          <Box tabIndex={0}>
            Ich zdrowie jest szczególnie narażone w kontakcie ze smogiem. Już prenatalna ekspozycja na szkodliwe pyły negatywnie wpływa na rozwój układu nerwowego u dzieci, co potwierdzają badania. Dzieci, które w trakcie życia płodowego były narażone na zanieczyszczenia powietrza, w wieku 5 lat otrzymywały niższe wyniki w testach ilorazu inteligencji (IQ) w porównaniu do dzieci rozwijających się w środowisku niezanieczyszczonym. <ArticleBodyLargeTextStyled>Narażenie na trujące substancje podczas rozwoju prenatalnego przyczynia się do wzrostu prawdopodobieństwa wewnątrzmacicznego obumarcia płodu, przedwczesnego urodzenia czy niskiej wagi noworodków[2].</ArticleBodyLargeTextStyled> Powstaje też coraz więcej badań, które łączą prenatalną ekspozycję na smog z zaburzeniami ze spektrum autyzmu, jednak ten związek wymaga jeszcze dalszych badań, w celu potwierdzenia przyczynowo-skutkowych zależności[2].
          </Box>
          <p/>
          <Box tabIndex={0}>
            Liczne powikłania zdrowotne, będące skutkiem przewlekłego narażenia na zanieczyszczone powietrze, przekładają się również na zwiększoną umieralność. Przeciętna długość życia na terenach, na których występuje zjawisko smogu, jest znaczne krótsza niż na obszarach, gdzie powietrze nie jest zanieczyszczone. Badania wskazują, że skażone pyłami powietrze może skracać życie ludzi nawet o rok. W Polsce zjawisko to ma miejsce od wielu lat. Każdego roku, z powodu zanieczyszczonego powietrza przedwcześnie umiera ponad 45 000 ludzi[10], podczas gdy w wypadkach samochodowych ginie ich rocznie 10 razy mniej.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Negatywny wpływ ekspozycji na smog jest dziś niepodważalny. Przez oddychanie zanieczyszczonym powietrzem cierpi nasze codzienne samopoczucie, ale także układy nerwowy, krążenia, a przede wszystkim oddechowy. Szczególnie wrażliwe na negatywne skutki zanieczyszczenia powietrza są dzieci, osoby starsze i chore, ale niestety wbrew pozorom nawet niewielkie dawki szkodliwych substancji są w stanie poważnie zagrozić każdemu z nas. Warto abyśmy chronili siebie przed szkodliwym wpływem zanieczyszczeń oraz starali się o doprowadzenie do zmniejszenia zjawiska smogu, ponieważ stawką w walce ze nim jest nasze zdrowie i życie. 
          </Box>
        </ProgramPageFirstTextStyled>

        <ProgramPageFirstTextStyled sx={{marginTop: '60px'}} tabIndex={0}>
          Jeśli chcesz, możesz czytać dalej.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTextsMore.map((l, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodySmallItalicText sx={{marginTop: '86.5px'}} tabIndex={0}>
          Źródła:
        </BodySmallItalicText>
        <ArticleBodyTextStyled tabIndex={0}>
          [1] Edukacyjna Sieć Antysmogowa, NASK Państwowy Instytut Badawczy. Podstawowa wiedza. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://esa.nask.pl/podstawowa-wiedza'}
            target="_blank"
          >
            https://esa.nask.pl/podstawowa-wiedza
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [2] Badyda, A., Dąbrowiecki, P., Jędrak, J., Konduracka, E. (2017). Wpływ zanieczyszczeń powietrza na zdrowie. Kraków. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://polskialarmsmogowy.pl/files/artykuly/1346.pdf'}
            target="_blank"
          >
            https://polskialarmsmogowy.pl/files/artykuly/1346.pdf
          </a> (23.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [3] Łyczko, P. (2017). Wpływ zanieczyszczeń powietrza na zdrowie. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://powietrze.malopolska.pl/baza/wplyw-zanieczyszczen-powietrza-na-zdrowie/'}
            target="_blank"
          >
            https://powietrze.malopolska.pl/baza/wplyw-zanieczyszczen-powietrza-na-zdrowie/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [4] Undas, A., Kopeć, G. i in. Wytyczne polskiego forum profilaktyki dotyczące tzw. nowych czynników i markerów ryzyka sercowo-naczyniowego. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'http://polskieforumprofilaktyki.edu.pl/wytyczne/czynnikiryzyka.html'}
            target="_blank"
          >
            http://polskieforumprofilaktyki.edu.pl/wytyczne/czynnikiryzyka.html
          </a> (25.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [5] Katowice dla odmiany. Spalanie odpadów tylko w spalarni! Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://odpady.katowice.eu/spalanie-odpadow-tylko-w-spalarni/'}
            target="_blank"
          >
            https://odpady.katowice.eu/spalanie-odpadow-tylko-w-spalarni/
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [6] Drzeniecka-Osiadacz, A. Emisja zanieczyszczeń. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://powietrze.uni.wroc.pl/base/t/emisja'}
            target="_blank"
          >
            https://powietrze.uni.wroc.pl/base/t/emisja
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [7] Światowa Organizacja Zdrowia. (2016). Dioxins and their effects on human health. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health'}
            target="_blank"
          >
            https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          {'[8] Dragan Y. P., Schrenk D. (2000). Animal studies addressing the carcinogenicity of TCDD (or related compounds) with an emphasis on tumour promotion. Food Additives & Contaminants, Vol. 17, s. 289-302, doi: 10.1080/026520300283360.'}
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [9] Cyt. za: Minnesota Department of Health. (2009). Guidance for Dioxins. Methods for Estimating the Carcinogenic Health Risks from Dioxin-Like Compounds, s. 3. Pobrane z: 
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://www.health.state.mn.us/communities/environment/risk/docs/guidance/dioxinmemo1.pdf'}
            target="_blank"
          >
            https://www.health.state.mn.us/communities/environment/risk/docs/guidance/dioxinmemo1.pdf 
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [10] Edukacyjna Sieć Antysmogowa, NASK Państwowy Instytut Badawczy. Weź nie truj! Obalamy mity smogowe – czy smog szkodzi zdrowiu? Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://esa.nask.pl/media/2019/11/03_20181120_MIT_03_PZU.4d2deda4.pdf'}
            target="_blank"
          >
            https://esa.nask.pl/media/2019/11/03_20181120_MIT_03_PZU.4d2deda4.pdf 
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
        <ArticleBodyTextStyled tabIndex={0}>
          [11] Ćwik, P. (2020). Czym truje nas smog (#3)? Węglowodory aromatyczne, w tym benzopireny. Pobrane z:
          <br/>
          <a className={'word-wrap'}
            rel="noreferrer"
            href={'https://smoglab.pl/weglowodory-aromatyczne-w-tym-benzopireny/'}
            target="_blank"
          >
            https://smoglab.pl/weglowodory-aromatyczne-w-tym-benzopireny/ 
          </a> (22.03.2022).
        </ArticleBodyTextStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}