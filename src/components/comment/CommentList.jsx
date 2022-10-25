
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentSlice";

const CommentList = ({ comment }) => {
  const data = useSelector((state) => state.comment.comments.data);
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(comment.content);
  const dispatch = useDispatch();

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
  return (
    <>
    {!edit ?
        <StCommentList>
          <StCommentBox>
            <StComment>
              {comment.content}
            </StComment>
          </StCommentBox>
          <StBox>
            <StEdit onClick={editHandler}>수정</StEdit>
            <StDel onClick={deleteHandler}>삭제</StDel>

            <div>
              ❤️<span>0</span>
            </div>
            <div>
              💔<span>0</span>
            </div>
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

            <div>❤️<span>0</span></div>
            <div>💔<span>0</span></div>
          </StBox>
        </StCommentList> :
              <StCommentList>
                <StCommentBox>
                  <StCommentInput  onChange={changeReply} value={reply}/>
                </StCommentBox>
                <StBox>
                  <StEdit onClick={editHandler}>저장</StEdit>
                </StBox>
              </StCommentList>}
          

    </>
  );
};

export default CommentList;

const StCommentInput = styled.input`
   margin-left : 40px;
`;

const StCommentBox = styled.div``;

const StBox = styled.div`
  display: flex;
  gap:20px;
  margin-right: 10px;
`;
const StEdit = styled.div`
  cursor: pointer;
  
`;

const StDel = styled.div`
  cursor: pointer;
`;

const StCommentList = styled.div`
  width:600px;
  height: 30px;
  line-height: 30px;
  border : 3px solid black;
  border-radius: 10px;
  margin-top : 10px;

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


