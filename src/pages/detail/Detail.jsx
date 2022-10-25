import React from 'react'
import styled from 'styled-components'
import { BodyContainer } from '../../components/elements/BodyContainer'
import boardOgu from '../../static/images/끄적오구.png'

const Detail = () => {
  return (
    <>
    <BodyContainer style={{flexDirection : "column"}}>
        <StTitle>
            <StText>
                    윤보라님을 칭찬합니다!!
            </StText>
        </StTitle>
        <StDetailBox>
                <StImg src={boardOgu}/>
        </StDetailBox>
    </BodyContainer>
    </>
  )
}

export default Detail

const StTitle = styled.div`
    width:600px;
    height: 200x;
    border : 3px solid black;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;



const StText = styled.div`
    font-size : 24px;
`;

const StImg = styled.img`
    src : ${(props) => props.src};
    width:150px;
    height: 150px;

    
`;

const StContent = styled.div`
    display: flex;
    width:600px;
    height: 400px;
    float: right;
    flex-wrap: wrap;
`;

const StDetailBox = styled.div`
    border : 3px solid black;
    width:600px;
    height: 400px;
    margin : 0 auto;
    vertical-align: middle;
    border-radius: 10px;
    background-color: white;
    flex-direction: column;
    flex-wrap: wrap;
    word-break:break-all;

`;