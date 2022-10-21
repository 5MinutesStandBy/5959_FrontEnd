import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <PostContainer>
        <PostList></PostList>
      </PostContainer>
    </>
  );
};

export default Posts;

const PostContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  background-color: beige;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 70vh;
  background-color: lightgray;
`;
