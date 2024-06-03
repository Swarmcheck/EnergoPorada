import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_12: StepI = {
  isNeccesary: true,
  indexOfStep: 12,
  typeOfStep: TypeOfStep.MultiWithInput,
  specialChars: true,
  question: 'W jaki sposób ogrzewasz dom/mieszkanie? Wybierz każde źródło ogrzewania, którego używasz.',
  belowQuestion: 'Nie wybieraj tego, co służy Ci tylko do ogrzewania wody lub gotowania.',
  answers: [
    'Kocioł co najmniej piątej klasy i zazwyczaj palę w nim ekogroszkiem.',
    'Kocioł co najmniej piątej klasy i zazwyczaj palę w nim pelletem.',
    'Kocioł węglowy poniżej piątej klasy.',
    'Kocioł na węgiel lub pellet - nie wiem, jakiej klasy.',
    'Piec „koza", kominek, lub piec kaflowy (kachlok).',
    'Piec na olej opałowy.',
    'Ogrzewanie gazowe.',
    'Ogrzewanie elektryczne.',
    'Ciepło z sieci miejskiej (z ciepłowni).',
    'Pompa ciepła, energia słoneczna lub inne odnawialne źródło energii.',
    {answer: 'Wcale lub prawie wcale nie ogrzewam domu/mieszkania.', deleteOther: ''},
    {answer: '', isCustomInput: true},
  ],
}