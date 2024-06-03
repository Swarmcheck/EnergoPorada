import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_23: StepI = {
  indexOfStep: 23,
  typeOfStep: TypeOfStep.MultiWithInput,
  specialChars: true,
  question: 'Jeśli rozważasz wymianę źródła ciepła w ciągu kilku najbliższych lat, jakie nowe źródło ciepła bierzesz pod uwagę?',
  belowQuestion: 'Wybierz wszystkie, które realnie bierzesz pod uwagę.',
  answers: [
    'Kocioł węglowy co najmniej piątej klasy, na ekogroszek lub pellet.',
    'Piec na olej opałowy.',
    'Ogrzewanie gazowe.',
    'Ogrzewanie elektryczne.',
    'Ciepło z sieci miejskiej (z ciepłowni).',
    'Pompa ciepła.',
    'Energia słoneczna.',
    'Inne odnawialne źródło energii.',
    {answer: 'Jeszcze nie wiem.', deleteOther: ''},
    {answer: 'Nie planuję wymieniać źródła ciepła na nowe.', deleteOther: ''},
    {answer: '', isCustomInput: true},
  ],
}