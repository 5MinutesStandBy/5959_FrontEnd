import React from "react";
import styled from "styled-components";
import oguNavImg from "../../images/오구등장.png";
import { HeaderImage } from "./HeaderImage";

const Navbar = () => {
  return (
    <StNav>
      <StImg src={oguNavImg} />
      <StTitle>오 구 오 구</StTitle>
    </StNav>
  );
};

const StNav = styled.nav`
  width: 100%;
  min-width: 300px;
  height: 80px;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0px grey;
`;

const StTitle = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  margin: 10px 0 0 45%;
  top: 5px;
`;

const StImg = styled.img`
  src: ${(props) => props.src};
  height: 98px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: 0;
`;

export default Navbar;
