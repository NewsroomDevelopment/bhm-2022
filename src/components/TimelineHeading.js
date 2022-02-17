import react from "react";
import styled from "styled-components";

const TimelineHeadingStyle = styled.div`
    margin-left: ${props => props.side === "left" ? "20vw" : "-2vw"};
    margin-right: ${props => props.side === "left" ? "-2vw" : "20vw"};;
    border-bottom: 0.5vw solid orange;
    padding: 2vw;
    text-align: left;
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