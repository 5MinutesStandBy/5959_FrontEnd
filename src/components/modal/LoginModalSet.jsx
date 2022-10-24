import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'

const LoginModalSet = ({closeModal}) => {



    return(
        <StModalBack>
            <StModalContainer>
                <StIcon>
                <FontAwesomeIcon icon={faCircleXmark} size="1x" onClick={closeModal} style={{float : "right",marginTop : "3px", marginRight : "3px"}}/>
                </StIcon>
            
                <StLoginBox>
                    <StId>
                        <span>아이디</span><StIdInput/>
                    </StId>
                    <StPass>
                        <span>비밀번호</span><StPassInput/>
                    </StPass>
                    <StLoginBtn>로그인</StLoginBtn>
                </StLoginBox>
            </StModalContainer>
        </StModalBack>
    )
}

export default LoginModalSet;

const StIcon = styled.div`
    position: absolute;
    right:10px;
    top:10px;
`;

const StLoginBtn = styled.button`
    width:80px;
    height: 25px;
`;

const StPassInput = styled.input`
    display: flex;
    width : 150px;
`;

const StPass = styled.div`
    display: flex;
    justify-content: center;
    & span{
        margin-right:10px;
    }
`;

const StId = styled.div`
    display: flex;
    justify-content: center;
    & span{
        margin-right:10px;
    }
`;

const StIdInput = styled.input`
    width: 150px;
    margin-left : 16px;
`;

const StLoginBox = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    align-items: center;
`;

const StModalBack = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    width : 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index : 100;
`;

const StModalContainer = styled.div`
    width:300px;
    height: 200px;
    z-index: 999;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: yellow;
    border : 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const StButton = styled.button`
    width:80px;
    height: 25px;
`;