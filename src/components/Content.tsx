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
          maxWidth: '500px',
          zIndex: 100,
          // minWidth: '30rem',
          overflow: 'auto',
          width: '100%',
          paddingBottom: '10rem',
          backgroundImage:
            'url(https://sso.sunize.com.br/images/bg-form-pattern.png)',
          backgroundBlendMode: 'difference',
          backgroundColor: '#0f1c4d66',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          // Largura da barra de rolagem (pode ser 'thin', 'auto' ou 'none')
        }}
        // className="sunize-scrollbar"
        sx={{
          p: { xs: 2, md: 7 },
          overflow: 'auto',
          maxHeight: '100vh',

          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c27c2c', // Cor do polegar da scrollbar
            borderRadius: 7,
          },
          '&::-webkit-scrollbar-track': {
            background: '#1f1f2b', // Cor da trilha da scrollbar
          },
        }}
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

        <footer style={{ marginTop: '2rem' }}>
          <span
            style={{ fontSize: '0.7rem', opacity: 0.6, lineHeight: '0.5rem' }}
          >
            Termos de uso - Políticas de privacidade
          </span>
          <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1rem' }}>
            Sunize 2023 - Todos os Direitors Reservados
          </p>
        </footer>
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
