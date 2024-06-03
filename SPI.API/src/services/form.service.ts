import { IForm, IFormAttached } from "../models/form/form.model";
import { FormCollection, IFormDocument, mapFormToAttachedForm } from "../models/form/form.schema";

class FormService {
  postForm = async (form: IFormDocument): Promise<IFormAttached> => {
    const answer = form.id
    ? await FormCollection.findByIdAndUpdate(form.id, form, {upsert : true})
    : await FormCollection.create(form);

    if(answer !== null){
      return mapFormToAttachedForm(answer);
    }
    else{
      throw Error('Form is invalid');
    }  
  };
}

export const formService = new FormService();