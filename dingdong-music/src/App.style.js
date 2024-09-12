import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: blue;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const SideSection = styled.div`
  flex-basis: 420px;
  height: 100%;
  background-color: yellow;

  @media screen and (max-width: 800px) {
    flex-basis: 100px;
    flex-shrink: 0;
  }
`;

export const MainSection = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: green;
`;
