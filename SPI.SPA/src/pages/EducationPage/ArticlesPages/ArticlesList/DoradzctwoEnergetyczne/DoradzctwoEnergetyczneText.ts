import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import CallCenter from '../../../../../public/pictures/articlesPictures/CallCenter.png'
import CallCenter2Icon from '../../../../../public/pictures/articlesPictures/CallCenter2Icon.svg'

export const doradzctwoEnergetyczne: ProgramEducationI = {
  icon: CallCenter,
  smallerIcon: CallCenter2Icon,
  link: '/przydatnawiedza/DoradzctwoEnergetyczne',
  outsideLink: '//doradztwo-energetyczne.gov.pl/',
  title: 'Doradztwo energetyczne – coś dla Ciebie?',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Nie jesteś pewny/-a, jakie źródło ciepła sprawdzi się najlepiej w Twoim domu? A może nie wiesz, jak zabrać się za termomodernizację? Skontaktuj się z doradcą energetycznym, który pomoże Ci podjąć właściwe decyzje.',
}