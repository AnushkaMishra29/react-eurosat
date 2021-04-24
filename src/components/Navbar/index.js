import React from 'react';


const Navbar = () => {
return (
    <>
        <Nav>
            <NavLink to="/">
                <img src="../../images/img.jpg" alt="LOGO"/>
            </NavLink>
            <Bars>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/predict" activeStyle>
                        Predict
                    </NavLink>
                </NavMenu>
            </Bars>
        </Nav>
    </>
);
};