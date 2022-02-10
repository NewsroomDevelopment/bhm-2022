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
        <LandingBall scrolled={scrolled}/>
        <Title>
          {" "}
          A Look in: <br /> Black History Month
        </Title>
        <LandingBall scrolled={scrolled}/>
      </Wrapper>
    </>
  );
};

export default Landing;
