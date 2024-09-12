import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
`;

export const MusicDetailHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 26px;
  margin-left: 23px;
  margin-bottom: 12px;
`;

export const BackBtn = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const MainText = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
`;

export const MusicIMG = styled.img`
  width: 241px;
  height: 241px;
  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 12px;
`;

export const MusicTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ArtistText = styled.div`
  color: var(--primary-color2);
  font-size: 26px;
  font-weight: regular;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const DetailText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: regular;
  margin-left: 48px;
  margin-bottom: 40px;
`;

export const AddCartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  width: 233px;
  height: 65px;
  color: black;
  font-size: 24px;
  font-weight: normal;
  border-radius: 50px;
  position: absolute;
  right: 8px;
  bottom: 19px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;
