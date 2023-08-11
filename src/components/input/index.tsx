import { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import React from 'react';
import { useField } from 'formik';
import { FiAlertCircle } from 'react-icons/fi';
import InputMask, { ReactInputMask } from 'react-input-mask';
import { HandlePasswordButton } from '../handle-password-button';
import { Tooltip } from '../tooltip';

('use client');

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  type?: string;
  icon?: any;
  handleShowPassword?: boolean;
  mask?: string;
  maskChar?: string | null;
}

export function FormInput({
  icon: Icon,
  text,
  type,
  handleShowPassword = false,
  ...props
}: InputProps) {
  const [inputProps, meta] = useField<any>(props as any);
  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputMaskRef = useRef<ReactInputMask>(null);

  const isError = !!meta.touched && !!meta.error;

  const [typeInput, setTypeInput] = useState(type);

  const handleChangeInputType = () => {
    const newTypePassword = typeInput === 'password' ? 'text' : 'password';
    setTypeInput(newTypePassword);
  };

  const onBlur = useCallback(() => {
    setFocused(false);
    if (inputRef.current) {
      setFilled(!!inputRef.current.value);
    }
    if (inputMaskRef.current) {
      setFilled(!!inputMaskRef?.current?.props?.value);
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '0.25rem',
      }}
    >
      {text && (
        <label
          style={{ marginBottom: '0.25rem' }}
          htmlFor={props.id || props.name}
        >
          {text}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: '#05091a',
          color: 'white',
          borderBottomWidth: '3px',
          paddingLeft: '0.75rem',
          paddingRight: '0.25rem',
          outline: 'none',
          borderRadius: '0.125rem',
          transitionDuration: '300ms',
          height: '50px',
          fontSize: '1.125rem',
          // Equivalente a text-lg no Tailwind
          borderColor: isError
            ? '#EF4444' // Cor vermelha
            : focused
            ? '#F59E0B' // Cor âmbar
            : 'transparent', // Cor transparente
          borderBottomColor: isError
            ? '#B91C1C' // Cor vermelha para a borda inferior
            : focused
            ? '#C05621' // Cor âmbar para a borda inferior
            : '#D97706', // Cor bronze para a borda inferior
        }}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
      >
        {Icon && (
          <Icon
            style={{
              marginRight: '0.75rem', // 0.75rem é equivalente a 12 pixels
              color: isError
                ? '#EF4444' // Cor vermelha
                : focused
                ? 'inherit' // Mantém a cor atual se estiver focado
                : filled
                ? '#F59E0B' // Cor âmbar
                : '#A1A1AA', // Cor zinc-400
              focus: focused ? { color: '#F59E0B' } : {}, // Cor âmbar quando focado
            }}
          />
        )}
        {props.mask ? (
          <InputMask
            {...inputProps}
            {...props}
            mask={props.mask}
            id={props.id || props.name}
            ref={inputMaskRef}
            style={{
              flex: '1',
              backgroundColor: 'transparent',
              borderWidth: '0',
              width: '100%',
              height: '100%',
              fontSize: '1rem', // Equivalente a text-base no Tailwind
              outline: 'none',
            }}
          />
        ) : (
          <input
            id={props.id || props.name}
            type={typeInput}
            {...props}
            {...inputProps}
            ref={inputRef}
            style={{
              flex: '1',
              backgroundColor: 'transparent',
              borderWidth: '0',
              width: '100%',
              height: '100%',
              fontSize: '1rem', // Equivalente a text-base no Tailwind
              outline: 'none',
            }}
          />
        )}

        {meta.touched && meta.error && (
          <Tooltip
            title={meta.error.toString()}
            style={{
              height: '1.25rem', // 1.25rem é equivalente a 20 pixels
              marginLeft: '1rem', // 1rem é equivalente a 16 pixels
              postion: 'relative',
            }}
          >
            <FiAlertCircle color="#ff5252" size={20} style={{ margin: 0 }} />
          </Tooltip>
        )}

        {!meta.error && handleShowPassword && (
          <HandlePasswordButton
            onClick={handleChangeInputType}
            typePassword={typeInput}
            id="handleShowPasswdBttn"
          />
        )}
      </div>
    </div>
  );
}
