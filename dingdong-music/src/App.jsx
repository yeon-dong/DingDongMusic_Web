import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContainer, Content, MainSection, SideSection } from "./App.style";
import Header from "./components/Header/Header";
import MainBox from "./components/MainBox/MainBox";
import PlayBox from "./components/PlayBox/PlayBox";
import MusicDetail from "./components/MusicDetail/MusicDetail";
import CartBox from "./components/CartBox/CartBox";
import SearchBox from "./components/SearchBox/SearchBox";
import MapBox from "./components/MapBox/MapBox";

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
                <Route path="/search" element={<SearchBox />} />
                <Route path="/search/:keyword" element={<SearchBox />} />
                <Route path="/music/:id" element={<MusicDetail />} />
                <Route path="/cart" element={<CartBox />} />
                <Route path="/map" element={<MapBox />} />
              </Routes>
            </MainSection>
          </Content>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
