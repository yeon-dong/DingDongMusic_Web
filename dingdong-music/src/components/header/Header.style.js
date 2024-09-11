import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.$red ? "red" : "blue")};
  width: 1000px;
`;
