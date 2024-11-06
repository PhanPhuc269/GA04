const express = require ('express');
const router =express.Router();
const productController= require('../app/controllers/ProductController');


router.get('/',productController.index); 
router.get('/list',productController.ViewProductListings);
router.get('/product-details/:id',productController.ViewProductDetails);


//router.post('/login',sitesController.login);
//router.post('/register',sitesController.register);
//
//router.get('/product-details/:id',sitesController.ViewProductDetails);



module.exports = router;