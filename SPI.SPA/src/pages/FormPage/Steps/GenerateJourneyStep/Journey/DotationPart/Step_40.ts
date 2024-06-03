import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_40: StepI = {
  indexOfStep: 40,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Twoje zasoby majątkowe lub zasoby majątkowe innego współwłaściciela domu/mieszkania przekraczają kwotę 424 000 zł?',
  belowQuestion: 'Weź pod uwagę wartość posiadanych nieruchomości i ruchomości oraz posiadane środki pieniężne.',
  questionTip: 'Ruchomość to praktycznie każda rzecz, która nie jest nieruchomością. Przykłady wartościowych ruchomości, które możesz wziąć pod uwagę, odpowiadając na pytanie: pojazdy, antyki, urządzenia elektryczne i elektroniczne, biżuteria, księgozbiór, instrumenty muzyczne, sprzęt specjalistyczny/hobbystyczny.',
  answers: [
    'Tak.',
    'Raczej tak.',
    'Raczej nie.',
    'Nie.',
  ],
}