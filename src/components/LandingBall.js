import React from "react";
import styled from "styled-components";


const Ball = styled.div`
  height: 4vw;
  width: 4vw;
  padding: 2vw;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
    }
`;

const ImageWrap = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  transition: opacity 1.5s;
  opacity: ${({ props }) => (props.trigger ? '1' : '0')};
`;

const LandingBall = ({ article, trigger }) => {
  return (
    <ImageWrap trigger={trigger}>
      <Ball src={article.image_url} />
    </ImageWrap>
  );
};

export default LandingBall;
