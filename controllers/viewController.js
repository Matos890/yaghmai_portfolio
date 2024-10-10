exports.viewHome = (req, res) => {
  process.env.IS_HOMEPAGE = "true";
  res.status(200).render("index", {
    title: "Homepage",
  });
  console.log(process.env.IS_HOMEPAGE);
};

exports.aboutMe = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).render("aboutMe", {
    title: "About",
  });

  console.log("about", process.env.IS_HOMEPAGE);
};

exports.webDevelopment = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).render("webDevelopment", {
    title: "Mattia Yaghmai | Web Development",
  });
};
exports.maps = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).render("maps", {
    title: "Mattia Yaghmai | Maps",
  });
};
exports.motionGraphics = (req, res) => {
  process.env.IS_HOMEPAGE = "false";
  res.status(200).render("motionGraphics", {
    title: "Mattia Yaghmai | Motion Graphics",
  });
};
