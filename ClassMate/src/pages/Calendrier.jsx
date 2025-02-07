import React, { useState } from "react";

const Calendrier = ({ cours }) => {
  const [moisActuel, setMoisActuel] = useState(new Date().getMonth()); // le mois actuel (0 = Janvier)
  const [anneeActuelle, setAnneeActuelle] = useState(new Date().getFullYear()); // l'année actuelle
  const [evenementSelectionne, setEvenementSelectionne] = useState(null);

  const moisNoms = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  // Pour l'obtention du nombre de jours du mois sélectionné pour l'année choisie
  const joursDuMois = new Date(anneeActuelle, moisActuel + 1, 0).getDate(); 

  // pour le changement de mois
  const changerMois = (direction) => {
    let newMois = moisActuel + direction;
    let newAnnee = anneeActuelle;
    if (newMois < 0) {
      newMois = 11;
      newAnnee--;
    } else if (newMois > 11) {
      newMois = 0;
      newAnnee++;
    }
    setMoisActuel(newMois);
    setAnneeActuelle(newAnnee);
    setEvenementSelectionne(null);
  };

  // l'obtention de la date actuelle
  const today = new Date();
  const currentDate = today.getDate(); // Le jour actuel
  const currentMonth = today.getMonth(); // Le mois actuel
  const currentYear = today.getFullYear(); // L'année actuelle

  // Afficher les événements du mois et de l'année sélectionnés
  const handleClick = (jour) => {
    const evenement = cours.find(
      (c) =>
        parseInt(c.date.split("-")[2]) === jour &&
        parseInt(c.date.split("-")[1]) - 1 === moisActuel &&
        parseInt(c.date.split("-")[0]) === anneeActuelle
    );
    setEvenementSelectionne(evenement || { nomCours: "Aucun événement", heure: "", salle: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 {moisNoms[moisActuel]} {anneeActuelle}</h2>
      
      <div style={styles.nav}>
        <button onClick={() => changerMois(-1)}>◀Précédent</button>
        <button onClick={() => changerMois(1)}>Suivant ▶</button>
      </div>

      <div style={styles.grid}>
        {Array.from({ length: joursDuMois }, (_, i) => i + 1).map((jour) => {
          const evenement = cours.find(
            (c) =>
              parseInt(c.date.split("-")[2]) === jour &&
              parseInt(c.date.split("-")[1]) - 1 === moisActuel &&
              parseInt(c.date.split("-")[0]) === anneeActuelle
          );

          // Vérification si c'est la date du jour
          const isToday = jour === currentDate && moisActuel === currentMonth && anneeActuelle === currentYear;

          return (
            <div
              key={jour}
              style={{
                ...styles.jour,
                background: isToday ? "#FF6347" : (evenement ? "#4CAF50" : "#ddd"),
                color: isToday ? "white" : (evenement ? "white" : "black"),
              }}
              onClick={() => handleClick(jour)}
            >
              {jour}
            </div>
          );
        })}
      </div>

      {evenementSelectionne && (
        <div style={styles.details}>
          <h3>Détails de l'événement</h3>
          <p><strong>Cours :</strong> {evenementSelectionne.nomCours}</p>
          {evenementSelectionne.heure && <p><strong>Heure :</strong> {evenementSelectionne.heure}</p>}
          {evenementSelectionne.salle && <p><strong>Salle :</strong> {evenementSelectionne.salle}</p>}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: "500px", margin: "20px auto", textAlign: "center" },
  title: { fontSize: "24px", color: "#333", marginBottom: "15px" },
  nav: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "10px", padding: "10px" },
  jour: {
    width: "40px", height: "40px",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "16px", fontWeight: "bold",
    borderRadius: "8px", cursor: "pointer", transition: "0.3s",
  },
  details: { marginTop: "20px", padding: "10px", background: "#eee", borderRadius: "5px", textAlign: "left" },
};

export default Calendrier;
