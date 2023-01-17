import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      {" "}
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>N</span>av
            <span>B</span>ar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products/:target">Product</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
         
            <li>
              {!isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              ) : (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              )}
            </li>

            <li>
              {isAuthenticated && (
                <>
                  <img
                    src={user.picture}
                    alt={user.name}
                    style={{
                      width: "60px",
                      borderRadius: "50px",
                      marginLeft: "25px",
                    }}
                  />
                  <p>{user.name}</p>
                </>
              )}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
