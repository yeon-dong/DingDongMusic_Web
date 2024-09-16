import { styled, keyframes, css } from "styled-components";

export const ProgressBar = styled.div`
  width: 325px;
  margin: 0 auto;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px;
`;

export const ProgressCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.3s ease;
  ${(props) =>
    props.$isPushed &&
    css`
      animation: ${moveRight} 5s forwards;
    `}
`;

const moveRight = keyframes`
  from {
    left: 0;
  }
  to {
    left: 95%;
  }
`;
