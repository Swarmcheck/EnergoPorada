import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import chronicSmog from '../../../../../public/pictures/articlesPictures/ChronicSmog.png'

export const chronicPrzedSmogiem: ProgramEducationI = {
  icon: chronicSmog,
  link: '/przydatnawiedza/ChronicPrzedSmogiem',
  outsideLink: '//powietrze.slaskie.pl/content/aplikacje',
  title: 'Jak się chronić przed smogiem?',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Smog negatywnie wpływa na nasze zdrowie, to nie ulega wątpliwości. Dlatego tak ważne jest, by wiedzieć, jak się przed nim chronić, jak ograniczać jego negatywne skutki na nasze organizmy. W niniejszym artykule przedstawiamy listę sposobów ochrony przed smogiem oraz informacje o miejscach, gdzie można sprawdzić stan powietrza.',
}