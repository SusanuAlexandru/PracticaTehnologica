const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

/* GET users listing. */
router.post('/formular', courseController.formular);

module.exports = router;
