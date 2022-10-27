import React from "react";
import { BodyContainer } from "../elements/BodyContainer";
import runOgu from "../../static/images/뛰는오구.png";

const Loading = () => {
  return (
    <BodyContainer>
      <img src={runOgu} />
    </BodyContainer>
  );
};

export default Loading;
