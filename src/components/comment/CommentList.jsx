import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CommentList = () => {

    const data = useSelector((state)=>state.comment.comments.data)
    console.log(data)
  return (
    <>
        <StCommentList>
          ccc
        </StCommentList>

    </>
  )
}

export default CommentList

const StCommentList = styled.div`
    display: flex;
    bottom: 0px;
    left : 200px;
`;