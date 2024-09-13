import styled from "styled-components";

export const Container = styled.div`
  button {
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
  }
`;

export const MenuIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: ${(props) => (props.$isShow ? "block" : "none")};
  position: fixed;
  top: 64px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: black;
  padding: 8px 8px;
  z-index: 20;
  overflow-y: auto;
`;

export const MenuList = styled.ul`
  width: 100%;

  li {
    width: 100%;
    height: 64px;
    border-bottom: 1px solid white;
    color: white;

    a,
    div {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 20px;
      padding-right: 30px;
    }
  }
`;
