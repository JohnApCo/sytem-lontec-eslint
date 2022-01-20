import React from 'react';

import Router from './routes/routes';
import ThemeConfig from './theme';

function App() {
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
