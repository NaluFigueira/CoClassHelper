import React from 'react';
import Stepper from './components/Stepper';

import GlobalStyle from './styles/global';
import SectionController from './pages/SectionController';

const src: React.FC = () => {
  return (
    <>
      <SectionController />
      <GlobalStyle />
    </>
  );
};

export default src;
