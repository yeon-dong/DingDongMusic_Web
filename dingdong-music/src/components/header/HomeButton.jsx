import { Container } from "./HomeButton.style";

const HomeButton = () => {
  return (
    <Container to="/">
      <img src="/home_icon.svg" alt="Home Icon" />
    </Container>
  );
};

export default HomeButton;
