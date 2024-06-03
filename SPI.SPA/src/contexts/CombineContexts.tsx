import React from 'react';

const createNestedElements = ( elementArray: JSX.Element[], children: React.ReactNode ): JSX.Element => {
  const element = elementArray[0];
  const newArray = elementArray.slice(1);

  if (!element) return <>{ children }</>;
  return React.createElement(
    element.type, 
    { ...element.props }, 
    <>{ createNestedElements(newArray, children) }</>
  );
};

interface props {
  children?: React.ReactNode;
}

export const useNestedProviders = (...providers: JSX.Element[]) => {
  return ({ children }: props) => {return createNestedElements(providers, children);};;
};

