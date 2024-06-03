import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import SkadSmog from '../../../../../public/pictures/articlesPictures/SkadSmog.png'

export const skadSmog: ProgramEducationI = {
  icon: SkadSmog,
  link: '/przydatnawiedza/SkadSmog',
  outsideLink: '//www.uwm.edu.pl/egazeta/smog-zimowy-towarzysz-mrozu',
  title: 'Skąd się bierze smog na Śląsku?',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Polska jest niechlubnym liderem emisji smogu w Unii Europejskiej. Najgorsza sytuacja jest w województwie śląskim, które emituje 1/5 zanieczyszczeń pyłowych i 50% zanieczyszczeń gazowych w naszym kraju. Odpowiedzialna za te skażenia powietrza jest głównie tzw. niska emisja pochodząca przede wszystkim z gospodarstw domowych.',
}