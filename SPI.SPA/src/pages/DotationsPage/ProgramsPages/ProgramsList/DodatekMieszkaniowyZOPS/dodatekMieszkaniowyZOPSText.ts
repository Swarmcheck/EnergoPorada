import { ProgramEducationI } from "../../../../DotationAndEducationShared/ProgramEducationI";
import FamilyProtectionIcon from '../../../../../public/icons/programsIcons/FamilyProtectionIcon.svg'
import { PageEnum } from "contexts/Footer/Page.enum";

export const dodatekMieszkaniowyZOPS: ProgramEducationI = {
  icon: FamilyProtectionIcon,
  link: '/dotacjenacieplo/DodatekMieszkaniowyzOPS',
  outsideLink: '//www.opsrybnik.pl/formy-pomocy/dodatki-mieszkaniowe',
  title: 'Dodatek mieszkaniowy z OPS',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Dodatek przysługuje osobom, których średni miesięczny dochód w okresie 3 miesięcy poprzedzających złożenie wniosku nie przekroczył:\n\ndla jednej osoby – 45,5m2,\n\ndla dwóch osób – 52m2,\n\ndla trzech osób – 58,5m2,\n\ndla czterech osób – 71,5m2,\n\ndla pięciu osób – 84,5m2,\n\ndla sześciu osób – 91m2.',
}