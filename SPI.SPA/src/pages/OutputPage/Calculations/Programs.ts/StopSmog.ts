import { Answer } from "models/step/answer/answer.model";

export function isStopSmogAnswered(packedAnswerList: Answer[][]) {

  const answer3 = parseInt(packedAnswerList[3][0].answer);
  const answer6 = packedAnswerList[6][0].value || 1;
  const answer9 = parseInt(packedAnswerList[9][0].answer);
  const answer31 = packedAnswerList[31][0].answer;
  const answer32 = parseInt(packedAnswerList[32][0].answer);
  const answer27 = packedAnswerList[27][0].answer;
  const answer35 = packedAnswerList[35][0].answer;
  const answerPack36 = packedAnswerList[36].map(a => a.answer);
  const answer40 = packedAnswerList[40][0].answer;
  const answer41 = packedAnswerList[41][0].answer;

  const condition_1 = 
    (answer3 <= 110 && answer6 === 1)
    ||
    (answer3 === answer6 * 80 && answer6 > 1)

  const condition_2 =
    (answer6 === 1 && ['Nie.', 'Nie wiem.'].includes(answer31) && answer9 <= 2100)
    ||
    (answer6 > 1 && ['Nie.', 'Nie wiem.'].includes(answer31) && answer9/answer6 <= 1500)
    ||
    (answer6 === 1 && answer31 === 'Tak.' && (answer9 - answer32) <= 1500)
    ||
    (answer6 > 1 && answer31 === 'Tak.' && (answer9/answer6 - answer32) <= 2100)

  const condition_3 = 
    answer27 === 'Nie.'

  const condition_4 = 
    answer35 === 'Tak.'

  const condition_5 =
    (answerPack36.includes('Żadna z tych sytuacji nie dotyczy mnie ani innego współwłaściciela domu/mieszkania.'))

  const condition_6 =
    ['Raczej nie.', 'Nie.'].includes(answer40)

  const condition_7 =
    ['Tak.','Raczej tak.'].includes(answer41)

  const allConditions = condition_1 && condition_2 && condition_3 && condition_4 && condition_5 && condition_6 && condition_7;
  
  return allConditions;
}