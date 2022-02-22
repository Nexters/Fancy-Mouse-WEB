import React, { useEffect } from 'react';
import * as $ from './styles';
import FancyMouseIcon from '@/assets/icons/FancyMouseIcon';
import SquareIcon from '@/assets/icons/SquareIcon';
import GoogleLoginButton from '@/assets/icons/GoogleLoginButton';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, UserCredential } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const Login = () => {
  useEffect(() => {
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
    initializeApp(firebaseConfig);
  }, []);

  const googleLoginHandler = async () => {
    console.log('google');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result as UserCredential);
        console.log(result);
        console.log(credential);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
        // ...
      });
  };

  return (
    <$.Wrapper>
      <$.ContentContainer>
        <FancyMouseIcon />
        <p>마우스로 만드는 나만의 단어장.</p>
        <p className="lime">시작해 볼까요?</p>
      </$.ContentContainer>
      <$.LoginContainer>
        <div className="google-login">
          <GoogleLoginButton onClick={googleLoginHandler} />
          <p className="first-sentense">
            슥 드래그하면 영단어가 번역되는{' '}
            <span>
              <u>크롬 확장 프로그램 다운로드</u>
            </span>
          </p>
          <p>
            매일매일 영단어 학습{' '}
            <span>
              <u>iOS 앱 다운로드</u>
            </span>
          </p>
        </div>
        <SquareIcon />
      </$.LoginContainer>
    </$.Wrapper>
  );
};

export default Login;
