import React from "react";
import styled from "styled-components";
import { device } from "../device";

//import NavImg from "../images/nav.png";
//background-image: url(${NavImg});
const NavSection = styled.div`
  position: fixed;
  text-align: left;
  font-weight: 700;
  z-index: 100;
  background-size: contain;

  overflow: hidden;
  height: 45vw;
  
  top: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

const SectionText = styled.div`
  font-size: 1.5rem;
  line-height: 1.85em;
  color: #14213D;;
  
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  right: ${(props) => props.left}vw;
`;

const NavText = styled.div`
  margin-top: 3vw;
  text-align:left;
`;

const BulletPoint = styled.li`
  color: yellow;
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
          <SectionText left={sections[section]}>
            <li href={`#${section}`}>{section}</li>
          </SectionText>
        ))}
      </NavText>
    </NavSection>
  );
};

export default Nav;
