import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_7: StepI = {
  isNeccesary: true,
  indexOfStep: 7,
  typeOfStep: TypeOfStep.PlusMinus,
  question: 'Ilu z domowników w Twoim gospodarstwie domowym to:',
  belowQuestion: 'Abyś mógł/mogła przejść dalej, każde pole musi zawierać wartość, nawet jeśli wynosi ona zero. Wpisz liczbę lub użyj przycisków przy każdym polu.',
  answers: [
    'dzieci poniżej 5. roku życia',
    'osoby powyżej 65. roku życia',
    'osoby z orzeczeniem o niepełnosprawności',
    {
      answer: 'osoby mające regularne dochody',
      answerTip: 'Mogą to być dochody z pracy i/lub działalności gospodarczej i/lub działalności rolniczej i/lub nieruchomości czy inwestycji.'
    },
    {
      answer: 'osoby bezrobotne',
      answerTip: 'Osoby bezrobotne to mężczyźni w wieku 18–64 lat lub kobiety w wieku 18–59 lat, którzy zakończyli edukację i pozostają bez pracy przez dłużej niż 2 miesiące.'
    },
  ]
}