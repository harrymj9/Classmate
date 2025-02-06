import React, { useState } from "react";

const AjouterCours = ({ ajouterCours }) => {
  const [nomCours, setNomCours] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [salle, setSalle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauCours = { nomCours, date, heure, salle };
    ajouterCours(nouveauCours); // Ajoute le cours à la liste globale

    // Réinitialiser le formulaire après ajout
    setNomCours("");
    setDate("");
    setHeure("");
    setSalle("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter un Cours</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nom du Cours :</label>
        <input 
          type="text" 
          value={nomCours} 
          onChange={(e) => setNomCours(e.target.value)} 
          required 
          style={styles.input}
        />

        <label>Date :</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
          style={styles.input}
        />

        <label>Heure :</label>
        <input 
          type="time" 
          value={heure} 
          onChange={(e) => setHeure(e.target.value)} 
          required 
          style={styles.input}
        />

        <label>Salle :</label>
        <input 
          type="text" 
          value={salle} 
          onChange={(e) => setSalle(e.target.value)} 
          required 
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Ajouter</button>
      </form>
    </div>
  );
};

const styles = {
  container: { 
    maxWidth: "500px", 
    margin: "30px auto", 
    padding: "20px", 
    backgroundColor: "#fff", 
    borderRadius: "8px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  },
  title: {
    color: "#8a6363",
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: { 
    display: "flex", 
    flexDirection: "column", 
    gap: "15px", 
  },
  input: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
    width: "100%",
  },
  button: {
    backgroundColor: "#ae00ff", 
    color: "#fff", 
    padding: "12px ", 
    border: "none", 
    borderRadius: "6px", 
    cursor: "pointer", 
    fontSize: "16px", 
    transition: "0.3s ease-in-out",
  },
};

export default AjouterCours;
