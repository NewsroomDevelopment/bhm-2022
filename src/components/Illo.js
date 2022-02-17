import React from "react";
import styled from "styled-components";
import "./TimelineBall.css";

const IlloDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: ${(props) => props.image};
  transform: rotate(${(props) => props.rotation}deg);
`;

const Illo = ({ image, height, width, rotation }) => {
  return (
    <>
      <IlloDiv
        image={image}
        height={height}
        width={width}
        rotation={rotation}
      />
    </>
  );
};

export default Illo;
