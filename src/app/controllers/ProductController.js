const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const session = require('express-session');
const User = require('../models/User');
const crypto = require('crypto');
const Product = require("../models/Product");

class ProductController{
    async ViewProductListings(req, res, next) {
        try {
            const products = await Product.find();
            res.render('list-product', {
                products: mutipleMongooseToObject(products)
            });
           
        } catch (error) {
            next(error);
        }
    }

    async ViewProductDetails(req, res, next) {
        try {
            const product = await Product.findById(req.params.id);
            res.render('product-details', { product: mongooseToObject(product) });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();