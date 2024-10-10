const express = require("express");
const path = require("path");
const viewRoute = require("./routes/viewRoute");
const dotenv = require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src"));

// Configurare la directory dei file statici
const parts = [__dirname, 'public'];
app.use(express.static(path.join()));

// Utilizzare la rotta definita
app.use("/", viewRoute);

// Avviare il server sulla porta 2000
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
