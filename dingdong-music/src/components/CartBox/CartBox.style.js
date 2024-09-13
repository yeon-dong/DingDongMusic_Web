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
  margin-left: 32px;
  width: 96%;
  height: 85%;
  background-color: gray;
`;

export const MusicListContainer = styled.div``;
export const CartInfoContainer = styled.div``;

export const MusicCardContainer = styled.div`
  display: flex;
  width: 591px;
  height: 80px;
`;

export const MusicImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const MusicTextWrap = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const MusicCardPrice = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
