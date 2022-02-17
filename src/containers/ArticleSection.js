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
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setMobile] = React.useState(false);

  const [section, setSection] = React.useState("all");

  React.useEffect(() => {
    if (dimensions.width < 500) setMobile(true);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (window.innerWidth < 500) setMobile(true);
      else setMobile(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <Title>hello</Title>
    </>
  );
};

export default ArticleSection;
