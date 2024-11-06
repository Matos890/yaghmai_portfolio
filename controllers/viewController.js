const path = require("path");

exports.viewHome = (req, res) => {
  process.env.IS_HOMEPAGE = "true";
  res.status(200).sendFile(path.join(__dirname, "../build/index.html"));
  console.log(process.env.IS_HOMEPAGE);
  console.log("ciao perchè sono qui?");
};

exports.aboutMe = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/aboutMe.html"));
  console.log("about", process.env.IS_HOMEPAGE);
};

exports.webDevelopment = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res
    .status(200)
    .sendFile(path.join(__dirname, "../build/webDevelopment.html"));
};

exports.maps = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).sendFile(path.join(__dirname, "../build/maps.html"));
};

exports.motionGraphics = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res
    .status(200)
    .sendFile(path.join(__dirname, "../build/motionGraphics.html"));
};
exports.telegraphPage = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res
    .status(200)
    .sendFile(path.join(__dirname, "../build/telegraph.html"));
};
