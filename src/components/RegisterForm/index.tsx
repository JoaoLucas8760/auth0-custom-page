import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { htmlEncode } from 'js-htmlencode';
import { BiEnvelope, BiUser } from 'react-icons/bi';
import { BsKey, BsTelephone } from 'react-icons/bs';
import { RiPassportLine } from 'react-icons/ri';
import { useWebAuth } from '../WebAuthProvider';
import { DotsLoader } from '../dots-loader';
import { FormInput } from '../input';
import { AuthRegisterSchema } from './schema';

interface RegisterProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  identity: string;
  phone: string;
}

export default function RegisterForm({ style }: any) {
  const [loading, setLoading] = useState(false);
  const { signUp, isBusy, setMode } = useWebAuth();

  const handleSubmit = async (data: RegisterProps) => {
    console.log(htmlEncode(data.first_name));
    setLoading(true);
    try {
      signUp({
        email: data.email,
        password: data.password,
        givenName: htmlEncode(data.first_name),
        familyName: htmlEncode(data.last_name),
      });
    } catch (error) {}

    return;
  };

  const dynamicMask = (value: string) => {
    if (!value || value.length === 0) return '999999999999999999';

    if (value.replace(/\D/g, '').length < 12) {
      return '999.999.999-999';
    } else {
      return '99.999.999/9999-99';
    }
  };

  const removeMask = (value: string) => {
    return value;
    // .replaceAll('.', '')
    // .replaceAll('-', '')
    // .replaceAll('/', '')
    // .replaceAll('+', '')
    // .replaceAll('(', '')
    // .replaceAll(')', '')
    // .replaceAll(' ', '');
  };

  return (
    <Formik
      className="form-data"
      onSubmit={handleSubmit}
      validationSchema={AuthRegisterSchema}
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        identity: '',
        phone: '',
      }}
    >
      {({ values }) => (
        <Form style={style}>
          <FormInput
            name="first_name"
            placeholder="Digite seu nome"
            type="text"
            icon={BiUser}
            text="Nome *"
            id="name"
          />
          <FormInput
            name="last_name"
            placeholder="Digite seu sobrenome"
            type="text"
            icon={BiUser}
            text="Sobrenome *"
            id="name"
          />

          <FormInput
            name="email"
            placeholder="Digite seu e-mail"
            type="email"
            icon={BiEnvelope}
            text="E-mail *"
            id="email"
          />

          {/* <FormInput
            name="identity"
            placeholder="Digite o numero do CPF ou CNPJ"
            icon={RiPassportLine}
            text="CPF / CNPJ *"
            id="identity"
            mask={dynamicMask(values.identity)}
            maskChar={''}
          />

          <FormInput
            name="phone"
            placeholder="Digite seu telefone"
            icon={BsTelephone}
            text="Telefone *"
            id="phone"
            mask="+55 (99) 99999-9999"
          /> */}

          <FormInput
            name="password"
            placeholder="Digite sua senha"
            type="password"
            text="Senha *"
            icon={BsKey}
            id="password"
            handleShowPassword
          />

          <Button
            type="submit"
            color="primary"
            disabled={isBusy}
            fullWidth
            id="btn-sign-up-submit"
            size="large"
            sx={{ mt: 3 }}
            variant="contained"
          >
            {'Registrar-se'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
