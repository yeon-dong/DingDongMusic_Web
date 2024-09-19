import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 26px;
  position: relative;
`;

export const CartHeader = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CartHeaderText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
`;

export const CartResetBtn = styled.div`
  background-color: white;
  color: red;
  font-size: 18px;
  border: 2px solid red;
  border-radius: 50px;
  cursor: pointer;
  padding: 0 8px;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartContainerWrapper = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 160px;
`;

export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartInfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  position: absolute;
  width: 100%;
  height: 120px;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(2px);
  animation: slide-up 0.5s;

  @keyframes slide-up {
    0% {
      bottom: -120px;
    }

    100% {
      bottom: 0;
    }
  }
`;

export const MusicCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 16px;
`;

export const MusicImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 16px;
  margin-padding: 16px;
  object-fit: cover;
`;

export const MusicTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0;
  overflow-x: hidden;

  @media screen and (max-width: 850px) {
    padding: 16px 0;
  }

  @media screen and (max-width: 800px) {
    padding: 8px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 16px 0;
  }
`;

export const MusicCardTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 920px) {
    font-size: 15px;
  }

  @media screen and (max-width: 850px) {
    font-size: 13px;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const MusicCardArtist = styled.div`
  color: var(--primary-color2);
  font-size: 20px;

  @media screen and (max-width: 920px) {
    font-size: 15px;
  }

  @media screen and (max-width: 850px) {
    font-size: 13px;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const MusicCardPrice = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 920px) {
    font-size: 14px;
  }

  @media screen and (max-width: 850px) {
    font-size: 12px;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const MusicCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RemoveBtn = styled.img`
  width: 25px;
  height: 100%;
  cursor: pointer;
  flex-shrink: 0;
`;

export const CartAmountMainText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 16px;
`;

export const CartAllAmountText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 0 16px;
`;

export const CartAllMoneyText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 0 16px;
`;

export const PaymentBtn = styled.div`
  background-color: white;
  width: 140px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding: 12px 0px 0px 25px;
  cursor: pointer;
`;

export const NoItemMessage = styled.div`
  width: 100%;
  height: 200px;
  color: var(--primary-color2);
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
