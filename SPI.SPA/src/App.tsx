import { AppBoxStyled, AppTheme } from './App.styles';
import FormProvider from './contexts/Form/form';
import { FormPage } from './pages/FormPage/FormPage';
import { Header } from './shared/Header/Header';
import { ThemeProvider } from '@mui/material';
import { useNestedProviders } from './contexts/CombineContexts';
import CurrentStepProvider from './contexts/CurrentStep/currentStep';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StepperProvider from './contexts/Stepper/stepper';
import React from 'react';
import { DotationsPage } from 'pages/DotationsPage/DotationsPage';
import { Footer } from 'shared/Footer/Footer';
import FooterProvider from 'contexts/Footer/footer';
import { EducationPage } from 'pages/EducationPage/EducationPage';
import { FAQPage } from 'pages/FAQPage/FAQPage';
import { OutputPage } from 'pages/OutputPage/OutputPage';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { CiepleMieszkanie } from 'pages/DotationsPage/ProgramsPages/ProgramsList/CiepleMieszkanie/CiepleMieszkanie';
import { DodatekOslonowy } from 'pages/DotationsPage/ProgramsPages/ProgramsList/DodatekOslonowy/DodatekOslonowy';
import { DodatekMieszkaniowyZOPS } from 'pages/DotationsPage/ProgramsPages/ProgramsList/DodatekMieszkaniowyZOPS/DodatekMieszkaniowyZOPS';
import { ZasilekCelowyZOPS } from 'pages/DotationsPage/ProgramsPages/ProgramsList/ZasilekCelowyZOPS/ZasilekCelowyZOPS';
import { OgrzejSieZTauronem } from 'pages/DotationsPage/ProgramsPages/ProgramsList/OgrzejSieZTauronem/OgrzejSieZTauronem';
import { UlgaTermomodernizacyjna } from 'pages/DotationsPage/ProgramsPages/ProgramsList/UlgaTermomodernizacyjna/UlgaTermomodernizacyjna';
import { DotacjeZBudzetuMiasta } from 'pages/DotationsPage/ProgramsPages/ProgramsList/DotacjeZBudzetuMiasta/DotacjeZBudzetuMiasta';
import { CzystePowietrze } from 'pages/DotationsPage/ProgramsPages/ProgramsList/CzystePowietrze/CzystePowietrze';
import { StopSmog } from 'pages/DotationsPage/ProgramsPages/ProgramsList/StopSmog/StopSmog';
import { RestartBox } from 'shared/RestartBox/RestartBox';
import { RybnikPerson } from 'shared/RybnikPerson/RybnikPerson';
import { DoradzctwoEnergetyczne } from 'pages/EducationPage/ArticlesPages/ArticlesList/DoradzctwoEnergetyczne/DoradzctwoEnergetyczne';
import { SkadSmog } from 'pages/EducationPage/ArticlesPages/ArticlesList/SkadSmog/SkadSmog';
import { ProsteSposoby } from 'pages/EducationPage/ArticlesPages/ArticlesList/ProsteSposoby/ProsteSposoby';
import { OszczednosciEnergetyczne } from 'pages/EducationPage/ArticlesPages/ArticlesList/OszczednosciEnergetyczne/OszczednosciEnergetyczne';
import { SmogNaZdrowie } from 'pages/EducationPage/ArticlesPages/ArticlesList/SmogNaZdrowie/SmogNaZdrowie';
import { ChronicPrzedSmogiem } from 'pages/EducationPage/ArticlesPages/ArticlesList/ChronicPrzedSmogiem/ChronicPrzedSmogiem';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { GraphPage } from 'pages/GraphPage/GraphPage';

function App() {
  const CombinedProviders = useNestedProviders(
    <FooterProvider/>,
    <FormProvider/>,
    <StepperProvider/>,
    <CurrentStepProvider/>,
  );

  const routes = (
    <BrowserRouter>
      <FooterProvider>
        <FormProvider>
          <CurrentStepProvider>
            <StepperProvider>
              <AppBoxStyled>
                <Header />
                {/* {showBox && customBox} */}
                <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/ankieta" element={<FormPage />} />
                  <Route path="/output" element={<OutputPage />} />
                  <Route path="/czestepytania" element={<FAQPage />} />
                  <Route path="/przydatnawiedza" element={<EducationPage />} />
                  <Route path="/dotacjenacieplo" element={<DotationsPage />} />
                  <Route path="/dyskusja" element={<GraphPage />} />

                  {/* Education - Articles */}
                  <Route path="/przydatnawiedza/DoradzctwoEnergetyczne" element={<DoradzctwoEnergetyczne />} />
                  <Route path="/przydatnawiedza/SkadSmog" element={<SkadSmog />} />
                  <Route path="/przydatnawiedza/ProsteSposoby" element={<ProsteSposoby />} />
                  <Route path="/przydatnawiedza/OszczednosciEnergetyczne" element={<OszczednosciEnergetyczne />} />
                  <Route path="/przydatnawiedza/SmogNaZdrowie" element={<SmogNaZdrowie />} />
                  <Route path="/przydatnawiedza/ChronicPrzedSmogiem" element={<ChronicPrzedSmogiem />} />

                  {/* Dotations - Programs */}
                  <Route path="/dotacjenacieplo/CiepleMieszkanie" element={<CiepleMieszkanie />} />
                  <Route path="/dotacjenacieplo/DodatekOslonowy" element={<DodatekOslonowy />} />
                  <Route path="/dotacjenacieplo/DodatekMieszkaniowyZOPS" element={<DodatekMieszkaniowyZOPS />} />
                  <Route path="/dotacjenacieplo/ZasilekCelowyZOPS" element={<ZasilekCelowyZOPS />} />
                  <Route path="/dotacjenacieplo/OgrzejSieZTauronem" element={<OgrzejSieZTauronem />} />
                  <Route path="/dotacjenacieplo/UlgaTermomodernizacyjna" element={<UlgaTermomodernizacyjna />} />
                  <Route path="/dotacjenacieplo/DotacjeZBudzetuMiasta" element={<DotacjeZBudzetuMiasta />} />
                  <Route path="/dotacjenacieplo/CzystePowietrze" element={<CzystePowietrze />} />
                  <Route path="/dotacjenacieplo/StopSmog" element={<StopSmog />} />

                  {/* 404 Page */}
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
                <RybnikPerson/>
                <Footer/>
                <RestartBox/>
              </AppBoxStyled>
            </StepperProvider>
          </CurrentStepProvider>
        </FormProvider>
      </FooterProvider>
    </BrowserRouter>
  );

  return (
    <ThemeProvider theme={AppTheme}>
      {routes}
    </ThemeProvider>
  );
}

export default App;