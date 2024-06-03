import { Answer } from "models/step/answer/answer.model";

export function isUlgaTermomodernizacyjnaAnswered(packedAnswerList: Answer[][]) {

  const answer2 = packedAnswerList[2][0].answer;
  const answerPack23 = packedAnswerList[23].map(a => a.answer);
  const answer35 = packedAnswerList[35][0].answer;
  const answerPack38 = packedAnswerList[38].map(a => a.answer);

  const condition_1 = 
    ['Dom wolnostojący (jednorodzinny lub „bliźniak”).', 'Dom w zabudowie szeregowej.'].includes(answer2)

  const condition_2 =
    (answerPack23.some(a=> ['Piec na olej opałowy.', 'Ogrzewanie gazowe.', 'Ogrzewanie elektryczne.', 'Ciepło z sieci miejskiej (z ciepłowni).', 'Pompa ciepła.', 'Energia słoneczna.', 'Inne odnawialne źródło energii.', 'Inne, jakie?', 'Jeszcze nie wiem.'].includes(a)))

  const condition_3 = 
    answer35 === 'Tak.'  

  const condition_4 = 
    !answerPack38.includes('Karta podatkowa.')

  const allConditions = condition_1 && condition_2 && condition_3 && condition_4;
  
  return allConditions;
}