const express = require("express");
const viewsController = require("./../controllers/viewController");

const router = express.Router();
router.get("/", viewsController.viewHome);
router.get("/aboutMe", viewsController.aboutMe);
router.get("/webDevelopment", viewsController.webDevelopment);
router.get("/maps", viewsController.maps)
router.get("/motionGraphics", viewsController.motionGraphics)
router.get("/telegraphPage", viewsController.telegraphPage)
module.exports = router;
