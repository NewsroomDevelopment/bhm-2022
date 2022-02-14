import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import { device } from "../device";
const NavColumn = styled.div`
  width: 25%;

  @media ${device.mobile} {
    width:0;
  }
`;

const Title = styled.div`
`

const ArticleSection = ({}) => {
  return (
    <>
    <Title>hello</Title>
    {/* loop through article sections. For each, call timeline with the article data */}
    </>
  );
};

export default ArticleSection;