import React, { useEffect } from "react"
import { FAQBox } from "./FAQBox/FAQBox"
import { useFooter } from "contexts/Footer/footer"
import { faqList } from "./FAQList"
import { FAQListBoxStyled, FAQPageBoxStyled } from "./FAQPage.styles"
import { H1Text } from "shared/FontBoxes/FontBoxes.styles"
import { PageEnum } from "contexts/Footer/Page.enum"

export const FAQPage = () => {
  const { setCurrentPage } = useFooter();

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EducationPage)
  },[])  

  return (
    <FAQPageBoxStyled>
      <H1Text>
        FAQ czyli najczęściej zadawane pytania
      </H1Text>
      <FAQListBoxStyled>
        {faqList.map(f => <FAQBox faq={f}/>)}
      </FAQListBoxStyled>
    </FAQPageBoxStyled>
  )
}