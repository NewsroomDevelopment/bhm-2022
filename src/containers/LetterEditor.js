import React from 'react';
import styled from 'styled-components';
import '../index.css';

const LetterWrap = styled.div`
    padding-bottom:5vh;
    background-color: #fff5e1;
    padding-left:7%;
    padding-right:7%;
    @media (max-width: 768px) {
        padding-left:5%;
        padding-right:5%;
    }
    font-family: Roboto Slab;
`;

const Title = styled.div`
    font-family: Roboto Slab;
    font-style: italic;
    font-weight: 400;
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
    font-family: Roboto Slab;
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
            <Title>Letter from the Editor</Title>
            <Body>
                <p>Dear readers, </p>
                <p>Every year in February, we come together to celebrate Black History Month by uplifting and giving a platform to the stories, accomplishments, and unique lived experiences of Black Americans, as well as continuing to question how the institutions we participate in perpetuate anti-Blackness in our daily lives. We hope you’ll join us in this annual commemoration with our 2022 Black History Month Issue. </p>
                <p>Within Spectator’s Black History Month edition, explore the history of Childs Memorial Temple Church, once the site of Malcolm X’s funeral and now the site of a controversial sale. Learn about how Black West Harlem entrepreneurs are adapting to a marijuana market in transition, the contentious renaming of a Teachers College building as well as shortcomings in faculty diversity initiatives in the Arts and Sciences. Hear from students from the Black Student-Athlete Alliance, the Muslim Afro Niyyah Students Association, and more. Explore the accomplishments of athletes like wrestler Joshua Ogunsanya, CC ’24,  and Manuel “Golden Flash” Rivero, SEAS ’33, Public Health ’38. Appreciate the work of creatives like DJ Kofi Meighan, SEAS ’23, and Tik Tok star Clarke Peoples, CC ’23. Dive deep into the origins of the Malcolm X Lounge in Hartley Hall, the shifting nature of the literary canons in the English department, and the Columbia School of International and Public Affairs’ partnership with the African-American Redress Network. </p>
                <p>We hope you leave this edition with a deeper understanding of the contributions of Black Columbians and community members to our school and beyond. And we are excited to continue celebrating Black history, voices, stories, and lives beyond the month of February. </p>
                <hr></hr>
                <p>Sincerely,</p>
                <p>Clara Ence Morse, Editor in Chief</p>
                <p>Dia Gill, Managing Editor</p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;