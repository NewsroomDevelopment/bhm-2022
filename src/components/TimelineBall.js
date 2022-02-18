import React from "react";
import styled from "styled-components";
import "./TimelineBall.css"
import { device } from "../device";


const TimelineBallStyle = styled.button`
    border-radius: 50%;
    width: ${props => props.diameter}vw;
    height: ${props => props.diameter}vw;
    background-image: url(${props => props.image});
    transition: 0.5s all ease-in-out;
    Access-Control-Allow-Origin: *;
    display: inline-block;
    overflow: hidden;
    margin: 2vw;
    background-size: cover;
    vertical-align: middle;
    border: transparent;
    cursor: pointer;
    font-family: Roboto Slab;
    @media ${device.mobile} {
      height: ${(props) => props.diameter * 2}vw;
      width: ${(props) => props.diameter * 2}vw;
    }
    &:hover {
      transform: scale(1.5);
    }
`

const TimelineText = styled.div`
    clear: left;
    display: block;
    padding-left: ${props => props.diameter / 2}vw;
    padding-right: ${props => props.diameter / 2}vw;
    font-family: Roboto, sans-serif;
    font-style: italic; 
    @media ${device.mobile} {
      font-size: 0.75em;
   }
   @media ${device.tablet} {
    font-size: 0.8em;
 }

`

function NewTab() {
  window.open(
    "https://www.geeksforgeeks.org", "_blank");
}

const TimelineBall = ({ diameter, link, image, title }) => {
  return (
    <div>
      <TimelineBallStyle
        onClick={function () { window.open(link) }}
        diameter={diameter} image={image} title={title} link={link}>
      </TimelineBallStyle>
      <TimelineText diameter={diameter} class="caption">{title}</TimelineText>
    </div>

  );
};

export default TimelineBall;