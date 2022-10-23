import styled from "styled-components";
import bodyImg from ".././images/body배경.png";

export const BodyContainer = styled.div`
  position: absolute;
  margin: 80px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  min-height: 800px;
  background-image: url(${bodyImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
