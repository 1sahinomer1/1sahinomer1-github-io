import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components';

import { lightTheme, darkTheme, GlobalStyles } from 'theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Component theme={theme} {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
