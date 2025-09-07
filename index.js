const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const userRoutes = require("./routes/usersRoutes")

app.use("/kyc/api/kyc_users", userRoutes)
// app.use(express.urlencoded({ extended: true }));



// app.get("/test", async (req, res) => {
//   try {
//     // Requête très légère pour vérifier que la DB répond
//     const { rows } = await pool.query("SELECT NOW() AS now");
//     res.status(200).json({
//       ok: true,
//       message: "Server & DB OK",
//       dbTime: rows[0].now, // renvoie l'heure côté DB
//     });
//   } catch (err) {
//     console.error("DB test error:", err);
//     res.status(500).json({ ok: false, error: "DB unreachable" });
//   }
// });


// // Créer un utilisateur
// app.post("/users", async (req, res) => {
//   const { first_name, last_name, email, id_number, expiration_date } = req.body;

//   // Vérification minimale
//   if (!first_name || !last_name || !email) {
//     return res.status(400).json({
//       error: "first_name, last_name et email sont obligatoires"
//     });
//   }

//   try {
//     const insertSQL = `
//       INSERT INTO kyc_users (first_name, last_name, email, id_number, expiration_date)
//       VALUES ($1, $2, $3, $4, $5)
//       RETURNING *;
//     `;

//     const { rows } = await pool.query(insertSQL, [
//       first_name,
//       last_name,
//       email,
//       id_number || null,
//       expiration_date || null
//     ]);

//     res.status(201).json(rows[0]); // retourne l'utilisateur créé
//   } catch (err) {
//     if (err.code === "23505") { // email déjà existant
//       return res.status(409).json({ error: "Cet email existe déjà." });
//     }
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET /users - lister tous les utilisateurs
// app.get("/users", async (req, res) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM kyc_users ORDER BY id ASC");
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // GET /users/:id - récupérer un utilisateur spécifique
// app.get("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const { rows } = await pool.query("SELECT * FROM kyc_users WHERE id = $1", [id]);

//     if (rows.length === 0) {
//       return res.status(404).json({ error: "Utilisateur non trouvé" });
//     }

//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // PUT /users/:id - modifier un utilisateur
// app.put("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const { first_name, last_name, email, id_number, expiration_date, status } = req.body;

//   try {
//     const updateSQL = `
//       UPDATE kyc_users
//       SET first_name=$1, last_name=$2, email=$3, id_number=$4, expiration_date=$5, status=$6, updated_at=NOW()
//       WHERE id=$7 RETURNING *;
//     `;

//     const { rows } = await pool.query(updateSQL, [
//       first_name, last_name, email, id_number, expiration_date, status || "pending", id
//     ]);

//     if (rows.length === 0) {
//       return res.status(404).json({ error: "Utilisateur non trouvé" });
//     }

//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE /users/:id - supprimer un utilisateur
// app.delete("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const { rowCount } = await pool.query("DELETE FROM kyc_users WHERE id = $1", [id]);

//     if (rowCount === 0) {
//       return res.status(404).json({ error: "Utilisateur non trouvé" });
//     }

//     res.json({ message: `Utilisateur ${id} supprimé avec succès` });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



// //   } catch (err) {
// //     // Gestion propre des erreurs fréquentes
// //     // 23505 = violation contrainte unique (email déjà présent)
// //     if (err.code === "23505") {
// //       return res.status(409).json({ error: "Cet email existe déjà." });
// //     }
// //     console.error("POST /users error:", err);
// //     res.status(500).json({ error: "Erreur serveur" });
// //   }
// // });



//Demarrage du serveur

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})