const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET index page. */
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/formular', indexController.formular);
router.get('/galerie', indexController.galerie);
router.get('/cursuri', indexController.cursuri);
router.get('/desenul', indexController.desenul);
router.get('/pictura', indexController.pictura);
router.get('/sculptura', indexController.sculptura);
router.get('/istoria-artelor', indexController.istoraArtelor);    
router.get('/compozitia-de-savalet', indexController.compozitiaDeSavalet);  
router.get('/compozitia-decorativa', indexController.compozitiaDecorativa);  

module.exports = router;
