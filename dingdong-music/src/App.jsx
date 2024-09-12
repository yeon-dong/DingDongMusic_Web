import { AppContainer, Content, MainSection, SideSection } from "./App.style";
import Header from "./components/Header/header";
import MainBox from "./components/MainBox/MainBox";

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Content>
          <SideSection>{/* Play Box */}</SideSection>
          <MainSection>
            <MainBox />
          </MainSection>
        </Content>
      </AppContainer>
    </>
  );
}

export default App;
