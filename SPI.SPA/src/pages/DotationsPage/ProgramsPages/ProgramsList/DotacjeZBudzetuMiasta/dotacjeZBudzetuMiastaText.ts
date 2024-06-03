import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import HandMoneyIcon from '../../../../../public/icons/programsIcons/HandMoneyIcon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const dotacjeZBudzetuMiasta: ProgramEducationI = {
  icon: HandMoneyIcon,
  link: '/dotacjenacieplo/DotacjeZBudzetuMiasta',
  outsideLink: '//www.rybnik.eu/dla-mieszkancow/aktualnosci/aktualnosc/granty-na-wymiane-zrodel-ciepla-edycja-ii',
  title: 'Dotacje z budzetu miasta',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Na dotację z budżetu miasta mogą liczyć właściciele budynków wielorodzinnych lub lokali mieszkalnych. Przyznane środki należy przeznaczyć na wymianę starego źródła ciepła zasilanego paliwem stałym poniżej wymagań klasy 5. na nowsze źródło ogrzewania. Beneficjent może spodziewać się do 50% zwrotu udokumentowanych kosztów kwalifikowanych.',
}