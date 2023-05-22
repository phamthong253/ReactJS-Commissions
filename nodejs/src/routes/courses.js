const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController')


router.use('/create',coursesController.create);
router.post('/store',coursesController.store);
router.get('/:id/edit',coursesController.edit);
router.put('/:id',coursesController.update);
router.patch('/:id/restore',coursesController.restore);
router.delete('/:id',coursesController.destroy);
router.use('/:slug',coursesController.show);

module.exports = router;