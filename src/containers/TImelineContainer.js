import react from "react";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import ArticleData from "../data/ArticleData";
import TimelineBall from "../components/TimelineBall";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TimelineHeading from "../components/TimelineHeading";

const useStyles = makeStyles((theme) => ({
  timeline: {
    backgroundColor: "orange",
    width: "0.3vw",
    margin: "0px",
  },
}));

const TimelineContainer = ({ data, index }) => {
  const classes = useStyles();

  const articles = data.filter((article) => article.type === "article");
  const leftArticles = articles.filter((article) => article.side === "left");
  const rightArticles = articles.filter((article) => article.side === "right");

  const title = data[0];

  const illos = data.filter((illo) => illo.type === "illo");
  const leftIllos = illos.filter((illo) => illo.side === "left");
  const rightIllos = illos.filter((illo) => illo.side === "right");

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          {title.side == "left" && (
            <TimelineHeading side={title.side} section={title.section} />
          )}
          {leftArticles.map((article) => {
            return (
              <TimelineBall
                diameter={article.diameter}
                link={article.link}
                image={article.image}
                title={article.title}
              ></TimelineBall>
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
          {rightArticles.map((article) => {
            return (
              <TimelineBall
                diameter={article.diameter}
                link={article.link}
                image={article.image}
                title={article.title}
              ></TimelineBall>
            );
          })}
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default TimelineContainer;
