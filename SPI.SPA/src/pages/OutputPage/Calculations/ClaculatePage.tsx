import { Box } from "@mui/material";
import { useFooter } from "contexts/Footer/footer";
import { useForm } from "contexts/Form/form";
import { Answer, defaultAnswer } from "models/step/answer/answer.model";
import React, { useEffect } from "react";
import { isCiepleMieszkanieAnswered } from "./Programs.ts/CiepleMieszkanie";
import { isCzystePowietrzeAnswered } from "./Programs.ts/CzystePowietrze";
import { isDodatekOslonowyAnswered } from "./Programs.ts/DodatekOslonowy";
import { isDotacjeZBudzetuMiastaAnswered } from "./Programs.ts/DotacjeZBudzetuMiasta";

import { isStopSmogAnswered } from "./Programs.ts/StopSmog";
import { isUlgaTermomodernizacyjnaAnswered } from "./Programs.ts/UlgaTermomodernizacyjna";
import { isDodatekMieszkaniowyZOPSAnswered } from "./Programs.ts/DodatekMieszkaniowyZOPS";
import { isZasilekCelowyZOPSAnswered } from "./Programs.ts/ZasilekCelowyZOPS";
import { isOgrzejSieZTauronemAnswered } from "./Programs.ts/OgrzejSieTauronem";

export const CalculatePage = () => {
  const { setOutputPrograms } = useFooter();
  const { form } = useForm();

  function listOfOutputPrograms(answersList: Answer[][]):Array<string> {
    const listOfPrograms = [];

    if(isCiepleMieszkanieAnswered(answersList)){
      listOfPrograms.push('CiepleMieszkanie');
    }
    if(isCzystePowietrzeAnswered(answersList)){
      listOfPrograms.push('CzystePowietrze');
    }
    if(isDodatekOslonowyAnswered(answersList)){
      listOfPrograms.push('DodatekOslonowy');
    }
    if(isDotacjeZBudzetuMiastaAnswered(answersList)){
      listOfPrograms.push('DotacjeZBudzetuMiasta');
    }
    if(isOgrzejSieZTauronemAnswered(answersList)){
      listOfPrograms.push('OgrzejSieZTauronem');
    }
    if(isStopSmogAnswered(answersList)){
      listOfPrograms.push('StopSmog');
    }
    if(isUlgaTermomodernizacyjnaAnswered(answersList)){
      listOfPrograms.push('UlgaTermomodernizacyjna');
    }
    if(isDodatekMieszkaniowyZOPSAnswered(answersList)){
      listOfPrograms.push('DodatekMieszkaniowyZOPS');
    }
    if(isZasilekCelowyZOPSAnswered(answersList)){
      listOfPrograms.push('ZasilekCelowyZOPS');
    }
    return listOfPrograms;
  }

  useEffect(() => {
    function packedAnswers():Answer[][] {
      const answersArr = form.answers;
      const packOfAnswers = [];
      for (let x = 0; x <= 42; x++) {
        const answers = answersArr.filter(a => a.indexOfStep === x);
        packOfAnswers[x] = answers.length > 0 ? answers : [defaultAnswer];
      }
      return packOfAnswers;
    }

    setOutputPrograms(listOfOutputPrograms(packedAnswers()))
  },[form.answers])

  return(
    <Box>
    </Box>
  )
}