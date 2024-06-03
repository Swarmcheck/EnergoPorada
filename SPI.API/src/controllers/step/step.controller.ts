import { Request, Response } from 'express';
import { stepService } from '../../services/step.service';
import { appendSpreadsheet, ExcelDateEnum } from 'Excel';

class StepControllerFunctions {
  postStep = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const result = await stepService.postStep(data)
    //appendSpreadsheet({data: data, type: ExcelDateEnum.Step});
    res.status(201).json(result)
  }
}

export const stepController = new StepControllerFunctions();