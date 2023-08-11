import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Content } from './components/Content';
import { WebAuthProvider } from './components/WebAuthProvider';
import './styles/index.css';
import theme from './styles/theme';

const App = (): JSX.Element => (
  <WebAuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  </WebAuthProvider>
);

export default App;
