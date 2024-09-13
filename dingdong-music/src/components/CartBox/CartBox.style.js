import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const CartHeader = styled.div`
  padding-top: 26px;
  margin-left: 32px;
  margin-bottom: 15px;
  width: 591px;
  display: flex;
  justify-content: space-between;
`;

export const CartHeaderText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const CartResetBtn = styled.div`
  background-color: white;
  color: red;
  font-size: 24px;
  border: 2px solid red;
  border-radius: 50px;
  cursor: pointer;
  width: 190px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartContainer = styled.div`
  position: relative;
  margin-left: 32px;
  width: 96%;
  height: 85%;
`;

export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartInfoContainer = styled.div`
  background-color: #d9d9d9;
  border-radius: 12px;
  position: absolute;
  width: 411px;
  height: 161px;
  bottom: 0;
  right: 0;
`;

export const MusicCardContainer = styled.div`
  display: flex;
  width: 591px;
  height: 80px;
  margin-bottom: 16px;
`;

export const MusicImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 16px;
  margin-padding: 16px;
`;

export const MusicTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 340px;
`;

export const MusicCardTitle = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const MusicCardArtist = styled.div`
  color: var(--primary-color2);
  font-size: 24px;
`;

export const MusicCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MusicCardAmountAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 16px;
`;

export const MusicCardPrice = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const MusicCardAmount = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const RemoveBtn = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 24px;
  cursor: pointer;
`;

export const CartAmountMainText = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const CartAllAmountText = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const CartAllMoneyText = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
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
