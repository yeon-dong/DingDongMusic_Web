import React, { useCallback, useState } from "react";
import {
  Container,
  Logo,
  MobileMenuBox,
  SearchBox,
  UserBox,
} from "./Header.style";
import HomeButton from "./HomeButton";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchBar from "./SearchBar";
import MobileSearchButton from "./MobileSearchButton";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMobileSearchBarShow, setMobileSearchBarShow] = useState(false);
  const [isMobileMenuShow, setMobileMenuShow] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const handleMobileSearchButtonClick = useCallback(() => {
    setMobileSearchBarShow(!isMobileSearchBarShow);
  }, [isMobileSearchBarShow]);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuShow(!isMobileMenuShow);
  }, [isMobileMenuShow]);

  return (
    <Container>
      <Logo to="/">
        <img src="/dingdongmusicicon.svg" alt="딩동뮤직아이콘" />
      </Logo>
      <SearchBox>
        <HomeButton />
        <SearchBar />
      </SearchBox>
      <UserBox>
        {isLoggedIn ? <UserButton /> : <LoginButton onClick={handleLogin} />}
      </UserBox>
      <MobileMenuBox>
        <MobileSearchButton
          isMobileSearchBarShow={isMobileSearchBarShow}
          onMobileSearchButtonClick={handleMobileSearchButtonClick}
        />
        <MobileMenu
          isMobileMenuShow={isMobileMenuShow}
          onMobileMenuClick={handleMobileMenuClick}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />
      </MobileMenuBox>
    </Container>
  );
}

export default Header;
