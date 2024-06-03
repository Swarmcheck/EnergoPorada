import { PageEnum } from "contexts/Footer/Page.enum";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import ProsteSposoby from '../../../../../public/pictures/articlesPictures/ProsteSposoby.png'
import ProsteSposobyIcon from '../../../../../public/pictures/articlesPictures/ProsteSposobyIcon.svg'

export const prosteSposoby: ProgramEducationI = {
  icon: ProsteSposoby,
  smallerIcon: ProsteSposobyIcon,
  link: '/przydatnawiedza/ProsteSposoby',
  outsideLink: '//www.castorama.pl/jak-zaizolowac-rury-centralnego-ogrzewania-ins-1044812.html#:~:text=Aby%20na%C5%82o%C5%BCy%C4%87%20izolacj%C4%99%20na%20rur%C4%99%2C%20rozchylamy%20j%C4%85%20wzd%C5%82u%C5%BC%2C,wyci%C4%99cie%20w%20kszta%C5%82cie%20klina%20pod%20k%C4%85tem%2090%20stopni',
  title: 'Proste sposoby na cieplejsze mieszkanie',
  pageModel: PageEnum.EducationPage,
  miniDescription: 'Oszczędzanie energii nie musi być trudne ani kosztowne. Aby poczynić drobne regularne oszczędności, które docenisz w skali roku czy dwóch, wystarczy kilka pomysłowych zmian. Niezależnie od tego, czy Twój budynek jest ocieplony, czy nie, poniższe wskazówki pozwolą Ci na skuteczniejsze zatrzymanie ciepła w domu i paru złotych w portfelu.',
}