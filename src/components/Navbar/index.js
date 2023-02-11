import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/search' activeStyle>
                    Search
                </NavLink>
                <NavBtnLink to='/login'>
                    Login
                </NavBtnLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;