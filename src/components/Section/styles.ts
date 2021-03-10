import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: #282a36;
  border-radius: 8px;

  border: 1px solid #1c1e26;

  & + section {
    margin-top: 16px;
  }
`;

export const SectionTitleContainer = styled.div`
  background-color: #1c1e26;
  padding: 16px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const SectionBody = styled.div`
  padding: 16px;
`;
