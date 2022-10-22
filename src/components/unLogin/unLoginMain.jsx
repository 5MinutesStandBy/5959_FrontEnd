import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyContainer } from '../../elements/BodyContainer'
import { Button } from '../../elements/Button'
import oguMain from '../../images/안녕오구.png'
import LoginModalSet from '../modal/LoginModalSet'
import SignInModal from '../modal/SignInModal'
const UnLoginMain = () => {

    const [modalOpen,setModalOpen] = useState(false);
    const [signInModal,setSignInModal] = useState(false);

    console.log(modalOpen);
    const showSignIn = ()=> {
        setSignInModal(true)
    }

    const closeSignIn = () => {
        setSignInModal(false)
    }

    const showModal = () =>{
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false)
    }




  return (
    <>
        <BodyContainer style={{flexDirection : "column"}}>
            <span style={{fontSize : "25px"}}>로그인을 하시면 여러분의 칭찬을 볼 수 있어요!!😍</span>
            <StOguMain src={oguMain}/>
            <StBtnBox>
                <Button onClick={showModal}>로그인</Button>
                <Button onClick={showSignIn}>회원가입</Button>
                {modalOpen && <LoginModalSet closeModal={closeModal}/>}
                {signInModal && <SignInModal closeSignIn={closeSignIn}/>}
            </StBtnBox>
            
        </BodyContainer>
    </>
  )
}

export default UnLoginMain

const StOguMain  = styled.img`
     src: ${(props) => props.src};


`;

const StBtnBox = styled.div `
    display: flex;
    gap : 15px
`;