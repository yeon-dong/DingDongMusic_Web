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
import { removeItem, clearCart, calculateTotals } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function CartBox() {
  const dispatch = useDispatch();
  const { items, totalAlbums, totalAmount } = useSelector(
    (state) => state.cart
  );
  const removeAllAlbums = () => {
    dispatch(clearCart());
    dispatch(calculateTotals());
  };

  const removeMusic = (music) => {
    dispatch(removeItem(music));
    dispatch(calculateTotals());
  };

  return (
    <Container>
      <CartHeader>
        <CartHeaderText>장바구니 목록</CartHeaderText>
        {items.length > 0 && (
          <CartResetBtn onClick={() => removeAllAlbums()}>
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
          <PaymentBtn>결제하기</PaymentBtn>
        </CartInfoContainer>
      )}
    </Container>
  );
}

export default CartBox;
