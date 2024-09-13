import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlbumContainer,
  AlbumImg,
  Container,
  ContentWrapper,
  MainText,
  MainText2,
  MusicContainer,
  MusicImg,
  MusicImgContainer,
  MusicInfoContainer,
  MusicMainText,
  MusicPlayBtn,
  MusicPlayIcon,
  MusicSubText,
} from "./MainBox.style";
import musics from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { addPlaylist } from "../../redux/playlistSlice";
import { useDispatch } from "react-redux";

function MainBox() {
  const dispatch = useDispatch();
  const albumSwiperRef = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const timer = setTimeout(() => {
      if (albumSwiperRef.current) {
        albumSwiperRef.current.swiper.autoplay.start();
      }
    }, 1000); // 0.5초 후에 autoplay 시작

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const handleMusicClick = (id) => {
    navigate(`/music/${id}`); // 음악 ID를 사용하여 MusicDetail로 이동
  };

  const handlePlaylistClick = (music) => {
    console.log("플레이리스트로");
    dispatch(addPlaylist(music));
    console.log(music);
  };

  return (
    <Container>
      <ContentWrapper>
        <MainText>인기 아티스트</MainText>
        <MusicContainer>
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {musics.map((music) => (
              <SwiperSlide key={music.id}>
                <MusicInfoContainer>
                  <MusicImgContainer onClick={() => handleMusicClick(music.id)}>
                    <MusicImg src={`/images/${music.musicImgSrc}`} />
                    <MusicPlayBtn
                      onClick={(event) => {
                        event.stopPropagation();
                        handlePlaylistClick(music);
                      }}
                    >
                      <MusicPlayIcon src="/images/Vector.svg" />
                    </MusicPlayBtn>
                  </MusicImgContainer>
                  <MusicMainText onClick={() => handleMusicClick(music.id)}>
                    {music.musicName}
                  </MusicMainText>
                  <MusicSubText onClick={() => handleMusicClick(music.id)}>
                    {music.artistName}
                  </MusicSubText>
                </MusicInfoContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </MusicContainer>
        <MainText2>인기 앨범</MainText2>
        <AlbumContainer>
          <Swiper
            ref={albumSwiperRef} // ref 추가
            slidesPerView={6}
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {musics.map((music) => (
              <SwiperSlide key={music.id}>
                <MusicInfoContainer>
                  <MusicImgContainer onClick={() => handleMusicClick(music.id)}>
                    <AlbumImg src={`/images/${music.musicImgSrc}`} />
                    <MusicPlayBtn
                      onClick={(event) => {
                        event.stopPropagation();
                        handlePlaylistClick();
                      }}
                    >
                      <MusicPlayIcon src="/images/Vector.svg" />
                    </MusicPlayBtn>
                  </MusicImgContainer>
                  <MusicMainText onClick={() => handleMusicClick(music.id)}>
                    {music.musicName}
                  </MusicMainText>
                  <MusicSubText onClick={() => handleMusicClick(music.id)}>
                    {music.artistName}
                  </MusicSubText>
                </MusicInfoContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </AlbumContainer>
      </ContentWrapper>
    </Container>
  );
}

export default MainBox;
