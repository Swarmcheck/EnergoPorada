import { Answer, TypeOfStep } from "models/step/answer/answer.model";
import { StepModel } from "models/step/step/step.model";

export interface StepI {
  indexOfStep: number,
  indexOfStepToGoTo?: number,
  typeOfStep: TypeOfStep,
  question: string | JSX.Element,
  belowQuestion?: string,
  questionTip?: string,
  symbolAtEnd?: string,
  answers?: Array<AnswerI | string>,
  specialChars?: boolean,
  isNeccesary?: boolean,
}

export interface AnswerI {
  answer: string,
  answerTip?: string,
  indexOfStepToGoTo?: number,
  deleteOther?: string,
  isCustomInput?: boolean,
}

export function generateStepModel(step:StepI):StepModel {
  const indexOfStepToGo = step.indexOfStepToGoTo ? step.indexOfStepToGoTo : step.indexOfStep + 1;
  const answerArr = step.answers ? step.answers : [''];

  const answers = answerArr.map(a => {
    function returnAnswer() {
      if(typeof(a) === 'string'){
        return a;
      }
      else{
        return a.answer
      }
    }

    function returnIndexOfStepToGoTo() {
      if(typeof(a) === 'string'){
        return indexOfStepToGo;
      }
      else{
        return a.indexOfStepToGoTo ? a.indexOfStepToGoTo : indexOfStepToGo;
      }
    }

    function returnDeleteOthers() {
      if(typeof(a) === 'string'){
        return null;
      }
      else{
        return a.deleteOther !== null ? a.deleteOther : null;
      }
    }

    function returnIsCustomInput() {
      if(typeof(a) === 'string'){
        return false;
      }
      else{
        if(step.typeOfStep === TypeOfStep.CustomInput){
          return true
        }
        else{
          return a.isCustomInput !== null ? a.isCustomInput : false;
        }
      }
    }

    let answer:Answer = {
      indexOfStep: step.indexOfStep,
      typeOfStep: step.typeOfStep,
      answer: returnAnswer(),
      indexOfStepToGoTo: returnIndexOfStepToGoTo(),
      answerTip: (a as AnswerI).answerTip ? (a as AnswerI).answerTip : undefined,
      deleteOther: returnDeleteOthers(),
      isCustomInput: returnIsCustomInput(),
    };

    if(step.typeOfStep === TypeOfStep.PlusMinus){
      answer = {...answer, value: answer.value};
    }
    
    return answer;
  })
  
  const stepModel:StepModel = {
    ...step,
    time: 0,
    answers: answers,
    isNeccesary: step.isNeccesary ? step.isNeccesary : false,
  }

  return stepModel;
}