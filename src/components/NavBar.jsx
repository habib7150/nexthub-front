import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/NavBarStyle.css';
import NextHubLogo from '../assets/nexthub-logo.png';
import linkedin from '../assets/linkedin.png';

import facebook from '../assets/facebook.png';

import instagram from '../assets/instagram.png';

import twitter from '../assets/twitter.png';





const NavBar = () => {
    const navigate = useNavigate();
    const navigateTo =(route)=>{
        navigate(route);
    };
    return <>
      <nav id="nav-bar">
        <a href="">
            <img src={NextHubLogo} alt="Logo" />
        </a>
        <form>
            <div>
                <input type="search" id="search" name="navbar-search" />
                <button className="search-button">Search</button>
            </div>
            </form>
        <div className="left-icons-container">
            <img onClick={()=>{navigateTo()}} src={linkedin} alt="" />
            <img onClick={()=>{navigateTo()}} src={facebook} alt="" />
            <img onClick={()=>{navigateTo()}} src={instagram} alt="" />
            <img onClick={()=>{navigateTo()}} src={twitter} alt="" />
        </div>
        <div className="right-icons-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
        </div>
        
      </nav>
      
      
    </>
}

export default NavBar;
