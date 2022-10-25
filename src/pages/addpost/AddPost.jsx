import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CommonBtn } from "../../components/elements/CommonBtn";
import { __addPosts } from "../../redux/modules/postsSlice";
import ModalContainer from "../../components/elements/ModalContainer";
import { useNavigate } from "react-router-dom";
import noteOgu from "../../static/images/끄적오구.png";
import bgOgu from "../../static/images/배경수정.png";
import hiOgu from "../../static/images/까꿍오구.png";
import layOgu from "../../static/images/누운오구.png";

const AddPost = () => {
  const navigate = useNavigate();

  // 유저명으로 삭제 제한시 유저명 받아와서 지정해주기
  const [post, setPost] = useState({
    user: "bora",
    name: "",
    desc: "",
  });

  const { user, name, desc } = post;
  const dispatch = useDispatch();

  return (
    <>
      <StImg src={hiOgu} posi="absolute" top="20%" left="-45px" width="250px" />
      <StImg src={layOgu} posi="absolute" top="40%" left="15%" width="330px" />
      <ModalContainer bgcolor="#f9faf5" top="40%">
        <StImg src={bgOgu} width="600px" bd="1px solid grey" />
        <StDiv mg="45px 20px 20px 30px">
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
        </StDiv>
        <StDiv mg="10px 20px 20px 48px">
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
        </StDiv>
        <CommonBtn
          width="100px"
          bottom="35px"
          right="160px"
          color="black"
          fs="18px"
          onClick={() => {
            dispatch(__addPosts(post));
            setPost({ ...post, name: "", desc: "" });
            navigate("/boards");
          }}
        >
          글 남기기
        </CommonBtn>
        <CommonBtn
          width="100px"
          bottom="35px"
          right="49px"
          color="black"
          fs="18px"
          onClick={() => {
            navigate("/boards");
          }}
        >
          돌아가기
        </CommonBtn>
      </ModalContainer>
      <StImg
        src={noteOgu}
        posi="absolute"
        top="65%"
        right="10%"
        width="200px"
      />
    </>
  );
};

export default AddPost;

const StDiv = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.mg};
  font-family: "Y_Spotlight";
`;

const StInput = styled.input`
  padding: 10px;
  margin-left: 10px;
  width: 360px;
  font-size: 15px;
  font-family: "Y_Spotlight";
`;

const StImg = styled.img`
  position: ${(props) => props.posi};
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  border-bottom: ${(props) => props.bd};
  border-radius: 7px 7px 0 0;
`;
