const express = require("express");
const picRoutes = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");


picRoutes.get("/", homeController.getHome);

picRoutes.post("/upload", upload.single("file"), uploadController.uploadFiles);



  module.exports = picRoutes