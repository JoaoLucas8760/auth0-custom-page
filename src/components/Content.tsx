import React, { useState } from 'react';
import { Card } from '@mui/material';
import { PasswordRecovery } from './PasswordRecovery';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { useWebAuth } from './WebAuthProvider';

export const Content = (): JSX.Element => {
  const { mode } = useWebAuth();
  const [email, setEmail] = useState('');

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Card
        style={{
          maxWidth: '30rem',
          zIndex: 100,
          minWidth: '30rem',
          overflow: 'auto',
        }}
        className="sunize-scrollbar"
        sx={{ p: { xs: 2, md: 7 }, overflow: 'auto', maxHeight: '100vh' }}
        variant="outlined"
      >
        {mode === 'signUp' ? (
          <SignUp email={email} setEmail={setEmail} />
        ) : (
          <>
            {mode === 'signIn' ? (
              <SignIn email={email} setEmail={setEmail} />
            ) : (
              <PasswordRecovery email={email} setEmail={setEmail} />
            )}
          </>
        )}
      </Card>
      <img
        alt="Imagem"
        src="https://sso.sunize.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-auth.9f191aec.png&w=1920&q=75"
        style={{
          maxWidth: '68.7vw',
          objectFit: 'cover',
          objectPosition: 'center',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};
