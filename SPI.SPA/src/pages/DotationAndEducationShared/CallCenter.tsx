import { Box } from "@mui/material";
import React from "react";
import { BodyLargeMediumText, H2Text, TitleExtraBoldText } from "shared/FontBoxes/FontBoxes.styles";
import CallcenterIcon from '../../public/icons/programsIcons/CallcenterIcon.svg'
import { ProgramPageLinkStyled, ProgramPageListBoxStyled } from "../DotationsPage/ProgramsPages/ProgramComponents/ProgramPage.styles";
import { GenerateListItem } from "./GenerateListItem"

interface CallCenterProps{
  title?: string,
  number?: string,
  moreInfo?: string,
  link?: string,
  secondIcon?: string,
  secondTitle?: string,
  list?: Array<string | JSX.Element>,
  plainText?: string | JSX.Element,
}

export const CallCenter = (props: CallCenterProps) => {
  const {
    title,
    number,
    moreInfo,
    link,
    secondIcon,
    secondTitle,
    list,
    plainText,
  } = props;

  return (
    <Box sx= {{ 
      backgroundColor: '#BCD0ED',
      padding: '27px',
      marginTop: '40px',
      paddingBottom: '50px',
      overflowWrap: 'break-word',
    }}>
      <Box
        component='img'
        aria-label=""
        src={CallcenterIcon}
        sx={{
          width: '120px',
          height: '120px',
          marginTop: '-10px',
          marginLeft: '-10px',
          marginBottom: '9px',
        }}
      />
      {title && <TitleExtraBoldText sx={{ lineHeight: '24px' }} tabIndex={0}>
        {title}
      </TitleExtraBoldText>}
      {number && <H2Text sx={{ marginTop: '20px' }} tabIndex={0}>
        {number}
      </H2Text>}
      {secondIcon &&
        <Box
          component='img'
          aria-label=""
          src={secondIcon}
          sx={{
            width: '120px',
            height: '120px',
            marginTop: '65.5px',
            marginLeft: '-10px',
            marginBottom: '24px',
          }}
        />}
      {secondTitle &&
        <TitleExtraBoldText sx={{ lineHeight: '24px' }} tabIndex={0}>
          {secondTitle}
        </TitleExtraBoldText>}
      {list &&
        <ProgramPageListBoxStyled tabIndex={0}>
          {list.map((l, k) => {
            return <GenerateListItem text={l} key={k}/>
          })}
        </ProgramPageListBoxStyled>}
      {moreInfo && <BodyLargeMediumText sx={{ marginTop: '32px' }} tabIndex={0}>
        {moreInfo}
        {link && <ProgramPageLinkStyled href={link} target="_blank" aria-label={'pod tym linkiem. Link'}>
          pod tym linkiem.
        </ProgramPageLinkStyled>}
      </BodyLargeMediumText>}
      {plainText}
    </Box>
  )
}