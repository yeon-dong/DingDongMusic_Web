import React from "react";
import {
  Container,
  MainText,
  MainText2,
  MusicContainer,
  MusicImg,
  MusicInfoContainer,
  MusicMainText,
  MusicSubText,
} from "./MainBox.style";

function MainBox() {
  return (
    <Container>
      <MainText>인기 아티스트</MainText>
      <MusicContainer>
        <MusicInfoContainer>
          <MusicImg src="/images/newjeans.jpg" />
          <MusicMainText>NewJeans</MusicMainText>
          <MusicSubText>아티스트</MusicSubText>
        </MusicInfoContainer>
      </MusicContainer>
      <MainText2>인기 앨범</MainText2>
    </Container>
  );
}

export default MainBox;
