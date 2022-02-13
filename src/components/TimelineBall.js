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

const TimelineBall = ({diameter, link, image, title}) => {
    console.log(image)
    return (
      <TimelineBallStyle
        onclick={(event) => window.open(link)}
        diameter={diameter} image={image} title={title}>
        <span class="tooltiptext">{title}</span>
      </TimelineBallStyle>
    );
  };
  
  export default TimelineBall;