const express = require ('express');
const router =express.Router();

const sitesController= require('../app/controllers/SitesController');

router.get('/',sitesController.home); 
router.get('/registration',sitesController.viewRegistration);
router.post('/register',sitesController.register);



module.exports = router;