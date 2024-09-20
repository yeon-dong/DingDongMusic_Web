import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: white;
  position: fixed; // 포지션 픽스, 화면이 스크롤되더라도 고정되기 위함
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; //모든 방향에 0을 주면 화면에 꽉차게 됩니다.
  display: flex;
  justify-content: center; //수평 중앙정렬
  align-items: center; //수직 중앙정렬
  //이벤트가 발생할 때 띄우기 위해 숨김
  //처음부터 보이게 하는 상황이라면 display:flex;
  padding: 15px;
  //반응형의 경우 padding이 없으면 박스가 화면에 붙어서 안이뻐짐
`;

export const TextContainer = styled.div`
  width: 100%; //반응형 이기 때문에 가로값은 100%
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.div`
  margin-top: 70px;
  color: black;
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const SubText = styled.div`
  color: var(--primary-color2);
  font-size: 26px;
  font-weight: regular;
  margin-bottom: 100px;
`;

const fadeToBlack = keyframes`
  0% {
    color: blue;
  }
  100% {
    color: black;
  }
`;

export const RedirectText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  color: black;
  &.changing {
    animation: ${fadeToBlack} 0.9s forwards;
  }
`;
