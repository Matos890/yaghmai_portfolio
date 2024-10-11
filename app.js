const express = require("express");
const path = require("path");
const viewRoute = require("./routes/viewRoute");
const dotenv = require("dotenv").config({ path: path.join(__dirname, "config.env") });


const app = express();

// app.set("views", path.join(__dirname, "build"));

// Configurare la directory dei file statici
app.use(express.static(path.join(__dirname, "build")));

// Utilizzare la rotta definita

app.use("/", viewRoute);

// Avviare il server sulla porta 2000
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
