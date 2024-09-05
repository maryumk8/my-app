import React from 'react';
import { useTranslation } from 'react-i18next';
import Routing from './routing/Routing';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('app-name')}
      <Routing />
    </div>
  );
};

export default App;
