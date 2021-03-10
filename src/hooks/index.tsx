import React, { FC } from 'react';

// import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../styles/global';
import { UserProvider } from './UserContext';

// import { AuthProvider } from './AuthConfig';

// import 'react-toastify/dist/ReactToastify.css';
// import { OcurrencesProvider } from './OcurrencesContext';

const AppProvider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default AppProvider;
