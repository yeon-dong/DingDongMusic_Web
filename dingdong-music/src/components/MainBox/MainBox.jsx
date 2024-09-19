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
import { addPlaylist, setSelectedIndex } from "../../redux/playlistSlice";
import { useDispatch } from "react-redux";
import { setPlayingMusic, resetMusic } from "../../redux/playingMusicSlice";

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
    dispatch(setPlayingMusic(music));
    dispatch(resetMusic());
    dispatch(setSelectedIndex());
    console.log(music);
  };

  return (
    <Container>
      <ContentWrapper>
        <MainText>인기 아티스트</MainText>
        <MusicContainer>
          <Swiper
            slidesPerView={3}
            breakpoints={{
              260: {
                slidesPerView: 3,
              },
              440: {
                slidesPerView: 4,
              },
              620: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 3,
              },
              1060: {
                slidesPerView: 4,
              },
              1240: {
                slidesPerView: 5,
              },
              1420: {
                slidesPerView: 6,
              },
              1600: {
                slidesPerView: 7,
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
            slidesPerView={3}
            breakpoints={{
              260: {
                slidesPerView: 3,
              },
              440: {
                slidesPerView: 4,
              },
              620: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 3,
              },
              1060: {
                slidesPerView: 4,
              },
              1240: {
                slidesPerView: 5,
              },
              1420: {
                slidesPerView: 6,
              },
              1600: {
                slidesPerView: 7,
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
        </AlbumContainer>
      </ContentWrapper>
    </Container>
  );
}

export default MainBox;
