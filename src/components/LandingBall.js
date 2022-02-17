import React from "react";
import styled, { keyframes, css } from "styled-components";
import "../index.css";

const Ball = styled.div`
  height: 10vw;
  width: 10vw;
  margin: 2vw;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  animation: ${(props) => props.trigger ? css`${drop(props.percent)} 3s forwards` : ""};
}
`;

const drop = randomPercent => keyframes`
    0%   {background-color:red; opacity: 1;}
    25%  {background-color:yellow;}
    50%  {background-color:blue;}
    75%  {background-color:green;}
    100% {background-color:red; opacity: 0;}

    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(${randomPercent}%);
    }
`;

const ImageWrap = styled.div`
    height: 50%;
    padding-left: 15%;
    padding-right: 15%;
`;

const Row = styled.div`
    width: 100%;
`;

const LandingBall = ({ article, scrolled }) => {

  return (
    <ImageWrap>
        <Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
        <Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
        <Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
        <Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
        <Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
    </ImageWrap>
  );
};

export default LandingBall;
