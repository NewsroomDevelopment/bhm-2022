import React from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";
import styled from "styled-components";
//import CreditsImg from "../images/credits.png";
import { device } from "../device";
import "../index.css";

const CreditsSection = styled.div`
  margin-top: -5vw; 
  padding-bottom: 10vw;
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
  font-weight: 900;
  top: 20%;
  padding-top: 7%;
  font-size: 4rem;
  font-family: "Roboto Slab";
  @media ${device.mobile} {
    font-size: 3rem;
 }
`;

const Body = styled.div`
  h2 {
    text-align: center;
    color: black;
    font-family: "Roboto Condensed";
    font-size: 2em;
    padding-top: 3vw;
    padding-bottom: 1vw;
  }
  p {
    text-align: center;
    font-family: "Roboto Slab";
  }
`;

const SubDiv = styled.div`
  color: black;
  font-family: "Roboto Slab";
  &:nth-child(2) {
    border-right: 2px solid #FF5400;
    border-left: 2px solid #FF5400;
    padding-right: 5vw;
    padding-left: 5vw;
    @media ${device.mobile} {
      border: none;
   }
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 0.8em;
  padding: 5vw;
  justify-content: center;
  justify-content: space-evenly;
  @media ${device.mobile} {
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
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
                <p> <b>Philippe Wu</b>, Head of Product </p>
                <p> <b>Christina Su</b>, Product Manager</p>
                <p> <b>Anissa Arakal</b>, Product Designer</p>
              </div>

              <div>
                <h2>Cover Illustration By:</h2>
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

              <div>
                <h2>The Eye</h2>
                <p>
                  <b>Annie Cheng</b>, Eye Managing Editor
                </p>
                <p>
                  <b>Derek Ng</b>, Eye Managing Editor
                </p>
                <p>
                  <b>Lilienne Shore Kilgore-Brown</b>, Features Editor
                </p>
                <p>
                  <b>Meg Lunny</b>, Leads Editor
                </p>
                <p>
                  <b>Bella Aldrete</b>, View From Here Editor
                </p>
                <p>
                  <b>Mel Wang</b>, Staff Writer
                </p>
              </div>

              <div>
                <h2>Sports</h2>
                <p>
                  <b>Miles Schachner</b>, Sports Editor
                </p>
                <p>
                  <b>Jorge Hernandez</b>, Deputy Editor
                </p>
                <p>
                  <b>Stephen Dames</b>, Deputy Editor
                </p>
                <p>
                  <b>Robert Gao</b>, Deputy Editor
                </p>
                <p>
                  <b>Matthew Kim</b>, Staff Writer
                </p>
                <p>
                  <b>Rebecca Wachen</b>, Staff Writer
                </p>
                <p>
                  <b>Takashi Williams</b>, Staff Writer
                </p>
              </div>

            </SubDiv>
            <SubDiv>

              <h2>University News</h2>
              <p>
                <b>Irie Sentner</b>, University News Editor</p>
              <p>
                <b>Zach Schermele</b>,  Deputy News Editor
              </p>
              <p>
                <b>Stella Pagkas</b>, Deputy News Editor
              </p>
              <p>
                <b>Adam Frommer</b>, Staff Writer
              </p>
              <p>
                <b>Isabella Ramírez</b>, Staff Writer
              </p>
              <p>
                <b>Rainier Harris</b>, Staff Writer
              </p>


              <h2>City News</h2>
              <p>
                <b>Faith Andrews-O’Neal</b>, City News Editor
              </p>
              <p>
                <b>Maya Mitrasinovic</b>, City News Editor
              </p>
              <p>
                <b>Alice Tecotzky</b>, Deputy News Editor
              </p>
              <p>
                <b>Victor Swezey</b>, Staff Writer
              </p>
              <p>
                <b>Claire Hunt</b>, Staff Writer
              </p>
              <p>
                <b>Lucy Brenner</b>, Staff Writer
              </p>
              <p>
                <b>Aissatou Diallo</b>, Staff Writer
              </p>
              <p>
                <b>Wena Teng</b>, Staff Writer
              </p>
              <p>
                <b>Charlotte Buttenwieser</b>, Staff Writer
              </p>

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
              <div>
                <h2>Opinion</h2>
                <p>
                  <b>Senem Yurdakul</b>, Editorial Page Editor
                </p>
                <p>
                  <b>Ryan Oden</b>, Admin Deputy Editor
                </p>
                <p>
                  <b>Sean Conlon</b>, Admin Deputy Editor
                </p>
                <p>
                  <b>Karlton Gaskin</b>, City Deputy Editor
                </p>
                <p>
                  <b>Julian Novarr</b>, Contributor Deputy Editor
                </p>
                <p>
                  <b>Lauren Zhou</b>, Student Life Deputy Editor
                </p>
                <p>
                  <b>Celeste Ramirez</b>, Senior Associate
                </p>
                <p>
                  <b>Sara Chough</b>, Senior Associate
                </p>
                <p>
                  <b>Melanie Cheung</b>, Senior Associate
                </p>
                <p>
                  <b>Michaela Fleischer</b>, Senior Associate
                </p>
                <p>
                  <b>Sydney Goldson</b>, Senior Associate
                </p>
                <p>
                  <b>Maria Rice</b>, Senior Associate
                </p>
                <p>
                  <b>Milene Klein</b>, Senior Associate
                </p>
                <p>
                  <b>Eki Uzamere</b>, Associate
                </p>
                <p>
                  <b>Tori Sproat</b>, Associate
                </p>
                <p>
                  <b>Julien Roa</b>, Associate
                </p>
              </div>
              <div>
                <h2>Spectrum</h2>
                <p>
                  <b>Ariana Novo</b>, Spectrum Editor
                </p>
                <p>
                  <b>Emma Cho</b>, Deputy Spectrum Editor
                </p>
                <p>
                  <b>Haley Long</b>, Deputy Spectrum Editor
                </p>
                <p>
                  <b>Aliza Rabinovitz</b>, Deputy Spectrum Editor
                </p>
                <p>
                  <b>Swethaa Suresh</b>, Deputy Spectrum Editor
                </p>
                <p>
                  <b>Kylie Gall</b>, Staff Writer
                </p>
                <p>
                  <b>Caroline Somers</b>, Staff Writer
                </p>
                <p>
                  <b>Michelle Twan</b>, Staff Writer
                </p>
              </div>
              <div>
                <h2>Arts and Entertainment</h2>
                <p>
                  <b>Bella Druckman</b>, Arts and Entertainment Editor
                </p>
                <p>
                  <b>Fernanda Aguero</b>, Deputy Editor
                </p>
                <p>
                  <b>Noah Bullwinkle</b>, Deputy Editor
                </p>
                <p>
                  <b>Isa Farfan</b>, Deputy Editor
                </p>
                <p>
                  <b>Vincent Hou</b>, Deputy Editor
                </p>
                <p>
                  <b>Katie Levine</b>, Deputy Editor
                </p>
                <p>
                  <b>Irene Madrigal</b>, Deputy Editor
                </p>
                <p>
                  <b>Emma Schartz</b>, Deputy Editor
                </p>
                <p>
                  <b>Fernanda Aguero</b>, Deputy Editor
                </p>
              </div>
            </SubDiv>
          </Row>
        </Body>
      </CreditsSection>
    </>
  );
};

export default Credits;
