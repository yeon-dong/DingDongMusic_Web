import styled from "styled-components";

export const Container = styled.button`
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
