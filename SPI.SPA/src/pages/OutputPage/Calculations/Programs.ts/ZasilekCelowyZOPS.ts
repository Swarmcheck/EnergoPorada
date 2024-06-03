import { Answer } from "models/step/answer/answer.model";

export function isZasilekCelowyZOPSAnswered(packedAnswerList: Answer[][]) {

  const answer30 = parseInt(packedAnswerList[30][0].answer);
  const answer29 = packedAnswerList[29][0].answer;
  const answer9 = parseInt(packedAnswerList[9][0].answer);
  const answer6 = packedAnswerList[6][0].value || 1;

  const condition_1 =
    (answer6 === 1 && ['Nie.', 'Nie wiem.'].includes(answer29) && (answer9 <= 776))
      ||
      ((answer6 > 1 && ['Nie.', 'Nie wiem.'].includes(answer29)) && ((answer9/answer6) <= 600))

  const condition_2 =
    ((answer6 === 1)
      && (answer29 === 'Tak.')
      && ((answer9 - answer30) <= 776)
      || (answer6 > 1 && answer29 === 'Tak.')
      && ((answer9/answer6 - answer30) <= 600))

  const allConditions = condition_1 || condition_2;
  
  return allConditions;
}