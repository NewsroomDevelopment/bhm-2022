import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff5e1;
`;

const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  font-size: 3vw;
  align-items: center;
  text-align: center;
  line-height: 5vw;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Landing = ({}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(true);

    // subscribe event
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Wrapper>
        {scrolled && "scrolled"}
        <Row>
          <div> Ball </div>
          <div> Ball </div>
          <div> Ball </div>
          <div> Ball </div>
        </Row>
        <Title>
          {" "}
          A Look in: <br /> Black History Month
        </Title>
        <Row></Row>
        <Row></Row>
      </Wrapper>
    </>
  );
};

export default Landing;
