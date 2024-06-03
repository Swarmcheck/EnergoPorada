export interface FAQI {
  question: string,
  answer: string,
}

export const faqList: Array<FAQI> = [];

const defaultFaq:FAQI = {
  question: 'Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd?',
  answer: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
}

faqList.push(defaultFaq);
faqList.push(defaultFaq);
faqList.push(defaultFaq);
faqList.push(defaultFaq);
faqList.push(defaultFaq);
faqList.push(defaultFaq);