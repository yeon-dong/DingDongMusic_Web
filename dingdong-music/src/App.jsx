import { AppContainer, Content, MainSection, SideSection } from "./App.style";
import Header from "./components/Header/header";

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Content>
          <SideSection>{/* Play Box */}</SideSection>
          <MainSection>
            {/* by Router, Main Box, Map Box, Search List Box, ... */}
          </MainSection>
        </Content>
      </AppContainer>
    </>
  );
}

export default App;
