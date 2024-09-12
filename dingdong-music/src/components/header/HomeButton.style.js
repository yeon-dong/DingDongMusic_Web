import styled from "styled-components";

export const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color);
  cursor: pointer;
  color: var(--primary-color2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
