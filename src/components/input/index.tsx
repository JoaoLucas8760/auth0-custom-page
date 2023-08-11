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
    <div className="flex flex-col w-full mb-4">
      {text && (
        <label className="mb-1" htmlFor={props.id || props.name}>
          {text}
        </label>
      )}
      <div
        className={`flex items-center border-solid border bg-[#05091a] text-white border-b-[3px] px-4 outline-none rounded-sm duration-300 h-[50px] text-lg ${
          (isError && 'border-red-500') ||
          (focused && 'border-amber-400') ||
          'border-transparent focus:border-bronze-500 border-b-bronze-500'
        }`}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
      >
        {Icon && (
          <Icon
            className={`mr-3 ${
              (isError && 'text-red-500') ||
              focused ||
              (filled && 'text-amber-400') ||
              'text-zinc-400'
            } focus:text-amber-400`}
          />
        )}
        {props.mask ? (
          <InputMask
            {...inputProps}
            {...props}
            mask={props.mask}
            id={props.id || props.name}
            ref={inputMaskRef}
            className="flex-1 bg-transparent border-0 w-full h-full text-base outline-none"
          />
        ) : (
          <input
            id={props.id || props.name}
            type={typeInput}
            {...props}
            {...inputProps}
            ref={inputRef}
            className="flex-1 bg-transparent border-0 w-full h-full text-base outline-none"
          />
        )}

        {meta.touched && meta.error && (
          <Tooltip title={meta.error.toString()} className="h-5 ml-4">
            <FiAlertCircle color="#ff5252" size={20} className="m-0" />
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
