import react from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ArticleData from '../data/ArticleData';
import TimelineBall from '../components/TimelineBall';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
        timeline: {
            backgroundColor: 'blue',
            width: '5px',
        }
  }));

const TimelineContainer = ({}) => {
    const classes = useStyles();
    
    return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector className={classes.timeline}/>
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
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><div>
            {ArticleData['columbia'].map((article) => <TimelineBall diameter={article.diameter} link={article.link} image={article.image} title={article.title}></TimelineBall>)}
        </div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
            <TimelineConnector />
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
    )
}

export default TimelineContainer;