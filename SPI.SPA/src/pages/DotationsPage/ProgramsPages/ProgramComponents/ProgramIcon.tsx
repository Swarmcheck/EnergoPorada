import { Box } from "@mui/material";
import React from "react";

interface ProgramIconProps {
  icon: string,
}

export const ProgramIcon = (props:ProgramIconProps) => {
  const {
    icon
  } = props;
  
  return(
    <Box
      component='img'
      aria-label=""
      src={icon}
      sx={{
        marginTop: '25px',
        width: '116px',
        height: '116px',
        marginLeft: '-10px',
      }}
    />
  )
}