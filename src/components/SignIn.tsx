import React, { Dispatch, useRef, useState } from 'react';
import {
  Box,
  Button,
  InputBase,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { LoginForm } from './LoginForm';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';
import { FormInput } from './input';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const SignIn = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('');
  const { login, isBusy, setMode } = useWebAuth();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      login({
        username: email,
        password,
      });
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          alt="Sunize"
          src="https://sso.sunize.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d4668af.png&w=640&q=75"
          style={{
            maxWidth: 353,
            maxHeight: 121,
          }}
        />
      </div>
      <Typography align="center" sx={{ mt: 5 }} variant="h5">
        {'Entrar na conta'}
      </Typography>
      <Box alignItems="center" justifyContent="center" mt={3}>
        <Typography color="text.secondary" variant="body1">
          {'Não possui uma conta?'}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signUp')}
          sx={{ fontSize: '1rem' }}
          underline="hover"
        >
          <Typography>{'Registre-se'}</Typography>
        </Link>
      </Box>
      <WebAuthAlert sx={{ mt: 3 }} />

      <LoginForm style={{ marginTop: '1rem' }} />

      <Link
        component="button"
        onClick={() => setMode('resetPassword')}
        underline="hover"
      >
        <Typography component="h4" sx={{ fontSize: '1.1rem' }} variant="body2">
          {'Esqueci minha senha'}
        </Typography>
      </Link>
    </>
  );
};
