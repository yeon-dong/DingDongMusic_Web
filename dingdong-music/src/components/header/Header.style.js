import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
  z-index: 30;
`;

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const UserBox = styled.div`
  width: 144px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobileMenuBox = styled.div`
  display: none;
  position: absolute;
  top: 8px;
  right: 16px;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

export const MobileLoginButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
