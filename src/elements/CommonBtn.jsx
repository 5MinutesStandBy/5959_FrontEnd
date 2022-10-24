import styled from "styled-components";

export const CommonBtn = styled.button`
  position: absolute;
  padding: 5px;
  border-radius: 10px;

  //font
  font-family: "Y_Spotlight";
  font-size: ${({ fs }) => (fs ? fs : "15px")};
  font-weight: 700;
  text-align: center;

  //size
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  box-sizing: border-box;

  //위치
  top: ${({ top }) => (top ? top : "")};
  right: ${({ right }) => (right ? right : "")};
  left: ${({ left }) => (left ? left : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};

  //배경
  background-color: ${({ bc }) => (bc ? bc : "#fff")};
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-size: contain;
  background-repeat: no-repeat;

  //테두리, 글자색 같게
  border: 2px solid ${({ color }) => (color ? color : "")};
  color: ${({ color }) => (color ? color : "")};

  margin: ${({ mg }) => (mg ? mg : "")};
  box-shadow: ${({ bs }) => (bs ? bs : "")};
  cursor: pointer;
  transition: 0.4s;

  //호버
  :hover {
    background-color: ${({ color }) => (color ? color : "")};
    color: #fff;
    border-color: ${({ color }) => (color ? color : "")};
  }
`;
