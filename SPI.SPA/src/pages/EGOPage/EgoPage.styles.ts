import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { BodyLargeBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const EgoPageContainer = styled(Box)(({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5%',
  marginBottom: '20%',

  [theme.breakpoints.between('xs', 'sm')]: {
    marginBottom: '40%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '90%',
    marginBottom: '80%',
    marginTop: '15%',
  },
}));

export const EgoTextContainer = styled(BodyLargeBoldText)((({
  width: '50%',
  lineHeight: '24px',
  marginBottom: '40px',

  [theme.breakpoints.down('xs')]: {
    width: '90%',
  },
})))