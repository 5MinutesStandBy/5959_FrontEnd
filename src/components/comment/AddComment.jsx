import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { __addComment } from '../../redux/modules/commentSlice';



const AddComment = ({post}) => {

    const initialState = {
        content : '',
        postId : post.id,
        id : ''
    }


    const [comment,setComment] = useState(initialState);
    const dispatch = useDispatch();


    console.log(comment)



    const commentHandler = (e) => {
        setComment({...comment, postId : post.id, id : '',content : e.target.value})
    }

    const addCommentHandler = () => {
        if(comment.content.trim() === ''){
            return
        }else{
            dispatch(__addComment(comment))
            setComment({content:''})
        }
    }

  return (
    <>
        <StCommentBox>
            <StCommentInput onChange={commentHandler} value={comment.content} placeholder="댓글을 입력해 주세요"/><span onClick={addCommentHandler}>댓글 추가</span>
        </StCommentBox>
    
    </>
  )
}

export default AddComment

const StCommentBox = styled.div`
    display: flex;
    bottom: 0px;
    left : 200px;
    & span {
        margin-left : 10px;
    }
`;

const StCommentInput = styled.input`
    width:200px;
    height: 20px;
`;