import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_33: StepI = {
  indexOfStep: 33,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Ty lub ktoś z domowników otrzymuje zasiłek rodzinny lub zasiłek pielęgnacyjny?',
  questionTip: 'Pytamy o zasiłek pielęgnacyjny, dodatek mający na celu pokrycie wydatków wynikających z konieczności zapewnienia opieki i pomocy innej osobie w związku z niezdolnością do samodzielnej egzystencji.\n\nNie pomyl zasiłku ze świadczeniem pielęgnacyjnym. Świadczenie pielęgnacyjne przysługuje osobie, która nie podejmuje lub rezygnuje z zatrudnienia lub innej pracy zarobkowej w celu sprawowania opieki nad osobą bliską legitymującą się orzeczeniem o niepełnosprawności.',
  answers: [
    'Tak.',
    {answer: 'Nie.', indexOfStepToGoTo: 35},
    {answer: 'Nie wiem.', indexOfStepToGoTo: 35},
  ],
}