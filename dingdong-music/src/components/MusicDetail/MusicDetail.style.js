import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MusicDetailInfo = styled.div`
  position: relative;
  background-color: rgb(208, 48, 48);
`;

export const MusicDetailHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 64px;
`;

export const BackBtn = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const MusicDetailContent = styled.div`
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
  position: relative;
  padding: 16px;
`;

export const MusicPrimaryInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const MusicDetailText = styled.div`
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`;

export const MainText = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
`;

export const MusicIMG = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

export const MusicTitle = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const ArtistText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: regular;
  display: flex;
`;

export const MusicDescription = styled.div`
  color: white;
  font-size: 16px;
`;

export const RecommendContainer = styled.div`
  background-color: rgb(208, 48, 48);
  margin-bottom: 32px;
`;

export const RecommendContent = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.6) 0,
    var(--primary-color) 90%,
    var(--primary-color) 100%
  );
  padding: 16px;
  padding-top: 16px;
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
  bottom: 0;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 20;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;

export const AddCartButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0);
  outline: none;
  display: flex;
  justift-content: center;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
