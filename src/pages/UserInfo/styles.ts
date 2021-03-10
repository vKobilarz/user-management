import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 16px;
  }

  & + div {
    margin-top: 4px;
  }
`;

export const MapContainer = styled.div`
  border-radius: 8px;
  border: 4px solid #121419;
  margin-top: 8px !important;
`;
