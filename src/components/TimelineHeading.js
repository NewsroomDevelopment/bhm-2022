import react from "react";
import styled from "styled-components";

const TimelineHeadingStyle = styled.div`
    margin-left: ${props => props.side === "left" ? "30vw" : "0vw"};
    margin-right: ${props => props.side === "right" ? "30vw" : "0vw"};
    border-bottom: 0.3vmax solid orange;
    padding: 1vw;
    text-align: left;
    font-family: Roboto Slab;
    font-size: 2rem;
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