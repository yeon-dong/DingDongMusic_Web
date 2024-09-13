import { useCallback, useState } from "react";
import { Container } from "./MobileMenu.style";
import { MenuIcon } from "./MobileMenu.style";
import { MenuContainer } from "./MobileMenu.style";
import { MenuList } from "./MobileMenu.style";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isMobileMenuShow,
  onMobileMenuClick,
  isLoggedIn,
  onLogin,
}) => {
  return (
    <Container>
      <button onClick={onMobileMenuClick}>
        <MenuIcon>
          <img src="/cart_icon.svg" alt="Menu Icon" />
        </MenuIcon>
      </button>
      <MenuContainer $isShow={isMobileMenuShow}>
        <MenuList>
          <li>
            {isLoggedIn ? (
              <Link to={"/"}>마이페이지</Link>
            ) : (
              <div onClick={onLogin}>로그인</div>
            )}
          </li>
          <li>
            <Link to={"/"}>장바구니</Link>
          </li>
        </MenuList>
      </MenuContainer>
    </Container>
  );
};

export default MobileMenu;
