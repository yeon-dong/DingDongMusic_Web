import { styled } from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
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

export const PopUpContainer = styled.div`
  width: 100%; //반응형 이기 때문에 가로값은 100%
  height: 100%;
  max-height: 200px;
  max-width: 400px; //팝업의 최대 크기지정
  border-radius: 12px; //둥글둥글한 디자인을 위해 각을 없앱니다.
  overflow: hidden; //각을 없앴을 때 내부 영역이 튀어나오는걸 방지
  background-color: white; //배경색
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopUpTitle = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const PopUpSubText = styled.div`
  color: var(--primary-color2);
  font-size: 20px;
  font-weight: regular;
  margin-bottom: 30px;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const OkBtn = styled.button`
  background-color: blue;
  color: black;
  font-size: 20px;
  font-weight: regular;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  &:hover {
    border: 2px solid black;
    color: white;
  }
`;

export const CancelBtn = styled.button`
  width: 120px;
  height: 40px;
  border: 2px solid black;
  color: black;
  font-size: 20px;
  font-weight: regular;
  border-radius: 8px;
  &:hover {
    border-color: var(--primary-color2);
    color: var(--primary-color2);
  }
`;
