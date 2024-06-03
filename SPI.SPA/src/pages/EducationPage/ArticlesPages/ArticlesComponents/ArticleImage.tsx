import { Box } from "@mui/material";
import React from "react";

interface ArticleImageProps {
  image: string,
}

export const ArticleImage = (props :ArticleImageProps) => {
  const {
    image,
  } = props;
  
  return(
    <Box
      component='img'
      aria-label=""
      src={image}
      sx={{
        marginBottom: '22px',
        width:'100%',
      }}
    />
  )
}