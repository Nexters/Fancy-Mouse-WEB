import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1d1f;
  position: absolute;
`;

export const ContentContainer = styled.div`
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

export const LoginContainer = styled.div`
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
