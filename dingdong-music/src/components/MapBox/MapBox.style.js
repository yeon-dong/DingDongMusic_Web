import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--primary-color);
`;

export const MapBoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  margin-bottom: 20px;
  padding-left: 32px; /* 왼쪽에서 32px 떨어짐 */
`;

export const HeaderText = styled.h2`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`;

export const ContextWrapper = styled.div`
  margin-top: 64px;
  width: 860px; /* 전체 너비: MapContainer + SearchWrapper + 간격 + 패딩 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬로 설정 */
  padding-left: 32px; /* 왼쪽 여백을 맞춰줌 */
`;

export const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start; /* 왼쪽 정렬로 설정 */
  padding-left: 0; /* ContextWrapper와 동일한 패딩 설정 */
  gap: 6px; /* 지도와 검색창, 친구 목록 사이 간격 설정 */
`;

export const ContextText = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`;

export const MapContainer = styled.div`
  width: 460px; /* 수정된 너비 */
  height: 400px; /* 수정된 높이 */
  position: relative;
  overflow: hidden;
  background-color: var(--primary-color);
`;

export const SearchWrapper = styled.div`
  width: 250px; /* 너비를 50px 줄임 */
  height: 400px; /* 수정된 높이 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* 위아래 요소에 공간 분배 */
  background-color: white; /* 배경색을 흰색으로 설정 */
  padding: 10px; /* 내부 여백 설정 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  border: 1px solid #e0e0e0; /* 경계선 추가 */
`;

export const SearchTitle = styled.h4`
  color: #333;
  margin-bottom: 10px;
`;

export const SearchInputContainer = styled.div`
  display: flex; /* input과 버튼을 한 줄로 배치 */
  width: 100%; /* 검색창 전체 너비 */
  margin-bottom: 10px; /* 하단 여백 */
`;

export const SearchInput = styled.input`
  flex: 1; /* input이 버튼을 제외한 나머지 공간을 차지 */
  padding: 5px;
  margin-right: 5px; /* 버튼과의 간격 설정 */
  width: 140px; /* 버튼이 충분히 들어갈 수 있도록 너비 줄임 */
  border: 1px solid #e0e0e0; /* 경계선 추가 */
  border-radius: 5px; /* 모서리 둥글게 설정 */
`;

export const SearchButton = styled.button`
  background-color: #808080;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  &:hover {
    background-color: #87cefa;
  }
`;

export const SearchResultsList = styled.ul`
  flex: 1; /* 검색 결과가 남은 공간을 차지 */
  background-color: #f9f9f9; /* 배경색을 흰색으로 설정 */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #e0e0e0; /* 경계선 추가 */

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const SearchResultItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FriendListContainer = styled.div`
  width: 250px; /* 친구 목록의 너비를 250px로 늘림 */
  height: 400px; /* 친구 목록의 높이 */
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 스크롤바를 완전히 숨김 */
  border: 1px solid #e0e0e0; /* 경계선 추가 */
`;

export const FriendListTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const FriendList = styled.ul`
  margin-top: 10px;
  max-height: 340px; /* 친구 목록이 전체 높이를 차지하게 설정 */
  overflow-y: auto; /* ul 요소에서만 스크롤 */
  padding-right: 10px; /* 스크롤바가 겹치지 않도록 여백 추가 */
  margin-right: -10px; /* 오른쪽 여백 제거 */

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const FriendListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex; /* 수정 및 삭제 버튼과 함께 표시되도록 flexbox 사용 */
  flex-direction: column; /* 세로로 정렬 */

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FriendName = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const FriendActions = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const FriendActionButton = styled.button`
  background-color: #808080;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #87cefa;
  }
`;

export const AddFriendInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const AddFriendButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
