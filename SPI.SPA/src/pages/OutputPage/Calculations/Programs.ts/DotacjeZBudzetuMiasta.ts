import { Answer } from "models/step/answer/answer.model";

export function isDotacjeZBudzetuMiastaAnswered(packedAnswerList: Answer[][]) {

  const answer2 = packedAnswerList[2][0].answer;
  const answerPack12 = packedAnswerList[12].map(a => a.answer);
  const answerPack23 = packedAnswerList[23].map(a => a.answer);
  const answer27 = packedAnswerList[27][0].answer;
  const answer28 = packedAnswerList[28][0].answer;

  const condition_1 = 
    ['Blok mieszkalny.', 'Familiok.', 'Kamienica.', 'Inny, jaki? '].includes(answer2)

  const condition_2 =
    answerPack12.some(a=> ['Kocioł węglowy poniżej piątej klasy.'].includes(a))

  const condition_3 = 
  (answerPack23.some(a=> ['Piec na olej opałowy.', 'Ogrzewanie gazowe.', 'Ogrzewanie elektryczne.', 'Ciepło z sieci miejskiej (z ciepłowni).', 'Pompa ciepła.', 'Energia słoneczna.', 'Inne odnawialne źródło energii.', 'Inne, jakie?', 'Jeszcze nie wiem.'].includes(a)))

  const condition_4 = 
    (answer27 === 'Tak.'
      &&
      ['Nie.', 'Nie wiem.'].includes(answer28))
    ||
    ['Nie.', 'Nie wiem.'].includes(answer27)

  const allConditions = condition_1 && condition_2 && condition_3 && condition_4;
  
  return allConditions;
}