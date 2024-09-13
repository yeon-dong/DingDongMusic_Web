import React from "react";
import {
  CartContainer,
  CartHeader,
  CartHeaderText,
  CartInfoContainer,
  CartResetBtn,
  Container,
  MusicCardArtist,
  MusicCardContainer,
  MusicCardTitle,
  MusicImg,
  MusicTextWrap,
  MusicListContainer,
  MusicCardPrice,
} from "./CartBox.style";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";

function CartBox() {
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(addItem(item.id));
  };

  return (
    <Container>
      <CartHeader>
        <CartHeaderText>장바구니 목록</CartHeaderText>
        <CartResetBtn>장바구니 초기화</CartResetBtn>
      </CartHeader>
      <CartContainer>
        <MusicListContainer>
          <MusicCardContainer>
            <MusicImg />
            <MusicTextWrap>
              <MusicCardTitle>이잉</MusicCardTitle>
              <MusicCardArtist>히이잉</MusicCardArtist>
            </MusicTextWrap>
            <MusicCardPrice>23000원</MusicCardPrice>
          </MusicCardContainer>
        </MusicListContainer>
        <CartInfoContainer></CartInfoContainer>
      </CartContainer>
    </Container>
  );
}

export default CartBox;
