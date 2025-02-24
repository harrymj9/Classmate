import React, { useState } from "react";
import "../styles/Calendrier.css";

const Calendrier = ({ cours = [] }) => {

   //  pour suivre le mois et l'année actuellement affichés
  const [moisActuel, setMoisActuel] = useState(new Date().getMonth());
  const [anneeActuelle, setAnneeActuelle] = useState(new Date().getFullYear());
  const [evenementSelectionne, setEvenementSelectionne] = useState(null);

    // ici la liste des noms des mois pour l'affichage
  const moisNoms = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];


  // pour le calcul du nombre de jours dans le mois actuel
  const joursDuMois = new Date(anneeActuelle, moisActuel + 1, 0).getDate();


  // la fonction pour changer le mois affiché
  const changerMois = (direction) => {
    let newMois = moisActuel + direction;
    let newAnnee = anneeActuelle;

     // pour le changement d'année si on passe de décembre à janvier
    if (newMois < 0) {
      newMois = 11;
      newAnnee--;
    } else if (newMois > 11) {
      newMois = 0;
      newAnnee++;
    }

// pour la mise à jour des états 
    setMoisActuel(newMois);
    setAnneeActuelle(newAnnee);
    setEvenementSelectionne(null);
  };

    // pour la récupération  de la date d'aujourd'hui
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();


// la fonction appelée lorsqu'un jour du calendrier est cliqué
  const handleClick = (jour) => {

    // Recherche d'un événement correspondant à ce jour
    const evenement = cours.find((c) => {
      if (!c.date) return false;   // la vérification si la date existe bien
      const [annee, mois, jourStr] = c.date.split("-").map(Number);
      return jourStr === jour && mois - 1 === moisActuel && annee === anneeActuelle;
    });

    // Mise à jour de l'événement sélectionné (ou affichage d'un message par défaut)
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
