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
  MusicCardInfoContainer,
  RemoveBtn,
  CartAmountMainText,
  CartAllAmountText,
  CartAllMoneyText,
  PaymentBtn,
  CartContainerWrapper,
  NoItemMessage,
} from "./CartBox.style";
import { useDispatch } from "react-redux";
import { removeItem, calculateTotals } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import DelAllPopUp from "../DelAllPopUp/DelAllPopUp";
import PaymentPopUp from "../PaymentPopUp/PaymentPopUp";

function CartBox() {
  const [isDelPopUpOpen, setDelPopUpOpen] = useState(false);
  const [isPaymentPopUpOpen, setPaymentPopUpOpen] = useState(false);
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

  const PaymentPopUpOpen = () => {
    setPaymentPopUpOpen(true);
  };

  const PaymentPopUpClose = () => {
    setPaymentPopUpOpen(false);
  };

  return (
    <>
      <Container>
        <CartHeader>
          <CartHeaderText>장바구니 목록</CartHeaderText>
          {items.length > 0 && (
            <CartResetBtn onClick={() => delPopUpOpen()}>
              장바구니 초기화
            </CartResetBtn>
          )}
        </CartHeader>
        <CartContainerWrapper>
          <CartContainer>
            <MusicListContainer>
              {items.map((item) => (
                <MusicCardContainer key={item.id}>
                  <MusicImg src={`/images/${item.musicImgSrc}`} />
                  <MusicCardInfoContainer>
                    <MusicTextWrap>
                      <MusicCardTitle>{item.musicName}</MusicCardTitle>
                      <MusicCardArtist>{item.artistName}</MusicCardArtist>
                      <MusicCardPrice>{`${item.price}원 ${item.amount}개`}</MusicCardPrice>
                    </MusicTextWrap>
                  </MusicCardInfoContainer>
                  <RemoveBtn
                    src="/images/X_button.svg"
                    onClick={() => removeMusic(item)}
                  />
                </MusicCardContainer>
              ))}
              {items.length === 0 && (
                <NoItemMessage>장바구니에 노래가 없습니다</NoItemMessage>
              )}
            </MusicListContainer>
          </CartContainer>
        </CartContainerWrapper>
        {items.length > 0 && (
          <CartInfoContainer>
            <CartAmountMainText>장바구니에 담은 노래</CartAmountMainText>
            <CartAllAmountText>총 {totalAlbums} 개의 노래</CartAllAmountText>
            <CartAllMoneyText>총 가격: {totalAmount}원</CartAllMoneyText>
            <PaymentBtn onClick={() => PaymentPopUpOpen()}>결제하기</PaymentBtn>
          </CartInfoContainer>
        )}
      </Container>
      <DelAllPopUp isOpen={isDelPopUpOpen} onClose={delPopUpClose} />
      <PaymentPopUp
        isOpen={isPaymentPopUpOpen}
        onClose={PaymentPopUpClose}
      ></PaymentPopUp>
    </>
  );
}

export default CartBox;
