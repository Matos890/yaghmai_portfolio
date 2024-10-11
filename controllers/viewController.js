const path = require("path");

exports.viewHome = (req, res) => {  console.log("Accesso alla homepage"); // Aggiungi questa riga
  process.env.IS_HOMEPAGE = "true";
res.status(200).sendFile(path.join(__dirname, "../build/index.html"));
  console.log(process.env.IS_HOMEPAGE);
  console.log('ei yo')
};

exports.aboutMe = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/aboutMe.html"));
  console.log("about", process.env.IS_HOMEPAGE);
};

exports.webDevelopment = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/webDevelopment.html"));
};

exports.maps = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/maps.html"));
};

exports.motionGraphics = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/motionGraphics.html"));
};
