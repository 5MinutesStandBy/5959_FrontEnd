import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BodyContainer } from "../../components/elements/BodyContainer";
import { Button } from "../../components/elements/Button";
import oguMain from "../../static/images/안녕오구.png";
import { __addUser1, __addUser2 } from "../../redux/modules/signupSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const changeIdHandler = (e) => {
    setUsername(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeRePass = (e) => {
    setRePass(e.target.value);
  };
  const isNotNullHandler = () => {
    if (username.trim() === "" || password.trim() === "") {
      return;
    } else {
    }
  };

  const changeClick = () => {
    setIsClick(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsClick(true);
    let userInfo = {
      username: username,
      password: password,
      passwordConfirm: rePass,
    };
    
    dispatch(__addUser2({ userInfo, navigate }));
    navigate("/");
  };

  return (
    <>
      <BodyContainer style={{ flexDirection: "column" }}>
        <span style={{ fontSize: "25px" }}>
          로그인을 하시면 여러분의 칭찬을 볼 수 있어요!!😍
        </span>
        <StOguMain src={oguMain} />
        <StLoginContainer>
          <StIdBox>
            <span>아이디</span>
            <StOverLap>
              <StIdInput
                name="username"
                onChange={changeIdHandler}
                minLengt={7}
              />
              <span>중복확인</span>
            </StOverLap>
            {(username.trim() === "" || username.length < 8) && isClick ? (
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
            {(password.trim() === "" || password.length < 9) && isClick? (
              <StPassIn>8자리 이상의 비밀번호를 입력해주세요</StPassIn>
            ) : null}
          </StPassBox>
          <STRePassBox>
           { <span>비밀번호 재확인</span>}
            <StRePassInput
              onChange={changeRePass}
              type="password"
              minLengt={8}
            />
            {(rePass.trim() === "" || password !== rePass) && isClick  ? (
              <StRePassIn>비밀번호가 일치하지 않습니다</StRePassIn>
            ) : null}
          </STRePassBox>
          <StDiv>
            <StBtn mg="20px 30px 20px 75px" onClick={onSubmitHandler}>
              회원가입
            </StBtn>
            <StBtn
              mg="20px 0"
              onClick={() => {
                navigate("/");
              }}
            >
              돌아가기
            </StBtn>
          </StDiv>
        </StLoginContainer>
      </BodyContainer>
    </>
  );
};

export default Signup;

const StOverLap = styled.div`
  display: flex;
  & span {
    font-size: 10px;
    position: absolute;
    right: 650px;
    cursor: pointer;
  }
`;

const StRePassIn = styled.span`
  font-size: 10px;
  color: red;
`;

const STRePassBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
`;

const StRePassInput = styled.input`
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;
  &:focus {
    outline: none;
  }
`;

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
  margin: ${(props) => props.mg};
  cursor: pointer;
`;

const StDiv = styled.div`
  display: flex;
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
