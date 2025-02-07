import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
       
      </div>
      <div>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/ajouter" style={styles.link}>Ajouter un Cours</Link>
        <Link to="/planning" style={styles.link}>Planning</Link>
        <Link to="/calendrier" style={styles.link}>Calendrier 📅</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#eb0e6a",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"

  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  link: {
    color: "black",
    textDecoration: "none",
    marginLeft: "15px",
    fontSize: "15px",
    fontFamily:"Times New Roman",
  },
};

export default Navbar;
