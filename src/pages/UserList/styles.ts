import styled from 'styled-components';

export const Table = styled.table`
  background: #282a36;
  border-radius: 8px;
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0 5px;
  border: 0;

  thead tr th {
    border-bottom: 1px solid #14171e;
    border-collapse: separate;
    border-spacing: 5px 5px;

    padding: 16px;
  }

  tbody tr#first td {
    border-collapse: separate;
    border-spacing: 5px 5px;
  }

  td {
    padding: 12px;
    text-align: center;
  }

  tr {
    border-bottom: 1px solid #191d26;
  }

  a {
    text-decoration: none;
    color: #bababa;
  }
`;
