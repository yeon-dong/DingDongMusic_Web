import { Container } from "./LoginButton.style";

const LoginButton = ({ onClick }) => {
  return <Container onClick={onClick}>로그인 하기</Container>;
};

export default LoginButton;
