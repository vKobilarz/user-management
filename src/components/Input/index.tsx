import React, { FC } from 'react';

import { InputContainer } from './styles';

interface InputProps {
  value?: string;
  label: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({ value = '', label, disabled }) => {
  return (
    <InputContainer>
      <label>{label}:</label>
      <input value={value} disabled={disabled} />
    </InputContainer>
  );
};

export default Input;
