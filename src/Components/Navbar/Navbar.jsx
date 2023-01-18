import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
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

          <NavLink to="/products/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/products/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/">Mobile</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <li 
            
            style={{
              "marginLeft":"-5em"
            }}
            >

              <InputGroup
              variant="filled"
              size='lg'
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch />}
                />
                <Input type="tel"   focusBorderColor='black.400' placeholder="Search Product" />
              </InputGroup>
            </li>
            <li><AiFillHeart/></li>
           
            <li>
            <NavLink to="/cart">
              
              
              <AiOutlineShoppingCart/>
              </NavLink>
              </li>

            <li>
              <LoginAuth />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <LoginAuth />

            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu
                style={{
                  marginTop: "20px",
                  marginLeft: "20px",
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
