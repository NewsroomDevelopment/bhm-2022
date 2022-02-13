import React from 'react';
import styled from 'styled-components';
import '../index.css';
import Crown from '../crown1.svg';

const LetterWrap = styled.div`
    padding-bottom:5vh;
    background-color: #fff5e1;
    padding-left:7%;
    padding-right:7%;
    @media (max-width: 768px) {
        padding-left:5%;
        padding-right:5%;
    }
`;

const CrownStyle = styled.div`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    text-align: right;
    margin-bottom: 1vw;
    @media (max-width: 768px) {
        padding-left:5%;
        padding-right:5%;
    }
`;

const Title = styled.div`
    font-family: Noto Serif Tamil Slanted;
    font-style: italic;
    font-weight: 200;
    font-size: 2em;
    line-height: 62px;
    text-align: center;
    color: #14213D;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 0.05em;
    padding:6vh 0 2vh 0;
    word-wrap:break-word;

`;

const Body = styled.div`
    font-family: Noto Serif Tamil Slanted;
    font-style: italic;
    font-weight: 200;
    line-height: 30px;
    margin-left: 10%;
    margin-right: 10%;
    color: #14213D;

    font-size: 1em; 
    word-wrap:break-word;

`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <CrownStyle>
                <img src={Crown} alt="Crown Logo"/>
            </CrownStyle>
            <Title>Letter from the Editor</Title>
            <Body>
                <p>Dear readers, </p>
                <p>Each year during the month of February, we celebrate Black History Month, which is a time dedicated to highlighting the accomplishments of Black Americans and Black culture. This year, it is even more important to champion Black scholars, artists, athletes, entrepreneurs, and future leaders as we aim to amplify their voices.
</p>
                <p>Within Spectator’s Black History Month issue, you can find coverage of the development of distinct foodways and food trends in Harlem; profiles of Black student activists, haircare entrepreneurs, and musicians whose heritage has influenced their craft; and an examination of the University’s failure to provide resources to students who want to learn art forms with roots in the Black community like tap dance or jazz music. Furthermore, the issue explores new developments in uplifting marginalized voices, both in professors’ attempts to address racism through adjusting syllabi to highlight Black and other historically underrepresented scholars and through the University’s racial justice mini-grants.</p>
                <p>Columbia is an institution with a long history of racial injustice, and its narratives have often been whitewashed. We hope that within this edition you can learn more about the long-overlooked contributions that Black scholars, activists, and creatives have made to the Columbia and larger West Harlem community.
</p>
                <hr></hr>
                <p>Sarah Braka, Editor in Chief</p>
                <p>Elizabeth Karpen, Managing Editor</p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;