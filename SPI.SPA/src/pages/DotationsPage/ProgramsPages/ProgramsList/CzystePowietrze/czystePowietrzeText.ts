import {ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import HouseSolarPanelIcon from '../../../../../public/icons/programsIcons/HouseSolarPanelIcon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const czystePowietrze: ProgramEducationI = {
  icon: HouseSolarPanelIcon,
  link: '/dotacjenacieplo/CzystePowietrze',
  outsideLink: '//czystepowietrze.gov.pl/czyste-powietrze/',
  title: 'Czyste Powietrze',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Program przeznaczony jest dla właścicieli/współwłaścicieli jednorodzinnych budynków mieszkalnych, a także dla właścicieli/współwłaścicieli wydzielonych lokali mieszkalnych w budynkach jednorodzinnych z wyodrębnioną księgą wieczystą. Przystępując do programu możesz ubiegać się o dotację w wysokości: do 30 000 zł, do 37 000 zł lub do 69 000 zł. W zależności od dochodów Twojego gospodarstwa domowego, zostanie Ci przyznany konkretny poziom dofinansowania. Za otrzymane środki należy wymienić stare źródła ciepła wykorzystujące paliwa stałe na nowoczesne źródła, które spełniają najwyższe normy. Dotacje dotyczą także przeprowadzenia niezbędnych prac termomodernizacyjnych budynku.',
}