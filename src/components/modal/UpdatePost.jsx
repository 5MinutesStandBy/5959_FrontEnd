import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CommonBtn } from "../../elements/CommonBtn";
import ModalContainer from "../../elements/ModalContainer";
import {
  clearPost,
  __getPost,
  __updatePost,
} from "../../redux/modules/postSlice";
import { __getPosts } from "../../redux/modules/postsSlice";

const UpdatePost = ({ setUpdateMode, post }) => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const closeMode = () => {
    setUpdateMode(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPost(post.id));
    return () => dispatch(clearPost());
  }, [dispatch, post.id]);

  useEffect(() => {
    setUpdatedName(post.name);
    setUpdatedDesc(post.desc);
  }, [post]);

  const onSaveBtnHandler = () => {
    if (!updatedName || !updatedDesc) {
      return alert("내용을 입력 해 주세요!");
    }
    dispatch(
      __updatePost({
        ...post,
        name: updatedName,
        desc: updatedDesc,
      })
    );
    setUpdateMode(false);
  };

  return (
    <ModalContainer bgcolor="#faeae2">
      <CommonBtn
        width="35px"
        top="5px"
        right="5px"
        color="black"
        onClick={closeMode}
      >
        X
      </CommonBtn>
      <StDiv1>
        칭찬받을 사람 :
        <StInput
          type="text"
          placeholder="칭찬하고 싶은 사람을 적어주세요!"
          id="name"
          value={updatedName}
          onChange={(e) => {
            setUpdatedName(e.target.value);
          }}
        />
      </StDiv1>
      <StDiv2>
        칭찬 한마디 :
        <StInput
          type="text"
          placeholder="칭찬 한마디를 남겨주세요!"
          id="desc"
          value={updatedDesc}
          onChange={(e) => {
            setUpdatedDesc(e.target.value);
          }}
        />
      </StDiv2>
      <CommonBtn
        width="100px"
        bottom="25px"
        right="60px"
        color="#75ade2"
        fs="18px"
        onClick={onSaveBtnHandler}
      >
        수정하기
      </CommonBtn>
    </ModalContainer>
  );
};
export default UpdatePost;

const StDiv1 = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 45px 20px 20px 30px;
`;
const StDiv2 = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 20px 20px 48px;
`;

const StInput = styled.input`
  padding: 10px;
  margin-left: 10px;
  width: 300px;
  font-size: 15px;
  font-family: "Y_Spotlight";
`;
