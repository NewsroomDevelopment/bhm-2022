import React from "react";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import ArticleData from "../data/ArticleData";
import TimelineContainer from "./TImelineContainer";
import Nav from "../components/Nav";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { device } from "../device";
const NavColumn = styled.div`
  width: 25%;

  @media ${device.mobile} {
    width: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff5e1;
  padding-top: 5vh;
  padding-bottom: 15vw;
`;

const useStyles = makeStyles((theme) => ({
  timeline: {
    backgroundColor: "orange",
    width: "5px",
  },
}));

const Title = styled.div``;

const ArticleSection = ({}) => {
  
  // console.log(Object.keys(ArticleData))
  return (
    <>
      <Wrapper>
        <Timeline>
          {Object.keys(ArticleData).map((key, index) => {
            return <TimelineContainer data={ArticleData[key]} index={index} />;
          })}
        </Timeline>
      </Wrapper>
      {/* loop through article sections. For each, call timeline with the article data */}
    </>
  );
};

export default ArticleSection;
