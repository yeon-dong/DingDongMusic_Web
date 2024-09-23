import { Container } from "./UserButton.style";

const UserButton = () => {
  return (
    <Container to="/map">
      <img src="/images/avatar.svg" alt="User Icon" />
      {/* <img src="/user_icon.svg" alt="User Icon" /> */}
    </Container>
  );
};

export default UserButton;
