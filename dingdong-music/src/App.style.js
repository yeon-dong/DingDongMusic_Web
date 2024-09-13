import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  flex-grow: 1;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const SideSection = styled.div`
  width: 420px;
  height: 100%;
  padding-right: 4px;
  padding-bottom: 6px;
  padding-left: 6px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 20;
  }
`;

export const MainSection = styled.div`
  width: calc(100% - 420px);
  height: 100%;
  padding-right: 6px;
  padding-bottom: 6px;
  padding-left: 4px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding-bottom: 154px;
  }
`;
