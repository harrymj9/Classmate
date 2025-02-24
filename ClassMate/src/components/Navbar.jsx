import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* l'icone pour le menu burger du responsive design */}
      <div className="burger" onClick={() => setMenuOuvert(!menuOuvert)}>
        {menuOuvert ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      {/* notre menu*/}
      <div className={`menu ${menuOuvert ? "menu-ouvert" : ""}`}>
        <Link to="/" onClick={() => setMenuOuvert(false)}>Accueil</Link>
        <Link to="/ajouter" onClick={() => setMenuOuvert(false)}>Ajouter un Cours</Link>
        <Link to="/planning" onClick={() => setMenuOuvert(false)}>Planning</Link>
        <Link to="/calendrier" onClick={() => setMenuOuvert(false)}>Calendrier 📅</Link>
      </div>
    </nav>
  );
};

export default Navbar;
