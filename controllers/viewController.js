exports.viewHome = (req, res) => {
  res.status(200).render("index", {
    title: "Homepage",
  });
};
exports.aboutMe = (req, res) => {
  res.status(200).render("aboutMe", {
    title: "About",
  });
};
exports.webDevelopment = (req, res) => {
  res.status(200).render("webDevelopment", {
    title: "Mattia Yaghmai | Web Development",
  });
};
exports.maps = (req, res) => {
  res.status(200).render("maps", {
    title: "Mattia Yaghmai | Maps",
  });
};
exports.motionGraphics = (req, res) => {
  res.status(200).render("motionGraphics", {
    title: "Mattia Yaghmai | Motion Graphics",
  });
};
