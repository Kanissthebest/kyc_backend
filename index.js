const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const userRoutes = require("./routes/usersRoutes")

app.use("/kyc/api/kyc_users", userRoutes)


//Demarrage du serveur

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})