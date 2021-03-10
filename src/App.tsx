import React from 'react';
import AppProvider from './hooks';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
};

export default App;
