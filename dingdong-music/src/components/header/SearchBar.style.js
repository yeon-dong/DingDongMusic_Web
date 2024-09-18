import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 474px;
  height: 48px;
  background-color: var(--primary-color);
  border-radius: 24px;

  input {
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    outline: none;
    font-size: 18px;
    padding-left: 48px;
    padding-right: 56px;
    border-radius: 24px;
    transition: outline 0.1s;
    cursor: pointer;

    &:focus {
      outline: 2px solid white;
    }
  }

  input::placeholder {
    color: var(--primary-color2);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color2);
`;

export const CartButtonWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  width: 48px;
  height: 48px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
