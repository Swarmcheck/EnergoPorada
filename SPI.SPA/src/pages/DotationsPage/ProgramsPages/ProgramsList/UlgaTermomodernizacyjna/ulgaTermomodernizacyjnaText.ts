import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import HouseTemperature2Icon from '../../../../../public/icons/programsIcons/HouseTemperature2Icon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const ulgaTermomodernizacyjna: ProgramEducationI = {
  icon: HouseTemperature2Icon,
  link: '/dotacjenacieplo/UlgaTermomodernizacyjna',
  outsideLink: '//www.podatki.gov.pl/pit/ulgi-odliczenia-i-zwolnienia/ulga-termomodernizacyjna/',
  title: 'Ulga termomodernizacyjna',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Ulga przysługuje właścicielom/współwłaścicielom domów jednorodzinnych, w tym szeregowców i bliźniaków. Możesz ją odliczyć w zeznaniu podatkowym, jeśli poniesiesz wydatki na termomodernizację domu. Kwota odliczenia będzie różna w zależności od poniesionych kosztów, jednak nie może przekroczyć 53 000 zł.',
}