import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import AjouterCours from "./pages/AjouterCours";
import ListeCours from "./pages/ListeCours";
import Calendrier from "./pages/Calendrier";


// Demander la permission pour les notifications
const demanderPermissionNotifications = () => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notifications activées !");
      } else {
        console.log("Notifications refusées.");
      }
    });
  }
};

function App() {
  // Charger les cours depuis LocalStorage au démarrage
  const [cours, setCours] = useState(() => {
    const coursStockes = localStorage.getItem("cours");
    return coursStockes ? JSON.parse(coursStockes) : [];
  });

  // Sauvegarder les cours dans LocalStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("cours", JSON.stringify(cours));
  }, [cours]);

  // Ajouter un nouveau cours
  const ajouterCours = (nouveauCours) => {
    setCours([...cours, nouveauCours]);
  };

  // Supprimer un cours
  const supprimerCours = (index) => {
    const nouveauxCours = cours.filter((_, i) => i !== index);
    setCours(nouveauxCours);
  };

  // Modifier un cours existant
  const modifierCours = (index, coursModifie) => {
    const nouveauxCours = [...cours];
    nouveauxCours[index] = coursModifie;
    setCours(nouveauxCours);
  };

  // Demander la permission de notifications au démarrage
  useEffect(() => {
    demanderPermissionNotifications();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajouter" element={<AjouterCours ajouterCours={ajouterCours} />} />
        <Route
          path="/planning"
          element={<ListeCours cours={cours} supprimerCours={supprimerCours} modifierCours={modifierCours} />}
        />
        <Route path="/calendrier" element={<Calendrier cours={cours} />} />
      </Routes>
    </Router>
  );
}

export default App;
