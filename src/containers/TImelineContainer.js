import react from 'react';
import styled from "styled-components";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ArticleData from '../data/ArticleData';
import TimelineBall from '../components/TimelineBall';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff5e1;
  padding-top: 5vh;
`;

const useStyles = makeStyles((theme) => ({
  timeline: {
    backgroundColor: 'orange',
    width: '5px',
  }
}));

const TimelineContainer = ({ }) => {
  const classes = useStyles();

  /* Multiple ways to do this
    1. Separate data into left and write first and iterate through separately.
       Once on the left side, once on the right side.
    2. Don't seperate and only do 1 loop. If side == "left", put it on left side, blah blah
    
    Of course, account for type.
      Either type == "article"
      or type == "illo"
  */
  return (
    <Wrapper>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector className={classes.timeline} />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              {ArticleData['columbia'].map((article) => <TimelineBall diameter={article.diameter} link={article.link} image={article.image} title={article.title}></TimelineBall>)}
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div>
              {ArticleData['columbia'].map((article) => <TimelineBall diameter={article.diameter} link={article.link} image={article.image} title={article.title}></TimelineBall>)}
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector className={classes.timeline} />
          </TimelineSeparator>
          <TimelineContent><div>
            {ArticleData['columbia'].map((article) => <TimelineBall diameter={article.diameter} link={article.link} image={article.image} title={article.title}></TimelineBall>)}
          </div></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector className={classes.timeline} />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              {ArticleData['newyork'].map((article) => <TimelineBall diameter={article.diameter} link={article.link} image={article.image} title={article.title}></TimelineBall>)}
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>

          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Wrapper>
  )
}

export default TimelineContainer;