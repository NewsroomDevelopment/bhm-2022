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
    background-color: #FDE6C4;
    color: "white"};
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;
const Burger = styled.div`
    z-index:100;
    position:absolute;
    right:5%;
`;
const MobileNavBar = ({ color, current, setSection }) => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        console.log(open)
        setOpen(!open)
    }

    return (

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
            <Menu isOpen={open} width={'100vw'}>
                {/* <Tab id="home"  current={current === "home"} className="menu-item" href="/">Home</Tab> */}
                <Tab onClick={() => ("womens")} className="menu-item">WOMEN'S BASKETBALL</Tab>
                <Tab onClick={() => setSection("mens")} className="menu-item">MEN'S BASKETBALL</Tab>
                <Tab onClick={() => setSection("all")} className="menu-item--small">ALL</Tab>
            </Menu>
        </NavWrap>


    );
};

export default MobileNavBar;