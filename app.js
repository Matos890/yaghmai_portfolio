const express = require("express");
const path = require("path");
const viewRoute = require("./routes/viewRoute");
const dotenv = require("dotenv").config({ path: path.join(__dirname, "config.env") });

const app = express();

app.use("/", viewRoute);

// Configurare la directory dei file statici
app.use(express.static(path.join(__dirname, "build")));

// Utilizzare la rotta definita
// Definire la rotta per la root prima del middleware statico
// Avviare il server sulla porta 5000
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
