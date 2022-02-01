import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';
import styled from '@emotion/styled';
import { ModalProvider } from '@/contexts/ModalContext';

const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  position: relative;
  margin: 2rem auto 0;
`;

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>팬시마우스</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ModalProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ModalProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
