import React from 'react'
import styled from 'styled-components';
import { menuData } from './../data/MenuData';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Button} from './Button';

const DropdownContainer=styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#cd853f;
    display:grid;
    align-items:center;
    top:${({isOpen})=>(isOpen?'0':'-100%')};
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen?'1':'0')};
`;
const Icon=styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;
const CloseIcon=styled(FaTimes)`
    color:#000d1a;
`;
const DropdownWrapper=styled.div`
`;
const DropdownMenu=styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3,80px);
    text-align:center;
    margin-bottom:4rem;
`;
const DropdownLink=styled(Link)`
    text-decoration:none;
    display:flex;
    color:#fff;
    align-items:center;
    justify-content: center;
    font-size:1.5rem;
    transition:0.2s ease-in-out;

    &:hover{
        color:#000d1a;
    }
`;
const BtnWrap=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

const Dropdown = ({toggle,isOpen}) => {
    return (
        <DropdownContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((menu,index)=>(
                        <DropdownLink to={menu.path} key={index}>
                            {menu.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>Contact Us</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
