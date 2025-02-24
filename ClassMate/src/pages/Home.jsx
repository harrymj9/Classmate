import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue sur ClassMate !</h1>
      <p style={styles.description}>
        Une application dédiée à vous aider à organiser vos cours et emplois du temps à l'école !
      </p>

      {/* pour presenter notre école*/}
      <div style={styles.infoBox}>
        <h3 style={styles.subTitle}>Présentation de l'École Multimédia</h3>
        <p style={styles.schoolDescription}>
          Une école 100% dédiée aux métiers du digital. Première école numérique à Paris, l’École Multimédia forme depuis 1996 des milliers de professionnels.
          Webdesigners, Graphistes, Développeurs web, Community managers, Responsables Marketing digital, Directeurs artistiques, c’est à l’École Multimédia que l’on trouve les meilleures formations digitales.
        </p>
        <p style={styles.schoolDescription}>
          28 ans d’expérience, toujours à la pointe de l’innovation.
        </p>
        <Link to="https://www.ecole-multimedia.com/" style={styles.schoolLink} target="_blank"> { /* ce lien c'est pour le site officiel de l'école multimédia */}
          Découvrez notre école
        </Link>
      </div>

   

      {/* Section d'action pour l'utilisateur */}
      <div style={styles.actionBox}>
        <h3>Prêt à commencer ?</h3>
        <Link to="/ajouter" style={styles.button}>Ajouter un Cours</Link>
        <Link to="/calendrier" style={styles.button}>Voir le Calendrier</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px", 
    margin: "20px auto", 
    padding: "20px", 
    background: "#f7f7f7", 
    borderRadius: "8px", 
    textAlign: "center"
  },
  title: {
    fontSize: "28px", 
    color: "#4CAF50", 
    marginBottom: "20px"
  },
  description: {
    fontSize: "18px", 
    color: "#555", 
    marginBottom: "20px"
  },
  infoBox: {
    background: "#fff", 
    padding: "15px", 
    borderRadius: "8px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    marginBottom: "20px"
  },
  subTitle: {
    fontSize: "20px", 
    color: "#333", 
    marginBottom: "10px"
  },
  schoolDescription: {
    fontSize: "16px", 
    color: "#333", 
    lineHeight: "1.6"
  },
  schoolLink: {
    color: "#4CAF50", 
    textDecoration: "none", 
    fontWeight: "bold", 
    marginTop: "10px", 
    display: "inline-block"
  },
  list: {
    listStyleType: "none", 
    paddingLeft: "0", 
    fontSize: "16px", 
    color: "#333"
  },
  actionBox: {
    marginTop: "20px"
  },
  button: {
    display: "inline-block", 
    margin: "10px", 
    padding: "10px 20px", 
    background: "#4CAF50", 
    color: "#fff", 
    textDecoration: "none", 
    borderRadius: "5px", 
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Home;
