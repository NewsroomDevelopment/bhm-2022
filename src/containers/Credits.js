import React from "react";
import styled from "styled-components";
//import CreditsImg from "../images/credits.png";
//import { device } from "../device";
import '../index.css';


const CreditsSection = styled.div`
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #fff5e1;
  font-family: 'Roboto Slab';
`;

const CreditsTitle = styled.div`
  text-align: center;
  color: black;
  position: relative;
  top: 20%;
  padding-top: 7%;
  font-size: 5rem;
  font-family: 'Roboto Slab';
`;

const Body = styled.div`
  h1 {
    text-align: center;
    color: black;
    font-family: 'Droid Sans';
  }
  margin-top: 5%;
  font-family: 'Droid Sans';

`;

const SubDiv = styled.div`
  width: 75vw;
  width: fit-content;
  color: black;
  font-family: 'Droid Sans';
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 0.8em;
  justify-content: center;
  justify-content: space-evenly;
font-family: 'Droid Sans';
  @media (max-width: 1000px) {
    font-size: 0.75em;
    font-family: 'Droid Sans';

  }
  @media (max-width: 768px) {
    font-size: 1em !important;
    font-family: 'Droid Sans';
  }
`;

const Credits = () => {
  return (
    <>
    <Text>
      <h1>
        Thank you to...
      </h1>
      <h2>Corporate Board</h2>
      <p>Clare Ence Morse, Editor-in-Chief</p>
      <p>Dia Gill, Managing Editor</p>
      <p>Vilanna Wang, Publisher</p>
      <h2>Design and Development</h2>
      <p>Victoria Geh, Head of Newsroom Development</p>
      <p>Hong Du, Senior Newsroom Development</p>
      <p>Patrick Puma, Deputy Newsroom Development</p>
      <p>Elaine Lee, Newsroom Developer</p>
      <p>James Yiu, Newsroom Developer</p>
      <p>Noah Bergam, Newsroom Developer</p>
      <h2>Cover Illustration By:</h2>
      <p>Sadia Sharif, Deputy Illustrations Editor</p>
      <h2>Illustration</h2>
      <p>Yingjie Wang, Illustrations Editor</p>
      <p>Julian Michaud, Deputy Illustrations Editor</p>
      <p>Liza Evseeva, Deputy Illustrations Editor</p>
      <p>Noelle Hunter, Deputy Illustrations Editor</p>
      <p>Carlos Ochoa, Staff Illustrator</p>
      <p>Chiara Guigou, Staff Illustrator</p>
      <p>Ji Yoon Sim, Staff Illustrator</p>
      <p>Katya Reichert, Staff Illustrator</p>
      <p>Magan Chin, Staff Illustrator</p>
      <p>Marion Kamara, Staff Illustrator</p>
      <p>Natalie Tak, Staff Illustrator</p>
      <p>Tejasri Vijayakumar, Staff Illustrator</p>
      <p>Tina Wang, Staff Illustrator</p>
      <h2>News</h2>
      <h2>Copy</h2>
      <p>Kaylene Su Yee Chong, Head Copy Editor</p>
      <p>Katherine Carraway, Deputy Copy Editor</p>
      <p>Vincenzo DiNatale, Deputy Copy Editor</p>
      <p>Robyn Fohouo, Deputy Copy Editor</p>
      <p>Maria Levit, Deputy Copy Editor</p>
      <p>Jonah Pitkowsky, Deputy Copy Editor</p>
      <p>Harry Shi, Deputy Copy Editor</p>
      <p>Renuka Balakrishnan, Associate Copy Editor</p>
      <p>Sam Barnett, Associate Copy Editor</p>
      <p>Rachel Borshchenko, Associate Copy Editor</p>
      <p>Adam Burns, Associate Copy Editor</p>
      <p>Ronit Dhulia, Associate Copy Editor</p>
      <p>Ana Eveleigh, Associate Copy Editor</p>
      <p>Madison Guzy, Associate Copy Editor</p>
      <p>Sadie Rochman, Associate Copy Editor</p>
      <p>Noyna Roy, Associate Copy Editor</p>
      <p>Yvin Shin, Associate Copy Editor</p>
      <p>Abby Sim, Associate Copy Editor</p>
      <p>Natarsha Yan, Associate Copy Editor</p>
      <p>Bonnie Yang, Associate Copy Editor</p>
      <p>Safia Aladlouni, Preslotter</p>
      <p>Emma Grungold, Preslotter</p>
      <p>Willa Nagy, Preslotter</p>
      <p>Grace O'Malley, Preslotter</p>
      <p>Maya Platek, Preslotter</p>
      <p>Leif Wood, Preslotter</p>
      <p>Lanah Wyne, Preslotter</p>
      <h2>Photo</h2>
      <p>Millie Felder, Photo Editor</p>
      <p>Kate Della Pietra, Deputy Photo Editor</p>
      <p>Samantha Camacho, Deputy Photo Editor</p>
      <p>Kat St. Martin, Deputy Photo Editor</p>
      <p>Alex Kieu, Deputy Photo Editor</p>
      <p>Rommel Nunez, Senior Staff Photographer</p>
      <p>Pippa Tsuki Carlson, Staff Photographer</p>
      <p>Gabi Levy, Staff Photographer</p>
      <p>Shannon Binns, Staff Photographer</p>
      <p>Annie Son, Staff Photographer</p>
      <p>Caitlin Buckley, Staff Photographer</p>
      <p>Jane Mok, Staff Photographer</p>
      <p>Emma Snoddy, Staff Photographer</p>
      <h2>Sports</h2>
      <h2>Opinion</h2>
      <h2>Spectrum</h2>
      <h2>Arts and Entertainment</h2>
      <h2>The Eye</h2>
    </Text>
    </>
  );
};

export default Credits;
