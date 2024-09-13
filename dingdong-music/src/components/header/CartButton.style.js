import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  right: 8px;
  top: 0;
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const CartIcon = styled.div`
  width: 100%;
  height: 100%;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Badge = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
