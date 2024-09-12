import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContainer, Content, MainSection, SideSection } from "./App.style";
import Header from "./components/Header/Header";
import MainBox from "./components/MainBox/MainBox";
import PlayBox from "./components/PlayBox/PlayBox";
import MusicDetail from "./components/MusicDetail/MusicDetail";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <Router>
        <AppContainer>
          <Header />
          <Content>
            <SideSection>
              <PlayBox />
            </SideSection>
            <MainSection>
              <Routes>
                <Route path="/" element={<MainBox />} />
                <Route path="/search/:keyword" element={<SearchBox />} />
                <Route path="/music/:id" element={<MusicDetail />} />
              </Routes>
            </MainSection>
          </Content>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
