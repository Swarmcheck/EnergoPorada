import { Request, Response } from 'express';
import { formService } from '../../services/form.service';
import { appendSpreadsheet, ExcelDateEnum } from 'Excel';

class FormControllerFunctions {
  postForm = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const result = await formService.postForm(data)
    //appendSpreadsheet({data: data, type: ExcelDateEnum.Form});
    res.status(201).json(result);
  }
}

export const formController = new FormControllerFunctions();