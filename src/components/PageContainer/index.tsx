import React, { FC } from 'react';
import { Container, Content } from './styles';

const PageContainer: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default PageContainer;
