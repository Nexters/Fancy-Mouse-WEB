import { FC } from 'react';
import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';
import { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Fancy Mouse</title>
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
