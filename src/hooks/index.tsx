import React, { FC } from 'react';

import GlobalStyle from '../styles/global';
import { UserProvider } from './UserContext';

const AppProvider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default AppProvider;
