import React from 'react';
import {Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
        <NavLink to="/">
        <h1> Collect4Charity</h1>
        </NavLink>
        <Bars/>

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          <NavLink to="/services" activeStyle>
            Services
          </NavLink>

          <NavLink to="/charities" activeStyle>
            Charities
          </NavLink>

          <NavBtn>
          <NavBtnLink to="/login"> Log In</NavBtnLink>
        </NavBtn>

        </NavMenu>

        

    </Nav>
  )
}

export default Navbar;
