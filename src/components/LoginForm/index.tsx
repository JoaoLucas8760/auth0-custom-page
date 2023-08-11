import React from 'react';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { BiEnvelope } from 'react-icons/bi';
import { BsKey } from 'react-icons/bs';
import { useWebAuth } from '../WebAuthProvider';
import { FormInput } from '../input';
import { AuthLoginSchema } from './schema';

interface LoginData {
  email: string;
  password: string;
}

interface FormComponentProps {
  onSubmit?: (data: LoginData) => void;
  style?: React.CSSProperties;
}

export const LoginForm = React.forwardRef<FormComponentRef, FormComponentProps>(
  ({ style }) => {
    const { login, isBusy, setMode } = useWebAuth();

    const handleSubmit = async (data: LoginData) => {
      login({
        username: data.email,
        password: data.password,
      });
    };

    return (
      <Formik
        className="form-data"
        onSubmit={handleSubmit}
        validationSchema={AuthLoginSchema}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {() => (
          <Form style={style}>
            <FormInput
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
              icon={BiEnvelope}
              text="E-mail *"
              id="email"
            />

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
              id="btn-login"
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
            >
              {'Continue'}
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
);

export interface FormComponentRef {
  submitForm: () => void;
}
