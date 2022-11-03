import styled from "styled-components";

const LoginTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const LoginBox = styled.div`
  .logo-area {
    display: block;
    text-align: center;
    font-weight: bold;
  }
  width: 360px;
  background: white;
`;

const LoginTemplate = () => {
  return (
    <LoginTemplateBlock>
      <LoginBox>
        <div className="logo-area">
          <h1>Coupang</h1>
        </div>
      </LoginBox>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
