import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate 추가
import {
  AddCartBtn,
  ArtistText,
  BackBtn,
  Container,
  MusicDescription,
  MainText,
  MusicDetailContent,
  MusicDetailHeader,
  MusicDetailInfo,
  MusicDetailText,
  MusicIMG,
  MusicPrimaryInfo,
  MusicTitle,
  RecommendContainer,
  RecommendContent,
  AddCartButton,
} from "./MusicDetail.style";
import musics from "../../data/data"; // musics 데이터 가져오기
import { useDispatch } from "react-redux";
import { addItem, calculateTotals } from "../../redux/cartSlice";
import MySwiper from "../MainBox/MySwiper";

function MusicDetail() {
  const dispatch = useDispatch();
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

  const addMusicToCart = (music) => {
    dispatch(addItem(music));
    dispatch(calculateTotals());
    navigate("/cart"); // '/cart' 경로로 이동
  };

  return (
    <Container>
      <MusicDetailInfo>
        <MusicDetailHeader>
          <BackBtn src="/images/BackArrow.svg" onClick={handleBackClick} />
          <MainText>노래 상세보기</MainText>
        </MusicDetailHeader>
        <MusicDetailContent>
          <MusicPrimaryInfo>
            <MusicIMG src={`/images/${music.musicImgSrc}`} />
            <MusicDetailText>
              <MusicTitle>{music.musicName}</MusicTitle>
              <ArtistText>{music.artistName}</ArtistText>
            </MusicDetailText>
          </MusicPrimaryInfo>
          <MusicDescription>{music.description}</MusicDescription>
          <AddCartButton onClick={() => addMusicToCart(music)}>
            <img src="/images/cart-plus.svg" alt="add cart" />
          </AddCartButton>
        </MusicDetailContent>
      </MusicDetailInfo>
      <RecommendContainer>
        <RecommendContent>
          <MySwiper title="비슷한 곡" startDelay={0} />
        </RecommendContent>
      </RecommendContainer>

      <AddCartBtn onClick={() => addMusicToCart(music)}>
        장바구니에 담기
      </AddCartBtn>
    </Container>
  );
}

export default MusicDetail;
