import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CommonBtn } from "../../components/elements/CommonBtn";
import { __addPosts } from "../../redux/modules/postsSlice";
import ModalContainer from "../../components/elements/ModalContainer";

const AddPost = ({ setAddModal }) => {
  const closeModal = () => {
    setAddModal(false);
  };

  // 유저명으로 삭제 제한시 유저명 받아와서 지정해주기
  const [post, setPost] = useState({
    user: "bora",
    name: "",
    desc: "",
  });

  const { user, name, desc } = post;
  const dispatch = useDispatch();

  return (
    <ModalContainer bgcolor="#faeae2">
      <CommonBtn
        width="35px"
        top="5px"
        right="5px"
        color="black"
        onClick={closeModal}
      >
        X
      </CommonBtn>
      <StDiv1>
        칭찬받을 사람 :
        <StInput
          type="text"
          placeholder="칭찬하고 싶은 사람을 적어주세요!"
          id="name"
          value={name}
          onChange={(e) => {
            setPost((post) => ({ ...post, name: e.target.value }));
          }}
        />
      </StDiv1>
      <StDiv2>
        칭찬 한마디 :
        <StInput
          type="text"
          placeholder="칭찬 한마디를 남겨주세요!"
          id="desc"
          value={desc}
          onChange={(e) => {
            setPost((post) => ({ ...post, desc: e.target.value }));
          }}
        />
      </StDiv2>
      <CommonBtn
        width="100px"
        bottom="25px"
        right="60px"
        color="black"
        fs="18px"
        onClick={() => {
          dispatch(__addPosts(post));
          setPost({ ...post, name: "", desc: "" });
          setAddModal(false);
        }}
      >
        글 남기기
      </CommonBtn>
    </ModalContainer>
  );
};

export default AddPost;

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
