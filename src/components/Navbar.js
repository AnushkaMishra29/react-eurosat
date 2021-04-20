import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {MenuData} from '../data/MenuData';
import { Button } from './Button';


const Nav= styled.nav`
height:60px;
display:flex;
justify-content: space-between;
padding:1rem 2rem;
z-index:100;
positon: fixed;
width:100%;
background:red;
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
font-style: italic ;
`;

const MenuBars = styled.i``;

const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:-48px;
`;

const NavMenuLinks=styled(Link)`
${NavLink}
`;

const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;

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
            <NavBtn><Button to='/contact' primary='true'> Contact Me</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar