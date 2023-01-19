import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import LoginAuth from "./loginAuth";
import logo from "../../Images/logo.png"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <NavLink to="/">

          <img src={logo} alt="" 
          style={{
            "width":"100px",
            "marginTop":"-20px"
          }}
          />
        </NavLink>

        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
          <li>

          <NavLink to="/products/men" 
          className="adddd"
          >Men</NavLink>
            </li>
            <li>
              <NavLink to="/products/women" 
          className="adddd"
              
              >Women</NavLink>
            </li>
            <li>
              <NavLink to="/"
          className="adddd"
              
              >Mobile</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <li 
            
            style={{
              "marginLeft":"-5em",
              "marginTop":"-1em"
            }}
            >

              <InputGroup
              variant="filled"
              size='sm'
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch />}
                />
                <Input type="tel"   focusBorderColor='black.400' placeholder="Search Product" />
              </InputGroup>
            </li>
            <li
               style={{
                "marginTop":"-1em"
              }}
            ><AiFillHeart/></li>
           
            <li
               style={{
                "marginTop":"-1em"
              }}
            >
            <NavLink to="/cart">
              
              
              <AiOutlineShoppingCart/>
              </NavLink>
              </li>

            <li
            style={{
              "marginTop":"-1em"
            }}
            >
              <LoginAuth />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <LoginAuth />

            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu
                style={{
                
                  "marginRight": "3em",
                }}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
