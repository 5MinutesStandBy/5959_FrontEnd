import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 600px;
  height: 400px;
  position: absolute;
  top: ${({ top }) => (top ? top : "26%")};
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "")};
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export default ModalContainer;
