import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';
import styled from '@emotion/styled';
import { ModalProvider } from '@/contexts/ModalContext';
import { WordProvider } from '@/contexts/WordContext';
import { initializeApp, getApps } from 'firebase/app';
import { FolderProvider } from '@/contexts/FolderContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastContainer } from '@/components/toast';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

function App({ Component, pageProps }: AppProps) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: 'https://fancymouse-cb040-default-rtdb.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MESUAREMENT_ID,
  };
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>팬시마우스</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <FolderProvider>
              <WordProvider>
                <ModalProvider>
                  <Container>
                    <Component {...pageProps} />
                  </Container>
                  <ToastContainer />
                </ModalProvider>
              </WordProvider>
            </FolderProvider>
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
