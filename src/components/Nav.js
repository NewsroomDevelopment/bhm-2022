import React from "react";
import styled from "styled-components";
import { device } from "../device";
import bulletImage from "./bullet.png";
import "./TimelineBall.css"

//import NavImg from "../images/nav.png";
//background-image: url(${NavImg});
const NavSection = styled.div`
  position: fixed;
  font-weight: 700;
  z-index: 100;
  background-color: #FDE6C495;
  overflow: hidden;
  padding-bottom: 1em;
  padding-top: 1em;
  margin-top: 10em;
  top: 0;
  padding-right: 3em;
  border-radius: 10px;
  width: 100%;
  @media ${device.tablet} {
    display: none;
  }
`;

const SectionText = styled.div`
  font-size: 1.5rem;
  line-height: 1.85em;
  color: #14213D;
  text-align: left;
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: normal;
  padding-left: 0.5em;
}
`;

const NavText = styled.div`
  text-align:left;
  
`;


const Nav = ({current, setSection}) => {
  const sections = {
    Columbia: "columbia",
    "New York": "ny",
    Art: "art",
    Sports: "sports",
    Opinion: "opinion",
    "The Eye": "eye",
  };
  return (
    <NavSection>
      <NavText>
        <div class="hover-underline-animation">
        {Object.keys(sections).map((section) => (
          <SectionText onClick={() => setSection(sections[section])}>
            <li  href={`#${section}`}><a>{section}</a></li>
          </SectionText>
        ))}
        </div>
      </NavText>
    </NavSection>
  );
};

export default Nav;
