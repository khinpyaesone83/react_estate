import React from 'react'
import {Button} from './Button';
import styled from 'styled-components';
import Image from '../images/home-5.jpg';

const Section=styled.section`
    width:100%;
    height:100%;
    background:#000d1a;
    margin-top:2rem;
    position:relative;
    @media screen and (max-width:768px){
        margin-bottom:5rem;
    }
`;
const Container=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:800px;
    padding:3rem;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }

`;
const ColumnLeft=styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
    line-height:1.4;
    padding:1rem 2rem;
    
`;

const Content=styled.div`
    padding:4rem 4rem;
    background:#fff;
    position:absolute;
    left:0px;
    max-width:50vw;
    z-index:1;
    h1{
        margin-bottom:1rem;
        font-size:clamp(1.5rem,6vw,2rem);
    }
    p{
        margin-bottom:1rem;
    }
    @media screen and (max-width:768px){
        max-width:100vw;
        top:150px;
    }

`;

const ColumnRight=styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    /* padding:1rem 2rem; */
    z-index: 2;
`;
const ImgContent=styled.div`
    position:absolute;
    /* background:#fff; */

    img{
        width: 100%;
        height:100%;
        object-fit:cover;
    }
    @media screen and (max-width:768px){
        /* padding:1rem 2rem; */
        top:450px;
    }
`;


const InfoSection3 = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <Content>
                        <h1>Stunning Interior</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio repellat voluptatibus voluptas illo ut mollitia, magnam quae quas iure ab?</p>
                        <Button>Learn More</Button>
                    </Content>
                </ColumnLeft>
                <ColumnRight>
                    <ImgContent>
                        <img src={Image} alt='home' />
                    </ImgContent>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection3
