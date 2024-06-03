import { StepModel } from "models/step/step/step.model";
import React from "react";
import { AnswersBoxStyled } from "../QuestionAndAnswers/Answers.styles";
import { PlusMinus } from "./PlusMinus/PlusMinus";

type GeneratePlusMinusProps = {
  stepModel: StepModel,
  limit?: number,
}

export const GeneratePlusMinus = (props: GeneratePlusMinusProps): JSX.Element => {
  const {
    stepModel,
    limit = 10,
  } = props;

  return (
    <AnswersBoxStyled
      aria-label={'Lista odpowiedzi plus/minus'}
      tabIndex={0}
    >
      {stepModel.answers.map((a, i) => {
        return (
          <PlusMinus
            key={i}
            answer={a}
            limit={limit}
          />
        )
      })}
    </AnswersBoxStyled>
  )
}