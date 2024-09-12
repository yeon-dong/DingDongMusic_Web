import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate 추가
import {
  AddCartBtn,
  ArtistText,
  BackBtn,
  Container,
  DetailText,
  MainText,
  MusicDetailHeader,
  MusicIMG,
  MusicTitle,
} from "./MusicDetail.style";
import musics from "../../data/data"; // musics 데이터 가져오기

function MusicDetail() {
  const { id } = useParams(); // URL에서 id 추출
  const navigate = useNavigate(); // useNavigate 훅 사용
  const music = musics.find((music) => music.id === parseInt(id)); // 해당 음악 정보 찾기

  if (!music) {
    return (
      <Container>
        <MusicDetailHeader>
          <BackBtn src="/images/BackArrow.svg" />
          <MainText>노래를 찾을 수 없습니다.</MainText>
        </MusicDetailHeader>
      </Container>
    );
  }

  const handleBackClick = () => {
    navigate("/"); // '/' 경로로 이동
  };

  return (
    <Container>
      <MusicDetailHeader>
        <BackBtn src="/images/BackArrow.svg" onClick={handleBackClick} />
        <MainText>노래 상세보기</MainText>
      </MusicDetailHeader>
      <MusicIMG src={`/images/${music.musicImgSrc}`} />
      <MusicTitle>{music.musicName}</MusicTitle>
      <ArtistText>{music.artistName}</ArtistText>
      <DetailText>{music.description}</DetailText>
      <AddCartBtn>장바구니에 담기</AddCartBtn>
    </Container>
  );
}

export default MusicDetail;
