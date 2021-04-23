import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa'

const Nav= styled.nav`
height:60px;
display:flex;
justify-content: space-between;
padding:1rem 2rem;
z-index:100;
positon: fixed;
width:100%;
`;

const NavLink=css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration: none;
`;

const Logo=styled(Link)`
  ${NavLink}
  font-style:italic;
`;

const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width: 768px){
    display:block;
    padding-top: 7px;
    color:#fff;
    background-size:contain;
    height:30px;
    width: 30px;
    cursor: pointer;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-50%, 35%);
}
`;

const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px){
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
@media screen and (max-width: 768px){
    display:none;
}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>AM</Logo>
            <MenuBars/>
            <NavMenu>
                {MenuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn><Button to='/contact' primary='true'> Contact Me </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
