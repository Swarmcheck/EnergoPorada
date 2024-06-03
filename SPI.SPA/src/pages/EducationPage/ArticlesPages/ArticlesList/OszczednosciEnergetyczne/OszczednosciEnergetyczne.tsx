import React, { useEffect, useRef } from "react"
import { BodySmallItalicText, BodySmallMediumText, H2Text } from "shared/FontBoxes/FontBoxes.styles"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { SetProgramEducationFooterProps } from "pages/DotationAndEducationShared/SetProgramEducationFooter"
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled, ProgramPageListBoxStyled, ProgramPageLinkStyled } from "pages/DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles"
import { ArticleBodyLargeTextStyled, ArticlesLinkStyled } from "../../ArticlesComponents/ArticlePage.styles"
import { ArticleImage } from "../../ArticlesComponents/ArticleImage"
import { oszczednosciEnergetyczne } from "./OszczednosciEnergetyczneText"
import OszczednosciEnergetyczne2 from '../../../../../public/pictures/articlesPictures/OszczednosciEnergetyczne2.png'
import OszczednosciEnergetyczne3 from '../../../../../public/pictures/articlesPictures/OszczednosciEnergetyczne3.png'
import OszczednosciEnergetyczne4 from '../../../../../public/pictures/articlesPictures/OszczednosciEnergetyczne4.png'
import { Box } from "@mui/material"
import { GenerateNumericListItem } from "pages/DotationAndEducationShared/GenerateNumericListItem"
import { GenerateListItem } from "pages/DotationAndEducationShared/GenerateListItem"

