import React from "react";
import styled from "styled-components";
import oguNavImg from "../../images/오구등장.png";

const Navbar = () => {
  return (
    <StNav>
      <StImg src={oguNavImg} />
      <StTitle>오 구 오 구</StTitle>
    </StNav>
  );
};

export default Navbar;

const StNav = styled.nav`
  width: 100%;
  height: 120px;
  position: fixed;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const StTitle = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  margin: 10px 0 0 45%;
  top: 30px;
`;

const StImg = styled.img`
  src: ${(props) => props.src};
  height: 140px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: 0;
`;
