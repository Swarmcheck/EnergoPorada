import React, { useEffect, useRef } from "react"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { CallCenter } from "../../../../DotationAndEducationShared/CallCenter"
import { zasilekCelowyZOPS } from "./zasilekCelowyZOPSText"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { Box } from "@mui/material"

export const ZasilekCelowyZOPS = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(zasilekCelowyZOPS.outsideLink, zasilekCelowyZOPS.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {zasilekCelowyZOPS.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={zasilekCelowyZOPS.icon}/>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Zasiłek przysługuje osobom, których dochód miesięczny nie przekracza 776 zł w gospodarstwie jednoosobowym. Mogą go uzyskać też rodziny, których dochód miesięczny nie przekracza 600 zł na członka rodziny w gospodarstwie wieloosobowym. Przeznaczone środki w wysokości 719 zł można wydać na zaspokojenie niezbędnych potrzeb życiowych, takich jak zakup żywności, leków czy opału. By otrzymać taki zasiłek, trzeba wypełnić wniosek udostępniony przez Ośrodek Pomocy Społecznej. Następnie w OPS należy złożyć wydrukowaną wersję wniosku.
          </Box> 
          <p/>
          <Box tabIndex={0}>
            Jeżeli znalazłaś/eś zasiłek celowy w rekomendacjach po przejściu ankiety w ramach EnergoPorady, kwalifikujesz się do jego otrzymania z dużym prawdopodobieństwem, ale nie stuprocentową pewnością. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania zasiłku. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania zasiłku. Nieudzielenie odpowiedzi lub zaznaczenie odpowiedzi „Nie wiem” na któreś z pytań z ankiety również może spowodować niższą trafność proponowanych programów wsparcia. Choć sytuacja ta nie musi dotyczyć Twojego przypadku, ubiegając się dofinansowanie pamiętaj, aby upewnić się co do szczegółów w Ośrodku Pomocy Społecznej w Rybniku.
          </Box>  
        </ProgramPageFirstTextStyled>
        <CallCenter
          title={'Kontakt telefoniczny do Ośrodka Pomocy Społecznej w Rybniku:'}
          number={'32 422 11 11'}
          moreInfo={'Szczegółowo opisane warunki uzyskania zasiłku znajdziesz '}
          link={'//www.infor.pl/prawo/pomoc-spoleczna/zasilki/5381743,Zasilek-celowy-w-2022-r.html'}
        />
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}