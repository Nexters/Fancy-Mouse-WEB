import React from 'react';
import * as $ from './styles';
import FancyMouseIcon from '@/assets/icons/FancyMouseIcon';
import SquareIcon from '@/assets/icons/SquareIcon';
import GoogleLoginButton from '@/assets/icons/GoogleLoginButton';

const Login = () => {
  const googleLoginHandler = () => {
    console.log('google');
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
