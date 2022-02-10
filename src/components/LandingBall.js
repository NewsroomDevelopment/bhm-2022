import React from "react";
import styled from "styled-components";


const Ball = styled.div`
  height: 10vw;
  width: 10vw;
  margin: 2vw;
  background-color: ${(props) => props.trigger ? "white" : "#000000"};
  border-radius: 50%;
  display: inline-block;
}
`;

const ImageWrap = styled.div`
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
`;

const Row = styled.div`
    width: 100%;
`;

const LandingBall = ({ article, scrolled }) => {
  return (
    <ImageWrap>
      <Row>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
      </Row>
      <Row>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
        <Ball trigger={scrolled}/>
      </Row>
    </ImageWrap>
  );
};

export default LandingBall;
