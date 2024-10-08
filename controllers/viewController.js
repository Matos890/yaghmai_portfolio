exports.viewHome = (req, res) => {
  res.status(200).render("index", {
    isHomepage: true,
    title: "All Tour",
  });
};
exports.aboutMe = (req, res) => {
  res.status(200).render("aboutMe", {
    isHomepage: false,
    title: "About",
  });
};
exports.webDevelopment = (req, res) => {
  res.status(200).render("webDevelopment", {
    isHomepage: false,
    title: "Mattia Yaghmai | Web Development",
  });
};
exports.maps = (req, res) => {
  res.status(200).render("maps", {
    isHomepage: false,
    title: "Mattia Yaghmai | Maps",
  });
};
exports.motionGraphics = (req, res) => {
  res.status(200).render("motionGraphics", {
    isHomepage: false,
    title: "Mattia Yaghmai | Motion Graphics",
  });
};
