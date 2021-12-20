const fs = require("fs");

const db = require("../models");

//just changed it from const Image = db.images;
const Image = db.image;

const uploadFiles = async (req, res) => {
  try {

    // we get and check file upload from req.file.
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`Please select a file.`);
    }
    // save an Image object (type, name, data) to MySQL database
    // fs.readFileSync('/path/to/file') and fs.writeFileSync('/path/to/file', image.data) functions of Node.js fs module.
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};