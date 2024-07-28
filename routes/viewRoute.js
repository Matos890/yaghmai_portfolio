const express = require("express");
const viewsController = require("./../controllers/viewController");

const router = express.Router();
router.get("/", viewsController.viewHome);
router.get("/aboutMe", viewsController.aboutMe);
module.exports = router;
