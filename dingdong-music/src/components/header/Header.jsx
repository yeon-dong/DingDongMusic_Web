import React from "react";
import { Container } from "./Header.style";

function Header() {
  const color = false;
  return (
    <div>
      <Container $red={color}>안녕하세요</Container>
    </div>
  );
}

export default Header;
