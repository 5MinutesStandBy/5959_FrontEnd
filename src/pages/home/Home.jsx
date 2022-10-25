import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";
import { Button } from "../../components/elements/Button";
import oguMain from "../../static/images/안녕오구.png";

const UnLoginMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const [isClicked, setisClicked] = useState(false);

  const changeIdHandler = (e) => {
    setUsername(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const isNotNullHandler = () => {
    if (username.trim() === "" || password.trim() === "") {
      return;
    } else {
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("username", username);
    console.log("password", password);

    let userInfo = {
      username: username,
      password: password,
    };

    dispatch();
  };

  const clickHandler = () => {
    setisClicked(true);
  };

  const toSignIn = () => {
    navigate("/signup");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <BodyContainer style={{ flexDirection: "column" }}>
          <span style={{ fontSize: "25px" }}>
            로그인을 하시면 여러분의 칭찬을 볼 수 있어요!!😍
          </span>
          <StOguMain src={oguMain} />
          <StLoginContainer>
            <StIdBox>
              <span>아이디</span>
              <StIdInput
                name="username"
                onChange={changeIdHandler}
                minLengt={7}
              />
              {username.trim() === "" && isClicked ? (
                <StIdIn>7자리 이상의 아이디를 입력해주세요</StIdIn>
              ) : null}
            </StIdBox>
            <StPassBox>
              <span>비밀번호</span>
              <StPassInput
                type="password"
                onChange={changePasswordHandler}
                minLength={8}
              />
              {password.trim() === "" && isClicked ? (
                <StPassIn>8자리 이상의 비밀번호를 입력해주세요</StPassIn>
              ) : null}
            </StPassBox>
            <StBtn type="submit" onClick={clickHandler}>
              로그인
            </StBtn>
            <StSignIn onClick={toSignIn}>아직 회원이 아니세요?</StSignIn>
          </StLoginContainer>
        </BodyContainer>
      </form>
    </>
  );
};

export default UnLoginMain;

const StPassIn = styled.span`
  font-size: 10px;
  color: blue;
`;

const StIdIn = styled.span`
  font-size: 10px;
  color: blue;
`;

const StSignIn = styled.span`
  border: none;
  margin: 0 auto;
  margin-top: 40px;
  color: blue;
  cursor: pointer;
`;

const StBtn = styled.span`
  border: none;
  margin: 0 auto;
  margin-top: 40px;
  cursor: pointer;
`;

const StPassInput = styled.input`
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

const StPassBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
`;

const StIdBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StIdInput = styled.input`
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;

  &:focus {
    outline: none;
  }
  &span {
    margin-left: 30px;
  }
`;

const StLoginContainer = styled.div`
  border: 3px solid black;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const StOguMain = styled.img`
  src: ${(props) => props.src};
`;

const StBtnBox = styled.div`
  display: flex;
  gap: 15px;
`;
