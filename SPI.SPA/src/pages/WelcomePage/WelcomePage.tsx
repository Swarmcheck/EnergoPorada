
import { Box, Collapse, List, ListItemText } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useFooter } from 'contexts/Footer/footer';
import welcomePageText from './welcomePageText';
import { BodyLargeExtraBoldText } from 'shared/FontBoxes/FontBoxes.styles';
import { WelcomePageTextBoxStyled, WelcomePageTitleBoxStyled, WelcomePageDescriptionBoxStyled, WelcomePageExpandDescriptionBoxStyled, WelcomePageBoxstyled, WelcomePageButtonStyled, ContentContainer, WelcomePageListItemButtonStyled, WelcomePageExpandLessStyled, WelcomePageExpandMoreStyled, WelcomePageTipBoxStyled } from './WelcomePage.styles';
import { useCurrentStep } from 'contexts/CurrentStep/currentStep';
import { useForm } from 'contexts/Form/form';
import { useNavigate } from 'react-router-dom';
import { PageEnum } from 'contexts/Footer/Page.enum';
import InfoIcon from '../../public/icons/InfoIcon.svg';

export const WelcomePage = (): JSX.Element => {
  const { setCurrentPage, setDisplayRestartBox } = useFooter();
  const { form } = useForm();
  const { createNewJourney } = useCurrentStep();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(PageEnum.Welcome);
  },[])

  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleRestartButton = () => {
    if (form.answers.length > 1) {
      setDisplayRestartBox(true)
    }
    else {
      setLoading(true);
      const result = createNewJourney();
      setLoading(!result);
      navigate('/ankieta');
    }
  };

  useEffect(() => {
    if(!loading){
      navigate('/');
      setDisplayRestartBox(false);
    }
  }, [loading])

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ContentContainer m={0}>
      <WelcomePageBoxstyled>
        <WelcomePageTextBoxStyled>
          <WelcomePageTitleBoxStyled tabIndex={0}>
            {welcomePageText.title}
          </WelcomePageTitleBoxStyled>

          <WelcomePageDescriptionBoxStyled tabIndex={0}>
            {welcomePageText.description}
          </WelcomePageDescriptionBoxStyled>

          <WelcomePageTipBoxStyled tabIndex={0}>
            Aby uzyskać podpowiedzi, klikaj okrągłe ikony
            <Box
              component='img'
              src={InfoIcon}
              sx={{ cursor: 'pointer', paddingLeft: '10px'}}
              aria-label={'. sprawdź dodatkowy opis'}
              tabIndex={0}
            />
          </WelcomePageTipBoxStyled>

          {/* Expand */}
          <WelcomePageListItemButtonStyled
            disableRipple={true}
            onClick={handleClick}
          >
            <ListItemText>
              <BodyLargeExtraBoldText>
                {welcomePageText.expandTitle}
              </BodyLargeExtraBoldText>
            </ListItemText>
            {open ? <WelcomePageExpandLessStyled/> : <WelcomePageExpandMoreStyled/>}
          </WelcomePageListItemButtonStyled>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <WelcomePageExpandDescriptionBoxStyled tabIndex={0}>
                {welcomePageText.expandDescription}
              </WelcomePageExpandDescriptionBoxStyled>
            </List>
          </Collapse>
        </WelcomePageTextBoxStyled>
        <WelcomePageButtonStyled
          onClick={handleRestartButton}
          disableRipple={true}
          aria-label={'Rozpocznij ankietę'}
        >
          Rozpocznij
        </WelcomePageButtonStyled>
        <Box sx={{width: '50%'}}/>
      </WelcomePageBoxstyled>
    </ContentContainer>
  )
}