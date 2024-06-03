import { GoogleSpreadsheet } from "google-spreadsheet";
import path from "path";
import * as dotenv from 'dotenv';
import { StepModel } from "models/step/step.model";
import { IFormAttached } from 'models/form/form.model';

//Excel
const environment = process.env.NODE_ENV;
dotenv.config({ path: path.join(__dirname,'../.env') });
dotenv.config({ path: path.join(__dirname,`${environment === 'development' ? '../.env.prod' : '../.env'}`) });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/gm, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export enum ExcelDateEnum {
  Form = 'Form',
  Step = 'Step'
}

interface spreadSheetProps {
  data: IFormAttached | StepModel,
  type: ExcelDateEnum
}

export const appendSpreadsheet = async (props: spreadSheetProps) => {
  const {
    data,
    type
  } = props

  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    if(type === ExcelDateEnum.Form){
      const sheet = doc.sheetsByTitle['Formularze'];
      //sheet.setHeaderRow(['formId' ,'startTime', 'endTime', 'time']);

      const formData = data as IFormAttached
      const startTime = new Date(formData.startTime)
      const endTime = new Date(formData.endTime)
      const newData = {
        formId: formData.id,
        startTime: startTime.toString(),
        endTime: endTime.toString(),
        time: (endTime.getTime() - startTime.getTime()) / (1000 * 60)
      }

      const rows = await sheet.getRows();
      const findRows = rows.filter(r => (r.formId === newData.formId || r.startTime === newData.startTime))

      //Update form
      if(findRows.length > 0){
        const properRow = findRows.pop();

        rows[properRow.rowIndex-2].formId = newData.formId;
        rows[properRow.rowIndex-2].startTime = newData.startTime;
        rows[properRow.rowIndex-2].endTime = newData.endTime;
        rows[properRow.rowIndex-2].time = newData.time;

        await rows[properRow.rowIndex-2].save();

        if(findRows.length > 0){
          findRows.forEach(async r => {
            await rows[r.rowIndex-2].delete()
          });
        }
      }
      else {
        await sheet.addRow(newData);
      }
    }
    else if(type === ExcelDateEnum.Step){
      const sheet = doc.sheetsByTitle['Odpowiedzi'];
      // sheet.setHeaderRow(['formId', 'indexOfStep', 'answer', 'value', 'time']);

      const stepData = data as StepModel

      const newData = {
        formId: stepData.formId,
        indexOfStep: stepData.indexOfStep,
        time: stepData.time,
      }

      const rows = await sheet.getRows();
      const findRows = rows.filter(r => 
        (r.formId).toString() === (newData.formId).toString()
          && 
        (r.indexOfStep).toString() === (newData.indexOfStep).toString()
      )

      if(findRows.length > 0){
        const properRow = findRows.pop();

        rows[properRow.rowIndex-2].formId = newData.formId;
        rows[properRow.rowIndex-2].indexOfStep = newData.indexOfStep;
        rows[properRow.rowIndex-2].time = newData.time;

        await rows[properRow.rowIndex-2].save();

        if(findRows.length > 0){
          findRows.forEach(async r => await rows[r.rowIndex-2].delete());
        }
        
      }
      else {
        await sheet.addRow(newData);
      }     
    }
  } 
  
  catch (e) {
    console.error('Error: ', e);
  }
};