import React, { useState } from "react";
import styled from "styled-components";

const AddPost = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContainer>
      <button onClick={closeModal}>끄기</button>
    </ModalContainer>
  );
};

export default AddPost;

const ModalContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: aliceblue;
`;
