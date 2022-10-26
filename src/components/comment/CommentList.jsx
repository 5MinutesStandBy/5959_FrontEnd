
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
<<<<<<< HEAD
=======

>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
            <div>
              ❤️<span>0</span>
            </div>
            <div>
              💔<span>0</span>
            </div>
          </StBox>
        </StCommentList>
      : 
        <StCommentList>
          <StCommentBox>
            <StCommentInput onChange={changeReply} value={reply} />
          </StCommentBox>
          <StBox>
            <StEdit onClick={editHandler}>저장</StEdit>
          </StBox>
        </StCommentList>
<<<<<<< HEAD
}
=======
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
          

>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
    </>
  );
};

export default CommentList;

const StCommentInput = styled.input`
<<<<<<< HEAD
  margin-left: 40px;
=======
   margin-left : 40px;
>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
`;

const StCommentBox = styled.div``;

const StBox = styled.div`
  display: flex;
<<<<<<< HEAD
  gap: 20px;
=======
  gap:20px;
>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
  margin-right: 10px;
`;
const StEdit = styled.div`
  cursor: pointer;
<<<<<<< HEAD
=======
  
>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
`;

const StDel = styled.div`
  cursor: pointer;
`;

const StCommentList = styled.div`
<<<<<<< HEAD
  width: 600px;
  height: 30px;
  line-height: 30px;
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 10px;
=======
  width:600px;
  height: 30px;
  line-height: 30px;
  border : 3px solid black;
  border-radius: 10px;
  margin-top : 10px;

>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
  background-color: white;
  display: flex;
  justify-content: space-between;

  & div {
    cursor: pointer;
  }
`;

const StComment = styled.div`
<<<<<<< HEAD
  margin-left: 40px;
`;
=======

  margin-left: 40px;
`;


>>>>>>> 3e9dff8adc4a6243021c988c87ba984c7494660b
