import react from "react";
import styled from "styled-components";

const TimelineHeadingStyle = styled.div`
    margin-left: ${props => props.side === "left" ? "200px" : "-20px"};
    margin-right: ${props => props.side === "left" ? "-20px" : "200px"};;
    border-bottom: 5px solid orange;
    padding: 20px;
    text-align: left;
`

const TimelineHeading = ({section, side}) => {
    return(

        <TimelineHeadingStyle side={side}>
            {section}
        </TimelineHeadingStyle>
    )
}

export default TimelineHeading;