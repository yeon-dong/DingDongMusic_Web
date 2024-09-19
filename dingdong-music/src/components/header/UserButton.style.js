import styled from "styled-components";

export const Container = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
