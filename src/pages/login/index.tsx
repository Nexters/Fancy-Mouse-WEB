import React, { useContext, useEffect } from 'react';
import FancyMouseIcon from '@/assets/icons/FancyMouseIcon';
import SquareIcon from '@/assets/icons/SquareIcon';
import GoogleLoginButton from '@/assets/icons/GoogleLoginButton';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, UserCredential } from 'firebase/auth';
import styled from '@emotion/styled';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1d1f;
  position: absolute;
`;

const ContentContainer = styled.div`
  width: 800px;
  height: 200px;
  margin: 200px auto 0;
  display: flex;
  flex-direction: column;

  p {
    font-size: 48px;
    font-weight: 400;
    margin: 0;
    color: white;
  }

  p.lime {
    color: #eaffae;
    font-weight: 700;
  }
`;

const LoginContainer = styled.div`
  width: 800px;
  height: 265px;
  display: flex;
  margin: 0 auto;

  div {
    padding-top: 110px;
  }

  svg {
    cursor: pointer;
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
  }

  p.first-sentense {
    margin-top: 16px;
  }

  span {
    color: #eaffae;
  }
`;

const Login = () => {
  const auth = getAuth();
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const router = useRouter();

  const googleLoginHandler = async () => {
    console.log('google');
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider).catch((error) => {
      // Handle Errors here.
      console.error(error);
      // ...
    });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result: UserCredential | null) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result as UserCredential);
          setUserInfo({
            email: result.user.email || '',
            userName: result.user.displayName || '',
            uid: result.user.uid || '',
          });
          router.push('/');
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
        // ...
      });
  }, []);

  return (
    <Wrapper>
      <ContentContainer>
        <FancyMouseIcon />
        <p>마우스로 만드는 나만의 단어장.</p>
        <p className="lime">시작해 볼까요?</p>
      </ContentContainer>
      <LoginContainer>
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
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
