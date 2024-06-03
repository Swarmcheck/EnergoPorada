import { ciepleMieszkanie } from "pages/DotationsPage/ProgramsPages/ProgramsList/CiepleMieszkanie/ciepleMieszkanieText";
import { czystePowietrze } from "pages/DotationsPage/ProgramsPages/ProgramsList/CzystePowietrze/czystePowietrzeText";
import { dodatekMieszkaniowyZOPS } from "pages/DotationsPage/ProgramsPages/ProgramsList/DodatekMieszkaniowyZOPS/dodatekMieszkaniowyZOPSText";
import { dodatekOslonowy } from "pages/DotationsPage/ProgramsPages/ProgramsList/DodatekOslonowy/dodatekOslonowyText";
import { dotacjeZBudzetuMiasta } from "pages/DotationsPage/ProgramsPages/ProgramsList/DotacjeZBudzetuMiasta/dotacjeZBudzetuMiastaText";
import { ogrzejSieZTauronem } from "pages/DotationsPage/ProgramsPages/ProgramsList/OgrzejSieZTauronem/ogrzejSieZTauronemText";
import { stopSmog } from "pages/DotationsPage/ProgramsPages/ProgramsList/StopSmog/stopSmogText";
import { ulgaTermomodernizacyjna } from "pages/DotationsPage/ProgramsPages/ProgramsList/UlgaTermomodernizacyjna/ulgaTermomodernizacyjnaText";
import { zasilekCelowyZOPS } from "pages/DotationsPage/ProgramsPages/ProgramsList/ZasilekCelowyZOPS/zasilekCelowyZOPSText";

import { defaultProgram, ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import React from "react";
import { ProgramBox } from "pages/DotationsPage/ProgramBoxes/ProgramBox";
import { doradzctwoEnergetyczne } from "pages/EducationPage/ArticlesPages/ArticlesList/DoradzctwoEnergetyczne/DoradzctwoEnergetyczneText";
import { CarouselProgramBoxStyled } from "./Carousel.styles";
import { oszczednosciEnergetyczne } from "pages/EducationPage/ArticlesPages/ArticlesList/OszczednosciEnergetyczne/OszczednosciEnergetyczneText";
import { prosteSposoby } from "pages/EducationPage/ArticlesPages/ArticlesList/ProsteSposoby/ProsteSposobyText";

interface GenerateProgramsProps {
  programList: Array<string>,
  isAlone: boolean,
  generateAll?: boolean,
  hidden?: boolean,
}

export const GeneratePrograms = (props: GenerateProgramsProps) => {
  const {
    programList,
    isAlone,
    generateAll = false,
    hidden = false,
  } = props;

  function returnProgram(name: string): ProgramEducationI {
    switch (name) {
      case ('CiepleMieszkanie'):
        return ciepleMieszkanie;
      case ('CzystePowietrze'):
        return czystePowietrze;
      case ('DodatekOslonowy'):
        return dodatekOslonowy;
      case ('DotacjeZBudzetuMiasta'):
        return dotacjeZBudzetuMiasta;
      case ('OgrzejSieZTauronem'):
        return ogrzejSieZTauronem;
      case ('StopSmog'):
        return stopSmog;
      case ('UlgaTermomodernizacyjna'):
        return ulgaTermomodernizacyjna;
      case ('ZasilekCelowyZOPS'):
        return zasilekCelowyZOPS;
      case ('DodatekMieszkaniowyZOPS'):
        return dodatekMieszkaniowyZOPS;
      case('DoradzctwoEnergetyczne'):
        return doradzctwoEnergetyczne;
      case('OszczednosciEnergetyczne'):
        return oszczednosciEnergetyczne;
      case('ProsteSposoby'):
        return prosteSposoby;
      default:
        return defaultProgram;
    }
  }

  // eslint-disable-next-line no-restricted-globals
  function howManyOnPage() {
    if(generateAll){
      return programList.length
    }
    else if (window.innerWidth <= 740){
      return 1
    }
    else if (window.innerWidth <= 1024){
      return 2
    }
    else if (window.innerWidth <= 1366){
      return 3
    }
    else{
      return 4
    }
  }

  

  return (
    <CarouselProgramBoxStyled>
      {programList.slice(0,howManyOnPage()).map((p, k) =>
        <ProgramBox
          key={k}
          program={returnProgram(p)}
          isOutputPage={true}
          isAlone={isAlone}
          hidden={hidden}
        />
      )}
    </CarouselProgramBoxStyled>
  )
}