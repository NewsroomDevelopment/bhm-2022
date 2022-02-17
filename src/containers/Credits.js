import React from "react";
import styled from "styled-components";
//import CreditsImg from "../images/credits.png";
//import { device } from "../device";
import "../index.css";

const CreditsSection = styled.div`
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #fff5e1;
  font-family: "Roboto Slab";
`;

const CreditsTitle = styled.div`
  text-align: center;
  color: black;
  position: relative;
  top: 20%;
  padding-top: 7%;
  font-size: 5rem;
  font-family: "Roboto Slab";
`;

const Body = styled.div`
  h2 {
    text-align: center;
    color: black;
    font-family: 'Roboto Slab';
  }
  p {
    text-align: center;

    color: black;
    font-family: 'Roboto Slab';
  }
  margin-top: 2%;
  font-family: 'Roboto Slab';

`;

const SubDiv = styled.div`
  width: 75vw;
  width: fit-content;
  color: black;
  font-family: 'Roboto Slab';
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 0.8em;
  justify-content: center;
  justify-content: space-evenly;
font-family: 'Roboto Slab';
  @media (max-width: 1000px) {
    font-size: 0.75em;
    font-family: 'Roboto Slab';

  }
  @media (max-width: 768px) {
    font-size: 1em !important;
    font-family: 'Roboto Slab';
  }
`;

