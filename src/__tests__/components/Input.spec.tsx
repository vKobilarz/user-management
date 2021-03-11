import React from 'react';

import { render } from '@testing-library/react';
import Input from '../../components/Input';

describe('Input Component', () => {
  it('should be able to render a label', () => {
    const { getByText } = render(
      <Input label="E-Mail" value={'Sincere@april.biz'} disabled />,
    );

    const labelElement = getByText('E-Mail');

    expect(labelElement).toBeTruthy();
  });

  it('should be able to render an input with a value', () => {
    const { getByDisplayValue } = render(
      <Input label="E-Mail" value={'Sincere@april.biz'} disabled />,
    );

    const valueElement = getByDisplayValue('Sincere@april.biz');

    expect(valueElement).toBeTruthy();
  });

  it('should be able to render an input without a value', () => {
    const { getByDisplayValue } = render(<Input label="E-Mail" disabled />);

    const valueElement = getByDisplayValue('');

    expect(valueElement).toBeTruthy();
  });
});
