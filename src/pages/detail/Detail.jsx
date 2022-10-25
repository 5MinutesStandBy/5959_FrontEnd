import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";
import boardOgu from "../../static/images/끄적오구.png";
import { __getPost, __updatePost } from "../../redux/modules/postSlice";
import { useParams } from "react-router-dom";
import {
  __addComment,
  __deleteComment,
  __getCommentById,
} from "../../redux/modules/commentSlice";
import CommentList from "../../components/comment/CommentList";

const Detail = () => {
  const postData = useSelector((state) => state.post.board);

  const commentsData = useSelector((state) => state.comment.comments.data);
  const [edit, setEdit] = useState(false);
  const todo = useSelector((state) => state.post.todo);

  const dispatch = useDispatch();

  const { id } = useParams();

  const initialState = {
    content: "",
    postId: id,
  };

  console.log(postData);

  useEffect(() => {
    dispatch(__getPost(id));
    dispatch(__getCommentById(id));
  }, [dispatch, id, todo]);

  const [comment, setComment] = useState(initialState);
  const [content, setContent] = useState(postData.desc);

  const commentChange = (e) => {
    setComment({ ...comment, content: e.target.value, postId: id, id: "" });
  };

  const addComment = () => {
    if (comment.content.trim() === "") {
      alert("댓글을 입력해주세요!");
    } else {
      dispatch(__addComment(comment));
      setComment({ content: "" });
    }
  };

  const changeEdit = () => {
    setEdit(!edit);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const updatePost = () => {
    if (content.trim() == "") {
      alert("내용을 입력해주세요!");
    } else {
      dispatch(
        __updatePost({
          user: postData.user,
          name: postData.name,
          desc: content,
          id: postData.id,
        })
      );

      setEdit(!edit);
    }
  };

  return (
    <>
      {!edit ? (
        <BodyContainer style={{ flexDirection: "column" }}>
          <StTitle>
            <StText>{postData.name}</StText>
            <StEdit onClick={changeEdit}>수정</StEdit>
          </StTitle>
          <StDetailBox>
            <StContent>
              <StImg src={boardOgu} />
              <span>{postData.desc}</span>
            </StContent>
          </StDetailBox>
          <StComment>
            <StComInput
              onChange={commentChange}
              value={comment.content}
              placeholder="댓글을 입력해주세요"
            />
            <StAdd onClick={addComment}>추가</StAdd>
          </StComment>
          {commentsData.map((comment) => (
            <CommentList key={comment.id} comment={comment} />
          ))}
        </BodyContainer>
      ) : (
        <BodyContainer style={{ flexDirection: "column" }}>
          <StTitle>
            <StText>{postData.name}</StText>
            <StEdit onClick={updatePost}>수정 완료</StEdit>
          </StTitle>
          <StDetailBox>
            <StContentEdit onChange={changeContent} value={content} />
            <StImg src={boardOgu} />
          </StDetailBox>
          <StComment>
            <StComInput
              onChange={commentChange}
              value={comment.content}
              placeholder="댓글을 입력해주세요"
            />
            <StAdd onClick={addComment}>추가</StAdd>
          </StComment>
          {commentsData.map((comment) => (
            <CommentList key={comment.id} comment={comment} />
          ))}
        </BodyContainer>
      )}
    </>
  );
};

export default Detail;

const StContentEdit = styled.textarea`
  min-width: 430px;
  min-height: 380px;
`;

const StEdit = styled.span`
  cursor: pointer;
  margin-right: 10px;
`;

const StCommentList = styled.div`
  width: 600px;
  height: 30px;
  line-height: 30px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  gap: 50px;
  display: flex;
`;
const StDel = styled.div`
  cursor: pointer;
`;

const StAdd = styled.div`
  cursor: pointer;
`;

const StComInput = styled.input`
  width: 500px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const StComment = styled.div`
  width: 600px;
  height: 30px;
  line-height: 30px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  gap: 50px;
  display: flex;
`;

const StTitle = styled.div`
  width: 600px;
  min-height: 50px;
  line-height: 50px;
  border: 3px solid black;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const StText = styled.div`
  font-size: 24px;
  margin-left: 20px;
`;

const StImg = styled.img`
  src: ${(props) => props.src};
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const StContent = styled.div`
  width: 600px;
  height: 400px;
  word-break: break-all;
  float: left;
  overflow: auto;
`;

const StDetailBox = styled.div`
  border: 3px solid black;
  width: 600px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  word-break: break-all;
  float: left;
`;
