import React from "react";
import {
  Container,
  PopUpContainer,
  PopUpTitle,
  OkBtn,
  PopUpSubText,
  CancelBtn,
  BtnContainer,
  PopUpTotalText,
} from "./PaymentPopUp.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import { clearCart, calculateTotals } from "../../redux/cartSlice";

function PaymentPopUp({ isOpen, onClose }) {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const dispatch = useDispatch();

  const { totalAlbums, totalAmount } = useSelector((state) => state.cart);
  const handlePaymentClick = () => {
    dispatch(clearCart());
    dispatch(calculateTotals());
    navigate("/payment"); // '/' 경로로 이동
  };

  if (!isOpen) return null; // 팝업이 열리지 않으면 아무것도 렌더링하지 않음
  return (
    <Container>
      <PopUpContainer>
        <PopUpTitle>결제하기</PopUpTitle>
        <PopUpSubText>총 {totalAlbums}개의 앨범</PopUpSubText>
        <PopUpTotalText>결제 금액 : {totalAmount}원</PopUpTotalText>
        <BtnContainer>
          <CancelBtn onClick={onClose}>아니오</CancelBtn>
          <OkBtn onClick={() => handlePaymentClick()}>결제하기</OkBtn>
        </BtnContainer>
      </PopUpContainer>
    </Container>
  );
}

export default PaymentPopUp;
