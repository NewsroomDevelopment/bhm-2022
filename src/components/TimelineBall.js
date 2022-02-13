import React from "react";
import styled from "styled-components";
import "./TimelineBall.css"

const TimelineBallStyle = styled.div`
    border-radius: 50%;
    width: ${props => props.diameter}vw;
    height: ${props => props.diameter}vw;
    background-image: url(${props => props.image});
    Access-Control-Allow-Origin: *;
    display: inline-block;
    margin: 2vw;
    background-size: cover;
    vertical-align: middle;
`

const TimelineText = styled.div`
    clear: left;
    display: block;
    padding-left: ${props => props.diameter/2}vw;
    padding-right: ${props => props.diameter/2}vw;
`

const TimelineBall = ({ diameter, link, image, title }) => {
  return (
    <div>
      <TimelineBallStyle
        onclick={(event) => window.open(link)}
        diameter={diameter} image={image} title={title}>
      </TimelineBallStyle>
      <TimelineText diameter={diameter} class="caption">{title}</TimelineText>
    </div>

  );
};

export default TimelineBall;