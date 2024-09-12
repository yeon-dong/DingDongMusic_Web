import { styled } from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserBox = styled.div`
  width: 144px;
  display: flex;
  justify-content: flex-end;
`;
