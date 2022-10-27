import React from "react";
import styled from "styled-components";
import img1 from "../../static/images/왕관오구.png";
import img2 from "../../static/images/주먹오구.png";
import img3 from "../../static/images/빠이오구.png";
import img4 from "../../static/images/안해오구.png";
import img5 from "../../static/images/오구등장.png";
import img6 from "../../static/images/까꿍오구.png";
import img7 from "../../static/images/하트아기오구.png";
import img8 from "../../static/images/아기오구등장.png";
import img9 from "../../static/images/화이팅아기오구.png";

const RandomImg = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return <PostImg src={imgs[getRandom(1, 9)]} />;
};

export default RandomImg;

const PostImg = styled.img`
  src: ${(props) => props.src};
  width: 100px;
  height: 100px;
  padding: 0;
  border: 1px solid #b8b8b8;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: 40px;
`;
