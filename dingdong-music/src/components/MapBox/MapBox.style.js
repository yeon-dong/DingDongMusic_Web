import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--primary-color);

  @media only screen and (max-width: 840px) {
    width: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;  /*IE, Edge*/
    scrollbar-width: none; /*Firefox*/
    ::-webkit-scrollbar {
      display: none; /*Chrome, Safari, Opera*/
      width: 0px;
    } 
  }
`;

export const MapBoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; /
  margin-bottom: 20px;
  padding-left: 32px; 

  @media only screen and (max-width: 1300px){
    padding-left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderText = styled.h2`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`;

export const ContextWrapper = styled.div`
  margin-top: 64px;
  width: 860px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 

  @media screen and (min-width: 840px) and (max-width: 1300px){
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 840px) {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start; 
  padding-left: 0; 
  gap: 6px; 

  @media screen and (min-width: 1100px) and (max-width: 1300px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media only screen and (max-width: 1100px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContextText = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const MapContainer = styled.div`
  width: 460px; 
  height: 400px;
  position: relative;
  overflow: hidden;
  background-color: var(--primary-color);

  @media only screen and (max-width: 1100px) {
    width: 90%;
    height: 360px;
    order: 1;
  }
`;

export const SearchWrapper = styled.div`
  width: 250px; 
  height: 400px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; 
  background-color: var(--primary-color2); 
  padding: 10px; 
  border-radius: 5px;
  
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const SearchTitle = styled.h4`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 8px;
`;

export const SearchInputContainer = styled.div`
  display: flex; 
  width: 100%;
  margin-bottom: 20px; 
`;

export const SearchInput = styled.input`
  flex: 1; 
  padding: 5px;
  margin-right: 5px; 
  width: 140px; 
  border: 1px solid #e0e0e0;
  border-radius: 5px; 
`;

export const SearchButton = styled.button`
  background-color: rgb(96, 165, 250);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap; 

  &:hover {
    background-color: rgb(37, 99, 235);
  }
`;

export const SearchResultsList = styled.ul`
  flex: 1;
  background-color: var(--primary-color2);
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  color: white;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; 
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const SearchResultItem = styled.li`
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color4);
  }
`;


export const SearchPlaceName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const SearchDetailAddress = styled.div`
  font-size: 12px;
`

export const FriendListContainer = styled.div`
  width: 250px; 
  height: 400px; 
  background-color: var(--primary-color2);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  border: 1px solid var(--primary-color2);

  @media only screen and (max-width: 1100px) {
    width: 90%;
    height: 200px;
    order: 2;
  }
`;

export const FriendListTitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 26px;
  margin-top: 8px;
`;

export const FriendList = styled.ul`
  margin-top: 10px;
  max-height: 340px; 
  overflow-y: auto; 
  padding-right: 10px; 
  margin-right: -10px; 

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; 
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const FriendListItem = styled.li`
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  color: white;

  &:hover {
    background-color: var(--primary-color4);
  }
`;

export const FriendName = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const FriendActions = styled.div`
  margin-left: 3px;
`;

export const FriendModifyButton = styled.button`
  background-color: rgb(96, 165, 250);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: rgb(37, 99, 235);
  }
`;

export const FriendDeleteButton = styled.button`
  background-color: rgb(239, 68, 68);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: rgb(220, 38, 38);
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
