import React from "react";
import styled from "styled-components";
import babyOgu from "../../static/images/하트아기오구2.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  // const nav = () => {
  //   if(localStorage.token !== ''){
  //     navigate("/boards")
  //   }else{
  //     navigate('')
  //   }
  // }

  return (
    <>
    <StNav onClick={() => navigate("/")}>
      <StImg src={babyOgu} />
      <StTitle>OGU OGU</StTitle>
    </StNav>
    <div>sdsdsdsd</div>
    </>
    //토큰 있는 경우 로그아웃 버튼
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
  cursor: pointer;
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
  cursor: pointer;
`;

export default Navbar;
