import { defaultForm, FormModel } from '../../models/form.model';
import { Answer, TypeOfStep } from '../../models/step/answer/answer.model';
import CurrentStepProvider from '../CurrentStep/currentStep';
import { postFormToDB } from './form.handler';
import React, { createContext, useState, useEffect, useContext } from "react";
import { defaultStep, StepModel } from 'models/step/step/step.model';

interface props {
  children?: React.ReactNode;
}

interface FormContextValue {
  form: FormModel;
  createNewForm: () => void;
  addAnswerToForm: (step: Array<Answer>) => void;
  sendFormToDB: () => void;
  changeAnswerOfCurrentStepInForm: (answer: Answer) => void;
  removeStepFromForm: (index: number) => void;
  changeAnswerOfMultiStepInForm: (del: boolean, answer: Answer) => void;
  isQuestionAnswered: (currentAnswers: Answer[], step: StepModel) => boolean;
  howManyQuestionAnswered: () => number;
}

const FormContext = createContext<FormContextValue>({
  form: defaultForm,
  createNewForm: () => {},
  addAnswerToForm: () => () => {},
  sendFormToDB: () => {},
  changeAnswerOfCurrentStepInForm: () => {},
  removeStepFromForm: () => {},
  changeAnswerOfMultiStepInForm: () => {},
  isQuestionAnswered: () => false,
  howManyQuestionAnswered: () => 0,
});

const FormProvider = ({ children }: props): JSX.Element => {

  const saved = localStorage.getItem("formData");
  const newForm = saved ? JSON.parse(saved) : defaultForm;

  const [form, setForm] = useState<FormModel>(newForm);

  //Add form to db and receive form with unique id from db
  const createNewForm = async() => {
    const addForm = async() => {
      const response = await postFormToDB(defaultForm)
      
      if(response.id){
        setForm({...defaultForm, id: response.id});
      }
      else{
        throw Error('Form didnt return id');
      }
    }
    const results = addForm();
  }

  // useEffect(() => {
  //   console.log(loading)
  // },[loading])

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  },[form])

  // useEffect(() => {
  //   console.log('Form---');
  //   console.log(form)
  // }, [form])

  //Send to DB
  const sendFormToDB = async() => {
    await postFormToDB(form);
  }

  function addAnswerToForm(answers: Array<Answer>) {
    let findCurrentAnswerInForm: boolean = false;
    let arrNew = [...form.answers];

    answers.forEach(answer => {
      if(answer.typeOfStep === TypeOfStep.PlusMinus){
        findCurrentAnswerInForm = form.answers.some(a => 
          a.indexOfStep === answer.indexOfStep
          && a.answer === answer.answer
        );
      }
      else{
        findCurrentAnswerInForm = form.answers.some(a => a.indexOfStep === answer.indexOfStep);
      }
  
      if(!findCurrentAnswerInForm)
      {
        arrNew = [...arrNew, answer];
      }
    })

    setForm({...form, answers: arrNew });
  }

  function changeAnswerOfMultiStepInForm(del: boolean, answer: Answer){
    const isMultiWithInput = answer.typeOfStep === TypeOfStep.MultiWithInput;
    
    let newFormArr = form.answers.filter(a => {
      return a.typeOfStep === TypeOfStep.MultiWithInput
      ? true
      : (!(a.answer === '' && a.typeOfStep === TypeOfStep.CustomInput));
    });
    
    if(del){
      setForm({...form, answers: newFormArr.filter(a => !(a.answer === answer.answer))});
    }
    else{
      if(answer.deleteOther !== undefined ? answer.deleteOther !== null : false){
        if(answer.deleteOther === ''){
          newFormArr = newFormArr.filter(a => 
            a.indexOfStep === answer.indexOfStep
            ? a.answer === answer.answer
            : true
          );
        }
        else{
          newFormArr = newFormArr.filter(a => 
            a.answer !== answer.deleteOther
          );
        }
      }

      const findAnswerToDelete = newFormArr.find(a => a.indexOfStep === answer.indexOfStep && a.deleteOther === '');
      if(findAnswerToDelete){
        newFormArr = newFormArr.filter(a => a.answer !== findAnswerToDelete.answer);
      }

      if(isMultiWithInput && answer.isCustomInput){
        newFormArr = newFormArr.filter(a => !(a.isCustomInput && answer.indexOfStep === a.indexOfStep))
        setForm({...form, answers: [...newFormArr, answer]});
      }
      else{
        setForm({...form, answers: [...newFormArr, answer]});
      }
    }
  }

  function changeAnswerOfCurrentStepInForm(answer: Answer) {
    const newArr = [...form.answers];
    let index = -1;

    if(answer.typeOfStep === TypeOfStep.PlusMinus){
      index = newArr.findIndex(step =>
        step.indexOfStep === answer.indexOfStep
        && step.answer === answer.answer
      );
    }
    else{
      index = newArr.findIndex(step => step.indexOfStep === answer.indexOfStep);
    }    

    if(index !== -1){
      if(answer.answer === '' && answer.answer.length > 1){
        form.answers.splice(index, 1);
        setForm(form);
      }
      else{
        newArr[index] = Object.assign(newArr[index], answer);
        setForm({...form, answers: newArr});
      }
    }
    else{
      throw Error('Answer to change not found');
    }
  }

  function removeStepFromForm(index: number): void {
    setForm({...form, answers: form.answers.filter(a => a.indexOfStep !== index)});
  }

  function isQuestionAnswered(currentAnswers: Answer[], step: StepModel = defaultStep):boolean {
    const currentStepType = currentAnswers[0] ? currentAnswers[0].typeOfStep : step.typeOfStep;
    const currentStepIndex = currentAnswers[0] ? currentAnswers[0].indexOfStep : step.indexOfStep;

    if(!step.isNeccesary){
      return true;
    }
    else if(currentStepType === TypeOfStep.PlusMinus){
      if(currentStepIndex === 6){
        return currentAnswers[0].value? currentAnswers[0].value >= 1 : false;
      }
      return currentAnswers.some(a => {
        return (a.value !== undefined && a.value !== null) ? a.value >= 1 : false;
      });
    }
    else{
      return currentAnswers.some(a => {
        return a.answer !== null && a.answer !== '';
      });
    }
  }

  function howManyQuestionAnswered() {
    interface Counter{
      index: number,
      answers: Answer[]
    }
      
    let questionArray: Counter[] = []

    for(let i=1; i <= 42; i++){
      const newCounter:Counter = {
        index: i,
        answers: [],
      }
      questionArray.push(newCounter)
    }

    form.answers.forEach(a => {
      const find = questionArray.find(x => x.index === a.indexOfStep)
      if(find){
        const indexOfFind = questionArray.indexOf(find)
        const newCounter:Counter = {
          index: find.index,
          answers: [...find.answers, a]
        }
        questionArray[indexOfFind] = newCounter
      }
    })

    let count = 0;

    questionArray.forEach(q => {
      if(isQuestionAnswered(q.answers)){
        count++
      }
    })

    return count;
  }

  return (
    <FormContext.Provider
      value={{
        form,
        createNewForm,
        addAnswerToForm,
        sendFormToDB,
        changeAnswerOfCurrentStepInForm,
        removeStepFromForm,
        changeAnswerOfMultiStepInForm,
        isQuestionAnswered,
        howManyQuestionAnswered,
      }}>
      <CurrentStepProvider>
        {children}
      </CurrentStepProvider>
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useForm = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) throw new Error('Context must be used within <FormProvider/>');
  return context;
};