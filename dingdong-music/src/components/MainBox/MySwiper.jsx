import { Swiper, SwiperSlide } from "swiper/react";
import {
  AlbumImg,
  Container,
  MusicImg,
  MusicImgContainer,
  MusicInfoContainer,
  MusicMainText,
  MusicPlayBtn,
  MusicPlayIcon,
  MusicSubText,
  MySwiperTitle,
} from "./MySwiper.style";
import { Autoplay, Pagination } from "swiper/modules";
import musics from "../../data/data";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPlaylist, setSelectedIndex } from "../../redux/playlistSlice";
import { resetMusic, setPlayingMusic } from "../../redux/playingMusicSlice";

const MySwiper = ({ title, type, startDelay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleMusicClick = (id) => {
    navigate(`/music/${id}`); // 음악 ID를 사용하여 MusicDetail로 이동
  };

  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, startDelay); // 0.5초 후에 autoplay 시작

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

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
      <MySwiperTitle>{title}</MySwiperTitle>
      <Swiper
        ref={swiperRef}
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
                {type === "album" ? (
                  <AlbumImg src={`/images/${music.musicImgSrc}`} />
                ) : (
                  <MusicImg src={`/images/${music.musicImgSrc}`} />
                )}
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
    </Container>
  );
};

export default MySwiper;
