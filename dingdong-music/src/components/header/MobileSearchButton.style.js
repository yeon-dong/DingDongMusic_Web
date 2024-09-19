import styled from "styled-components";

export const Container = styled.div`
  button {
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
  }
`;

export const SearchIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    color: white;
  }
`;

export const SearchBarContainer = styled.div`
  display: ${(props) => (props.$isShow ? "block" : "none")};
  position: fixed;
  top: 64px;
  left: 0;
  width: 100vw;
  height: 64px;
  background-color: black;
  padding: 8px 8px;
  z-index: 20;
`;
