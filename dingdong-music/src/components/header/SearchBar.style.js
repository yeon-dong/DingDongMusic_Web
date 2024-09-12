import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 474px;
  height: 48px;
  border-radius: 24px;
  background-color: var(--primary-color);
  overflow: hidden;
  padding-left: 48px;
  padding-right: 56px;

  input {
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    outline: none;
    font-size: 18px;
  }

  input::placeholder {
    color: var(--primary-color2);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color2);
`;
