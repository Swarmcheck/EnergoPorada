import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import OszczednosciEnergetyczne from '../../../../../public/pictures/articlesPictures/OszczednosciEnergetyczne.png'
import OszczednosciEnergetyczneIcon from '../../../../../public/pictures/articlesPictures/OszczednosciEnergetyczneIcon.svg'

export const oszczednosciEnergetyczne: ProgramEducationI = {
  icon: OszczednosciEnergetyczne,
  smallerIcon: OszczednosciEnergetyczneIcon,
  link: '/przydatnawiedza/OszczednosciEnergetyczne',
  outsideLink: '//doradztwo-energetyczne.gov.pl/',
  title: 'Oszczędności energetyczne w kuchni i łazience',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Dzięki temu krótkiemu tekstowi dowiesz się więcej o tym, jak oszczędzać energię (i niekiedy wodę) przy wykonywaniu codziennych czynności, takich jak przygotowywanie posiłków czy mycie się. Ponieważ są to tak powszednie czynności, kumulacja oszczędności w skali roku może być niemała!',
}