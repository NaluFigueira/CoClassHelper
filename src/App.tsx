import React from 'react';

import GlobalStyle from './styles/global';
import SectionController from './pages/SectionController';
import { SectionProvider } from './context/section';

const App: React.FC = () => {
  return (
    <SectionProvider>
      <SectionController />
      <GlobalStyle />
    </SectionProvider>
  );
};

export default App;
