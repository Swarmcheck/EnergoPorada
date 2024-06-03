import { Answer } from "models/step/answer/answer.model";

export function isCiepleMieszkanieAnswered(packedAnswerList: Answer[][]) {

  const answer2 = packedAnswerList[2][0].answer;
  const answer35 = packedAnswerList[35][0].answer;
  const answer39 = packedAnswerList[39][0].answer;
  const answer9 = parseInt(packedAnswerList[9][0].answer);
  const answer6 = packedAnswerList[6][0].value || 1;

  const condition_1 = 
    ['Blok mieszkalny.', 'Familiok.', 'Kamienica.', 'Inny, jaki?'].includes(answer2);

  const condition_2 =
    answer35 === 'Tak.'

  const condition_3 = 
    answer39 === 'Nie.'
    ||
    ((Math.round(answer9/answer6) <= 1564
      ||
      (Math.round(answer9/answer6) <= 2189 && answer6 === 1)))
    
  const allConditions = condition_1 && condition_2 && condition_3;
  
  return allConditions;
}