import { Answer } from "models/step/answer/answer.model";

export function isOgrzejSieZTauronemAnswered(packedAnswerList: Answer[][]) {

  const answer2 = packedAnswerList[2][0].answer;
  const answerPack23 = packedAnswerList[23].map(a => a.answer);
  const answer35 = packedAnswerList[35][0].answer;

  const condition_1 = 
    answer2 === 'Dom wolnostojący (jednorodzinny lub „bliźniak”).'

  const condition_2 =
    answerPack23.some(a=> ['Pompa ciepła.', 'Ogrzewanie gazowe.'].includes(a))

  const condition_3 = 
    answer35 === 'Tak.'

  const allConditions = condition_1 && condition_2 && condition_3;
  
  return allConditions;
}