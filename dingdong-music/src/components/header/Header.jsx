import React, { useCallback, useState } from "react";
import { Container, Logo, SearchBox, UserBox } from "./Header.style";
import HomeButton from "./HomeButton";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchBar from "./SearchBar";

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  return (
    <Container>
      <Logo>
        <img src="/dingdongmusicicon.svg" alt="딩동뮤직아이콘" />
      </Logo>
      <SearchBox>
        <HomeButton />
        <SearchBar />
      </SearchBox>
      <UserBox>
        {isLoggedIn ? <UserButton /> : <LoginButton onClick={handleLogin} />}
      </UserBox>
    </Container>
  );
}

export default Header;
