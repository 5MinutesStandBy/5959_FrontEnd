import React from "react";
import styled from "styled-components";
import babyOgu from "../../static/images/하트아기오구2.png";

const Navbar = () => {
  return (
    <StNav>
      <StImg src={babyOgu} />
      <StTitle>OGU OGU</StTitle>
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
  font-family: "CWDangamAsac-Bold";
  font-size: 40px;
  font-weight: 700;
  color: yello;
  position: absolute;
  top: 15px;
  left: 50px;
  /* background-color: yellow; */
`;

const StImg = styled.img`
  src: ${(props) => props.src};
  height: 70px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: 0;
  z-index: 10;
`;

export default Navbar;
