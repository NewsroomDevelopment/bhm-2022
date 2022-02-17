import React from "react";
import styled from "styled-components";
import "./TimelineBall.css";

const IlloDiv = styled.div`
  height: ${(props) => props.height}vw;
  width: ${(props) => props.width}vw;
  background-image: url(${(props) => props.image});
  transform: rotate(${(props) => props.rotation}deg);
  display: inline-block;
  //margin: 2vw;
  background-size: cover;
  vertical-align: middle;
  border: transparent;
  margin-left: ${(props) => props.paddingLeft}vw;
  margin-right: ${(props) => props.paddingRight}vw;
  margin-top: 2vw;
`;

const Illo = ({ image, height, width, rotation, paddingLeft, paddingRight}) => {
  return (
    <>
      <IlloDiv
        image={image}
        height={height}
        width={width}
        rotation={rotation}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
      />
    </>
  );
};

export default Illo;
