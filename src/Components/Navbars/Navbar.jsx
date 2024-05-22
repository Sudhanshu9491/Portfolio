// import React from 'react'
// import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React, { useState,useRef } from "react";
import "./Navbar.css";
// import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  const [menu,setMenu] =useState("");
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
const openMenu = () => {
  if (menuRef.current) {
    menuRef.current.style.right = "0";
    setIsVisible(false); 
  }
};

const closeMenu = () => {
  if (menuRef.current) {
    menuRef.current.style.right = "-350px";
    setIsVisible(true); 
  }
};

  return (
    <div className="navbar">
      {/* <img className='logo' src={logo} alt="logo " /> */}
      <h2 className='h2' >Sudhanshu Mishra</h2>
      {/* <img src={menu_open} onClick={openMenu}  alt="menu_open" className='nav-mob-open'/> */}
      <>
        {isVisible && (<img src={menu_open} onClick={openMenu} alt="menu_open" className='nav-mob-open' />)}
      </>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="menu_close" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' offset={0} href='#home'><p onClick={()=>{setMenu("Home")}}>Home</p></AnchorLink> {menu=="ome"? <img src={underline}></img>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>{setMenu("About Me")}}>About Me</p></AnchorLink>{menu=="About Me"? <img src={underline}></img>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>{setMenu("Services")}}>Services</p></AnchorLink>{menu=="Services"? <img src={underline}></img>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#mywork'> <p onClick={()=>{setMenu("Portfolio")}}>MyWork</p></AnchorLink>{menu=="Portfolio"? <img src={underline}></img>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("Contact")}}>Contact</p></AnchorLink> {menu=="Contact"? <img src={underline}></img>:<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
    )
};

export default Navbar;