import React from "react";
import styled from "styled-components";
import { device } from "../device";

//import NavImg from "../images/nav.png";
//background-image: url(${NavImg});
const NavSection = styled.div`
  position: fixed;
  left: 10vw;
  font-weight: 700;
  z-index: 100;
  background-size: contain;

  overflow: hidden;
  width: 100%;
  height: 45vw;
  
  top: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

const SectionNav = styled.div`
  position: relative;
  font-size: 1.5rem;
  line-height: 1.85em;
  color: black;
  font-weight: bold;
  text-align:right;
  right: ${(props) => props.left}vw;
`;

const NavText = styled.div`
  margin-top: 3vw;
`;

const Nav = () => {
  const sections = {
    Columbia: 2.8,
    "New York": 2.8,
    Art: 8,
    Sports: 5,
    Opinion: 3.8,
    "The Eye": 3.8,
  };
  return (
    <NavSection>
      <NavText>
        {Object.keys(sections).map((section) => (
          <SectionNav left={sections[section]}>
            <li href={`#${section}`}>{section}</li>
          </SectionNav>
        ))}
      </NavText>
    </NavSection>
  );
};

export default Nav;
