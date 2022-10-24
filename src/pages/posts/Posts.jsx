import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";
import { __getPosts } from "../../redux/modules/postsSlice";
import Loading from "../../components/posts/Loading";
import noteBg from "../../static/images/노트배경2.png";
import Post from "../../components/posts/Post";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const [addModal, setAddModal] = useState(false);

  const showAddModal = () => {
    setAddModal(true);
  };

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
      <BgImg src={noteBg} />
      <PostBtn onClick={showAddModal}>칭찬글 남기기</PostBtn>
      <PostList>
        {posts.map((post) => (
          <>
            <Post key={post.id} post={post}></Post>
          </>
        ))}
      </PostList>
    </BodyContainer>
  );
};

export default Posts;

const BgImg = styled.img`
  src: ${(props) => props.src};
  position: absolute;
  top: 40px;
  width: 100%;
  min-width: 800px;
  height: auto;
  min-height: 870px;
  max-height: 1500px;
  /* transform: translate(0%, 0%); */
`;

const PostBtn = styled.button`
  position: absolute;
  padding: 5px 15px;
  top: 40px;
  right: 10%;
  width: 200px;
  background-color: #fff;
  color: #ff6600;
  border: 2px solid #ff6600;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  border-radius: 10px;
  transition: 0.4s;
  :hover {
    background-color: #ff6600;
    color: #fff;
  }
  font-family: "Y_Spotlight";
`;

const PostList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 120px;
  width: 80%;
  height: auto;
  overflow: auto;
`;
