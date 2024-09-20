import React, { useCallback, useState } from "react";
import {
  Container,
  Logo,
  MobileLoginButton,
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
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";
import LoginPopUp from "../LoginPopUp/LoginPopUp";

function Header() {
  const [isMobileSearchBarShow, setMobileSearchBarShow] = useState(false);
  const [isMobileMenuShow, setMobileMenuShow] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const navigate = useNavigate();

  const openPopUp = () => {
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };
  //로그인 함수
  const handleLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const handleMobileSearchButtonClick = useCallback(() => {
    setMobileSearchBarShow(!isMobileSearchBarShow);
  }, [isMobileSearchBarShow]);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuShow(!isMobileMenuShow);
  }, [isMobileMenuShow]);

  const handleHomeClick = useCallback(() => {
    setMobileSearchBarShow(false);
    setInputText("");

    navigate("/");
  }, []);

  const handleInputTextChange = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  return (
    <>
      <Container>
        <Logo onClick={handleHomeClick}>
          <img src="/dingdongmusicicon.svg" alt="딩동뮤직아이콘" />
        </Logo>
        <SearchBox>
          <HomeButton onHomeClick={handleHomeClick} />
          <SearchBar
            inputText={inputText}
            onInputTextChange={handleInputTextChange}
          />
        </SearchBox>
        <UserBox>
          {isLoggedIn ? (
            <UserButton />
          ) : (
            <LoginButton onClick={() => openPopUp()} />
          )}
        </UserBox>
        <MobileMenuBox>
          <MobileSearchButton
            isMobileSearchBarShow={isMobileSearchBarShow}
            onMobileSearchButtonClick={handleMobileSearchButtonClick}
            inputText={inputText}
            onInputTextChange={handleInputTextChange}
          />
          <CartButton color="white" />
          {isLoggedIn ? (
            <UserButton />
          ) : (
            <MobileLoginButton onClick={handleLogin}>
              <img src="/user_icon.svg" alt="Mobile Login Icon" />
            </MobileLoginButton>
          )}
        </MobileMenuBox>
      </Container>
      {/* <LoginPopUp /> */}
    </>
  );
}

export default Header;
