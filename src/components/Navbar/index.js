
import React, { useEffect }  from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import { ReactComponent as YourSvg } from './comparekarma_banner_logo.svg';
  
  const handleLogout = () => {
    
    // remove isLoggedIn key from sessionStorage
    sessionStorage.setItem('isLoggedIn', false); 
    console.log("checking the logout function "+ sessionStorage.getItem("isLoggedIn"));
   
    sessionStorage.setItem('business_id', null)
    console.log("checking the business ID "+ sessionStorage.getItem("business_id"));
   // setIsLoggedIn(false);
   this.forceUpdate() 
}



const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
    console.log("isLoggedIn in Navbar:", isLoggedIn);
  
   
  return (
    <>
        <Nav>
            <NavLink to="/">
                  <YourSvg className='comparekarma-svg'/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' >
                    About
                </NavLink>
                <NavLink to='/search' >
                    Search
                </NavLink>
                {isLoggedIn && (
            <NavLink to='/dashboard'>
              Dashboard
            </NavLink>
          )}
                 {isLoggedIn && (
            <NavLink to='/post'>
              Post
            </NavLink>
          )}
                       {!isLoggedIn && (
            <NavBtnLink to='/login'>
              Login
            </NavBtnLink>
          )}
                {isLoggedIn && (
            <NavBtnLink to='/' onClick={handleLogout}>
              Logout
            </NavBtnLink>
          )}
                
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;