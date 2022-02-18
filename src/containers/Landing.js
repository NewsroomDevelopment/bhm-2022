import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LandingBall from '../components/LandingBall';

import { device } from "../device";
import VerticalNav from '../components/Nav';
import LandingData from '../data/LandingData';
import ArticleData from '../data/ArticleData';
import MobileNavBar from "../components/MobileNav";
import Crown from '../crown2.png';


const CrownStyle = styled.div`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    background-image: url(${Crown});
    display: inline-block;
    padding: 1vw;
    float: right;
    width: 100px;
    height: 100px;
    @media (max-width: 768px) {
        padding-left:5%;
        padding-right:5%;
    }
    @media ${device.mobile} {
      display: none;
    }
    z-index: 100;

`;

const Logo = styled.div`
    z-index:100;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    float: right;
    padding: 2vw;
    left:5%;
    @media (max-width: 768px) {
      padding-left:5%;
      padding-right:5%;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const NavColumn = styled.div`
  width: 5em;
  float: right;
`;

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #fff5e1;
`;

const Title = styled.div`
  color: #14213D;
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

const Landing = ({ }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(true);

    // subscribe event
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Logo>
        <a href="https://www.columbiaspectator.com/" style={{
        }}><img style={{
          height: "100px",
          width: "100px",
        }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
      </Logo>
      <NavColumn>
        <VerticalNav />
      </NavColumn>
      <MobileNavBar />
      <Wrapper>
        {scrolled}
        <Row>
          <LandingBall articles={LandingData['landing1']} scrolled={scrolled} />
        </Row>

        <Title>
          {" "}
          A Look in: <br /> Black History Month
        </Title>
        <Row>
          <LandingBall articles={LandingData['landing2']} scrolled={scrolled} />
        </Row>

      </Wrapper>
    </>
  );
};

export default Landing;
