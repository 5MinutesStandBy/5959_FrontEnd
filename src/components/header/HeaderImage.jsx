import React from "react";
import styled from "styled-components";
import hdimg from "../../images/배경수정2.png";

export const HeaderImage = () => {
  return <HdImg src={hdimg}></HdImg>;
};

const HdImg = styled.img`
  src: ${(props) => props.src};
  width: 100%;
  position: absolute;
  top: 120px;
`;
