import React, { useEffect } from 'react';
import GoogleLoginButton from '@/assets/icons/GoogleLoginButton';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Image from 'next/image';
import LoginImg from '@assets/images/LoginImg.png';
import { Logo } from '@/assets/icons';
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
`;

const Title = styled.p`
  ${tw`text-gray-40`}
  font-size: 3rem;
  margin: 0;
  line-height: 4.5rem;
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
    ${tw`text-gray-50`}
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
  }

  p.first-sentense {
    ${tw`text-gray-50`}
    margin-top: 1rem;
  }

  span {
    ${tw`text-secondary`}
  }
`;

const Login = () => {
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    if (window.localStorage.getItem('name')) router.push('/');
  }, []);

  const googleLoginHandler = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider).catch((error) => {
      // Handle Errors here.
      console.error(error);
      // ...
    });
  };

  return (
    <Wrapper>
      <ContentContainer>
        <Logo />
        <Title>
          마우스로 만드는 나만의 단어장.
          <span className="text-secondary font-bold block">시작해 볼까요?</span>
        </Title>
      </ContentContainer>
      <LoginContainer>
        <div className="google-login">
          <GoogleLoginButton onClick={googleLoginHandler} className="mr-14" />
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
        <Image src={LoginImg} alt="로그인" />
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
