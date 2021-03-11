import React from 'react';

import { render } from '@testing-library/react';
import PageTitle from '../../components/PageTitle';

describe('PageTitle Component', () => {
  it('should be able to render a title', () => {
    const { getByText } = render(<PageTitle>Lista de Usuários</PageTitle>);

    const titleElement = getByText('Lista de Usuários');

    expect(titleElement).toBeTruthy();
  });
});
