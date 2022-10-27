import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";
import RandomImg from "../../components/elements/RandomImg";
import { __getMycomments, __getMyPosts } from "../../redux/modules/mypageSlice";

const Mypage = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const { isLoading, mycomments, myheart, myposts } = useSelector(
    (state) => state.myposts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMyPosts());
    dispatch(__getMycomments());
  }, [dispatch]);

  return (
    <BodyContainer>
      <StContainer>
        <StTitle
          open={open1}
          onClick={() => {
            setOpen1(true);
            setOpen2(false);
            setOpen3(false);
          }}
        >
          내 게시글
        </StTitle>
        {open1 ? (
          <StContent>
            {myposts.map((mypost) => (
              <StPost key={mypost.id} mheight="200px">
                <RandomImg />
                <PostTitle>{mypost.title}</PostTitle>
                <PostDesc>{mypost.content}</PostDesc>
              </StPost>
            ))}
          </StContent>
        ) : null}
        <StTitle
          left="220px"
          open={open2}
          onClick={() => {
            setOpen1(false);
            setOpen2(true);
            setOpen3(false);
          }}
        >
          내 댓글
        </StTitle>
        {open2 ? (
          <StContent>
            {mycomments.map((mycoment) => (
              <StPost key={mycoment.id} mheight="80px">
                <Stcomment>{mycoment.content}</Stcomment>
              </StPost>
            ))}
          </StContent>
        ) : null}
        {/* <StTitle
          left="440px"
          open={open3}
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(true);
          }}
        >
          좋아요 한 포스트
        </StTitle>
        {open3 ? <StContent>좋아요 한 무언가</StContent> : null} */}
      </StContainer>
    </BodyContainer>
  );
};

export default Mypage;

const StContainer = styled.div`
  position: absolute;
  width: 60%;
  min-width: 700px;
  top: 20px;
  margin: 0 auto;
`;

const StTitle = styled.div`
  width: 200px;
  height: ${({ open }) => (open ? "32px" : "28px")};
  background-color: aliceblue;
  position: absolute;
  top: 40px;
  left: ${(props) => props.left};
  font-size: 23px;
  text-align: center;
  color: black;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;
  border-width: ${({ open }) => (open ? "4px 4px 10px 4px" : "4px")};
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
  padding: 20px;
  position: absolute;
  align-self: center;
  width: 100%;
  min-height: 600px;
  height: auto;
  top: 72px;
  left: ${(props) => props.left};
  font-size: 20px;
  text-align: center;
  border: 4px solid black;
  border-radius: 0 10px 10px 10px;
`;

const StPost = styled.div`
  position: relative;
  width: 70%;
  min-width: 500px;
  min-height: ${(props) => props.mheight};
  /* height: auto; */
  background-color: white;
  margin: 20px auto 10px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px grey;
`;

const PostTitle = styled.div`
  position: absolute;
  top: 25px;
  left: 180px;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 20px;
`;

const PostDesc = styled.div`
  position: absolute;
  top: 70px;
  left: 180px;
  font-size: 1.2rem;
  margin: 30px 0 20px 20px;
`;

const Stcomment = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: 30px;
  width: 200px;
`;
