import React, { useState } from "react";
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
  MusicCardAmount,
  MusicCardAmountAndPriceContainer,
  MusicCardInfoContainer,
  RemoveBtn,
  CartAmountMainText,
  CartAllAmountText,
  CartAllMoneyText,
  PaymentBtn,
} from "./CartBox.style";
import { useDispatch } from "react-redux";
import { removeItem, clearCart, calculateTotals } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import DelAllPopUp from "../DelAllPopUp/DelAllPopUp";

function CartBox() {
  const [isDelPopUpOpen, setDelPopUpOpen] = useState(false);
  const dispatch = useDispatch();
  const { items, totalAlbums, totalAmount } = useSelector(
    (state) => state.cart
  );

  const removeMusic = (music) => {
    dispatch(removeItem(music));
    dispatch(calculateTotals());
  };

  const delPopUpOpen = () => {
    setDelPopUpOpen(true);
  };

  const delPopUpClose = () => {
    setDelPopUpOpen(false);
  };

  return (
    <>
      <Container>
        <CartHeader>
          <CartHeaderText>장바구니 목록</CartHeaderText>
          <CartResetBtn onClick={() => delPopUpOpen()}>
            장바구니 초기화
          </CartResetBtn>
        </CartHeader>
        <CartContainer>
          <MusicListContainer>
            {items.map((item) => (
              <MusicCardContainer key={item.id}>
                <MusicImg src={`/images/${item.musicImgSrc}`} />
                <MusicCardInfoContainer>
                  <MusicTextWrap>
                    <MusicCardTitle>{item.musicName}</MusicCardTitle>
                    <MusicCardArtist>{item.artistName}</MusicCardArtist>
                  </MusicTextWrap>
                  <MusicCardAmountAndPriceContainer>
                    <MusicCardAmount>{item.amount}개</MusicCardAmount>
                    <MusicCardPrice>{item.price} 원</MusicCardPrice>
                  </MusicCardAmountAndPriceContainer>
                </MusicCardInfoContainer>
                <RemoveBtn
                  src="/images/X_button.svg"
                  onClick={() => removeMusic(item)}
                />
              </MusicCardContainer>
            ))}
          </MusicListContainer>
          <CartInfoContainer>
            <CartAmountMainText>장바구니에 담은 노래</CartAmountMainText>
            <CartAllAmountText>총 {totalAlbums} 개의 노래</CartAllAmountText>
            <CartAllMoneyText>총 가격: {totalAmount}원</CartAllMoneyText>
            <PaymentBtn>결제하기</PaymentBtn>
          </CartInfoContainer>
        </CartContainer>
      </Container>
      <DelAllPopUp isOpen={isDelPopUpOpen} onClose={delPopUpClose} />
    </>
  );
}

export default CartBox;
