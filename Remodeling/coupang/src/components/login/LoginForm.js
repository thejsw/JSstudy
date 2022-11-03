import styled from "styled-components";

const LoginFormBlock = styled.div``;

const StyledInput = styled.input`
  width: 100%;
  color: black;
`;

const LoginForm = () => {
  <LoginFormBlock>
    <form>
      <StyledInput
        autoComplete="username"
        name="username"
        placeholder="아이디"
        type="id"
      />
      <StyledInput
        autoComplete="password"
        name="password"
        placeholder="비밀번호"
        type="password"
      />
    </form>
  </LoginFormBlock>;
};

export default LoginForm;
