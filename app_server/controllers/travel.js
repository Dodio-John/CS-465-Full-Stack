const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');


/* GET home page. */
router.get('/', controller.travel);
module.exports = router;


/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
   };
   module.exports = {
    travel
   };
   