import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  min-width: 1092px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const MainText = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding-top: 18px;
  margin-left: 32px;
`;

export const MainText2 = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 22px;
  margin-left: 32px;
`;

export const MusicContainer = styled.div`
  margin-top: 8px;
  margin-left: 12px;
  display: flex;
`;

export const MusicInfoContainer = styled.div`
  width: 180px;
  height: 235px;
  border-radius: 12px;
  background-color: transparent; /* 기본 배경색 설정 */
  transition: background-color 0.3s ease; /* 배경색 전환 애니메이션 추가 */
  &:hover {
    background-color: var(--primary-color4);
    transition: 0.3s;
  }
`;

export const MusicImgContainer = styled.div`
  position: relative;
`;

export const MusicImg = styled.img`
  cursor: pointer;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin-top: 10px;
  margin-left: 11px;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(10px); /* 시작 위치 (아래) */
    opacity: 0; /* 시작 시 투명 */
  }
  100% {
    transform: translateY(0); /* 최종 위치 (원래 위치) */
    opacity: 1; /* 최종 시 불투명 */
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0); /* 시작 위치 (원래 위치) */
    opacity: 1; /* 시작 시 불투명 */
  }
  100% {
    transform: translateY(10px); /* 최종 위치 (아래) */
    opacity: 0; /* 최종 시 투명 */
  }
`;

export const MusicPlayBtn = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 9px;
  width: 48px;
  height: 48px;
  background-color: var(--sub-color);
  border-radius: 100%;
  opacity: 0; /* 기본적으로 투명하게 설정 */
  visibility: hidden; /* 기본적으로 보이지 않게 설정 */
  transition: opacity 0.3s ease, visibility 0.3s ease; /* opacity와 visibility 전환 애니메이션 추가 */

  /* 마우스가 hover될 때 */
  ${MusicInfoContainer}:hover & {
    opacity: 1; /* 보이게 설정 */
    visibility: visible; /* 보이게 설정 */
    animation: ${slideUp} 0.3s ease forwards; /* 슬라이드 업 애니메이션 */
  }

  /* 마우스가 떠날 때 */
  ${MusicInfoContainer}:not(:hover) & {
    opacity: 0; /* 투명하게 설정 */
    visibility: hidden; /* 보이지 않게 설정 */
    animation: ${slideDown} 0.3s ease forwards; /* 슬라이드 다운 애니메이션 */
  }
`;

export const MusicPlayIcon = styled.img`
  position: absolute;
  top: 14px;
  left: 17px;
  width: 18px;
  height: 20px;
`;

export const MusicMainText = styled.h2`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-top: 11px;
  margin-left: 11px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1; /* 1줄로 제한 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 ... 표시 */
`;

export const MusicSubText = styled.h3`
  cursor: pointer;
  font-size: 14px;
  font-weight: regular;
  color: var(--primary-color2);
  margin-top: 10px;
  margin-left: 11px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1; /* 1줄로 제한 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 ... 표시 */
`;

export const AlbumContainer = styled.div`
  margin-top: 8px;
  margin-left: 12px;
  display: flex;
`;

export const AlbumImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 12px;
  margin-top: 10px;
  margin-left: 11px;
`;
