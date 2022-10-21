import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StNav>
      <img src="" alt="" />
      <StTitle>오구오구</StTitle>
    </StNav>
  );
};

export default Navbar;

const StNav = styled.nav`
  width: 100vw;
  height: 10vh;
  margin-bottom: 20px;
  background-color: aliceblue;
  position: relative;
`;

const StTitle = styled.div`
  font-size: 2rem;
  text-align: center;
`;
