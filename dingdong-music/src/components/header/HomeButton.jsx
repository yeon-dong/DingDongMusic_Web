import { Container } from "./HomeButton.style";

const HomeButton = ({ onHomeClick }) => {
  return (
    <Container onClick={onHomeClick}>
      <img src="/home_icon.svg" alt="Home Icon" />
    </Container>
  );
};

export default HomeButton;
