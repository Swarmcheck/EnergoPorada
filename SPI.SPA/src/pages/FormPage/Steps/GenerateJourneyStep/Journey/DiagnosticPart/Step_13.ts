import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_13: StepI = {
  isNeccesary: true,
  indexOfStep: 13,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy w Twoim gospodarstwie domowym występują następujące problemy?',
  belowQuestion: 'Wybierz wszystkie opcje, które są trafne w Twoim przypadku.',
  answers: [
    'Nieszczelne okna.',
    'Nieszczelne drzwi.',
    'Nieszczelny lub uszkodzony dach.',
    'Ściany bez ocieplenia.',
    'Puste, zimne przestrzenie wewnątrz ścian.',
    'Ciągły nieprzyjemny przeciąg.',
    'Lodowato zimna podłoga.',
    {
      answer: 'Zawilgocenie.',
      answerTip: 'Oznakami zawilgocenia mogą być: niemożność wysuszenia prania, nasiąkanie kruchych produktów spożywczych (np. ciastek, paluszków), pleśnienie roślin doniczkowych, zbieranie się wody na szybach czy samoczynne fałdowanie się kartek papieru.'
    },
    'Zacieki na ścianach lub podłodze.',
    'Zagrzybienie lub gnicie.',
    'Nasiąknięte i wypaczone elementy drewniane, np. okiennice, klepki, framugi czy meble.',
    {answer: 'W moim gospodarstwie domowym nie ma tego rodzaju problemów.', deleteOther:'' },
  ],
}