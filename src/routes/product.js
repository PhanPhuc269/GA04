const express = require ('express');
const router =express.Router();
const productController= require('../app/controllers/ProductController');

 
router.get('/list',productController.ViewProductListings);
router.get('/detail/:id',productController.ViewProductDetails);


module.exports = router;