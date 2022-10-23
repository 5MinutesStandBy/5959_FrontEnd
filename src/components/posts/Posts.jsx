import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BodyContainer } from "../../elements/BodyContainer";
import { __deletePosts, __getPosts } from "../../redux/modules/postsSlice";
import AddPost from "../modal/AddPost";
import Loading from "./Loading";
import loveOgu from "../../images/하트아기오구.png";
import kingOgu from "../../images/왕관오구.png";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
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
      <PostBtn onClick={showModal}>칭찬글 남기기</PostBtn>
      <PostList>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostImg src={kingOgu}></PostImg>
            <PostTitle>{post.target} 님을 칭찬합니다</PostTitle>
            <Postdesc>{post.desc}</Postdesc>
            <OpenCommentBtn>댓글 달기</OpenCommentBtn>
            <DelBtn onClick={() => dispatch(__deletePosts(post.id))}>
              삭제
            </DelBtn>
          </Post>
        ))}
        {modal && <AddPost setModal={setModal}></AddPost>}
      </PostList>
    </BodyContainer>
  );
};

export default Posts;

const PostBtn = styled.button`
  position: absolute;
  padding: 5px 15px;
  top: 40px;
  right: 10%;
  width: 150px;
  background-color: #fff;
  color: #ff6600;
  border: 2px solid #ff6600;
  font-size: 16px;
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
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  width: 80%;
  height: auto;
`;

const Post = styled.div`
  position: relative;
  width: 100%;
  min-width: 600px;
  min-height: 200px;
  background-color: white;
  margin-bottom: 10px;
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
  margin: 20px;
`;

const DelBtn = styled.button`
  position: absolute;
  padding: 5px;
  top: 150px;
  right: 1.5%;
  width: 50px;
  background-color: #fff;
  color: #e27575;
  border: 2px solid #e27575;
  font-size: 16px;
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
`;

const OpenCommentBtn = styled.button`
  position: absolute;
  top: 140px;
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
`;

const LikeBtn = styled.button`
  position: absolute;
  top: 140px;
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
`;
