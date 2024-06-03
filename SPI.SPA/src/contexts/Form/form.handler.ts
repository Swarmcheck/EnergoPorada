import { adalApiDelete, adalApiGet, adalApiPost, adalApiPut } from '../../framework/helpers/axios.methods';
import { FormModel } from '../../models/form.model';

import { URL_FORM } from '../../shared/navigation/baseUrlHelper';

interface FormToDB{
  id: string,
  startTime: Date,
  endTime?: Date,
  answers: Array<AnswerToDB>,
}

interface AnswerToDB{
  indexOfStep: number,
  answer: string,
  value: number,
}

export const postFormToDB = async (form: FormModel): Promise<FormToDB> => {
  const newAnswerArr = form.answers.map(a => {
    const answer:AnswerToDB= {
      indexOfStep: a.indexOfStep,
      answer: a.answer,
      value: a.value ? a.value : 0,
    }
    return answer
  })

  const formToDB:FormToDB = {
    id: form.id,
    startTime: form.startTime,
    endTime: new Date(),
    answers: newAnswerArr,
  }
  return await adalApiPost<FormToDB, FormToDB>(URL_FORM, formToDB)
    .then(response => response.data);
};