import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";
import { Link } from 'react-router-dom';
import { device } from "../device";

const NavWrap = styled.div`
    display:none;
    @media ${device.mobile} {
        
        text-align: center;
        margin: auto;
        padding-top: 0rem;
        height:10vh;
        justify-content: space-between;
        align-items:center;
        display:flex;
        position:sticky;
        top:0;
        left:0;
        flex-wrap: wrap;
        z-index:100;
        background-color: #FDE6C4;
     }
`;

const Tab = styled.a`
    font-size: 1.5rem;
    line-height: 1.85em;
    color: black;
    text-align: center;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    padding-left: 0.5em;
    cursor: pointer;
    background-color: #FDE6C495;
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;

const Burger = styled.div`
    z-index:100;
    position:relative;
    right:5%;
`;
const MobileNavBar = ({ color, current, setSection }) => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        console.log(open)
        setOpen(!open)
    }
    const sections = {
        Columbia: "columbia",
        "New York": "ny",
        Art: "art",
        Sports: "sports",
        Opinion: "opinion",
        "The Eye": "eye",
      };
    return (
    <>
        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "40px",
                    width: "40px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            <Burger>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={5}
                rotate={0}
                color='white'
                borderRadius={10}
                animationDuration={0.5}
                zIndex={100}
                className="over"
            />
            
            </Burger>
            
        </NavWrap>
        <Menu isOpen={open} width={'100vw'}>
            {Object.keys(sections).map((section) => (
            <Tab onClick={() => setSection(sections[section])}>
                {section}
            </Tab>
            ))}
        </Menu>
        </>


    );
};

export default MobileNavBar;