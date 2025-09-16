import React from 'react';
import PortfolioGabiModern from './PortfolioGabiModern';
import { I18nProvider } from './i18n/i18n';

function App() {
  return (
    <I18nProvider>
      <PortfolioGabiModern />
    </I18nProvider>
  );
}

export default App;