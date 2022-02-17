import react from "react";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineBall from "../components/TimelineBall";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TimelineHeading from "../components/TimelineHeading";
import Illo from "../components/Illo";
const useStyles = makeStyles((theme) => ({
  timeline: {
    backgroundColor: "orange",
    width: "0.3vw",
    margin: "0px",
  },
}));

const TimelineContainer = ({ data, index }) => {
  const classes = useStyles();

  const leftitems = data.filter((item) => item.side === "left");
  const rightitems = data.filter((item) => item.side === "right");

  const title = data[0];

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          {title.side == "left" && (
            <TimelineHeading side={title.side} section={title.section} />
          )}
          {leftitems.map((item) => {
            return item.type === "article" ? (
              <TimelineBall
                diameter={item.diameter}
                link={item.link}
                image={item.image}
                title={item.title}
              />
            ) : (
              <Illo
                image={item.image}
                height={item.height}
                width={item.width}
                rotation={item.rotation}
              />
            );
          })}
        </TimelineOppositeContent>
        <TimelineSeparator className={classes.timeline}>
          <TimelineConnector className={classes.timeline} />
        </TimelineSeparator>
        <TimelineContent>
          {title.side == "right" && (
            <TimelineHeading side={title.side} section={title.section} />
          )}
          {rightitems.map((item) => {
            return item.type === "article" ? (
              <TimelineBall
                diameter={item.diameter}
                link={item.link}
                image={item.image}
                title={item.title}
              />
            ) : (
              <Illo
                image={item.image}
                height={item.height}
                width={item.width}
                rotation={item.rotation}
              />
            );
          })}
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default TimelineContainer;
