import React, { FC } from 'react';

import { SectionBody, SectionContainer, SectionTitleContainer } from './styles';

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <h1>{title}</h1>
      </SectionTitleContainer>
      <SectionBody>{children}</SectionBody>
    </SectionContainer>
  );
};

export default Section;
