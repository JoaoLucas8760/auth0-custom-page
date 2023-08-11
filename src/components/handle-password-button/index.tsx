import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface HandlePasswordButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  typePassword?: string;
}

export const HandlePasswordButton = ({
  typePassword,
  ...props
}: HandlePasswordButtonProps) => {
  return (
    <button {...props} type="button">
      {typePassword === 'password' ? (
        <AiOutlineEye color="#FFF" fontSize="1.5rem" />
      ) : (
        <AiOutlineEyeInvisible color="#FFF" fontSize="1.5rem" />
      )}
    </button>
  );
};
