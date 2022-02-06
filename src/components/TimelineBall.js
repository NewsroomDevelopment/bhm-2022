import React from "react";
import styled from "styled-components";
import "./TimelineBall.css"

const TimelineBallStyle = styled.div`
    border-radius: 50%;
    width: ${props => props.diameter};
    height: ${props => props.diameter};
    background-image: url(${props => props.image});
    Access-Control-Allow-Origin: *;
`

const TimelineBall = ({diameter, link, image, title}) => {
    return (
      <TimelineBallStyle
        onclick={(event) => window.open(link)}
        diameter={diameter} image={image} title={title}>
        <span class="tooltiptext">{title}</span>
      </TimelineBallStyle>
    );
  };
  
  export default TimelineBall;