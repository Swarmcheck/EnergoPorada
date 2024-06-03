import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import HouseTemperatureIcon from '../../../../../public/icons/programsIcons/HouseTemperatureIcon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const ciepleMieszkanie: ProgramEducationI = {
  icon: HouseTemperatureIcon,
  link: '/dotacjenacieplo/CiepleMieszkanie',
  outsideLink: '//rybnik.naszemiasto.pl/cieple-mieszkanie-bedzie-nowy-program-doplat-dla-budynkow/ar/c9-8701821',
  title: 'Ciepłe mieszkanie',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Jest to program, który wystartuje w bieżącym roku (2022) jako rozwinięcie programów pilotażowych  przeprowadzonych w województwach śląskim, dolnośląskim i zachodniopomorskim. Jest on skierowany do właścicieli/współwłaścicieli lokali mieszkalnych, a także do wspólnot mieszkaniowych w budynkach liczących od 3 do 20 lokali. Dofinansowanie z programu prawdopodobnie obejmie zwrot od 30% do 60% kosztów kwalifikowanych związanych z:',
}