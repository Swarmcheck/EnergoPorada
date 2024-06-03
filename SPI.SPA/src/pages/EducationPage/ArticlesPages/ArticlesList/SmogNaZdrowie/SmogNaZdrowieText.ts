import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import smogZdrowie from '../../../../../public/pictures/articlesPictures/SmogZdrowie.png'

export const smogNaZdrowie: ProgramEducationI = {
  icon: smogZdrowie,
  link: '/przydatnawiedza/SmogNaZdrowie',
  outsideLink: '//powietrze.malopolska.pl/baza/substancje-z-grupy-dioksyn-zrodla-pochodzenia-i-wplyw-na-zdrowie/',
  title: 'Smog – jak wpływa na nasze zdrowie?',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Choć nie zawsze go widzimy i czujemy w powietrzu, to nie znaczy, że nie istnieje. Smog jest z nami na co dzień i nie pozostaje bez wpływu na nasze zdrowie. Szczególnie groźny jest dla osób w ciąży, seniorów i dzieci, ale mieszkając w Rybniku każdy z nas w sezonie jesienno-zimowym oddycha zanieczyszczonym, trującym powietrzem. Według danych WHO w 2013 roku spośród 50 najbardziej zanieczyszczonych miast Europie 30 znajdowało się w Polsce. Wśród nich znalazł się także Rybnik.',
}