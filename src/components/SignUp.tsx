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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
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

      <WebAuthAlert sx={{ mt: 3 }} />
      <input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ marginTop: '1rem' }}
        type="email"
        value={email}
      />
      <TextField
        fullWidth
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        sx={{ mt: 2 }}
        type="password"
        value={password}
      />
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nome"
          sx={{ mr: 1 }}
          value={firstName}
        />
        <TextField
          fullWidth
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Sobrenome"
          sx={{
            ml: 1,
          }}
          value={lastName}
        />
      </Box>
      <Button
        color="primary"
        disabled={isBusy}
        fullWidth
        id="btn-sign-up-submit"
        onClick={() =>
          signUp({
            email,
            password,
            givenName: htmlEncode(firstName),
            familyName: htmlEncode(lastName),
          })
        }
        size="large"
        sx={{ mt: 3 }}
        variant="contained"
      >
        {'Continue'}
      </Button>
      <Box alignItems="center" display="flex" justifyContent="center" mt={3}>
        <Typography color="text.secondary" variant="body1">
          {'Já tem uma conta?'}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signIn')}
          sx={{ ml: 1 }}
          underline="hover"
        >
          <Typography variant="body1">{'Faça Login'}</Typography>
        </Link>
      </Box>
    </>
  );
};
