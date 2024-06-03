import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import SolarPanelIcon from '../../../../../public/icons/programsIcons/SolarPanelIcon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const stopSmog: ProgramEducationI = {
  icon: SolarPanelIcon,
  link: '/dotacjenacieplo/StopSmog',
  outsideLink: '//www.rybnik.eu/dla-mieszkancow/program-stop-smog',
  title: 'Stop smog',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Program przeznaczony jest dla właścicieli/współwłaścicieli jednorodzinnych budynków mieszkalnych, a także dla właścicieli/współwłaścicieli wydzielonych lokali mieszkalnych w budynkach jednorodzinnych z wyodrębnioną księgą wieczystą.\n\nDotacje obejmują także termomodernizację budynku lub podłączenie go do sieci gazowej albo ciepłowniczej. Koszt, który musi ponieść wnioskodawca, to 10% ceny realizacji przedsięwzięcia.\n\nJeżeli dom ma więcej niż jednego właściciela, składanie wniosków zależy od ilości udziałów.',
}