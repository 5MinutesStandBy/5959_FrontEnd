import React, { useState } from "react";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";

const Mypage = () => {
  const [open, setOpen] = useState(false);

  return (
    <BodyContainer>
      <StContainer>
        <StTitle open={!open} onClick={() => setOpen(!open)}>
          좋아요 한 포스트
        </StTitle>
        {open === false ? <StContent>좋아요한 무언가</StContent> : null}
        <StTitle left="220px" open={open} onClick={() => setOpen(!open)}>
          내 댓글
        </StTitle>
        {open ? <StContent>댓글쓴 무언가</StContent> : null}
      </StContainer>
    </BodyContainer>
  );
};

export default Mypage;

const StContainer = styled.div`
  position: absolute;
  width: 800px;
  background-color: aqua;
  top: 20px;
  margin: 0 auto;
  background-color: green;
`;

const StTitle = styled.div`
  width: 200px;
  height: ${({ open }) => (open ? "28px" : "26px")};
  background-color: aliceblue;
  position: absolute;
  left: ${(props) => props.left};
  font-size: 20px;
  text-align: center;
  color: black;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;
  border-width: ${({ open }) => (open ? "2px 2px 10px 2px" : "2px")};
  /* border-width: 2px 2px 10px 2px; */
  border-bottom: ${({ open }) => (open ? "aliceblue" : null)};
  z-index: 8;
  cursor: pointer;
  :hover {
    background-color: black;
    color: aliceblue;
  }
`;

const StContent = styled.div`
  background-color: aliceblue;
  position: absolute;
  align-self: center;
  width: 100%;
  min-height: 500px;
  height: auto;
  top: 28px;
  left: ${(props) => props.left};
  font-size: 20px;
  text-align: center;
  border: 2px solid black;
  border-radius: 0 10px 10px 10px;
`;
