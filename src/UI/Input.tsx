import React from 'react';
import { searchKey } from '../types';

interface IInput {
  onChange: (args: [string, string]) => void;
  inputType: searchKey;
  value: string;
}

const INPUT_PARAMS = [
  {
    key: 'fullName',
    placeholder: 'enter name',
  },
  {
    key: 'phone',
    placeholder: 'enter phone',
  },
];

export const Input: React.FC<IInput> = ({ onChange, inputType, value }) => {
  const placeholder = INPUT_PARAMS.find(
    (item) => item.key === inputType
  )?.placeholder;

  return (
    <input
      style={{ marginRight: '8px' }}
      type='text'
      onChange={(e) => onChange([e.target.value, inputType])}
      value={value}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
};
