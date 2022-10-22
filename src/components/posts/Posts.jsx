import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {});

  return (
    <>
      <PostContainer>
        <PostList>
          <Post>
            <PostTitle> 님을 칭찬합니다</PostTitle>
          </Post>
          <Post>
            <PostTitle> 님을 칭찬합니다</PostTitle>
          </Post>
        </PostList>
      </PostContainer>
    </>
  );
};

export default Posts;

const PostContainer = styled.div`
  position: fixed;
  margin: 120px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 80%;
  background-color: beige;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 80%;
  min-height: 70vh;
  background-color: lightgray;
`;

const Post = styled.div`
  width: 100%;
  min-height: 20vh;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px grey;
`;

const PostTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;
