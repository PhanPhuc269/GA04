const express = require ('express');
const router =express.Router();

const sitesController= require('../app/controllers/SitesController');

router.get('/',sitesController.index); 
router.get('/registration',sitesController.viewRegistration);
//router.post('/login',sitesController.login);
//router.post('/register',sitesController.register);
//
//router.get('/product-details/:id',sitesController.ViewProductDetails);



module.exports = router;