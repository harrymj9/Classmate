import React, { useState } from "react";
import "../styles/Calendrier.css";

const Calendrier = ({ cours = [] }) => {
  const [moisActuel, setMoisActuel] = useState(new Date().getMonth());
  const [anneeActuelle, setAnneeActuelle] = useState(new Date().getFullYear());
  const [evenementSelectionne, setEvenementSelectionne] = useState(null);

  const moisNoms = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const joursDuMois = new Date(anneeActuelle, moisActuel + 1, 0).getDate();

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

  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const handleClick = (jour) => {
    const evenement = cours.find((c) => {
      if (!c.date) return false;
      const [annee, mois, jourStr] = c.date.split("-").map(Number);
      return jourStr === jour && mois - 1 === moisActuel && annee === anneeActuelle;
    });

    setEvenementSelectionne(evenement || { nomCours: "Aucun événement", heure: "", salle: "" });
  };

  return (
    <div className="calendrier-container">
      <h2 className="calendrier-title">📅 {moisNoms[moisActuel]} {anneeActuelle}</h2>
      
      <div className="calendrier-nav">
        <button onClick={() => changerMois(-1)}>◀ Précédent</button>
        <button onClick={() => changerMois(1)}>Suivant ▶</button>
      </div>

      <div className="calendrier-grid">
        {Array.from({ length: joursDuMois }, (_, i) => i + 1).map((jour) => {
          const evenement = cours.find((c) => {
            if (!c.date) return false;
            const [annee, mois, jourStr] = c.date.split("-").map(Number);
            return jourStr === jour && mois - 1 === moisActuel && annee === anneeActuelle;
          });

          const isToday = jour === currentDate && moisActuel === currentMonth && anneeActuelle === currentYear;

          return (
            <div
              key={jour}
              className={`calendrier-jour ${isToday ? "today" : ""} ${evenement ? "has-event" : ""}`}
              onClick={() => handleClick(jour)}
            >
              {jour}
            </div>
          );
        })}
      </div>

      {evenementSelectionne && (
        <div className="calendrier-details">
          <h3>Détails de l'événement</h3>
          <p><strong>Cours :</strong> {evenementSelectionne.nomCours}</p>
          {evenementSelectionne.heure && <p><strong>Heure :</strong> {evenementSelectionne.heure}</p>}
          {evenementSelectionne.salle && <p><strong>Salle :</strong> {evenementSelectionne.salle}</p>}
        </div>
      )}
    </div>
  );
};

export default Calendrier;