const Credits = () => {
  return (
    <>
    <CreditsSection>
      <CreditsTitle>
        Thank you to...
      </CreditsTitle>



       <Body>
              <Row>
                <SubDiv>

           <div>
                    <h2>Corporate Board</h2>
                    <p>
                      <b>Clare Ence Morse</b>, Editor in Chief
                    </p>
                    <p>
                      <b>Dia Gill</b>, Managing Editor
                    </p>
                    <p>
                      <b>Vilanna Wang</b>, Publisher
                    </p>
            </div>


      <div>
      <h2>Design and Development</h2>
       <p> <b>Victoria Geh</b>, Head of Newsroom Development</p>
      <p> <b>Hong Du</b>, Senior Newsroom Development </p>
      <p> <b>Patrick Puma</b>, Deputy Newsroom Development </p>
      <p> <b>Elaine Lee</b>, Newsroom Developer </p>
      <p> <b>James Yiu</b>, Newsroom Developer</p>
      <p> <b>Noah Bergam</b>, Newsroom Developer</p>
            </div>

      <div>
      <h2>Cover Illustration by:</h2>
       <p> <b>Sadia Sharif</b>, Deputy Illustrations Editor</p>
            </div>



      <div>
            <h2>Illustration</h2>
            	<p>
        <b>Yingjie Wang</b>, Illustrations Editor
      </p>
            	<p>
        <b>Julian Michaud</b>, Deputy Illustrations Editor
      </p>
            	<p>
        <b>Liza Evseeva</b>, Deputy Illustrations Editor
      </p>
            	<p>
        <b>Noelle Hunter</b>, Deputy Illustrations Editor
      </p>
            	<p>
        <b>Carlos Ochoa</b>, Staff Illustrator
      </p>
            	<p>
        <b>Chiara Guigou</b>, Staff Illustrator
      </p>
            	<p>
        <b>Ji Yoon Sim</b>, Staff Illustrator
      </p>
           	<p>
        <b>Katya Reichert</b>, Staff Illustrator
      </p>
            	<p>
        <b>Magan Chin</b>, Staff Illustrator
      </p>
            	<p>
        <b>Marion Kamara</b>, Staff Illustrator
      </p>
            	<p>
        <b>Natalie Tak</b>, Staff Illustrator
      </p>
            	<p>
        <b>Tejasri Vijayakumar</b>, Staff Illustrator
      </p>
            	<p>
        <b>Tina Wang</b>, Staff Illustrator
      </p>
      </div>

      </SubDiv>
      <SubDiv>

            <h2>News</h2>
      <div>
            <h2>Copy</h2>
           	<p>
        <b>Kaylene Su Yee Chong</b>, Head Copy Editor </p>
            	<p>
        <b>Katherine Carraway</b>, Deputy Copy Editor
      </p>
      <p>
        <b>Vincenzo DiNatale</b>, Deputy Copy Editor
      </p>
            	<p>
        <b>Robyn Fohouo</b>, Deputy Copy Editor
      </p>
            	<p>
        <b>Maria Levit</b>, Deputy Copy Editor
      </p>
            	<p>
        <b>Jonah Pitkowsky</b>, Deputy Copy Editor
      </p>
            	<p>
        <b>Harry Shi</b>, Deputy Copy Editor
      </p>
            	<p>
        <b>Renuka Balakrishnan</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Sam Barnett</b>, Associate Copy Editor
      </p>
            	<p>
       	  <b>Rachel Borshchenko</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Adam Burns</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Ronit Dhulia</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Ana Eveleigh</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Madison Guzy</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Sadie Rochman</b>, Associate Copy Editor
      </p>
            	<p>
      <b>Noyna Roy</b>, Associate Copy Editor</p>
            	<p>
        <b>Yvin Shin</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Abby Sim</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Natarsha Yan</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Bonnie Yang</b>, Associate Copy Editor
      </p>
            	<p>
        <b>Safia Aladlouni</b>, Preslotter
      </p>
            	<p>
        <b>Emma Grungold</b>, Preslotter
      </p>
            	<p>
        <b>Willa Nagy</b>, Preslotter
      </p>
            	<p>
        <b>Grace O'Malley</b>, Preslotter
      </p>
            	<p>
        <b>Maya Platek</b>, Preslotter
      </p>
            	<p>
        <b>Leif Wood</b>, Preslotter
      </p>
            	<p>
        <b>Lanah Wyne</b>, Preslotter
      </p>
      </div>
</SubDiv>
<SubDiv>

      <div>
            <h2>Photo</h2>
           	<p>
        <b>Millie Felder</b>, Photo Editor
      </p>
            	<p>
        <b>Kate Della Pietra</b>, Deputy Photo Editor
      </p>
           	<p>
        <b>Samantha Camacho</b>, Deputy Photo Editor
      </p>
            	<p>
        <b>Kat St. Martin</b>, Deputy Photo Editor
      </p>
            	<p>
        <b>Alex Kieu</b>, Deputy Photo Editor
      </p>
            	<p>
        <b>Rommel Nunez</b>, Senior Staff Photographer
      </p>
            	<p>
        <b>Pippa Tsuki Carlson</b>, Staff Photographer
      </p>
            	<p>
        <b>Gabi Levy</b>, Staff Photographer
      </p>
            	<p>
        <b>Shannon Binns</b>, Staff Photographer
      </p>
            	<p>
        <b>Annie Son</b>, Staff Photographer
      </p>
            	<p>
        <b>Caitlin Buckley</b>, Staff Photographer
      </p>
            	<p>
        <b>Jane Mok</b>, Staff Photographer
      </p>
            	<p>
        <b>Emma Snoddy</b>, Staff Photographer
      </p>
      </div>
            <h2>Sports</h2>
            <h2>Opinion</h2>
            <h2>Spectrum</h2>
            <h2>Arts and Entertainment</h2>

            <div>
            <h2>The Eye</h2>
	<p><b>Annie Cheng,</b> Eye Managing Editor</p>
<p><b>Derek Ng,</b> Eye Managing Editor</p>
<p><b>Lilienne Shore Kilgore-Brown,</b> Features Editor</p>
<p><b>Meg Lunny,</b> Leads Editor</p>
<p><b>Bella Aldrete</b> View From Here Editor</p>
<p><b>Mel Wang</b></p>
</div>


      </SubDiv>
              </Row>
            </Body>
            </CreditsSection>


    </>
  );
};

export default Credits;
