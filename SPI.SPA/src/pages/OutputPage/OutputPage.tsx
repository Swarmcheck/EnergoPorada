import { useFooter } from "contexts/Footer/footer";
import { useForm } from "contexts/Form/form";

import React, { useEffect, useRef, useState } from "react";
import { H1Text } from "shared/FontBoxes/FontBoxes.styles";
import { OutputPageBoxStyled, OutputPageButtonStyled, OutputPageDescriptionBoxStyled, OutputPageMiniTextBoxStyled, OutputPageTextBoxStyled } from "./OutputPage.styles";
import { outputPageText } from "./OutputPageText";

import { GenerateArticles } from "./GenerateOutputPageBox/GenerateArticles/GenerateArticles";
import { Carousel } from "./GenerateOutputPageBox/Carousel/Carousel";
import { PageEnum } from "contexts/Footer/Page.enum";
import { CalculatePage } from "./Calculations/ClaculatePage";
import { Box } from "@mui/material";

export const OutputPage = ():JSX.Element => {
  const { form, sendFormToDB } = useForm();
  const { outputPrograms, setDisplayRestartBox, setCurrentPage, setReturnToOutput } = useFooter();
  const [ programsToList, setProgramsToList] = useState(['']);
  const [ deleteArticles, setDeleteArticles] = useState(false);

  const readTitle = useRef(document.createElement("div"))

  let displayPrograms = false;

  // const outputProgramsList = [
  //   'CiepleMieszkanie',
  //   'CzystePowietrze',
  //   'DodatekOslonowy',
  //   'DotacjeZBudzetuMiasta',
  //   'OgrzejSieZTauronem',
  //   'StopSmog',
  // ]

  useEffect(() =>{
    setReturnToOutput(true)
    if(displayPrograms){
      setProgramsToList(outputPrograms.length > 0 ? outputPrograms : ['DoradzctwoEnergetyczne', 'ProsteSposoby', 'OszczednosciEnergetyczne'])
      setDeleteArticles(!(outputPrograms.length > 0))
    }
    else{
      setProgramsToList(['DoradzctwoEnergetyczne', 'ProsteSposoby', 'OszczednosciEnergetyczne'])
      setDeleteArticles(true)
    }
  },[outputPrograms])
  
  useEffect(() => {
    sendFormToDB();
    setCurrentPage(PageEnum.OutputPage);
    window.scrollTo(0, 0);
    readTitle.current.focus()
  },[])

  function returnText() {
    if (form.answers[0].answer === 'poniżej 18 lat'){
      return outputPageText.descriptionUnder18
    }
    else if (form.answers[1].answer === 'Nie mieszkam w Rybniku.'){
      return outputPageText.descriptionNotInRybnik
    }
    else if (form.answers.length >= 0){
      displayPrograms = true;
      return outputPrograms.length > 0 ? outputPageText.description : outputPageText.descriptionForEmptyOutput
    }
  }

  return (
    <OutputPageBoxStyled>
      <CalculatePage/>
      {/* Text */}
      <OutputPageTextBoxStyled>
        <H1Text sx={{width: '80%'}} tabIndex={0} ref={readTitle}>
          {outputPageText.title}
        </H1Text>

        <OutputPageDescriptionBoxStyled tabIndex={0}>
          {returnText()}
        </OutputPageDescriptionBoxStyled>
      </OutputPageTextBoxStyled>

      {/* Carousel */}
      <Carousel outputProgramsList={programsToList}/>
    
      {/* Articles */}
      <OutputPageMiniTextBoxStyled tabIndex={0}>
        Zapoznaj się również
      </OutputPageMiniTextBoxStyled>
      <GenerateArticles deleteArticles={deleteArticles}/>
      

      {/* Restart button */}
      <OutputPageButtonStyled
        onClick={() => setDisplayRestartBox(true)}
        disableRipple={true}
      >
        Rozpocznij ankietę od nowa
      </OutputPageButtonStyled>

    </OutputPageBoxStyled>
  )
}