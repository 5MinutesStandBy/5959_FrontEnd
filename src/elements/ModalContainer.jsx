import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 550px;
  height: 250px;
  position: absolute;
  top: 26%;
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
