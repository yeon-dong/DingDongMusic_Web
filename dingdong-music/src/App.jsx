import { AppContainer, Content, MainSection, SideSection } from "./App.style";
import Header from "./components/Header/header";
import MainBox from "./components/MainBox/MainBox";
import PlayBox from "./components/PlayBox/PlayBox";

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Content>
          <SideSection>
            <PlayBox></PlayBox>
          </SideSection>
          <MainSection>
            <MainBox />
          </MainSection>
        </Content>
      </AppContainer>
    </>
  );
}

export default App;
