import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __deleteComment,
  __getCommentById,
  __updateComment,
} from "../../redux/modules/commentSlice";
import { __goodHeart } from "../../redux/modules/heartSlice";
import { __getPost } from "../../redux/modules/postSlice";

const CommentList = ({ comment }) => {
  const data = useSelector((state) => state.post.board.commentList);
  const userData = useSelector((state) => state.signin.checkusers);
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(comment.content);
 
  const [bad, setBad] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getPost(id));
  }, []);

  const editHandler = () => {
    if (reply.trim() === "") {
      alert("댓글을 입력해주세요!");
    } else {
      dispatch(
        __updateComment({
          content: reply,
          id: comment.id,
          postId: comment.postId,
        })
      );
      setEdit(!edit);
    }
  };

  const changeReply = (e) => {
    setReply(e.target.value);
  };

  const deleteHandler = () => {
    dispatch(__deleteComment(comment.id));
  };





  const badHandler = () => {
    setBad(!bad);
  };
  return (
    <>
      {!edit ? (
        <StCommentList>
          <StCommentBox>
            <StComment>{comment.content}</StComment>
          </StCommentBox>
          <StBox>
            
          {localStorage.getItem("username") === comment.author ? (
            <>
            <StEdit onClick={editHandler}>수정</StEdit>
            <StDel onClick={deleteHandler}>삭제</StDel>
            {bad ?
            null :
            <>
            </>}
            </>) : null}
          </StBox>
        </StCommentList>
      ) : (
        <StCommentList>
          <StCommentBox>
            <StCommentInput onChange={changeReply} value={reply} />
          </StCommentBox>
          <StBox>
            <StEdit onClick={editHandler}>저장</StEdit>
          </StBox>
        </StCommentList>
      )}
    </>
  );
};

export default CommentList;

const BadDiv = styled.div``;



const StCommentInput = styled.input`
  margin-left: 40px;
`;

const StCommentBox = styled.div``;

const StBox = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 10px;
`;
const StEdit = styled.div`
  cursor: pointer;
`;

const StDel = styled.div`
  cursor: pointer;
`;

const StCommentList = styled.div`
  width: 600px;
  height: 30px;
  line-height: 30px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  & div {
    cursor: pointer;
  }
`;

const StComment = styled.div`
  margin-left: 40px;
`;
