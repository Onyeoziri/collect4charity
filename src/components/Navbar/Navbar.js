import React, { useState } from 'react';
import {Nav, 
  NavLink, 
  Bars, 
  NavMenu,
  NavBtn, 
  NavBtnLink,
  SideBarData
} from './NavbarElements';
import './navBar.css';
import { Link } from 'react-router-dom';
import * as AiIcon from 'react-icons/ai';
import logo from '../../assets/logoEdited2.png'


const Navbar = () => {


const [sideBar, setSideBar] = useState(false);
const showSideBar = () => {
  setSideBar(!sideBar)
}

  return (
    <div>
     <Nav>
        <NavLink to="/">
          <img src={logo} className='logo'/> <h1>   Collect4Charity</h1>
        </NavLink>
        
        

        <Bars onClick={showSideBar}/>
        <nav className={sideBar ? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to ='#' className='menu-bars'>
                <AiIcon.AiOutlineClose onClick={showSideBar}/>
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className= {item.cName} onClick={showSideBar}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        
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
    </div>
  )
}

export default Navbar;
