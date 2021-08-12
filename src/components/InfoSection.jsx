import React from 'react'
import styled from 'styled-components';
import {Button} from './Button';

const Section=styled.section`
    width:100%;
    height:100%;
    /* padding:0rem 0rem; */
`;
const Container=styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding:3rem calc((100vw - 1300px)/2);
    grid-template-rows: 800px; 

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`;
const ColumnLeft=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:flex-start;
    line-height:1.4;
    padding:1rem 2rem;
    /* order:${({reverse})=>(reverse?'1':'2')}; */

    h1{
        margin-bottom:1rem;
        font-size:clamp(1.5rem,6vw,2rem);
    }
    p{
        margin-bottom:2rem;
    }
`;
const ColumnRight=styled.div`
    padding:1rem 2rem;
    display:flex;
    justify-content: center;
    align-items:center;
    /* order:${({reverse})=>(reverse?'2':'1')} */

    img{
        width:100%;
        height:100%;
        object-fit:cover;

        @media screen and (max-width:768px){
            width:90%;
            height:90%;
        }
    }
`;

const InfoSection = ({data}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{data.heading}</h1>
                    <p>{data.paragraph}</p>
                    <Button to='/homes' primary='true'>{data.label}</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={data.image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
