const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const restrict = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      req.session.error = 'Access denied!';
      res.redirect('/login');
    }
}

/* GET login page. */
router.get('/admin', restrict, adminController.courses);
router.get('/admin/courses', restrict, adminController.courses);

module.exports = router;
