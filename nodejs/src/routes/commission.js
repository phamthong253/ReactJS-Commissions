const path = require('path')
const express = require('express');
const router = express.Router();
const commissionController = require('../app/controllers/CommissionController')
const multer = require('multer')
// multer middleware 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "./upload/"));
      console.log(storage)
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

const upload = multer({ storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
});

router.post('/',upload.single('tenfile'), commissionController.show);
router.get('/create',commissionController.create);
// router.post('/photos/upload',commissionController.sendUpload);
router.delete('/delete/:id',commissionController.delete);
router.use('/:slug',commissionController.empty);
module.exports = router;