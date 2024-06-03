import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_5: StepI = {
  isNeccesary: true,
  indexOfStep: 5,
  typeOfStep: TypeOfStep.MultiWithInput,
  specialChars: true,
  question: 'Jaki jest status własności lub wynajmu mieszkania lub domu, w którym mieszkasz?',
  belowQuestion: 'Wybierz wszystkie opcje, które są trafne w przypadku Twojego gospodarstwa domowego.',
  answers: [
    {answer:'Ktoś z domowników (w tym ja sam/sama) jest właścicielem mieszkania/domu.',
      deleteOther:'Członek rodziny, który nie mieszka w tym samym gospodarstwie domowym, jest właścicielem mieszkania/domu.'},
    {answer:'Członek rodziny, który nie mieszka w tym samym gospodarstwie domowym, jest właścicielem mieszkania/domu.',
      deleteOther:'Ktoś z domowników (w tym ja sam/sama) jest właścicielem mieszkania/domu.'},
    'Ktoś z domowników (w tym ja sam/sama) nadal spłaca kredyt na kupno tego mieszkania/domu',
    {answer: 'Mieszkam w mieszkaniu socjalnym.',
      deleteOther: 'Mieszkam w mieszkaniu komunalnym.'},
    {answer: 'Mieszkam w mieszkaniu komunalnym.',
      deleteOther: 'Mieszkam w mieszkaniu socjalnym.'},
    {answer: 'Mieszkam w mieszkaniu, które jest częścią wspólnoty mieszkaniowej.',
      deleteOther: 'Mieszkam w mieszkaniu, które jest w zarządzie spółdzielni mieszkaniowej.'},
    {answer: 'Mieszkam w mieszkaniu, które jest w zarządzie spółdzielni mieszkaniowej.',
      deleteOther: 'Mieszkam w mieszkaniu, które jest częścią wspólnoty mieszkaniowej.'},
    {answer: 'Dom lub mieszkanie, w którym mieszkam, jest wynajmowane od prywatnego właściciela.',
      deleteOther: 'Dom lub mieszkanie, w którym mieszkam, jest przyznane z zakładu pracy.'},
    {answer: 'Dom lub mieszkanie, w którym mieszkam, jest przyznane z zakładu pracy.',
      deleteOther: 'Dom lub mieszkanie, w którym mieszkam, jest wynajmowane od prywatnego właściciela.'},
    {answer: '', isCustomInput: true},
  ],
}