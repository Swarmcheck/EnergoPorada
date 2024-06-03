import { createContext, useContext, useRef, useState } from "react";
import React from "react";
import { PageEnum } from "./Page.enum";

interface props {
  children?: React.ReactNode;
}

interface FooterContextValue {
  outsidePageLink: string;
  setOutsidePageLink: React.Dispatch<React.SetStateAction<string>>;
  outputPrograms: Array<string>;
  setOutputPrograms: React.Dispatch<React.SetStateAction<Array<string>>>;
  currentPage: PageEnum;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageEnum>>;
  displayRestartBox: boolean;
  setDisplayRestartBox: React.Dispatch<React.SetStateAction<boolean>>;
  displayError: boolean;
  setDisplayError: React.Dispatch<React.SetStateAction<boolean>>;
  returnToOutput: boolean;
  setReturnToOutput: React.Dispatch<React.SetStateAction<boolean>>;
  switchProgressBar: boolean;
  setSwitchProgressBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const FooterContext = createContext<FooterContextValue>({
  outsidePageLink: '',
  setOutsidePageLink: () => {},
  outputPrograms: [],
  setOutputPrograms: () => {},
  currentPage: PageEnum.Welcome,
  setCurrentPage: () => {},
  displayRestartBox: false,
  setDisplayRestartBox: () => {},
  displayError: false,
  setDisplayError: () => {},
  returnToOutput: false,
  setReturnToOutput: () => {},
  switchProgressBar: false,
  setSwitchProgressBar: () => {},
});

const FooterProvider = ({ children }: props): JSX.Element => {
  const [outsidePageLink, setOutsidePageLink] = useState<string>('//rybnik.eu');
  const [outputPrograms, setOutputPrograms] = useState<Array<string>>([]);
  const [currentPage, setCurrentPage] = useState<PageEnum>(PageEnum.Welcome);
  const [displayRestartBox, setDisplayRestartBox] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [returnToOutput, setReturnToOutput] = useState<boolean>(false);
  const [switchProgressBar, setSwitchProgressBar] = useState<boolean>(false);

  // useEffect(() => (
  // ), [])

  return (
    <FooterContext.Provider
      value={{
        outsidePageLink,
        setOutsidePageLink,
        outputPrograms,
        setOutputPrograms,
        currentPage,
        setCurrentPage,
        displayRestartBox,
        setDisplayRestartBox,
        displayError,
        setDisplayError,
        returnToOutput,
        setReturnToOutput,
        switchProgressBar,
        setSwitchProgressBar,
      }}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterProvider;

export const useFooter = (): FooterContextValue => {
  const context = useContext(FooterContext);
  if (!context) throw new Error('Context must be used within <FooterProvider/>');
  return context;
};