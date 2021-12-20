// First, we import multer module.

const multer = require("multer");

// filter the search to only files with name=image

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

// Next, we configure multer to use Disk Storage engine.

let storage = multer.diskStorage({

    //to determines folder to store the uploaded files

  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },

// to  determine the name of the file inside the destination folder.
// We add the [timestamp]-bezkoder- prefix to the file’s original name to make sure that the duplicates never occur.

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter });


module.exports = uploadFile;