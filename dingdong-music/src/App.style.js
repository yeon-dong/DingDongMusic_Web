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
  width: 420px;
  height: 100%;
  background-color: yellow;
  padding-right: 4px;
  padding-bottom: 6px;
  padding-left: 6px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100px;
  }
`;

export const MainSection = styled.div`
  width: calc(100% - 420px);
  height: 100%;
  background-color: green;
  padding-right: 6px;
  padding-bottom: 6px;
  padding-left: 4px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
