import React, { useEffect } from 'react';
import { useCurrentStep } from '../../contexts/CurrentStep/currentStep';
import { FormPageBoxStyled } from './FormPage.styles';
import { ProgressBar } from './Steps/sharedComponents/ProgressBar/ProgressBar';
import { GenerateJourneyStep } from './Steps/GenerateJourneyStep/GenerateJourneyStep';
import { allJourneySteps } from './Steps/GenerateJourneyStep/allJourneySteps';
import { defaultStep } from 'models/step/step/step.model';
import { CheerPage } from 'pages/CheerPage/CheerPage';
import { OutputPage } from 'pages/OutputPage/OutputPage';
import { BiggerError } from './Steps/sharedComponents/Error/BiggerError/BiggerError';
import { useFooter } from 'contexts/Footer/footer';
import { useForm } from 'contexts/Form/form';
import { EGOPage } from 'pages/EGOPage/EgoPage';
 
export const FormPage = ():JSX.Element => {
  const { currentStep, isCurrentQuestionAnswered } = useCurrentStep();
  const { displayError,setDisplayError } = useFooter();
  const { form, sendFormToDB } = useForm();

  const journeyStep = allJourneySteps.find(s => s.indexOfStep === currentStep.indexOfStep);
  const journeyStepModel = journeyStep? journeyStep : defaultStep;

  window.addEventListener("beforeunload", function(e){
    if(currentStep !== defaultStep){
      sendFormToDB();
      delete e['returnValue'];
    }
  }, false);

  useEffect(() => {
    if(isCurrentQuestionAnswered()){
      setDisplayError(false);
    }
  },[form.answers])

  function generateStep() {
    switch(currentStep.indexOfStep){
      case(50):
        return <EGOPage/>
      case(100):
        return <CheerPage/>
      case(200):
        return <OutputPage/>
      default:
        return (
          <FormPageBoxStyled>
            { displayError ? <BiggerError/> : <ProgressBar/>}
            <GenerateJourneyStep key={journeyStepModel.indexOfStep} stepModel={journeyStepModel}/>
          </FormPageBoxStyled>
        )
    }
  }

  return (
    generateStep()
  )
}
