import { InputAdornment } from "@mui/material"
import { StepModel } from "models/step/step/step.model"
import React from "react"
import { BodySmallItalicText } from "shared/FontBoxes/FontBoxes.styles"
import { CustomInputTextFieldStyled, InputBox } from "./CustomInput.styles"
import { TypeOfStep } from "models/step/answer/answer.model"
import { SmallerError } from "../Error/SmallerError/SmallerError"

interface CustomInputProps {
  stepModel: StepModel,
  onChangeFunction: (value: string) => void,
  symbolAtEnd: string,
  error: boolean,
  value: string,
}

export const CustomInputTextField = (props:CustomInputProps):JSX.Element => {
  const {
    stepModel,
    onChangeFunction,
    symbolAtEnd,
    error,
    value,
  } = props;

  function returnErrorMessage() {
    return stepModel.specialChars
      ? 'Pole musi zawierać co najmniej jedno słowo. Same spacje (odstępy) niedopuszczalne. Znak "@" niedopuszczalny. Nie wpisuj żadnych danych osobowych (nazwisk, adresów, telefonów).'
      : 'W tym polu możesz wpisać tylko liczby całkowite, tj. bez ułamków i miejsc po przecinku. W razie potrzeby zaokrąglij wpisywaną liczbę. Litery, spacje i znaki specjalne niedopuszczalne.'
  }

  const isCustomInput = [TypeOfStep.MultiWithInput, TypeOfStep.OneWithInput].includes(stepModel.typeOfStep) 

  function returnMaxChar() {
    if(!stepModel.specialChars){
      return 20;
    }
    else{
      return isCustomInput ? 500 : 5000
    }
  }

  const additionalTip = stepModel.specialChars ? '' : 'używając cyfr'
  const additionalSymbol = symbolAtEnd !== '' ? ". Wartość w " + symbolAtEnd : ''

  return (
    <InputBox 
      isCustomInput={isCustomInput}
      tabIndex={0}
      aria-label={"Wpisz własną odpowiedź" + additionalTip + additionalSymbol}
    >
      <CustomInputTextFieldStyled sx={{ width: '100%'}}
        autoFocus={false}
        placeholder={
          isCustomInput
          ? 'Inna odpowiedź. Jaka? (Kliknij, aby wpisać własną odpowiedź.)'
          : "Tu wpisz swoją odpowiedź"}
        value={value}
        multiline
        maxRows={isCustomInput ? 5 : 50}
        error={error}
        onChange={(e) => onChangeFunction(e.target.value)}
        inputProps={{
          inputMode: stepModel.specialChars ? 'text' : 'numeric',
          pattern: stepModel.specialChars ? null : '[0-9]*',
          maxLength: returnMaxChar(),
        }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BodySmallItalicText>
                {symbolAtEnd}
              </BodySmallItalicText>
            </InputAdornment>
          ),
        }}
      />
    {error && <SmallerError errorMessage={returnErrorMessage()}/>}
    </InputBox>
  )
}