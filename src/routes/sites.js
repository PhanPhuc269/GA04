const express = require ('express');
const router =express.Router();

const sitesController= require('../app/controllers/SitesController');

//router.get('/',sitesController.welcome);
router.get('/registration',sitesController.viewRegistration);
//router.post('/login',sitesController.login);
router.post('/register',sitesController.register);
// router.post('/product-listings',sitesController.ViewProductListings);
// router.post('/product-details/:slug',sitesController.ViewProductDetails);


module.exports = router;