import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import kingOgu from "../../static/images/왕관오구.png";
import { __deletePosts } from "../../redux/modules/postsSlice";
import UpdatePost from "../../components/posts/UpdatePost";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 나중에 유저명으로 삭제 제한시 유저명 받아와서 지정해주기
  const user1 = "bora";

  return (
    <>
      <StPost key={post.id}>
        <PostImg src={kingOgu}></PostImg>
        <PostTitle>{post.name} 님을 칭찬합니다 왇</PostTitle>
        <Postdesc>{post.desc}</Postdesc>
        <OpenCommentBtn
          onClick={() => {
            navigate(`/boards/${post.id}`);
          }}
        >
          상세 보기
        </OpenCommentBtn>
        {post.user === user1 ? (
          <DelBtn onClick={() => dispatch(__deletePosts(post.id))}>삭제</DelBtn>
        ) : null}
      </StPost>
    </>
  );
};

export default Post;

const StPost = styled.div`
  position: relative;
  width: 80%;
  min-width: 600px;
  min-height: 200px;
  /* height: auto; */
  background-color: white;
  margin: 20px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px grey;
`;

const PostImg = styled.img`
  src: ${(props) => props.src};
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid #b8b8b8;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: 40px;
`;

const PostTitle = styled.div`
  position: absolute;
  top: 25px;
  left: 180px;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 20px;
`;

const Postdesc = styled.div`
  position: absolute;
  top: 70px;
  left: 180px;
  font-size: 1.2rem;
  margin: 30px 0 20px 20px;
`;

const DelBtn = styled.button`
  position: absolute;
  padding: 5px;
  top: 150px;
  right: 15px;
  width: 50px;
  background-color: #fff;
  color: #e27575;
  border: 2px solid #e27575;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  border-radius: 10px;
  transition: 0.4s;
  :hover {
    background-color: red;
    color: #fff;
    border-color: red;
  }
  font-family: "Y_Spotlight";
`;

const OpenCommentBtn = styled.button`
  position: absolute;
  top: 150px;
  left: 185px;
  width: 100px;
  background-color: #fff;
  color: #65676b;
  border: 0px transparent;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  border-radius: 10px;
  transition: 0.4s;
  :hover {
    color: black;
  }
  font-family: "Y_Spotlight";
`;
