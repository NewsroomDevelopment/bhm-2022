import React from "react";
import styled, { keyframes, css } from "styled-components";
import "../index.css";
import ArticleData from '../data/ArticleData';

const Ball = styled.div`
  height: 10vw;
  width: 10vw;
  margin: 2vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
  animation: ${(props) => props.trigger ? css`${drop(props.percent)} 3s forwards` : ""};
}
`;

const drop = randomPercent => keyframes`
    0%   {opacity: 0.75;}
    25%  {}
    50%  {}
    75%  {}
    100% {opacity: 0;}

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


const LandingBall = ({ articles, scrolled }) => {

  return (
    <ImageWrap>
      {articles.map((article) => <Ball trigger={scrolled} percent={Math.random() * 400 + 250} image={article.image} ></Ball>)}
    </ImageWrap>
  );
};

export default LandingBall;


      //<Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
      //<Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
      //<Ball trigger={scrolled} percent={Math.random() * 400 + 250} />
      //<Ball trigger={scrolled} percent={Math.random() * 400 + 250} />