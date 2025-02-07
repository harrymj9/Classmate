import React, { useState } from "react";
import "../styles/AjouterCours.css"; // Fichier CSS à ajouter

const AjouterCours = ({ ajouterCours }) => {
  const [nomCours, setNomCours] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [salle, setSalle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauCours = { nomCours, date, heure, salle };
    ajouterCours(nouveauCours);

    // Réinitialisation du formulaire
    setNomCours("");
    setDate("");
    setHeure("");
    setSalle("");
  };

  return (
    <div className="ajouter-cours-container">
      <h2 className="ajouter-cours-title">Ajouter un Cours</h2>
      <form onSubmit={handleSubmit} className="ajouter-cours-form">
        <label>Nom du Cours :</label>
        <input 
          type="text" 
          value={nomCours} 
          onChange={(e) => setNomCours(e.target.value)} 
          required 
        />

        <label>Date :</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />

        <label>Heure :</label>
        <input 
          type="time" 
          value={heure} 
          onChange={(e) => setHeure(e.target.value)} 
          required 
        />

        <label>Salle :</label>
        <input 
          type="text" 
          value={salle} 
          onChange={(e) => setSalle(e.target.value)} 
          required 
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AjouterCours;
