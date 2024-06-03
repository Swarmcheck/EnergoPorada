import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowLeft from '../../../../public/icons/ArrowLeft.svg';
import { GeneratePrograms } from "./GeneratePrograms";
import { CarouselBoxStyled, CarouselLeftButtonStyled, CarouselRightButtonStyled } from "./Carousel.styles";
import { visuallyHidden } from '@mui/utils';

interface CarouselProp {
  outputProgramsList: Array<string>,
}

export const Carousel = (props: CarouselProp) => {
  const {
    outputProgramsList,
  } = props;

  const [programList, setProgramList] = useState<Array<string>>(outputProgramsList);

  function displayButtons() {
    if (window.innerWidth <= 740){
      return programList.length > 1;
    }
    else if (window.innerWidth <= 1024){
      return programList.length > 2;
    }
    else if (window.innerWidth <= 1366){
      return programList.length > 3;
    }
    else{
      return programList.length > 4
    }
  }

  useEffect(() =>{
    setProgramList(outputProgramsList);
  },[outputProgramsList])

  function moveProgramList(move: number) {
    const list = [...programList];

    if(move === -1){
      list.push(list.shift() as string);
    }
    else if(move === 1){
      list.unshift(list.pop() as string)
    }

    setProgramList(list);
  }

  return (
    <CarouselBoxStyled>
        {displayButtons() && <CarouselLeftButtonStyled
          disableRipple={true}
          onClick={() => moveProgramList(-1)}
          tabIndex={-1}
        >
          <Box
            component='img'
            aria-label=""
            src={ArrowLeft}
          />
        </CarouselLeftButtonStyled>}

        <Box tabIndex={-1}>
          <GeneratePrograms programList={programList} isAlone={programList.length === 1} hidden={true}/>
        </Box>

        <Box sx={visuallyHidden}>
          <GeneratePrograms programList={programList} isAlone={false} generateAll={true}/>
        </Box>
        
        {displayButtons() && <CarouselRightButtonStyled
          disableRipple={true}
          onClick={() => moveProgramList(1)}
          tabIndex={-1}
        >
          <Box
            component='img'
            aria-label=""
            src={ArrowLeft}
          />
        </CarouselRightButtonStyled>}
      </CarouselBoxStyled>
  )
}