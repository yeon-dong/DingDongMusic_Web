import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 1000; /* 다른 요소보다 높은 z-index */
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
  max-height: 300px;
  max-width: 400px; //팝업의 최대 크기지정
  border-radius: 12px; //둥글둥글한 디자인을 위해 각을 없앱니다.
  overflow: hidden; //각을 없앴을 때 내부 영역이 튀어나오는걸 방지
  background-color: white; //배경색
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PopUpTitle = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const InputAndTextContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PopUpInputText = styled.div`
  font-size: 20px;
`;

export const PopUpInputID = styled.input`
  width: 200px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 4px;
`;

export const PopUpInputPW = styled.input`
  width: 200px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 4px;
`;

export const LoginBtn = styled.button`
  color: white;
  background-color: var(--primary-color);
  width: 200px;
  height: 40px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 12px;
  text-align: center;
  padding: 4px;
  margin-top: 32px;
  &:hover {
    background-color: var(--primary-color2);
    color: black;
    font-weight: bold;
  }
`;

export const CloseBtn = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;
