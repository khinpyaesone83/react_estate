import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import {Button} from './Button';

const Section=styled.section`
    background:#000d1a;
    width:100%;
    height:100%;
`;

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:3rem;
    @media screen and (max-width:768px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

`;
const ColumnLeft=styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    padding: 2rem 1rem;
    max-width:60vw;
    width:100%;
    h1{
        font-size:4rem;
    }
    @media screen and (max-width:768px){
        max-width:100%;
        text-align:left;
        justify-content: center;
        align-items: center;
    }

`;
const ColumnRight=styled.div`
    display:flex;
    justify-content:center;
    padding:2rem 1rem;
    align-items:center;
`;
const Content=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const ContentLeft=styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-right:2rem;
    line-height:2;
`;
const FooterLink=styled(Link)`
    text-decoration:none;
    cursor:pointer;
    color:#fff;
    &:hover{
        color:#cd853f;
        transition: 0.2s ease-in-out;
    }
`;

const ContentRight=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    line-height:2;
`;
const Heading=styled.p`
    color:#fff;
    font-weight:bold;
    display:flex;
    justify-content: center;
    align-items:center;
`;

const IconContainer=styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 4rem;
    @media screen and (max-width:768px){
        flex-direction:column;
        justify-content:center;
        align-items: center;
        text-align:center;
    }
`;
const IconWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    padding:2rem 1rem;
    
`;
const IconLink=styled.a`
    font-size:2rem;
    color: #fff;
    text-decoration:none;
    margin-right: 2rem;
    &:hover{
        color:#cd853f;
        transition:0.2s ease-in-out;
    }
`;
const ButtonWrapper=styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Let's find your dream home</h1>
                </ColumnLeft>
                <ColumnRight>
                    <Content>
                        <ContentLeft>
                            <Heading>Contact Us</Heading>
                            <FooterLink to='/'>FAQ</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Question</FooterLink>
                        </ContentLeft>
                        <ContentRight>
                            <Heading>Offices</Heading>
                            <FooterLink to='/'>United States</FooterLink>
                            <FooterLink to='/'>Europe</FooterLink>
                            <FooterLink to='/'>Myanmar</FooterLink>
                        </ContentRight>
                    </Content>
                </ColumnRight>
            </Container>
            <IconContainer>
                <IconWrapper>
                    <IconLink href='/' target='_blank'>
                        <FaYoutube />
                    </IconLink>
                    <IconLink href='/' target='_blank'>
                        <FaFacebook />
                    </IconLink>
                    <IconLink href='/' target='_blank'>
                        <FaInstagram />
                    </IconLink>
                    <IconLink href='/' target='_blank'>
                        <FaTwitter />
                    </IconLink>
                </IconWrapper>
                <ButtonWrapper>
                    <Button to='/'>
                        Let's Chat<IoMdArrowForward/>
                    </Button>
                </ButtonWrapper>
            </IconContainer>
        </Section>
    )
}

export default Footer
