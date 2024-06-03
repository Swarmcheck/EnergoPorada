import { Answer } from "models/step/answer/answer.model";

export function isDodatekOslonowyAnswered(packedAnswerList: Answer[][]) {

  const answer6 = packedAnswerList[6][0].value || 1;
  const answer33 = packedAnswerList[33][0].answer;
  const answer9 = parseInt(packedAnswerList[9][0].answer);
  const answer34 = parseInt(packedAnswerList[34][0].answer);

  const condition_1 = 
    (answer6 === 1 && ['Nie.', 'Nie wiem.'].includes(answer33) && (answer9 <= 2100))

  const condition_2 = 
    (answer6 > 1 && ['Nie.', 'Nie wiem.'].includes(answer33) && (answer9/answer6 <= 1500))

  const condition_3 = 
    (answer6 === 1 && answer33 === 'Tak.' && (answer9 <= 2100))

  const condition_4 = 
    (answer6 > 1 && answer33 === 'Tak.' && ((answer9/answer6) - answer34 <= 1500))

  const allConditions = condition_1 || condition_2 || condition_3 || condition_4;
  
  return allConditions;
}