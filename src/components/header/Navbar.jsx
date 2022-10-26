import React from "react";
import styled from "styled-components";
import babyOgu from "../../static/images/하트아기오구2.png";
import { useNavigate } from "react-router-dom";
import { CommonBtn } from "../../components/elements/CommonBtn";
import { useDispatch } from "react-redux";
import logoutUser from "../../redux/modules/signinSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const ToMypage = () => {
    navigate("/mypage");
  };
  const ToHome = () => {
    navigate("/");
  };

  const logoutHandler = () => {
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh-token");
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <StNav>
      <StImg src={babyOgu} onClick={ToHome} />
      <StTitle onClick={ToHome}>OGU OGU</StTitle>
      {token ? (
        <>
          <CommonBtn
            color="black"
            fs="18px"
            top="20px"
            right="110px"
            onClick={ToMypage}
          >
            마이페이지
          </CommonBtn>
          <CommonBtn
            color="black"
            fs="18px"
            top="20px"
            right="20px"
            onClick={logoutHandler}
          >
            로그아웃
          </CommonBtn>
        </>
      ) : null}
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
