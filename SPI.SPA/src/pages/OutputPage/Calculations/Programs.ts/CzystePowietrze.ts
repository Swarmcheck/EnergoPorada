import { Answer } from "models/step/answer/answer.model";

export function isCzystePowietrzeAnswered(packedAnswerList: Answer[][]) {

  const answer2 = packedAnswerList[2][0].answer;
  const answer26 = packedAnswerList[26][0].answer;
  const answerPack24 = packedAnswerList[24].map(a => a.answer);
  const answer25 = packedAnswerList[25][0].answer;
  const answerPack23 = packedAnswerList[23].map(a => a.answer);
  const answer35 = packedAnswerList[35][0].answer;
  const answer27 = packedAnswerList[27][0].answer;
  const answer28 = packedAnswerList[28][0].answer;
  const answer39 = packedAnswerList[39][0].answer;
  const answer9 = parseInt(packedAnswerList[9][0].answer);
  const answer6 = packedAnswerList[6][0].value || 1;

  const condition_1 = 
    ['Dom wolnostojący (jednorodzinny lub „bliźniak”).', 'Dom w zabudowie szeregowej.'].includes(answer2)
    ||
    (['Blok mieszkalny.', 'Familok.', 'Kamienica.', 'Inny, jaki?'].includes(answer2)
      && 
      ['Tak.', 'Nie wiem.'].includes(answer26))

  const condition_2 =
    (answerPack24.includes('Tak, do sieci gazowej.') || answer25 === 'Tak, do sieci gazowej.')
      &&
      (answerPack23.some(a=> ['Ogrzewanie gazowe.', 'Ogrzewanie elektryczne.', 'Ciepło z sieci miejskiej (z ciepłowni).', 'Pompa ciepła.', 'Energia słoneczna.', 'Inne odnawialne źródło energii.', 'Inne, jakie?', 'Jeszcze nie wiem.'].includes(a)))
    ||
      (answerPack24.some(a=> ['Tak, do sieci ciepłowniczej.', 'Nie.'].includes(a)))
      ||
      ['Tak, do sieci ciepłowniczej.', 'Nie.', 'Nie wiem.'].includes(answer25)

  const condition_3 = 
    ['Tak.', 'Nie wiem.'].includes(answer26)

  const condition_4 = 
    (answer27 === 'Tak.' && ['Nie.', 'Nie wiem.'].includes(answer28))
    ||
    ['Nie.', 'Nie wiem.'].includes(answer27)

  const condition_5 =
    answer35 === 'Tak.'

  const condition_6 =
    (answer39 === 'Nie.')
    ||
    (Math.round(answer9/answer6) <= 1564)
      ||
      ((Math.round(answer9/answer6) <= 2189) && answer6 === 1)

  const allConditions = condition_1 && condition_2 && condition_3 && condition_4 && condition_5 && condition_6;
  
  return allConditions;
}