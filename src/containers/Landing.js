import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LandingBall from '../components/LandingBall';

import { device } from "../device";
import VerticalNav from '../components/Nav';
import LandingData from '../data/LandingData';
import ArticleData from '../data/ArticleData';
import MobileNavBar from "../components/MobileNav";


const NavColumn = styled.div`
  width: 10em;
  float: right;
`;

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #fff5e1;
`;

const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  font-size: 3em;
  align-items: center;
  text-align: center;
  line-height: 5vw;
  font-family: Roboto Slab;
  font-weight: 900;
  @media ${device.mobile} {
    font-size: 2em;
    line-height: 2em;
    padding: 2vw;
    height: 60vw;
  }
`;

const Row = styled.div`
  width: 100%;
  @media ${device.mobile} {
    padding-top: 10vw;
  }
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
    <NavColumn>
         <VerticalNav/>
      </NavColumn>
      <MobileNavBar/>
      <Wrapper>
        {scrolled}
        <Row>
          <LandingBall articles={LandingData['landing1']} scrolled={scrolled}/>
        </Row>
      
        <Title>
          {" "}
          A Look in: <br /> Black History Month
        </Title>
        <Row>
          <LandingBall articles={LandingData['landing2']} scrolled={scrolled}/>
        </Row>

        </Wrapper>
    </>
  );
};

export default Landing;
