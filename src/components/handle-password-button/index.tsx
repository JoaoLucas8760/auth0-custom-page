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
    <button
      {...props}
      style={{
        all: 'unset', // Redefine todas as propriedades
        display: 'inline-block', // Mantém o botão como bloco inline
        padding: '0', // Remove o preenchimento
        margin: '0', // Remove as margens
        border: 'none', // Remove a borda
        background: 'none', // Remove o fundo
        textAlign: 'center', // Centraliza o texto
        textDecoration: 'none', // Remove a decoração do texto
        cursor: 'pointer', // Define o cursor como ponteiro
        fontSize: 'inherit', // Mantém o tamanho de fonte herdado
        lineHeight: 'inherit', // Mantém a altura de linha herdada
        fontFamily: 'inherit', // Mantém a família de fonte herdada
      }}
      type="button"
    >
      {typePassword === 'password' ? (
        <AiOutlineEye color="#FFF" fontSize="1.5rem" />
      ) : (
        <AiOutlineEyeInvisible color="#FFF" fontSize="1.5rem" />
      )}
    </button>
  );
};
