import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_17: StepI = {
  isNeccesary: true,
  indexOfStep: 17,
  indexOfStepToGoTo: 21,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Zaznacz wszystkie zdania, które dotyczą Ciebie i Twojego gospodarstwa domowego.',
  answers: [
    'Niekiedy muszę wybierać pomiędzy ogrzewaniem a żywnością lub lekarstwami – nie stać mnie na wszystkie te rzeczy naraz.',
    'Z powodu wysokich rachunków za ciepło coraz częściej rezygnuję (lub moje dzieci nie mogą korzystać) ze sportu, kina czy innej rozrywki lub sztuki.',
    'Chłód w mieszkaniu to jedno z moich głównych zmartwień.',
    'Po wymianie pieca przestałem/przestałam radzić sobie z wydatkami.',
    'Nie zdołałbym/zdołałabym nastarczyć pieniędzy na ogrzewanie gazowe.',
    'Podejrzewam, że moje gospodarstwo domowe należy do tzw. ubogich energetycznie.',
    'Albo mam ciepło zimą, albo wakacyjny wyjazd latem - obie rzeczy razem są za drogie.',
    'Chciał(a)bym docieplić dom/mieszkanie, ale nie mam na to pieniędzy.',
    {answer: 'Żadne z powyższych.', deleteOther: ''},
  ],
}