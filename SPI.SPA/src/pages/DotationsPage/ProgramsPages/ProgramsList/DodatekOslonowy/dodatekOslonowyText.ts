import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import HouseMoney2Icon from '../../../../../public/icons/programsIcons/HouseMoney2Icon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const dodatekOslonowy: ProgramEducationI = {
  icon: HouseMoney2Icon,
  link: '/dotacjenacieplo/DodatekOslonowy',
  outsideLink: '//www.rybnik.eu/dla-mieszkancow/aktualnosci/aktualnosc/dodatek-oslonowy',
  title: 'Dodatek osłonowy',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Dodatek przysługuje gospodarstwom domowym, których średnie miesięczne wynagrodzenie na osobę wynosi maksymalnie 2100 zł w gospodarstwie jednoosobowym lub 1500 zł w gospodarstwie wieloosobowym. Wysokość dodatku będzie zależała od liczby domowników',
}