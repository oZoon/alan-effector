import React from 'react';

interface IButtonProps<T> {
  onClick: ((arg?: T) => void) | (() => void);
  arg?: T;
  title: string;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps<string>> = ({
  onClick,
  arg,
  title,
  disabled,
}) => {
  return (
    <button onClick={() => onClick(arg)} disabled={disabled}>
      {title}
    </button>
  );
};
