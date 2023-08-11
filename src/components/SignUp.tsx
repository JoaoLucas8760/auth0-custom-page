import React, { Dispatch, useState } from 'react';
import {
  Box,
  Button,
  InputBase,
  Link,
  TextField,
  Typography,
  makeStyles,
} from '@mui/material';
import { htmlEncode } from 'js-htmlencode';
import RegisterForm from './RegisterForm';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const SignUp = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { signUp, isBusy, setMode } = useWebAuth();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
        {'Registre-se'}
      </Typography>

      <Box alignItems="center" justifyContent="center" mt={3}>
        <Typography color="text.secondary" variant="body1">
          {'Já tem uma conta?'}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signIn')}
          underline="hover"
        >
          <Typography variant="body1">{'Faça Login'}</Typography>
        </Link>
      </Box>

      <WebAuthAlert sx={{ mt: 3 }} />

      <RegisterForm
        style={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}
      />
    </>
  );
};
