import react from "react";
import styled from "styled-components";

const TimelineHeadingStyle = styled.div`
    
    border-bottom: 5px solid orange;
`

const TimelineHeading = ({section}) => {
    return(
        <TimelineHeadingStyle>
            <span>section</span>
        </TimelineHeadingStyle>
    )
}

export default TimelineHeading;