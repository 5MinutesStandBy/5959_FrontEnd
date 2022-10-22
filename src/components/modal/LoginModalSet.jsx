import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'

const LoginModalSet = ({closeModal}) => {



    return(
        <StModalBack>
            <StModalContainer>
            <FontAwesomeIcon icon={faCircleXmark} size="1x" onClick={closeModal} style={{float : "right",marginTop : "3px", marginRight : "3px"}}/>
                <p>모달창</p>
            </StModalContainer>
        </StModalBack>
    )
}

export default LoginModalSet;

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
`;

const StButton = styled.button`
    width:80px;
    height: 25px;
`;