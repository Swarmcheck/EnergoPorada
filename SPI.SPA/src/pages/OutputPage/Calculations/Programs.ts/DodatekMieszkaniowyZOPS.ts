import { Answer } from "models/step/answer/answer.model";

export function isDodatekMieszkaniowyZOPSAnswered(packedAnswerList: Answer[][]) {

  const answer3 = parseInt(packedAnswerList[3][0].answer);
  const answer6 = packedAnswerList[6][0].value || 1;
  let answer7 = 0;
  if (packedAnswerList[7][2]) {
    answer7 = packedAnswerList[7][2].value || 1;
  }
  const answer9 = parseInt(packedAnswerList[9][0].answer);

  let betterAnswer3 = answer3;
  if (answer7 > 0){
    betterAnswer3 -= 15 * answer7;
  }

  const condition_1 = 
    (betterAnswer3 <= (35 * 1.3) && answer6 === 1)
    ||
    (betterAnswer3 <= (40 * 1.3) && answer6 === 2)
    ||
    (betterAnswer3 <= (45 * 1.3) && answer6 === 3)
    ||
    (betterAnswer3 <= (55 * 1.3) && answer6 === 4)
    ||
    (betterAnswer3 <= (65 * 1.3) && answer6 === 5)
    ||
    (betterAnswer3 <= (70 * 1.3) && answer6 === 6)
    ||
    (betterAnswer3 <= ((70 * 1.3) + (5 * (answer6 - 6))) && answer6 > 6)

  const condition_2 =
    (answer6 === 1 && (answer9 <= 2265))
    ||
    (answer6 > 1 && (answer9/answer6 <= 1699))

  const allConditions = condition_1 && condition_2;
  
  return allConditions;
}