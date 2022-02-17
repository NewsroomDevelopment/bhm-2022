import react from "react";
import styled from "styled-components";
import { device } from "../device";

const TimelineHeadingStyle = styled.div`
    margin-left: ${props => props.side === "left" ? "30vw" : "0vw"};
    margin-right: ${props => props.side === "right" ? "30vw" : "0vw"};
    border-bottom: 0.3vw solid #FF5400;
    padding: 2vw;
    text-align: left;
    font-family: Roboto Slab;
    font-size: 2rem;
    @media ${device.mobile} {
        text-align: center;
        margin: auto;
        padding-top: 0rem;
        display:flex;
        flex-wrap: wrap;
        z-index:100;
        font-size: 1.2em;
     }
     @media ${device.laptopS} {
        font-size: 1.1em;
     }
`

const TimelineHeading = ({ section, side }) => {
    return (
        <div id={section.toLowerCase()}>
            <TimelineHeadingStyle side={side}>
                {section}
            </TimelineHeadingStyle>
        </div>
    )
}

export default TimelineHeading;