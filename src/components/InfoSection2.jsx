import React from 'react'
import { Button } from './Button';
import styled from 'styled-components';
import {IoMdArrowForward} from 'react-icons/io';
import ImageOne from '../images/home-3.jpg';
import ImageTwo from '../images/home-4.jpg';

const Section=styled.section`
    width:100%;
    height:100%;
`;
const Heading=styled.div`
    font-weight:900;
    font-size:clamp(1.5rem,6vw,2rem);
    display:flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction:column;
`;

const Container=styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    margin-top:1rem;
    padding:3rem calc((100vw - 1300px)/2);

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`;
const ColumnLeft=styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    line-height:1.5;
    padding:1rem 2rem;
    

    img{
        width:100%;
        height:100%;
        object-fit: cover;

    }
    h2{
        margin-bottom:1rem;
    }

`;
const ColumnRight=styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    line-height:1.5;
    padding:1rem 2rem;
    margin-top: 9rem;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    h2{
        margin-bottom:1rem;
    }
`;
const Content=styled.div`
    align-items: flex-start;
    margin-top:1rem;

`;

const Icon = styled(IoMdArrowForward)`
    margin-left: 0.4rem;
`;

const InfoSection2 = () => {
    return (
        <>
        <Section>
            <Heading>
                Views Our Newest Homes
            </Heading>
            <Container>
                <ColumnLeft>
                    <img src={ImageOne} alt='house' />
                    <Content>
                        <h2>8 bed 10 bath house in Venice,California</h2>
                        <Button to='/homes' style={{maxWidth:'160px'}} primary='true'>
                            View Details <Icon />
                        </Button>
                    </Content>
                </ColumnLeft>
                <ColumnRight>
                    <img src={ImageTwo} alt='house' />
                    <Content>
                        <h2>2 bed 4 bath house in Miami,Florida</h2>
                        <Button to='/homes' style={{maxWidth:'160px'}} primary='true'>
                            View Details<Icon />
                        </Button>
                    </Content>
                </ColumnRight>
            </Container>
        </Section>
        </>
    )
}

export default InfoSection2
