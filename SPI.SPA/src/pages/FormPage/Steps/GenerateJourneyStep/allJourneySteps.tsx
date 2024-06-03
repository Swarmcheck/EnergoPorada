import { StepModel } from "models/step/step/step.model";
import { StepI, generateStepModel } from "./generateStepModel";
import { step_1 } from "./Journey/DiagnosticPart/Step_1";
import { step_10 } from "./Journey/DiagnosticPart/Step_10";
import { step_11 } from "./Journey/DiagnosticPart/Step_11";
import { step_12 } from "./Journey/DiagnosticPart/Step_12";
import { step_13 } from "./Journey/DiagnosticPart/Step_13";
import { step_14 } from "./Journey/DiagnosticPart/Step_14";
import { step_15 } from "./Journey/DiagnosticPart/Step_15";
import { step_16 } from "./Journey/DiagnosticPart/Step_16";
import { step_17 } from "./Journey/DiagnosticPart/Step_17";
import { step_2 } from "./Journey/DiagnosticPart/Step_2";
import { step_21 } from "./Journey/DiagnosticPart/Step_21";
import { step_22 } from "./Journey/DiagnosticPart/Step_22";
import { step_3 } from "./Journey/DiagnosticPart/Step_3";
import { step_4 } from "./Journey/DiagnosticPart/Step_4";
import {step_42} from './Journey/DiagnosticPart/Step_42';
import { step_5 } from "./Journey/DiagnosticPart/Step_5";
import { step_6 } from "./Journey/DiagnosticPart/Step_6";
import { step_7 } from "./Journey/DiagnosticPart/Step_7";
import { step_8 } from "./Journey/DiagnosticPart/Step_8";
import { step_9 } from "./Journey/DiagnosticPart/Step_9";
import { step_23 } from "./Journey/DotationPart/Step_23";
import { step_24 } from "./Journey/DotationPart/Step_24";
import { step_25 } from "./Journey/DotationPart/Step_25";
import { step_26 } from "./Journey/DotationPart/Step_26";
import { step_27 } from "./Journey/DotationPart/Step_27";
import { step_28 } from "./Journey/DotationPart/Step_28";
import { step_29 } from "./Journey/DotationPart/Step_29";
import { step_30 } from "./Journey/DotationPart/Step_30";
import { step_31 } from "./Journey/DotationPart/Step_31";
import { step_32 } from "./Journey/DotationPart/Step_32";
import { step_33 } from "./Journey/DotationPart/Step_33";
import { step_34 } from "./Journey/DotationPart/Step_34";
import { step_35 } from "./Journey/DotationPart/Step_35";
import { step_36 } from "./Journey/DotationPart/Step_36";
import { step_37 } from "./Journey/DotationPart/Step_37";
import { step_38 } from "./Journey/DotationPart/Step_38";
import { step_39 } from "./Journey/DotationPart/Step_39";
import { step_40 } from "./Journey/DotationPart/Step_40";
import { step_41 } from "./Journey/DotationPart/Step_41";

function packAllJourneySteps():Array<StepModel> {
  const allSteps: Array<StepModel> = [];

  function pushStep(step: StepI) {
    allSteps.push(generateStepModel(step));
  }

  pushStep(step_1);
  pushStep(step_2);
  pushStep(step_3);
  pushStep(step_4);
  pushStep(step_5);
  pushStep(step_6);
  pushStep(step_7);
  pushStep(step_8);
  pushStep(step_9);
  pushStep(step_10);
  pushStep(step_11);
  pushStep(step_12);
  pushStep(step_13);
  pushStep(step_14);
  pushStep(step_15);
  pushStep(step_16);
  pushStep(step_17);
  // pushStep(step_18);
  // pushStep(step_19);
  // pushStep(step_20);
  pushStep(step_21);
  pushStep(step_22);
  pushStep(step_23);
  pushStep(step_24);
  pushStep(step_25);
  pushStep(step_26);
  pushStep(step_27);
  pushStep(step_28);
  pushStep(step_29);
  pushStep(step_30);
  pushStep(step_31);
  pushStep(step_32);
  pushStep(step_33);
  pushStep(step_34);
  pushStep(step_35);
  pushStep(step_36);
  pushStep(step_37);
  pushStep(step_38);
  pushStep(step_39);
  pushStep(step_40);
  pushStep(step_41);
  pushStep(step_42);

  return allSteps;
}

export const allJourneySteps = packAllJourneySteps();