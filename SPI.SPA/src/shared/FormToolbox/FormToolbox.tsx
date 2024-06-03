import { Box, FormControl, Input } from "@mui/material"
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useFooter } from "contexts/Footer/footer";
import React, { useEffect, useState } from "react";
import {CalculatePage} from "../../pages/OutputPage/Calculations/ClaculatePage";

export const FormToolbox = () => {
  const {currentStep, changeIndexOfCurrentStep} = useCurrentStep();
  const {outputPrograms} = useFooter();

  const [value, setValue] = useState<number>(currentStep.indexOfStep);

  useEffect(() => {
    setValue(currentStep.indexOfStep)
  },[currentStep.indexOfStep])

  function handleChange(value: string){
    const parsedInt = parseInt(value)
    setValue(parsedInt)
    changeIndexOfCurrentStep(parsedInt);
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        right: '100px',
        bottom: '200px',
        width: '300px',
        height: '200px',
        backgroundColor: 'black',
        padding: '10px',
      }}
    >
      <Box sx = {{ width: '300px', height:'150px', color: 'black', backgroundColor: 'white'}}>
        {outputPrograms.map(p => p + '\n')}
      </Box>
      <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch', backgroundColor: 'white' }}>
        <Input
          value={value.toString()}
          onChange={(e) => handleChange(e.target.value)}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
      </FormControl>
      <CalculatePage/>
    </Box>
  )
}