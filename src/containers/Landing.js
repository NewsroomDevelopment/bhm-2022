import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LandingBall from '../components/LandingBall';


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
  width: 100%;
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
        {scrolled}
        <Row>
          <LandingBall scrolled={scrolled}/>
        </Row>
        <Row>
          <LandingBall scrolled={scrolled}/>
        </Row>
        <Title>
          {" "}
          A Look in: <br /> Black History Month
        </Title>
        <Row>
          <LandingBall scrolled={scrolled}/>
        </Row>
        <Row>
          <LandingBall scrolled={scrolled}/>
        </Row>
      </Wrapper>
    </>
  );
};

export default Landing;
