import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BodyContainer } from "../../elements/BodyContainer";
import { __getPosts } from "../../redux/modules/postsSlice";
import Loading from "./Loading";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading === true) {
    return <Loading />;
  }

  if (error) {
    return <div>에러가 발생했어요ㅠㅠ</div>;
  }

  return (
    <BodyContainer>
      <PostList>
        {posts.map((post) => (
          <Post>
            <PostTitle>{post.target}님을 칭찬합니다</PostTitle>
            <Postdesc></Postdesc>
          </Post>
        ))}
      </PostList>
    </BodyContainer>
  );
};

export default Posts;

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

const Postdesc = styled.div`
  font-size: 1rem;
`;
