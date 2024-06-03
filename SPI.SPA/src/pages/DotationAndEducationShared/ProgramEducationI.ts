import { PageEnum } from "contexts/Footer/Page.enum";

export interface ProgramEducationI {
  icon: string,
  smallerIcon?: string,
  link: string,
  outsideLink: string,
  title: string,
  miniDescription: string,
  list?: Array<string>,
  pageModel: PageEnum,
}

export const defaultProgram: ProgramEducationI = {
  icon: '',
  link: 'program',
  outsideLink: '/',
  title: 'Program 2',
  pageModel: PageEnum.ProgramPage,
  miniDescription: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
}