export const OszczednosciEnergetyczne = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])
  
  const listOfTexts = [
    (<Box>
      Gdy gotujesz, pamiętaj o nakładaniu <ArticleBodyLargeTextStyled>przykrywek na garnki.</ArticleBodyLargeTextStyled> Ta mała zmiana pomoże Ci ograniczyć zużycie energii potrzebnej na gotowanie nawet o 15%. 
    </Box>),
    (<Box>
      Naczynie, w którym gotuje lub smaży się potrawa, powinno <ArticleBodyLargeTextStyled>zakrywać całą powierzchnię palnika, a najlepiej mieć średnicę około 2 cm większą niż palnik.</ArticleBodyLargeTextStyled> Zostawiając część palnika niezakrytą, możesz zużywać nawet o 20% energii więcej, niż przy użyciu większego garnka.
    </Box>),
    (<Box>
      Jeśli chcesz ugotować ryż lub makaron, nie czekaj, aż woda zagotuje się w garnku. <ArticleBodyLargeTextStyled>Zagotuj ją w czajniku elektrycznym, a następnie wlej wrzątek do garnka.</ArticleBodyLargeTextStyled> Zaoszczędzisz do 20% energii.
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Za każdym razem gotuj jedynie taką ilość wody, jaką potrzebujesz.</ArticleBodyLargeTextStyled> Nie marnuj energii na podgrzewanie tego, czego nie zamierzasz wykorzystać.
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Podczas używania piekarnika otwieraj go tylko wtedy, gdy to konieczne,</ArticleBodyLargeTextStyled> i staraj się nie otwierać go na długo. Zadbasz w ten sposób o to, aby temperatura w piekarniku nie spadła.
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Kilka minut przed zakończeniem pieczenia możesz wyłączyć piekarnik.</ArticleBodyLargeTextStyled>Temperatura będzie utrzymywała się tam jeszcze przez jakiś czas i potrawa dopiecze się do końca, a Ty zaoszczędzisz trochę energii. 
    </Box>),
  ]
  const listOfTextsTwo = [
    (<Box>
      <ArticleBodyLargeTextStyled>Jeśli w Twojej lodówce tworzy się szron, zadbaj o jej regularne rozmrażanie.</ArticleBodyLargeTextStyled> Szron o grubości 3 mm sprawia, że urządzenie zużywa o 10% energii więcej niż normalnie. 
    </Box>),
    (<Box>
      Kupując nowe sprzęty do kuchni, np. zmywarkę, zadbaj o to, aby urządzenie posiadało <ArticleBodyLargeTextStyled>wysoką klasę energetyczną (np. A++).</ArticleBodyLargeTextStyled> Dzięki temu zaoszczędzisz nawet 30% energii. 
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Jeśli nie używasz urządzeń elektrycznych, wyłączaj je.</ArticleBodyLargeTextStyled> Zostawianie ich w trybie czuwania, sprawia, że mogą zużywać nawet 45% energii zużywanej podczas włączenia.
    </Box>),
    (<Box>
      Staraj się <ArticleBodyLargeTextStyled>maksymalnie wykorzystywać potencjał sprzętów elektrycznych</ArticleBodyLargeTextStyled> – włączaj zmywarkę i pralkę dopiero wtedy, gdy są pełne. Prasuj ubrania w większej ilości. Wyłączaj światło i urządzenia elektryczne, jeśli z nich nie korzystasz.
    </Box>),
    (<Box>
      Jeśli nie potrzebujesz dezynfekcji ani usunięcia szczególnie trudnych plam, <ArticleBodyLargeTextStyled>pierz ubrania w chłodnej wodzie.</ArticleBodyLargeTextStyled> To zazwyczaj zupełnie wystarczy dla odświeżenia garderoby i usunięcia powierzchownych zabrudzeń, a dodatkowo zwiększy trwałość Twoich strojów i zmniejszy ryzyko ich niepożądanego skurczenia się.
    </Box>),
  ]
  const listOfTextsThree = [
    (<Box>
      <ArticleBodyLargeTextStyled>Jeśli posiadasz bojler na wodę, możesz nałożyć na niego izolację.</ArticleBodyLargeTextStyled> Dzięki temu rozwiązaniu oszczędzisz na ogrzewaniu wody. Aby to zrobić, w pierwszej kolejności przykryj bojler wełną mineralną wraz z folią izolacyjną. Następnie umocuj tę warstwę robiąc rozcięcia w miejscach panelu i wejść na rury[2].
    </Box>),
    (<Box>
      <ArticleBodyLargeTextStyled>Zamontuj perlatory na swoich kranach.</ArticleBodyLargeTextStyled> Perlator to małe sitko, które montuje się na końcu wylewki w kranie. Dzięki temu będziesz w stanie zmniejszyć swoje zużycie wody od 15% do nawet 60%. Przełoży się to na mniejsze rachunki, szczególnie jeśli chodzi o wodę ciepłą, która w wielu gospodarstwach obciąża też rachunek za energię.
    </Box>),
  ]

  const moreText = [
    (<BodySmallMediumText>
      <ProgramPageLinkStyled
        href={'https://doradztwo-energetyczne.gov.pl/wiedza/dobre-rady'}
        target="_blank"
        isSmallerLink={true}
        aria-label={'Dobre rady. Link'}
      >
        Dobre rady
      </ProgramPageLinkStyled> przygotowane przez zespół Projektu Doradztwa Energetycznego.
    </BodySmallMediumText>),
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(oszczednosciEnergetyczne.outsideLink, oszczednosciEnergetyczne.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readArticle} tabIndex={0}>
          {oszczednosciEnergetyczne.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={oszczednosciEnergetyczne.icon}/>
        <ProgramPageFirstTextStyled sx={{marginBottom: '30px'}} tabIndex={0}>
          Dzięki temu krótkiemu tekstowi dowiesz się więcej o tym, jak oszczędzać energię (i niekiedy wodę) przy wykonywaniu codziennych czynności, takich jak przygotowywanie posiłków czy mycie się. Ponieważ są to tak powszednie czynności, kumulacja oszczędności w skali roku może być niemała!
        </ProgramPageFirstTextStyled>
        <ArticleImage image={OszczednosciEnergetyczne4}/>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Gotowanie i pieczenie[1]
        </H2Text>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTexts.map((l,k) => 
            <GenerateNumericListItem text={l} number={k} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ArticleImage image={OszczednosciEnergetyczne2}/>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Sprzęty AGD[1]
        </H2Text>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTextsTwo.map((l,k) => 
            <GenerateNumericListItem text={l} number={k+6} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ArticleImage image={OszczednosciEnergetyczne3}/>
        <H2Text sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Kran i prysznic
        </H2Text>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTextsThree.map((l,k) => 
            <GenerateNumericListItem text={l} number={k+11} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ProgramPageFirstTextStyled sx={{marginTop: '60px'}} tabIndex={0}>
          Jeśli chcesz, możesz czytać dalej.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {moreText.map((l,k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodySmallItalicText sx={{marginTop: '86.5px'}} tabIndex={0}>
          Źródła:
        </BodySmallItalicText>
        <BodySmallMediumText sx={{marginTop: '24px'}} tabIndex={0}>
          [1] Doradztwo energetyczne. Dobre rady przygotowane przez zespół PDE. Pobrane z: 
          <br/>
          <ArticlesLinkStyled
            href={'https://doradztwo-energetyczne.gov.pl/wiedza/dobre-rady'}
            target="_blank"
          >
            https://doradztwo-energetyczne.gov.pl/wiedza/dobre-rady
          </ArticlesLinkStyled> (22.03.2022).
        </BodySmallMediumText>
        <BodySmallMediumText sx={{marginTop: '24px'}} tabIndex={0}>
          [2] Ciepło24.pl. (2016). Skuteczne ocieplanie bojlerów. Pobrane z: 
          <br/>
          <ArticlesLinkStyled
            href={'https://www.technika-grzewcza-sklep.pl/blog/skuteczne-ocieplanie-bojlerow.html#/'}
            target="_blank"
          >
            https://www.technika-grzewcza-sklep.pl/blog/skuteczne-ocieplanie-bojlerow.html#/
          </ArticlesLinkStyled> (22.03.2022).
        </BodySmallMediumText>
        <BodySmallMediumText sx={{marginTop: '24px'}} tabIndex={0}>
          [3] Castorama. (2021). Perlator do wody. Jak działa perlator? Pobrane z: 
          <br/>
          <ArticlesLinkStyled
            href={'https://www.castorama.pl/perlator-do-wody-jak-dziala-perlator-ins-66628.html'}
            target="_blank"
          >
            https://www.castorama.pl/perlator-do-wody-jak-dziala-perlator-ins-66628.html
          </ArticlesLinkStyled> (22.03.2022).
        </BodySmallMediumText>
        <BodySmallMediumText sx={{marginTop: '24px'}} tabIndex={0}>
          [4] Zaradnyfinansowo.pl. (2022). Perlatory (aeratory) i słuchawki prysznicowe oszczędzające wodę. Czy warto je stosować? Liczymy oszczędności! Pobrane z: 
          <br/>
          <ArticlesLinkStyled
            href={'https://zaradnyfinansowo.pl/perlatory/'}
            target="_blank"
          >
            https://zaradnyfinansowo.pl/perlatory/
          </ArticlesLinkStyled> (22.03.2022).
        </BodySmallMediumText>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}