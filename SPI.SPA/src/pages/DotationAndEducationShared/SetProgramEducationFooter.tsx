import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";

export const SetProgramEducationFooterProps = (outsideLink: string, pageType: PageEnum) => {
  
  const { setOutsidePageLink, setCurrentPage } = useFooter();
  
  setOutsidePageLink(outsideLink);
  setCurrentPage(pageType);
}