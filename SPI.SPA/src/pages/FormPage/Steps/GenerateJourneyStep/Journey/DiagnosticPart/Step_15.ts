import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_15: StepI = {
  isNeccesary: true,
  indexOfStep: 15,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'W jaki sposób dostosowujesz - Ty sam/sama lub ewentualnie Twoi domownicy - swoje zachowanie w domu/mieszkaniu do warunków w sezonie jesienno-zimowym?',
  belowQuestion: 'Zaznacz wszystkie opcje, które są trafne dla Ciebie/Was przynajmniej przez część okresu jesienno-zimowego. Nie zaznaczaj opcji, która przytrafiła się tylko dwa czy trzy razy.',
  answers: [
    'Zakładam/zakładamy długie spodnie i bluzy lub swetry.',
    'Zakładam/zakładamy kurtki/płaszcze i/lub rękawiczki i czapki.',
    'Śpię/śpimy pod kilkoma kołdrami/kocami naraz.',
    'Wyłączam(y) ogrzewanie w kuchni i/lub łazience.',
    'Ogrzewam(y) tylko jeden pokój dzienny.',
    'Nakrywam(y) się kołdrą lub kocem również w dzień.',
    'Uszczelniam(y) szpary (taśmą, folią, kawałkami materiału itp.).',
    {answer: 'Żadna z powyższych odpowiedzi nie dotyczy mojego gospodarstwa domowego.', deleteOther: ''},
  ],
}