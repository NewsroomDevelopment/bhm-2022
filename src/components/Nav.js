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
  @media ${device.mobile} {
    display: none;
  }
`;

const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
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
  cursor: pointer;
}
`;

const NavText = styled.div`
  text-align:left;
  @media ${device.mobile} {
    text-align:center;
  }
  
`;


const Nav = ({ current, setSection }) => {
  const sections = {
    Columbia: "columbia",
    "A&E": "a&e",
    Sports: "sports",
    "New York": "new york",
    Opinion: "opinion",
    "The Eye": "the eye",
    Spectrum: "spectrum"
  };
  return (
    <NavSection>
      <NavText>
        <div class="hover-underline-animation">
          {Object.keys(sections).map((section) => (
            <SectionText>
              <li><a href={`#${sections[section].toLowerCase()}`}> {section}</a></li>
            </SectionText>
          ))}
        </div>
      </NavText>
    </NavSection >
  );
};

export default Nav;
