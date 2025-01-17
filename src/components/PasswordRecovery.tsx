import React, { Dispatch } from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const PasswordRecovery = ({ email, setEmail }: Props): JSX.Element => {
  const { setMode, changePassword, isBusy } = useWebAuth();

  return (
    <>
      <Typography variant="h5">{'Recuperar senha'}</Typography>
      <Typography color="text.secondary" variant="body2">
        {
          'Digite o endereço de email com o qual você se cadastrou abaixo. Um email será enviado contendo um link para redefinir sua senha.'
        }
      </Typography>
      <WebAuthAlert sx={{ mt: 3 }} />
      <TextField
        fullWidth
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        sx={{ mt: 3 }}
        type="email"
        value={email}
      />
      <Button
        color="primary"
        disabled={isBusy}
        fullWidth
        id="btn-reset-password"
        onClick={() => changePassword({ email })}
        size="large"
        sx={{ mt: 3 }}
        variant="contained"
      >
        {'Enviar'}
      </Button>
      <Box alignItems="center" display="flex" justifyContent="center" mt={4}>
        <Typography color="text.secondary" variant="body1">
          {'Pronto pra logar?'}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signIn')}
          sx={{ ml: 1 }}
          underline="hover"
        >
          <Typography variant="body1">{'Login'}</Typography>
        </Link>
      </Box>
    </>
  );
};
