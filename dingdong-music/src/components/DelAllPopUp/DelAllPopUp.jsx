import React from "react";
import {
  BtnContainer,
  CancelBtn,
  Container,
  OkBtn,
  PopUpContainer,
  PopUpSubText,
  PopUpTitle,
} from "./DelAllPopUp.style";
import { useDispatch } from "react-redux";
import { clearCart, calculateTotals } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function DelAllPopUp({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const removeAllAlbums = () => {
    dispatch(clearCart());
    dispatch(calculateTotals());
    onClose(); // 팝업 닫기
  };
  if (!isOpen) return null; // 팝업이 열리지 않으면 아무것도 렌더링하지 않음
  return (
    <Container>
      <PopUpContainer>
        <PopUpTitle>⚠️ 장바구니를 비우시겠습니까? ⚠️</PopUpTitle>
        <PopUpSubText>장바구니에 넣은 모든 앨범들이 사라집니다.</PopUpSubText>
        <BtnContainer>
          <CancelBtn onClick={onClose}>아니오</CancelBtn>
          <OkBtn onClick={() => removeAllAlbums()}>네</OkBtn>
        </BtnContainer>
      </PopUpContainer>
    </Container>
  );
}

export default DelAllPopUp;
