import React, { useState } from "react";

const ListeCours = ({ cours, supprimerCours, modifierCours }) => {
  const [indexCoursEdit, setIndexCoursEdit] = useState(null);
  const [coursModifie, setCoursModifie] = useState({
    nomCours: "",
    heure: "",
    salle: "",
  });

  const handleModifierClick = (index) => {
    const coursToEdit = cours[index];
    setIndexCoursEdit(index);
    setCoursModifie({
      nomCours: coursToEdit.nomCours,
      heure: coursToEdit.heure,
      salle: coursToEdit.salle,
    });
  };

  const handleModifierSubmit = (e) => {
    e.preventDefault();
    modifierCours(indexCoursEdit, coursModifie);
    setIndexCoursEdit(null);
    setCoursModifie({ nomCours: "", heure: "", salle: "" });
  };

  const handleSupprimerClick = (index) => {
    const confirmation = window.confirm("❌ Êtes-vous sûr de vouloir supprimer ce cours ?");
    if (confirmation) {
      supprimerCours(index);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📚 Liste des Cours</h2>

      {cours.length === 0 ? (
        <p style={styles.message}>Aucun cours ajouté.</p>
      ) : (
        <div style={styles.grid}>
          {cours.map((coursItem, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.courseTitle}>{coursItem.nomCours}</h3>
              <p style={styles.text}><span>⏰ Heure :</span> {coursItem.heure || "Non définie"}</p>
<p style={styles.text}><span>📅 Date :</span> {coursItem.date || "Non définie"}</p>
<p style={styles.text}><span>🏫 Salle :</span> {coursItem.salle || "Non définie"}</p>

              <div style={styles.buttonContainer}>
                <button onClick={() => handleSupprimerClick(index)} style={styles.deleteButton}>🗑️ Supprimer</button>
                <button onClick={() => handleModifierClick(index)} style={styles.editButton}>✏️ Modifier</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {indexCoursEdit !== null && (
        <form onSubmit={handleModifierSubmit} style={styles.form}>
          <h3>✏️ Modifier le Cours</h3>
          <label>Nom du Cours :</label>
          <input
            type="text"
            value={coursModifie.nomCours}
            onChange={(e) => setCoursModifie({ ...coursModifie, nomCours: e.target.value })}
            required
          />

          <label>Heure :</label>
          <input
            type="time"
            value={coursModifie.heure}
            onChange={(e) => setCoursModifie({ ...coursModifie, heure: e.target.value })}
            required
          />

          <label>Salle :</label>
          <input
            type="text"
            value={coursModifie.salle}
            onChange={(e) => setCoursModifie({ ...coursModifie, salle: e.target.value })}
            required
          />

          <button type="submit" style={styles.saveButton}>✅ Sauvegarder</button>
        </form>
      )}
    </div>
  );
};
//pour la mise en forme


const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    textAlign: "center",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: { color: "#333", fontSize: "26px", marginBottom: "20px" },
  message: { fontSize: "18px", color: "#777" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "10px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "left",
    borderLeft: "5px solid #007BFF",
    transition: "0.3s",
  },
  courseTitle: { 
    color: "#007BFF", 
    marginBottom: "10px", 
    fontSize: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  buttonContainer: { 
    display: "flex", 
    gap: "10px", 
    marginTop: "10px",
    flexWrap: "wrap",
  },
  deleteButton: {
    background: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
    flex: 1,
  },
  editButton: {
    background: "#007BFF",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
    flex: 1,
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    textAlign: "left",
  },
  saveButton: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};


export default ListeCours;
