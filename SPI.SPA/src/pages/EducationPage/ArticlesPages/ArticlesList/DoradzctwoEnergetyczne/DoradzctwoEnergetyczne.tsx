import React, { useEffect, useRef } from "react"
import { BodySmallMediumText, TitleExtraBoldText } from "shared/FontBoxes/FontBoxes.styles"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { SetProgramEducationFooterProps } from "pages/DotationAndEducationShared/SetProgramEducationFooter"
import { ProgramPageBoxStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled, ProgramPageFirstTextStyled, ProgramPageListBoxStyled, ProgramPageLinkStyled } from "pages/DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles"
import { doradzctwoEnergetyczne } from "./DoradzctwoEnergetyczneText"
import { CallCenter } from "pages/DotationAndEducationShared/CallCenter"
import { ArticleCallCenterBoxStyled, ArticleCallCenterTextInlineStyled, ArticleCallCenterTextStyled } from "../../ArticlesComponents/ArticlePage.styles"
import { ArticleImage } from "../../ArticlesComponents/ArticleImage"
import { Box } from "@mui/material"

export const DoradzctwoEnergetyczne = () => {
  const { setCurrentPage } = useFooter();
  const readArticle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
    readArticle.current.focus()
  },[])   
  
  const listOfTexts = [
    (<BodySmallMediumText tabIndex={0}>
      <ProgramPageLinkStyled
        href={'https://doradztwo-energetyczne.gov.pl/wiedza/faq'}
        target="_blank"
        isSmallerLink={true}
        aria-label={'Najczęściej zadawane pytania. Link'}
      >
        Najczęściej zadawane pytania
      </ProgramPageLinkStyled> o doradztwo energetyczne z oficjalnej rządowej strony Projektu Doradztwa Energetycznego. Znajdują się tam jasne odpowiedzi na pytania o to, jaki jest zakres usług, czy trzeba coś za nie zapłacić, czy doradca przyjeżdża na miejsce inwestycji itd.
    </BodySmallMediumText>),
    (<BodySmallMediumText tabIndex={0}>
      <ProgramPageLinkStyled
        href={'https://powietrze.slaskie.pl/content/slaskie-przywracamy-blekit'}
        target="_blank"
        isSmallerLink={true}
        aria-label={'Śląskie. Przywracamy błękit. Link'}
      >
        Śląskie. Przywracamy błękit
      </ProgramPageLinkStyled> – największy w Europie program ochrony powietrza przyznany województwu śląskiemu na lata 2022-2027.
    </BodySmallMediumText>),
  ]

  const callCenterTitle = (
    <ArticleCallCenterBoxStyled>
      <ArticleCallCenterTextStyled tabIndex={0}>
        Szymon Twardoń
      </ArticleCallCenterTextStyled>
      <ArticleCallCenterTextStyled tabIndex={0}>
        tel.<ArticleCallCenterTextInlineStyled> 32 60 32 269,</ArticleCallCenterTextInlineStyled>
      </ArticleCallCenterTextStyled>
      <ArticleCallCenterTextStyled tabIndex={0}>
        tel. kom.<ArticleCallCenterTextInlineStyled> 887 447 773,</ArticleCallCenterTextInlineStyled>
      </ArticleCallCenterTextStyled>
      <ArticleCallCenterTextStyled tabIndex={0}>
        e-mail:<ArticleCallCenterTextInlineStyled> s.twardon@wfosigw.katowice.pl</ArticleCallCenterTextInlineStyled>
      </ArticleCallCenterTextStyled>
    </ArticleCallCenterBoxStyled>
  )

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(doradzctwoEnergetyczne.outsideLink, doradzctwoEnergetyczne.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readArticle} tabIndex={0}>
          {doradzctwoEnergetyczne.title}
        </ProgramPageTitleBoxStyled>
        <ArticleImage image={doradzctwoEnergetyczne.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Nie jesteś pewny/-a, jakie źródło ciepła sprawdzi się najlepiej w Twoim domu? A może nie wiesz, jak zabrać się za termomodernizację? Skontaktuj się z doradcą energetycznym, który pomoże Ci podjąć właściwe decyzje.
        </ProgramPageFirstTextStyled>
        <TitleExtraBoldText sx={{marginTop: '30px', marginBottom: '30px'}} tabIndex={0}>
          Zalety doradztwa energetycznego
        </TitleExtraBoldText>
        <ProgramPageFirstTextStyled tabIndex={0}> 
          Doradca energetyczny udzieli Ci fachowych porad dotyczących efektywności energetycznej, czyli podpowie, jak obniżyć wydatki na ogrzewanie, jednocześnie zachowując ciepło w domu. Wesprze Cię także w wymianie źródeł ciepła, oferując między innymi pomoc w wyborze odpowiedniego nowego źródła.
          <br/>
          Pomoże także stwierdzić, czy spełniasz warunki programów dotacyjnych dotyczących efektywności energetycznej i wymiany źródeł ciepła. Naprowadzi Cię na wybór odpowiedniego programu i pomoże wypełnić wniosek, dzięki czemu będziesz miał(a) pewność, że zrobiłeś/-aś to prawidłowo.
        </ProgramPageFirstTextStyled>
        <TitleExtraBoldText sx={{marginTop: '50px', marginBottom: '30px'}} tabIndex={0}>
          Gdzie mogę znaleźć doradcę?
        </TitleExtraBoldText>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Dzięki funduszom europejskim możesz bezpłatnie skorzystać z doradztwa energetycznego za pośrednictwem rządowej strony internetowej <ProgramPageLinkStyled
              href={'https://doradztwo-energetyczne.gov.pl/'}
              target="_blank"
              isSmallerLink={true}
              aria-label={'https://doradztwo-energetyczne.gov.pl/. Link'}
            >https://doradztwo-energetyczne.gov.pl/</ProgramPageLinkStyled>. Oferta doradców obejmuje m.in. konsultacje indywidualne, weryfikację audytów energetycznych i wsparcie inwestycji.
          </Box>
          <p/>
          <Box tabIndex={0}> 
            Regionowi Południowo-Zachodniemu województwa śląskiego, który obejmuje powiat Rybnik i powiat rybnicki, przypisany jest konkretny doradca, którego dane kontaktowe podajemy poniżej.
          </Box>
        </ProgramPageFirstTextStyled>
        <CallCenter plainText={callCenterTitle}/>
        <TitleExtraBoldText sx={{marginTop: '40px', marginBottom: '30px'}} tabIndex={0}>
          Czy Rybnik ma własnego doradcę energetycznego?
        </TitleExtraBoldText>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Rybnik wkrótce będzie miał swojego ekodoradcę. Jest to funkcja bardzo podobna do funkcji doradcy energetycznego. Ekodoradca (lub ekodoradczyni) zostanie zatrudniony/a w ramach współfinansowanego przez Unię Europejską programu LIFE – Śląskie. Przywracamy błękit. 
          </Box>
          <p/>
          <Box tabIndex={0}>
            Do zadań ekodoradcy, oprócz tego, co już wyżej opisano, będzie należało wsparcie strategiczne gminy w zakresie obniżania emisji zanieczyszczeń i upowszechniania czystszej energii oraz edukowanie mieszkańców w zakresie jakości powietrza. Można więc spodziewać się tematycznych wydarzeń, spotkań z mieszkańcami, zajęć dla dzieci oraz ciekawych publikacji w mediach społecznościowych i na stronach internetowych.
          </Box>
        </ProgramPageFirstTextStyled>
        <ProgramPageFirstTextStyled sx={{marginTop: '60px'}} tabIndex={0}>
          Jeśli chcesz, możesz czytać dalej.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled sx={{marginTop: '30px'}}>
          {listOfTexts.map((l, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}