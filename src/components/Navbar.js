/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../context/Auth";
import Professionnel from "../pages/Professionnel";
// import { UidContext } from './AppContext';
import Logout from "./Log/Logout";
import Professionnels from "./Professionnels";

const Navbar = () => {
  const { isAuthenticated } = useContext(Auth);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
              <h3>GlutenFree</h3>
            </div>
          </NavLink>
        </div>
        {isAuthenticated ? (
          <div className="professionel-navBar">
            <NavLink
              to="/professionel"
              style={{
                font: "bold",
                fontSize: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src="./img/icons/chef.png"
                alt="profil"
                style={{
                  width: 45,
                  height: 45,
                }}
              />
              <span>Professionnels</span>
            </NavLink>
          </div>
        ) : (
          <div className="professionel-navBar">
            <NavLink
              to="/profil"
              style={{
                font: "bold",
                fontSize: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src="./img/icons/chef.png"
                alt="profil"
                style={{
                  width: 45,
                  height: 45,
                }}
              />
              <span>Professionnels</span>
            </NavLink>
          </div>
        )}

        {isAuthenticated ? (
          <ul>
            <li></li>
            <li className="welcome">
              <h5>Bienvenue</h5>
              <NavLink to="/account">Mon compte</NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
