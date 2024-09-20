import React from "react";
import { Container, ContentWrapper } from "./MainBox.style";
import "swiper/css";
import "swiper/css/pagination";
import MySwiper from "./MySwiper";
import Footer from "./Footer";

function MainBox() {
  return (
    <Container>
      <ContentWrapper>
        <MySwiper title="인기 곡" startDelay={0} />
        <MySwiper title="인기 앨범" type="album" startDelay={500} />
        <MySwiper title="인기 플레이리스트" type="album" startDelay={1000} />
        <MySwiper title="인기 차트" type="album" startDelay={1500} />
      </ContentWrapper>
      <Footer />
    </Container>
  );
}

export default MainBox;
