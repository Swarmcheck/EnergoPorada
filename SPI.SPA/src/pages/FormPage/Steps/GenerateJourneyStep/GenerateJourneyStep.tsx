import { TypeOfStep } from "models/step/answer/answer.model";
import { StepModel } from "models/step/step/step.model";
import React, { useEffect, useRef } from "react"
import { CustomImput } from "../sharedComponents/CustomInput/CustomInput";
import { GeneratePlusMinus } from "../sharedComponents/PlusMinus/GeneratePlusMinus";
import { QuestionBoxStyled } from "../sharedComponents/QuestionAndAnswers/Question.styles";
import { StepBelowQuestionBoxStyled, StepQuestionAndAnwersBoxStyled, StepQuestionBoxStyled } from "../sharedComponents/QuestionAndAnswers/StepQuestionAnswers.styles";
import { SelectMultiButtons } from "../sharedComponents/SelectButton/SelectMultiButtons";
import { SelectOneButtons } from "../sharedComponents/SelectButton/SelectOneButtons";
import { TipBoxIcon } from "../sharedComponents/TipBox/TipBoxIcon";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useForm } from "contexts/Form/form";
import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import { SelectList } from "../sharedComponents/SelectList/SelectList";
import { Box } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

interface GenerateJourneyStep {
  stepModel: StepModel,
}

export const GenerateJourneyStep = (props: GenerateJourneyStep) => {
  const {
    stepModel,
  } = props;

  const { addCurrentStep } = useCurrentStep();
  const { form } = useForm();
  const { setCurrentPage } = useFooter();

  useEffect(() => {
    window.scrollTo(0, 0)
    addCurrentStep(stepModel);
    setCurrentPage(PageEnum.Form);
  },[])

  useEffect(() => {
    addCurrentStep(stepModel);
  }, [form.answers])

  function returnButtonsStyle():JSX.Element {
    const stepType = stepModel.typeOfStep;

    switch(stepType){
      case(TypeOfStep.SelectOne):
        return <SelectOneButtons stepModel={stepModel}/>
      case(TypeOfStep.OneWithInput):
        return <SelectOneButtons stepModel={stepModel}/>
      case(TypeOfStep.SelectMulti):
        return <SelectMultiButtons stepModel={stepModel}/>
      case(TypeOfStep.MultiWithInput):
        return <SelectMultiButtons stepModel={stepModel}/>
      case(TypeOfStep.CustomInput):
        return <CustomImput stepModel={stepModel}/>
      case(TypeOfStep.PlusMinus):
        return <GeneratePlusMinus stepModel={stepModel}/>
      case(TypeOfStep.SelectList):
        return <SelectList stepModel={stepModel}/>
      case(TypeOfStep.YesNo):
        return <SelectOneButtons stepModel={stepModel} isShorter={true}/>
      default:
        return<></>
    }
  }

  return (
    <StepQuestionAndAnwersBoxStyled>
      <QuestionBoxStyled tabIndex={0}>
        <Box sx={visuallyHidden}>Pytanie</Box>
        <StepQuestionBoxStyled>
          {stepModel.question}
          {stepModel.questionTip &&
            <TipBoxIcon
              text={stepModel.questionTip}
              toRightSide={false}
            />}
        </StepQuestionBoxStyled>
        <StepBelowQuestionBoxStyled>
          {stepModel.belowQuestion && stepModel.belowQuestion}
        </StepBelowQuestionBoxStyled>
      </QuestionBoxStyled>
      {returnButtonsStyle()}
    </StepQuestionAndAnwersBoxStyled>
  )
}