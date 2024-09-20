import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);

  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px;
`;
