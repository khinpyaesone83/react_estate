import React, { useState } from 'react'
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    height:60px;
    /* background:red; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 2rem;
    position:fixed;
    z-index:100;
    width:100%;
    background:${({navbar})=>(navbar?'#cd853f':'')};
    
`;

const NavLink=css`
    color:#fff;
    text-decoration:none;
    display:flex;
    align-items: center;
    justify-content:center;
    height:100%;
    padding:0 1rem;
`;
const Logo =styled(Link)`
    ${NavLink}
    font-style:italic;
`;

const MenuBars=styled(FaBars)`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        color:#fff;
        font-size:1.5rem;
        cursor:pointer;
        /* position:absolute;
        top:0;
        right:0;
        transform:translate(-50%,35%); */
    }
`;

const NavMenu=styled.div`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`;
const NavMenuLinks=styled(Link)`
    ${NavLink}
`;

const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

@media screen and (max-width:768px){
        display:none;
    }
`;

const Navbar = ({toggle}) => {
    const [navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=50){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll',changeBackground);

    return (
        <Nav navbar={navbar}>
            <Logo to='/'>Estate</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            
            <NavBtn>
                <Button to='/contact' primary>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
