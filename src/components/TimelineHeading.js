import react from "react";
import styled from "styled-components";

const TimelineHeadingStyle = styled.div`
    margin-left: ${props => props.side === "left" ? "20vw" : "-2vw"};
    margin-right: ${props => props.side === "left" ? "-2vw" : "20vw"};;
    border-bottom: 0.5vw solid orange;
    padding: 2vw;
    text-align: left;
    font-family: Roboto Slab;
    font-size: 2rem;
`

const TimelineHeading = ({section, side}) => {
    return(

        <TimelineHeadingStyle side={side}>
            {section}
        </TimelineHeadingStyle>
    )
}

export default TimelineHeading;